import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const searchTerms = [
  "LinkedIn Sales Navigator · VP Operations",
  "10-K filing · revenue growth 47% YoY",
  "Series C · $85M raised · lead investor Accel",
  "Glassdoor · 340 employees · engineering heavy",
  "G2 reviews · migration pain mentioned 12x",
  "Board member → ex-CTO at Snowflake",
  "Job postings · 3 open DevOps roles · scale signal",
  "CRM data · last touch 8 months ago",
  "Patent filing · automated deployment pipeline",
  "Conference speaker · CTO panel at SaaStr",
  "Competitor displacement · moved off legacy vendor Q3",
  "Org chart · 4 layers to economic buyer",
  "Trigger event · new VP Sales hired 3 weeks ago",
  "Annual report · $12M spent on professional services",
  "News · acquired DataBridge for $30M · integration pain",
];

const dataSources = [
  "LinkedIn Sales Nav",
  "SEC Filings",
  "HubSpot CRM",
  "G2 Reviews",
  "Apollo.io",
  "Patent DB",
  "News API",
  "Glassdoor",
  "Job Boards",
  "Conference Data",
];

function IntelAnimation() {
  const [phase, setPhase] = useState<"idle" | "scanning" | "complete">("idle");
  const [visibleTerms, setVisibleTerms] = useState<number[]>([]);
  const [activeSources, setActiveSources] = useState<number[]>([]);
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current) return;
    hasRun.current = true;

    const delay = setTimeout(() => {
      setPhase("scanning");

      let termIdx = 0;
      const termInterval = setInterval(() => {
        if (termIdx < 12) {
          setVisibleTerms((prev) => [...prev.slice(-4), termIdx]);
          termIdx++;
        }
      }, 280);

      let srcIdx = 0;
      const srcInterval = setInterval(() => {
        if (srcIdx < dataSources.length) {
          setActiveSources((prev) => [...prev, srcIdx]);
          srcIdx++;
        }
      }, 350);

      let prog = 0;
      const progInterval = setInterval(() => {
        prog += 2 + Math.random() * 4;
        if (prog > 100) prog = 100;
        setProgress(prog);
        if (prog >= 100) clearInterval(progInterval);
      }, 100);

      setTimeout(() => {
        clearInterval(termInterval);
        clearInterval(srcInterval);
        setPhase("complete");
      }, 3800);
    }, 500);

    return () => clearTimeout(delay);
  }, [isInView]);

  return (
    <div ref={ref} className="bg-[#1E293B] border border-white/[0.08] rounded-2xl overflow-hidden max-w-2xl mx-auto">
      {/* Header */}
      <div className="px-6 py-4 border-b border-white/[0.08] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M7 12A5 5 0 107 2a5 5 0 000 10zM14 14l-3.5-3.5" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold text-white">Pre-Show Intelligence Engine</div>
            <div className="text-[11px] text-slate-500">Deep research across 50 target accounts · 3 buying personas</div>
          </div>
        </div>
        <AnimatePresence mode="wait">
          {phase === "scanning" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
              <span className="text-[11px] text-amber-400 font-medium">Researching...</span>
            </motion.div>
          )}
          {phase === "complete" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-[11px] text-emerald-400 font-medium">50 briefs ready</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Body */}
      <div className="relative min-h-[220px]">
        <AnimatePresence mode="wait">
          {(phase === "idle" || phase === "scanning") && (
            <motion.div
              key="scanning"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -10 }}
              className="p-6"
            >
              {/* Data source pills */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {dataSources.map((src, i) => (
                  <motion.span
                    key={src}
                    initial={{ opacity: 0.2 }}
                    animate={{
                      opacity: activeSources.includes(i) ? 1 : 0.2,
                      scale: activeSources.includes(i) ? 1 : 0.95,
                    }}
                    className={`text-[10px] font-medium px-2 py-0.5 rounded-full border transition-colors ${
                      activeSources.includes(i)
                        ? "bg-[#2563EB]/15 border-[#2563EB]/30 text-[#60A5FA]"
                        : "border-white/[0.05] text-slate-600"
                    }`}
                  >
                    {src}
                  </motion.span>
                ))}
              </div>

              {/* Streaming search results */}
              <div className="space-y-1 font-mono text-[11px] overflow-hidden h-[100px]">
                <AnimatePresence>
                  {visibleTerms.map((idx) => (
                    <motion.div
                      key={`term-${idx}-${Date.now()}-${Math.random()}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center gap-2 text-slate-400"
                    >
                      <span className="text-[#2563EB]">→</span>
                      <span className="truncate">{searchTerms[idx]}</span>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Progress bar */}
              <div className="mt-5">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] text-slate-500 font-medium">Building intelligence briefs</span>
                  <span className="text-[10px] text-slate-500 font-mono">{Math.round(progress)}%</span>
                </div>
                <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#2563EB] rounded-full"
                    style={{ width: `${progress}%` }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          {phase === "complete" && (
            <motion.div
              key="complete"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6"
            >
              <div className="grid grid-cols-3 gap-4 mb-5">
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-white mb-1">50</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Account Briefs</div>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-[#60A5FA] mb-1">3</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Buying Personas</div>
                </div>
                <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4 text-center">
                  <div className="text-2xl font-display font-bold text-emerald-400 mb-1">150</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Stakeholders Mapped</div>
                </div>
              </div>

              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded bg-emerald-500/15 flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  </div>
                  <span className="text-sm font-semibold text-white">Sample: Summit Networks</span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Tier A</span>
                </div>
                <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-[11px]">
                  <div className="flex justify-between"><span className="text-slate-500">Pain hypothesis</span><span className="text-emerald-400">Mapped</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Stakeholder map</span><span className="text-emerald-400">3 contacts</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Trigger signals</span><span className="text-emerald-400">4 found</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Conversation starters</span><span className="text-emerald-400">Ready</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Proof points</span><span className="text-emerald-400">2 matched</span></div>
                  <div className="flex justify-between"><span className="text-slate-500">Sensitive intel</span><span className="text-amber-400">1 flagged</span></div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function IntelBrief() {
  return (
    <section className="relative py-16 md:py-20 bg-ice text-navy px-6" data-testid="section-intel-brief">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">It all starts with intelligence.</h2>
          <p className="text-lg text-[#334155] font-sans max-w-xl mx-auto">
            Deep pre-show research on up to 50 targets across 3 buying personas. Delivered before your team ever gets on a plane.
          </p>
        </motion.div>

        <IntelAnimation />
      </div>
    </section>
  );
}
