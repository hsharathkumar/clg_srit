import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { SkeletonPageLayout } from '../components/Skeleton';
import { ArrowRight, Zap, Users, ShieldCheck, Trophy, CheckCircle2, Send, Cpu, Radio, BatteryCharging } from 'lucide-react';

export default function ElectricalElectronics() {
  const [isLoading, setIsLoading] = useState(true);
  const [chatQuery, setChatQuery] = useState('');
  const [chatResponse, setChatResponse] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Zap, label: '12+', sub: 'Specialized Labs' },
    { icon: Users, label: '450+', sub: 'Current Students' },
    { icon: ShieldCheck, label: 'A+', sub: 'NAAC Accreditation' },
    { icon: Trophy, label: '15', sub: 'Patents Filed' }
  ];

  const curriculum = [
    {
      title: 'Foundations',
      icon: Cpu,
      active: false,
      items: ['Circuit Theory & Analysis', 'Electromagnetic Fields', 'Digital Electronics']
    },
    {
      title: 'Systems & Control',
      icon: Radio,
      active: true,
      items: ['Power Electronics', 'Control Systems', 'Microprocessors']
    },
    {
      title: 'Future Energy',
      icon: BatteryCharging,
      active: false,
      items: ['Renewable Energy Systems', 'Electric Vehicle Tech', 'Smart Grid Distribution']
    }
  ];

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatQuery.trim()) return;
    setChatResponse(`SRIT AI: Electrical & Electronics Engineering offers specialized labs in EV Tech, Microprocessors, and Power Systems with 94% placement rate.`);
  };

  if (isLoading) {
    return <SkeletonPageLayout title="Loading Electrical & Electronics..." />;
  }

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar activeDept="EEE" />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Top Hero Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="inline-block bg-amber-100/80 text-[#002b5c] border border-amber-200 font-mono font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider">
              DEPARTMENT OF ELECTRICAL & ELECTRONICS ENGINEERING
            </span>
            
            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#002b5c] tracking-tight">
              Powering the Next Generation.
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Pioneering the future of sustainable energy, smart grids, and electric mobility through rigorous academic excellence and industry-integrated research at SRIT Anantapur.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold px-6 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
                <span>Apply Now</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FFBF00]" />
              </button>
              
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs transition-all border border-slate-200">
                View Syllabus
              </button>
            </div>
          </div>

          {/* Right Image Card with Badge */}
          <div className="relative w-full lg:w-[420px] h-[240px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
            <img
              src="/images/download.jpg"
              alt="Electrical & Electronics Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/40 shadow-md flex items-center justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                  PLACEMENT RATE
                </p>
                <p className="text-lg font-black text-[#002b5c] font-mono">94%</p>
              </div>
              <p className="text-[10px] text-slate-600 max-w-[150px] font-medium leading-tight">
                Top global recruiters for 2023 batch.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.sub} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <Icon className="w-4 h-4 text-amber-600" />
                <div className="text-2xl sm:text-3xl font-black text-[#002b5c] font-mono">
                  {item.label}
                </div>
                <p className="text-xs text-slate-500 font-mono font-medium">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Curriculum Core Section */}
        <div className="space-y-4 pt-2">
          <div>
            <h2 className="text-xl font-extrabold text-[#002b5c]">Curriculum Core</h2>
            <p className="text-xs text-slate-500">Explore our industry-aligned academic roadmap.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {curriculum.map((c) => {
              const Icon = c.icon;
              return (
                <div
                  key={c.title}
                  className={`bg-white rounded-3xl p-6 border shadow-xs space-y-4 relative ${
                    c.active ? 'border-[#FFBF00] ring-1 ring-[#FFBF00]' : 'border-slate-200/80'
                  }`}
                >
                  {c.active && (
                    <span className="absolute top-4 right-4 bg-amber-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      ACTIVE
                    </span>
                  )}
                  
                  <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-slate-700" />
                  </div>

                  <h3 className="font-bold text-slate-800 text-sm">{c.title}</h3>

                  <ul className="space-y-2.5 text-xs text-slate-600 font-medium">
                    {c.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* SRIT Helper AI Section */}
        <div
          className="relative rounded-3xl overflow-hidden bg-cover bg-center border border-slate-200 shadow-md p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
          style={{ backgroundImage: `url('/images/images (2).jpg')` }}
        >
          <div className="absolute inset-0 bg-[#002b5c]/90 backdrop-blur-xs"></div>
          
          <div className="relative z-10 flex items-center gap-4 text-white max-w-xl">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/40 shrink-0 shadow-lg bg-slate-800">
              <img src="/images/images (1).jpg" alt="SRIT AI Avatar" className="w-full h-full object-cover" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-extrabold text-white">SRIT Helper AI</h3>
              <p className="text-xs text-slate-200 italic leading-relaxed">
                "Hello! I'm here to help you navigate the EEE curriculum, research opportunities, or admission queries. What's on your mind?"
              </p>
            </div>
          </div>

          <div className="relative z-10 w-full md:w-auto min-w-[320px] space-y-2">
            <form onSubmit={handleSendChat} className="bg-white/95 backdrop-blur-md p-1.5 rounded-2xl flex items-center shadow-lg border border-white">
              <input
                type="text"
                placeholder="Ask about curriculum, fees, or campus life..."
                value={chatQuery}
                onChange={(e) => setChatQuery(e.target.value)}
                className="bg-transparent px-3 py-2 text-xs text-slate-800 w-full focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#002b5c] hover:bg-[#001e40] text-white p-2.5 rounded-xl shrink-0 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
            {chatResponse && (
              <p className="text-[11px] text-[#FFBF00] font-medium bg-[#002b5c]/80 p-2 rounded-xl border border-white/10">
                {chatResponse}
              </p>
            )}
          </div>
        </div>

      </main>
    </div>
  );
}
