import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { SkeletonPageLayout } from '../components/Skeleton';
import { Eye, Download, Building, Users, Briefcase, TrendingUp, Compass, Grid, Home, Droplets, HardHat } from 'lucide-react';

export default function CivilEngg() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Building, label: 'Infrastructure', value: '12+', sub: 'Specialized Labs' },
    { icon: Users, label: 'Expertise', value: '45%', sub: 'PhD Faculty' },
    { icon: Briefcase, label: 'Success', value: '92%', sub: 'Placement Rate' },
    { icon: TrendingUp, label: 'Research', value: '500+', sub: 'Publications' }
  ];

  const pillars = [
    {
      icon: Home,
      title: 'Structural Engineering',
      desc: 'Master the mechanics of high-rise structures and resilient bridge design using advanced FEM software.'
    },
    {
      icon: Droplets,
      title: 'Water Resources',
      desc: 'Pioneering sustainable hydrology and irrigation systems for a greener, water-secure planet.'
    },
    {
      icon: HardHat,
      title: 'Smart Infrastructure',
      desc: 'Integrating IoT and AI into urban planning for intelligent traffic and transportation networks.'
    }
  ];

  if (isLoading) {
    return <SkeletonPageLayout title="Loading Civil Engineering..." />;
  }

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar activeDept="Civil" />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Top Hero Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-xs flex flex-col lg:flex-row justify-between items-center gap-8">
          <div className="space-y-4 max-w-xl">
            <span className="inline-block bg-[#002b5c] text-[#FFBF00] font-mono font-bold text-[10px] px-3.5 py-1 rounded-full uppercase tracking-wider">
              Department of Excellence
            </span>
            
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#002b5c] tracking-tight">
              Civil Engineering at SRIT
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Building the skeletal framework of the future. Srinivasa Ramanujan Institute of Technology provides a world-class environment for pioneering structural innovation and sustainable urban development.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-xs transition-all">
                <Eye className="w-4 h-4 text-[#FFBF00]" />
                <span>Virtual Tour</span>
              </button>
              
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-2.5 rounded-xl text-xs flex items-center gap-2 border border-slate-200 transition-all">
                <Download className="w-4 h-4 text-slate-500" />
                <span>Brochure</span>
              </button>
            </div>
          </div>

          {/* Right Lab Image Card with Badge */}
          <div className="relative w-full lg:w-[420px] h-[240px] rounded-2xl overflow-hidden border border-slate-200 shadow-sm shrink-0">
            <img
              src="/images/images (1).jpg"
              alt="Civil Engineering Lab"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-white/40 shadow-md">
              <p className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                NBA ACCREDITED
              </p>
              <p className="text-base font-extrabold text-[#002b5c]">TIER 1</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-xs space-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-[11px] font-semibold">
                  <Icon className="w-4 h-4 text-slate-400" />
                  <span>{item.label}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-[#002b5c] font-mono">
                  {item.value}
                </div>
                <p className="text-[11px] text-slate-500 font-medium">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* The Pillars of Our Curriculum */}
        <div className="space-y-6 pt-4">
          <div className="text-center max-w-xl mx-auto space-y-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#002b5c]">
              The Pillars of Our Curriculum
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs text-center space-y-4 flex flex-col items-center justify-between"
                >
                  <div className="w-20 h-28 arch-top bg-slate-50 border border-slate-200/80 flex flex-col items-center justify-center p-2 space-y-3">
                    <Icon className="w-5 h-5 text-slate-700" />
                    <div className="w-0.5 h-8 bg-slate-300 rounded-full"></div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-bold text-slate-800 text-sm">{pillar.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Labs Showcase Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4">
          
          {/* Concrete Technology Lab Card */}
          <div className="lg:col-span-7 relative h-[300px] sm:h-[340px] rounded-3xl overflow-hidden bg-cover bg-center border border-slate-200 shadow-sm flex flex-col justify-end p-6 sm:p-8" style={{ backgroundImage: `url('/images/download (2).jpg')` }}>
            <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/95 via-[#002b5c]/50 to-transparent"></div>
            <div className="relative z-10 space-y-2 text-white">
              <h3 className="text-xl font-extrabold">Concrete Technology Lab</h3>
              <p className="text-xs text-slate-200 max-w-md leading-relaxed">
                Equipped with 2000kN compression testing machines and state-of-the-art durability testing setups.
              </p>
            </div>
          </div>

          {/* Surveying Lab & Geotech Lab Stack */}
          <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="font-bold text-slate-800 text-xs">Surveying Lab</h4>
              <div className="w-full h-24 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                <Compass className="w-8 h-8 text-amber-600" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Featuring Total Stations, GPS, and Drone Mapping technology.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-5 border border-slate-200/80 shadow-xs space-y-3">
              <h4 className="font-bold text-slate-800 text-xs">Geotech Lab</h4>
              <div className="w-full h-24 bg-slate-50 border border-slate-100 rounded-2xl flex items-center justify-center">
                <Grid className="w-8 h-8 text-[#002b5c]" />
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Advanced soil mechanics and seismic site response analysis.
              </p>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
