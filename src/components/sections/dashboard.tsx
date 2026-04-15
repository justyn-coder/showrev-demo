import { useState } from "react";
import { motion } from "framer-motion";

type Phase = "pre" | "at" | "post";

const phases = [
  { id: "pre" as Phase, label: "Pre-Show" },
  { id: "at" as Phase, label: "At-Show" },
  { id: "post" as Phase, label: "Post-Show" },
];

function CheckIcon({ status }: { status: "done" | "pending" | "not-started" }) {
  const bg = status === "done" ? "bg-emerald-500/15" : status === "pending" ? "bg-amber-500/15" : "bg-slate-500/10";
  return (
    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${bg}`}>
      {status === "done" && (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" /></svg>
      )}
      {status === "pending" && (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="3" fill="#F59E0B" /></svg>
      )}
      {status === "not-started" && (
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="3" fill="#475569" /></svg>
      )}
    </div>
  );
}

function StagePill({ stage }: { stage: string }) {
  const styles: Record<string, string> = {
    "MR25 booked": "bg-blue-500/12 text-blue-400",
    "Meeting set": "bg-emerald-500/12 text-emerald-400",
    "Outreach sent": "bg-amber-500/12 text-amber-400",
    "No reply": "bg-red-500/10 text-red-400",
    "Advanced": "bg-emerald-500/12 text-emerald-400",
    "Proposal out": "bg-blue-500/12 text-blue-400",
    "Active opp": "bg-blue-500/12 text-blue-400",
    "No contact": "bg-red-500/10 text-red-400",
  };
  return (
    <span className={`text-[11px] font-medium px-2.5 py-0.5 rounded-full whitespace-nowrap ${styles[stage] || "bg-slate-500/10 text-slate-400"}`}>
      {stage}
    </span>
  );
}

function PreShowContent() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Briefs Complete" value="47" suffix="/50" delta="94% readiness" deltaUp />
        <StatCard label="Outreach Sent" value="38" color="text-[#2563EB]" delta="14 replies · 37% rate" deltaUp />
        <StatCard label="Meetings Pre-Booked" value="11" color="text-emerald-400" delta="MR25 + booth slots" />
        <StatCard label="Microsites Live" value="50" delta="2,340 views so far" deltaUp />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Top Account Status</div>
              <div className="text-xs text-slate-400 mt-0.5">Tier A priority accounts, pre-show readiness</div>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-500/10 text-[#2563EB]">11 booked</span>
          </div>
          <AccountRow name="Summit Networks" meta="Brief done · Microsite live · Meeting booked" amount="$150K" stage="MR25 booked" />
          <AccountRow name="Meridian Platform" meta="Brief done · Outreach sent · Reply received" amount="$900K" stage="Meeting set" />
          <AccountRow name="Pinnacle Cloud" meta="Brief done · Microsite live · Awaiting reply" amount="$319K" stage="Outreach sent" />
          <AccountRow name="Atlas Global" meta="Brief done · Outreach sent · Reply received" amount="$500K" stage="MR25 booked" />
          <AccountRow name="Keystone Digital" meta="Brief done · No reply yet" amount="—" muted stage="No reply" />
        </div>
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08]">
            <div className="text-sm font-semibold">Pre-Show Checklist</div>
          </div>
          <div>
            <CheckItem status="done" text="Intelligence briefs" sub="47 of 50 complete" />
            <CheckItem status="done" text="ICP scoring in HubSpot" sub="All tiers loaded" />
            <CheckItem status="done" text="Microsites live" sub="50 of 50 deployed" />
            <CheckItem status="done" text="Outreach sequences" sub="Touch 1 + 2 sent" />
            <CheckItem status="pending" text="Booth companion app" sub="Final QA today" />
            <CheckItem status="not-started" text="Staff briefing" sub="Oct 13 · Austin" />
          </div>
        </div>
      </div>
    </>
  );
}

function AtShowContent() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Tier A Conversations" value="—" delta="Show starts Oct 14" />
        <StatCard label="MR25 Sessions Held" value="—" color="text-[#2563EB]" delta="11 pre-booked" />
        <StatCard label="Avg Quality Score" value="—" color="text-emerald-400" delta="A/B/C grading active" />
        <StatCard label="New Opps Logged" value="—" delta="Same-day CRM sync" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Live Account Feed</div>
              <div className="text-xs text-slate-400 mt-0.5">Updated by booth team via Plaud.ai · Oct 14-16</div>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-500/10 text-[#2563EB]">Activates Oct 14</span>
          </div>
          <div className="py-12 px-6 text-center text-slate-400 text-[13px]">
            Live conversation feed populates here during the show.<br />Each interaction tagged Hot / Warm / Cold within minutes.
          </div>
        </div>
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08]">
            <div className="text-sm font-semibold">Daily Debrief</div>
          </div>
          <div>
            <CheckItem status="not-started" text="Morning huddle · Day 1" sub="Priority accounts + talking points" />
            <CheckItem status="not-started" text="EOD pipeline estimate · Day 1" sub="CEO summary by 7pm" />
            <CheckItem status="not-started" text="Morning huddle · Day 2" sub="Adjust priorities from Day 1" />
            <CheckItem status="not-started" text="EOD pipeline estimate · Day 2" sub="CEO summary by 7pm" />
            <CheckItem status="not-started" text="Final show debrief · Day 3" sub="Full pipeline snapshot" />
          </div>
        </div>
      </div>
    </>
  );
}

function PostShowContent() {
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard label="Pipeline Influenced" value="$2.9M" color="text-emerald-400" delta="+$480K net-new" deltaUp />
        <StatCard label="Avg Follow-Up Time" value="3.2h" color="text-[#2563EB]" delta="vs. 5-7 days industry avg" />
        <StatCard label="Follow-Up Rate" value="100%" delta="72hr SLA · zero missed" />
        <StatCard label="Cost Per Meeting" value="$893" delta="vs. $4,200 baseline" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4">
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08] flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Pipeline Tracker</div>
              <div className="text-xs text-slate-400 mt-0.5">30-day post-show window</div>
            </div>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-blue-500/10 text-[#2563EB]">$2.9M influenced</span>
          </div>
          <AccountRow name="Meridian Platform" meta="MR25 meeting → demo booked" amount="$900K" stage="Advanced" />
          <AccountRow name="Atlas Global" meta="MR25 meeting → proposal sent" amount="$500K" stage="Proposal out" />
          <AccountRow name="Pinnacle Cloud" meta="Booth conversation → call scheduled" amount="$319K" stage="Advanced" />
          <AccountRow name="Summit Networks" meta="MR25 meeting → active opportunity" amount="$150K" stage="Active opp" />
          <AccountRow name="Keystone Digital" meta="Booth scan → nurture sequence" amount="—" muted stage="No contact" />
        </div>
        <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden">
          <div className="px-6 py-5 border-b border-white/[0.08]">
            <div className="text-sm font-semibold">ROI Scorecard</div>
          </div>
          <div>
            <CheckItem status="done" text="Pipeline influenced" sub="$2.9M total" />
            <CheckItem status="done" text="Net-new pipeline" sub="$480K created" />
            <CheckItem status="done" text="Deals advanced" sub="4 moved to next stage" />
            <CheckItem status="done" text="Follow-up velocity" sub="48x faster than baseline" />
            <CheckItem status="done" text="ShowRev ROI" sub="Pipeline attributed to ShowRev program" />
          </div>
        </div>
      </div>
      <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl overflow-hidden mt-4">
        <div className="grid grid-cols-4 divide-x divide-white/[0.08]">
          <SummaryItem value="$2.9M" label="Pipeline influenced" color="text-emerald-400" />
          <SummaryItem value="$480K" label="Net-new pipeline" color="text-[#2563EB]" />
          <SummaryItem value="3.2h" label="Avg follow-up time" />
          <SummaryItem value="48x" label="vs. industry average" />
        </div>
      </div>
    </>
  );
}

function StatCard({ label, value, suffix, color = "text-white", delta, deltaUp }: { label: string; value: string; suffix?: string; color?: string; delta?: string; deltaUp?: boolean }) {
  return (
    <div className="bg-[#1E293B] border border-white/[0.08] rounded-xl p-5 hover:border-blue-500/40 transition-colors" data-testid={`stat-card-${label.toLowerCase().replace(/\s+/g, '-')}`}>
      <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wider mb-3">{label}</div>
      <div className={`font-mono text-[28px] font-medium leading-none mb-2 ${color}`}>
        {value}{suffix && <span className="text-lg text-slate-400">{suffix}</span>}
      </div>
      {delta && (
        <div className="text-xs text-slate-400 flex items-center gap-1">
          {deltaUp && <span className="text-emerald-400">{delta}</span>}
          {!deltaUp && delta}
        </div>
      )}
    </div>
  );
}

function AccountRow({ name, meta, amount, muted, stage }: { name: string; meta: string; amount: string; muted?: boolean; stage: string }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-4 px-6 py-3.5 border-b border-white/[0.08] last:border-b-0 hover:bg-white/[0.02] transition-colors cursor-pointer" data-testid={`account-row-${name.toLowerCase().replace(/\s+/g, '-')}`}>
      <div>
        <div className="text-sm font-medium">{name}</div>
        <div className="text-xs text-slate-400 mt-0.5">{meta}</div>
      </div>
      <div className={`font-mono text-[13px] text-right ${muted ? "text-slate-400" : "text-white"}`}>{amount}</div>
      <StagePill stage={stage} />
    </div>
  );
}

function CheckItem({ status, text, sub }: { status: "done" | "pending" | "not-started"; text: string; sub: string }) {
  return (
    <div className="flex items-start gap-3 px-6 py-3.5 border-b border-white/[0.08] last:border-b-0">
      <CheckIcon status={status} />
      <div>
        <div className="text-[13px] font-medium">{text}</div>
        <div className="text-[11px] text-slate-400 mt-0.5">{sub}</div>
      </div>
    </div>
  );
}

function SummaryItem({ value, label, color = "text-white" }: { value: string; label: string; color?: string }) {
  return (
    <div className="py-4 px-6 text-center">
      <div className={`font-mono text-xl font-medium mb-1 ${color}`}>{value}</div>
      <div className="text-[11px] text-slate-400">{label}</div>
    </div>
  );
}

export function Dashboard() {
  const [activePhase, setActivePhase] = useState<Phase>("pre");

  return (
    <section className="relative py-20 md:py-24 bg-[#0F172A] text-white px-6" data-testid="section-dashboard">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-600/40 to-transparent" />
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-4">Track every dollar.</h2>
          <p className="text-xl text-slate-400 font-sans max-w-2xl mx-auto">
            Pre-show momentum. At-show activity. Post-show pipeline. The CEO dashboard tracks your trade show investment from first outreach to closed revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#2563EB] rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 14L8 9L11 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 6H15V9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold tracking-tight">CEO Dashboard</h2>
                <div className="text-xs text-slate-400 uppercase tracking-wider mt-1">SaaS Connect 2026</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              Live · synced to HubSpot
            </div>
          </div>

          <div className="inline-flex gap-1 bg-[#1E293B] border border-white/[0.08] rounded-[10px] p-1 mb-8">
            {phases.map((phase) => (
              <button
                key={phase.id}
                onClick={() => setActivePhase(phase.id)}
                className={`px-5 py-2 rounded-[7px] text-[13px] font-medium transition-all cursor-pointer ${
                  activePhase === phase.id
                    ? "bg-[#2563EB] text-white"
                    : "text-slate-400 hover:text-white"
                }`}
                data-testid={`phase-tab-${phase.id}`}
              >
                {phase.label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={activePhase}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {activePhase === "pre" && <PreShowContent />}
          {activePhase === "at" && <AtShowContent />}
          {activePhase === "post" && <PostShowContent />}
        </motion.div>

        <div className="mt-6 text-center text-[11px] text-slate-500 tracking-wider">
          ShowRev · SaaS Connect 2026 · Powered by HubSpot Pro · Plaud.ai · AI Research Engine
        </div>
      </div>
    </section>
  );
}
