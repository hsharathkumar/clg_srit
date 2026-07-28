import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, Search, Download, Sparkles, BookMarked, Layers } from 'lucide-react';

export default function CentralLibrary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('Research Papers');

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-[620px] bg-white border-b border-slate-200">
        
        {/* Left Quick Links Sidebar */}
        <aside className="w-full lg:w-[270px] bg-white border-r border-slate-200 p-6 flex flex-col justify-between shrink-0 space-y-6">
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-xs text-slate-800 tracking-tight">Quick Links</h3>
              <p className="text-[10px] text-slate-400 font-medium">Institutional Resources</p>
            </div>
            
            <nav className="space-y-2 text-xs font-semibold">
              <Link
                to="/student-portal"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors w-full"
              >
                <GraduationCap className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">Student Portal</span>
              </Link>
              <Link
                to="/student-portal"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors w-full"
              >
                <UserCheck className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">Faculty Login</span>
              </Link>
              <Link
                to="/alumni"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors w-full"
              >
                <Award className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">Alumni</span>
              </Link>
              <Link
                to="/examination-cell"
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors w-full"
              >
                <ShieldCheck className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">Exam Cell</span>
              </Link>
              <Link
                to="/library"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#003366] text-white font-extrabold shadow-md w-full"
              >
                <BookOpen className="w-4.5 h-4.5 text-[#FFBF00] shrink-0" />
                <span className="truncate">Library</span>
              </Link>
            </nav>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/admissions"
              className="block w-full text-center bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider transition-all"
            >
              Apply Now
            </Link>
          </div>
        </aside>

        {/* Right Library Main Content */}
        <main className="flex-1 p-6 sm:p-10 space-y-8 bg-[#f8fafc]">
          
          {/* Header Title */}
          <div className="space-y-2">
            <p className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">Central Library</p>
            <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
              Srinivasa Ramanujan Institute of Technology's intellectual hub. Explore over 50,000 volumes, digital archives, and collaborative spaces designed for the modern polymath.
            </p>
          </div>

          {/* Catalog Search & Real-time Pulse Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Global Catalog Search Card */}
            <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="flex justify-between items-center">
                <h3 className="font-extrabold text-sm text-[#003366]">Global Catalog Search</h3>
                <Layers className="w-5 h-5 text-slate-400" />
              </div>

              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-4 top-4" />
                <input
                  type="text"
                  placeholder="Search titles, authors, or ISBN..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 pl-11 pr-4 py-3.5 rounded-2xl text-xs text-slate-900 focus:outline-none focus:border-[#003366]"
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {['E-Books', 'Journals', 'Research Papers', 'Thesis'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all ${
                      activeTab === tab
                        ? 'bg-amber-100/80 text-amber-800 border border-amber-300 shadow-sm'
                        : 'bg-[#f8fafc] text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-time Pulse Card */}
            <div className="lg:col-span-4 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Real-time Pulse</p>
                </div>
                <BookMarked className="w-8 h-8 text-slate-200" />
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">AVAILABLE SEATS</p>
                  <h3 className="text-4xl font-black text-[#003366] font-mono">142</h3>
                </div>

                <div>
                  <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">DIGITAL CHECKOUTS</p>
                  <h3 className="text-4xl font-black text-[#FFBF00] font-mono">892</h3>
                </div>
              </div>

              <p className="text-[10px] font-mono text-slate-400">Last synced: Just now</p>
            </div>

          </div>

          {/* Lower Grid: Study Pod & Ramanujan Archives */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Study Pod Alpha */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="h-44 rounded-2xl overflow-hidden border border-slate-200">
                <img src="/images/download (2).jpg" alt="Study Pod" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-extrabold text-base text-[#003366]">Study Pod Alpha</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with 4K interactive displays and gigabit fiber connectivity. Perfect for collaborative research.
                </p>
              </div>
              <button className="w-full bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4 text-[#FFBF00]" /> BOOK ROOM
              </button>
            </div>

            {/* Ramanujan Archives */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col lg:flex-row gap-6 justify-between items-center">
              <div className="space-y-4 max-w-sm">
                <div>
                  <h3 className="font-extrabold text-base text-[#003366]">Ramanujan Archives</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    Exclusive access to digitized handwritten notes and correspondence of the legendary mathematician Srinivasa Ramanujan.
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs font-bold text-[#003366] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFBF00]" /> Member Exclusive Access
                </div>
              </div>

              {/* Download Links */}
              <div className="space-y-3 w-full lg:w-64 shrink-0">
                {[
                  'Quarterly Journal of Math',
                  'Collected Works Vol. 1',
                  'The Lost Notebook'
                ].map((doc, idx) => (
                  <a
                    key={idx}
                    href="#download"
                    onClick={(e) => { e.preventDefault(); alert(`Downloading ${doc}...`); }}
                    className="flex items-center justify-between p-3.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-bold text-slate-800 group transition-all"
                  >
                    <span>{doc}</span>
                    <Download className="w-4 h-4 text-[#003366] group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
