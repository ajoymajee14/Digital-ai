import React, { useState } from 'react';
import { 
  Shield, BarChart3, BookOpen, Users, CreditCard, Tag, Bell, 
  Settings, TrendingUp, DollarSign, Sparkles, Plus, Trash2, Edit3, CheckCircle2 
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { courses, mockCoupons, mockTransactions, mockNotificationTemplates } from '../data/mockData';

const revenueData = [
  { month: 'Sep', revenue: 140000, users: 1200 },
  { month: 'Oct', revenue: 210000, users: 1800 },
  { month: 'Nov', revenue: 380000, users: 2900 },
  { month: 'Dec', revenue: 520000, users: 4100 },
  { month: 'Jan', revenue: 740000, users: 6800 },
  { month: 'Feb', revenue: 990000, users: 10500 },
];

export function AdminDashboardView({ setCurrentView }: { setCurrentView: (v: string) => void }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'users' | 'payments' | 'coupons' | 'notifications' | 'analytics'>('overview');
  const [adminCourses, setAdminCourses] = useState(courses);
  const [couponsList, setCouponsList] = useState(mockCoupons);
  const [newCouponCode, setNewCouponCode] = useState('');
  const [newCouponDiscount, setNewCouponDiscount] = useState('20');

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (newCouponCode.trim()) {
      setCouponsList([
        {
          id: `cpn_${Date.now()}`,
          code: newCouponCode.toUpperCase(),
          discountPercentage: Number(newCouponDiscount),
          fixedDiscount: 0,
          expiryDate: '2026-12-31',
          maxUses: 200,
          usedCount: 0,
          isActive: true,
        },
        ...couponsList,
      ]);
      setNewCouponCode('');
      alert('Coupon created successfully!');
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Admin Header Banner */}
        <div className="bg-gradient-to-r from-purple-950/60 via-[#0D1321] to-[#070B14] border border-purple-500/40 rounded-3xl p-8 mb-8 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
              <Shield className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-purple-400 uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">Secure Admin Console</span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">Platform Command Center</h1>
              <p className="text-xs text-slate-400">Manage courses, revenue streams, users, and automated notifications.</p>
            </div>
          </div>

          <button 
            onClick={() => setCurrentView('home')}
            className="bg-white/10 hover:bg-white/15 text-white text-xs font-semibold px-5 py-2.5 rounded-xl border border-white/10 transition-all"
          >
            Exit Admin Mode
          </button>
        </div>

        {/* Admin Navigation Sidebar / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
          {[
            { id: 'overview', label: 'Overview', icon: BarChart3 },
            { id: 'courses', label: 'Course Management', icon: BookOpen },
            { id: 'users', label: 'User Directory', icon: Users },
            { id: 'payments', label: 'Payments & Revenue', icon: CreditCard },
            { id: 'coupons', label: 'Coupons', icon: Tag },
            { id: 'notifications', label: 'Notifications', icon: Bell },
            { id: 'analytics', label: 'Advanced Analytics', icon: TrendingUp },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button 
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                  activeTab === tab.id ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/30' : 'bg-[#0D1321] text-slate-300 hover:bg-white/5 border border-white/10'
                }`}
              >
                <Icon className="w-4 h-4" /> {tab.label}
              </button>
            );
          })}
        </div>

        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <span className="text-xs text-slate-400 block mb-1">Total Revenue</span>
                <p className="text-3xl font-extrabold text-white">₹990,000</p>
                <span className="text-[10px] text-emerald-400 font-semibold mt-2 block">+34% from last month</span>
              </div>
              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <span className="text-xs text-slate-400 block mb-1">Active Subscribers</span>
                <p className="text-3xl font-extrabold text-white">4,820</p>
                <span className="text-[10px] text-emerald-400 font-semibold mt-2 block">+182 this week</span>
              </div>
              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <span className="text-xs text-slate-400 block mb-1">Total Students</span>
                <p className="text-3xl font-extrabold text-white">10,500</p>
                <span className="text-[10px] text-cyan-400 font-semibold mt-2 block">Across 32 countries</span>
              </div>
              <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl">
                <span className="text-xs text-slate-400 block mb-1">Completion Rate</span>
                <p className="text-3xl font-extrabold text-white">88.4%</p>
                <span className="text-[10px] text-purple-400 font-semibold mt-2 block">Industry leading</span>
              </div>
            </div>

            {/* Revenue Chart */}
            <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 shadow-xl">
              <h3 className="text-base font-bold text-white mb-6">Revenue Growth Over Time (INR)</h3>
              <div className="h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={revenueData}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                    <XAxis dataKey="month" stroke="#94A3B8" fontSize={12} />
                    <YAxis stroke="#94A3B8" fontSize={12} />
                    <Tooltip contentStyle={{ backgroundColor: '#070B14', borderColor: 'rgba(255,255,255,0.1)', borderRadius: '12px' }} />
                    <Area type="monotone" dataKey="revenue" stroke="#8B5CF6" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* COURSES MANAGEMENT TAB */}
        {activeTab === 'courses' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-white">Manage Platform Courses ({adminCourses.length})</h3>
              <button 
                onClick={() => alert('Course creator modal opened.')}
                className="bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold px-4 py-2.5 rounded-xl flex items-center gap-2 shadow"
              >
                <Plus className="w-4 h-4" /> Create New Course
              </button>
            </div>

            <div className="bg-[#0D1321] border border-white/10 rounded-3xl overflow-hidden shadow-xl">
              <div className="divide-y divide-white/10">
                {adminCourses.map((c) => (
                  <div key={c.id} className="p-5 flex items-center justify-between hover:bg-white/5">
                    <div className="flex items-center gap-4">
                      <img src={c.thumbnail} alt={c.title} className="w-12 h-12 rounded-xl object-cover" />
                      <div>
                        <h4 className="text-sm font-bold text-white">{c.title}</h4>
                        <p className="text-xs text-slate-400">{c.category} • {c.level} • ₹{c.price}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-semibold">Published</span>
                      <button onClick={() => alert(`Editing course: ${c.title}`)} className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-xl">
                        <Edit3 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* USERS TAB */}
        {activeTab === 'users' && (
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white">Registered Students & Instructors</h3>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <div>
                  <p className="font-bold text-white">Alex Rivera</p>
                  <p className="text-slate-400">alex.rivera@example.com • Pro Pass Active</p>
                </div>
                <span className="text-cyan-400 font-semibold">Student</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl">
                <div>
                  <p className="font-bold text-white">Dr. Elena Vance</p>
                  <p className="text-slate-400">elena@digitalaiclass.com • Admin Access</p>
                </div>
                <span className="text-purple-400 font-semibold">Administrator</span>
              </div>
            </div>
          </div>
        )}

        {/* PAYMENTS TAB */}
        {activeTab === 'payments' && (
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white">Payment Transactions & Invoices</h3>
            <div className="space-y-3">
              {mockTransactions.map((txn) => (
                <div key={txn.id} className="p-4 bg-white/5 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <p className="font-bold text-white">{txn.userName} — {txn.itemTitle}</p>
                    <p className="text-slate-400">{txn.date} • Method: {txn.method} • {txn.invoiceId}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-extrabold text-emerald-400">₹{txn.amount}</span>
                    <span className="block text-[10px] text-emerald-500 uppercase">{txn.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COUPONS TAB */}
        {activeTab === 'coupons' && (
          <div className="space-y-6">
            <form onSubmit={handleCreateCoupon} className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl flex gap-3 items-end">
              <div className="flex-1">
                <label className="block text-xs font-medium text-slate-300 mb-1">New Coupon Code</label>
                <input 
                  type="text" 
                  placeholder="e.g. SUMMERAI50"
                  value={newCouponCode}
                  onChange={(e) => setNewCouponCode(e.target.value)}
                  className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white uppercase placeholder-slate-600 focus:outline-none"
                />
              </div>
              <div className="w-32">
                <label className="block text-xs font-medium text-slate-300 mb-1">Discount %</label>
                <input 
                  type="number" 
                  value={newCouponDiscount}
                  onChange={(e) => setNewCouponDiscount(e.target.value)}
                  className="w-full bg-[#070B14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none"
                />
              </div>
              <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-2.5 rounded-xl text-xs">
                Create Coupon
              </button>
            </form>

            <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl space-y-3">
              <h3 className="text-base font-bold text-white mb-4">Active Discount Coupons</h3>
              {couponsList.map((cpn) => (
                <div key={cpn.id} className="p-4 bg-white/5 rounded-2xl flex items-center justify-between text-xs">
                  <div>
                    <span className="font-mono font-bold text-cyan-400 text-sm">{cpn.code}</span>
                    <p className="text-slate-400">{cpn.discountPercentage}% Discount • Used {cpn.usedCount} times</p>
                  </div>
                  <span className="bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full font-semibold">Active</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* NOTIFICATIONS TAB */}
        {activeTab === 'notifications' && (
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl space-y-4">
            <h3 className="text-lg font-bold text-white">Automated Notification Templates</h3>
            <div className="space-y-3">
              {mockNotificationTemplates.map((nt) => (
                <div key={nt.id} className="p-4 bg-white/5 rounded-2xl space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-cyan-300 uppercase">{nt.type} — {nt.trigger}</span>
                    <span className="bg-emerald-500/10 text-emerald-400 px-2.5 py-0.5 rounded-full font-semibold">Active</span>
                  </div>
                  <p className="text-white font-semibold">Subject: {nt.subject}</p>
                  <p className="text-slate-400">{nt.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ANALYTICS TAB */}
        {activeTab === 'analytics' && (
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-8 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white">Advanced Engagement & Conversion Analytics</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="p-6 bg-white/5 rounded-2xl">
                <span className="text-xs text-slate-400">Visitor-to-Pro Conversion</span>
                <p className="text-3xl font-extrabold text-cyan-400 mt-2">6.8%</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl">
                <span className="text-xs text-slate-400">Monthly Churn Rate</span>
                <p className="text-3xl font-extrabold text-emerald-400 mt-2">1.4%</p>
              </div>
              <div className="p-6 bg-white/5 rounded-2xl">
                <span className="text-xs text-slate-400">Average Watch Time / User</span>
                <p className="text-3xl font-extrabold text-purple-400 mt-2">4.2 hrs/wk</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
