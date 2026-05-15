import { TrendingUp, Users, Globe, Zap, Award, Clock } from 'lucide-react';

const STATS = [
  { icon: TrendingUp, value: '$869M+', label: 'Funding raised by our apps', accent: '#00C4B4' },
  { icon: Users,      value: '50,000+', label: 'Happy clients globally', accent: '#6366F1' },
  { icon: Globe,      value: '25+', label: 'Countries served', accent: '#F59E0B' },
  { icon: Zap,        value: '1,500+', label: 'Products shipped', accent: '#10B981' },
  { icon: Award,      value: '500+', label: 'Team members', accent: '#EF4444' },
  { icon: Clock,      value: '12+', label: 'Years of excellence', accent: '#8B5CF6' },
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
              <div className="text-2xl lg:text-3xl font-black text-[#0F172A] leading-none" style={{ color: s.accent }}>
                {s.value}
              </div>
              <p className="text-xs text-slate-500 mt-1.5 leading-snug font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
