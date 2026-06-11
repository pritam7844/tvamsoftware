import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

const CASE_STUDIES = [
  {
    slug: 'shrimpbite',
    title: 'Shrimpbite',
    sub: 'Multi-branch Shrimp Farming Platform',
    category: 'E-commerce & Operations',
    desc: 'Multi-branch shrimp farming e-commerce and logistics platform scaling across regional branches with high-efficiency supply chain tracking.',
    challenge: 'Manage separate operations and inventory for multiple branches (Teerth Avila, Yamuna Nagar, Pragati Residency) while securing administrative oversight and customer transaction streams.',
    solution: 'A centralized multi-tenant database infrastructure deployed on AWS with role-based dashboard views and integrated Razorpay payment gateway interfaces for consumer orders.',
    results: ['3 regional branches fully digitized', '100% secure payment flow via Razorpay', 'Role-based control (Admin, Manager, Operator)', 'Scalable backend on AWS server instances'],
    tech: ['React Native', 'Node.js', 'PostgreSQL', 'Razorpay', 'AWS CloudLogin'],
    image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'brandbarrel',
    title: 'Brandbarrel',
    sub: 'Premium Corporate Gifting Platform',
    category: 'E-commerce / Corporate Gifting',
    desc: 'Corporate gifting portal featuring employee self-selection, company account management, and automated checkout.',
    challenge: 'Structure three distinct visual dashboards (Employee View, Companies View, Admin View) to manage 15,000+ distinct gifting orders and billing accounts securely.',
    solution: 'A multi-tier dashboard architecture built in Next.js, integrating complex user roles and payment reconciliations with Razorpay.',
    results: ['15k+ active employee gifting profiles', 'Implemented 3-tier user interfaces', 'Automated bulk order dispatching', '99.9% invoice reconciliation accuracy'],
    tech: ['Next.js', 'React', 'Node.js', 'MongoDB', 'Razorpay'],
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'travolo',
    title: 'Travolo',
    sub: 'Secure Corporate Travel Portal',
    category: 'Travel & Logistics',
    desc: 'Premium travel management workspace with built-in data security protocols and real-time itinerary tracking.',
    challenge: 'Ensuring absolute data confidentiality for corporate executive routes and booking itineraries while integrating with third-party security systems.',
    solution: 'A private database framework utilizing strict encryption schemes and deep integrations with DR Security Solutions for secure communication pipelines.',
    results: ['Zero security leaks in transit data', 'Compliant with international corporate policies', 'Real-time vehicle and route tracking', '100% paperless workflow transition'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'DR Security APIs', 'AWS'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'incite-digital',
    title: 'Incite Digital Portal',
    sub: 'Enterprise Asset & Project Tracker',
    category: 'Project Tracker Workspace',
    desc: 'Custom-built project tracker and client-facing digital asset management platform.',
    challenge: 'Consolidating creative files, asset timelines, and tracking statuses into a single fast-loading dashboard for client review.',
    solution: 'React and Node.js portal hosted on Vercel utilizing centralized AWS cloud login credentials for security and speed.',
    results: ['Deployed on Vercel with 99.99% uptime', 'Secure AWS identity management integration', 'Decreased client approval loop times by 50%', 'Centralized creative asset indexer'],
    tech: ['React', 'Node.js', 'Vercel', 'AWS CloudLogin', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'hontos-lancom',
    title: "HONTO'S LANCOM",
    sub: 'Unified LAN Collaboration & QC Operations Suite',
    category: 'LAN · Operations & Production',
    desc: "A local area network enterprise hub designed to facilitate offline office collaboration, real-time checklist auditing, and live shop-floor tracking.",
    challenge: 'Deploying a high-security internal collaboration platform and real-time shop floor dashboard that can track quality checks, push instructions, coordinate task management, and support team chats completely offline on a local area network (LAN).',
    solution: 'A WebSockets-based Node.js and PostgreSQL server architecture hosted locally within the LAN network, featuring granular role-based access control (RBAC), offline checklist triggers, and multi-channel fallback alerts (WhatsApp/Email).',
    results: ['84% average factory efficiency rate', 'Sub-5ms chat latency over local network', 'Zero external internet dependency for daily tasks', 'Real-time database log of operator checks and audit trails'],
    tech: ['Next.js', 'Node.js', 'WebSockets', 'PostgreSQL', 'WhatsApp API', 'Firebase FCM'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'amj-dukandar',
    title: 'AMJSTAR',
    sub: 'Merchant Digital Ledger & Catalog',
    category: 'Merchant Platform',
    desc: 'Offline-first merchant ledger and catalog builder for small businesses and retail shopkeepers.',
    challenge: 'Designing a lightweight app that runs reliably in low-connectivity areas, letting small shopkeepers log transactions and send reminders without heavy data sync requirements.',
    solution: 'An offline-first Android application synced with local SQLite databases that sends transaction statements and invoice alerts via automated WhatsApp API triggers.',
    results: ['Fully functional offline with local database sync', 'Automatic transaction reminders to customers', 'Reduced late payments by 35% for shop owners', '4.8★ app store rating for ease of use'],
    tech: ['Android SDK', 'SQLite', 'Node.js', 'WhatsApp API', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&h=400&q=80',
  },
];

export async function generateStaticParams() {
  return CASE_STUDIES.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) return {};
  return {
    title: `${cs.title} Case Study | Tvam Key Software`,
    description: cs.desc,
  };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const cs = CASE_STUDIES.find((c) => c.slug === slug);
  if (!cs) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">{cs.category}</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {cs.title}
            </h1>
            <p className="mt-2 text-[#EAA812] font-semibold text-lg">{cs.sub}</p>
            <p className="mt-4 text-lg text-slate-400 max-w-xl">{cs.desc}</p>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Badge className="mb-4">The Challenge</Badge>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-4">Problem Statement</h2>
            <p className="text-slate-600 leading-relaxed">{cs.challenge}</p>
          </div>
          <div>
            <Badge variant="secondary" className="mb-4">Our Solution</Badge>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-4">How We Solved It</h2>
            <p className="text-slate-600 leading-relaxed">{cs.solution}</p>
          </div>
        </div>
      </Section>

      <Section bg="alt">
        <div className="text-center mb-14">
          <Badge className="mb-4">Results</Badge>
          <h2 className="text-3xl font-extrabold text-[#0F172A]">Outcomes Delivered</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cs.results.map((r) => (
            <div key={r} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-3">
              <CheckCircle size={20} className="text-[#006837] mt-0.5 shrink-0" />
              <p className="text-sm font-semibold text-[#0F172A] leading-snug">{r}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="text-center mb-10">
          <Badge className="mb-4">Tech Stack</Badge>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Technologies Used</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {cs.tech.map((t) => (
            <span key={t} className="px-4 py-2 bg-[#F8FAFC] border border-slate-200 rounded-full text-sm font-medium text-slate-700">{t}</span>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#006837] text-white font-bold rounded-full hover:bg-[#004D28] transition-colors">
              Start a Similar Project <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
