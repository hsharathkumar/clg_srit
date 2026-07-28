import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { SkeletonPageLayout } from '../components/Skeleton';
import { Compass, Cpu, Radio, Bot, Search } from 'lucide-react';

export default function ElectronicsComm() {
  const [isLoading, setIsLoading] = useState(true);
  const [chatQuery, setChatQuery] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { label: 'FACULTY RATIO', value: '1:15' },
    { label: 'PATENTS FILED', value: '45+' },
    { label: 'PLACEMENT %', value: '98%' }
  ];

  const domains = [
    {
      icon: Cpu,
      title: 'VLSI Design',
      desc: 'Focusing on Low Power Architecture, FPGA Implementation, and Nanotechnology-based semiconductor devices.'
    },
    {
      icon: Radio,
      title: 'Wireless Systems',
      desc: 'Advanced research in 5G New Radio, MIMO antenna design, and resilient signal processing for smart grids.'
    },
    {
      icon: Bot,
      title: 'Embedded AI',
      desc: 'Developing edge computing solutions, autonomous robotics, and real-time sensor fusion for IoT.'
    }
  ];

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;
    setChatResponse(`SRIT AI: ECE offers specialization in VLSI, Embedded Systems, and Wireless Telecom with 98% placement rate.`);
  };

  if (isLoading) {
    return <SkeletonPageLayout title="Loading Electronics & Communication..." />;
  }

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar activeDept="ECE" />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Top Hero Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-xl">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-[#002b5c] tracking-tight">
              Electronics & <span className="text-amber-600">Communication</span> Engineering
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pioneering the future of VLSI, Embedded Systems, and 5G/6G Networks. We cultivate polymaths who bridge the gap between abstract theory and silicon reality.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-slate-100 hover:bg-slate-200 text-[#002b5c] font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 border border-slate-200 transition-all">
                <Compass className="w-4 h-4 text-[#002b5c]" />
                <span>Explore Curriculum</span>
              </button>
              
              <button className="bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs shadow-xs transition-all">
                Download Brochure
              </button>
            </div>
          </div>

          {/* Right Image Card with Badge */}
          <div className="relative w-full lg:w-[420px] h-[240px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
            <img
              src="/images/images.jpg"
              alt="VLSI Chip / ECE Core Facility"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
              <p className="text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest">
                CORE FACILITY
              </p>
              <p className="text-sm font-extrabold">VLSI Center of Excellence</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          
          {/* Global Ranking Card */}
          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-3">
            <span className="text-[10px] font-mono font-bold text-amber-600 tracking-widest uppercase">
              GLOBAL RANKING
            </span>
            <div className="text-2xl font-black text-[#002b5c]">NAAC A+</div>
            <p className="text-xs text-slate-500 font-medium">
              Maintaining highest standards of academic excellence since 2008.
            </p>
          </div>

          {/* 3 Numerical Stats Cards */}
          {stats.map((s) => (
            <div key={s.label} className="md:col-span-2 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-center items-center text-center space-y-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                {s.label}
              </span>
              <span className="text-2xl font-black text-[#002b5c] font-mono">
                {s.value}
              </span>
            </div>
          ))}

          {/* Ph.D. Faculty Card */}
          <div className="md:col-span-3 bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs flex items-center gap-3">
            <div className="flex -space-x-2 shrink-0">
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/download.jpg" alt="Faculty" />
              <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="/images/download (1).jpg" alt="Faculty" />
              <div className="h-8 w-8 rounded-full bg-[#002b5c] text-[#FFBF00] text-[10px] font-mono font-bold flex items-center justify-center ring-2 ring-white">
                +24
              </div>
            </div>
            <div className="space-y-0.5 text-xs">
              <p className="font-bold text-slate-800">Ph.D. Qualified Faculty</p>
              <p className="text-[10px] text-slate-500">Learn from top experts in electronics.</p>
            </div>
          </div>

        </div>

        {/* Research Domains Section */}
        <div className="space-y-4 pt-4">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
              Research Domains
            </p>
            <p className="text-xs text-slate-600">
              Our laboratories are hubs for disruptive innovation, where students and faculty collaborate on solving real-world challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {domains.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.title} className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-2xl bg-[#002b5c] text-[#FFBF00] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>

                    <h3 className="font-bold text-slate-800 text-sm">{d.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{d.desc}</p>
                  </div>

                  <button className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 rounded-xl text-xs flex items-center justify-center gap-2 border border-slate-200 transition-all">
                    <Search className="w-3.5 h-3.5 text-slate-500" />
                    <span>Explore Domain</span>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* SRIT AI Helper Box */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#002b5c] text-[#FFBF00] flex items-center justify-center shrink-0">
              <Bot className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-mono font-bold text-amber-600 uppercase tracking-wider">
                INTELLIGENT ASSISTANT
              </span>
              <h3 className="text-sm font-extrabold text-[#002b5c]">Meet SRIT AI Helper</h3>
            </div>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            "Hello! I am your academic concierge. Whether you need lab schedules, faculty office hours, or enrollment guidance for ECE, I am here to help you navigate your journey."
          </p>

          <form onSubmit={handleSendChat} className="flex gap-2 text-xs">
            <input
              type="text"
              placeholder="Ask about ECE programs..."
              value={chatQuery}
              onChange={(e) => setChatQuery(e.target.value)}
              className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 focus:outline-none focus:border-[#002b5c]"
            />
            <button
              type="submit"
              className="bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold px-6 py-2.5 rounded-xl transition-colors"
            >
              Send
            </button>
          </form>
          {chatResponse && (
            <p className="text-xs text-emerald-700 bg-emerald-50 p-3 rounded-xl border border-emerald-200">
              {chatResponse}
            </p>
          )}
        </div>

      </main>
    </div>
  );
}
