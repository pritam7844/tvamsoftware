import Link from 'next/link';
import {
  HeartPulse, ShoppingBag, GraduationCap, CreditCard, UtensilsCrossed,
  Plane, Trophy, Film, Truck, Users, Zap, Navigation, ArrowRight
} from 'lucide-react';

const INDUSTRIES = [
  { icon: HeartPulse,    label: 'Healthcare',        href: '/industries/healthcare',  apps: 240, color: '#EF4444' },
  { icon: ShoppingBag,   label: 'Ecommerce',         href: '/industries/ecommerce',   apps: 310, color: '#F97316' },
  { icon: GraduationCap, label: 'E-learning',        href: '/industries/elearning',   apps: 185, color: '#3B82F6' },
  { icon: CreditCard,    label: 'Fintech',           href: '/industries/fintech',     apps: 195, color: '#10B981' },
  { icon: UtensilsCrossed, label: 'Food & Delivery', href: '/industries/food',        apps: 220, color: '#F59E0B' },
  { icon: Plane,         label: 'Travel & Tourism',  href: '/industries/travel',      apps: 140, color: '#6366F1' },
  { icon: Trophy,        label: 'Sports',            href: '/industries/sports',      apps: 130, color: '#84CC16' },
  { icon: Film,          label: 'Entertainment',     href: '/industries/entertainment', apps: 175, color: '#8B5CF6' },
  { icon: Truck,         label: 'On-Demand',         href: '/industries/on-demand',   apps: 290, color: '#00C4B4' },
  { icon: Users,         label: 'Social',            href: '/industries/social',      apps: 165, color: '#EC4899' },
  { icon: Zap,           label: 'E-scooter / EV',   href: '/industries/escooter',    apps: 75,  color: '#FBBF24' },
  { icon: Navigation,    label: 'Drone & AgTech',    href: '/industries/drone',       apps: 60,  color: '#64748B' },
];

export default function IndustriesSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366F1] mb-3">Domain expertise</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
              We know your<br />industry deeply.
            </h2>
          </div>
          <p className="text-slate-500 text-sm max-w-xs leading-relaxed">
            12 years in, 25+ domains covered. We bring product intuition that only comes from building hundreds of apps in each space.
          </p>
        </div>

        {/* Industry list — dense list with hover bar effect */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.label} href={ind.href}
              className="group flex items-center gap-4 px-5 py-4 rounded-2xl border border-transparent hover:border-slate-200 hover:bg-slate-50 transition-all">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105"
                style={{ backgroundColor: `${ind.color}18` }}>
                <ind.icon size={18} style={{ color: ind.color }} strokeWidth={1.5} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-[#0F172A] group-hover:text-[#00C4B4] transition-colors">
                  {ind.label}
                </p>
                <p className="text-xs text-slate-400">{ind.apps}+ apps built</p>
              </div>
              <ArrowRight size={14} className="text-slate-300 group-hover:text-[#00C4B4] group-hover:translate-x-1 transition-all shrink-0" />
            </Link>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            Don&apos;t see yours?{' '}
            <Link href="/contact" className="text-[#00C4B4] font-semibold hover:underline">
              We&apos;ve probably built it.
            </Link>
          </p>
          <Link href="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-[#0F172A] text-[#0F172A] text-sm font-bold rounded-full hover:bg-[#0F172A] hover:text-white transition-all">
            Explore all industries <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
