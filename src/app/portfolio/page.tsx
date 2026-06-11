import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Portfolio | Tvam Key Software — Enterprise Solutions',
  description: 'Explore Tvam Key Software\'s portfolio of enterprise software platforms, database architectures, and digital systems.',
};

const CATEGORIES = ['All', 'iOS & Android', 'Android', 'Web', 'LAN', 'IoT', 'E-commerce'];

const PORTFOLIO_ITEMS = [
  { name: 'Shrimbite', cat: 'iOS & Android', tag: 'E-commerce & Operations', color: 'from-blue-500 to-cyan-400', desc: 'Multi-branch shrimp farming e-commerce and logistics platform scaling across regional branches.' },
  { name: 'Brandbarrel', cat: 'Web', tag: 'Corporate Gifting', color: 'from-green-500 to-teal-400', desc: 'Premium corporate gifting platform featuring dedicated Employee, Company, and Admin dashboards.' },
  { name: 'Travolo', cat: 'Web', tag: 'Travel & Security', color: 'from-indigo-500 to-purple-400', desc: 'Corporate travel booking and routing portal integrated with security solution systems.' },
  { name: 'Incite Digital Portal', cat: 'Web', tag: 'Project Management', color: 'from-teal-500 to-cyan-400', desc: 'Enterprise project tracker and digital asset workspace designed for client collaborative reviews.' },
  { name: "HONTO'S LANCOM", cat: 'LAN', tag: 'LAN & Shop-floor Operations', color: 'from-emerald-500 to-teal-400', desc: 'On-premise LAN business collaboration suite and factory shop-floor control panel integrated with live QC tracking.' },
  { name: 'AMJ Dukandar', cat: 'Android', tag: 'Retail & Ledger', color: 'from-rose-500 to-pink-400', desc: 'Offline-first merchant ledger and product catalog builder for micro-retail businesses.' },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Enterprise Solutions{' '}
            <span className="text-[#EAA812]">Built & Shipped</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Every system has an architectural story. Here are just a few of the robust, high-integrity platforms we&apos;ve helped engineer.
          </p>
        </div>
      </section>

      <Section bg="white">
        {/* Filter pills (static for SSR) */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <span key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all border ${cat === 'All' ? 'bg-[#006837] text-white border-[#006837]' : 'border-slate-200 text-slate-600 hover:border-[#006837] hover:text-[#006837]'}`}>
              {cat}
            </span>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {PORTFOLIO_ITEMS.map((item) => (
            <div key={item.name} className="group rounded-2xl overflow-hidden border border-slate-200 bg-white card-hover">
              <div className={`h-36 bg-gradient-to-br ${item.color} flex items-center justify-center`}>
                <span className="text-4xl font-extrabold text-white/20">{item.name[0]}</span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-[#0F172A] text-sm">{item.name}</h3>
                  <span className="text-xs text-[#006837] font-medium">{item.cat}</span>
                </div>
                <span className="text-xs text-slate-400 mb-1 block">{item.tag}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Showing active enterprise platforms</p>
          <button className="px-8 py-3 border-2 border-[#006837] text-[#006837] font-semibold rounded-full hover:bg-[#006837] hover:text-white transition-all">
            Explore More Deployments
          </button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
