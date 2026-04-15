import { motion } from "framer-motion";
import { Search, Mic, Clock } from "lucide-react";

const cards = [
  {
    icon: Search,
    title: "Limited pre-show intelligence",
    desc: "Some research happens, but it's surface-level. No deep ICP scoring, limited targeted outreach, few if any meetings pre-booked."
  },
  {
    icon: Mic,
    title: "Limited capture discipline",
    desc: "Conversations happen but most details are lost. Badge scans with sparse notes. AEs collect cards with minimal discovery. Little reaches the CRM same-day."
  },
  {
    icon: Clock,
    title: "Limited follow-up rigor",
    desc: "Follow-up happens, but it's slow and inconsistent. First emails often take 5-7 days. Most leads get one touch at best. ROI is rarely measured."
  }
];

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-ice text-navy px-6" data-testid="section-problem">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">The companies we help.</h2>
          <p className="text-xl text-[#334155] font-sans max-w-3xl" style={{ textWrap: "balance" }}>
            Series A/B SaaS companies spending $15K-$25K+ per show with a 1-2 person marketing team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-testid={`problem-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-6">
                <card.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{card.title}</h3>
              <p className="text-[#334155] font-sans leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 italic text-[#2563EB] font-sans text-lg"
        >
          These shows are too expensive and too important to wing it.
        </motion.p>
      </div>
    </section>
  );
}
