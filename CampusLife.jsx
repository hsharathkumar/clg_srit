import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, MapPin, ChevronLeft, ChevronRight, Utensils, HeartPulse, Bot, Shield, Compass } from 'lucide-react';

export default function CampusLife() {
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

        {/* Right Content Area */}
        <main className="flex-1 p-6 sm:p-10 space-y-10 bg-[#f8fafc]">
          
          {/* Main Top Banner */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-xl">
              <span className="inline-block border border-amber-500/40 text-amber-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-amber-50/50">
                LIFE AT SRINIVASA RAMANUJAN INSTITUTE OF TECHNOLOGY
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight leading-tight">
                A Thriving Ecosystem of <span className="text-amber-600 block">Innovation & Growth</span>
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed">
                Experience an environment where rigorous academic pursuit meets vibrant cultural diversity and world-class athletic facilities.
              </p>
              <button className="bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs px-6 py-3 rounded-xl shadow-md flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#FFBF00]" /> Launch Campus Map
              </button>
            </div>

            <div className="relative w-full lg:w-[360px] h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 shrink-0">
              <img src="/images/images.jpg" alt="SRIT Campus Aerial" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-md">
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">TOTAL AREA</p>
                <p className="text-xl font-black text-[#003366] font-mono">50+ <span className="text-xs font-normal">Acres</span></p>
              </div>
            </div>
          </div>

          {/* Campus Facilities Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-extrabold text-[#003366]">Campus Facilities</h2>
                <p className="text-xs text-slate-500">Precision-engineered environments for excellence.</p>
              </div>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Facilities Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: Residential Blocks */}
              <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="space-y-4 max-w-md">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#003366]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-base text-[#003366]">Residential Blocks</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mt-1">
                      Premium hostels offering a "Home away from home" experience with high-speed Wi-Fi, laundry services, and curated meal plans.
                    </p>
                  </div>
                  <div className="space-y-1 text-[11px] font-bold text-amber-700">
                    <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 24/7 Security & Surveillance</p>
                    <p className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Dedicated Recreation Zones</p>
                  </div>
                </div>
                <div className="w-full md:w-56 h-48 rounded-2xl overflow-hidden border border-slate-200 shrink-0">
                  <img src="/images/download (2).jpg" alt="Hostel lounge" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Card 2: Elite Sports Hub */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    ⚽
                  </div>
                  <h3 className="font-extrabold text-base text-[#003366]">Elite Sports Hub</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Olympic-grade infrastructure for indoor and outdoor sports.
                  </p>
                </div>
                <div className="text-center pt-2">
                  <span className="inline-block px-4 py-2 rounded-full border border-slate-200 text-2xl font-black text-[#003366] font-mono">
                    12+
                  </span>
                </div>
              </div>

              {/* Card 3: Global Dining */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#003366]">
                  <Utensils className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#003366]">Global Dining</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Multi-cuisine food courts emphasizing nutrition and hygiene.
                </p>
              </div>

              {/* Card 4: Health & Wellness */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-[#003366]">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#003366]">Health & Wellness</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  On-campus 24/7 medical center and professional counseling services.
                </p>
              </div>

              {/* Card 5: AI Smart Campus */}
              <div className="bg-[#003366] text-white p-6 rounded-3xl shadow-md space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#FFBF00] text-[#003366] flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-base text-[#FFBF00]">AI Smart Campus</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Powered by IoT for smart attendance and resource management.
                </p>
              </div>

            </div>
          </div>

          {/* Bottom Metrics Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4 text-center">
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">STUDENTS</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">3040+</h3>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">CLUBS & SOCIETIES</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">27</h3>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">WI-FI SPEED</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">608 <span className="text-xs font-normal">Mbps</span></h3>
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACRES OF GREEN</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">18</h3>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
