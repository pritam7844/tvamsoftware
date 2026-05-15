import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Resources | Tvam Software — Insights, Guides & Blog',
  description: 'Explore Tvam Software\'s knowledge hub — blog posts, guides, and expert insights on mobile app development, AI, and digital transformation.',
};

const FEATURED = [
  {
    tag: 'Guide',
    title: 'How Much Does It Cost to Build a Mobile App in 2026?',
    desc: 'A comprehensive breakdown of mobile app development costs across iOS, Android, and cross-platform — with real project examples.',
    readTime: '12 min read',
    date: 'May 2026',
    color: 'from-blue-500 to-cyan-400',
    href: '/resources/app-development-cost-2026',
  },
  {
    tag: 'Guide',
    title: 'AI Scheduling Assistant for Healthcare — A Complete Guide',
    desc: 'How to build an AI-powered scheduling system for hospitals, clinics and healthcare providers from scratch.',
    readTime: '15 min read',
    date: 'April 2026',
    color: 'from-purple-500 to-pink-400',
    href: '/resources/ai-healthcare-scheduling',
  },
  {
    tag: 'Blog',
    title: 'Flutter vs React Native in 2026 — The Definitive Comparison',
    desc: 'Which cross-platform framework should you choose for your next mobile project? We compare performance, ecosystem and developer experience.',
    readTime: '10 min read',
    date: 'May 2026',
    color: 'from-teal-500 to-green-400',
    href: '/resources/flutter-vs-react-native',
  },
];

const BLOGS = [
  { tag: 'AI', title: 'Building Generative AI Apps with GPT-4o — A Developer\'s Guide', date: 'May 2026', readTime: '8 min' },
  { tag: 'Mobile', title: 'iOS 19 Features Every App Developer Needs to Know', date: 'April 2026', readTime: '6 min' },
  { tag: 'Fintech', title: 'How to Build a Digital Wallet App: Architecture & Compliance', date: 'April 2026', readTime: '11 min' },
  { tag: 'Design', title: 'Mobile UX Trends in 2026: What\'s In, What\'s Out', date: 'March 2026', readTime: '7 min' },
  { tag: 'Cloud', title: 'AWS vs Azure for Mobile App Backends — A Cost Comparison', date: 'March 2026', readTime: '9 min' },
  { tag: 'Startup', title: 'MVP to Series A: Lessons from 50 Apps We Built', date: 'February 2026', readTime: '14 min' },
];

const GUIDES = [
  { title: 'On-Demand App Development Guide', desc: 'Everything you need to know to build the next Uber.' },
  { title: 'Healthcare App Development', desc: 'HIPAA compliance, architecture, and features guide.' },
  { title: 'Ecommerce App Checklist', desc: '50-point checklist before launching your shopping app.' },
  { title: 'AI Integration Starter Guide', desc: 'How to add AI features to your existing mobile app.' },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Knowledge Hub</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Insights, Guides &{' '}
            <span className="gradient-text">Industry Perspectives</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Stay ahead of the curve. Expert articles, in-depth guides, and actionable insights from the Tvam Software team.
          </p>
        </div>
      </section>

      {/* Featured */}
      <Section bg="white">
        <div className="mb-10">
          <Badge className="mb-4">Recommended Reads</Badge>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Featured Guides</h2>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {FEATURED.map((f) => (
            <Link key={f.title} href={f.href}
              className="group rounded-2xl overflow-hidden border border-slate-200 bg-white card-hover">
              <div className={`h-36 bg-gradient-to-br ${f.color} flex items-end p-5`}>
                <span className="px-3 py-1 text-xs font-bold bg-white/20 text-white rounded-full">{f.tag}</span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#0F172A] text-sm leading-snug mb-2 group-hover:text-[#00C4B4] transition-colors">
                  {f.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{f.desc}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{f.date} · {f.readTime}</span>
                  <span className="text-[#00C4B4] flex items-center gap-1 font-semibold group-hover:gap-2 transition-all">
                    Read <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Blog + Guides */}
      <Section bg="alt">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Blog list */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">Latest Blog Posts</h2>
            <div className="space-y-4">
              {BLOGS.map((b) => (
                <div key={b.title}
                  className="group flex items-start gap-4 bg-white rounded-2xl p-5 border border-slate-200 card-hover cursor-pointer">
                  <div className="w-2 h-2 rounded-full bg-[#00C4B4] mt-2 shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-[#00C4B4] font-semibold uppercase tracking-wide">{b.tag}</span>
                    <h3 className="text-sm font-bold text-[#0F172A] mt-1 group-hover:text-[#00C4B4] transition-colors leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">{b.date} · {b.readTime} read</p>
                  </div>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-[#00C4B4] transition-colors shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Guides sidebar */}
          <div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">Quick Guides</h2>
            <div className="space-y-4">
              {GUIDES.map((g) => (
                <div key={g.title}
                  className="group bg-white rounded-2xl p-5 border border-slate-200 card-hover cursor-pointer">
                  <h3 className="text-sm font-bold text-[#0F172A] group-hover:text-[#00C4B4] transition-colors mb-1">{g.title}</h3>
                  <p className="text-xs text-slate-500">{g.desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs text-[#00C4B4] font-semibold mt-3 group-hover:gap-2 transition-all">
                    Read Guide <ArrowRight size={10} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
