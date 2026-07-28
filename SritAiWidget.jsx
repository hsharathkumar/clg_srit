import React, { useState } from 'react';
import { Sparkles, X } from 'lucide-react';
import Chat from './Chat';

export default function SritAiWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2 bg-[#002b5c] hover:bg-[#001e40] text-white font-extrabold px-4 py-3 rounded-full shadow-2xl transition-all hover:scale-105 border border-white/20"
        >
          <Sparkles className="w-5 h-5 text-[#FFBF00] animate-pulse" />
          <span className="text-xs uppercase tracking-wider">SRIT AI Helper</span>
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#FFBF00] rounded-full border-2 border-[#002b5c] animate-ping"></span>
        </button>
      )}

      {isOpen && (
        <div className="w-80 sm:w-96 relative shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in-95 border border-slate-300">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-3 right-4 z-20 text-white/80 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
            title="Close Assistant"
          >
            <X className="w-5 h-5" />
          </button>
          <Chat compact={true} />
        </div>
      )}
    </div>
  );
}
