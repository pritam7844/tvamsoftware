import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Briefcase } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Career | Tvam Software — Join the Team Building the Future',
  description: 'Join Tvam Software — a global tech team of 500+ engineers, designers and dreamers building world-class digital products.',
};

const VALUES = [
  { icon: '🌍', title: 'Community First', desc: 'We build an innovative, inclusive tech community where everyone belongs and grows.' },
  { icon: '💡', title: 'New Ideas Always', desc: 'Your success is tied to your creativity. We encourage bold thinking at every level.' },
  { icon: '🚀', title: 'Tech Leadership', desc: 'We bridge the gap between business vision and cutting-edge app technology.' },
  { icon: '🎉', title: 'Celebrate Everything', desc: 'Regular recognition of people and achievements. We celebrate big and small wins.' },
  { icon: '📈', title: 'Unlimited Growth', desc: 'Access diverse training, mentorship, and opportunities to expand your tech skills.' },
  { icon: '🌐', title: 'Push Boundaries', desc: 'Explore the full scope of your capabilities while building a sustainable future.' },
];

const PERKS = [
  { icon: '🏠', title: 'Remote First', desc: 'Work from anywhere in the world, with async-friendly workflows.' },
  { icon: '⏰', title: 'Flexible Hours', desc: 'Flexible schedules that accommodate your personal life and peak productivity.' },
  { icon: '🎓', title: 'Learning Budget', desc: 'Annual learning budget for courses, books, and conferences.' },
  { icon: '🎮', title: 'Fun Fridays', desc: 'Weekly team games, events, and activities to unwind and connect.' },
  { icon: '🏥', title: 'Health Insurance', desc: 'Comprehensive health coverage for you and your family.' },
  { icon: '✈️', title: 'Team Retreats', desc: 'Annual off-sites and retreats across amazing destinations.' },
];

const OPENINGS = [
  { title: 'React Native Developer', dept: 'Engineering', exp: '2–4 years', type: 'Full-time', location: 'Remote / Noida' },
  { title: 'Flutter Developer', dept: 'Engineering', exp: '3–6 years', type: 'Full-time', location: 'Remote / Noida' },
  { title: 'Node.js Developer', dept: 'Backend', exp: '3–6 years', type: 'Full-time', location: 'Remote / Noida' },
  { title: 'UI/UX Designer', dept: 'Design', exp: '2–5 years', type: 'Full-time', location: 'Remote / Noida' },
  { title: 'Business Development Manager', dept: 'Sales', exp: '2–4 years', type: 'Full-time', location: 'Noida / Dubai' },
  { title: 'QA Manual Engineer', dept: 'Quality', exp: '3–5 years', type: 'Full-time', location: 'Remote / Noida' },
  { title: 'SEO Specialist', dept: 'Marketing', exp: '4–5 years', type: 'Full-time', location: 'Remote' },
  { title: 'Content Writer', dept: 'Marketing', exp: '1–2 years', type: 'Full-time', location: 'Remote' },
  { title: 'Social Media Executive', dept: 'Marketing', exp: '1–4 years', type: 'Full-time', location: 'Noida' },
  { title: 'Sales Executive', dept: 'Sales', exp: '3–5 years', type: 'Full-time', location: 'Noida / USA' },
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
              Build the Future at{' '}
              <span className="gradient-text">Tvam Software</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl">
              Join 500+ engineers, designers and product minds building world-class digital products for clients across 25+ countries. Founded 2015, remote-first, and still growing fast.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#openings">
                <Button size="lg">View Open Roles</Button>
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
          {VALUES.map((v) => (
            <div key={v.title} className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200">
              <div className="text-3xl mb-3">{v.icon}</div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{v.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Perks */}
      <Section bg="alt">
        <div className="text-center mb-14">
          <Badge variant="secondary" className="mb-4">Perks & Benefits</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">
            Life at <span className="gradient-text">Tvam Software</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PERKS.map((p) => (
            <div key={p.title} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{p.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
            </div>
          ))}
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
            Don&apos;t see your role? <a href="mailto:hr@tvamsoftware.com" className="text-[#F59E0B] font-medium hover:underline">Send us your CV anyway.</a>
          </p>
        </div>

        <div className="space-y-3">
          {OPENINGS.map((job) => (
            <div key={job.title}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#F59E0B]/40 hover:shadow-md transition-all cursor-pointer">
              <div>
                <h3 className="font-bold text-[#0F172A] group-hover:text-[#F59E0B] transition-colors">{job.title}</h3>
                <div className="flex flex-wrap gap-3 mt-2 text-xs text-slate-500">
                  <span className="flex items-center gap-1"><Briefcase size={12} /> {job.dept}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {job.exp}</span>
                  <span className="flex items-center gap-1"><MapPin size={12} /> {job.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="px-3 py-1 text-xs bg-[#F59E0B]/10 text-[#F59E0B] rounded-full font-medium">{job.type}</span>
                <span className="text-[#F59E0B] flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all">
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
