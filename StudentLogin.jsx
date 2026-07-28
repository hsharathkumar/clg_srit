import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Mail, Lock, ArrowRight, CheckCircle2, ShieldAlert, KeyRound } from 'lucide-react';
import { SignIn } from '@clerk/react';

export default function StudentLogin() {
  const [useClerk, setUseClerk] = useState(false);
  const [rollNumber, setRollNumber] = useState('');
  const [password, setPassword] = useState('');
  const [department, setDepartment] = useState('Computer Science & Engineering (CSE)');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleCustomLogin = (e) => {
    e.preventDefault();
    if (!rollNumber.trim() || !password.trim()) {
      setErrorMessage('Please enter both your Hall Ticket / Roll Number and Password.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    setTimeout(() => {
      setLoading(false);
      navigate('/student-portal');
    }, 800);
  };

  return (
    <div className="max-w-[1440px] mx-auto flex flex-col lg:flex-row min-h-screen bg-[#f5f7fa]">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-6 sm:p-12 flex flex-col justify-center items-center">
        
        <div className="w-full max-w-xl bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          
          {/* Header Title */}
          <div className="text-center space-y-2">
            <span className="bg-[#FFBF00] text-[#002b5c] font-extrabold text-[10px] uppercase px-3 py-1 rounded-full tracking-wider inline-block">
              SRIT OFFICIAL PORTAL
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#002b5c]">
              Student & Faculty Login
            </h1>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              Sign in with your verified Clerk email or Hall Ticket credentials to access academic records.
            </p>
          </div>

          {/* Authentication Mode Toggle */}
          <div className="flex bg-slate-100 p-1 rounded-2xl text-xs font-bold border border-slate-200">
            <button
              onClick={() => setUseClerk(false)}
              className={`flex-1 py-2 rounded-xl transition-all ${
                !useClerk ? 'bg-[#002b5c] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hall Ticket Login
            </button>
            <button
              onClick={() => setUseClerk(true)}
              className={`flex-1 py-2 rounded-xl transition-all ${
                useClerk ? 'bg-[#002b5c] text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Clerk Email Verification
            </button>
          </div>

          {useClerk ? (
            <div className="flex justify-center py-2">
              <SignIn
                routing="path"
                path="/login"
                signUpUrl="/sign-up"
                fallbackRedirectUrl="/student-portal"
                appearance={{
                  elements: {
                    rootBox: "w-full shadow-none",
                    card: "rounded-2xl border border-slate-100 shadow-none p-4 bg-white",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    formButtonPrimary: "bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold text-xs py-3 rounded-xl",
                    footerActionLink: "text-[#002b5c] font-bold hover:underline"
                  }
                }}
              />
            </div>
          ) : (
            <>
              {/* Error Message if any */}
              {errorMessage && (
                <div className="p-3.5 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" /> {errorMessage}
                </div>
              )}

              {/* Login Form */}
              <form onSubmit={handleCustomLogin} className="space-y-4 text-xs">
                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Hall Ticket Number / Student Email</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      placeholder="e.g. 222G1A0501 or student@srit.ac.in"
                      value={rollNumber}
                      onChange={e => setRollNumber(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Password</label>
                  <div className="relative">
                    <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="password"
                      placeholder="••••••••••••"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                      className="w-full bg-[#f8fafc] border border-slate-200 pl-10 pr-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-slate-700 block">Department / Academic Branch</label>
                  <select
                    value={department}
                    onChange={e => setDepartment(e.target.value)}
                    className="w-full bg-[#f8fafc] border border-slate-200 px-4 py-3 rounded-xl text-slate-900 focus:outline-none focus:border-[#002b5c]"
                  >
                    <option>Computer Science & Engineering (CSE)</option>
                    <option>Artificial Intelligence & Data Science (AIDS)</option>
                    <option>Electronics & Communication (ECE)</option>
                    <option>Electrical & Electronics (EEE)</option>
                    <option>Mechanical Engineering (ME)</option>
                    <option>Civil Engineering (CE)</option>
                  </select>
                </div>

                <div className="flex justify-between items-center text-xs pt-1">
                  <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
                    <input type="checkbox" defaultChecked className="rounded border-slate-300 text-[#002b5c] focus:ring-[#002b5c]" />
                    <span>Remember Credentials</span>
                  </label>
                  <a href="#forgot" onClick={(e) => { e.preventDefault(); alert("Please contact SRIT IT Helpdesk at helpdesk@srit.ac.in to reset password."); }} className="text-[#002b5c] font-bold hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#002b5c] hover:bg-[#001e40] disabled:opacity-50 text-white font-extrabold py-3.5 rounded-xl shadow-md text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
                >
                  {loading ? 'Authenticating Credentials...' : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-[#FFBF00]" /> Sign In to Student Portal <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </>
          )}

          <div className="pt-4 border-t border-slate-100 text-center text-xs text-slate-500 space-y-2">
            <p>Don't have an account or need email verification?</p>
            <Link to="/sign-up" className="text-[#002b5c] font-extrabold hover:underline flex items-center justify-center gap-1">
              <KeyRound className="w-3.5 h-3.5 text-[#FFBF00]" /> Sign Up with Email Verification Code →
            </Link>
          </div>

        </div>

      </main>
    </div>
  );
}
