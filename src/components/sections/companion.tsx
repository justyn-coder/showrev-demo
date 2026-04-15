import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type TierFilter = "all" | "tier-a" | "tier-b" | "mr25";

interface Stakeholder {
  initials: string;
  name: string;
  title: string;
  role: string;
  roleClass: string;
}

interface Account {
  tier: "A" | "B";
  name: string;
  meta: string;
  amount: string;
  heat: "HOT" | "WARM" | "COLD";
  mr25: boolean;
  pain: string;
  opener: string;
  stakeholders: Stakeholder[];
  proof?: string;
  intel?: string;
}

const accounts: Account[] = [
  {
    tier: "A", name: "Summit Networks", meta: "Enterprise SaaS · Denver, CO · 1,200+ clients",
    amount: "$150K", heat: "HOT", mr25: true,
    pain: "Onboarding throughput can't keep pace with their sales velocity. 1,200+ enterprise clients means thousands of integration configs, compliance reviews, and data migrations, all processed manually.",
    opener: "\"You're closing deals faster than you can deploy. Are integration configs the bottleneck right now, or is it further upstream?\"",
    stakeholders: [
      { initials: "MS", name: "Mark Sullivan", title: "VP Operations", role: "Champion", roleClass: "bg-emerald-500/12 text-emerald-400" },
      { initials: "LC", name: "Lisa Chen", title: "CFO", role: "Economic Buyer", roleClass: "bg-blue-500/12 text-blue-400" },
      { initials: "RP", name: "Ryan Park", title: "Dir. Engineering", role: "Technical Gate", roleClass: "bg-red-500/10 text-red-400" },
    ],
    proof: "Beacon Data (similar profile, 1,000+ clients) reduced enterprise onboarding from 6 weeks to 8 days after deploying Arcline across their client base.",
    intel: "Active acquisition talks with two competitors. Don't reference M&A targets.",
  },
  {
    tier: "A", name: "Meridian Platform", meta: "Enterprise SaaS · Chicago, IL · National",
    amount: "$900K", heat: "HOT", mr25: false,
    pain: "Multi-product deployment cycles create massive coordination burden. Each product line has different integration standards, approval workflows, and rollback requirements.",
    opener: "\"When you're rolling out Platform A and Platform B simultaneously, how much rework happens because the deployment packages don't align with what each client needs?\"",
    stakeholders: [
      { initials: "DM", name: "Dan Mitchell", title: "SVP Product", role: "Champion", roleClass: "bg-emerald-500/12 text-emerald-400" },
      { initials: "SL", name: "Sarah Lin", title: "VP Engineering", role: "Economic Buyer", roleClass: "bg-blue-500/12 text-blue-400" },
    ],
    proof: "Client with similar multi-product complexity cut deployment rework by 70% in first 90 days. Packages stopped bouncing.",
  },
  {
    tier: "A", name: "Pinnacle Cloud", meta: "Cloud Infra · Miami, FL · 500+ accounts",
    amount: "$319K", heat: "WARM", mr25: false,
    pain: "Portfolio at this scale has legacy data quality issues across hundreds of inherited accounts. Reconciling configs, SLAs, and compliance docs at scale requires significant manual effort.",
    opener: "\"At your portfolio scale, what's your current approach to reconciling legacy account data when configs, SLAs, and compliance docs disagree?\"",
    stakeholders: [
      { initials: "CB", name: "Chris Burke", title: "CTO", role: "Economic Buyer", roleClass: "bg-blue-500/12 text-blue-400" },
    ],
    proof: "Arcline's remediation module cleared a 400-account legacy backlog in 6 weeks for a comparable cloud provider.",
  },
  {
    tier: "A", name: "Atlas Global", meta: "Enterprise SaaS · Boston, MA · Global",
    amount: "$500K", heat: "HOT", mr25: true,
    pain: "Global scale creates deployment standardization challenges across regions. US operations have specific compliance requirements that don't match their internal global templates.",
    opener: "\"How do you manage compliance standards across your US client base when each vertical has slightly different requirements?\"",
    stakeholders: [
      { initials: "JR", name: "James Rivera", title: "VP US Operations", role: "Champion", roleClass: "bg-emerald-500/12 text-emerald-400" },
    ],
    proof: "Three of the top 10 enterprise SaaS companies globally use Arcline to standardize deployment workflows across regions.",
  },
  {
    tier: "B", name: "Northpoint Solutions", meta: "SI Partner · Toronto, ON · Consulting",
    amount: "$50K", heat: "WARM", mr25: false,
    pain: "Systems integrators face pressure to deliver implementations faster as clients push for speed. Manual config generation is the bottleneck.",
    opener: "\"How much of your team's time goes into generating deployment configs versus actual solution design?\"",
    stakeholders: [
      { initials: "NT", name: "Nicole Torres", title: "Dir. Practice", role: "Champion", roleClass: "bg-emerald-500/12 text-emerald-400" },
    ],
  },
  {
    tier: "B", name: "Keystone Digital", meta: "SI Partner · New York, NY",
    amount: "$200K", heat: "COLD", mr25: false,
    pain: "No reply to pre-show outreach. May be content with current workflows or not the right contact. Walk-up only. Qualify quickly before investing time.",
    opener: "\"What's your current turnaround for a full enterprise deployment from scoping to go-live?\"",
    stakeholders: [
      { initials: "BC", name: "Brian Cole", title: "Principal", role: "Decision Maker", roleClass: "bg-blue-500/12 text-blue-400" },
    ],
  },
];

function HeatTag({ heat }: { heat: "HOT" | "WARM" | "COLD" }) {
  const styles = {
    HOT: "bg-red-500/12 text-red-400",
    WARM: "bg-amber-500/12 text-amber-400",
    COLD: "bg-slate-500/12 text-slate-400",
  };
  return <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${styles[heat]}`}>{heat}</span>;
}

function TierBadge({ tier }: { tier: "A" | "B" }) {
  const styles = tier === "A" ? "bg-emerald-500/15 text-emerald-400" : "bg-blue-500/15 text-blue-400";
  return <div className={`w-9 h-9 rounded-[10px] flex items-center justify-center text-sm font-bold shrink-0 ${styles}`}>{tier}</div>;
}

function AccountCard({ account }: { account: Account }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`bg-[#1E293B] border rounded-xl overflow-hidden transition-colors ${expanded ? "border-blue-500/50" : "border-white/[0.07]"}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full px-4 py-3.5 flex items-center gap-3 cursor-pointer text-left"
        data-testid={`companion-card-${account.name.toLowerCase().replace(/\s+/g, '-')}`}
      >
        <TierBadge tier={account.tier} />
        <div className="flex-1 min-w-0">
          <div className="text-[15px] font-semibold truncate">{account.name}</div>
          <div className="text-xs text-slate-400 mt-0.5">{account.meta}</div>
        </div>
        <div className="flex flex-col items-end gap-1 shrink-0">
          <span className="font-mono text-[13px] font-medium">{account.amount}</span>
          <HeatTag heat={account.heat} />
        </div>
        <motion.div animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
        </motion.div>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <div className="px-4 pb-4 pt-2 border-t border-white/[0.07] space-y-4">
              <DetailSection label="Pain Hypothesis" text={account.pain} />
              <DetailSection label="Conversation Starter" text={account.opener} />

              <div>
                <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Stakeholders</div>
                {account.stakeholders.map((s, i) => (
                  <div key={i} className="flex items-center gap-2.5 py-2 border-b border-white/[0.07] last:border-b-0">
                    <div className="w-[30px] h-[30px] rounded-full bg-blue-500/12 flex items-center justify-center text-xs font-semibold text-[#2563EB] shrink-0">{s.initials}</div>
                    <div className="flex-1">
                      <div className="text-[13px] font-medium">{s.name}</div>
                      <div className="text-[11px] text-slate-400">{s.title}</div>
                    </div>
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${s.roleClass}`}>{s.role}</span>
                  </div>
                ))}
              </div>

              {account.proof && (
                <div>
                  <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Proof Point</div>
                  <div className="bg-blue-500/8 border border-blue-500/20 rounded-lg px-3 py-2.5 text-xs leading-relaxed text-white/80">{account.proof}</div>
                </div>
              )}

              {account.intel && (
                <div className="bg-amber-500/8 border border-amber-500/20 rounded-lg px-3 py-2 flex items-center gap-2 text-[11px] text-amber-400">
                  <span>&#9888;</span> Sensitive: {account.intel}
                </div>
              )}

              <div className="flex gap-2 pt-1">
                <button className="flex-1 py-2 rounded-lg border border-white/[0.07] text-xs font-medium hover:bg-white/5 transition-colors">Tag Conversation</button>
                <button className="flex-1 py-2 rounded-lg bg-[#2563EB] text-xs font-medium hover:bg-blue-700 transition-colors">
                  {account.mr25 ? "MR25 Booked" : "Book MR25"}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function DetailSection({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">{label}</div>
      <div className="text-[13px] leading-relaxed text-white/85">{text}</div>
    </div>
  );
}

export function Companion() {
  const [filter, setFilter] = useState<TierFilter>("all");

  const filtered = accounts.filter((a) => {
    if (filter === "all") return true;
    if (filter === "tier-a") return a.tier === "A";
    if (filter === "tier-b") return a.tier === "B";
    if (filter === "mr25") return a.mr25;
    return true;
  });

  const filterButtons: { id: TierFilter; label: string }[] = [
    { id: "all", label: "All Accounts" },
    { id: "tier-a", label: "Tier A" },
    { id: "tier-b", label: "Tier B" },
    { id: "mr25", label: "MR25 Booked" },
  ];

  return (
    <section className="py-24 md:py-32 bg-ice text-navy px-6" data-testid="section-companion">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-6">Booth Companion</h2>
            <p className="text-xl text-[#334155] font-sans mb-8 max-w-lg">
              Your team walks in with intelligence on every account. Pain hypothesis, conversation starters, stakeholder maps, and proof points, all in their pocket.
            </p>
            <div className="space-y-5 text-[#334155]">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3v10M3 8h10" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A]">ICP-matched intelligence briefs</div>
                  <div className="text-sm mt-0.5">Research, pain points, and openers for every target account</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2563EB]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="5" r="3" stroke="#2563EB" strokeWidth="1.5" /><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A]">Stakeholder maps with roles</div>
                  <div className="text-sm mt-0.5">Champion, economic buyer, technical gate. Know who's who</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L9.5 6H14L10.5 8.5L12 13L8 10L4 13L5.5 8.5L2 6H6.5L8 2Z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round" /></svg>
                </div>
                <div>
                  <div className="font-semibold text-[#0F172A]">Sensitive intel warnings</div>
                  <div className="text-sm mt-0.5">Landmines flagged so your team never steps on one</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#0F172A] rounded-[28px] overflow-hidden shadow-2xl border border-slate-700/50 max-w-[400px] mx-auto">
              <div className="bg-[#1E293B] border-b border-white/[0.07] px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 bg-[#2563EB] rounded-[7px] flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="none"><path d="M2 12L6 8L9 11L13 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M10 5H13V8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <span className="text-white text-[15px] font-bold">ShowRev</span>
                </div>
                <div className="text-right">
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">SaaS Connect 2026</div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-0.5">Booth 413 · MR25</div>
                </div>
              </div>

              <div className="px-3 py-2.5 flex gap-1.5 border-b border-white/[0.07] overflow-x-auto" style={{ scrollbarWidth: "none" }}>
                {filterButtons.map((btn) => (
                  <button
                    key={btn.id}
                    onClick={() => setFilter(btn.id)}
                    className={`text-[11px] font-medium px-3 py-1 rounded-full border whitespace-nowrap transition-all cursor-pointer ${
                      filter === btn.id
                        ? "bg-[#2563EB] text-white border-[#2563EB]"
                        : "border-white/[0.07] text-slate-400 hover:text-white hover:border-white/20"
                    }`}
                    data-testid={`filter-btn-${btn.id}`}
                  >
                    {btn.label}
                  </button>
                ))}
              </div>

              <div className="px-3 py-2 text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                Priority Accounts: {filtered.length} of {accounts.length} shown
              </div>

              <div className="px-2.5 pb-4 space-y-2 max-h-[520px] overflow-y-auto" style={{ scrollbarWidth: "thin", scrollbarColor: "#334155 transparent" }}>
                <AnimatePresence>
                  {filtered.map((account) => (
                    <motion.div
                      key={account.name}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <AccountCard account={account} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
