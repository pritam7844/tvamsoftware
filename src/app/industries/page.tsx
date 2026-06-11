import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';
import INDUSTRIES from '@/data/industries';
import IndustryIcon from '@/components/ui/IndustryIcon';

export default function IndustriesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Industries We Serve</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Domain Expertise Across{' '}
            <span className="gradient-text">25+ Industries</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            We don&apos;t just build apps — we understand your industry. Deep domain expertise means faster delivery, fewer revisions, and better outcomes.
          </p>
        </div>
      </section>

      {/* Industries */}
      <Section bg="alt">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind) => (
            <Link key={ind.title} href={`/industries/${ind.slug}`}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 card-hover">
              <div className="relative h-24 overflow-hidden">
                <Image src={ind.image} alt={ind.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/45 flex items-center px-6 gap-4">
                  <IndustryIcon name={ind.icon} className="w-8 h-8 text-[#EAA812] shrink-0" />
                  <h3 className="text-xl font-extrabold text-white">{ind.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{ind.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {ind.apps.slice(0, 5).map((app) => (
                    <span key={app} className="px-2 py-1 text-xs bg-slate-100 text-slate-600 rounded-full">{app}</span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#006837] group-hover:gap-2 transition-all">
                  Explore Solutions <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
