import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Case Studies | Tvam Software — Real Results, Real Impact',
  description: 'Explore how Tvam Software helped startups and enterprises raise $869M+, win awards, and achieve extraordinary business outcomes.',
};

const CASE_STUDIES = [
  {
    name: 'Josh Cam',
    category: 'Social App · Google & Microsoft-backed',
    headline: '50M+ Downloads in Record Time',
    story: 'Josh Cam partnered with Tvam Software to build a social video platform that competed with global giants. Our engineering team delivered a high-performance app capable of handling millions of concurrent users, leading to 50M+ downloads and backing from Microsoft and Google.',
    results: [
      { metric: '50M+', label: 'Downloads' },
      { metric: 'Google', label: 'Backed By' },
      { metric: '#1', label: 'App Store Rank' },
    ],
    tags: ['iOS', 'Android', 'Real-time', 'Video'],
    color: 'from-blue-600 to-cyan-500',
    href: '/case-studies/josh-cam',
  },
  {
    name: 'Lifology',
    category: 'E-learning · Career Guidance',
    headline: 'Guinness World Record for Online Learning',
    story: 'Lifology approached Tvam Software to build a career guidance platform for students. The result: a beautifully designed mobile experience that achieved a Guinness World Record for the largest online career guidance session.',
    results: [
      { metric: '1', label: 'World Record' },
      { metric: '500K+', label: 'Students' },
      { metric: '4.8★', label: 'App Rating' },
    ],
    tags: ['EdTech', 'React Native', 'Live Sessions'],
    color: 'from-purple-600 to-pink-500',
    href: '/case-studies/lifology',
  },
  {
    name: 'Gyan Fresh',
    category: 'On-Demand · Milk Delivery',
    headline: '₹908 Crore Valuation — The Milk Giant',
    story: 'Gyan Fresh needed a robust subscription-based milk delivery app. Tvam Software built a full-stack solution with real-time tracking, subscription management, and seamless payments — helping them reach ₹908 Crore in valuation.',
    results: [
      { metric: '₹908Cr', label: 'Valuation' },
      { metric: '20K+', label: 'Daily Orders' },
      { metric: '15+', label: 'Cities Covered' },
    ],
    tags: ['Flutter', 'Node.js', 'Subscriptions', 'Delivery'],
    color: 'from-green-600 to-teal-500',
    href: '/case-studies/gyan-fresh',
  },
  {
    name: 'Sterkla',
    category: 'Marketplace · Entrepreneur Platform',
    headline: 'Entrepreneur X Award Winner',
    story: 'Sterkla is a marketplace platform connecting entrepreneurs with investors and mentors. Tvam Software designed and built the complete product from scratch — winning the Entrepreneur X Award for product innovation.',
    results: [
      { metric: '2×', label: 'Award Winner' },
      { metric: '10K+', label: 'Active Users' },
      { metric: '200+', label: 'Investors' },
    ],
    tags: ['iOS', 'Android', 'Marketplace', 'React'],
    color: 'from-orange-500 to-red-500',
    href: '/case-studies/sterkla',
  },
  {
    name: "Byju's",
    category: 'EdTech · Enterprise',
    headline: '$18 Billion Valuation — The EdTech Giant',
    story: "Tvam Software contributed critical engineering work for Byju's across multiple product lines. Our teams built features used by millions of students daily, supporting their journey to becoming one of the world's most valuable EdTech companies.",
    results: [
      { metric: '$18B', label: 'Valuation' },
      { metric: '150M+', label: 'Students' },
      { metric: '50+', label: 'Countries' },
    ],
    tags: ['iOS', 'Android', 'AI', 'Live Classes'],
    color: 'from-indigo-600 to-violet-500',
    href: '/case-studies/byjus',
  },
  {
    name: 'BuyEazzy',
    category: 'Ecommerce · Fashion',
    headline: '100% Month-over-Month Growth',
    story: 'BuyEazzy is a fashion ecommerce platform that partnered with Tvam Software for their mobile app. With AI-driven product recommendations and a seamless checkout, we helped them achieve 100% M-O-M growth and $1.3M in funding.',
    results: [
      { metric: '100%', label: 'M-O-M Growth' },
      { metric: '$1.3M', label: 'Funding Raised' },
      { metric: '50K+', label: 'Downloads' },
    ],
    tags: ['React Native', 'AI Recommendations', 'Payments'],
    color: 'from-teal-600 to-cyan-400',
    href: '/case-studies/buyeazzy',
  },
  {
    name: "Byju's",
    category: 'Fintech · Fan Platform',
    headline: 'AI-Driven Fan Engagement App',
    story: 'TrueFan connects cricket fans with their favourite players through AI-generated personalised videos. Tvam Software built the AI infrastructure and mobile apps, leading to massive user adoption.',
    results: [
      { metric: '1M+', label: 'Fan Messages' },
      { metric: '95%', label: 'User Satisfaction' },
      { metric: '$2M+', label: 'Funding' },
    ],
    tags: ['AI', 'Video Generation', 'React Native'],
    color: 'from-rose-600 to-pink-500',
    href: '/case-studies/truefan',
  },
  {
    name: "Nik Baker's",
    category: 'Food · D2C Brand',
    headline: 'Run by a Professional Baker from Australia',
    story: "Nik Baker's needed a premium online ordering experience. Tvam Software built a beautifully designed ecommerce app and website that increased online orders by 300% within the first quarter.",
    results: [
      { metric: '300%', label: 'Order Increase' },
      { metric: '4.9★', label: 'App Rating' },
      { metric: '3×', label: 'Revenue Growth' },
    ],
    tags: ['iOS', 'Android', 'Ecommerce', 'Payments'],
    color: 'from-amber-600 to-yellow-500',
    href: '/case-studies/nik-bakers',
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Our Work</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Case Studies That{' '}
            <span className="gradient-text">Define Success</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            $869M+ raised. Guinness Records. Billion-dollar valuations. Here&apos;s how we&apos;ve helped businesses achieve the extraordinary.
          </p>
        </div>
      </section>

      <Section bg="alt">
        <div className="space-y-8">
          {CASE_STUDIES.map((c, i) => (
            <div key={c.name + i}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm">
              <div className="grid lg:grid-cols-3">
                {/* Color panel */}
                <div className={`bg-gradient-to-br ${c.color} p-8 flex flex-col justify-between`}>
                  <div>
                    <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">{c.category}</span>
                    <h2 className="text-3xl font-extrabold text-white mt-2">{c.name}</h2>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {c.results.map((r) => (
                      <div key={r.label} className="bg-white/10 rounded-xl p-3 text-center">
                        <div className="text-lg font-extrabold text-white">{r.metric}</div>
                        <div className="text-xs text-white/70 mt-1">{r.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Content */}
                <div className="lg:col-span-2 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#0F172A] mb-3">{c.headline}</h3>
                    <p className="text-slate-600 leading-relaxed">{c.story}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {c.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 text-xs bg-[#00C4B4]/10 text-[#00C4B4] border border-[#00C4B4]/20 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={c.href}
                    className="inline-flex items-center gap-2 mt-6 text-[#00C4B4] font-semibold hover:gap-3 transition-all">
                    Read Full Case Study <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
