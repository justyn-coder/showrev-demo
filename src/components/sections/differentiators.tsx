import { motion } from "framer-motion";
import { Globe, Mic, FileText, Clock, Target } from "lucide-react";

const features = [
  {
    icon: Globe,
    title: "Personalized microsites",
    desc: "Every Tier A prospect gets a custom landing page referencing their company, their pain, and a relevant proof point. Not a generic booth invite."
  },
  {
    icon: Mic,
    title: "Conversation capture and analysis",
    desc: "Every booth conversation is recorded, transcribed, and analyzed. Key intel flows into the CRM same-day. Nothing gets lost."
  },
  {
    icon: FileText,
    title: "Account briefs at the booth",
    desc: "Your team walks in with a searchable, offline app containing company intel, stakeholder maps, and conversation starters for every priority account."
  },
  {
    icon: Clock,
    title: "72-hour follow-up. No exceptions.",
    desc: "AI drafts personalized emails from conversation context. AE reviews and sends. Every contact gets a 5-touch sequence. Pipeline doesn't go cold."
  },
];

export function Differentiators() {
  return (
    <section className="py-24 md:py-32 bg-white text-navy px-6" data-testid="section-differentiators">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">What makes this different.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-white p-8 rounded-2xl border border-slate-200"
              data-testid={`differentiator-card-${i}`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#2563EB]/10 flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-[#2563EB]" />
              </div>
              <h3 className="font-display font-bold text-xl mb-3">{feature.title}</h3>
              <p className="text-[#334155] font-sans leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#2563EB]/[0.06] border border-[#2563EB]/20 rounded-2xl px-8 py-5 flex items-center gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-[#2563EB]/10 flex items-center justify-center shrink-0">
            <Target className="w-5 h-5 text-[#2563EB]" />
          </div>
          <p className="font-sans text-[#2563EB] font-medium text-lg">
            CEO line of sight into team performance, show ROI, and attribution for every dollar spent.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
