import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";

function CompanionPhoneMockup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40% 0px -10% 0px" });
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => setExpanded(true), 1200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="bg-[#0F172A] rounded-[20px] overflow-hidden shadow-2xl border border-slate-700/50 max-w-[320px] mx-auto">
      <div className="bg-[#1E293B] border-b border-white/[0.07] px-3 py-2.5 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-[#2563EB] rounded-[5px] flex items-center justify-center">
            <svg width="10" height="10" viewBox="0 0 15 15" fill="none"><path d="M2 12L6 8L9 11L13 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 5H13V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <span className="text-white text-xs font-bold">ShowRev</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400">Offline ready</span>
        </div>
      </div>

      <div className="px-2 py-1.5 flex gap-1 border-b border-white/[0.07]">
        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full bg-[#2563EB] text-white">All</span>
        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border border-white/[0.07] text-slate-400">Tier A</span>
        <span className="text-[9px] font-medium px-2 py-0.5 rounded-full border border-white/[0.07] text-slate-400">Tier B</span>
      </div>

      <div className="px-2 py-1 text-[8px] font-semibold text-slate-500 uppercase tracking-wider">
        Priority Accounts · 4 of 32
      </div>

      <div className="px-2 pb-2 space-y-1.5">
        {/* Summit Networks - collapsed */}
        <div className="bg-[#1E293B] border border-white/[0.07] rounded-lg px-2.5 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 bg-emerald-500/15 text-emerald-400">A</div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-white truncate">Summit Networks</div>
            <div className="text-[9px] text-slate-500">Enterprise SaaS · Denver, CO</div>
          </div>
          <div className="flex flex-col items-end gap-0.5 shrink-0">
            <span className="font-mono text-[10px] font-medium text-white">$150K</span>
            <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-red-500/12 text-red-400">HOT</span>
          </div>
        </div>

        {/* Meridian Platform - auto-expands */}
        <div className={`bg-[#1E293B] border rounded-lg overflow-hidden transition-colors duration-500 ${expanded ? "border-blue-500/50" : "border-white/[0.07]"}`}>
          <div className="px-2.5 py-2 flex items-center gap-2">
            <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 bg-emerald-500/15 text-emerald-400">A</div>
            <div className="flex-1 min-w-0">
              <div className="text-[11px] font-semibold text-white truncate">Meridian Platform</div>
              <div className="text-[9px] text-slate-500">Enterprise SaaS · Chicago, IL</div>
            </div>
            <div className="flex flex-col items-end gap-0.5 shrink-0">
              <span className="font-mono text-[10px] font-medium text-white">$900K</span>
              <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-red-500/12 text-red-400">HOT</span>
            </div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={expanded ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <div className="px-2.5 pb-2.5 pt-1 border-t border-white/[0.07] space-y-2">
              <div>
                <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Pain Hypothesis</div>
                <div className="text-[10px] leading-relaxed text-white/85">Multi-product deployment cycles create massive coordination burden. Each product line has different integration standards and approval workflows.</div>
              </div>

              <div>
                <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Conversation Starter</div>
                <div className="text-[10px] leading-relaxed text-white/85 italic">"When you're rolling out Platform A and B simultaneously, how much rework happens because deployment packages don't align?"</div>
              </div>

              <div>
                <div className="text-[8px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Key Stakeholders</div>
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-500/12 flex items-center justify-center text-[8px] font-semibold text-[#2563EB]">DM</div>
                    <div className="flex-1">
                      <span className="text-[10px] font-medium text-white">Dan Mitchell</span>
                      <span className="text-[9px] text-slate-500 ml-1">SVP Product</span>
                    </div>
                    <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-emerald-500/12 text-emerald-400">Champion</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-blue-500/12 flex items-center justify-center text-[8px] font-semibold text-[#2563EB]">SL</div>
                    <div className="flex-1">
                      <span className="text-[10px] font-medium text-white">Sarah Lin</span>
                      <span className="text-[9px] text-slate-500 ml-1">VP Engineering</span>
                    </div>
                    <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-blue-500/12 text-blue-400">Buyer</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-500/8 border border-blue-500/20 rounded-md px-2 py-1.5">
                <div className="text-[8px] font-semibold text-[#60A5FA] uppercase tracking-wider mb-0.5">Proof Point</div>
                <div className="text-[9px] text-white/80 leading-relaxed">Similar multi-product complexity: cut deployment rework by 70% in first 90 days.</div>
              </div>

              <div className="flex gap-1.5">
                <button className="flex-1 py-1.5 rounded-md border border-white/[0.07] text-[9px] font-medium text-slate-300">Tag Conversation</button>
                <button className="flex-1 py-1.5 rounded-md bg-[#2563EB] text-[9px] font-medium text-white">Book MR25</button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Atlas Global - collapsed */}
        <div className="bg-[#1E293B] border border-white/[0.07] rounded-lg px-2.5 py-2 flex items-center gap-2">
          <div className="w-6 h-6 rounded-md flex items-center justify-center text-[10px] font-bold shrink-0 bg-emerald-500/15 text-emerald-400">A</div>
          <div className="flex-1 min-w-0">
            <div className="text-[11px] font-semibold text-white truncate">Atlas Global</div>
            <div className="text-[9px] text-slate-500">Enterprise SaaS · Boston, MA</div>
          </div>
          <div className="flex flex-col items-end gap-0.5 shrink-0">
            <span className="font-mono text-[10px] font-medium text-white">$500K</span>
            <span className="text-[8px] font-semibold px-1 py-0.5 rounded bg-red-500/12 text-red-400">HOT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Plays() {
  return (
    <section className="relative py-20 md:py-24 bg-navy text-white px-6" data-testid="section-plays">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Product capabilities.</h2>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
            Three tools that make ShowRev different from anything else on the market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Play 1: Personalized Microsites */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/20 text-[#60A5FA] text-xs font-semibold uppercase tracking-wider mb-4">
                Pre-Show
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">Personalized Microsites</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Every Tier A prospect gets a custom landing page. Their company name, pain point, proof point, and a one-click meeting booker.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-2xl border-t-2 border-t-[#2563EB] border border-white/[0.08] overflow-hidden flex-1">
              {/* Dark browser chrome */}
              <div className="bg-[#0F172A] px-3 py-2 flex items-center gap-2 border-b border-white/[0.08]">
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-red-500/40" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/40" />
                  <div className="w-2 h-2 rounded-full bg-emerald-500/40" />
                </div>
                <div className="flex-1 bg-white/[0.06] rounded px-2 py-0.5 text-[9px] text-slate-500 font-mono">
                  arcline.com/saasconnect/summit
                </div>
              </div>

              <div className="p-4">
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#2563EB]/15 text-[#60A5FA] text-[8px] font-semibold mb-3">
                  SaaS Connect 2026 · Oct 14-16 · Austin
                </div>

                <h4 className="text-[#60A5FA] text-sm font-bold leading-snug mb-0.5">Summit Networks</h4>
                <p className="text-white text-xs font-semibold leading-snug mb-3">
                  is onboarding 200+ enterprise clients a year. What happens when every deployment is different?
                </p>

                <p className="text-slate-400 text-[10px] leading-relaxed mb-3">
                  Every new client brings its own integrations and compliance requirements. That's a deployment complexity problem that compounds every quarter.
                </p>

                <div className="bg-white/[0.04] border border-white/[0.08] rounded-lg p-3 mb-3">
                  <div className="text-[8px] font-semibold text-[#60A5FA] uppercase tracking-wider mb-1">Similar Scale</div>
                  <div className="text-base font-bold text-white mb-0.5">6 weeks to 8 days</div>
                  <div className="text-[9px] text-slate-400">Enterprise onboarding time after deploying Arcline</div>
                </div>

                <div className="bg-[#2563EB] text-white text-center rounded-lg py-2 text-[11px] font-semibold mb-1.5">
                  Book 20 min with Arcline at SaaS Connect
                </div>
                <div className="border border-white/[0.12] text-center rounded-lg py-2 text-[11px] font-medium text-slate-300">
                  Or reply to this email and we'll set it up
                </div>
              </div>
              <p className="text-center text-[10px] text-slate-500 pb-3 italic">One per Tier A account</p>
            </div>
          </motion.div>

          {/* Play 2: Booth Companion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
                At-Show
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">Booth Companion</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Your team walks in with intelligence on every account, offline and on. Pain hypothesis, conversation starters, stakeholder maps, all in their pocket.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-2xl p-4 border-t-2 border-t-amber-500 border border-white/[0.08] flex-1 flex flex-col justify-center">
              <CompanionPhoneMockup />
            </div>
          </motion.div>

          {/* Play 3: Revenue Velocity Engine */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col"
          >
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                Post-Show
              </div>
              <h3 className="font-display font-bold text-xl mb-2 text-white">Revenue Velocity Engine</h3>
              <p className="text-slate-400 font-sans text-sm leading-relaxed">
                Plaud captures every booth conversation. AI layers in account intelligence, drafts personalized follow-ups, and AE approves. Conversations turn into revenue in hours, not weeks.
              </p>
            </div>

            <div className="bg-[#1E293B] rounded-2xl border-t-2 border-t-emerald-500 border border-white/[0.08] overflow-hidden flex-1 flex flex-col">
              <div className="px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                <span className="font-display font-bold text-sm text-white">Summit Networks</span>
                <span className="text-[9px] font-semibold px-2 py-0.5 rounded bg-[#2563EB]/20 text-[#60A5FA]">Tier A · MR25</span>
              </div>

              <div className="px-4 py-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                    <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                  </div>
                  <span className="text-xs font-semibold text-white">Voice recap captured</span>
                  <span className="ml-auto text-[10px] text-slate-500">3:15 PM</span>
                </div>
                <div className="bg-amber-500/10 border-l-2 border-amber-500 px-3 py-2 rounded-r-lg">
                  <div className="text-[8px] font-semibold text-amber-400 uppercase tracking-wider mb-1">Tim's Recap</div>
                  <p className="text-[10px] text-slate-300 leading-relaxed">
                    MR25 meeting with Mark Sullivan, SVP Ops. Biggest pain: integration configs and compliance at scale. Interested in automation engine.
                  </p>
                </div>
              </div>

              <div className="px-4 py-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5 mb-2">
                  <div className="w-4 h-4 rounded-full bg-amber-500 flex items-center justify-center text-white text-[8px] font-bold">2</div>
                  <span className="text-xs font-semibold text-white">AI draft ready</span>
                  <span className="ml-auto text-[10px] text-slate-500">SLA: 4 hrs</span>
                </div>
                <div className="bg-white/[0.05] border border-white/[0.08] rounded-lg p-3">
                  <div className="text-[9px] text-slate-500 mb-1">From: david@arcline.com</div>
                  <div className="text-[9px] text-slate-500 mb-1.5">To: m.sullivan@summitnetworks.io</div>
                  <div className="text-xs font-semibold mb-1.5 text-white">re: enterprise onboarding automation</div>
                  <p className="text-[10px] text-slate-400 leading-relaxed mb-2">
                    Hey Mark, Great conversation at SaaS Connect today. Our automation engine can ingest integration requirements and compliance docs in bulk, flag conflicts, and generate deployment packages automatically.
                  </p>
                  <div className="flex gap-1.5">
                    <button className="bg-emerald-600 text-white text-[10px] font-semibold px-3 py-1.5 rounded-lg">Approve and send</button>
                    <button className="border border-white/[0.15] text-[10px] font-medium px-3 py-1.5 rounded-lg text-slate-300">Edit draft</button>
                  </div>
                </div>
              </div>

              <div className="px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-4 h-4 rounded-full bg-white/[0.08] flex items-center justify-center text-slate-500 text-[8px] font-bold">3</div>
                  <span className="text-[11px] font-medium text-slate-500">Sent and logged to HubSpot</span>
                </div>
                <span className="text-[10px] text-slate-500">Pending</span>
              </div>

              <div className="border-t border-white/[0.08] px-4 py-2 text-center mt-auto">
                <p className="text-[9px] text-slate-500 italic">Recap to revenue in under 4 hours</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
