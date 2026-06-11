import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';
import INDUSTRIES, { getIndustryBySlug } from '@/data/industries';
import IndustryIcon from '@/components/ui/IndustryIcon';

export async function generateStaticParams() {
  return INDUSTRIES.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};
  return {
    title: `${industry.headline} | Tvam Key Software`,
    description: industry.desc,
  };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image src={industry.image} alt={industry.title} fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">
              {industry.title}
            </Badge>
            <div className="flex items-center gap-4 mb-4">
              <IndustryIcon name={industry.icon} className="w-12 h-12 text-[#EAA812]" />
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {industry.headline}
              </h1>
            </div>
            <p className="mt-4 text-lg text-slate-400 max-w-xl">{industry.desc}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {industry.stats.map((s) => (
                <div key={s.label} className="px-5 py-3 bg-white/10 rounded-2xl border border-white/20 text-center">
                  <p className="text-2xl font-extrabold text-[#EAA812]">{s.value}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="text-center mb-14">
          <Badge className="mb-4">Solutions</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">What We Build for {industry.title}</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-6">
          {industry.features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200 flex items-start gap-4">
              <CheckCircle size={20} className="text-[#006837] mt-0.5 shrink-0" />
              <div>
                <h3 className="text-base font-bold text-[#0F172A] mb-2">{f.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="alt">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">App Types</Badge>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Popular {industry.title} Apps We Build</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {industry.apps.map((a) => (
            <span key={a} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">{a}</span>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/contact">
            <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#006837] text-white font-bold rounded-full hover:bg-[#004D28] transition-colors">
              Start Your {industry.title} Project <ArrowRight size={16} />
            </span>
          </Link>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
