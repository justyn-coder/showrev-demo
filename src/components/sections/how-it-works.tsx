import { motion } from "framer-motion";
import { Search, Radio, Zap, ArrowRight } from "lucide-react";

const phases = [
  {
    icon: Search,
    phase: "Pre-Show",
    timeline: "6-8 weeks before",
    outcome: "Walk in with meetings already booked.",
    activities: [
      "Deep intelligence briefs on 50 target accounts",
      "ICP scoring and Tier A/B ranking in HubSpot",
      "Personalized outreach sequences (2-3 personas)",
      "Custom microsites per Tier A account",
      "Meeting pre-booking and booth strategy",
    ],
    goal: "15+ qualified meetings pre-booked",
    goalLabel: "Target",
  },
  {
    icon: Radio,
    phase: "At-Show",
    timeline: "During the event",
    outcome: "Every conversation captured. Nothing lost.",
    activities: [
      "Real-time voice capture via Plaud.ai",
      "Account briefs on your phone at the booth",
      "Nightly pipeline scoring and daily huddles",
      "Tier-based conversation tracking",
      "Live dashboard for leadership visibility",
    ],
    goal: "100% of conversations logged to CRM same-day",
    goalLabel: "Standard",
  },
  {
    icon: Zap,
    phase: "Post-Show",
    timeline: "First 30 days",
    outcome: "Leave with pipeline momentum, not business cards.",
    activities: [
      "AI-drafted follow-ups from conversation context",
      "AE review, approve, and send within 24 hours",
      "5-touch personalized sequences per contact",
      "CRM enrichment and pipeline creation",
      "ROI scorecard and board-ready report",
    ],
    goal: "Speed to revenue: pipeline built in 30 days, not 90",
    goalLabel: "Momentum",
  },
];

export function HowItWorks() {
  return (
    <section className="py-20 md:py-24 bg-navy text-white px-6" data-testid="section-how-it-works">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">How It Works</h2>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
            Three phases. Clear ownership. Your team shows up prepared and leaves with pipeline, not business cards.
          </p>
        </motion.div>

        {/* Phase arrow connector - desktop only */}
        <div className="hidden md:flex items-center justify-center gap-2 mb-12 mt-8">
          {phases.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="px-4 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.1] text-sm font-display font-semibold text-slate-300">
                {p.phase}
              </div>
              {i < phases.length - 1 && <ArrowRight className="w-4 h-4 text-slate-600" />}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-[#1E293B] border border-white/[0.08] rounded-2xl p-7 flex flex-col"
              data-testid={`phase-card-${i}`}
            >
              {/* Phase header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
                  <phase.icon className="w-5 h-5 text-[#60A5FA]" />
                </div>
                <div>
                  <div className="font-display font-bold text-lg text-white">{phase.phase}</div>
                  <div className="text-xs text-slate-500">{phase.timeline}</div>
                </div>
              </div>

              {/* Outcome headline */}
              <p className="text-[#60A5FA] font-sans font-semibold text-[15px] mb-5 mt-2">
                {phase.outcome}
              </p>

              {/* Activities */}
              <ul className="space-y-2.5 mb-6 flex-1">
                {phase.activities.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#2563EB] shrink-0 mt-1.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Goal metric */}
              <div className="bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-3 mt-auto">
                <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider mb-1">{phase.goalLabel}</div>
                <div className="text-sm font-semibold text-white">{phase.goal}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-2.5 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="36" height="36" className="shrink-0">
              <rect x="4" y="4" width="56" height="56" rx="12" fill="#0F172A" />
              <line x1="12" y1="40" x2="22" y2="40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
              <polyline points="22,40 27,40 32,14 37,40 42,40" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="42" y1="40" x2="52" y2="40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-xl md:text-2xl font-display font-bold text-white tracking-tight mb-2">
            From booth to pipeline. Every show.
          </p>
          <p className="text-slate-400 font-sans max-w-md text-sm leading-relaxed">
            ShowRev doesn't just quarterback your trade show. We build the road to revenue. Preparation, capture, follow-up, momentum. Repeat.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
