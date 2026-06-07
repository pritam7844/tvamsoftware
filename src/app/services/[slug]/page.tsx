import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';
import SERVICES, { getServiceBySlug } from '@/data/services';

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.headline} | Tvam Key Software`,
    description: service.desc,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <section className="relative bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src={service.image} alt={service.headline} fill className="object-cover" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">
              {service.label}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              {service.headline}<br />
              <span className="text-[#EAA812]">{service.sub}</span>
            </h1>
            <p className="mt-6 text-lg text-slate-400 max-w-xl">{service.desc}</p>
            <div className="mt-8">
              <Link href="/contact">
                <span className="inline-flex items-center gap-2 px-8 py-4 bg-[#006837] text-white font-bold rounded-full hover:bg-[#004D28] transition-colors">
                  Get a Free Quote <ArrowRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Section bg="white">
        <div className="text-center mb-14">
          <Badge className="mb-4">What We Deliver</Badge>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">{service.headline} Excellence</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.features.map((f) => (
            <div key={f.title} className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200">
              <div className="mb-3 text-[#006837]"><Icon size={28} strokeWidth={1.5} /></div>
              <h3 className="text-base font-bold text-[#0F172A] mb-2">{f.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section bg="alt">
        <div className="text-center mb-10">
          <Badge variant="secondary" className="mb-4">Tech Stack</Badge>
          <h2 className="text-2xl font-extrabold text-[#0F172A]">Technologies We Use</h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          {service.tech.map((t) => (
            <span key={t} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 shadow-sm">{t}</span>
          ))}
        </div>
      </Section>

      <Section bg="white">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4">Our Process</Badge>
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-6">How We Build Your Solution</h2>
            <div className="space-y-4">
              {service.process.map((step, i) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#006837] text-white text-sm font-bold flex items-center justify-center shrink-0">{i + 1}</div>
                  <p className="text-slate-700 font-medium">{step}</p>
                  <CheckCircle size={16} className="text-[#006837] ml-auto shrink-0" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200">
            <h3 className="text-xl font-extrabold text-[#0F172A] mb-6">Why Choose Us?</h3>
            <div className="space-y-3">
              {service.whyUs.map((p) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#006837] mt-0.5 shrink-0" />
                  <p className="text-sm text-slate-700">{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
