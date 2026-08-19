import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingViewProps {
  setCurrentView: (view: string) => void;
  onSelectPlan: (planName: string, price: number) => void;
}

export function PricingView({ setCurrentView, onSelectPlan }: PricingViewProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            Investment in Your Future
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Choose How You Want To Learn
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Unlock unlimited access to world-class AI courses, masterclasses, and verified certificates.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#0D1321] border border-white/10 p-1.5 rounded-2xl mt-8 shadow-xl">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${!isYearly ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${isYearly ? 'bg-indigo-600 text-white shadow-md' : 'text-slate-400 hover:text-white'}`}
            >
              <span>Annual Billing</span>
              <span className="bg-cyan-400/20 text-cyan-300 text-[10px] px-2 py-0.5 rounded-full font-bold">Save 35%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Free Explorer</span>
              <div className="text-4xl font-extrabold text-white mt-4">₹0</div>
              <p className="text-xs text-slate-400 mt-1">Free preview access for everyone</p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-white/10 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Free introductory lessons</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Course previews & outlines</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Basic student dashboard</div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentView('courses')}
              className="mt-8 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-semibold py-3.5 rounded-xl transition-all"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Pass (Most Popular) */}
          <div className="relative bg-gradient-to-br from-indigo-950/80 via-[#0D1321] to-[#070B14] border-2 border-indigo-500 rounded-3xl p-8 flex flex-col justify-between shadow-2xl scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Pro Monthly Pass
              </span>
              <div className="text-4xl font-extrabold text-white mt-4">
                {isYearly ? '₹329' : '₹499'}
                <span className="text-sm font-normal text-slate-400">/mo</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                {isYearly ? 'Billed annually at ₹3,999/year' : 'Billed monthly. Cancel anytime.'}
              </p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-white/10 text-sm text-slate-200">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Full subscription library access</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> New courses added every month</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Verified digital certificates</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Real-time progress tracking</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Priority Q&A with instructors</div>
              </div>
            </div>

            <button 
              onClick={() => onSelectPlan(isYearly ? 'Annual Pro Pass' : 'Pro Monthly Pass', isYearly ? 3999 : 499)}
              className="mt-8 w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white text-sm font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
            >
              Start Pro Pass →
            </button>
          </div>

          {/* Annual Pass */}
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">Annual Master Pass</span>
              <div className="text-4xl font-extrabold text-white mt-4">₹3,999<span className="text-sm font-normal text-slate-400">/yr</span></div>
              <p className="text-xs text-slate-400 mt-1">Best value for dedicated learners</p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-white/10 text-sm text-slate-300">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Everything in Pro Monthly</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> 35% discount savings</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Early access to new AI masterclasses</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-cyan-400" /> Exclusive community Discord access</div>
              </div>
            </div>

            <button 
              onClick={() => onSelectPlan('Annual Master Pass', 3999)}
              className="mt-8 w-full bg-white/10 hover:bg-white/15 border border-white/10 text-white text-sm font-semibold py-3.5 rounded-xl transition-all"
            >
              Get Annual Pass →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
