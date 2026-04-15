import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Logo } from "@/components/logo";
import { Counter } from "@/components/ui/counter";

const tagline = "ShowRev is your trade show co-pilot. We handle research, outreach, logistics, and follow-up so your team walks in prepared and walks out with pipeline.";

function Typewriter({ text, delay }: { text: string; delay: number }) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(interval);
    }, 18);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <span>
      {displayed}
      {started && displayed.length < text.length && (
        <span className="inline-block w-[2px] h-[1em] bg-slate-300 ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  );
}

export function Hero() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 100),
      setTimeout(() => setStage(2), 1400),
      setTimeout(() => setStage(3), 2200),
      setTimeout(() => setStage(4), 5200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <section className="bg-navy min-h-[100dvh] text-white flex flex-col relative overflow-hidden">
      <header className="absolute top-0 w-full px-6 py-8 flex justify-between items-center z-10 max-w-7xl mx-auto left-0 right-0">
        <Logo variant="dark" />
        <button 
          onClick={() => document.getElementById('problem')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-electric hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors font-sans text-sm"
        >
          See How It Works
        </button>
      </header>

      <div className="flex-1 flex flex-col items-center justify-center px-6 max-w-4xl mx-auto text-center z-10 pt-20">

        {/* Stage 1: Industry problem stats — count up fast */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={stage >= 1 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-2xl mb-10"
        >
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-display font-bold text-red-400/80 mb-1">
              {stage >= 1 ? <><Counter value={79} format={(v) => Math.round(v).toString()} />%</> : <span className="invisible">79%</span>}
            </div>
            <div className={`text-slate-500 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight transition-opacity duration-300 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}>of leads never<br />followed up</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-display font-bold text-red-400/80 mb-1">
              {stage >= 1 ? <><Counter value={5} format={(v) => Math.round(v).toString()} />-7d</> : <span className="invisible">5-7d</span>}
            </div>
            <div className={`text-slate-500 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight transition-opacity duration-300 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}>typical first<br />email</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-display font-bold text-red-400/80 mb-1">
              {stage >= 1 ? <>$<Counter value={25} format={(v) => Math.round(v).toString()} />K+</> : <span className="invisible">$25K+</span>}
            </div>
            <div className={`text-slate-500 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight transition-opacity duration-300 ${stage >= 1 ? "opacity-100" : "opacity-0"}`}>avg. show spend<br />at risk</div>
          </div>
        </motion.div>

        {/* Stage 2: Headline slams in */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={stage >= 2 ? { opacity: 1, scale: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl font-display font-bold tracking-tight mb-6"
        >
          Trade Show Better
        </motion.h1>
        
        {/* Stage 3: Tagline types out */}
        <div className={`text-lg md:text-xl text-slate-300 font-sans max-w-2xl leading-relaxed mb-12 min-h-[4rem] transition-opacity duration-300 ${stage >= 3 ? "opacity-100" : "opacity-0"}`}>
          {stage >= 3 && <Typewriter text={tagline} delay={0} />}
        </div>

        {/* Stage 4: ShowRev commitment stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={stage >= 4 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="grid grid-cols-3 gap-6 md:gap-12 w-full max-w-2xl"
        >
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-1">
              {stage >= 4 ? <><Counter value={100} format={(v) => Math.round(v).toString()} />%</> : <span className="invisible">100%</span>}
            </div>
            <div className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight">of leads<br />followed up</div>
            <div className="text-[9px] text-emerald-400/70 font-sans mt-1 uppercase tracking-wider">Target</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-1">
              24h
            </div>
            <div className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight">first personalized<br />email</div>
            <div className="text-[9px] text-emerald-400/70 font-sans mt-1 uppercase tracking-wider">Commitment</div>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-3xl md:text-5xl font-display font-bold text-electric mb-1">
              2-3x
            </div>
            <div className="text-slate-400 font-sans text-[10px] md:text-xs uppercase tracking-wider font-medium leading-tight">projected<br />show ROI</div>
            <div className="text-[9px] text-emerald-400/70 font-sans mt-1 uppercase tracking-wider">Potential</div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-electric/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}
