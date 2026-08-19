import React, { useState } from 'react';
import { ShieldCheck, Search, Award, CheckCircle2, ArrowLeft } from 'lucide-react';

export function VerifyCertificateView({ setCurrentView }: { setCurrentView: (v: string) => void }) {
  const [certId, setCertId] = useState('DAC-8849-AI2026');
  const [verifiedResult, setVerifiedResult] = useState<any | null>({
    id: 'DAC-8849-AI2026',
    name: 'Alex Rivera',
    course: 'AI Mastery — From Beginner to Power User',
    instructor: 'Dr. Marcus Thorne',
    issuedDate: '2026-02-15',
    status: 'Valid & Authenticated',
  });

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (certId.trim()) {
      setVerifiedResult({
        id: certId,
        name: 'Alex Rivera',
        course: 'AI Mastery — From Beginner to Power User',
        instructor: 'Dr. Marcus Thorne',
        issuedDate: '2026-02-15',
        status: 'Valid & Authenticated',
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 px-4">
      <div className="max-w-2xl mx-auto space-y-8">
        <button 
          onClick={() => setCurrentView('home')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </button>

        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-cyan-400/20 text-cyan-400 border border-cyan-400/30">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Public Certificate Verification</h1>
          <p className="text-sm text-slate-400">Verify authenticity of any Digital AI Class certificate instantly.</p>
        </div>

        <form onSubmit={handleVerify} className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-2xl flex gap-3">
          <input 
            type="text" 
            placeholder="Enter Certificate ID (e.g. DAC-8849-AI2026)"
            value={certId}
            onChange={(e) => setCertId(e.target.value)}
            className="flex-1 bg-[#070B14] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
          />
          <button type="submit" className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-6 py-3 rounded-xl transition-all">
            Verify ID
          </button>
        </form>

        {verifiedResult && (
          <div className="bg-gradient-to-br from-indigo-950/60 to-[#0D1321] border border-emerald-500/40 rounded-3xl p-8 shadow-2xl space-y-6">
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/30 p-3 rounded-2xl text-emerald-400">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span className="text-xs font-bold uppercase tracking-wider">{verifiedResult.status}</span>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Certificate ID:</span>
                <span className="font-mono text-cyan-400 font-semibold">{verifiedResult.id}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Recipient Name:</span>
                <span className="text-white font-semibold">{verifiedResult.name}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Course Title:</span>
                <span className="text-white font-semibold text-right max-w-xs">{verifiedResult.course}</span>
              </div>
              <div className="flex justify-between border-b border-white/10 pb-3">
                <span className="text-slate-400">Instructor:</span>
                <span className="text-white font-semibold">{verifiedResult.instructor}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Issue Date:</span>
                <span className="text-white font-semibold">{verifiedResult.issuedDate}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
