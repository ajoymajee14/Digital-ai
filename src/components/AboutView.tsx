import React from 'react';
import { Sparkles, Brain, Zap, ShieldCheck, Award } from 'lucide-react';

export function AboutView({ setCurrentView }: { setCurrentView: (v: string) => void }) {
  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Our Mission & Vision
          </span>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Democratizing Practical AI Education for the World
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Digital AI Class is built for ambitious builders, professionals, and creators who want to master artificial intelligence without academic fluff.
          </p>
        </div>

        {/* 3 Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30">
              <Brain className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Project-Based Mastery</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              We believe in building real apps, workflows, and prompts from day one. Theory is important, but execution changes careers.
            </p>
          </div>

          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 border border-cyan-500/30">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Cutting-Edge Curriculum</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              The AI landscape evolves weekly. Our courses and labs are continuously updated to reflect the absolute latest models and tools.
            </p>
          </div>

          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center text-purple-400 border border-purple-500/30">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Verified Credentials</h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Earn tamper-evident digital certificates with unique QR code verification that employers and clients trust instantly.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-[#070B14] border border-indigo-500/30 rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold text-white">Ready to Shape the Future?</h2>
          <p className="text-sm text-slate-300 max-w-xl mx-auto">
            Join over 10,000 learners mastering AI, automation, and future skills today.
          </p>
          <button 
            onClick={() => setCurrentView('pricing')}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all hover:scale-105"
          >
            Explore Pro Pass →
          </button>
        </div>
      </div>
    </div>
  );
}
