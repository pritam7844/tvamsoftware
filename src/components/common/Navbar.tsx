'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '@/utils/cn';
import { NAV_LINKS, SERVICES, INDUSTRIES, CASE_STUDIES_NAV } from '@/constants/nav';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [scrolled, setScrolled]     = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const open  = (key: string) => { if (timerRef.current) clearTimeout(timerRef.current); setActiveMega(key); };
  const close = ()            => { timerRef.current = setTimeout(() => setActiveMega(null), 120); };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-[200] transition-all duration-300 bg-white',
      scrolled ? 'shadow-sm border-b border-slate-100' : 'border-b border-slate-100',
    )}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-xl font-black tracking-tight text-[#0F172A]">
              Tvam <span className="text-[#F59E0B]">Software</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.hasMega && open(link.hasMega)}
                onMouseLeave={close}>
                <Link href={link.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-[#0F172A] hover:bg-slate-100 rounded-lg transition-colors">
                  {link.label}
                  {link.hasMega && (
                    <ChevronDown size={13} className={cn('transition-transform duration-200 text-slate-400', activeMega === link.hasMega && 'rotate-180')} />
                  )}
                </Link>

                {link.hasMega === 'services' && (
                  <MegaPanel isOpen={activeMega === 'services'} onMouseEnter={() => open('services')} onMouseLeave={close}>
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 px-2">Services</p>
                      <div className="grid grid-cols-3 gap-0.5">
                        {SERVICES.map((s) => (
                          <Link key={s.label} href={s.href}
                            className="px-3 py-2 text-sm text-slate-700 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 rounded-lg transition-colors font-medium">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </MegaPanel>
                )}

                {link.hasMega === 'industries' && (
                  <MegaPanel isOpen={activeMega === 'industries'} onMouseEnter={() => open('industries')} onMouseLeave={close}>
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 px-2">Industries</p>
                      <div className="grid grid-cols-2 gap-0.5">
                        {INDUSTRIES.map((ind) => (
                          <Link key={ind.label} href={ind.href}
                            className="px-3 py-2 text-sm text-slate-700 hover:text-[#F59E0B] hover:bg-[#F59E0B]/5 rounded-lg transition-colors font-medium">
                            {ind.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </MegaPanel>
                )}

                {link.hasMega === 'casestudies' && (
                  <MegaPanel isOpen={activeMega === 'casestudies'} onMouseEnter={() => open('casestudies')} onMouseLeave={close} align="right">
                    <div className="p-4">
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 mb-3 px-2">Case Studies</p>
                      <div className="space-y-0.5">
                        {CASE_STUDIES_NAV.map((cs) => (
                          <Link key={cs.label} href={cs.href}
                            className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#F59E0B]/15 to-[#F59E0B]/15 flex items-center justify-center text-[#F59E0B] text-xs font-extrabold shrink-0">
                              {cs.label[0]}
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-[#0F172A] leading-none">{cs.label}</p>
                              <p className="text-xs text-slate-400 mt-0.5">{cs.sub}</p>
                            </div>
                            <ArrowRight size={13} className="ml-auto text-slate-300 group-hover:text-[#F59E0B] group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </MegaPanel>
                )}
              </div>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden lg:flex items-center gap-2">
            <a href="https://wa.me/918898489138" aria-label="WhatsApp"
              className="p-2 rounded-lg text-slate-400 hover:text-[#25D366] hover:bg-slate-100 transition-colors">
              <MessageCircle size={18} />
            </a>
            <a href="tel:+918898489138" aria-label="Call"
              className="p-2 rounded-lg text-slate-400 hover:text-[#F59E0B] hover:bg-slate-100 transition-colors">
              <Phone size={18} />
            </a>
            <div className="w-px h-5 bg-slate-200 mx-1" />
            <Link href="/contact"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#F59E0B] text-white text-sm font-semibold rounded-full hover:bg-[#D97706] transition-colors shadow-sm">
              Get In Touch
            </Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-sm font-semibold text-slate-700 hover:text-[#F59E0B] hover:bg-slate-50 rounded-xl transition-colors">
                {link.label}
              </Link>
            ))}
            <div className="pt-5 space-y-3 border-t border-slate-100 mt-4">
              <Link href="/contact" onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#F59E0B] text-white font-semibold rounded-full text-sm">
                Get In Touch
              </Link>
              <a href="tel:+918898489138"
                className="flex items-center justify-center gap-2 text-sm text-slate-500">
                <Phone size={14} /> +91 88984 89138
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MegaPanel({ children, isOpen, onMouseEnter, onMouseLeave, align = 'center' }: {
  children: React.ReactNode;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  align?: 'center' | 'right';
}) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={cn(
        'absolute top-full mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 min-w-[400px] transition-all duration-200',
        align === 'center' ? 'left-1/2 -translate-x-1/2' : 'right-0',
        isOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-2 pointer-events-none',
      )}
    >
      {children}
    </div>
  );
}
