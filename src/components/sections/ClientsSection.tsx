const CLIENTS_ROW1 = [
  'Enterprise Resource Planning', 'Supply Chain Management', 'Artificial Intelligence', 'Data Analytics', 'Cloud Migration',
  'API Integrations', 'Identity & Access Control', 'Internet of Things', 'Mobile Solutions',
];
const CLIENTS_ROW2 = [
  'Financial Services', 'Healthcare Portals', 'Automotive Systems', 'Logistics Platforms', 'Education Hubs',
  'Retail Systems', 'E-commerce Gateways', 'Telecommunications', 'SaaS Solutions',
];
const FUNDING_PARTNERS = [
  'ISO 27001 Security', 'ISO 9001 Quality', 'AWS Advanced Partner', 'GCP Partner', 'Azure Certified',
  'CI/CD Compliance', 'SOC 2 Compliant', 'GDPR Ready',
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
            className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-semibold border whitespace-nowrap
                       bg-white text-slate-600 border-slate-200 hover:border-[#006837]/40 hover:text-[#006837] transition-colors cursor-default">
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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006837] mb-3">Enterprise Domains</p>
            <h2 className="text-4xl font-black text-[#0F172A]">
              Industry leading.<br />Globally compliant.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            From regulated financial platforms to high-uptime logistical gateways — we engineer systems built for durability.
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
            { label: 'Enterprise integrations', value: '400+' },
            { label: 'Security & compliance audits', value: '100% Pass' },
            { label: 'Active engineering hubs', value: 'Mumbai BKC' },
            { label: 'Average SLA commitment', value: '99.9%' },
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
