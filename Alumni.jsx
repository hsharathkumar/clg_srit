import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, UserPlus, Heart, Bot, ShieldCheck as CheckShield } from 'lucide-react';

export default function Alumni() {
  const [fullName, setFullName] = useState('Srinivasa Ramanujan');
  const [gradYear, setGradYear] = useState('2020');
  const [department, setDepartment] = useState('Computer Science & Engineering');
  const [summary, setSummary] = useState('');

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
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#003366] text-white font-extrabold shadow-md w-full"
              >
                <Award className="w-4.5 h-4.5 text-[#FFBF00] shrink-0" />
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
          
          {/* Hero Banner Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Hero Card */}
            <div className="lg:col-span-8 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="bg-[#FFBF00] text-[#003366] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider">
                  RECONNECT & REBUILD
                </span>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight leading-tight">
                  The Ramanujan Legacy Lives in You.
                </h1>
                <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                  Join thousands of SRITians worldwide. Share your journey, mentor the next generation, and contribute to the institution that shaped your brilliance.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-[#FFBF00]" /> Join Alumni Network
                </button>
                <button className="bg-[#FFBF00] hover:bg-[#fbbc00] text-[#003366] font-extrabold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2">
                  <Heart className="w-4 h-4 text-[#003366]" /> Donate to SRIT
                </button>
              </div>
            </div>

            {/* Right Metrics Cards */}
            <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center min-h-[110px]">
                <h3 className="text-3xl font-black text-[#003366] font-mono">12k+</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACTIVE MEMBERS</p>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center min-h-[110px]">
                <h3 className="text-3xl font-black text-[#003366] font-mono">45</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">GLOBAL CHAPTERS</p>
              </div>
            </div>

          </div>

          {/* Registration Form & Assistant Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Alumni Registration Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="font-extrabold text-sm text-[#003366]">Alumni Registration</h3>
                <p className="text-xs text-slate-500">Verify your degree and join the official database.</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert('Profile created successfully!'); }} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Graduation Year</label>
                    <input
                      type="text"
                      value={gradYear}
                      onChange={e => setGradYear(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Department / Stream</label>
                  <input
                    type="text"
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Professional Summary</label>
                  <textarea
                    rows={3}
                    placeholder="Current role, company, and industry expertise..."
                    value={summary}
                    onChange={e => setSummary(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3.5 rounded-xl shadow-md text-xs uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <CheckShield className="w-4 h-4 text-[#FFBF00]" /> Create Official Profile
                </button>
              </form>
            </div>

            {/* AI Assistant & Spotlight Stack */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* SRIT Helper AI Card */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="w-9 h-9 rounded-xl bg-[#003366] text-[#FFBF00] flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-[#003366]">SRIT Helper AI</h4>
                    <p className="text-[10px] text-slate-400 font-mono">Connected • Real-time Guidance</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 italic bg-[#f8fafc] p-3 rounded-xl border border-slate-200 leading-relaxed">
                  "Hello! I can help you find batchmates, request transcripts, or locate the donation portal. What would you like to do today?"
                </p>

                <div className="space-y-2">
                  <button onClick={() => alert("Searching 2012 Batchmates...")} className="w-full text-left p-3 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-bold text-[#003366]">
                    Find my 2012 Batchmates
                  </button>
                  <button onClick={() => alert("Generating Alumni ID Card Request...")} className="w-full text-left p-3 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-bold text-[#003366]">
                    Request Alumni ID Card
                  </button>
                </div>
              </div>

              {/* Alumni Spotlight */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">Alumni Spotlight</p>
                <div className="flex gap-4 items-center">
                  <img src="/images/download (1).jpg" alt="Priya Sharma" className="w-14 h-14 rounded-2xl object-cover shrink-0 border border-slate-200" />
                  <div>
                    <h4 className="font-extrabold text-sm text-[#003366]">Priya Sharma ('14)</h4>
                    <p className="text-[11px] text-amber-700 font-bold">Senior Architect at Google</p>
                    <p className="text-[11px] text-slate-600 italic mt-1">"SRIT provided the foundation for my career in cloud..."</p>
                  </div>
                </div>
              </div>

            </div>

          </div>

          {/* Upcoming Reconnections */}
          <div className="space-y-4 pt-4">
            <h3 className="font-extrabold text-base text-[#003366]">Upcoming Reconnections</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-3 p-4">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <img src="/images/images.jpg" alt="Decade Mixer" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-[#FFBF00] text-[#003366] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    OCT 15
                  </span>
                </div>
                <h4 className="font-bold text-xs text-[#003366]">Decade Mixer: Class of 2014</h4>
                <p className="text-[10px] font-mono text-slate-400">MAIN CAMPUS AUDITORIUM</p>
                <button className="w-full bg-[#FFBF00] text-[#003366] font-extrabold text-xs py-2.5 rounded-xl shadow-md">
                  RESERVE SEAT
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-3 p-4">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <img src="/images/images (1).jpg" alt="TechTalk AI" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-[#FFBF00] text-[#003366] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    NOV 02
                  </span>
                </div>
                <h4 className="font-bold text-xs text-[#003366]">TechTalk: AI & Ethics</h4>
                <p className="text-[10px] font-mono text-slate-400">VIRTUAL CHAPTER • ZOOM</p>
                <button className="w-full bg-[#FFBF00] text-[#003366] font-extrabold text-xs py-2.5 rounded-xl shadow-md">
                  JOIN WEBINAR
                </button>
              </div>

              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-3 p-4">
                <div className="relative h-36 rounded-2xl overflow-hidden">
                  <img src="/images/images (2).jpg" alt="Global Gala" className="w-full h-full object-cover" />
                  <span className="absolute top-3 right-3 bg-[#FFBF00] text-[#003366] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase">
                    DEC 10
                  </span>
                </div>
                <h4 className="font-bold text-xs text-[#003366]">Global Alumni Gala</h4>
                <p className="text-[10px] font-mono text-slate-400">GRAND BALLROOM, BANGALORE</p>
                <button className="w-full bg-[#FFBF00] text-[#003366] font-extrabold text-xs py-2.5 rounded-xl shadow-md">
                  BUY TICKETS
                </button>
              </div>

            </div>
          </div>

        </main>
      </div>
    </div>
  );
}
