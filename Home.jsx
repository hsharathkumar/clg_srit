import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, Bell, X, Lightbulb, ChevronLeft, ChevronRight, Globe, Cpu, ArrowUpRight } from 'lucide-react';

export default function Home() {
  const [tickerDismissed, setTickerDismissed] = useState(false);

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      
      {/* SECTION 1: HERO CONTAINER WITH ZERO GAP SIDEBAR & HERO IMAGE (images (2).jpg) */}
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#003366] text-white font-extrabold shadow-md hover:bg-[#002244] transition-all w-full"
              >
                <GraduationCap className="w-4.5 h-4.5 text-[#FFBF00] shrink-0" />
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
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors w-full"
              >
                <BookOpen className="w-4 h-4 text-slate-500 shrink-0" />
                <span className="truncate">Library</span>
              </Link>
            </nav>
          </div>

          {/* Bottom Sidebar Apply Now Button */}
          <div className="pt-4 border-t border-slate-100">
            <Link
              to="/admissions"
              className="block w-full text-center bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3 rounded-xl shadow-md text-xs uppercase tracking-wider transition-all"
            >
              Apply Now
            </Link>
          </div>
        </aside>

        {/* Right Hero Image Container with images (2).jpg */}
        <main className="relative flex-1 min-h-[550px] bg-cover bg-center overflow-hidden flex flex-col justify-between p-6 sm:p-10" style={{ backgroundImage: `url('/images/images (2).jpg')` }}>
          
          {/* Hero Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-slate-950/60 pointer-events-none"></div>

          {/* Hero Title */}
          <div className="relative z-10 text-center pt-8 max-w-2xl mx-auto space-y-2">
            <p className="text-xs sm:text-sm text-slate-200 font-semibold uppercase tracking-widest">
              Pioneering the Future of
            </p>
            <h1 className="text-3xl sm:text-5xl font-black text-[#FFBF00] tracking-tight drop-shadow-md">
              Technology & Research
            </h1>
          </div>

          {/* Center Floating Cards */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full my-auto py-6">
            
            <div className="bg-white/85 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-[#003366]">
                <Cpu className="w-5 h-5" />
                <h3 className="font-bold text-sm">Advanced R&D</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                State-of-the-art labs dedicated to AI, Robotics, and Sustainable Energy.
              </p>
            </div>

            <div className="bg-white/85 backdrop-blur-md p-6 rounded-2xl border border-white/40 shadow-xl space-y-2">
              <div className="flex items-center gap-2 text-[#003366]">
                <Globe className="w-5 h-5" />
                <h3 className="font-bold text-sm">Global Careers</h3>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                Our alumni are leading innovation in Fortune 500 companies worldwide.
              </p>
            </div>

          </div>

          {/* Bottom Hero Bar: Ticker Pill + Floating Bot */}
          <div className="relative z-10 flex flex-col sm:flex-row items-end sm:items-center justify-end gap-4 w-full pt-4">
            
            {!tickerDismissed && (
              <div className="bg-[#003366]/90 backdrop-blur-md text-white px-4 py-3 rounded-2xl border border-white/20 shadow-xl flex items-center justify-between gap-4 max-w-md w-full">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#FFBF00] text-[#003366] shrink-0">
                    <Bell className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs">Latest Circular</h4>
                    <p className="text-[11px] text-slate-200 line-clamp-1">B.Tech 6 Semester exam schedule Released for Winter 2026.</p>
                  </div>
                </div>
                <button onClick={() => setTickerDismissed(true)} className="p-1 text-slate-300 hover:text-white shrink-0">
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

            {/* Floating Bot Icon */}
            <Link to="/ai-helper" className="w-12 h-12 rounded-full bg-[#FFBF00] hover:bg-[#fbbc00] text-[#003366] flex items-center justify-center font-bold shadow-2xl shrink-0 transition-transform hover:scale-110">
              <span className="material-symbols-outlined text-2xl">smart_toy</span>
            </Link>

          </div>

        </main>
      </div>

      {/* SECTION 2: THE LEGACY IN NUMBERS / INSTITUTIONAL MILESTONES */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-12 space-y-6">
        <div className="space-y-1">
          <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
            THE LEGACY IN NUMBERS
          </p>
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#003366]">
            Institutional Milestones
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: 1000+ Placements */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <h3 className="text-4xl font-black text-[#003366] font-mono">1000 +</h3>
              <ArrowUpRight className="w-8 h-8 text-slate-300" />
            </div>
            <div>
              <h4 className="font-bold text-slate-800 text-sm">Annual Placements</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Collaborations with top-tier technology giants ensures our students transition seamlessly.
              </p>
            </div>
          </div>

          {/* Card 2: 20+ Patents */}
          <div className="bg-[#003366] text-white p-6 rounded-3xl border border-[#002244] shadow-md space-y-4 flex flex-col justify-between">
            <div className="w-10 h-10 rounded-xl bg-[#FFBF00] text-[#003366] flex items-center justify-center font-bold shadow-md">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-4xl font-black text-white font-mono">20 +</h3>
              <h4 className="font-bold text-slate-100 text-sm mt-1">Patents Filed</h4>
              <p className="text-xs text-slate-300 leading-relaxed mt-1">
                Pioneering intellectual property in engineering and applied sciences.
              </p>
            </div>
          </div>

          {/* Card 3: 150+ Faculty */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="flex -space-x-2 overflow-hidden">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/download.jpg" alt="Faculty" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/download (1).jpg" alt="Faculty" />
              <div className="h-8 w-8 rounded-full bg-[#003366] text-[#FFBF00] text-[10px] font-mono font-bold flex items-center justify-center ring-2 ring-white">
                +140
              </div>
            </div>
            <div>
              <h3 className="text-4xl font-black text-[#003366] font-mono">150 +</h3>
              <h4 className="font-bold text-slate-800 text-sm mt-1">Expert Faculty</h4>
              <p className="text-xs text-slate-600 leading-relaxed mt-1">
                Ph.D. holders from premier national and international institutions.
              </p>
            </div>
          </div>

          {/* Card 4: Quality Excellence Badges Card */}
          <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[220px] flex flex-col justify-end p-6 bg-cover bg-center" style={{ backgroundImage: `url('/images/download.jpg')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/60 to-slate-950/40"></div>
            <div className="relative z-10 space-y-2">
              <div className="flex flex-wrap gap-2 text-[10px] font-bold">
                <span className="bg-[#FFBF00] text-[#003366] px-2.5 py-1 rounded-full uppercase">NAAC A+</span>
                <span className="bg-white/90 text-[#003366] px-2.5 py-1 rounded-full uppercase">NBA Accredited</span>
              </div>
              <h4 className="font-bold text-white text-sm">Quality Excellence</h4>
              <p className="text-[11px] text-slate-200 leading-tight">
                Consistently ranked among top engineering institutions by NIRF.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 3: CAMPUS EXPERIENCE / LIFE AT SRIT */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-8 pb-16 space-y-6">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <p className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              CAMPUS EXPERIENCE
            </p>
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#003366]">
              Life at SRIT
            </h2>
          </div>
          <div className="flex gap-2">
            <button className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="w-9 h-9 rounded-full bg-white border border-slate-200 text-slate-700 flex items-center justify-center hover:bg-slate-100 shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Central Digital Library */}
          <div className="relative h-[340px] rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="/images/images (1).jpg" alt="Central Library" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 text-white">
              <h3 className="font-extrabold text-base">Central Digital Library</h3>
              <p className="text-xs text-slate-300">Access to 65k+ volumes and global e-journals.</p>
            </div>
          </div>

          {/* Card 2: Innovation Hub */}
          <div className="relative h-[340px] rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="/images/images (2).jpg" alt="Innovation Hub" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 text-white">
              <h3 className="font-extrabold text-base">Innovation Hub</h3>
              <p className="text-xs text-slate-300">Nurturing start-ups and prototypes.</p>
            </div>
          </div>

          {/* Card 3: Sports Arena & Hostels */}
          <div className="relative h-[340px] rounded-3xl overflow-hidden border border-slate-200 shadow-md group">
            <img src="/images/download (1).jpg" alt="Sports Grounds" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 space-y-1 text-white">
              <h3 className="font-extrabold text-base">Olympic Sports Arena</h3>
              <p className="text-xs text-slate-300">State of the art grounds & residential hostels.</p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
