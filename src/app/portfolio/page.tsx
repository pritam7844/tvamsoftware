import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Portfolio | Tvam Key Software — Enterprise Solutions',
  description: 'Explore Tvam Key Software\'s portfolio of enterprise software platforms, database architectures, and digital systems.',
};

const CATEGORIES = ['All', 'iOS', 'Android', 'Web', 'AI', 'Fintech', 'Healthcare', 'EdTech', 'On-Demand'];

const PORTFOLIO_ITEMS = [
  { name: 'Josh Cam', cat: 'iOS', tag: 'Social Video', color: 'from-blue-500 to-cyan-400', desc: 'Enterprise video streaming platform scaled for high concurrency.' },
  { name: 'Gyan Fresh', cat: 'Android', tag: 'Delivery', color: 'from-green-500 to-teal-400', desc: 'Subscription milk delivery platform with real-time route optimization.' },
  { name: "Byju's", cat: 'EdTech', tag: 'Education', color: 'from-indigo-500 to-purple-400', desc: 'High-scale educational experience built to support massive concurrent user bases.' },
  { name: 'BuyEazzy', cat: 'iOS', tag: 'Ecommerce', color: 'from-teal-500 to-cyan-400', desc: 'Fashion marketplace integrated with robust security gateways.' },
  { name: 'Sterkla', cat: 'Android', tag: 'Marketplace', color: 'from-emerald-500 to-teal-400', desc: 'Entrepreneur & investor networking platform with secure messaging systems.' },
  { name: 'Lifology', cat: 'EdTech', tag: 'E-learning', color: 'from-purple-500 to-pink-400', desc: 'World record career guidance platform designed for high accessibility.' },
  { name: 'TrueFan', cat: 'AI', tag: 'Entertainment', color: 'from-rose-500 to-pink-400', desc: 'Intelligent video synthesis platform built with performant server engines.' },
  { name: 'Book My Jet', cat: 'iOS', tag: 'Travel', color: 'from-sky-500 to-blue-400', desc: 'Private jet booking platform with complex routing and real-time scheduling.' },
  { name: "Nik Baker's", cat: 'Web', tag: 'Food', color: 'from-amber-500 to-yellow-400', desc: 'Premium bakery D2C commerce platform with optimized transaction flows.' },
  { name: 'Winchat', cat: 'Android', tag: 'Social', color: 'from-violet-500 to-indigo-400', desc: 'Real-time team communication platform built for secure local workspaces.' },
  { name: 'Gymnest', cat: 'Android', tag: 'Fitness', color: 'from-lime-500 to-green-400', desc: 'Gym management and fitness tracking integrated with secure payment systems.' },
  { name: 'Jeetle', cat: 'iOS', tag: 'Transport', color: 'from-slate-500 to-gray-400', desc: 'Multi-modal urban transport solution with live tracking and map integration.' },
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
