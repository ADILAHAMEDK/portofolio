'use client';

import { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, Bot, User, RefreshCw, Check, Code, Terminal, Zap } from 'lucide-react';

const INITIAL_MESSAGES = [
  {
    sender: 'assistant',
    text: "Hello! I'm the Portfolio Assistant. Ask me anything about Adil Ahamed's skills, Next.js expertise, development experience, or projects!",
    timestamp: 'Just now',
  },
];

const PRESET_PROMPTS = [
  "⚡ What are Adil's core tech skills?",
  "🚀 Tell me about his top Next.js projects",
  "💼 Is Adil available for full-time or freelance roles?",
  "🧩 What kind of problems does Adil solve?",
];

const KNOWLEDGE_BASE = {
  skills: `Adil specializes in modern web development:
• **Frontend**: Next.js 16 (App Router), React 19, HTML5, CSS3, Modern JavaScript (ES6+), TypeScript, Tailwind CSS.
• **State Management**: Redux Toolkit.
• **Backend & Database**: Node.js, MongoDB, REST APIs.
• **Tools & Deployment**: Git, Vercel Deployment.`,

  projects: `Here are key highlights from Adil's portfolio:
1. **Stocked – E-Commerce Platform**: Worked as a Next.js Developer on a production e-commerce platform, building responsive user interfaces, integrating RESTful APIs, implementing authentication, and developing scalable shopping workflows.,
2. **Prescripto – Doctor Appointment Platform**: A Next.js healthcare platform that allows users to discover doctors by specialty, check availability, and schedule appointments with date and time-slot selection.
3. **TrendyTraverse – E-Commerce Platform**: A modern shopping platform built with React, Redux Toolkit, and Tailwind CSS, focused on responsive design, state management, and intuitive product browsing.
4. **Food Delivery Platform**: A responsive food delivery web application built with React and Tailwind CSS, featuring restaurant and food browsing, category-based filtering, cart management, dynamic pricing, and a smooth, mobile-friendly ordering experience.`,

  available: `Yes! Adil is actively open for:
• Frontend Developer positions
• Next.js & React Web Application contracts
• Remote or Hybrid opportunities worldwide!`,

  antigravity: `Adil helps solve complex web development challenges by building scalable, responsive, and intuitive applications. He focuses on improving user experiences, optimizing performance, integrating APIs, and developing reliable features that turn business ideas into practical digital products.`,

  default: `Adil Ahamed is a passionate Frontend & AI Engineer with expertise in Next.js, HTML, CSS, JavaScript, and AI application development. Feel free to explore his projects section or drop a message in the contact form!`,
};

export default function AntigravityAssistant() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const chatEndRef = useRef(null);

  // const scrollToBottom = () => {
  //   chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  useEffect(() => {
    // scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    // Add User Message
    const userMsg = { sender: 'user', text: query, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let replyText = KNOWLEDGE_BASE.default;
      const lower = query.toLowerCase();

      if (lower.includes('skill') || lower.includes('stack') || lower.includes('tech') || lower.includes('core')) {
        replyText = KNOWLEDGE_BASE.skills;
      } else if (lower.includes('project') || lower.includes('work') || lower.includes('app') || lower.includes('top')) {
        replyText = KNOWLEDGE_BASE.projects;
      } else if (lower.includes('available') || lower.includes('hire') || lower.includes('role') || lower.includes('job') || lower.includes('contact')) {
        replyText = KNOWLEDGE_BASE.available;
      } else if (lower.includes('antigravity') || lower.includes('solve') || lower.includes('how') || lower.includes('integrating')) {
        replyText = KNOWLEDGE_BASE.antigravity;
      }

      const aiMsg = { sender: 'assistant', text: replyText, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 700);
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const handleReset = () => {
    setMessages(INITIAL_MESSAGES);
  };

  return (
    <section id="ai-assistant" className="py-20 relative bg-slate-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-400 text-xs font-mono mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive AI Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Ask My <span className="text-gradient">AI Assistant To Know Me</span>
          </h2>
          <p className="mt-3 text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Get to know me through an interactive AI assistant that can answer questions about my skills, experience, projects, and journey.
          </p>
        </div>

        {/* Chat Console Card */}
        <div className="glass-card rounded-3xl overflow-hidden border border-slate-800 shadow-2xl">
          {/* Console Header */}
          <div className="bg-slate-900/90 px-5 py-4 border-b border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-purple-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-slate-950 rounded-[7px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white flex items-center gap-2">
                  AI Portfolio Agent
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </h3>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/60 hover:bg-slate-800 text-slate-400 hover:text-white text-xs transition"
              title="Reset Chat"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>
          </div>

          {/* Quick Preset Chips */}
          <div className="bg-slate-950/40 px-5 py-3 border-b border-slate-800/40 flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Zap className="w-3 h-3 text-amber-400" /> Quick Prompts:
            </span>
            {PRESET_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="text-xs px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition duration-200"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message Stream Area */}
          <div className="p-5 min-h-[320px] max-h-[420px] overflow-y-auto space-y-4 bg-slate-950/80 font-sans">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'assistant' && (
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-cyan-400" />
                  </div>
                )}

                <div className={`max-w-xl group relative ${msg.sender === 'user' ? 'order-1' : 'order-2'}`}>
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-medium rounded-tr-none'
                        : 'bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>

                  <div className="flex items-center justify-between mt-1 px-1">
                    <span className="text-[10px] text-slate-500 font-mono">{msg.timestamp}</span>
                    {msg.sender === 'assistant' && (
                      <button
                        onClick={() => handleCopy(msg.text, i)}
                        className="text-[10px] text-slate-400 hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition flex items-center gap-1"
                      >
                        {copiedIndex === i ? <Check className="w-3 h-3 text-emerald-400" /> : <Code className="w-3 h-3" />}
                        {copiedIndex === i ? 'Copied' : 'Copy'}
                      </button>
                    )}
                  </div>
                </div>

                {msg.sender === 'user' && (
                  <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center shrink-0 order-2">
                    <User className="w-4 h-4 text-purple-300" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-slate-400 text-xs font-mono">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400 animate-spin" />
                </div>
                <div className="flex items-center gap-1.5 bg-slate-900/80 px-4 py-2.5 rounded-2xl border border-slate-800">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span>Antigravity AI is thinking...</span>
                </div>
              </div>
            )}

            <div ref={chatEndRef} />
          </div>

          {/* Input Form Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-4 bg-slate-900/90 border-t border-slate-800 flex items-center gap-3"
          >
            <div className="relative flex-1">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Adil's skills, Next.js projects, or background..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 focus:ring-1 focus:ring-cyan-500/40 font-sans"
              />
            </div>
            <button
              type="submit"
              disabled={!input.trim() || isTyping}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-50 text-slate-950 font-bold text-sm flex items-center gap-2 transition duration-200"
            >
              <span>Send</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
