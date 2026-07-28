import React from 'react';
import { DollarSign } from 'lucide-react';

export default function SalaryChart() {
  const tiers = [
    { tier: '> 20 LPA', count: 18, color: 'bg-[#001e40]', width: '20%' },
    { tier: '10 - 20 LPA', count: 64, color: 'bg-slate-600', width: '45%' },
    { tier: '6 - 10 LPA', count: 380, color: 'bg-amber-600', width: '85%' },
    { tier: '4 - 6 LPA', count: 588, color: 'bg-slate-400', width: '100%' }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-bold text-[#001e40] flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-amber-600" /> Salary Package Spectrum
          </h3>
          <p className="text-xs text-slate-500">Distribution of placement offers for 2025-26 graduating batch</p>
        </div>
        <span className="bg-white text-[#001e40] border border-slate-200 text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
          1,050 Total Offers
        </span>
      </div>

      <div className="space-y-4">
        {tiers.map((t, idx) => (
          <div key={idx} className="space-y-1">
            <div className="flex justify-between text-xs font-semibold">
              <span className="text-slate-700">{t.tier}</span>
              <span className="text-[#001e40] font-mono font-bold">{t.count} Students Placed</span>
            </div>
            <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-200">
              <div
                className={`h-full rounded-full transition-all duration-1000 ${t.color}`}
                style={{ width: t.width }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
