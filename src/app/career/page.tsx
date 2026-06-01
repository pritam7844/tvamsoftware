import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  MapPin,
  Clock,
  Briefcase,
  Cpu,
  Lightbulb,
  Rocket,
  Users,
  TrendingUp,
  ShieldCheck,
  Building2,
  GraduationCap,
  HeartPulse,
  Coffee,
  Compass
} from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Career | Tvam Key Software — Join the Engineering Leaders',
  description: 'Join Tvam Key Software — a dedicated technology team of software architects and engineers building robust digital ecosystems.',
};

const VALUES = [
  { icon: Cpu, title: 'Technical Rigor', desc: 'We build systems that are clean, durable, and structurally sound. Quality is non-negotiable.' },
  { icon: Lightbulb, title: 'Disciplined Innovation', desc: 'We value creative approaches grounded in security, efficiency, and engineering best practices.' },
  { icon: Rocket, title: 'Digital Leadership', desc: 'We bridge the gap between architectural vision and complex software implementations.' },
  { icon: Users, title: 'Mutual Accountability', desc: 'We maintain clear, high-trust communication across all client products and sprint cycles.' },
  { icon: TrendingUp, title: 'Continuous Growth', desc: 'Access advanced technical mentorship and expanding project opportunities.' },
  { icon: ShieldCheck, title: 'Security First', desc: 'A firm commitment to security, quality standards, and industry-grade compliance.' },
];

const PERKS = [
  { icon: Building2, title: 'Bandra Kurla HQ', desc: 'Modern work environment located in the heart of Mumbai BKC business district.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Work-life balance with flexible core hours to maximize productivity.' },
  { icon: GraduationCap, title: 'Professional Growth', desc: 'Company support for certifications, industry courses, and technical books.' },
  { icon: HeartPulse, title: 'Medical Benefits', desc: 'Comprehensive health coverage plan for our core specialists.' },
  { icon: Coffee, title: 'Workplace Environment', desc: 'Fully equipped spaces with positive support structures and clean layouts.' },
  { icon: Compass, title: 'Collaborative Offsites', desc: 'Annual company retreats and engineering workshops to sync and align.' },
];

const OPENINGS = [
  { title: 'React Native Developer', dept: 'Engineering', exp: '2–4 years', type: 'Full-time', location: 'Remote / Mumbai' },
  { title: 'Flutter Developer', dept: 'Engineering', exp: '3–6 years', type: 'Full-time', location: 'Remote / Mumbai' },
  { title: 'Node.js Developer', dept: 'Backend', exp: '3–6 years', type: 'Full-time', location: 'Remote / Mumbai' },
  { title: 'UI/UX Designer', dept: 'Design', exp: '2–5 years', type: 'Full-time', location: 'Mumbai / Hybrid' },
  { title: 'Business Development Manager', dept: 'Sales', exp: '2–4 years', type: 'Full-time', location: 'Mumbai HQ' },
  { title: 'QA Manual Engineer', dept: 'Quality', exp: '3–5 years', type: 'Full-time', location: 'Remote / Mumbai' },
  { title: 'SEO Specialist', dept: 'Marketing', exp: '4–5 years', type: 'Full-time', location: 'Remote' },
  { title: 'Content Writer', dept: 'Marketing', exp: '1–2 years', type: 'Full-time', location: 'Remote' },
  { title: 'Social Media Executive', dept: 'Marketing', exp: '1–4 years', type: 'Full-time', location: 'Mumbai' },
  { title: 'Sales Executive', dept: 'Sales', exp: '3–5 years', type: 'Full-time', location: 'Mumbai HQ' },
];

export default function CareerPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">We&apos;re Hiring</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Build Secure Tech at<br />
              <span className="text-[#EAA812]">Tvam Key Software</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl">
              Join our dedicated engineering hubs building high-integrity platforms and complex software systems. Established in 2017, headquartered in BKC, Mumbai.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#openings">
                <Button size="lg" className="bg-[#006837] hover:bg-[#004D28] text-white">View Open Roles</Button>
              </a>
              <a href="mailto:hr@tvamsoftware.com">
                <Button size="lg" variant="outline" className="!border-white/30 !text-white hover:!bg-white/10">
                  Send Spontaneous CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <Section bg="white">
        <div className="text-center mb-14">
          <Badge className="mb-4">Our Values</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            What We Believe In
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200">
                <div className="mb-3 text-[#006837]">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Perks */}
      <Section bg="alt">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Perks & Benefits</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            Life at <span className="text-[#006837]">Tvam Key Software</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERKS.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
                <div className="mb-3 text-[#EAA812]">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Job Openings */}
      <Section bg="white" id="openings">
        <div className="text-center mb-14">
          <Badge className="mb-4">Open Positions</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            Current Openings
          </h2>
          <p className="mt-4 text-slate-500">
            Don&apos;t see your role? <a href="mailto:hr@tvamsoftware.com" className="text-[#006837] font-medium hover:underline">Send us your CV anyway.</a>
          </p>
        </div>

        <div className="space-y-3">
          {OPENINGS.map((job) => (
            <div key={job.title}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#006837]/40 hover:shadow-md transition-all cursor-pointer">
              <div>
                <h3 className="font-bold text-[#0F172A] group-hover:text-[#006837] transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.exp}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1 text-xs bg-[#006837]/10 text-[#006837] rounded-full font-medium">{job.type}</span>
                <span className="text-[#006837] flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
                  Apply <ArrowRight size={14} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
