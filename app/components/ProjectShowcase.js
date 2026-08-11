'use client';

import { useState } from 'react';
import { ExternalLink, Sparkles, X, Code2, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from './Icons';

const PROJECTS = [
  {
    // id: 'antigravity-hub',
    id: '1',
    title: 'Stockeds',
    category: 'Full Stack',
    featured: true,
    description: 'Developed a modern e-commerce platform using Next.js, focusing on responsive UI, API integration, product management, and seamless shopping experiences across devices.',
    tags: ['Next.js 16', 'Node js', 'MongoDB', 'Tailwind CSS', 'JavaScript'],
    demoUrl: 'https://stockeds.com/',
    githubUrl: '#',
    gradient: 'from-cyan-500/20 via-purple-500/20 to-blue-600/20',
    highlights: [
      'Built with Next.js 16 App Router for streaming server responses',
      'Responsive interface optimized across desktop, tablet, and mobile',
      'Optimized pages for performance and cross-device usability',
    ],
  },
  {
    id: '2',
    title: 'Prescripto',
    category: 'Next.js',
    featured: true,
    description: 'A responsive doctor booking platform built with Next.js, allowing users to find doctors by specialty, check availability, and schedule appointments with convenient date and time-slot selection.',
    tags: ['Next.js', 'JavaScript','Tailwind CSS', "Redux Toolkit"],
    demoUrl: 'https://prescripto-website-red.vercel.app/',
    githubUrl: '#',
    gradient: 'from-purple-500/20 via-pink-500/20 to-rose-600/20',
    highlights: [
      'A modern doctor appointment platform built with Next.js and Redux Toolkit, making it easy to discover doctors and book consultations online.',
      'A responsive healthcare booking application with specialty-based doctor search, availability checking, and convenient appointment scheduling.',
      'A user-friendly medical appointment platform designed to simplify doctor discovery and provide a smooth, efficient online booking experience.',
    ],
  },
  {
    id: '3',
    title: 'Tomato',
    category: 'React.js',
    featured: true,
    description: 'A modern and responsive food delivery platform built with React and CSS3, allowing users to explore food items, browse categories, manage their cart, and place orders through a smooth and intuitive interface.',
    tags: ['React js', 'CSS3', 'JavaScript',],
    demoUrl: 'https://food-delivery-website-murex-one.vercel.app/',
    githubUrl: '#',
    gradient: 'from-emerald-500/20 via-teal-500/20 to-cyan-600/20',
    highlights: [
      'Browse Food & Categories — Explore dishes through an organized and easy-to-use menu.',
      'Cart & Order Management — Add items, update quantities, and manage your order effortlessly.',
      'Responsive Design — Enjoy a seamless food-ordering experience across desktop, tablet, and mobile.',
    ],
  },
  // {
  //   id: '4',
  //   title: 'Cyber Dark UI Analytics Suite',
  //   category: 'UI/UX',
  //   featured: false,
  //   description: 'A high-performance SaaS monitoring dashboard with real-time vector charts, theme switcher, and exportable reports.',
  //   tags: ['Next.js', 'Tailwind CSS', 'Recharts', 'TypeScript', 'Dark Mode'],
  //   demoUrl: 'https://example.com/analytics-ui',
  //   githubUrl: 'https://github.com/example/analytics-ui',
  //   gradient: 'from-blue-500/20 via-indigo-500/20 to-cyan-600/20',
  //   highlights: [
  //     'Crafted with custom CSS grid tokens and glassmorphism styling',
  //     'Dynamic charts with responsive SVG rendering',
  //     'Complete accessibility compliance with WCAG AAA contrast',
  //   ],
  // },
  // {
  //   id: '5',
  //   title: 'AI Prompt & Workflow Studio',
  //   category: 'React',
  //   featured: false,
  //   description: 'Interactive studio tool for prompt engineering, model temperature tuning, and batch LLM output testing.',
  //   tags: ['Antigravity AI', 'Next.js', 'Node.js', 'Tailwind CSS'],
  //   demoUrl: 'https://example.com/prompt-studio',
  //   githubUrl: 'https://github.com/example/prompt-studio',
  //   gradient: 'from-amber-500/20 via-orange-500/20 to-yellow-600/20',
  //   highlights: [
  //     'Batch test prompts across multiple models simultaneously',
  //     'Built-in template library for web design code generation',
  //     'Save and export structured JSON/Markdown prompt chains',
  //   ],
  // },
  // {
  //   id: '6',
  //   title: 'Antigravity Modern Portfolio Template',
  //   category: 'Next.js',
  //   featured: false,
  //   description: 'An open-source aesthetic portfolio website template created for frontend developers wanting a dark UI theme.',
  //   tags: ['HTML5', 'CSS3', 'JavaScript', 'Next.js', 'Tailwind CSS'],
  //   demoUrl: 'https://example.com/portfolio-template',
  //   githubUrl: 'https://github.com/example/portfolio-template',
  //   gradient: 'from-teal-500/20 via-cyan-500/20 to-purple-600/20',
  //   highlights: [
  //     '100% Lighthouse performance & SEO scores out of the box',
  //     'Integrated theme toggle, contact form validation, and particle canvas',
  //     'Modular clean codebase designed for beginner developer customization',
  //   ],
  // },
];

const CATEGORIES = ['All', 'Next.js', 'React.js', 'Full Stack'];

export default function ProjectShowcase() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 relative bg-cyber-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
              <Code2 className="w-3.5 h-3.5" />
              <span>Selected Work Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="mt-3 text-slate-400 text-base max-w-xl">
              Explore my latest web projects, built with modern technologies and focused on performance, responsive design, and exceptional user experiences.
            </p>
          </div>

          {/* Category Filter Bar */}
          <div className="mt-6 md:mt-0 flex flex-wrap items-center gap-2 glass-pill p-1.5 rounded-2xl border border-slate-800">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden flex flex-col group border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 shadow-xl"
            >
              {/* Card Banner Thumbnail */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden`}>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
                
                <div className="flex items-center justify-between z-10">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[11px] font-mono text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/20 border border-purple-500/40 text-purple-300 text-[10px] font-mono flex items-center gap-1">
                      <Sparkles className="w-3 h-3" /> Featured
                    </span>
                  )}
                </div>

                <div className="z-10">
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn"
                  >
                    View Details
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                  </button>

                  <div className="flex items-center space-x-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Repository"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo Link"
                      className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 transition"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
                {selectedProject.category}
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {selectedProject.title}
              </h3>

              <p className="mt-3 text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="mt-6 space-y-3">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">Key Architectural Features</h4>
                {selectedProject.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center space-x-3">
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white text-xs font-semibold flex items-center gap-2"
                  >
                    <GithubIcon className="w-4 h-4" /> Code
                  </a>
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 text-xs font-bold flex items-center gap-2"
                  >
                    <ExternalLink className="w-4 h-4" /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
