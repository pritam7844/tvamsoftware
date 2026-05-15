import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Industries | Tvam Software — Domain Expertise Across 25+ Sectors',
  description: 'Tvam Software builds specialised digital solutions for healthcare, fintech, ecommerce, e-learning, food, travel, and 20+ more industries.',
};

const INDUSTRIES = [
  {
    icon: '🏥',
    title: 'Healthcare',
    desc: 'Telemedicine platforms, EMR systems, patient management apps, doctor-on-demand, mental health, and hospital management solutions.',
    apps: ['Doctor Appointment', 'Telemedicine', 'EMR Software', 'Mental Health App', 'Medical Delivery'],
    href: '/industries/healthcare',
    color: 'from-red-500 to-pink-500',
  },
  {
    icon: '🛒',
    title: 'Ecommerce',
    desc: 'B2C stores, B2B portals, multi-vendor marketplaces, headless commerce, and mobile shopping experiences.',
    apps: ['Marketplace App', 'B2B Portal', 'Fashion Store', 'Grocery Delivery', 'Wholesale Platform'],
    href: '/industries/ecommerce',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: '📚',
    title: 'E-learning',
    desc: 'LMS platforms, virtual classrooms, EdTech mobile apps, video learning, and gamified education systems.',
    apps: ['LMS Platform', 'Virtual Classroom', 'Tutor Booking', 'Yoga App', 'Education App'],
    href: '/industries/elearning',
    color: 'from-blue-500 to-indigo-500',
  },
  {
    icon: '💳',
    title: 'Fintech',
    desc: 'Digital banking, payment gateways, investment platforms, trading apps, eWallets, and insurance tech.',
    apps: ['eWallet App', 'Trading Platform', 'Insurance App', 'Payment Gateway', 'Banking App'],
    href: '/industries/fintech',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🍕',
    title: 'Food Industry',
    desc: 'Food delivery platforms, restaurant management, cloud kitchen, grocery delivery, and meal planning apps.',
    apps: ['Food Delivery', 'Restaurant App', 'Cloud Kitchen', 'Grocery App', 'Milk Delivery'],
    href: '/industries/food',
    color: 'from-yellow-500 to-orange-500',
  },
  {
    icon: '✈️',
    title: 'Travel & Tourism',
    desc: 'Booking engines, hotel management, OTA platforms, travel planning, and fleet management solutions.',
    apps: ['Hotel Booking', 'Flight Booking', 'Travel Planner', 'Car Rental', 'Tour Guide App'],
    href: '/industries/travel',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: '⚽',
    title: 'Sports',
    desc: 'Fantasy sports platforms, live score apps, fan engagement, fitness tracking, and sports betting solutions.',
    apps: ['Fantasy Sports', 'Live Scores', 'Fitness Tracker', 'Sports Betting', 'Gym Management'],
    href: '/industries/sports',
    color: 'from-lime-500 to-green-600',
  },
  {
    icon: '🎬',
    title: 'Entertainment',
    desc: 'OTT streaming platforms, music apps, gaming, social content creation, and live streaming solutions.',
    apps: ['Video Streaming', 'Music App', 'Podcast App', 'Live Streaming', 'Gaming Platform'],
    href: '/industries/entertainment',
    color: 'from-purple-500 to-violet-600',
  },
  {
    icon: '🛵',
    title: 'On-Demand Services',
    desc: 'Uber-like platforms, home services, courier delivery, handyman, and multi-service on-demand solutions.',
    apps: ['Home Services', 'Courier Delivery', 'Car Wash', 'Laundry App', 'Handyman App'],
    href: '/industries/on-demand',
    color: 'from-teal-500 to-cyan-600',
  },
  {
    icon: '🤝',
    title: 'Social Networking',
    desc: 'Social platforms, dating apps, community forums, messaging apps, and influencer platforms.',
    apps: ['Dating App', 'Community App', 'Messaging App', 'Influencer Platform', 'Matrimonial App'],
    href: '/industries/social',
    color: 'from-pink-500 to-rose-600',
  },
  {
    icon: '🛴',
    title: 'E-Scooter',
    desc: 'Electric vehicle fleet management, ride-sharing, IoT integration, and EV charging station apps.',
    apps: ['EV Fleet App', 'Scooter Sharing', 'EV Charging', 'Bike Rental', 'Fleet Management'],
    href: '/industries/escooter',
    color: 'from-cyan-500 to-teal-600',
  },
  {
    icon: '🚁',
    title: 'Drone Technology',
    desc: 'Drone delivery systems, agricultural drone apps, UAV control dashboards, and surveillance platforms.',
    apps: ['Drone Delivery', 'AgTech Drone', 'UAV Control', 'Aerial Survey', 'Security Drone'],
    href: '/industries/drone',
    color: 'from-slate-500 to-gray-700',
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
              <div className={`h-24 bg-gradient-to-br ${ind.color} flex items-center px-6 gap-4`}>
                <span className="text-4xl">{ind.icon}</span>
                <h3 className="text-xl font-extrabold text-white">{ind.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {ind.apps.map((app) => (
                    <span key={app} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">{app}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#F59E0B] group-hover:gap-2 transition-all">
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
