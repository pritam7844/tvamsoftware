import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Industries | Tvam Key Software — Domain Expertise & Sectors',
  description: 'Tvam Key Software engineers specialised digital solutions and enterprise systems for key industries including healthcare, fintech, retail, and logistics.',
};

const INDUSTRIES = [
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Telemedicine platforms, EMR systems, patient management apps, doctor-on-demand, mental health, and hospital management solutions.',
    apps: ['Doctor Appointment', 'Telemedicine', 'EMR Software', 'Mental Health App', 'Medical Delivery'],
    href: '/industries/healthcare',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🛒',
    title: 'Ecommerce',
    desc: 'B2C stores, B2B portals, multi-vendor marketplaces, headless commerce, and mobile shopping experiences.',
    apps: ['Marketplace App', 'B2B Portal', 'Fashion Store', 'Grocery Delivery', 'Wholesale Platform'],
    href: '/industries/ecommerce',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '📚',
    title: 'E-learning',
    desc: 'LMS platforms, virtual classrooms, EdTech mobile apps, video learning, and gamified education systems.',
    apps: ['LMS Platform', 'Virtual Classroom', 'Tutor Booking', 'Yoga App', 'Education App'],
    href: '/industries/elearning',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '💳',
    title: 'Fintech',
    desc: 'Digital banking, payment gateways, investment platforms, trading apps, eWallets, and insurance tech.',
    apps: ['eWallet App', 'Trading Platform', 'Insurance App', 'Payment Gateway', 'Banking App'],
    href: '/industries/fintech',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🍕',
    title: 'Food Industry',
    desc: 'Food delivery platforms, restaurant management, cloud kitchen, grocery delivery, and meal planning apps.',
    apps: ['Food Delivery', 'Restaurant App', 'Cloud Kitchen', 'Grocery App', 'Milk Delivery'],
    href: '/industries/food',
    image: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '✈️',
    title: 'Travel & Tourism',
    desc: 'Booking engines, hotel management, OTA platforms, travel planning, and fleet management solutions.',
    apps: ['Hotel Booking', 'Flight Booking', 'Travel Planner', 'Car Rental', 'Tour Guide App'],
    href: '/industries/travel',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '⚽',
    title: 'Sports',
    desc: 'Fantasy sports platforms, live score apps, fan engagement, fitness tracking, and sports betting solutions.',
    apps: ['Fantasy Sports', 'Live Scores', 'Fitness Tracker', 'Sports Betting', 'Gym Management'],
    href: '/industries/sports',
    image: 'https://images.unsplash.com/photo-1540747913346-19212a4b423b?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🎬',
    title: 'Entertainment',
    desc: 'OTT streaming platforms, music apps, gaming, social content creation, and live streaming solutions.',
    apps: ['Video Streaming', 'Music App', 'Podcast App', 'Live Streaming', 'Gaming Platform'],
    href: '/industries/entertainment',
    image: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🛵',
    title: 'On-Demand Services',
    desc: 'Uber-like platforms, home services, courier delivery, handyman, and multi-service on-demand solutions.',
    apps: ['Home Services', 'Courier Delivery', 'Car Wash', 'Laundry App', 'Handyman App'],
    href: '/industries/on-demand',
    image: 'https://images.unsplash.com/photo-1601972599720-36938d4ecd31?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🤝',
    title: 'Social Networking',
    desc: 'Social platforms, dating apps, community forums, messaging apps, and influencer platforms.',
    apps: ['Dating App', 'Community App', 'Messaging App', 'Influencer Platform', 'Matrimonial App'],
    href: '/industries/social',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🛴',
    title: 'E-Scooter',
    desc: 'Electric vehicle fleet management, ride-sharing, IoT integration, and EV charging station apps.',
    apps: ['EV Fleet App', 'Scooter Sharing', 'EV Charging', 'Bike Rental', 'Fleet Management'],
    href: '/industries/escooter',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&h=200&q=80',
  },
  {
    icon: '🚁',
    title: 'Drone Technology',
    desc: 'Drone delivery systems, agricultural drone apps, UAV control dashboards, and surveillance platforms.',
    apps: ['Drone Delivery', 'AgTech Drone', 'UAV Control', 'Aerial Survey', 'Security Drone'],
    href: '/industries/drone',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=600&h=200&q=80',
  },
];

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Industries We Serve</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Domain Expertise Across{' '}
            <span className="gradient-text">25+ Industries</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just build apps — we understand your industry. Deep domain expertise means faster delivery, fewer revisions, and better outcomes.
          </p>
        </div>
      </section>

      {/* Industries */}
      <Section bg="alt">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.title} href={ind.href}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover">
              <div className="relative h-24 overflow-hidden">
                <Image src={ind.image} alt={ind.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/45 flex items-center px-6 gap-4">
                  <span className="text-4xl">{ind.icon}</span>
                  <h3 className="text-xl font-extrabold text-white">{ind.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {ind.apps.map((app) => (
                    <span key={app} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">{app}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#006837] group-hover:gap-2 transition-all">
                  Explore Solutions <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
