import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import { SkeletonPageLayout } from '../components/Skeleton';
import { ArrowRight, Wallet, Sparkles } from 'lucide-react';

export default function Admissions() {
  const [isLoading, setIsLoading] = useState(true);
  const [form, setForm] = useState({ name: '', email: '', program: 'B.Tech Computer Science' });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const fees = [
    { title: 'Computer Science', amount: '₹ 1,25,000' },
    { title: 'Electronics & Comm.', amount: '₹ 1,15,000' },
    { title: 'Hostel & Mess', amount: '₹ 85,000' }
  ];

  const stats = [
    { label: 'NAAC GRADE', value: 'A+' },
    { label: 'AVG PACKAGE', value: '6.5L' },
    { label: 'PHD FACULTY', value: '65+' },
    { label: 'PLACEMENTS', value: '92%' }
  ];

  const roadmap = [
    {
      num: '01',
      title: 'Online Registration',
      desc: 'Create your profile on the admissions portal with basic details and contact info.'
    },
    {
      num: '02',
      title: 'Document Upload',
      desc: 'Upload scanned copies of 10th, 12th marksheet, and entrance exam scorecards.'
    },
    {
      num: '03',
      title: 'Counselling & Interview',
      desc: 'Attend the branch selection counselling session based on your merit rank.'
    },
    {
      num: '04',
      title: 'Fee Payment',
      desc: 'Confirm your seat by paying the admission fee through the secure portal.'
    }
  ];

  if (isLoading) {
    return <SkeletonPageLayout title="Loading Admissions..." />;
  }

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 space-y-8">
        
        {/* Hero Card */}
        <div
          className="relative h-[280px] sm:h-[320px] rounded-3xl overflow-hidden bg-cover bg-center border border-slate-200 shadow-sm flex flex-col justify-end p-6 sm:p-10"
          style={{ backgroundImage: `url('/images/images (2).jpg')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#002b5c]/95 via-[#002b5c]/60 to-transparent"></div>
          
          <div className="relative z-10 space-y-2 max-w-2xl text-white">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Shape Your Future at SRIT
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
              Join a community of innovators, researchers, and leaders. Admissions for the academic year 2024-25 are now open for Engineering and Technology.
            </p>
          </div>
        </div>

        {/* Section 2: Fee Structure (Left) & Stats (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Fee Structure 2024 Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs space-y-5 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-100 pb-3">
                <h3 className="text-base font-extrabold text-[#002b5c]">Fee Structure 2024</h3>
                <Wallet className="w-4 h-4 text-amber-500" />
              </div>

              <div className="space-y-2.5">
                {fees.map((item) => (
                  <div key={item.title} className="flex justify-between items-center bg-slate-50/80 p-3.5 rounded-2xl border border-slate-100 text-xs">
                    <span className="font-semibold text-slate-700">{item.title}</span>
                    <span className="font-mono font-bold text-[#002b5c] text-sm">{item.amount}</span>
                  </div>
                ))}
              </div>

              {/* Scholarship Alert Box */}
              <div className="p-3.5 bg-sky-50/70 border border-sky-100 rounded-2xl text-[11px] text-sky-900 leading-relaxed">
                <em>Scholarships up to 50% available based on EAMCET ranks and JEE percentiles.</em>
              </div>
            </div>

            <button className="w-full sm:w-auto self-start bg-[#FFBF00] hover:bg-[#f5b300] text-[#002b5c] font-extrabold px-6 py-2.5 rounded-xl shadow-xs text-xs uppercase tracking-wider transition-all">
              Apply Now
            </button>
          </div>

          {/* Key Stats 2x2 Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs flex flex-col justify-center items-center text-center space-y-2"
              >
                <span className="text-[10px] font-mono font-bold text-slate-400 tracking-wider">
                  {stat.label}
                </span>
                <div className="relative">
                  <span className="text-2xl sm:text-3xl font-black text-[#002b5c] font-mono">
                    {stat.value}
                  </span>
                  <div className="w-8 h-1 bg-[#FFBF00] mx-auto rounded-full mt-1"></div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Section 3: Admission Roadmap & Quick Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          
          {/* Admission Roadmap */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-6">
            <h3 className="text-lg font-extrabold text-[#002b5c]">Admission Roadmap</h3>
            
            <div className="space-y-4">
              {roadmap.map((step) => (
                <div key={step.num} className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                  <div className="w-10 h-10 rounded-2xl bg-slate-100 text-[#002b5c] font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">{step.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-xs space-y-5 h-fit">
            <div>
              <h3 className="text-lg font-extrabold text-[#002b5c]">Quick Inquiry</h3>
            </div>

            {submitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-2 text-center text-xs">
                <Sparkles className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="font-bold text-emerald-900">Inquiry Received!</p>
                <p className="text-slate-600">Our admission counselor will contact you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="space-y-1">
                  <label className="block text-slate-600 font-semibold text-[11px]">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#002b5c]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-600 font-semibold text-[11px]">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="email@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#002b5c]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="block text-slate-600 font-semibold text-[11px]">Desired Program</label>
                  <select
                    value={form.program}
                    onChange={(e) => setForm({ ...form, program: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 focus:outline-none focus:border-[#002b5c]"
                  >
                    <option>B.Tech Computer Science</option>
                    <option>B.Tech Electronics & Comm.</option>
                    <option>B.Tech Electrical & Electronics</option>
                    <option>B.Tech Civil Engineering</option>
                    <option>B.Tech Mechanical Engineering</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold p-3 rounded-xl shadow-xs text-xs tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FFBF00]" />
                </button>
              </form>
            )}
          </div>

        </div>

      </main>
    </div>
  );
}
