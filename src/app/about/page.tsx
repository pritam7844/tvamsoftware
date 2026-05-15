import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'About Us | Tvam Software — Our Story, Mission & Vision',
  description: 'Founded in 2015, Tvam Software is a global mobile app development company with 500+ engineers, serving clients across 25+ countries.',
};

const MILESTONES = [
  { year: '2015', title: 'Founded', desc: 'Tvam Software was founded with a vision to democratise world-class digital product development.' },
  { year: '2017', title: '100 Apps Milestone', desc: 'Crossed 100 mobile apps shipped across iOS, Android and web platforms.' },
  { year: '2019', title: 'Global Expansion', desc: 'Opened offices in USA, Canada, and UAE to serve our growing global clientele.' },
  { year: '2021', title: '$100M+ Raised', desc: 'Our portfolio apps collectively raised over $100 million in venture funding.' },
  { year: '2023', title: '500+ Engineers', desc: 'Grew to 500+ tech enthusiasts across 15+ countries.' },
  { year: '2024', title: '$869M+ Raised', desc: 'Our apps have cumulatively raised $869M+ in funding — a milestone we\'re proud of.' },
];

const LEADERSHIP = [
  { name: 'Ankit Singh', role: 'CEO & Co-Founder', bio: 'Visionary leader with 15+ years in product development. Previously at Microsoft and Google.' },
  { name: 'Priya Sharma', role: 'CTO', bio: 'Engineering excellence advocate. Architected systems serving 50M+ users globally.' },
  { name: 'Rahul Verma', role: 'Head of Design', bio: 'Award-winning UX designer. Former design lead at Byju\'s and Airtel.' },
  { name: 'Sarah Mitchell', role: 'VP Sales & Growth', bio: 'Built partnerships with Fortune 500 companies and leading VC-backed startups.' },
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
              We Build Digital Products<br />
              <span className="gradient-text">The World Uses</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 leading-relaxed">
              Founded in 2015, Tvam Software is a global mobile app and AI development company. We&apos;ve helped over 50,000 businesses across 25+ countries turn ideas into products that users love — and investors fund.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <Section bg="white">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-gradient-to-br from-[#00C4B4]/10 to-[#6366F1]/10 rounded-3xl p-8 border border-[#00C4B4]/20">
            <div className="text-3xl mb-4">🎯</div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Our Mission</h2>
            <p className="text-slate-700 leading-relaxed">
              To democratise world-class digital product development — making it accessible to startups, SMEs and enterprises alike. We believe great technology should be within reach of every visionary founder, not just those with the deepest pockets.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#6366F1]/10 to-[#00C4B4]/10 rounded-3xl p-8 border border-[#6366F1]/20">
            <div className="text-3xl mb-4">🔭</div>
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-3">Our Vision</h2>
            <p className="text-slate-700 leading-relaxed">
              To become the most trusted technology partner for businesses building the future. We envision a world where any idea — no matter how ambitious — can be transformed into a product that changes lives, powered by the right technology and the right team.
            </p>
          </div>
        </div>
      </Section>

      {/* Stats bar */}
      <Section bg="dark">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '12+', label: 'Years of Experience' },
            { value: '500+', label: 'Team Members' },
            { value: '1,500+', label: 'Apps Delivered' },
            { value: '25+', label: 'Countries Served' },
          ].map((s) => (
            <div key={s.label}>
              <div className="text-4xl font-extrabold gradient-text">{s.value}</div>
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
            A Decade of <span className="gradient-text">Innovation</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00C4B4] to-[#6366F1]" />
          <div className="space-y-10">
            {MILESTONES.map((m, i) => (
              <div key={m.year} className={`flex items-start gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'} pl-12 md:pl-0`}>
                  <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm inline-block text-left md:text-inherit">
                    <span className="text-xs font-semibold text-[#00C4B4] uppercase tracking-wider">{m.year}</span>
                    <h3 className="text-base font-bold text-[#0F172A] mt-1">{m.title}</h3>
                    <p className="text-sm text-slate-600 mt-1">{m.desc}</p>
                  </div>
                </div>
                <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#00C4B4] border-2 border-white shadow" />
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
            Meet the Team Behind the <span className="gradient-text">Magic</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {LEADERSHIP.map((l) => (
            <div key={l.name} className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#00C4B4] to-[#6366F1] flex items-center justify-center text-white text-2xl font-extrabold mx-auto mb-4">
                {l.name[0]}
              </div>
              <h3 className="font-bold text-[#0F172A]">{l.name}</h3>
              <p className="text-xs text-[#00C4B4] font-semibold mt-1 mb-3">{l.role}</p>
              <p className="text-xs text-slate-600 leading-relaxed">{l.bio}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
