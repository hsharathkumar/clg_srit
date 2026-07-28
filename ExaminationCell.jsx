import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, Download, History, Bell, Shield, ArrowRight } from 'lucide-react';

export default function ExaminationCell() {
  const [hallTicket, setHallTicket] = useState('');
  const [academicYear, setAcademicYear] = useState('2023-2024');

  const results = [
    { code: 'SRIT-R20-302', semester: 'B.Tech III-II (R20) Regular', date: '24 Oct 2023', status: 'PUBLISHED', action: 'Proceed' },
    { code: 'SRIT-R19-401', semester: 'B.Tech IV-I (R19) Supple', date: '18 Oct 2023', status: 'PUBLISHED', action: 'Proceed' },
    { code: 'SRIT-R20-201', semester: 'M.Tech I-II (R20) Regular', date: '12 Oct 2023', status: 'PROCESSING', action: 'Pending' }
  ];

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
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#003366] text-white font-extrabold shadow-md w-full"
              >
                <ShieldCheck className="w-4.5 h-4.5 text-[#FFBF00] shrink-0" />
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

        {/* Right Main Examination Cell Content */}
        <main className="flex-1 p-6 sm:p-10 space-y-8 bg-[#f8fafc]">
          
          {/* Header Title & Top Buttons */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1 max-w-xl">
              <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">
                Examination Cell
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed">
                Access semester results, download hall tickets, and manage academic transcripts through our secure portal.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-white border border-slate-200 text-slate-700 font-bold text-xs px-4 py-2.5 rounded-xl shadow-sm flex items-center gap-2 hover:bg-slate-50">
                <History className="w-4 h-4 text-slate-500" /> Previous Results
              </button>
              <button className="bg-[#003366] hover:bg-[#002244] text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2">
                <Bell className="w-4 h-4 text-[#FFBF00]" /> Circulars
              </button>
            </div>
          </div>

          {/* 3 Status Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Card 1: Currently Active */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold text-amber-700 uppercase tracking-widest">CURRENTLY ACTIVE</p>
                <h4 className="font-bold text-xs text-slate-800 mt-1">Semester III Regular</h4>
                <p className="text-[11px] text-slate-500 font-medium">Nov - Dec 2023 cycle</p>
              </div>
              <div>
                <h3 className="text-4xl font-black text-[#003366] font-mono">84%</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5">Completion rate</p>
              </div>
            </div>

            {/* Card 2: Academic Standing */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between border-l-4 border-l-amber-500">
              <div>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACADEMIC STANDING</p>
                <h4 className="font-bold text-xs text-slate-800 mt-1">Institute Average</h4>
              </div>
              <div>
                <h3 className="text-4xl font-black text-[#003366] font-mono">8.42</h3>
                <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mt-0.5">CGPA Aggregate</p>
              </div>
            </div>

            {/* Card 3: Action Required (Dark Navy Card) */}
            <div className="bg-[#003366] text-white p-6 rounded-3xl shadow-md space-y-4 flex flex-col justify-between">
              <div>
                <p className="text-[10px] font-mono font-bold text-[#FFBF00] uppercase tracking-widest">ACTION REQUIRED</p>
                <h4 className="font-bold text-sm text-white mt-1">Hall Ticket Generation</h4>
                <p className="text-xs text-slate-200 leading-relaxed mt-1">
                  Jan 2024 Supply exams hall tickets are now available for verified candidates.
                </p>
              </div>
              <button onClick={() => alert("Downloading Jan 2024 Supply Hall Ticket...")} className="w-full bg-[#002244] hover:bg-[#001830] text-white border border-white/20 font-bold text-xs py-2.5 rounded-xl flex items-center justify-center gap-2">
                <Download className="w-4 h-4 text-[#FFBF00]" /> Download Now
              </button>
            </div>

          </div>

          {/* Recent Result Releases Table */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-extrabold text-sm text-[#003366] flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#003366]" /> Recent Result Releases
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">
                    <th className="pb-3">EXAM CODE</th>
                    <th className="pb-3">SEMESTER / BATCH</th>
                    <th className="pb-3">RELEASE DATE</th>
                    <th className="pb-3">STATUS</th>
                    <th className="pb-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {results.map((r, i) => (
                    <tr key={i} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3.5 font-mono font-bold text-[#003366]">{r.code}</td>
                      <td className="py-3.5 text-slate-800 font-semibold">{r.semester}</td>
                      <td className="py-3.5 text-slate-500 font-mono">{r.date}</td>
                      <td className="py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${
                          r.status === 'PUBLISHED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {r.status}
                        </span>
                      </td>
                      <td className="py-3.5 text-right">
                        <button onClick={() => alert(`Opening result for ${r.code}...`)} className="px-3.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs">
                          {r.action}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Certificate Verification & Authenticated Transcripts Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* Left Certificate Verification Card */}
            <div className="lg:col-span-6 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="font-extrabold text-base text-[#003366]">Certificate Verification</h3>
                <p className="text-xs text-slate-500 mt-1">Verify official degree certificates and semester grade sheets.</p>
              </div>

              <form onSubmit={(e) => { e.preventDefault(); alert("Record verified: Valid SRIT Hall Ticket."); }} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Hall Ticket Number</label>
                  <input
                    type="text"
                    placeholder="e.g. 214G1A0501"
                    value={hallTicket}
                    onChange={e => setHallTicket(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Academic Year</label>
                  <select
                    value={academicYear}
                    onChange={e => setAcademicYear(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                  >
                    <option>2023-2024</option>
                    <option>2022-2023</option>
                    <option>2021-2022</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3.5 rounded-xl shadow-md text-xs uppercase tracking-wider"
                >
                  Verify Records
                </button>
              </form>
            </div>

            {/* Right Authenticated Transcripts Card */}
            <div className="lg:col-span-6 bg-[#003366] text-white p-8 rounded-3xl shadow-md flex flex-col justify-between items-center text-center space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-[#FFBF00] flex items-center justify-center font-bold">
                <Shield className="w-6 h-6" />
              </div>

              <div className="space-y-2 max-w-sm">
                <h3 className="text-xl font-extrabold text-white">Authenticated Transcripts</h3>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Digitally signed transcripts are accepted by major international universities and employers.
                </p>
              </div>

              <div className="w-48 h-24 rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                <img src="/images/images.jpg" alt="Transcript Graphic" className="w-full h-full object-cover" />
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
