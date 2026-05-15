const CLIENTS_ROW1 = [
  'Airtel', 'Dhanuka', 'Mother Dairy', 'Bajaj FinServ', 'White Hat Jr',
  "Byju's", 'Godfrey Phillips', 'Indofil', 'AVA Technologies',
];
const CLIENTS_ROW2 = [
  'Indian Navy', 'Central Water Commission', 'IT Dept J&K', 'NIC', 'MyGov',
  'STPI', 'UPDESCO', 'Delhi Transco', 'NCDC',
];
const FUNDING_PARTNERS = [
  'Microsoft', 'Google', 'Y Combinator', 'Sequoia', 'Goldman Sachs',
  'Matrix Partners', 'Titan Capital', 'Saama Capital',
];

function Marquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const doubled = [...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-1.5">
      <div
        className="flex gap-3 whitespace-nowrap"
        style={{
          animation: `marquee 25s linear infinite ${reverse ? 'reverse' : 'normal'}`,
          width: 'max-content',
        }}
      >
        {doubled.map((name, i) => (
          <span key={i}
            className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold border whitespace-nowrap
                       bg-white text-slate-600 border-slate-200 hover:border-[#F59E0B]/40 hover:text-[#F59E0B] transition-colors cursor-default">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ClientsSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">Trusted by</p>
            <h2 className="text-4xl font-black text-[#0F172A]">
              50,000+ clients.<br />5 continents.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            From government bodies to VC-backed unicorns — they chose Tvam Software because great work speaks for itself.
          </p>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <Marquee items={CLIENTS_ROW1} />
        <Marquee items={CLIENTS_ROW2} reverse />
        <Marquee items={FUNDING_PARTNERS} />
      </div>

      {/* Dividers and trust line */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center text-sm text-slate-400">
          {[
            { label: 'Government sector clients', value: '15+' },
            { label: 'Enterprise clients', value: '200+' },
            { label: 'VC-backed startups', value: '500+' },
            { label: 'Avg. client tenure', value: '3.2 yrs' },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-xl font-extrabold text-[#0F172A]">{s.value}</div>
              <div className="text-xs text-slate-400 mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
