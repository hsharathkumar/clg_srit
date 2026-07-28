import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, UserCheck, Users, ShieldCheck, BookOpen, Layers } from 'lucide-react';

export default function Sidebar({ activeDept = '' }) {
  const location = useLocation();

  const links = [
    { name: 'Student Portal', path: '/student-portal', icon: GraduationCap, key: 'portal' },
    { name: 'Faculty Login', path: '/login', icon: UserCheck, key: 'faculty' },
    ...(activeDept ? [{ name: `${activeDept} Dept`, path: location.pathname, icon: Layers, key: 'dept' }] : []),
    { name: 'Alumni', path: '/alumni', icon: Users, key: 'alumni' },
    { name: 'Exam Cell', path: '/examination-cell', icon: ShieldCheck, key: 'exam' },
    { name: 'Library', path: '/library', icon: BookOpen, key: 'library' }
  ];

  return (
    <aside className="w-full lg:w-[240px] shrink-0 bg-white/80 backdrop-blur-sm border-r border-slate-200/80 p-5 flex flex-col justify-between space-y-6">
      <div className="space-y-5">
        <div>
          <h3 className="font-bold text-xs text-slate-800 tracking-tight">Quick Links</h3>
          <p className="text-[10px] text-slate-400 font-medium tracking-wider uppercase">Institutional Resources</p>
        </div>

        <nav className="space-y-1.5 text-xs font-semibold">
          {links.map((link) => {
            const Icon = link.icon;
            const isDeptActive = link.key === 'dept';
            const isActive = location.pathname === link.path || isDeptActive;

            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl transition-all ${
                  isActive
                    ? 'bg-[#002b5c] text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#FFBF00]' : 'text-slate-400'}`} />
                <span className="truncate">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="pt-4 border-t border-slate-100">
        <Link
          to="/admissions"
          className="block w-full text-center bg-[#FFBF00] hover:bg-[#f5b300] text-[#002b5c] font-extrabold py-2.5 rounded-xl shadow-sm text-xs uppercase tracking-wider transition-all hover:shadow"
        >
          Apply Now
        </Link>
      </div>
    </aside>
  );
}
