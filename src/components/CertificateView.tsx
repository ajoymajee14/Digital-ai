import React from 'react';
import { Award, Download, Share2, CheckCircle2, ArrowLeft } from 'lucide-react';
import { Certificate } from '../types';

interface CertificateViewProps {
  certificate: Certificate;
  setCurrentView: (v: string) => void;
}

export function CertificateView({ certificate, setCurrentView }: CertificateViewProps) {
  const handleDownload = () => {
    alert('Certificate downloaded successfully as PDF!');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(`https://digitalaiclass.com/verify/${certificate.certificateId}`);
    alert('Certificate verification link copied to clipboard!');
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white pt-28 pb-20 flex flex-col items-center justify-center px-4">
      <div className="max-w-4xl w-full space-y-6">
        <button 
          onClick={() => setCurrentView('dashboard')}
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white bg-white/5 px-3.5 py-2 rounded-xl border border-white/10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </button>

        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-cyan-400/20 text-cyan-400 border border-cyan-400/30 mb-2">
            🎉
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Congratulations, {certificate.userName}!</h1>
          <p className="text-sm text-slate-300">You've successfully completed <span className="text-cyan-400 font-semibold">{certificate.courseName}</span>.</p>
        </div>

        {/* Certificate Card Preview */}
        <div className="bg-[#0D1321] border-4 border-indigo-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-center space-y-6">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="flex items-center justify-center gap-2">
            <Award className="w-8 h-8 text-cyan-400" />
            <span className="text-lg font-bold tracking-widest text-white uppercase font-mono">Digital AI Class</span>
          </div>

          <p className="text-xs text-slate-400 uppercase tracking-widest pt-4">Certificate of Mastery</p>
          
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white font-serif italic">
            This is proudly presented to
          </h2>

          <p className="text-3xl font-extrabold text-cyan-300 underline decoration-indigo-500 underline-offset-8">
            {certificate.userName}
          </p>

          <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
            for successfully mastering all course modules, practical labs, and capstone evaluations in <span className="text-white font-semibold">{certificate.courseName}</span> instructed by <span className="text-white font-semibold">{certificate.instructorName}</span>.
          </p>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <p className="font-semibold text-white">Date Issued: {certificate.issuedAt}</p>
              <p className="font-mono text-cyan-400">ID: {certificate.certificateId}</p>
            </div>
            <img src={certificate.qrCodeUrl} alt="QR Verification" className="w-16 h-16 rounded-xl bg-white p-1" />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <button 
            onClick={handleDownload}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 text-white font-semibold px-6 py-3.5 rounded-xl shadow-lg shadow-indigo-600/30 transition-all flex items-center gap-2"
          >
            <Download className="w-4 h-4" /> Download Certificate (PDF)
          </button>
          <button 
            onClick={handleShare}
            className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold px-6 py-3.5 rounded-xl transition-all flex items-center gap-2"
          >
            <Share2 className="w-4 h-4" /> Share Verification Link
          </button>
        </div>
      </div>
    </div>
  );
}
