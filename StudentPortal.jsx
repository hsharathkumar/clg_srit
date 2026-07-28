import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { SkeletonPageLayout } from '../components/Skeleton';
import { GraduationCap, Sparkles, CheckCircle, ArrowRight, User, Bot, Mail, KeyRound } from 'lucide-react';
import { useUser } from '@clerk/react';

export default function StudentPortal() {
  const { isLoaded, isSignedIn, user } = useUser();

  const [rollNumber, setRollNumber] = useState('222G1A0501');
  const [department, setDepartment] = useState('Computer Science & Engineering');

  const [aiInput, setAiInput] = useState('');
  const [aiChat, setAiChat] = useState([
    { sender: 'ai', text: 'Hello! I am SRIT Helper AI. I can help locate your timetable, mid-exam grades, or transcript requests.' }
  ]);

  const handleAiQuery = (e, override) => {
    if (e) e.preventDefault();
    const query = override || aiInput;
    if (!query.trim()) return;

    if (!override) setAiInput('');
    setAiChat(prev => [...prev, { sender: 'user', text: query }]);

    setTimeout(() => {
      setAiChat(prev => [...prev, {
        sender: 'ai',
        text: `SRIT Portal Record for ${user?.primaryEmailAddress?.emailAddress || rollNumber}: Current CGPA is 8.85. Mid-1 Exam Timetable released for Winter 2026.`
      }]);
    }, 600);
  };

  if (!isLoaded) {
    return <SkeletonPageLayout title="Loading Student Portal..." />;
  }

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Top Banner Matching Reference Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Welcome Card */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-[#FFBF00] text-[#002b5c] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider inline-block">
                RECONNECT & REBUILD
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002b5c] tracking-tight">
                {isSignedIn && user ? `Welcome, ${user.fullName || user.firstName}!` : 'The Ramanujan Legacy Lives in You.'}
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                Welcome to the official SRIT Student & Academic Management Portal. Access real-time attendance, examination timetables, and AI assistant query support.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button className="bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-xs flex items-center gap-2">
                <User className="w-4 h-4 text-[#FFBF00]" /> Student Dashboard
              </button>
              <button className="bg-[#FFBF00] hover:bg-[#f5b300] text-[#002b5c] font-extrabold text-xs px-5 py-3 rounded-xl shadow-xs">
                View Timetable
              </button>
            </div>
          </div>

          {/* Right Metrics Stack */}
          <div className="lg:col-span-4 space-y-4 flex flex-col justify-between">
            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black text-[#002b5c] font-mono">12k+</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACTIVE MEMBERS</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#002b5c]">
                <GraduationCap className="w-5 h-5" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex items-center justify-between">
              <div>
                <h3 className="text-3xl font-black text-[#002b5c] font-mono">8.85</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">CUMULATIVE CGPA</p>
              </div>
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center text-[#FFBF00]">
                <Sparkles className="w-5 h-5" />
              </div>
            </div>
          </div>

        </div>

        {/* Form & AI Helper Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Student Portal Profile Card */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/80 shadow-xs space-y-6">
            
            {isSignedIn && user ? (
              <div className="flex items-center gap-4 p-4 bg-emerald-50/70 border border-emerald-200 rounded-2xl">
                <img
                  src={user.imageUrl}
                  alt={user.fullName || 'User Avatar'}
                  className="w-14 h-14 rounded-full border-2 border-emerald-500 object-cover shadow-sm shrink-0"
                />
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-extrabold text-[#002b5c] text-sm">{user.fullName || user.firstName}</span>
                    <span className="bg-emerald-600 text-white font-mono text-[9px] font-bold px-2 py-0.5 rounded-full uppercase">
                      EMAIL VERIFIED
                    </span>
                  </div>
                  <p className="text-slate-600 font-mono flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{user.primaryEmailAddress?.emailAddress}</span>
                  </p>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl text-xs space-y-2">
                <div className="flex items-center gap-2 text-amber-900 font-bold">
                  <KeyRound className="w-4 h-4 text-amber-600" /> Sign In with Email Code Verification
                </div>
                <p className="text-slate-600">
                  Verify your email code to link your official Clerk profile with SRIT student records.
                </p>
                <div className="flex gap-2 pt-1">
                  <Link to="/sign-in" className="bg-[#002b5c] text-white px-4 py-2 rounded-xl font-bold">Sign In</Link>
                  <Link to="/sign-up" className="bg-[#FFBF00] text-[#002b5c] px-4 py-2 rounded-xl font-bold">Sign Up (Get Code)</Link>
                </div>
              </div>
            )}

            <div>
              <h3 className="font-extrabold text-sm text-[#002b5c]">Student Profile Verification</h3>
              <p className="text-xs text-slate-500">Verify your academic degree and active hall ticket credentials.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Profile Authenticated!"); }} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Full Student Name</label>
                  <input
                    type="text"
                    value={user?.fullName || 'Srinivasa Ramanujan'}
                    readOnly={!!user?.fullName}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Hall Ticket / Roll No.</label>
                  <input
                    type="text"
                    value={rollNumber}
                    onChange={e => setRollNumber(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-slate-700">Department / Stream</label>
                <input
                  type="text"
                  value={department}
                  onChange={e => setDepartment(e.target.value)}
                  className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold py-3.5 rounded-xl shadow-xs text-xs uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4 text-[#FFBF00]" /> Authenticate Portal Profile
              </button>
            </form>
          </div>

          {/* Embedded SRIT Helper AI Assistant Card */}
          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs space-y-4 flex flex-col justify-between h-full">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
              <div className="w-9 h-9 rounded-xl bg-[#002b5c] text-[#FFBF00] flex items-center justify-center font-bold">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-xs text-[#002b5c]">SRIT Helper AI</h4>
                <p className="text-[10px] text-slate-400 font-mono">Connected • Real-time Guidance</p>
              </div>
            </div>

            <div className="space-y-3 text-xs flex-1">
              {aiChat.map((msg, i) => (
                <div key={i} className={`p-3.5 rounded-2xl ${msg.sender === 'user' ? 'bg-[#002b5c] text-white font-semibold ml-6' : 'bg-[#f8fafc] text-slate-700 border border-slate-200 mr-6'}`}>
                  {msg.text}
                </div>
              ))}
            </div>

            <div className="space-y-2 pt-2">
              <button onClick={(e) => handleAiQuery(e, 'Find my Mid-1 Examination Grades')} className="w-full text-left p-2.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#002b5c] flex justify-between items-center">
                <span>Find my Mid-1 Examination Grades</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button onClick={(e) => handleAiQuery(e, 'Request Official Transcript')} className="w-full text-left p-2.5 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#002b5c] flex justify-between items-center">
                <span>Request Official Transcript</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
