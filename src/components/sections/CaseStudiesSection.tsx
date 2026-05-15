import Link from 'next/link';
import { ArrowRight, TrendingUp } from 'lucide-react';

const CASES = [
  {
    name: 'Josh Cam',
    tag: 'Social · Video',
    stat: '50M+',
    statLabel: 'Downloads',
    detail: 'Google & Microsoft-backed social video platform. Scaled to handle millions of concurrent streams.',
    color: '#0EA5E9',
    href: '/case-studies/josh-cam',
  },
  {
    name: 'Gyan Fresh',
    tag: 'On-Demand · Delivery',
    stat: '₹908Cr',
    statLabel: 'Valuation',
    detail: 'Subscription milk delivery at scale. 20,000+ daily orders across 15 cities.',
    color: '#10B981',
    href: '/case-studies/gyan-fresh',
  },
  {
    name: "Byju's",
    tag: 'EdTech · Enterprise',
    stat: '$18B',
    statLabel: 'Valuation',
    detail: "Features used by 150M+ students daily. The world's most valuable EdTech company.",
    color: '#6366F1',
    href: '/case-studies/byjus',
  },
  {
    name: 'BuyEazzy',
    tag: 'Ecommerce · Fashion',
    stat: '100%',
    statLabel: 'MoM Growth',
    detail: 'AI-powered fashion marketplace. $1.3M raised. 50K downloads in first quarter.',
    color: '#F97316',
    href: '/case-studies/buyeazzy',
  },
  {
    name: 'Lifology',
    tag: 'E-learning · Career',
    stat: 'GWR',
    statLabel: 'World Record',
    detail: 'Guinness World Record for the largest online career guidance session.',
    color: '#EC4899',
    href: '/case-studies/lifology',
  },
  {
    name: 'Sterkla',
    tag: 'Marketplace',
    stat: '2×',
    statLabel: 'Award Winner',
    detail: 'Entrepreneur X Award. Connects founders with investors and mentors at scale.',
    color: '#F59E0B',
    href: '/case-studies/sterkla',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-3 gap-10 items-end mb-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C4B4] mb-3">Proof of work</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
              The apps our clients<br />
              built their empires on.
            </h2>
          </div>
          <div>
            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              $869M+ raised collectively. Guinness records. Billion-dollar valuations. Not theory — results.
            </p>
            <Link href="/case-studies"
              className="inline-flex items-center gap-2 text-[#00C4B4] font-semibold text-sm hover:gap-3 transition-all">
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
                <h3 className="text-lg font-extrabold text-[#0F172A] mt-1 mb-3 group-hover:text-[#00C4B4] transition-colors">
                  {c.name}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-5">{c.detail}</p>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-3xl font-black leading-none" style={{ color: c.color }}>{c.stat}</div>
                    <div className="text-xs text-slate-400 mt-1">{c.statLabel}</div>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-[#00C4B4] group-hover:gap-2 transition-all">
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
                  <h3 className="text-lg font-extrabold text-[#0F172A] mt-1 mb-3 group-hover:text-[#00C4B4] transition-colors">
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

            {/* Funding highlight tile */}
            <div className="rounded-2xl border border-[#00C4B4]/30 bg-gradient-to-br from-[#00C4B4]/8 to-[#6366F1]/8 p-6">
              <p className="text-xs font-semibold text-slate-500 mb-1">Total raised by our apps</p>
              <div className="text-4xl font-black text-[#0F172A]">$869M+</div>
              <p className="text-xs text-slate-400 mt-2">in the last year alone</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
