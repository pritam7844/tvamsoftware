import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CASES = [
  {
    name: 'Shrimpbite',
    tag: 'E-commerce · Operations',
    stat: '3',
    statLabel: 'Regional Branches',
    detail: 'Multi-branch operations and e-commerce platform for shrimp farming, deployed on AWS with Razorpay integrations.',
    color: '#0EA5E9',
    href: '/case-studies/shrimpbite',
  },
  {
    name: 'Brandbarrel',
    tag: 'Corporate · Gifting',
    stat: '15k',
    statLabel: 'Employee Users',
    detail: 'A premium corporate gifting portal featuring dedicated Employee, Company, and Admin access levels.',
    color: '#006837',
    href: '/case-studies/brandbarrel',
  },
  {
    name: 'Travolo',
    tag: 'Travel & Security',
    stat: 'Secure',
    statLabel: 'DR Security compliance',
    detail: 'Corporate travel booking and routing portal integrated with security solution systems.',
    color: '#4F46E5',
    href: '/case-studies/travolo',
  },
  {
    name: "HONTO'S LANCOM",
    tag: 'LAN · Operations',
    stat: '84%',
    statLabel: 'QC Efficiency',
    detail: 'On-premise business collaboration and factory floor management dashboard built for offline networks.',
    color: '#EAA812',
    href: '/case-studies/hontos-lancom',
  },
  {
    name: 'Incite Digital Portal',
    tag: 'Project Management',
    stat: 'Vercel',
    statLabel: 'Cloud Deployment',
    detail: 'Custom project tracker workspace and digital asset dashboard built for seamless client review operations.',
    color: '#EC4899',
    href: '/case-studies/incite-digital',
  },
  {
    name: 'AMJSTAR',
    tag: 'Retail · Ledger',
    stat: 'Offline',
    statLabel: 'First Sync',
    detail: 'Lightweight catalog and digital ledger enabling local merchants to manage billing and payment reminders.',
    color: '#6366F1',
    href: '/case-studies/amj-dukandar',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-10 items-end mb-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006837] mb-3">Proof of work</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
              Systems designed for<br />
              exceptional scale.
            </h2>
          </div>
          <div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Proven engineering. From system scaling to high-availability architecture — we build software platforms that last.
            </p>
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 text-[#006837] font-semibold text-sm hover:gap-3 transition-all">
              All case studies <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Cards — 2 + 1 asymmetric */}
        <div className="grid lg:grid-cols-3 gap-4">

          {/* Left 2×2 */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {CASES.slice(0, 4).map((c) => (
              <Link key={c.name} href={c.href}
                className="group relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all overflow-hidden">
                {/* Left accent bar */}
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: c.color }} />

                <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{c.tag}</span>
                <h3 className="text-lg font-extrabold text-[#0F172A] mt-1 mb-3 group-hover:text-[#006837] transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">{c.detail}</p>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black leading-none" style={{ color: c.color }}>{c.stat}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.statLabel}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-[#006837] group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            {CASES.slice(4).map((c) => (
              <Link key={c.name} href={c.href}
                className="group flex-1 relative bg-white rounded-2xl border border-slate-200 p-6 hover:border-slate-300 hover:shadow-md transition-all overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                  style={{ background: c.color }} />
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">{c.tag}</span>
                  <h3 className="text-lg font-extrabold text-[#0F172A] mt-1 mb-3 group-hover:text-[#006837] transition-colors">
                    {c.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{c.detail}</p>
                </div>
                <div className="mt-6 flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black leading-none" style={{ color: c.color }}>{c.stat}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.statLabel}</div>
                  </div>
                  <TrendingUp size={16} style={{ color: c.color }} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </div>
              </Link>
            ))}

            {/* Corporate highlight tile */}
            <div className="rounded-2xl border border-[#006837]/30 bg-gradient-to-br from-[#006837]/5 to-[#006837]/5 p-6">
              <p className="text-xs font-semibold text-slate-500 mb-1">Architecture Standard</p>
              <div className="text-3xl font-black text-[#0F172A]">Enterprise</div>
              <p className="text-xs text-slate-400 mt-2">designed for maximum resilience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
