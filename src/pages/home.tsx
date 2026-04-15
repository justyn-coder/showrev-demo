import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Differentiators } from "@/components/sections/differentiators";
import { HowItWorks } from "@/components/sections/how-it-works";
import { IntelBrief } from "@/components/sections/intel-brief";
import { Plays } from "@/components/sections/plays";
import { TechStack } from "@/components/sections/tech-stack";
import { Dashboard } from "@/components/sections/dashboard";
import { Investment } from "@/components/sections/investment";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="w-full bg-background selection:bg-electric selection:text-white">
      <Hero />
      <Problem />
      <Differentiators />
      <HowItWorks />
      <IntelBrief />
      <Plays />
      <TechStack />
      <Dashboard />
      <Investment />
      <Footer />
    </main>
  );
}
