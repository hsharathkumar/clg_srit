import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Share2, Compass } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#002b5c] text-white border-t border-slate-800">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-10 space-y-8">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-white/10 pb-8">
          <div className="space-y-2">
            <h2 className="text-xl font-extrabold tracking-tight text-white flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#FFBF00]"></span> SRIT Anantapur
            </h2>
            <p className="text-xs text-slate-300 max-w-md leading-relaxed">
              Redefining engineering education through research, innovation, and global collaboration.
              Approved by AICTE, New Delhi.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
            <span className="hover:text-white transition-colors cursor-pointer">NAAC A+ Grade</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-white transition-colors cursor-pointer">NBA Accredited</span>
            <span className="text-slate-600">•</span>
            <span className="hover:text-white transition-colors cursor-pointer">NIRF Ranked</span>
            <span className="text-slate-600">•</span>
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <span className="text-slate-600">•</span>
            <Link to="#" className="hover:text-white transition-colors">Contact Us</Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>© 2024 SRIT Anantapur. All Rights Reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <button className="hover:text-white transition-colors" title="Global Site">
              <Globe className="w-4 h-4" />
            </button>
            <button className="hover:text-white transition-colors" title="Share">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="hover:text-white transition-colors" title="Explore">
              <Compass className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
