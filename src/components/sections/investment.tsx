import { motion } from "framer-motion";
import { Check, DollarSign } from "lucide-react";

const tiers = [
  {
    label: "Single Show",
    price: "$8,500",
    unit: "per show",
    tagline: "Full program. Prove the model.",
    highlight: false,
    items: [
      "Intelligence briefs, Tier A/B",
      "ICP scoring in HubSpot",
      "Outreach sequences (2-3 personas)",
      "Microsites, Top 50 targets",
      "HeyPocket setup + daily huddles",
      "AI follow-ups within 72 hours",
      "30-day pipeline dashboard",
    ],
  },
  {
    label: "3-Show Pack",
    price: "$7,000",
    unit: "per show",
    unitDetail: "($21K total)",
    tagline: "Foundation carries forward. Less ramp each time.",
    highlight: true,
    items: [
      "Everything in Single Show",
      "HubSpot integration reused",
      "Messaging and ICP model refined",
      "Outreach sequences updated, not rebuilt",
      "Cumulative pipeline reporting",
      "Cross-show attribution",
      "Priority scheduling",
    ],
  },
  {
    label: "Annual",
    price: "$30,000",
    unit: "up to 5 shows",
    unitDetail: "($6K/show)",
    tagline: "Dedicated program. Always-on pipeline engine.",
    highlight: false,
    items: [
      "Everything in 3-Show Pack",
      "Up to 5 shows covered",
      "Quarterly CEO reports (12 mo)",
      "ICP and messaging evolve show to show",
      "Year-round HubSpot management",
      "Show selection guidance",
      "Performance bonus eligible",
    ],
  },
];

export function Investment() {
  return (
    <section className="py-24 md:py-32 bg-white text-navy px-6" data-testid="section-investment">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Investment.</h2>
          <p className="text-xl text-[#334155] font-sans">Start with one show. Lock in savings as you commit.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {tiers.map((tier, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`rounded-2xl p-8 relative overflow-hidden ${
                tier.highlight
                  ? "bg-white border-2 border-[#2563EB] shadow-xl"
                  : "bg-ice border border-slate-200"
              }`}
              data-testid={`pricing-tier-${i}`}
            >
              {tier.highlight && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-[#2563EB]" />
              )}

              <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-3">{tier.label}</div>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-4xl font-display font-bold">{tier.price}</span>
              </div>
              <div className="text-sm text-slate-400 mb-1">
                {tier.unit}
                {tier.unitDetail && <span className="ml-1.5 text-slate-400">{tier.unitDetail}</span>}
              </div>
              <p className="text-sm text-[#334155] italic mb-6">{tier.tagline}</p>

              <ul className="space-y-3">
                {tier.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[#334155] text-sm">
                    <Check className="w-4 h-4 text-[#2563EB] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 rounded-2xl px-8 py-5 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center shrink-0 mt-0.5">
            <DollarSign className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <span className="font-display font-bold text-[#0F172A]">Performance bonus:</span>{" "}
            <span className="text-[#334155] font-sans">
              Tied to a post-show metric we agree on before kickoff. Meetings booked? Pipeline at 30 days? Deals advanced? Let's talk about what makes sense.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
