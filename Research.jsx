import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, UserCheck, Award, ShieldCheck, BookOpen, ChevronLeft, ChevronRight, ExternalLink, Bot, Send, Sparkles } from 'lucide-react';

export default function Research() {
  const [fullName, setFullName] = useState('');
  const [dept, setDept] = useState('CSE & Engineering');
  const [abstract, setAbstract] = useState('');

  const [aiChat, setAiChat] = useState([
    { sender: 'ai', text: 'Hello! I can help you find research papers, identify faculty mentors, or check your proposal status.' }
  ]);

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    if (!fullName.trim() || !abstract.trim()) {
      alert('Please fill in your name and proposal abstract.');
      return;
    }
    alert(`Research Proposal from ${fullName} for ${dept} submitted successfully!`);
    setFullName('');
    setAbstract('');
  };

  const handleAiChip = (query) => {
    setAiChat(prev => [
      ...prev,
      { sender: 'user', text: query },
      { sender: 'ai', text: `SRIT Research Hub: Dr. S. Venkatesh leads the AI & Robotics Lab. 50+ papers published in 2025.` }
    ]);
  };

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
          
          {/* Header Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="space-y-1 max-w-xl">
              <h1 className="text-3xl font-extrabold text-[#003366] tracking-tight">
                Research & Innovation Hub
              </h1>
              <p className="text-xs text-slate-600 leading-relaxed">
                Advancing the boundaries of knowledge at Srinivasa Ramanujan Institute of Technology. Our interdisciplinary approach fosters a culture of discovery and technological breakthrough.
              </p>
            </div>
            <button className="bg-[#003366] hover:bg-[#002244] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow-md flex items-center gap-2 shrink-0">
              Submit Proposal <Send className="w-4 h-4 text-[#FFBF00]" />
            </button>
          </div>

          {/* 4 Stat Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">ACTIVE PROJECTS</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">142+</h3>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">PUBLICATIONS</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">2.4k</h3>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm text-center flex flex-col justify-center items-center">
              <p className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">PATENTS FILED</p>
              <h3 className="text-3xl font-black text-[#003366] font-mono">85</h3>
            </div>
            <div className="bg-[#003366] text-white p-6 rounded-3xl shadow-md text-center flex flex-col justify-center items-center">
              <p className="text-[10px] font-mono font-bold text-[#FFBF00] uppercase tracking-widest">RESEARCH GRANTS</p>
              <h3 className="text-3xl font-black text-white font-mono">₹12Cr+</h3>
            </div>
          </div>

          {/* Flagship Research Projects Section */}
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <h2 className="text-2xl font-extrabold text-[#003366]">Flagship Research Projects</h2>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button className="w-8 h-8 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Card 1 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-40 rounded-2xl overflow-hidden">
                    <img src="/images/images.jpg" alt="Autonomous Campus Shuttle" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-2 text-[9px] font-bold">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">ROBOTICS</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">AI-ML</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-[#003366]">Autonomous Campus Shuttle</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Development of Level 4 autonomous navigation for last-mile connectivity within university campuses.
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-xs font-bold text-[#003366]">
                  <span>Details</span>
                  <ExternalLink className="w-4 h-4 text-[#003366]" />
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-40 rounded-2xl overflow-hidden">
                    <img src="/images/images (1).jpg" alt="Carbon Sequestration" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-2 text-[9px] font-bold">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">SUSTAINABILITY</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">BIO-ENERGY</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-[#003366]">Carbon Sequestration Algae</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Investigating high-yield lipid extraction from modified microalgae for sustainable carbon capture and biofuel production.
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-xs font-bold text-[#003366]">
                  <span>Details</span>
                  <ExternalLink className="w-4 h-4 text-[#003366]" />
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden space-y-4 p-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="h-40 rounded-2xl overflow-hidden">
                    <img src="/images/images (2).jpg" alt="Post-Quantum Cryptography" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex gap-2 text-[9px] font-bold">
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">QUANTUM</span>
                    <span className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">COMPUTING</span>
                  </div>
                  <h3 className="font-extrabold text-sm text-[#003366]">Post-Quantum Cryptography</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Developing resilient encryption protocols for next-generation communication networks against quantum attacks.
                  </p>
                </div>
                <div className="pt-2 flex justify-between items-center text-xs font-bold text-[#003366]">
                  <span>Details</span>
                  <ExternalLink className="w-4 h-4 text-[#003366]" />
                </div>
              </div>

            </div>
          </div>

          {/* Form & AI Assistant Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            
            {/* Proposal Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div>
                <h3 className="font-extrabold text-base text-[#003366]">Join the Innovation Ecosystem</h3>
                <p className="text-xs text-slate-500 mt-1">
                  SRIT provides a robust framework for student and faculty research, offering incubation support, IP management, and industry collaborations.
                </p>
              </div>

              <form onSubmit={handleProposalSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Full Name</label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={fullName}
                      onChange={e => setFullName(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-slate-700">Department</label>
                    <select
                      value={dept}
                      onChange={e => setDept(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                    >
                      <option>CSE & Engineering</option>
                      <option>AI & Data Science</option>
                      <option>Electronics & Comm.</option>
                      <option>Electrical & Electronics</option>
                      <option>Mechanical Engg.</option>
                      <option>Civil Engineering</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="font-bold text-slate-700">Proposal Abstract</label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your research idea..."
                    value={abstract}
                    onChange={e => setAbstract(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 p-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#003366]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#003366] hover:bg-[#002244] text-white font-extrabold py-3.5 rounded-xl shadow-md text-xs uppercase tracking-wider"
                >
                  Submit Research Proposal
                </button>
              </form>
            </div>

            {/* AI Assistant */}
            <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                <div className="w-9 h-9 rounded-xl bg-[#003366] text-[#FFBF00] flex items-center justify-center font-bold">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-[#003366]">SRIT Helper AI</h4>
                  <p className="text-[10px] text-slate-400 font-mono">Connected • Research Intelligence</p>
                </div>
              </div>

              <div className="space-y-3 text-xs flex-1">
                {aiChat.map((m, i) => (
                  <div key={i} className={`p-3.5 rounded-2xl ${m.sender === 'user' ? 'bg-[#003366] text-white font-semibold ml-4' : 'bg-[#f8fafc] text-slate-700 border border-slate-200 mr-4'}`}>
                    {m.text}
                  </div>
                ))}
              </div>

              <div className="space-y-2 pt-2">
                <button onClick={() => handleAiChip('Who is leading the AI research lab?')} className="w-full text-left p-3 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#003366]">
                  "Who is leading the AI research lab?"
                </button>
                <button onClick={() => handleAiChip('Find me papers on Green Energy.')} className="w-full text-left p-3 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#003366]">
                  "Find me papers on Green Energy."
                </button>
                <button onClick={() => handleAiChip('What is the patent filing process?')} className="w-full text-left p-3 rounded-xl bg-[#f8fafc] hover:bg-slate-100 border border-slate-200 text-xs font-semibold text-[#003366]">
                  "What is the patent filing process?"
                </button>
              </div>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}
