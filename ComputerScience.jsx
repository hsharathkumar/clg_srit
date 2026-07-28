import React from 'react';
import { Cpu, Download, Sparkles, Rocket, Activity, Shield, Pin, Database, Layers } from 'lucide-react';

export default function ComputerScience() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Department Hero Banner (Matching Image 1 - Light/White Theme) */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <span className="text-amber-600 font-mono font-extrabold text-xs uppercase tracking-widest block mb-2">
            DEPARTMENT OF
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#002b5c] tracking-tight mb-3">
            Computer Science & Engineering
          </h1>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Pioneering the digital frontier at Srinivasa Ramanujan Institute of Technology. Blending mathematical foundations with modern software engineering.
          </p>
        </div>
        <button className="bg-[#002b5c] hover:bg-[#001e40] text-white text-xs font-extrabold px-6 py-3.5 rounded-2xl flex items-center gap-2 self-start md:self-auto shadow-md transition-all">
          <Download className="w-4 h-4 text-[#FFBF00]" />
          SYLLABUS V2.0
        </button>
      </div>

      {/* Bento Grid Cards (Matching Image 1 - Pure White Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* Large Card: Computing Innovation Nexus */}
        <div className="md:col-span-2 lg:col-span-3 bg-white border border-slate-200/80 p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between shadow-sm">
          <div className="max-w-md z-10 space-y-4">
            <h3 className="text-sm font-bold text-slate-500">The Computing Innovation Nexus</h3>
            <p className="text-slate-700 text-sm leading-relaxed">
              Our advanced software engineering labs are equipped with high-performance workstations, cloud simulation environments, and IoT development hubs.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3.5 py-1.5 rounded-full border border-emerald-200">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Systems Online
              </span>
              <span className="bg-slate-100 text-slate-600 text-[11px] font-semibold px-3.5 py-1.5 rounded-full">
                240 Annual Intake
              </span>
            </div>
          </div>
          <div className="absolute right-6 bottom-4 opacity-15 pointer-events-none">
            <Activity className="w-48 h-48 text-[#002b5c]" />
          </div>
        </div>

        {/* Card: 16.0 TFLOPS */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <div className="w-12 h-12 rounded-2xl bg-slate-100 text-[#002b5c] flex items-center justify-center mb-3">
            <Cpu className="w-6 h-6" />
          </div>
          <span className="text-2xl font-black text-[#002b5c]">16.0 TFLOPS</span>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">COMPUTING POWER</span>
        </div>

        {/* Card: 96% Placement Rate */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm">
          <span className="text-4xl font-black text-[#002b5c]">96%</span>
          <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-1">PLACEMENT RATE</span>
        </div>

        {/* Card: Research Output */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex items-center justify-between col-span-1 lg:col-span-2 shadow-sm">
          <div>
            <h4 className="text-xs font-bold text-slate-500 mb-1">Research Output</h4>
            <p className="text-xs text-slate-700 font-medium">450+ Peer-reviewed paper publications.</p>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 border border-amber-200">
            <Sparkles className="w-5 h-5" />
          </div>
        </div>

        {/* Dark Navy Accent Card: A+ NAAC RATING */}
        <div className="bg-[#002b5c] border border-blue-900 p-6 rounded-3xl flex flex-col items-center justify-center text-center shadow-md text-white">
          <span className="text-4xl font-black text-[#FFBF00]">A+</span>
          <span className="text-[10px] font-mono font-bold text-slate-200 uppercase tracking-widest mt-1">NAAC RATING</span>
        </div>

        {/* Card: Vision 2030 */}
        <div className="bg-white border border-slate-200/80 p-8 rounded-3xl md:col-span-2 lg:col-span-3 flex flex-col justify-between shadow-sm">
          <h3 className="text-base font-extrabold text-[#002b5c] mb-6">Our Vision for 2030</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                <Rocket className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 mb-1">Cloud & DevOps Mastery</h4>
                <p className="text-xs text-slate-500 leading-relaxed">AWS and Kubernetes microservices architecture integrated into curriculum.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-800 mb-1">Full-Stack Innovation</h4>
                <p className="text-xs text-slate-500 leading-relaxed">Building scalable web applications, REST APIs, and microservices.</p>
              </div>
            </div>
          </div>
          <button className="bg-[#002b5c] hover:bg-[#001e40] text-white text-xs font-bold px-5 py-3 rounded-xl self-start transition-all">
            Explore Research Papers
          </button>
        </div>

        {/* Card: COMPUTE ENGINE LIVE */}
        <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col items-center justify-center text-center relative overflow-hidden shadow-sm">
          <div className="bg-slate-50 border border-slate-200 px-6 py-4 rounded-2xl">
            <span className="text-[9px] font-mono font-extrabold text-slate-400 uppercase tracking-widest block mb-1">COMPUTE ENGINE</span>
            <span className="text-xl font-black text-[#002b5c]">LIVE</span>
          </div>
        </div>

      </div>

      {/* Academic Tracks Section */}
      <section className="space-y-6">
        <h2 className="text-xl font-extrabold text-[#002b5c] text-center">Academic Tracks</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-[#002b5c] flex items-center justify-center mb-4">
                <Pin className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Full-Stack Development</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Mastering React, Node.js, and Cloud Microservices architecture.</p>
            </div>
            <div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#FFBF00] h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Track Progress: 85%</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-[#002b5c] flex items-center justify-center mb-4">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Cloud Infrastructure</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">AWS, Docker, and Kubernetes deployment pipelines.</p>
            </div>
            <div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#FFBF00] h-full rounded-full" style={{ width: '60%' }}></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Track Progress: 60%</span>
            </div>
          </div>

          <div className="bg-white border border-slate-200/80 p-6 rounded-3xl flex flex-col justify-between shadow-sm">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 text-[#002b5c] flex items-center justify-center mb-4">
                <Layers className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-extrabold text-[#002b5c] mb-2">Cyber Security</h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">Network security, cryptography, and penetration testing fundamentals.</p>
            </div>
            <div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mb-2">
                <div className="bg-[#FFBF00] h-full rounded-full" style={{ width: '45%' }}></div>
              </div>
              <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Track Progress: 45%</span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
