import React, { useState } from 'react';
import { Check, Sparkles, Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingViewProps {
  setCurrentView: (view: string) => void;
  onSelectPlan: (planName: string, price: number) => void;
}

export function PricingView({ setCurrentView, onSelectPlan }: PricingViewProps) {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-emerald-700 text-xs font-bold uppercase tracking-widest bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            Investment in Your Future
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-4">
            Choose How You Want To Learn
          </h1>
          <p className="text-slate-600 text-sm mt-3">
            Unlock unlimited access to world-class AI courses, masterclasses, and verified certificates.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-3 bg-[#F0FDF4] border border-emerald-200 p-1.5 rounded-2xl mt-8 shadow-sm">
            <button 
              onClick={() => setIsYearly(false)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${!isYearly ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:text-slate-900'}`}
            >
              Monthly Billing
            </button>
            <button 
              onClick={() => setIsYearly(true)}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${isYearly ? 'bg-emerald-600 text-white shadow' : 'text-slate-700 hover:text-slate-900'}`}
            >
              <span>Annual Billing</span>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">Save 35%</span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free Tier */}
          <div className="bg-[#F0FDF4] border border-emerald-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Free Explorer</span>
              <div className="text-4xl font-extrabold text-slate-900 mt-4">₹0</div>
              <p className="text-xs text-slate-600 mt-1">Free preview access for everyone</p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-emerald-200 text-sm text-slate-700">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Free introductory lessons</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Course previews & outlines</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Basic student dashboard</div>
              </div>
            </div>

            <button 
              onClick={() => setCurrentView('courses')}
              className="mt-8 w-full bg-white border border-emerald-200 hover:bg-emerald-50 text-slate-800 text-sm font-semibold py-3.5 rounded-xl transition-all shadow-sm"
            >
              Get Started Free
            </button>
          </div>

          {/* Pro Pass (Most Popular) */}
          <div className="relative bg-white border-2 border-emerald-500 rounded-3xl p-8 flex flex-col justify-between shadow-xl scale-105 z-10">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider shadow">
              Most Popular
            </div>

            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" /> Pro Monthly Pass
              </span>
              <div className="text-4xl font-extrabold text-slate-900 mt-4">
                {isYearly ? '₹329' : '₹499'}
                <span className="text-sm font-normal text-slate-500">/mo</span>
              </div>
              <p className="text-xs text-slate-600 mt-1">
                {isYearly ? 'Billed annually at ₹3,999/year' : 'Billed monthly. Cancel anytime.'}
              </p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-emerald-100 text-sm text-slate-700">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Full subscription library access</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> New courses added every month</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Verified digital certificates</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Real-time progress tracking</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Priority Q&A with instructors</div>
              </div>
            </div>

            <button 
              onClick={() => onSelectPlan(isYearly ? 'Annual Pro Pass' : 'Pro Monthly Pass', isYearly ? 3999 : 499)}
              className="mt-8 w-full bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold py-4 rounded-xl shadow-lg shadow-emerald-500/20 transition-all"
            >
              Start Pro Pass →
            </button>
          </div>

          {/* Annual Pass */}
          <div className="bg-[#F0FDF4] border border-emerald-200 rounded-3xl p-8 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-teal-700 uppercase tracking-widest">Annual Master Pass</span>
              <div className="text-4xl font-extrabold text-slate-900 mt-4">₹3,999<span className="text-sm font-normal text-slate-500">/yr</span></div>
              <p className="text-xs text-slate-600 mt-1">Best value for dedicated learners</p>

              <div className="space-y-3.5 mt-8 pt-8 border-t border-emerald-200 text-sm text-slate-700">
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Everything in Pro Monthly</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> 35% discount savings</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Early access to new AI masterclasses</div>
                <div className="flex items-center gap-3"><Check className="w-4 h-4 text-emerald-600" /> Exclusive community Discord access</div>
              </div>
            </div>

            <button 
              onClick={() => onSelectPlan('Annual Master Pass', 3999)}
              className="mt-8 w-full bg-white border border-emerald-200 hover:bg-emerald-50 text-slate-800 text-sm font-semibold py-3.5 rounded-xl transition-all shadow-sm"
            >
              Get Annual Pass →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
