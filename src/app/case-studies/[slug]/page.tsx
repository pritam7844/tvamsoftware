import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

const CASE_STUDIES = [
  {
    slug: 'josh-cam',
    title: 'Josh Cam',
    sub: 'Google & Microsoft-backed',
    category: 'Social Video Platform',
    desc: 'Built the backend infrastructure and mobile apps for Josh Cam — a short-video platform backed by Google and Microsoft, scaling to millions of users.',
    challenge: 'Handle viral traffic spikes with zero downtime while maintaining sub-200ms API response times globally.',
    solution: 'Microservices on AWS EKS with CloudFront CDN, adaptive bitrate streaming, and ML-powered content recommendation.',
    results: ['50M+ monthly active users', 'Sub-100ms global API latency', '99.99% uptime SLA maintained', '40% reduction in infrastructure costs'],
    tech: ['React Native', 'Node.js', 'AWS', 'Kubernetes', 'Redis', 'FFmpeg', 'ML Recommendation Engine'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'lifology',
    title: 'Lifology',
    sub: 'Guinness World Record Holder',
    category: 'EdTech Platform',
    desc: 'Engineered the platform behind Lifology — the Guinness World Record-holding career counselling EdTech company.',
    challenge: 'Support simultaneous live sessions for thousands of students with real-time collaboration and low latency.',
    solution: 'WebRTC-based live classroom system with Agora SDK, custom whiteboard, and AI-driven career assessment engine.',
    results: ['1M+ students served', 'Guinness World Record certified', 'Live sessions for 10K+ concurrent users', '4.8★ App Store rating'],
    tech: ['Flutter', 'Node.js', 'Agora SDK', 'WebRTC', 'PostgreSQL', 'Redis', 'AI Assessment Engine'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'milkbun',
    title: 'MilkBun',
    sub: "World's 50 Best Restaurants",
    category: 'Food & Dining',
    desc: 'Designed and developed the digital presence and table-booking platform for MilkBun — featured in the World\'s 50 Best Restaurants list.',
    challenge: 'Create a premium booking experience that matches the brand\'s world-class reputation while handling high-demand reservation windows.',
    solution: 'Custom reservation engine with real-time availability, waitlist management, and a bespoke CMS for menu and event management.',
    results: ['100% reservations online within 3 months', 'Zero double-booking incidents', '95% guest satisfaction score', 'Featured in 5 international food publications'],
    tech: ['Next.js', 'Prisma', 'PostgreSQL', 'Stripe', 'Sanity CMS', 'Vercel', 'Twilio SMS'],
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'gyan-fresh',
    title: 'Gyan Fresh',
    sub: 'The 908 Crore Milk Giant',
    category: 'D2C Delivery Platform',
    desc: 'Built the end-to-end delivery platform for Gyan Fresh — a ₹908 crore dairy brand — covering consumer app, delivery agent app, and operations dashboard.',
    challenge: 'Manage subscription-based daily deliveries to 500K+ households with dynamic route optimisation and real-time tracking.',
    solution: 'Three-app ecosystem (consumer, delivery, admin) with ML route optimisation, subscription engine, and IoT-connected cold-chain monitoring.',
    results: ['500K+ daily deliveries managed', '99.8% on-time delivery rate', '30% reduction in fuel costs via route optimisation', '₹908 crore revenue platform'],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Google Maps API', 'ML Route Optimisation', 'IoT Integration', 'AWS'],
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'sterkla',
    title: 'Sterkla',
    sub: 'Entrepreneur X Award Winner',
    category: 'HR Tech Platform',
    desc: 'Engineered Sterkla — an award-winning HR tech platform that automates employee management and payroll for SMEs across India.',
    challenge: 'Simplify complex Indian payroll compliance (PF, ESI, TDS) while providing an intuitive interface for non-technical HR managers.',
    solution: 'Automated compliance engine with real-time government portal integration, one-click payroll processing, and AI-driven attendance analysis.',
    results: ['10,000+ companies onboarded', '99% payroll accuracy rate', 'Entrepreneur X Award 2024', '60% reduction in HR processing time'],
    tech: ['React', 'Node.js', 'PostgreSQL', 'Government API Integration', 'PDF Generation', 'Multi-tenant Architecture', 'AWS'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'buyeazzy',
    title: 'BuyEazzy',
    sub: '100% M-O-M Growth',
    category: 'Social Commerce',
    desc: 'Built BuyEazzy — a social commerce platform enabling micro-entrepreneurs to sell via WhatsApp and social media with a 100% month-on-month growth trajectory.',
    challenge: 'Enable non-technical sellers to set up shops instantly and process orders through conversational commerce channels.',
    solution: 'No-code storefront builder, WhatsApp Bot integration for order management, and a lightweight mobile app for seller operations.',
    results: ['100% MoM growth for 6 consecutive months', '500K+ active sellers', '$10M+ GMV processed', 'WhatsApp Business API verified'],
    tech: ['React Native', 'Next.js', 'Node.js', 'WhatsApp Business API', 'Razorpay', 'MongoDB', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'byjus',
    title: "Byju's",
    sub: '$18 Billion Valuation',
    category: 'EdTech Unicorn',
    desc: 'Contributed engineering capacity to Byju\'s — the $18 billion EdTech unicorn — across their adaptive learning platform and mobile applications.',
    challenge: 'Scale learning personalisation algorithms to serve 150M+ learners while maintaining app performance on low-end Android devices.',
    solution: 'Lightweight content delivery with adaptive bitrate video, offline sync, and device-specific performance optimisation across the Android SDK.',
    results: ['150M+ learners served', '$18B peak valuation platform', 'Offline-first learning experience', 'Support for 2G network conditions'],
    tech: ['Android (Kotlin)', 'iOS (Swift)', 'React', 'Node.js', 'Adaptive ML Engine', 'CDN Optimisation', 'Offline Sync'],
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'truefan',
    title: 'TrueFan',
    sub: 'AI-driven fan engagement App',
    category: 'Fan Experience Platform',
    desc: 'Engineered TrueFan — an AI-powered fan engagement platform connecting sports and entertainment celebrities with their fan communities.',
    challenge: 'Build a marketplace for celebrity video shoutouts with AI content moderation and a real-time engagement layer for fan interactions.',
    solution: 'ML-powered content recommendation, real-time bid auction for premium content, and computer vision-based content safety moderation.',
    results: ['2M+ fans onboarded', '500+ celebrity partners', 'AI moderation with 99.5% accuracy', 'Featured in TechCrunch and YourStory'],
    tech: ['React Native', 'Node.js', 'Python ML', 'Computer Vision', 'WebRTC', 'Real-time Auctions', 'AWS'],
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423b?auto=format&fit=crop&w=1200&h=400&q=80',
  },
  {
    slug: 'nik-bakers',
    title: "Nik Baker's",
    sub: 'Run by a Professional Baker',
    category: 'D2C Bakery Platform',
    desc: "Built the digital ordering platform and CRM for Nik Baker's — a premium artisan bakery chain expanding across North India.",
    challenge: 'Manage pre-order demand for limited-edition bakes while giving the baker full control over production capacity and custom order flows.',
    solution: 'Custom pre-order engine with production slot management, WhatsApp order notifications, and a CRM for customer relationship and loyalty management.',
    results: ['300% increase in online orders', 'Zero missed orders post-launch', '4.9★ customer rating', 'Expanded to 8 cities in 12 months'],
    tech: ['Next.js', 'Node.js', 'Prisma', 'WhatsApp API', 'Razorpay', 'Sanity CMS', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&h=400&q=80',
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
