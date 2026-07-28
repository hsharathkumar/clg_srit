import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search } from 'lucide-react';
import { useUser, UserButton } from '@clerk/react';

export default function Navbar({ showSearch = false }) {
  const [deptDropdownOpen, setDeptDropdownOpen] = useState(false);
  const location = useLocation();
  const { isSignedIn } = useUser();

  const navLinks = [
    { name: 'Academics', path: '/' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Research', path: '/research' },
    { name: 'Campus', path: '/campus-life' },
    { name: 'Placement', path: '/placements' }
  ];

  const departments = [
    { name: 'Computer Science & Engg (CSE)', path: '/department/cse' },
    { name: 'AI & Data Science (AIDS)', path: '/department/aids' },
    { name: 'Electronics & Comm Engg (ECE)', path: '/department/ece' },
    { name: 'Electrical & Electronics Engg (EEE)', path: '/department/eee' },
    { name: 'Mechanical Engg (ME)', path: '/department/me' },
    { name: 'Civil Engg (CE)', path: '/department/ce' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* SRIT Top Left Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0">
            <img
              src="/images/srit_logo.png"
              alt="SRIT Anantapur - Srinivasa Ramanujan Institute of Technology"
              className="h-10 sm:h-11 w-auto object-contain"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-700">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors whitespace-nowrap py-1 ${
                  isActive(link.path)
                    ? 'text-[#002b5c] font-extrabold border-b-2 border-[#FFBF00]'
                    : 'hover:text-[#002b5c]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Departments Dropdown */}
            <div className="relative" onMouseLeave={() => setDeptDropdownOpen(false)}>
              <button
                onClick={() => setDeptDropdownOpen(!deptDropdownOpen)}
                onMouseEnter={() => setDeptDropdownOpen(true)}
                className="hover:text-[#002b5c] flex items-center gap-1 transition-colors whitespace-nowrap py-1"
              >
                Departments <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>
              {deptDropdownOpen && (
                <div className="absolute top-full left-0 w-64 mt-1 bg-white border border-slate-200 rounded-2xl shadow-xl p-2 z-50 animate-in fade-in">
                  {departments.map((dept) => (
                    <Link
                      key={dept.path}
                      to={dept.path}
                      onClick={() => setDeptDropdownOpen(false)}
                      className="block px-3 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100 hover:text-[#002b5c] transition-colors"
                    >
                      {dept.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Right Section: Emergency Ticker / Search + Auth Options */}
          <div className="flex items-center gap-3 shrink-0">
            
            {showSearch && (
              <div className="relative hidden sm:block">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="bg-slate-100/80 border border-slate-200 text-xs text-slate-800 rounded-full pl-8 pr-3 py-1.5 w-44 focus:outline-none focus:border-[#002b5c]"
                />
              </div>
            )}

            {isSignedIn ? (
              <div className="flex items-center gap-3">
                <Link
                  to="/student-portal"
                  className="bg-slate-100 hover:bg-slate-200 text-[#002b5c] font-bold px-3.5 py-2 rounded-xl text-xs border border-slate-200 transition-all hidden sm:block"
                >
                  Portal Dashboard
                </Link>
                <UserButton showName />
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Link
                  to="/sign-in"
                  className="bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold px-4 py-2 rounded-xl shadow-xs text-xs tracking-wider transition-all"
                >
                  Sign In
                </Link>
                <Link
                  to="/sign-up"
                  className="bg-[#FFBF00] hover:bg-[#f5b300] text-[#002b5c] font-extrabold px-4 py-2 rounded-xl shadow-xs text-xs tracking-wider transition-all"
                >
                  Sign Up
                </Link>
              </div>
            )}

          </div>

        </div>
      </div>
    </header>
  );
}
