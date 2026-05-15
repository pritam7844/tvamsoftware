import Link from 'next/link';
import {
  Smartphone, Monitor, Bot, Code, Layers, Cloud,
  Palette, Shield, Wifi, ArrowRight, Sparkles
} from 'lucide-react';

const SERVICES = [
  {
    icon: Smartphone,
    title: 'iOS Development',
    desc: 'Swift, SwiftUI. Apps that feel at home on every Apple device.',
    href: '/services/ios',
    color: '#007AFF',
  },
  {
    icon: Smartphone,
    title: 'Android Development',
    desc: 'Kotlin + Jetpack Compose. Buttery-smooth on every Android.',
    href: '/services/android',
    color: '#34A853',
  },
  {
    icon: Code,
    title: 'React / Next.js',
    desc: 'Blazing-fast web platforms built with React 19 and Next.js 16.',
    href: '/services/react',
    color: '#61DAFB',
  },
  {
    icon: Layers,
    title: 'Flutter',
    desc: 'One codebase. iOS, Android, Web, Desktop. All beautiful.',
    href: '/services/flutter',
    color: '#54C5F8',
  },
  {
    icon: Bot,
    title: 'AI & Machine Learning',
    desc: 'GPT integrations, custom models, intelligent automation.',
    href: '/services/ai',
    color: '#8B5CF6',
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    desc: 'AWS, GCP, Azure. Infrastructure that scales without panic.',
    href: '/services/cloud',
    color: '#F59E0B',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    desc: 'Research-first design. Every pixel has a purpose.',
    href: '/services/design',
    color: '#EC4899',
  },
  {
    icon: Shield,
    title: 'Blockchain',
    desc: 'Smart contracts, DeFi, NFT marketplaces, Web3 apps.',
    href: '/services/blockchain',
    color: '#F97316',
  },
  {
    icon: Wifi,
    title: 'IoT & Wearables',
    desc: 'Connected devices that collect, process, and act on data.',
    href: '/services/iot',
    color: '#10B981',
  },
  {
    icon: Monitor,
    title: 'Progressive Web Apps',
    desc: 'App-like experiences. No app store needed.',
    href: '/services/pwa',
    color: '#F59E0B',
  },
  {
    icon: Sparkles,
    title: 'AR / VR',
    desc: 'Immersive experiences that blur the line between real and digital.',
    href: '/services/arvr',
    color: '#F59E0B',
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header — left-aligned, intentional */}
        <div className="grid lg:grid-cols-3 gap-10 items-end mb-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">What we build</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
              Every service<br />your product needs.
            </h2>
          </div>
          <div className="text-slate-500 text-sm leading-relaxed lg:text-right">
            <p>From a single-screen MVP to a full-stack enterprise platform — we cover the complete technology spectrum.</p>
            <Link href="/services" className="inline-flex items-center gap-1.5 mt-4 text-[#F59E0B] font-semibold text-sm hover:gap-3 transition-all">
              All services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Services — asymmetric grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
          {SERVICES.map((s, i) => (
            <Link key={s.title} href={s.href}
              className={`group relative bg-white p-6 hover:bg-slate-50 transition-all ${i === 0 ? 'sm:col-span-2 xl:col-span-1' : ''}`}>
              {/* Accent line top */}
              <div className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ background: `linear-gradient(to right, ${s.color}, transparent)` }} />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${s.color}15` }}>
                <s.icon size={20} style={{ color: s.color }} strokeWidth={1.5} />
              </div>

              <h3 className="font-bold text-[#0F172A] text-[15px] mb-2 group-hover:text-[#F59E0B] transition-colors">
                {s.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">{s.desc}</p>

              <div className="mt-4 flex items-center gap-1 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: s.color }}>
                Explore <ArrowRight size={11} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
