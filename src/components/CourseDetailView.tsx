import React, { useState } from 'react';
import { Star, Users, Clock, Award, CheckCircle2, ChevronDown, ChevronUp, Play, Heart, ShieldCheck, ArrowLeft } from 'lucide-react';
import { Course } from '../types';

interface CourseDetailViewProps {
  course: Course;
  setCurrentView: (view: string) => void;
  onEnroll: (course: Course) => void;
}

export function CourseDetailView({ course, setCurrentView, onEnroll }: CourseDetailViewProps) {
  const [expandedModule, setExpandedModule] = useState<string | null>(course.modules[0]?.id || null);
  const [isWishlisted, setIsWishlisted] = useState(false);

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <button 
          onClick={() => setCurrentView('courses')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white mb-6 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Library
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Info */}
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3">
              <span className="bg-indigo-500/10 border border-indigo-500/20 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
                {course.category}
              </span>
              <span className="bg-white/5 border border-white/10 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">
                {course.level}
              </span>
              {course.isSubscriptionIncluded && (
                <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Included in Pro Pass
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {course.title}
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              {course.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-300 pt-2 pb-4 border-b border-white/10">
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <Star className="w-4 h-4 fill-current" /> {course.rating} ({course.reviewsCount} reviews)
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-slate-400" /> {course.studentsCount.toLocaleString()} students
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-slate-400" /> {course.duration}
              </div>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-white">About This Course</h2>
              <p className="text-sm text-slate-300 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* What you will learn */}
            <div className="bg-[#0D1321] border border-white/10 rounded-2xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white">What You'll Master</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Advanced prompt architectures & system instructions
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Connecting LLMs with Make & Zapier automation
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Building custom AI assistants with vector RAG
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" /> Verified certificate upon final project completion
                </div>
              </div>
            </div>

            {/* Course Curriculum / Modules */}
            <div className="space-y-4 pt-4">
              <h2 className="text-xl font-bold text-white">Course Curriculum</h2>
              <div className="space-y-3">
                {course.modules.length === 0 ? (
                  <p className="text-sm text-slate-400 bg-[#0D1321] p-6 rounded-2xl border border-white/10">Modules and lessons are regularly updated for Pro subscribers.</p>
                ) : (
                  course.modules.map((mod) => (
                    <div key={mod.id} className="bg-[#0D1321] border border-white/10 rounded-2xl overflow-hidden">
                      <button 
                        onClick={() => setExpandedModule(expandedModule === mod.id ? null : mod.id)}
                        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                      >
                        <div>
                          <h4 className="text-sm font-bold text-white">{mod.title}</h4>
                          <span className="text-xs text-slate-400">{mod.lessons.length} lessons • {mod.duration}</span>
                        </div>
                        {expandedModule === mod.id ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>

                      {expandedModule === mod.id && (
                        <div className="px-6 pb-4 space-y-2 border-t border-white/10 pt-3">
                          {mod.lessons.map((les) => (
                            <div key={les.id} className="flex items-center justify-between py-2 text-xs text-slate-300">
                              <div className="flex items-center gap-2.5">
                                <Play className="w-3.5 h-3.5 text-indigo-400" />
                                <span>{les.title}</span>
                              </div>
                              <span className="text-slate-500">{les.duration}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Instructor Bio */}
            <div className="bg-[#0D1321] border border-white/10 rounded-2xl p-6 flex items-center gap-5 mt-8">
              <img src={course.instructor.avatar} alt={course.instructor.name} className="w-16 h-16 rounded-full object-cover border-2 border-indigo-500/40" />
              <div>
                <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Instructor</span>
                <h3 className="text-base font-bold text-white">{course.instructor.name}</h3>
                <p className="text-xs text-slate-400 mt-1">{course.instructor.title}</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">{course.instructor.bio}</p>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Purchase Card */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-2xl space-y-6">
              <div className="relative h-48 rounded-2xl overflow-hidden">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-xs font-semibold text-cyan-300 bg-black/60 px-3 py-1 rounded-full">Preview Available</span>
                </div>
              </div>

              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-3xl font-extrabold text-white">₹{course.price.toLocaleString()}</span>
                  {course.originalPrice && (
                    <span className="text-sm text-slate-500 line-through">₹{course.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <p className="text-xs text-emerald-400 mt-1">✓ Lifetime access + Future updates</p>
              </div>

              <div className="space-y-3">
                <button 
                  onClick={() => onEnroll(course)}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold py-4 rounded-xl shadow-lg shadow-indigo-600/30 transition-all text-center"
                >
                  Buy Course Now
                </button>
                <button 
                  onClick={() => setIsWishlisted(!isWishlisted)}
                  className={`w-full py-3 rounded-xl border text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                    isWishlisted ? 'bg-red-500/10 text-red-400 border-red-500/30' : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current' : ''}`} />
                  {isWishlisted ? 'Saved to Wishlist' : 'Add to Wishlist'}
                </button>
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-cyan-400" /> 7-Day Money-Back Guarantee
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-cyan-400" /> Verified Certificate included
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-4 h-4 text-cyan-400" /> Full mobile and desktop access
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
