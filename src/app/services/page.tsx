import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Services | Tvam Software — Mobile App & AI Development',
  description: 'Explore Tvam Software\'s full range of development services including iOS, Android, AI, Cloud, Blockchain, and more.',
};

const SERVICE_CATEGORIES = [
  {
    category: 'Mobile Development',
    icon: '📱',
    services: [
      { title: 'iOS Development', desc: 'Native iPhone & iPad apps with Swift and SwiftUI. App Store optimised, performance-first.', href: '/services/ios' },
      { title: 'Android Development', desc: 'Kotlin-powered Android apps with Jetpack Compose and Material You design.', href: '/services/android' },
      { title: 'React Native', desc: 'Cross-platform mobile apps with near-native performance using React Native.', href: '/services/react-native' },
      { title: 'Flutter Development', desc: 'Beautiful, natively compiled apps for mobile, web, and desktop from one codebase.', href: '/services/flutter' },
      { title: 'Ionic Development', desc: 'Hybrid apps built with Ionic framework for rapid cross-platform deployment.', href: '/services/ionic' },
      { title: 'iPad App Development', desc: 'Optimised tablet experiences with multi-tasking and Apple Pencil support.', href: '/services/ipad' },
    ],
  },
  {
    category: 'Web Development',
    icon: '🌐',
    services: [
      { title: 'React Development', desc: 'High-performance web apps and dashboards built with React 19 and Next.js.', href: '/services/react' },
      { title: 'Node.js / PHP', desc: 'Scalable backend APIs, microservices and server-side logic.', href: '/services/backend' },
      { title: 'Progressive Web Apps', desc: 'Installable, offline-capable web apps that feel native.', href: '/services/pwa' },
      { title: 'Testing & QA', desc: 'Comprehensive manual and automated testing across all platforms.', href: '/services/qa' },
    ],
  },
  {
    category: 'Emerging Tech',
    icon: '🚀',
    services: [
      { title: 'Artificial Intelligence', desc: 'Custom AI models, NLP, computer vision, and GPT-powered applications.', href: '/services/ai' },
      { title: 'Generative AI', desc: 'Integrate ChatGPT, DALL-E, Stable Diffusion, and LLMs into your product.', href: '/services/generative-ai' },
      { title: 'Blockchain Development', desc: 'Smart contracts, DeFi platforms, NFT marketplaces and Web3 apps.', href: '/services/blockchain' },
      { title: 'Internet of Things', desc: 'Connected device ecosystems, sensor integration, and IoT dashboards.', href: '/services/iot' },
      { title: 'AR / VR Development', desc: 'Immersive augmented and virtual reality experiences for any industry.', href: '/services/arvr' },
      { title: 'Chatbot Development', desc: 'Intelligent conversational AI bots for customer support and engagement.', href: '/services/chatbots' },
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    icon: '☁️',
    services: [
      { title: 'Cloud Computing', desc: 'AWS, Azure, GCP architecture, DevOps pipelines and cloud migration.', href: '/services/cloud' },
      { title: 'Wearables', desc: 'Apple Watch, Wear OS, and fitness wearable app development.', href: '/services/wearables' },
      { title: 'Cross Platform Apps', desc: 'One codebase, all platforms — maximise reach and minimise cost.', href: '/services/cross-platform' },
      { title: 'POS Software', desc: 'Point-of-sale systems for retail, restaurants and service businesses.', href: '/services/pos' },
    ],
  },
  {
    category: 'Design',
    icon: '🎨',
    services: [
      { title: 'UI/UX Design', desc: 'User research, information architecture, wireframes and pixel-perfect high-fidelity designs.', href: '/services/design' },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Full-Stack Digital{' '}
            <span className="gradient-text">Development Services</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            From mobile apps to AI solutions — we cover the entire technology spectrum so you can focus on what matters most: growing your business.
          </p>
        </div>
      </section>

      {/* Service categories */}
      {SERVICE_CATEGORIES.map((cat) => (
        <Section key={cat.category} bg={SERVICE_CATEGORIES.indexOf(cat) % 2 === 0 ? 'white' : 'alt'}>
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{cat.icon}</span>
              <h2 className="text-2xl font-extrabold text-[#0F172A]">{cat.category}</h2>
            </div>
            <div className="h-1 w-16 bg-gradient-to-r from-[#00C4B4] to-[#6366F1] rounded-full" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cat.services.map((s) => (
              <Link key={s.title} href={s.href}
                className="group bg-white rounded-2xl p-6 border border-slate-200 card-hover hover:border-[#00C4B4]/40">
                <h3 className="text-base font-bold text-[#0F172A] mb-2 group-hover:text-[#00C4B4] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#00C4B4] group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      ))}

      <CtaSection />
    </>
  );
}
