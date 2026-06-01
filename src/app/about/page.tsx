import type { Metadata } from 'next';
import Link from 'next/link';
import { Target, Compass } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'About Us | Tvam Key Software — Enterprise Digital Systems & Solutions',
  description: 'Established in 2017 in Bandra Kurla Complex, Mumbai, Tvam Key Software is a premier digital engineering and enterprise systems partner.',
};

const MILESTONES = [
  { year: '2017', title: 'Founded in Mumbai', desc: 'Tvam Key Software was established in Bandra Kurla Complex (BKC) to deliver high-integrity software products.' },
  { year: '2019', title: 'Enterprise Capabilities', desc: 'Transitioned into complex backend systems, distributed cloud operations, and financial sector integrations.' },
  { year: '2021', title: 'ISO & Compliance Standards', desc: 'Achieved ISO 9001:2015 and ISO 27001 security and quality certifications for all engineering operations.' },
  { year: '2023', title: 'Architectural Scale', desc: 'Grew our engineering team to over 150+ core software architects, system analysts, and database specialists.' },
  { year: '2025', title: 'Resilient Operations', desc: 'Sustaining high-availability enterprise portals maintaining consistent 99.9% system uptime commitments.' },
];

const LEADERSHIP = [
  { name: 'Ankit Singh', role: 'Chief Executive Officer', bio: 'Strategic technology lead with 15+ years in enterprise architectures. Formerly lead systems architect.' },
  { name: 'Priya Sharma', role: 'Chief Technology Officer', bio: 'Engineering excellence specialist. Architected distributed systems supporting massive daily transactions.' },
  { name: 'Rahul Verma', role: 'Director of Design', bio: 'Focuses on highly accessible and functional design systems. Proponent of research-backed usability.' },
  { name: 'Sarah Mitchell', role: 'Head of Enterprise Partnerships', bio: 'Manages compliance, strategic client relations, and delivery alignment for global industrial sectors.' },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Our Story</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              We Engineer Software Systems<br />
              <span className="text-[#EAA812]">Built for High Integrity</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Established in Mumbai, Tvam Key Software is a premier digital engineering consultancy. We design, deploy, and maintain robust digital backbones, scalable cloud architectures, and highly secure software environments for progressive enterprises.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section bg="white">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#006837]/5 to-[#006837]/5 rounded-3xl p-8 border border-[#006837]/15 flex flex-col items-start">
            <Target size={28} className="text-[#006837] mb-4 shrink-0" />
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To engineer software systems of the highest caliber — enabling organizations to operate at scale with complete security, seamless integration, and zero operational friction. We believe premium digital engineering should be clear, systematic, and durable.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#EAA812]/5 to-[#EAA812]/5 rounded-3xl p-8 border border-[#EAA812]/15 flex flex-col items-start">
            <Compass size={28} className="text-[#EAA812] mb-4 shrink-0" />
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To be the definitive technology engineering partner for modern industries. We envision an enterprise ecosystem where legacy bottlenecks are resolved by clean, secure, and performant custom architectures engineered to support future innovation.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats bar */}
      <Section bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: 'Est. 2017', label: 'Mumbai BKC Headquarters' },
            { value: '150+', label: 'Engineering Specialists' },
            { value: '180+', label: 'Enterprise Systems Deployed' },
            { value: '99.9%', label: 'System Uptime Commitment' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold text-[#EAA812]">{s.value}</div>
              <p className="text-slate-400 mt-2 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Timeline */}
      <Section bg="alt">
        <div className="text-center mb-14">
          <Badge className="mb-4">Our Journey</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            A History of <span className="text-[#006837]">Engineering Excellence</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#006837] to-[#006837]" />
          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm inline-block text-left md:text-inherit">
                    <span className="text-xs font-semibold text-[#006837] uppercase tracking-wider">{m.year}</span>
                    <h3 className="text-base font-bold text-[#0F172A] mt-1">{m.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#006837] border-2 border-white shadow" />
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Leadership */}
      <Section bg="white">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Leadership</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            Directing with <span className="text-[#006837]">Purpose & Diligence</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 text-center">
              <div className="w-20 h-20 rounded-full bg-[#006837]/10 flex items-center justify-center text-[#006837] text-2xl font-extrabold mx-auto mb-4">
                {l.name[0]}
              </div>
              <h3 className="font-bold text-[#0F172A]">{l.name}</h3>
              <p className="text-xs text-[#006837] font-semibold mt-1 mb-3">{l.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
