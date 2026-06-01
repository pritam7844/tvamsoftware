import { TrendingUp, Users, Globe, Zap, Award, Clock } from 'lucide-react';

const STATS = [
  { icon: TrendingUp, value: 'Est. 2017', label: 'Established in Mumbai', accent: '#006837' },
  { icon: Users,      value: '98%', label: 'Client satisfaction rate', accent: '#EAA812' },
  { icon: Globe,      value: '180+', label: 'Enterprise deployments', accent: '#006837' },
  { icon: Zap,        value: '99.9%', label: 'System uptime maintained', accent: '#EAA812' },
  { icon: Award,      value: 'ISO 27001', label: 'Security & compliance', accent: '#006837' },
  { icon: Clock,      value: '24/7/365', label: 'Enterprise support & SLA', accent: '#EAA812' },
];

export default function StatsSection() {
  return (
    <div className="bg-white border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y md:divide-y-0 divide-slate-100">
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center py-8 px-4 text-center group hover:bg-slate-50 transition-colors">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                style={{ backgroundColor: `${s.accent}15` }}>
                <s.icon size={18} style={{ color: s.accent }} />
              </div>
              <div className="text-xl lg:text-2xl font-black leading-none" style={{ color: s.accent }}>
                {s.value}
              </div>
              <p className="text-[10px] text-slate-500 mt-1.5 leading-snug font-medium uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
