import React, { useState } from 'react';
import { 
  BookOpen, Award, Clock, CheckCircle2, Play, BarChart3, Heart, 
  CreditCard, User as UserIcon, Settings, Shield, ArrowRight, Download 
} from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { User, Course, Certificate } from '../types';
import { courses } from '../data/mockData';

interface DashboardViewProps {
  user: User;
  setCurrentView: (view: string) => void;
  setSelectedCourse: (course: Course) => void;
  onOpenCertificate: (cert: Certificate) => void;
}

const weeklyData = [
  { day: 'Mon', hours: 1.2 },
  { day: 'Tue', hours: 2.0 },
  { day: 'Wed', hours: 0.8 },
  { day: 'Thu', hours: 2.5 },
  { day: 'Fri', hours: 1.5 },
  { day: 'Sat', hours: 3.0 },
  { day: 'Sun', hours: 2.2 },
];

export function DashboardView({ user, setCurrentView, setSelectedCourse, onOpenCertificate }: DashboardViewProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'learning' | 'wishlist' | 'certificates' | 'billing'>('overview');
  const [courseFilter, setCourseFilter] = useState<'all' | 'in-progress' | 'completed'>('all');

  const sampleCertificate: Certificate = {
    id: 'crt_101',
    userId: user.id,
    userName: user.name,
    courseId: courses[0].id,
    courseName: courses[0].title,
    instructorName: courses[0].instructor.name,
    issuedAt: '2026-02-15',
    certificateId: 'DAC-8849-AI2026',
    qrCodeUrl: 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=DAC-8849-AI2026',
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4 bg-[#0D1321] border border-white/10 rounded-3xl p-8 shadow-2xl">
          <div className="flex items-center gap-5">
            <img src={user.avatar} alt={user.name} className="w-16 h-16 rounded-2xl object-cover border-2 border-cyan-400" />
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white">Good evening, {user.name} 👋</h1>
              <p className="text-xs text-cyan-400 mt-1">Ready to continue your AI learning streak today?</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="bg-indigo-600/20 border border-indigo-500/30 px-4 py-2 rounded-2xl text-center">
              <span className="block text-xs text-slate-400">Active Pass</span>
              <span className="text-sm font-bold text-indigo-300 uppercase">{user.subscription} Pass</span>
            </div>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          <button 
            onClick={() => setActiveTab('overview')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'overview' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'}`}
          >
            Overview
          </button>
          <button 
            onClick={() => setActiveTab('learning')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'learning' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'}`}
          >
            My Learning
          </button>
          <button 
            onClick={() => setActiveTab('certificates')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'certificates' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'}`}
          >
            Certificates ({user.certificatesCount})
          </button>
          <button 
            onClick={() => setActiveTab('wishlist')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'wishlist' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'}`}
          >
            Wishlist
          </button>
          <button 
            onClick={() => setActiveTab('billing')}
            className={`px-5 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeTab === 'billing' ? 'bg-indigo-600 text-white shadow-lg' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'}`}
          >
            Billing & Invoices
          </button>
        </div>

        {/* Tab Content: OVERVIEW */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
                  <BookOpen className="w-5 h-5" />
                </div>
                <p className="text-2xl font-extrabold text-white">4</p>
                <p className="text-xs text-slate-400 mt-1">Courses In Progress</p>
              </div>

              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-2xl font-extrabold text-white">{user.completedCoursesCount}</p>
                <p className="text-xs text-slate-400 mt-1">Completed Courses</p>
              </div>

              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <p className="text-2xl font-extrabold text-white">{user.learningHours} hrs</p>
                <p className="text-xs text-slate-400 mt-1">Total Learning Time</p>
              </div>

              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <p className="text-2xl font-extrabold text-white">{user.certificatesCount}</p>
                <p className="text-xs text-slate-400 mt-1">Verified Certificates</p>
              </div>
            </div>

            {/* Continue Learning Banner */}
            <div className="bg-gradient-to-r from-indigo-950/60 via-[#0D1321] to-[#070B14] border border-indigo-500/30 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="flex items-center gap-6">
                <img src={courses[0].thumbnail} alt={courses[0].title} className="w-28 h-28 rounded-2xl object-cover shrink-0" />
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full uppercase">Continue Learning</span>
                  <h3 className="text-lg font-bold text-white">{courses[0].title}</h3>
                  <p className="text-xs text-slate-300">Module 02 • Building AI Workflows</p>
                  <div className="w-48 bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-cyan-400 w-[78%] h-full rounded-full"></div>
                  </div>
                </div>
              </div>

              <button 
                onClick={() => setCurrentView('player')}
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2 whitespace-nowrap"
              >
                Resume Lesson <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Weekly Activity Graph */}
            <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-base font-bold text-white">Learning Activity</h3>
                  <p className="text-xs text-slate-400">Hours spent watching lessons and building projects this week</p>
                </div>
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">12.2 hrs this week</span>
              </div>

              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={weeklyData}>
                    <XAxis dataKey="day" stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#070B14', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff' }} 
                    />
                    <Bar dataKey="hours" fill="#6366F1" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: MY LEARNING */}
        {activeTab === 'learning' && (
          <div className="space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <button 
                onClick={() => setCourseFilter('all')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${courseFilter === 'all' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-300'}`}
              >
                All Enrolled (3)
              </button>
              <button 
                onClick={() => setCourseFilter('in-progress')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${courseFilter === 'in-progress' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-300'}`}
              >
                In Progress (2)
              </button>
              <button 
                onClick={() => setCourseFilter('completed')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold ${courseFilter === 'completed' ? 'bg-indigo-600 text-white' : 'bg-white/5 text-slate-300'}`}
              >
                Completed (1)
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {courses.slice(0, 3).map((course, idx) => (
                <div key={course.id} className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl flex flex-col justify-between">
                  <div>
                    <img src={course.thumbnail} alt={course.title} className="w-full h-40 object-cover rounded-2xl mb-4" />
                    <h3 className="text-base font-bold text-white">{course.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{course.instructor.name}</p>

                    <div className="mt-4 space-y-1.5">
                      <div className="flex justify-between text-xs text-slate-400">
                        <span>Progress</span>
                        <span>{idx === 0 ? '78%' : idx === 1 ? '42%' : '100%'}</span>
                      </div>
                      <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                        <div 
                          className="bg-indigo-500 h-full rounded-full" 
                          style={{ width: idx === 0 ? '78%' : idx === 1 ? '42%' : '100%' }}
                        ></div>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => { setSelectedCourse(course); setCurrentView('player'); }}
                    className="mt-6 w-full bg-white/10 hover:bg-indigo-600 text-white text-xs font-semibold py-3 rounded-xl transition-all"
                  >
                    {idx === 2 ? 'Review Course' : 'Continue Learning'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tab Content: CERTIFICATES */}
        {activeTab === 'certificates' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0D1321] border border-indigo-500/40 rounded-3xl p-8 shadow-2xl relative overflow-hidden space-y-4">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl"></div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">Verified Certificate</span>
                <span className="text-xs text-slate-400 font-mono">ID: {sampleCertificate.certificateId}</span>
              </div>
              <h3 className="text-xl font-bold text-white">{sampleCertificate.courseName}</h3>
              <p className="text-xs text-slate-300">Awarded to <span className="text-white font-semibold">{sampleCertificate.userName}</span> on {sampleCertificate.issuedAt}</p>
              
              <div className="pt-4 flex items-center gap-4">
                <button 
                  onClick={() => onOpenCertificate(sampleCertificate)}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow transition-all flex items-center gap-2"
                >
                  <Download className="w-4 h-4" /> View & Download Certificate
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Content: BILLING */}
        {activeTab === 'billing' && (
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 space-y-6 shadow-xl">
            <h3 className="text-lg font-bold text-white">Subscription & Invoices</h3>
            <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
              <div>
                <p className="text-sm font-semibold text-white">Pro Monthly Pass Active</p>
                <p className="text-xs text-slate-400">Renews automatically on March 15, 2026</p>
              </div>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full">Active</span>
            </div>

            <h4 className="text-sm font-bold text-white pt-4">Recent Invoices</h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span>INV-2026-001 • Pro Pass (Feb 2026)</span>
                <span className="text-white font-semibold">₹499.00</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
