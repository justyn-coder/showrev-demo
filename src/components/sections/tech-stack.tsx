import { motion } from "framer-motion";

const tools = [
  {
    name: "AI Research Engine",
    label: "Proprietary",
    description:
      "Deep pre-show intelligence across SEC filings, org charts, job postings, news, and competitive signals. Synthesized into actionable account briefs.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.35-4.35" />
        <path d="M11 8v6M8 11h6" />
      </svg>
    ),
    color: "#2563EB",
    bgColor: "bg-[#2563EB]/10",
    textColor: "text-[#60A5FA]",
  },
  {
    name: "LinkedIn Sales Nav",
    label: "Integrated",
    description:
      "Stakeholder mapping, org-chart intelligence, and buying committee identification. Connected directly into every account brief.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    color: "#0A66C2",
    bgColor: "bg-[#0A66C2]/10",
    textColor: "text-[#60A5FA]",
  },
  {
    name: "Plaud NotePin",
    label: "Wearable AI",
    description:
      "Discreet wrist-worn capture device records booth conversations in real time. AI transcription powers instant recaps and personalized follow-ups.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2a3 3 0 00-3 3v7a3 3 0 006 0V5a3 3 0 00-3-3z" />
        <path d="M19 10v2a7 7 0 01-14 0v-2" />
        <line x1="12" y1="19" x2="12" y2="22" />
      </svg>
    ),
    color: "#8B5CF6",
    bgColor: "bg-[#8B5CF6]/10",
    textColor: "text-[#A78BFA]",
    hasImage: true,
  },
  {
    name: "HubSpot Pro",
    label: "CRM Engine",
    description:
      "Pipeline creation, contact enrichment, deal tracking, and automated sequences. Every conversation logged and actioned same-day.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    color: "#FF7A59",
    bgColor: "bg-[#FF7A59]/10",
    textColor: "text-[#FF7A59]",
  },
];

export function TechStack() {
  return (
    <section className="relative py-16 md:py-20 bg-ice text-navy px-6" data-testid="section-tech-stack">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-3">
            Best-in-show tech stack.
          </h2>
          <p className="text-lg text-[#334155] font-sans max-w-2xl mx-auto">
            Four integrated tools working together across every phase. Nothing falls through the cracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto items-start">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl ${tool.bgColor} flex items-center justify-center shrink-0`}
                  style={{ color: tool.color }}
                >
                  {tool.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-display font-bold text-base text-[#0F172A]">{tool.name}</h3>
                    <span
                      className="text-[9px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        color: tool.color,
                      }}
                    >
                      {tool.label}
                    </span>
                  </div>
                  <p className="text-sm text-[#334155] leading-relaxed">{tool.description}</p>
                </div>
              </div>

              {tool.hasImage && (
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200">
                  <img
                    src="/plaud-wrist.png"
                    alt="Plaud NotePin wrist-worn AI conversation capture device"
                    className="w-full h-36 object-cover object-center"
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center text-center"
        >
          <div className="mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="none" width="36" height="36" className="shrink-0">
              <rect x="4" y="4" width="56" height="56" rx="12" fill="#0F172A" />
              <line x1="12" y1="40" x2="22" y2="40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
              <polyline points="22,40 27,40 32,14 37,40 42,40" stroke="#2563EB" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <line x1="42" y1="40" x2="52" y2="40" stroke="#FFFFFF" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </div>
          <p className="font-display font-bold text-xl md:text-2xl text-[#0F172A] tracking-tight">
            Every tool configured, managed, and optimized by ShowRev.
          </p>
          <p className="text-[#334155] font-sans text-sm mt-1 italic">
            Your team just shows up prepared.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
