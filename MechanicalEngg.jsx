import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, ChevronLeft, ChevronRight, ArrowRight, Cpu, Layers } from 'lucide-react';

export default function MechanicalEngg() {
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
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#003366] text-white font-extrabold shadow-md w-full"
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
        <main className="flex-1 p-6 sm:p-10 space-y-8 bg-[#f8fafc]">
          
          {/* Main Top Header Banner */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col lg:flex-row justify-between items-center gap-8 relative overflow-hidden">
            <div className="space-y-4 max-w-xl">
              <span className="inline-block bg-slate-100 text-slate-700 font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider border border-slate-200">
                DEPARTMENT OF EXCELLENCE
              </span>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight leading-tight">
                Mechanical Engineering
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed">
                Bridging classical physics with futuristic robotics at Srinivasa Ramanujan Institute of Technology. Our labs are the breeding ground for the next generation of innovators in thermal, design, and manufacturing.
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl border border-slate-200">
                  Virtual Tour
                </button>
                <button className="bg-slate-100 hover:bg-slate-200 text-[#003366] font-extrabold text-xs px-5 py-3 rounded-xl border border-slate-200">
                  Curriculum 2024
                </button>
              </div>
            </div>

            <div className="relative w-full lg:w-[380px] h-[220px] rounded-2xl overflow-hidden shadow-lg border border-slate-200 shrink-0">
              <img src="/images/images.jpg" alt="Automation Lab" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md p-3 rounded-xl border border-white/60 shadow-md">
                <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">CENTER OF EXCELLENCE</p>
                <p className="text-sm font-extrabold text-[#003366]">Automation Lab</p>
                <span className="inline-block mt-1 bg-[#003366] text-[#FFBF00] font-mono text-[10px] font-bold px-2 py-0.5 rounded">
                  15+ RESEARCH LABS
                </span>
              </div>
            </div>
          </div>

          {/* Workshop Showcases Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-extrabold text-[#003366]">Workshop Showcases</h2>
                <p className="text-xs text-slate-500">State-of-the-art facilities for hands-on precision training.</p>
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

            {/* Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1: CNC & CAM Center */}
              <div className="md:col-span-2 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="relative h-48 rounded-2xl overflow-hidden border border-slate-200">
                  <img src="/images/images (1).jpg" alt="CNC Center" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                    Live Now
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-extrabold text-base text-[#003366]">CNC & CAM Center</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Equipped with 5-axis vertical machining centers and high-speed lathes for advanced manufacturing projects.
                  </p>
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="flex -space-x-2">
                    <img className="w-7 h-7 rounded-full ring-2 ring-white" src="/images/download.jpg" alt="User" />
                    <img className="w-7 h-7 rounded-full ring-2 ring-white" src="/images/download (1).jpg" alt="User" />
                    <span className="w-7 h-7 rounded-full bg-[#003366] text-[#FFBF00] text-[10px] font-bold flex items-center justify-center ring-2 ring-white">+12</span>
                  </div>
                  <button onClick={() => alert("Exploring CNC Center Facility...")} className="text-xs font-extrabold text-[#003366] hover:underline flex items-center gap-1">
                    Explore Facility <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Card 2 & 3 Stack */}
              <div className="space-y-6">
                
                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#003366] flex items-center justify-center">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#003366]">Thermal Science Lab</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Analyzing heat transfer and fluid dynamics using subsonic wind tunnels and advanced calorimeter systems.
                  </p>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <p className="text-[9px] font-mono font-bold text-slate-400 uppercase">ACTIVE PROJECTS</p>
                    <p className="text-xs font-extrabold text-[#003366]">IC Engine Analysis</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                  <div className="w-9 h-9 rounded-xl bg-slate-100 text-[#003366] flex items-center justify-center">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-extrabold text-sm text-[#003366]">CAD/CAE Studio</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    SolidWorks and ANSYS certified workstations for structural simulation.
                  </p>
                </div>

              </div>

            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-2 flex flex-col justify-center">
              <h3 className="text-4xl font-black text-[#003366] font-mono">98%</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Average placement record for Mechanical graduates in top-tier automotive and manufacturing firms.
              </p>
            </div>

            <div className="bg-[#003366] text-white p-6 rounded-3xl shadow-md space-y-2 flex flex-col justify-center">
              <span className="bg-[#FFBF00] text-[#003366] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full w-max">
                NAAC A+
              </span>
              <h3 className="text-2xl font-extrabold text-white">National Ranking Excellence</h3>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
