'use client';

import { Sparkles, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Copyright */}
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>
          <div>
            <p className="text-sm font-bold text-white">Adil Ahamed</p>
            <p className="text-xs text-slate-500 font-mono">© {new Date().getFullYear()} • Built with Next.js</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex items-center space-x-6 text-xs text-slate-400 font-medium">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#ai-assistant" className="hover:text-cyan-400 transition">AI Assistant</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#tech-stack" className="hover:text-cyan-400 transition">Tech Stack</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition flex items-center gap-2 text-xs font-mono"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  );
}
