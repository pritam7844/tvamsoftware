'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Star, Zap, Shield, Globe, TrendingUp } from 'lucide-react';
import TypingEffect from '@/components/ui/TypingEffect';

const TECH_TAGS = [
  'Enterprise Software', 'AI & ML Integration', 'Cloud Architectures', 'iOS & Android Products',
  'Next.js Platforms', 'Node.js APIs', 'AWS & GCP DevOps', 'Digital Transformation',
];

const TRUST_LOGOS = [
  'Financial Services', 'Healthcare & Life Sciences', 'Retail & E-commerce',
  'Logistics & Supply Chain', 'Public Sector & Gov',
];

const STATS = [
  { value: '180+', label: 'Enterprise Platforms', note: 'Secure & scale-tested', icon: Globe },
  { value: '98%', label: 'Client Retention', note: 'Long-term partnership', icon: TrendingUp },
  { value: 'ISO 27001', label: 'Certified Security', note: 'Top-tier data protection', icon: Shield },
  { value: 'Since 2017', label: 'BKC, Mumbai HQ', note: '8+ years of excellence', icon: Zap },
];

function GlowBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden="true">
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #006837 0%, transparent 70%)' }}
      />
      <div
        className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full opacity-[0.10]"
        style={{ background: 'radial-gradient(circle, #EAA812 0%, transparent 70%)' }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.05]"
        style={{ background: 'radial-gradient(ellipse, #006837 0%, transparent 65%)' }}
      />
    </div>
  );
}

function TechBg() {
  return (
    <svg
      viewBox="0 0 1200 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.4" fill="#006837" />
        </pattern>
      </defs>
      <rect width="1200" height="640" fill="url(#dots)" opacity="0.07" />

      <circle cx="1050" cy="80" r="260" stroke="#006837" strokeWidth="1" opacity="0.08" />
      <circle cx="1050" cy="80" r="190" stroke="#006837" strokeWidth="1" opacity="0.07" />
      <circle cx="1050" cy="80" r="120" stroke="#EAA812" strokeWidth="1" opacity="0.07" />

      <g style={{ transformOrigin: '1050px 80px', animation: 'orbit-reverse 35s linear infinite' }}>
        <g transform="translate(1038,-122)">
          <svg viewBox="0 0 24 24" width="22" height="22">
            <g stroke="#006837" strokeWidth="1.5" fill="none" opacity="0.5">
              <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(30 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(90 12 12)" />
              <ellipse cx="12" cy="12" rx="4" ry="9" transform="rotate(150 12 12)" />
              <circle cx="12" cy="12" r="1.5" fill="#006837" />
            </g>
          </svg>
        </g>
      </g>

      <g style={{ transformOrigin: '1050px 80px', animation: 'orbit 45s linear infinite' }}>
        <g transform="translate(1038,-192)">
          <svg viewBox="0 0 110 110" width="22" height="22">
            <path d="M55 2C30.2 2 31.8 12.8 31.8 12.8h11.2c0 0 1.2-5.6 12-5.6 10.8 0 11.2 4.8 11.2 4.8v7.2H31.8c-10.4 0-19.2 8-19.2 18.4v13.6c0 10.4 7.2 18.4 17.6 18.4H39v-8.8c0-10.8 8.8-19.2 19.2-19.2h28.8V42.4c0-10.4-8.8-18.4-19.2-18.4H55V2z" fill="#006837" opacity="0.45" />
            <path d="M55 108c24.8 0 23.2-10.8 23.2-10.8H67c0 0-1.2 5.6-12 5.6-10.8 0-11.2-4.8-11.2-4.8v-7.2H78.2c10.4 0 19.2-8 19.2-18.4V54c0-10.4-7.2-18.4-17.6-18.4H71v8.8c0 10.8-8.8 19.2-19.2 19.2H23v20.4c0 10.4 8.8 18.4 19.2 18.4H55v20.4z" fill="#EAA812" opacity="0.4" />
          </svg>
        </g>
      </g>

      <circle cx="150" cy="560" r="220" stroke="#006837" strokeWidth="1" opacity="0.07" />
      <circle cx="150" cy="560" r="150" stroke="#EAA812" strokeWidth="1" opacity="0.06" />

      <polygon points="80,60 96,76 80,92 64,76" stroke="#EAA812" strokeWidth="1.5" opacity="0.14" />
      <polygon points="80,68 88,76 80,84 72,76" stroke="#EAA812" strokeWidth="1" opacity="0.10" />
      <polygon points="1120,548 1136,564 1120,580 1104,564" stroke="#EAA812" strokeWidth="1.5" opacity="0.14" />

      <line x1="0" y1="0" x2="300" y2="200" stroke="#006837" strokeWidth="0.8" opacity="0.07" />
      <line x1="0" y1="60" x2="260" y2="220" stroke="#006837" strokeWidth="0.6" opacity="0.05" />
      <line x1="1200" y1="640" x2="900" y2="440" stroke="#006837" strokeWidth="0.8" opacity="0.06" />
    </svg>
  );
}

export default function HeroSection() {
  useEffect(() => {
    const handleScroll = () => {
      document.documentElement.style.setProperty('--scroll-y', String(window.scrollY));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      className="relative pt-16 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #f0fdf4 0%, #ffffff 45%, #fefce8 100%)' }}
    >
      {/* Full-width background layer — outside any max-w container */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0">
        <GlowBlobs />
        <TechBg />
      </div>



      {/* Hero body */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Content */}
        <div className="relative z-10 pt-20 pb-16 lg:pt-28 lg:pb-24">

          <div className="max-w-3xl mx-auto text-center">



            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.08] tracking-tight">
              Enterprise
              <span style={{ textShadow: '0 0 60px rgba(0,104,55,0.18), 0 2px 12px rgba(0,104,55,0.10)' }}>
                <TypingEffect
                  block
                  className="text-[#006837]"
                  words={[
                    'Digital Engineering.',
                    'Software Systems.',
                    'AI & Automation.',
                    'Cloud Implementations.',
                    'Architectural Design.',
                    'Data Solutions.',
                    'Security Operations.',
                    'Digital Platforms.',
                  ]}
                />
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-7 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
              We design, build, and operate robust digital platforms and intelligent software systems
              for progressive organizations seeking{' '}
              <span className="text-[#006837] font-semibold">scalable, secure, and performant</span> operations.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-bold !text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#006837]/30"
                style={{ background: 'linear-gradient(135deg, #006837 0%, #009450 100%)' }}
              >
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #004D28 0%, #006837 100%)' }}
                />
                <span className="relative flex items-center gap-2.5">
                  Initiate Consultation
                  <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>

              <Link
                href="/portfolio"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-white/80 backdrop-blur-sm !text-[#0F172A] font-semibold rounded-full text-sm border border-slate-200 hover:border-[#006837]/30 hover:bg-white hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Explore Solutions
                <ArrowRight size={15} className="opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-300" />
              </Link>
            </div>

            {/* Tech tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="px-3.5 py-1.5 text-xs font-medium text-slate-500 bg-white/90 backdrop-blur-sm border border-slate-200/80 rounded-full shadow-sm hover:border-[#006837]/40 hover:text-[#006837] hover:bg-[#006837]/5 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {STATS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.label}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-7 text-center border border-slate-200/80 shadow-sm hover:shadow-lg hover:shadow-[#006837]/10 hover:border-[#006837]/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#006837]/0 via-[#006837]/60 to-[#006837]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-[#006837]/8 mb-3 group-hover:bg-[#006837]/15 transition-colors duration-300">
                    <Icon size={18} className="text-[#006837]" strokeWidth={1.75} />
                  </div>
                  <div className="text-2xl font-black text-[#006837]">{s.value}</div>
                  <div className="text-sm font-semibold text-[#0F172A] mt-1">{s.label}</div>
                  <div className="text-xs text-slate-400 mt-0.5">{s.note}</div>
                </div>
              );
            })}
          </div>

          {/* Trusted by */}
          <div className="mt-14 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-transparent to-slate-200" />
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                Serving Sectors & Industries
              </p>
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-l from-transparent to-slate-200" />
            </div>
            <div className="flex flex-wrap justify-center gap-2.5">
              {TRUST_LOGOS.map((name) => (
                <span
                  key={name}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-500 bg-white/80 backdrop-blur-sm border border-slate-200/80 rounded-xl shadow-sm hover:border-[#006837]/30 hover:text-[#006837] hover:bg-[#006837]/5 hover:shadow-md transition-all duration-200 cursor-default"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#006837]/40 to-transparent" />
    </section>
  );
}
