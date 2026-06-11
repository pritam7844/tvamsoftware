import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';
import { SERVICES, INDUSTRIES, CASE_STUDIES_NAV } from '@/constants/nav';

export const metadata: Metadata = {
  title: 'Sitemap | Tvam Key Software',
  description: 'A complete map of every page on the Tvam Key Software website — services, industries, case studies, and more.',
};

type LinkItem = { label: string; href: string };

const MAIN_PAGES: LinkItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Industries', href: '/industries' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Career', href: '/career' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact Us', href: '/contact' },
];

const LEGAL_PAGES: LinkItem[] = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Terms & Conditions', href: '/terms' },
  { label: 'Sitemap', href: '/sitemap' },
];

const GROUPS: { heading: string; links: LinkItem[] }[] = [
  { heading: 'Main Pages', links: MAIN_PAGES },
  { heading: 'Services', links: SERVICES },
  { heading: 'Industries', links: INDUSTRIES },
  { heading: 'Case Studies', links: CASE_STUDIES_NAV.map((c) => ({ label: c.label, href: c.href })) },
  { heading: 'Legal', links: LEGAL_PAGES },
];

export default function SitemapPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Navigation</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Site <span className="gradient-text">Map</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Every page on tvamkeysoftware.com, organised in one place.
          </p>
        </div>
      </section>

      <Section bg="white">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {GROUPS.map((group) => (
            <div key={group.heading}>
              <h2 className="text-sm font-semibold uppercase tracking-widest text-[#006837] mb-4 pb-3 border-b border-slate-200">
                {group.heading}
              </h2>
              <ul className="space-y-2.5">
                {group.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-600 hover:text-[#006837] transition-colors"
                    >
                      {l.label}
                      <ArrowUpRight size={13} className="text-slate-300 group-hover:text-[#006837] transition-colors" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
