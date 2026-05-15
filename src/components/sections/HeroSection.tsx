import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import TypingEffect from '@/components/ui/TypingEffect';

const TECH_TAGS = [
  'iOS', 'Android', 'React Native', 'Flutter', 'AI / ML',
  'Next.js', 'Node.js', 'AWS', 'Blockchain', 'IoT',
];

const TRUST_LOGOS = ['Microsoft', 'Google', 'Y Combinator', 'Sequoia', 'Goldman Sachs'];

/* ── Simple geometric vector background ── */
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
        {/* Dot grid pattern */}
        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1.2" fill="#F59E0B" />
        </pattern>
      </defs>

      {/* Full dot grid at very low opacity */}
      <rect width="1200" height="640" fill="url(#dots)" opacity="0.12" />

      {/* Large background circles — top right */}
      <circle cx="1050" cy="80" r="260" stroke="#F59E0B" strokeWidth="1" opacity="0.06" />
      <circle cx="1050" cy="80" r="190" stroke="#F59E0B" strokeWidth="1" opacity="0.06" />
      <circle cx="1050" cy="80" r="120" stroke="#F59E0B" strokeWidth="1" opacity="0.06" />

      {/* Large background circles — bottom left */}
      <circle cx="150" cy="560" r="220" stroke="#F59E0B" strokeWidth="1" opacity="0.06" />
      <circle cx="150" cy="560" r="150" stroke="#F59E0B" strokeWidth="1" opacity="0.06" />

      {/* Diagonal accent lines — top left to center */}
      <line x1="0" y1="0" x2="300" y2="200" stroke="#F59E0B" strokeWidth="0.7" opacity="0.07" />
      <line x1="0" y1="60" x2="260" y2="220" stroke="#F59E0B" strokeWidth="0.7" opacity="0.05" />

      {/* Diagonal accent lines — bottom right */}
      <line x1="1200" y1="640" x2="900" y2="440" stroke="#F59E0B" strokeWidth="0.7" opacity="0.07" />
      <line x1="1200" y1="580" x2="940" y2="440" stroke="#F59E0B" strokeWidth="0.7" opacity="0.05" />

      {/* Small accent diamond — top left */}
      <polygon points="80,60 96,76 80,92 64,76" stroke="#F59E0B" strokeWidth="1.2" opacity="0.1" />
      <polygon points="80,68 88,76 80,84 72,76" stroke="#F59E0B" strokeWidth="1" opacity="0.08" />

      {/* Small accent diamond — bottom right */}
      <polygon points="1120,548 1136,564 1120,580 1104,564" stroke="#F59E0B" strokeWidth="1.2" opacity="0.1" />

      {/* Horizontal rule lines — subtle */}
      <line x1="0" y1="320" x2="240" y2="320" stroke="#F59E0B" strokeWidth="0.6" opacity="0.06" />
      <line x1="960" y1="320" x2="1200" y2="320" stroke="#F59E0B" strokeWidth="0.6" opacity="0.06" />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="bg-white pt-16 overflow-hidden">
      {/* Announcement bar */}
      <div className="border-b border-slate-100 bg-[#F8FAFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span>Rated #1 App Development Company on Clutch 2024</span>
          </div>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <Star key={i} size={11} className="fill-amber-400 text-amber-400" />
            ))}
            <span className="text-xs text-slate-500 ml-1">4.9 · 300+ reviews</span>
          </div>
        </div>
      </div>

      {/* Hero body */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Vector background — absolutely positioned, static, covers full width */}
        <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
          {/* Left fade */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white to-transparent z-10" />
          {/* Right fade */}
          <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white to-transparent z-10" />
          {/* Top fade */}
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white to-transparent z-10" />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent z-10" />
          <TechBg />
        </div>

        {/* Content — sits above the vector */}
        <div className="relative z-20 pt-20 pb-16 lg:pt-28 lg:pb-24">

          {/* Centered copy */}
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.1] tracking-tight">
              Top
              <TypingEffect
                block
                className="text-[#F59E0B]"
                words={[
                  'Mobile App Development.',
                  'Web Development.',
                  'AI & ML Solutions.',
                  'Software Engineering.',
                  'UI/UX Design.',
                  'Cloud Solutions.',
                  'React Native Apps.',
                  'Flutter Development.',
                ]}
              />
            </h1>

            <p className="mt-6 text-lg text-slate-500 leading-relaxed max-w-xl mx-auto">
              From a two-line idea to a product used by millions. We build mobile apps, AI solutions, and digital platforms for founders who want to move fast and build right.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#F59E0B] text-white font-bold rounded-full text-sm hover:bg-[#00B0A0] transition-colors shadow-lg shadow-[#F59E0B]/30">
                Start a project
                <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="/portfolio"
                className="inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F172A] text-[#F59E0B] font-semibold rounded-full text-sm hover:bg-[#1E293B] transition-colors shadow-lg shadow-slate-900/20">
                View portfolio
              </Link>
            </div>

            {/* Tech tags */}
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {TECH_TAGS.map((tag) => (
                <span key={tag}
                  className="px-3 py-1.5 text-xs font-medium text-slate-500 bg-white/90 border border-slate-200 rounded-full shadow-sm hover:border-[#F59E0B]/40 hover:text-[#D97706] transition-colors">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            {[
              { value: '1,500+', label: 'Apps delivered', note: 'iOS, Android, Web' },
              { value: '50K+', label: 'Happy clients', note: '5 continents' },
              { value: '$869M+', label: 'Funding raised', note: 'by apps we built' },
              { value: '12+', label: 'Years active', note: 'Est. 2015' },
            ].map((s) => (
              <div key={s.label} className="bg-white px-6 py-7 text-center">
                <div className="text-3xl font-black text-[#F59E0B]">{s.value}</div>
                <div className="text-sm font-semibold text-[#0F172A] mt-1.5">{s.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{s.note}</div>
              </div>
            ))}
          </div>

          {/* Trusted by */}
          <div className="mt-14 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 mb-5">
              Apps backed by
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {TRUST_LOGOS.map((name) => (
                <span key={name}
                  className="px-5 py-2.5 text-xs font-bold text-slate-500 bg-white border border-slate-200 rounded-xl shadow-sm hover:border-[#F59E0B]/30 transition-colors">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
    </section>
  );
}
