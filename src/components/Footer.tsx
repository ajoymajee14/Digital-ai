import React from 'react';
import { Sparkles, Github, Twitter, Linkedin, Youtube, Mail } from 'lucide-react';

export function Footer({ setCurrentView }: { setCurrentView: (v: string) => void }) {
  return (
    <footer className="bg-[#05080E] border-t border-white/10 text-slate-400 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 p-[1px]">
                <div className="w-full h-full bg-[#070B14] rounded-[11px] flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">Digital AI Class</span>
            </div>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering the next generation of builders, creators, and professionals with world-class practical artificial intelligence and future-proof skills.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#twitter" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#linkedin" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#youtube" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#github" className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links col 1 */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setCurrentView('courses')} className="hover:text-cyan-400 transition-colors">All Courses</button></li>
              <li><button onClick={() => setCurrentView('courses')} className="hover:text-cyan-400 transition-colors">Generative AI</button></li>
              <li><button onClick={() => setCurrentView('courses')} className="hover:text-cyan-400 transition-colors">Prompt Engineering</button></li>
              <li><button onClick={() => setCurrentView('courses')} className="hover:text-cyan-400 transition-colors">AI Automation</button></li>
              <li><button onClick={() => setCurrentView('pricing')} className="hover:text-cyan-400 transition-colors">Subscription Pass</button></li>
            </ul>
          </div>

          {/* Links col 2 */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Platform</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => setCurrentView('instructors')} className="hover:text-cyan-400 transition-colors">Expert Instructors</button></li>
              <li><button onClick={() => setCurrentView('about')} className="hover:text-cyan-400 transition-colors">About Mission</button></li>
              <li><button onClick={() => setCurrentView('dashboard')} className="hover:text-cyan-400 transition-colors">Student Dashboard</button></li>
              <li><button onClick={() => setCurrentView('admin')} className="hover:text-purple-400 transition-colors">Admin Console</button></li>
              <li><a href="#verify" onClick={(e) => { e.preventDefault(); setCurrentView('verify-cert'); }} className="hover:text-cyan-400 transition-colors">Verify Certificate</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Stay Ahead in AI</h3>
            <p className="text-xs text-slate-400 mb-3">Get weekly prompt engineering tips and AI workflow blueprints directly to your inbox.</p>
            <form onSubmit={(e) => { e.preventDefault(); alert('Subscribed successfully!'); }} className="space-y-2">
              <div className="relative">
                <Mail className="absolute left-3 top-3 w-4 h-4 text-slate-500" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  required
                  className="w-full bg-[#0D1321] border border-white/10 rounded-xl px-9 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold py-2.5 rounded-xl transition-all">
                Subscribe Free →
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Digital AI Class Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-slate-300">Terms of Service</a>
            <a href="#security" className="hover:text-slate-300">Security & Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
