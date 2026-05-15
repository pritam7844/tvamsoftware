import { Trophy, BadgeCheck } from 'lucide-react';

const AWARDS = [
  { title: 'Top App Development Company', source: 'Clutch', year: '2024' },
  { title: 'Best Mobile App Developer', source: 'GoodFirms', year: '2024' },
  { title: 'Top 10 Software Companies', source: 'CIO Review', year: '2023' },
  { title: 'Innovative Tech Company', source: 'Your Story', year: '2023' },
  { title: 'App Development Excellence', source: 'Gulf News', year: '2022' },
  { title: 'Top Ranked IT Company', source: 'Fortune India', year: '2023' },
];

const PRESS = ['Gulf News', 'Your Story', 'CIO Review', 'Fortune India'];

export default function AwardsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left — heading */}
          <div className="lg:w-80 shrink-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C4B4] mb-3">Recognition</p>
            <h2 className="text-4xl font-black text-[#0F172A] leading-tight">
              The industry<br />has noticed.
            </h2>
            <p className="text-slate-500 text-sm mt-4 leading-relaxed">
              Recognition from the most respected voices in tech consulting and product development.
            </p>

            {/* Press */}
            <div className="mt-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-4">As seen in</p>
              <div className="flex flex-wrap gap-2">
                {PRESS.map((p) => (
                  <span key={p}
                    className="px-4 py-2 text-xs font-bold text-slate-600 bg-white rounded-xl border border-slate-200 shadow-sm">
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — awards grid */}
          <div className="flex-1 grid sm:grid-cols-2 gap-3">
            {AWARDS.map((a) => (
              <div key={a.title}
                className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-200 hover:border-[#00C4B4]/30 hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C4B4]/15 to-[#6366F1]/15 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Trophy size={16} className="text-[#00C4B4]" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0F172A] leading-snug">{a.title}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <BadgeCheck size={12} className="text-[#00C4B4]" />
                    <span className="text-xs text-slate-500">{a.source} · {a.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
