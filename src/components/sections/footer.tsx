import { Logo } from "@/components/logo";

export function Footer() {
  return (
    <footer className="bg-navy py-12 px-6 border-t border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Logo variant="dark" />
        
        <a href="mailto:showme@showrev.ai" className="bg-electric hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-colors font-sans text-sm">
          Let's talk → showme@showrev.ai
        </a>
        
        <a href="https://showrev.ai" className="text-slate-400 hover:text-white transition-colors font-sans font-medium">
          showrev.ai
        </a>
      </div>
    </footer>
  );
}