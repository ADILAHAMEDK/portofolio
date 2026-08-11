'use client';

import { Briefcase, Calendar, Layers, Sparkles } from 'lucide-react';

const TIMELINE_DATA = [
  {
    period: '2025 — 2026',
    role: 'Frontend Developer',
    company: 'stockeds software solutions',
    type: 'Full-Time',
    icon: Briefcase,
    color: 'border-cyan-500 text-cyan-400',
    description: 'Developed and maintained modern e-commerce applications using Next.js, React, JavaScript, Redux Toolkit, and Tailwind CSS, with a strong focus on performance, scalability, and responsive user experiences.',
    achievements: [
      'Built a responsive React application with reusable components, efficient state management, seamless API integration, and performance-optimized rendering for a smooth user experience',
      'Integrated RESTful APIs to connect frontend interfaces with backend services and dynamic application data.',
      'Implemented Redux Toolkit for efficient global state management',
      'Developed an intuitive admin dashboard for managing products, categories, orders, and users',
    ],
  },
  {
    period: '2024 — 2025',
    role: 'Mern Stack Developer Intern',
    company: 'Softroniics',
    type: 'Full-Time',
    icon: Layers,
    color: 'border-purple-500 text-purple-400',
    description: 'Gained hands-on experience in Mern Stack development through diverse projects, enhancing technical proficiency and performance. Contributed to agile workflows by improving team communication and efficiency by 80%.',
    achievements: [
      'Built responsive web applications using React.js, JavaScript, and Tailwind CSS with a focus on usability and performance.',
      'Implemented secure authentication using JWT and bcrypt with protected routes and role-based access control.',
      'Developed e-commerce features including product management, filtering, cart functionality, and order workflows.',
    ],
  },
  // {
  //   period: '2021 — 2022',
  //   role: 'Junior Web Engineer & Freelancer',
  //   company: 'Independent Client Projects',
  //   type: 'Contract',
  //   icon: Award,
  //   color: 'border-emerald-500 text-emerald-400',
  //   description: 'Crafted custom portfolio templates, landing pages, and interactive JavaScript web utilities for global clients.',
  //   achievements: [
  //     'Delivered 20+ responsive HTML/CSS/JS client websites with 100% positive feedback',
  //     'Contributed open-source Next.js starter templates to GitHub',
  //   ],
  // },
  // {
  //   period: '2019 — 2021',
  //   role: 'B.S. in Computer Science',
  //   company: 'University School of Engineering',
  //   type: 'Education',
  //   icon: GraduationCap,
  //   color: 'border-blue-500 text-blue-400',
  //   description: 'Focused on Data Structures, Algorithms, Web Architecture, and Human-Computer Interaction.',
  //   achievements: [
  //     'Graduated with Honors in Software Engineering',
  //     'President of Web Development & AI Coding Club',
  //   ],
  // },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="py-24 relative bg-slate-950/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-xl mx-auto">
            My professional journey building modern, scalable web applications with Next.js, React, JavaScript, and the MERN stack.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative border-l-2 border-slate-800 ml-4 sm:ml-32 space-y-12">
          {TIMELINE_DATA.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="relative pl-8 sm:pl-10 group">
                
                {/* Period Badge on Left for Desktop */}
                <div className="hidden sm:block absolute -left-32 top-1 text-xs font-mono text-slate-400 font-semibold w-24 text-right">
                  {item.period}
                </div>

                {/* Node Icon Circle */}
                <div className={`absolute -left-[17px] top-0 w-8 h-8 rounded-full bg-slate-950 border-2 ${item.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <Icon className="w-3.5 h-3.5" />
                </div>

                {/* Card Container */}
                <div className="glass-card p-6 rounded-3xl border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="sm:hidden text-xs font-mono text-cyan-400 font-semibold">
                      {item.period}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mt-0.5 mb-3">{item.company}</p>

                  <p className="text-sm text-slate-400 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/60">
                    {item.achievements.map((ach, aIdx) => (
                      <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
