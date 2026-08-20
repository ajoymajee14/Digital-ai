import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, User as UserIcon, BookOpen, Shield, LogOut, ChevronDown } from 'lucide-react';
import { User } from '../types';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  user: User | null;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export function Navbar({ currentView, setCurrentView, user, onOpenAuth, onLogout }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md border-b border-emerald-100 py-3 shadow-sm' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => setCurrentView('home')} 
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-400 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/20 group-hover:scale-105 transition-transform">
            <div className="w-4 h-4 bg-white rounded-sm rotate-45"></div>
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">Digital AI Class</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <button 
            onClick={() => setCurrentView('home')} 
            className={`hover:text-emerald-600 transition-colors ${currentView === 'home' ? 'text-emerald-600 font-semibold' : ''}`}
          >
            Home
          </button>
          <button 
            onClick={() => setCurrentView('courses')} 
            className={`hover:text-emerald-600 transition-colors ${currentView === 'courses' ? 'text-emerald-600 font-semibold' : ''}`}
          >
            Courses
          </button>
          <button 
            onClick={() => setCurrentView('courses')} 
            className="hover:text-emerald-600 transition-colors"
          >
            Library
          </button>
          <button 
            onClick={() => setCurrentView('pricing')} 
            className={`hover:text-emerald-600 transition-colors ${currentView === 'pricing' ? 'text-emerald-600 font-semibold' : ''}`}
          >
            Pricing
          </button>
          <button 
            onClick={() => setCurrentView('instructors')} 
            className={`hover:text-emerald-600 transition-colors ${currentView === 'instructors' ? 'text-emerald-600 font-semibold' : ''}`}
          >
            Instructors
          </button>
        </nav>

        {/* Right Action / User State */}
        <div className="hidden md:flex items-center gap-6">
          {user ? (
            <div className="relative">
              <button 
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 hover:border-emerald-400 px-3 py-2 rounded-xl transition-all"
              >
                <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover border border-emerald-400/40" />
                <div className="text-left">
                  <span className="block text-xs font-semibold text-slate-900">{user.name}</span>
                  <span className="block text-[10px] text-emerald-600 uppercase tracking-wider">{user.subscription} Pass</span>
                </div>
                <ChevronDown className="w-4 h-4 text-slate-500" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white border border-emerald-100 rounded-2xl shadow-xl py-2 z-50">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-xs text-slate-500">Signed in as</p>
                    <p className="text-sm font-semibold text-slate-900 truncate">{user.email}</p>
                  </div>
                  <button 
                    onClick={() => { setCurrentView('dashboard'); setUserDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-slate-700 hover:bg-emerald-50 flex items-center gap-2.5"
                  >
                    <BookOpen className="w-4 h-4 text-emerald-600" /> My Learning Dashboard
                  </button>
                  {user.role === 'admin' && (
                    <button 
                      onClick={() => { setCurrentView('admin'); setUserDropdownOpen(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm text-emerald-700 hover:bg-emerald-50 flex items-center gap-2.5"
                    >
                      <Shield className="w-4 h-4 text-emerald-600" /> Admin Console
                    </button>
                  )}
                  <div className="border-t border-slate-100 my-1"></div>
                  <button 
                    onClick={() => { onLogout(); setUserDropdownOpen(false); }}
                    className="w-full text-left px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 flex items-center gap-2.5"
                  >
                    <LogOut className="w-4 h-4" /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-6">
              <button 
                onClick={onOpenAuth}
                className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors"
              >
                Log In
              </button>
              <button 
                onClick={onOpenAuth}
                className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all shadow-lg shadow-emerald-500/20"
              >
                Start Learning →
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#070B14] border-b border-white/10 p-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            <button 
              onClick={() => { setCurrentView('home'); setMobileMenuOpen(false); }}
              className="text-left text-base font-medium text-slate-200 py-2 border-b border-white/5"
            >
              Home
            </button>
            <button 
              onClick={() => { setCurrentView('courses'); setMobileMenuOpen(false); }}
              className="text-left text-base font-medium text-slate-200 py-2 border-b border-white/5"
            >
              Courses & Library
            </button>
            <button 
              onClick={() => { setCurrentView('pricing'); setMobileMenuOpen(false); }}
              className="text-left text-base font-medium text-slate-200 py-2 border-b border-white/5"
            >
              Pricing
            </button>
            <button 
              onClick={() => { setCurrentView('instructors'); setMobileMenuOpen(false); }}
              className="text-left text-base font-medium text-slate-200 py-2 border-b border-white/5"
            >
              Instructors
            </button>
            <button 
              onClick={() => { setCurrentView('about'); setMobileMenuOpen(false); }}
              className="text-left text-base font-medium text-slate-200 py-2 border-b border-white/5"
            >
              About
            </button>
            
            {user ? (
              <div className="pt-2 flex flex-col gap-3">
                <button 
                  onClick={() => { setCurrentView('dashboard'); setMobileMenuOpen(false); }}
                  className="w-full bg-white/5 py-3 rounded-xl text-center text-sm font-semibold text-white"
                >
                  Dashboard
                </button>
                {user.role === 'admin' && (
                  <button 
                    onClick={() => { setCurrentView('admin'); setMobileMenuOpen(false); }}
                    className="w-full bg-purple-600/20 text-purple-300 py-3 rounded-xl text-center text-sm font-semibold border border-purple-500/30"
                  >
                    Admin Console
                  </button>
                )}
                <button 
                  onClick={() => { onLogout(); setMobileMenuOpen(false); }}
                  className="w-full text-red-400 py-2 text-center text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="pt-4 flex flex-col gap-3">
                <button 
                  onClick={() => { onOpenAuth(); setMobileMenuOpen(false); }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl text-center font-medium shadow-lg"
                >
                  Start Learning →
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
