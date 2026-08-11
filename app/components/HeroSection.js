'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(56, 189, 248, 0.4)';
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - dist / 110)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="about" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-cyber-grid">
      {/* Interactive Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none z-0" />

      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
        
        {/* Availability Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6 animate-float shadow-lg shadow-cyan-500/10">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Available for Freelance & Full-time Work</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight max-w-5xl mx-auto leading-[1.15]">
          Frontend <br className="hidden " />
          <span className="text-gradient">Developer</span>
        </h1>

        {/* Description Subtitle */}
        <p className="mt-6 text-base sm:text-xl text-slate-400 max-w-3xl mx-auto font-normal leading-relaxed">
          Hi, I&apos;m <span className="text-slate-100 font-semibold">Adil Ahamed</span> — a Frontend Developer with a passion for creating modern, high-performance web applications. I specialize in Next.js, React, JavaScript, TypeScript, and Tailwind CSS, with experience building responsive interfaces, integrating APIs, and developing scalable web solutions.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className="group flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-slate-950 font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Explore Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#ai-assistant"
            className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-cyan-400 font-semibold text-sm border border-cyan-500/30 hover:border-cyan-400 hover:bg-slate-900/80 transition-all duration-300 shadow-md"
          >
            <Sparkles className="w-4 h-4 text-purple-400 animate-pulse" />
            Try AI Assistant
          </a>

          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-3.5 rounded-xl glass-pill text-slate-300 hover:text-white font-medium text-sm border border-slate-700/50 hover:border-slate-500 transition-all"
          >
            <Terminal className="w-4 h-4 text-slate-400" />
            Get In Touch
          </a>
        </div>

        {/* Social Icons & Code Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 pt-4 border-t border-slate-800/40 max-w-2xl mx-auto">
          <div className="flex items-center space-x-3">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <GithubIcon className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl glass-pill text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition-all"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>

          <div className="h-4 w-[1px] bg-slate-800 hidden sm:block" />

          {/* Quick Tech Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-xs text-slate-400">
            <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-cyan-400 flex items-center gap-1">
              <Code className="w-3.5 h-3.5" /> Next.js 16
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-purple-400 flex items-center gap-1">
              <Cpu className="w-3.5 h-3.5" /> React 19
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-emerald-400">
              Tailwind CSS
            </span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900/80 border border-slate-800 text-pink-400">
              TypeScript
            </span>
          </div>
        </div>

        {/* Highlight Stats Row */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { label: 'Years Experience', value: '1+' },
            { label: 'Projects Completed', value: '9+' },
            { label: 'Code Quality Score', value: '99%' },
            { label: 'Client Satisfaction', value: '100%' },
          ].map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl glass-card text-center">
              <p className="text-2xl sm:text-3xl font-extrabold text-gradient">{stat.value}</p>
              <p className="text-xs text-slate-400 mt-1 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
