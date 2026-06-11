import Link from 'next/link';
import { MapPin, Phone, Mail } from 'lucide-react';
import Container from '@/components/layout/Container';
import TypingEffect from '@/components/ui/TypingEffect';
import Logo from '@/components/common/Logo';

function SocialIcon({ path, label }: { path: string; label: string }) {
  return (
    <svg role="img" aria-label={label} viewBox="0 0 24 24" width={16} height={16} fill="currentColor">
      <path d={path} />
    </svg>
  );
}

const SOCIAL_PATHS = {
  LinkedIn: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  Facebook: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  Instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  Twitter: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z',
  YouTube: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  Pinterest: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
};

const OFFICES = [
  { city: 'Mumbai, India (HQ)', address: 'Office No. 49, Annex Mall, Near Western Express Highway, Borivali East, Mumbai – 400066, Maharashtra' },
  { city: 'Registered Office', address: '305, Building No. 2, Wing L, Prathamesh Dreams, Vasai, Palghar, Vasai-Virar City (M Corp) – 401303' },
  { city: 'Pune Office', address: "Office-743, Gera's Imperium Rise, Wipro Circle, Hinjewadi Phase 2, Pune – 411057" },
];

const FOOTER_LINKS = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'Career', href: '/career' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Terms & Conditions', href: '/terms' },
    { label: 'Sitemap', href: '/sitemap' },
  ],
  Services: [
    { label: 'iOS Development', href: '/services/ios' },
    { label: 'Android Development', href: '/services/android' },
    { label: 'React Development', href: '/services/react' },
    { label: 'Flutter Development', href: '/services/flutter' },
    { label: 'AI Development', href: '/services/ai' },
    { label: 'UI/UX Design', href: '/services/design' },
    { label: 'Cloud Computing', href: '/services/cloud' },
  ],
  Industries: [
    { label: 'Healthcare', href: '/industries/healthcare' },
    { label: 'Ecommerce', href: '/industries/ecommerce' },
    { label: 'Fintech', href: '/industries/fintech' },
    { label: 'E-learning', href: '/industries/elearning' },
    { label: 'Food Industry', href: '/industries/food' },
    { label: 'Travel & Tourism', href: '/industries/travel' },
    { label: 'On-Demand', href: '/industries/on-demand' },
  ],
};

const SOCIALS = [
  { key: 'LinkedIn' as const, href: '#', label: 'LinkedIn' },
  { key: 'Facebook' as const, href: '#', label: 'Facebook' },
  { key: 'Instagram' as const, href: '#', label: 'Instagram' },
  { key: 'Twitter' as const, href: '#', label: 'Twitter (X)' },
  { key: 'YouTube' as const, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A0E1A] text-white">
      {/* Top CTA strip */}
      <div className="border-b border-white/10">
        <Container>
          <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Have a project in mind?</h2>
              <p className="text-slate-400 mt-1">Let&apos;s build something great together.</p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#EAA812] !text-slate-900 font-bold rounded-full hover:bg-[#D4AF37] transition-colors"
            >
              Start a Project →
            </Link>
          </div>
        </Container>
      </div>

      {/* Main footer */}
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand col */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Logo light={true} />
            </Link>
            <p className="mt-4 text-slate-400 text-sm leading-relaxed max-w-sm">
              A premier digital engineering{' '}
              <TypingEffect className="text-[#EAA812]" words={['consultancy.', 'partner.', 'architect.', 'innovator.', 'enabler.']} />
              {' '}crafting state-of-the-art enterprise platforms and intelligent software solutions.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-400">
              <a href="tel:+918898489138" className="flex items-center gap-2 hover:text-[#EAA812] transition-colors">
                <Phone size={14} /> +91 88984 89138
              </a>
              <a href="tel:+917738758226" className="flex items-center gap-2 hover:text-[#EAA812] transition-colors">
                <Phone size={14} /> +91 77387 58226
              </a>
              <a href="mailto:info@tvamkeysoftware.com" className="flex items-center gap-2 hover:text-[#EAA812] transition-colors">
                <Mail size={14} /> info@tvamkeysoftware.com
              </a>
            </div>
            <div className="mt-6 flex gap-4">
              {SOCIALS.map(({ key, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-slate-400 hover:text-white hover:border-[#EAA812] hover:bg-[#EAA812]/10 transition-all">
                  <SocialIcon path={SOCIAL_PATHS[key]} label={label} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-300 mb-4">{heading}</h3>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm text-slate-400 hover:text-[#EAA812] transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Offices */}
        <div className="border-t border-white/10 py-10">
          <h3 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Our Offices</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {OFFICES.map((o) => (
              <div key={o.city} className="max-w-md">
                <p className="text-sm font-semibold text-slate-300 flex items-center gap-2.5 mb-1.5">
                  <MapPin size={14} className="text-[#EAA812]" /> {o.city}
                </p>
                <p className="text-xs text-slate-400 leading-relaxed">{o.address}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Tvam Key Software. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
