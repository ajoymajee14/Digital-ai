import React, { useState } from 'react';
import { 
  Sparkles, Search, ArrowRight, Brain, Terminal, Zap, TrendingUp, 
  Video, Briefcase, Clock, Star, Users, Award, Play, CheckCircle2, Check, ShieldCheck 
} from 'lucide-react';
import { courses, categoriesList, instructors, testimonials } from '../data/mockData';
import { Course } from '../types';

interface HomeViewProps {
  setCurrentView: (view: string) => void;
  setSelectedCourse: (course: Course) => void;
}

export function HomeView({ setCurrentView, setSelectedCourse }: HomeViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setCurrentView('courses');
    }
  };

  const getCategoryIcon = (iconName: string) => {
    switch(iconName) {
      case 'Brain': return <Brain className="w-6 h-6 text-indigo-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-cyan-400" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-400" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-400" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-emerald-400" />;
      case 'Video': return <Video className="w-6 h-6 text-pink-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-blue-400" />;
      default: return <Clock className="w-6 h-6 text-indigo-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-950 overflow-hidden pt-24 relative">
      {/* Background Soft Green Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-teal-400/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* HERO SECTION */}
      <section className="relative pt-12 pb-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-8">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-semibold tracking-wide uppercase shadow-sm">
                <span className="mr-2">✦</span> The Future of Learning is Here
              </div>

              <h1 className="text-[52px] sm:text-[84px] leading-[0.9] font-extrabold tracking-tighter text-slate-900">
                Master AI.<br />Build Your Future.
              </h1>

              <p className="text-lg text-slate-600 max-w-md leading-relaxed">
                Learn practical AI and digital skills from industry experts through structured, project-based courses designed for the next era of business.
              </p>

              <div className="flex items-center space-x-4 pt-4">
                <button 
                  onClick={() => setCurrentView('pricing')}
                  className="bg-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-emerald-500 shadow-lg shadow-emerald-500/20 transition-all"
                >
                  Explore Courses
                </button>
                <button 
                  onClick={() => setCurrentView('courses')}
                  className="border border-slate-300 hover:bg-emerald-50 text-slate-800 px-8 py-4 rounded-xl font-bold text-base transition-colors"
                >
                  View Curriculum
                </button>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div>
                  <p className="text-2xl font-bold text-slate-900">10,000+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Learners</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">100+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Courses</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">50+</p>
                  <p className="text-xs text-slate-500 uppercase tracking-widest">Experts</p>
                </div>
              </div>
            </div>

            {/* Right Column - Floating AI Learning Dashboard preview */}
            <div className="lg:col-span-6 relative">
              <div className="bg-[#F0FDF4] border border-emerald-200 backdrop-blur-2xl rounded-3xl p-8 shadow-xl relative z-20">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-lg text-slate-900">Learning Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-bold">In Progress</span>
                        <h4 className="text-xl font-bold mt-1 text-slate-900">AI Productivity Masterclass</h4>
                        <p className="text-sm text-slate-600 mt-1">Module 4: Automated Workflows</p>
                      </div>
                      <div className="bg-emerald-100 text-emerald-700 p-2 rounded-xl">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path></svg>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div className="w-[78%] h-full bg-gradient-to-r from-emerald-500 to-teal-400"></div>
                      </div>
                      <span className="text-sm font-bold text-slate-900">78%</span>
                    </div>
                    <button 
                      onClick={() => setCurrentView('player')}
                      className="w-full mt-6 py-3 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 rounded-xl font-semibold transition-all border border-emerald-200"
                    >
                      Continue Learning →
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Hours Learned</p>
                      <p className="text-2xl font-bold mt-1 text-slate-900">42.5h</p>
                    </div>
                    <div className="bg-white p-4 rounded-2xl border border-emerald-100 shadow-sm">
                      <p className="text-xs text-slate-500 uppercase tracking-widest">Certificates</p>
                      <p className="text-2xl font-bold mt-1 text-slate-900">12</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED BY / SOCIAL PROOF */}
      <section className="py-12 border-y border-white/5 bg-[#05080E]/50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-500 mb-8 font-semibold">
            Trusted by ambitious learners building the future at top companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
            <span className="text-lg font-bold tracking-tight text-slate-300 font-mono">OPENAI ALUMNI</span>
            <span className="text-lg font-bold tracking-tight text-slate-300 font-mono">STRIPE BUILDERS</span>
            <span className="text-lg font-bold tracking-tight text-slate-300 font-mono">LINEAR TEAM</span>
            <span className="text-lg font-bold tracking-tight text-slate-300 font-mono">VERCEL ECOSYSTEM</span>
            <span className="text-lg font-bold tracking-tight text-slate-300 font-mono">NOTION LABS</span>
          </div>
        </div>
      </section>

      {/* COURSE SEARCH COMPONENT */}
      <section className="py-12 max-w-4xl mx-auto px-4">
        <form onSubmit={handleSearch} className="relative">
          <div className="flex items-center bg-[#0D1321] border border-white/15 rounded-2xl shadow-2xl p-2 focus-within:border-indigo-500 transition-all">
            <Search className="w-6 h-6 text-slate-400 ml-4" />
            <input 
              type="text" 
              placeholder="What do you want to learn today? (e.g. ChatGPT, Prompt Engineering, Automation)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none"
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl text-sm font-semibold transition-all">
              Search
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-2 mt-3 text-xs text-slate-400 px-2">
            <span className="font-semibold text-slate-300">Popular:</span>
            <button type="button" onClick={() => setCurrentView('courses')} className="bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">ChatGPT</button>
            <button type="button" onClick={() => setCurrentView('courses')} className="bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">Prompt Engineering</button>
            <button type="button" onClick={() => setCurrentView('courses')} className="bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">AI Automation</button>
            <button type="button" onClick={() => setCurrentView('courses')} className="bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-lg border border-white/10">Digital Marketing</button>
          </div>
        </form>
      </section>

      {/* CATEGORIES SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Explore Skills That Matter</h2>
          <p className="text-slate-400 text-sm mt-2">Structured curriculums designed to take you from absolute beginner to practitioner.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesList.map((cat) => (
            <div 
              key={cat.id}
              onClick={() => setCurrentView('courses')}
              className="group bg-[#0D1321] border border-white/10 hover:border-indigo-500/50 rounded-2xl p-6 cursor-pointer transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-indigo-500/10"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {getCategoryIcon(cat.icon)}
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{cat.name}</h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">{cat.description}</p>
              <div className="mt-4 flex items-center justify-between text-xs font-semibold text-indigo-400">
                <span>{cat.count} Courses</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED COURSES */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Learn From The Best</h2>
            <p className="text-slate-400 text-sm mt-2">Practical courses designed to help you build real-world skills.</p>
          </div>
          <button 
            onClick={() => setCurrentView('courses')}
            className="text-sm font-semibold text-cyan-400 hover:underline flex items-center gap-1.5"
          >
            View Full Library ({courses.length} courses) <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <div 
              key={course.id}
              className="group bg-[#0D1321] border border-white/10 rounded-3xl overflow-hidden shadow-xl hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.thumbnail} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-[#070B14]/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 border border-white/10">
                  {course.category}
                </div>
                {course.isSubscriptionIncluded && (
                  <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow">
                    PRO PASS
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1 text-amber-400 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-current" /> {course.rating}
                    </span>
                    <span>•</span>
                    <span>{course.studentsCount.toLocaleString()} students</span>
                    <span>•</span>
                    <span>{course.duration}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {course.subtitle}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block">Instructor</span>
                    <span className="text-xs font-semibold text-slate-300">{course.instructor.name}</span>
                  </div>
                  <button 
                    onClick={() => { setSelectedCourse(course); setCurrentView('course-detail'); }}
                    className="bg-white/10 hover:bg-indigo-600 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all"
                  >
                    Preview Course
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SUBSCRIPTION PROMOTION */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-indigo-900/60 via-purple-900/60 to-[#070B14] border border-indigo-500/30 p-8 sm:p-14 overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                All-Access Pass
              </span>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                One Subscription.<br />Unlimited Learning.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-lg leading-relaxed">
                Unlock our growing library of premium courses, live workshops, verified certificates, and AI workflow blueprints.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Full course library access
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> New courses added monthly
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Verified certificates
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" /> Cancel anytime
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#070B14]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 text-center space-y-6 shadow-2xl">
              <div>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Pro Monthly Pass</span>
                <div className="text-4xl font-extrabold text-white mt-2">₹499<span className="text-sm font-normal text-slate-400">/month</span></div>
                <p className="text-xs text-cyan-400 mt-1">or save 35% with annual membership</p>
              </div>

              <button 
                onClick={() => setCurrentView('pricing')}
                className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all"
              >
                Start Learning Today →
              </button>

              <p className="text-[11px] text-slate-500">7-day risk-free money back guarantee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center max-w-xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white tracking-tight">How Digital AI Class Works</h2>
          <p className="text-slate-400 text-sm mt-2">Four simple steps to transform your career with AI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { step: '01', title: 'Choose Your Path', desc: 'Find courses and curated tracks that match your exact career goals.' },
            { step: '02', title: 'Start Learning', desc: 'Watch concise, high-production lessons from elite industry experts.' },
            { step: '03', title: 'Build Real Skills', desc: 'Practice with hands-on exercises, prompts, and capstone projects.' },
            { step: '04', title: 'Earn Certificate', desc: 'Receive your verified digital certificate with secure QR verification.' },
          ].map((item, idx) => (
            <div key={idx} className="bg-[#0D1321] border border-white/10 rounded-2xl p-6 relative">
              <span className="text-4xl font-extrabold text-indigo-500/30 font-mono block mb-4">{item.step}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* INSTRUCTORS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white tracking-tight">Learn From People Who Do The Work</h2>
            <p className="text-slate-400 text-sm mt-2">Instructors with real-world enterprise and startup engineering experience.</p>
          </div>
          <button onClick={() => setCurrentView('instructors')} className="text-sm font-semibold text-cyan-400 hover:underline">
            View All Instructors →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst) => (
            <div key={inst.id} className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 text-center">
              <img src={inst.avatar} alt={inst.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-2 border-indigo-500/50" />
              <h3 className="text-lg font-bold text-white">{inst.name}</h3>
              <p className="text-xs text-cyan-400 font-medium mb-3">{inst.title}</p>
              <p className="text-xs text-slate-400 mb-6 leading-relaxed">{inst.bio}</p>
              <div className="flex items-center justify-center gap-4 text-xs text-slate-300 pt-4 border-t border-white/10">
                <span>⭐ {inst.rating} Rating</span>
                <span>📚 {inst.coursesCount} Courses</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-white tracking-tight">Loved By Ambitious Learners</h2>
          <p className="text-slate-400 text-sm mt-2">Here is what our community has to say about their experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-sm text-slate-300 leading-relaxed italic">"{t.content}"</p>
              </div>

              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-white/10">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <h4 className="text-xs font-bold text-white">{t.name}</h4>
                  <p className="text-[10px] text-slate-400">{t.profession}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
