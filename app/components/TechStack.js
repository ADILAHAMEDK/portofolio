'use client';

import { useState } from 'react';
import { Cpu, Code, Terminal, CheckCircle } from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    category: 'Frontend',
    icon: Code,
    skills: [
      { name: 'Next.js', level: 95},
      { name: 'React.js', level: 95},
      { name: 'HTML5 & CSS3', level: 98,},
      { name: 'JavaScript (ES6+)', level: 92},
      { name: 'TypeScript',level: 85},
      { name: 'Tailwind CSS', level: 96},
      { name: 'Redux Toolkit', level: 90},
    ],
  },

  {
    category: 'Backend & Tools',
    icon: Terminal,
    skills: [
      { name: 'Node.js', level: 88},
      { name: 'MongoDB', level: 88 },
      { name: 'Git & GitHub', level: 92 },
      { name: 'Vercel Deployment', level: 88 },
    ],
  },
];

export default function TechStack() {
  const [selectedSkill, setSelectedSkill] = useState(SKILL_CATEGORIES[0].skills[0]);

  return (
    <section id="tech-stack" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Developer Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Tech Stack & <span className="text-gradient">Skill Matrix</span>
          </h2>
          <p className="mt-3 text-slate-400 text-base max-w-2xl mx-auto">
            The technologies and tools I use to build modern, responsive, and scalable web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 items-start">
          
          {/* Skill Bars Column (8 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            {SKILL_CATEGORIES.map((cat, idx) => {
              const Icon = cat.icon;
              return (
                <div key={idx} className="glass-card p-6 rounded-3xl border border-slate-800">
                  <div className="flex items-center space-x-3 mb-5">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-bold text-white">{cat.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        onClick={() => setSelectedSkill(skill)}
                        className={`p-3.5 rounded-2xl cursor-pointer transition-all duration-200 border ${
                          selectedSkill?.name === skill.name
                            ? 'bg-slate-900 border-cyan-500/60 shadow-md shadow-cyan-500/10'
                            : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                            {selectedSkill?.name === skill.name && (
                              <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                            )}
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono text-cyan-400 font-bold">{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-950 rounded-full h-2 overflow-hidden border border-slate-800">
                          <div
                            className="bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 h-2 rounded-full transition-all duration-700"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
