import React from 'react';
import { DollarSign, Building2, Search, Settings, Calendar, Clock, ArrowRight } from 'lucide-react';

export default function Placements() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Title Header (Matching Image 2 - White Theme) */}
      <div>
        <h1 className="text-3xl sm:text-4xl font-black text-[#002b5c] tracking-tight mb-2">
          Srinivasa Ramanujan Institute of Technology
        </h1>
        <p className="text-slate-500 text-xs sm:text-sm max-w-2xl leading-relaxed">
          V2 Placement Ecosystem: Precision tracking, corporate synergy, and student success analytics for the 2024-25 cycle.
        </p>
      </div>

      {/* Bento Grid (Matching Image 2 - Pure White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Large Chart Card: PLACEMENT PERFORMANCE */}
        <div className="md:col-span-2 lg:col-span-3 bg-white border border-slate-200/80 p-8 rounded-3xl shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block">PLACEMENT PERFORMANCE</span>
              <h3 className="text-2xl font-black text-[#002b5c] mt-1">94.2% <span className="text-xs font-normal text-slate-500">Placed in 2024</span></h3>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="flex items-end justify-between gap-4 h-44 pt-6 px-4 border-b border-slate-200">
            {/* CSE */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#002b5c] rounded-t-lg h-32"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">CSE</span>
            </div>
            {/* ECE */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#002b5c] rounded-t-lg h-40"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">ECE</span>
            </div>
            {/* EEE (Amber Highlight) */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#FFBF00] rounded-t-lg h-24"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">EEE</span>
            </div>
            {/* CIVIL */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#002b5c] rounded-t-lg h-36"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">CIVIL</span>
            </div>
            {/* MECH */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#002b5c] rounded-t-lg h-40"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">MECH</span>
            </div>
            {/* MBA (Amber Highlight) */}
            <div className="flex-1 flex flex-col items-center gap-2">
              <div className="w-full bg-[#FFBF00] rounded-t-lg h-28"></div>
              <span className="text-[11px] font-mono font-bold text-slate-600">MBA</span>
            </div>
          </div>
        </div>

        {/* HIGHEST CTC Card */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#FFBF00] text-[#002b5c] flex items-center justify-center mb-3 shadow-sm">
            <DollarSign className="w-6 h-6 stroke-[3]" />
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">HIGHEST CTC</span>
          <span className="text-3xl font-black text-[#002b5c] my-1">₹42.5 LPA</span>
          <span className="text-[10px] text-slate-500 font-medium">Secured by Student from CSE</span>
        </div>

        {/* COMPANIES VISITED Card */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-12 h-12 rounded-full bg-[#002b5c] text-white flex items-center justify-center mb-3">
            <Building2 className="w-6 h-6 text-[#FFBF00]" />
          </div>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">COMPANIES VISITED</span>
          <span className="text-3xl font-black text-[#002b5c] my-1">120+</span>
          <span className="text-[10px] text-slate-500 font-medium">Core, IT & Consulting sectors</span>
        </div>

        {/* ACTIVE OFFERS Table Card */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACTIVE OFFERS</span>
            <span className="bg-amber-600 text-white text-[9px] font-mono font-bold px-2 py-0.5 rounded-md uppercase">LIVE</span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="font-medium text-slate-700">Accenture</span>
              <span className="font-black text-[#002b5c]">45</span>
            </div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <span className="font-medium text-slate-700">TCS Ninja</span>
              <span className="font-black text-[#002b5c]">112</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium text-slate-700">Wipro Turbo</span>
              <span className="font-black text-[#002b5c]">28</span>
            </div>
          </div>
        </div>

        {/* SEARCH DATABASE Card */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between relative overflow-hidden shadow-sm">
          <div>
            <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-3">SEARCH DATABASE</span>
            <div className="relative">
              <input type="text" placeholder="Roll No / Company..." className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-xs px-4 py-2.5 rounded-xl pr-9 focus:outline-none focus:border-[#002b5c]"/>
              <Search className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <div className="w-9 h-9 rounded-full bg-[#002b5c] text-white flex items-center justify-center shadow-md">
              <Settings className="w-4 h-4 text-[#FFBF00]" />
            </div>
          </div>
        </div>

      </div>

      {/* Action Cards Row (Matching Image 2) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Register for Drive</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Final year students (2025 batch) can now register for the upcoming Google Cloud Recruitment Drive.
            </p>
          </div>
          <button className="bg-[#002b5c] hover:bg-[#001e40] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
            Start Registration <ArrowRight className="w-4 h-4 text-[#FFBF00]" />
          </button>
        </div>

        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Training Schedule</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              View the soft skills and technical aptitude training calendar for the current semester.
            </p>
          </div>
          <button className="bg-[#002b5c] hover:bg-[#001e40] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
            View Calendar <Calendar className="w-4 h-4 text-[#FFBF00]" />
          </button>
        </div>

        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
          <div>
            <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Mock Interviews</h3>
            <p className="text-xs text-slate-500 leading-relaxed mb-6">
              Book a session with our alumni mentors to practice your interviewing skills and get feedback.
            </p>
          </div>
          <button className="bg-[#002b5c] hover:bg-[#001e40] text-white text-xs font-bold px-5 py-3 rounded-xl flex items-center justify-center gap-2 transition-all">
            Book Slot <Clock className="w-4 h-4 text-[#FFBF00]" />
          </button>
        </div>
      </div>

    </div>
  );
}
