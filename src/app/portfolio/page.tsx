import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Portfolio | Tvam Software — 1,500+ Apps Built',
  description: 'Explore Tvam Software\'s portfolio of 1,500+ mobile apps, web platforms, and AI products across 25+ industries.',
};

const CATEGORIES = ['All', 'iOS', 'Android', 'Web', 'AI', 'Fintech', 'Healthcare', 'EdTech', 'On-Demand'];

const PORTFOLIO_ITEMS = [
  { name: 'Josh Cam', cat: 'iOS', tag: 'Social Video', color: 'from-blue-500 to-cyan-400', desc: '50M+ downloads social video platform' },
  { name: 'Gyan Fresh', cat: 'Android', tag: 'Delivery', color: 'from-green-500 to-teal-400', desc: 'Subscription milk delivery platform' },
  { name: "Byju's", cat: 'EdTech', tag: 'Education', color: 'from-indigo-500 to-purple-400', desc: '$18B EdTech giant mobile experience' },
  { name: 'BuyEazzy', cat: 'iOS', tag: 'Ecommerce', color: 'from-teal-500 to-cyan-400', desc: 'Fashion marketplace with AI recommendations' },
  { name: 'Sterkla', cat: 'Android', tag: 'Marketplace', color: 'from-orange-500 to-red-400', desc: 'Entrepreneur & investor networking platform' },
  { name: 'Lifology', cat: 'EdTech', tag: 'E-learning', color: 'from-purple-500 to-pink-400', desc: 'World record career guidance platform' },
  { name: 'TrueFan', cat: 'AI', tag: 'Entertainment', color: 'from-rose-500 to-pink-400', desc: 'AI-powered fan engagement with cricket stars' },
  { name: 'Book My Jet', cat: 'iOS', tag: 'Travel', color: 'from-sky-500 to-blue-400', desc: 'Private jet booking platform' },
  { name: "Nik Baker's", cat: 'Web', tag: 'Food', color: 'from-amber-500 to-yellow-400', desc: 'Premium bakery D2C ecommerce' },
  { name: 'Winchat', cat: 'Android', tag: 'Social', color: 'from-violet-500 to-indigo-400', desc: 'Real-time team communication platform' },
  { name: 'Gymnest', cat: 'Android', tag: 'Fitness', color: 'from-lime-500 to-green-400', desc: 'Gym management and fitness tracking' },
  { name: 'Jeetle', cat: 'iOS', tag: 'Transport', color: 'from-slate-500 to-gray-400', desc: 'Multi-modal urban transport solution' },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Portfolio</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            1,500+ Products{' '}
            <span className="gradient-text">Built & Shipped</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Every product has a story. Here are just a few of the incredible digital experiences we&apos;ve helped create.
          </p>
        </div>
      </section>

      <Section bg="white">
        {/* Filter pills (static for SSR) */}
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {CATEGORIES.map((cat) => (
            <span key={cat}
              className={`px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all border ${cat === 'All' ? 'bg-[#F59E0B] text-white border-[#F59E0B]' : 'border-slate-200 text-slate-600 hover:border-[#F59E0B] hover:text-[#F59E0B]'}`}>
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
                  <span className="text-xs text-[#F59E0B] font-medium">{item.cat}</span>
                </div>
                <span className="text-xs text-slate-400 mb-1 block">{item.tag}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm mb-4">Showing 12 of 1,500+ projects</p>
          <button className="px-8 py-3 border-2 border-[#F59E0B] text-[#F59E0B] font-semibold rounded-full hover:bg-[#F59E0B] hover:text-white transition-all">
            Load More Projects
          </button>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
