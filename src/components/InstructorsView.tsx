import React from 'react';
import { Sparkles, Star, Award, BookOpen, Users } from 'lucide-react';
import { instructors } from '../data/mockData';

export function InstructorsView() {
  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
            World-Class Faculty
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
            Learn From People Who Do The Work
          </h1>
          <p className="text-slate-400 text-sm mt-3">
            Our instructors are seasoned researchers, founders, and engineers shaping the frontier of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {instructors.map((inst) => (
            <div key={inst.id} className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 text-center shadow-xl flex flex-col justify-between">
              <div>
                <img src={inst.avatar} alt={inst.name} className="w-28 h-28 rounded-full object-cover mx-auto mb-6 border-2 border-indigo-500/50 shadow-lg" />
                <h3 className="text-xl font-bold text-white">{inst.name}</h3>
                <p className="text-xs text-cyan-400 font-medium mt-1 mb-4">{inst.title}</p>
                <p className="text-xs text-slate-300 leading-relaxed">{inst.bio}</p>

                <div className="flex flex-wrap justify-center gap-2 mt-6">
                  {inst.expertise.map((exp, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-slate-300 text-[10px] px-2.5 py-1 rounded-full">
                      {exp}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-6 mt-8 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-center justify-center gap-1.5 font-bold text-amber-400">
                  <Star className="w-4 h-4 fill-current" /> {inst.rating} Rating
                </div>
                <div className="flex items-center justify-center gap-1.5 text-slate-300">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> {inst.coursesCount} Courses
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
