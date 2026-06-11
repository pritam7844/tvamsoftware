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
    name: 'Shrimbite',
    category: 'E-commerce · Operations',
    headline: 'Optimizing Shrimp Farming & Logistics at Scale',
    story: 'Shrimbite partnered with Tvam Software to digitize shrimp farming operations and supply chains across multiple regional branches including Teerth Avila, Yamuna Nagar, and Pragati Residency. We built a full-stack, cloud-hosted platform enabling secure transaction workflows, role-based branch audits, and a unified administrator control system.',
    results: [
      { metric: '3', label: 'Branches' },
      { metric: '100%', label: 'Order Security' },
      { metric: 'AWS', label: 'Cloud Hosting' },
    ],
    tags: ['iOS', 'Android', 'Razorpay', 'AWS Cloud'],
    color: 'from-blue-600 to-cyan-500',
    href: '/case-studies/shrimpbite',
  },
  {
    name: 'Brandbarrel',
    category: 'Corporate Gifting · Enterprise',
    headline: 'Streamlining Gifting for 15,000+ Employees',
    story: 'Brandbarrel is a premium corporate gifting hub. Tvam Software engineered the platform layout, creating specialized dashboard access views for individual Employees (to self-select gifts), corporate Companies (to manage allocations), and Admin coordinators (to oversee full operational flows).',
    results: [
      { metric: '15k+', label: 'Active Users' },
      { metric: '3-Tier', label: 'Role Views' },
      { metric: 'Zero', label: 'Order Friction' },
    ],
    tags: ['Next.js', 'MongoDB', 'Razorpay', 'React'],
    color: 'from-green-600 to-teal-500',
    href: '/case-studies/brandbarrel',
  },
  {
    name: 'Travolo',
    category: 'Travel & Logistics · Corporate',
    headline: 'Secure Travel Management & Routing Solutions',
    story: 'Travolo needed a high-security internal workspace to coordinate corporate journeys and client routes. Tvam Software designed and implemented a private database and travel tracking ecosystem integrated with DR Security Solutions, ensuring compliance and data protection.',
    results: [
      { metric: 'DR Sec', label: 'Compliance' },
      { metric: '99.9%', label: 'Uptime' },
      { metric: '40%', label: 'Route Speedup' },
    ],
    tags: ['React', 'Node.js', 'PostgreSQL', 'DR Security'],
    color: 'from-indigo-600 to-purple-500',
    href: '/case-studies/travolo',
  },
  {
    name: 'Incite Digital Portal',
    category: 'Workspace · Task Tracking',
    headline: 'High-Efficiency Client and Asset Workspace',
    story: 'Incite Digital Portal is an enterprise-grade tracking platform designed to monitor ongoing production tasks and creative assets. Built on React and Node.js, we engineered the dynamic dashboard to sync securely via AWS cloud credentials, ensuring seamless partner collaborations.',
    results: [
      { metric: 'Vercel', label: 'Deployment' },
      { metric: 'AWS', label: 'CloudLogin' },
      { metric: '99.99%', label: 'Reliability' },
    ],
    tags: ['React', 'Node.js', 'AWS EKS', 'Vercel'],
    color: 'from-rose-600 to-pink-500',
    href: '/case-studies/incite-digital',
  },
  {
    name: "HONTO'S LANCOM",
    category: 'LAN · Operations & Production',
    headline: 'Unified LAN-Based Collaboration & Factory Shop-Floor Dashboard',
    story: "HONTO'S LANCOM is a unified local network communication and live shop-floor management ecosystem. Deployed on-premise, it enables secure role-based collaboration, messaging, and task coordination for internal office staff, while simultaneously providing active operators with live visual QC checklists, real-time supervisor instructions, and automated multi-channel escalation notifications without requiring external internet.",
    results: [
      { metric: 'Sub-5ms', label: 'Local Latency' },
      { metric: '84%', label: 'Efficiency Score' },
      { metric: 'WhatsApp', label: 'Escalations' },
    ],
    tags: ['Node.js', 'PostgreSQL', 'WebSockets', 'WhatsApp API', 'Firebase FCM'],
    color: 'from-amber-600 to-yellow-500',
    href: '/case-studies/hontos-lancom',
  },
  {
    name: 'AMJ Dukandar',
    category: 'Merchant Ledger · Retail',
    headline: 'Offline-First Store Management and Catalog Builder',
    story: 'AMJ Dukandar simplifies digital record-keeping for local retail merchants. Tvam Software engineered a lightweight, high-performance offline ledger application that handles transaction ledgers, product cataloging, and auto-sends payment reminders.',
    results: [
      { metric: 'Offline', label: 'Operations' },
      { metric: 'Auto', label: 'Reminders' },
      { metric: '4.8★', label: 'App Rating' },
    ],
    tags: ['Android SDK', 'SQLite', 'WhatsApp API', 'Ledger'],
    color: 'from-violet-600 to-indigo-500',
    href: '/case-studies/amj-dukandar',
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
                        <span key={tag} className="px-3 py-1 text-xs bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link href={c.href}
                    className="inline-flex items-center gap-2 mt-6 text-[#F59E0B] font-semibold hover:gap-3 transition-all">
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
