import React, { useState } from 'react';
import { 
  Play, CheckCircle2, ChevronLeft, BookOpen, MessageSquare, FileText, 
  HelpCircle, Settings, Maximize, Volume2, ArrowLeft, Send 
} from 'lucide-react';
import { Course, Lesson } from '../types';
import { courses } from '../data/mockData';

interface CoursePlayerViewProps {
  course?: Course;
  setCurrentView: (view: string) => void;
  onCompleteCourse: () => void;
}

export function CoursePlayerView({ course = courses[0], setCurrentView, onCompleteCourse }: CoursePlayerViewProps) {
  const [activeLesson, setActiveLesson] = useState<Lesson>(course.modules[0]?.lessons[0] || {
    id: 'les_1',
    title: 'The AI Revolution & How LLMs Actually Work',
    duration: '12 min',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    isCompleted: true,
  });
  const [activeTab, setActiveTab] = useState<'overview' | 'notes' | 'qa' | 'resources'>('overview');
  const [noteText, setNoteText] = useState('');
  const [notesList, setNotesList] = useState<string[]>(['Great explanation of token embeddings at 04:20!']);
  const [qaList, setQaList] = useState<{ question: string; author: string; time: string }[]>([
    { question: 'How do we prevent prompt injection in production APIs?', author: 'David K.', time: '2 hours ago' },
  ]);
  const [newQuestion, setNewQuestion] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (noteText.trim()) {
      setNotesList([noteText, ...notesList]);
      setNoteText('');
    }
  };

  const handleAddQuestion = (e: React.FormEvent) => {
    e.preventDefault();
    if (newQuestion.trim()) {
      setQaList([{ question: newQuestion, author: 'You', time: 'Just now' }, ...qaList]);
      setNewQuestion('');
    }
  };

  return (
    <div className="min-h-screen bg-[#070B14] text-white flex flex-col pt-20">
      {/* Top Bar */}
      <div className="bg-[#0D1321] border-b border-white/10 px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setCurrentView('dashboard')}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 px-3 py-1.5 rounded-xl border border-white/10"
          >
            <ArrowLeft className="w-4 h-4" /> Exit Player
          </button>
          <div>
            <h2 className="text-sm font-bold text-white truncate max-w-md">{course.title}</h2>
            <p className="text-[10px] text-cyan-400">Current: {activeLesson.title}</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs text-slate-300">
            <span>Course Progress: 68%</span>
            <div className="w-24 bg-white/10 h-2 rounded-full overflow-hidden">
              <div className="bg-cyan-400 w-[68%] h-full"></div>
            </div>
          </div>
          <button 
            onClick={onCompleteCourse}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow"
          >
            Claim Certificate 🎉
          </button>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Main Video & Lesson Content (Left/Center - 8 cols) */}
        <div className="lg:col-span-8 flex flex-col overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* Secure Video Player Mock */}
          <div className="relative aspect-video bg-black rounded-3xl overflow-hidden border border-white/10 shadow-2xl group flex items-center justify-center">
            <video 
              controls
              autoPlay
              muted
              className="w-full h-full object-cover"
              src={activeLesson.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Lesson Info Tabs */}
          <div className="bg-[#0D1321] border border-white/10 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex items-center gap-4 border-b border-white/10 pb-4">
              <button 
                onClick={() => setActiveTab('overview')}
                className={`text-xs font-semibold pb-1 transition-all ${activeTab === 'overview' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Overview
              </button>
              <button 
                onClick={() => setActiveTab('notes')}
                className={`text-xs font-semibold pb-1 transition-all ${activeTab === 'notes' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                My Notes ({notesList.length})
              </button>
              <button 
                onClick={() => setActiveTab('qa')}
                className={`text-xs font-semibold pb-1 transition-all ${activeTab === 'qa' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Q&A Discussions ({qaList.length})
              </button>
              <button 
                onClick={() => setActiveTab('resources')}
                className={`text-xs font-semibold pb-1 transition-all ${activeTab === 'resources' ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-slate-400 hover:text-white'}`}
              >
                Resources & Prompts
              </button>
            </div>

            {activeTab === 'overview' && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-white">{activeLesson.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  In this lesson, we explore core fundamentals and systemic patterns for building resilient AI-driven workflows. Make sure to download the prompt templates from the Resources tab.
                </p>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-4">
                <form onSubmit={handleAddNote} className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Take a timestamped note..." 
                    value={noteText}
                    onChange={(e) => setNoteText(e.target.value)}
                    className="flex-1 bg-[#070B14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold">
                    Add Note
                  </button>
                </form>

                <div className="space-y-2">
                  {notesList.map((note, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-3.5 rounded-2xl text-xs text-slate-200">
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="space-y-4">
                <form onSubmit={handleAddQuestion} className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Ask the instructor or community a question..." 
                    value={newQuestion}
                    onChange={(e) => setNewQuestion(e.target.value)}
                    className="flex-1 bg-[#070B14] border border-white/10 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button type="submit" className="bg-indigo-600 text-white px-4 py-2.5 rounded-xl text-xs font-semibold">
                    Post
                  </button>
                </form>

                <div className="space-y-3">
                  {qaList.map((qa, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 p-4 rounded-2xl space-y-1">
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span className="font-semibold text-cyan-400">{qa.author}</span>
                        <span>{qa.time}</span>
                      </div>
                      <p className="text-xs text-slate-200">{qa.question}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'resources' && (
              <div className="space-y-3">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-indigo-400" />
                    <div>
                      <h4 className="text-xs font-bold text-white">System Prompt Blueprint v3.pdf</h4>
                      <p className="text-[10px] text-slate-400">2.4 MB • PDF Document</p>
                    </div>
                  </div>
                  <button onClick={() => alert('Downloading resource...')} className="text-xs font-semibold text-cyan-400 hover:underline">
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Course Modules Sidebar (Right - 4 cols) */}
        <div className="lg:col-span-4 bg-[#0D1321] border-l border-white/10 flex flex-col overflow-y-auto">
          <div className="p-5 border-b border-white/10">
            <h3 className="text-sm font-bold text-white">Course Modules</h3>
            <p className="text-xs text-slate-400 mt-0.5">{course.modules.length} modules • {course.duration}</p>
          </div>

          <div className="p-4 space-y-4">
            {course.modules.map((mod, mIdx) => (
              <div key={mod.id} className="space-y-2">
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{mod.title}</h4>
                <div className="space-y-1">
                  {mod.lessons.map((les) => (
                    <button 
                      key={les.id}
                      onClick={() => setActiveLesson(les)}
                      className={`w-full text-left p-3 rounded-2xl flex items-center justify-between transition-all ${
                        activeLesson.id === les.id ? 'bg-indigo-600/20 border border-indigo-500/40 text-white' : 'hover:bg-white/5 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3 truncate">
                        {les.isCompleted ? <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" /> : <Play className="w-4 h-4 text-indigo-400 shrink-0" />}
                        <span className="text-xs truncate">{les.title}</span>
                      </div>
                      <span className="text-[10px] text-slate-500 shrink-0 ml-2">{les.duration}</span>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
