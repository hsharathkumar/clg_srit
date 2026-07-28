import React, { useEffect, useState } from 'react';
import { Bell, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CircularsTicker() {
  const [circulars, setCirculars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/v1/circulars')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setCirculars(data.data);
        }
      })
      .catch(() => {
        setCirculars([
          { id: 'c1', date: '2026-07-25', category: 'Academic', title: 'B.Tech IV Year Mid-1 Examination Timetable Released' },
          { id: 'c2', date: '2026-07-24', category: 'Placements', title: 'TCS Digital & NQT Campus Recruitment Drive Registration Open' }
        ]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="bg-white/80 backdrop-blur-[12px] border border-slate-200 rounded-2xl p-4 flex flex-col md:flex-row items-start md:items-center gap-4 shadow-sm">
      {/* Latest Circulars Badge - Deep Academic Navy & Amber Gold */}
      <div className="flex items-center gap-2 bg-[#003366] text-[#FFBF00] font-extrabold text-xs px-3.5 py-1.5 rounded-xl shrink-0 uppercase tracking-wider shadow-md">
        <Bell className="w-4 h-4 text-[#FFBF00] animate-bounce" />
        <span>Latest Circulars</span>
      </div>

      <div className="flex-1 overflow-hidden w-full">
        {loading ? (
          <p className="text-xs text-[#334155] animate-pulse">Fetching latest notifications...</p>
        ) : (
          <div className="flex flex-col gap-2">
            {circulars.slice(0, 2).map((item) => (
              <div key={item.id} className="flex items-center justify-between text-xs gap-2 border-b border-slate-100 pb-1.5 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 truncate">
                  <span className="bg-[#003366] text-[#FFBF00] font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow-sm">
                    {item.category}
                  </span>
                  <span className="text-[#334155] font-semibold truncate">{item.title}</span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono shrink-0">{item.date}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <Link
        to="/examination-cell"
        className="text-xs text-[#003366] font-extrabold hover:underline flex items-center gap-1 shrink-0"
      >
        View All <ChevronRight className="w-3.5 h-3.5 text-[#003366]" />
      </Link>
    </div>
  );
}
