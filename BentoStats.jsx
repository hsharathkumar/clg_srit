import React from 'react';
import { Award, TrendingUp, Cpu, BookOpen } from 'lucide-react';

export default function BentoStats() {
  const stats = [
    {
      title: '1,050+ Placement Offers',
      subtitle: '92.4% Overall Placement Record in 2025-26',
      icon: TrendingUp,
      badge: 'Tier-1 Recruiters'
    },
    {
      title: '₹44.0 LPA Highest Package',
      subtitle: 'Average Package of ₹6.8 LPA across B.Tech branches',
      icon: Award,
      badge: 'Amazon & TCS Digital'
    },
    {
      title: '24 Patents & R&D Hub',
      subtitle: '₹3.8 Crore Funded Research & Incubation Grants',
      icon: Cpu,
      badge: 'AI & Robotics CoE'
    },
    {
      title: 'NAAC A+ Accreditation',
      subtitle: '3.35 CGPA Score | Autonomous Institutional Status',
      icon: BookOpen,
      badge: 'Top Engineering Rank'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
      {stats.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all hover:scale-[1.02] flex flex-col justify-between"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-slate-100 text-[#001e40]">
                <Icon className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-100 px-2.5 py-1 rounded-full text-slate-600">
                {item.badge}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-[#001e40] tracking-tight mb-1">{item.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
