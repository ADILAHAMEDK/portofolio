'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9 rounded-full bg-slate-800/50 animate-pulse"></div>;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="relative p-2.5 rounded-xl bg-slate-900/60 dark:bg-slate-800/80 border border-slate-700/50 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all duration-300 shadow-md group"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-90 transition-transform duration-500" />
      ) : (
        <Moon className="w-4 h-4 text-cyan-400 group-hover:-rotate-12 transition-transform duration-500" />
      )}
      <span className="sr-only">Toggle Theme</span>
    </button>
  );
}
