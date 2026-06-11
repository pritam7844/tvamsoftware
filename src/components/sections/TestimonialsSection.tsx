import { Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    name: 'Ajuka',
    role: 'CEO, Book My Jet',
    text: "Impressed with the timeliness and communicativeness. They delivered beyond expectations and always kept us in the loop — even across 3 time zones.",
    platform: 'Clutch',
    rating: 5,
  },
  {
    name: 'Gavin Lund',
    role: 'Founder, Sterkla',
    text: "High quality and accountability through every sprint. The team's expertise in React Native made our product stand out in a competitive market. Won an award because of it.",
    platform: 'Clutch',
    rating: 5,
  },
  {
    name: 'Xenia Ghali',
    role: 'CEO, Mynt',
    text: "Creativity, fresh and modern designs — they completely transformed our app's UX. User retention jumped 40% after the redesign. I was genuinely surprised.",
    platform: 'GoodFirms',
    rating: 5,
  },
  {
    name: 'Giuliano Cognini',
    role: 'Co-Founder',
    text: "They never give up on a challenge. When we faced a brutal real-time sync problem, they found an elegant solution that actually outperformed our original spec.",
    platform: 'Clutch',
    rating: 5,
  },
  {
    name: 'Amin Rasti',
    role: 'CEO, McGillivray Group',
    text: "Swift compared to every other agency we've tried. Tvam Key Software delivered our enterprise portal in record time without compromising on quality or security. Would hire again immediately.",
    platform: 'Clutch',
    rating: 5,
  },
  {
    name: 'Mohammed Abdul Moula',
    role: 'Founder, Winchat',
    text: "The team operates like a family — genuinely invested in the outcome, not just the invoice. That attitude shows in the product they built.",
    platform: 'GoodFirms',
    rating: 5,
  },
];

function StarRow({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width={12} height={12} viewBox="0 0 24 24" fill="#EAA812">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-3 gap-10 items-end mb-16">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#006837] mb-3">What clients say</p>
            <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A] leading-tight">
              Don&apos;t take our word for it.
            </h2>
          </div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <div className="text-center">
              <div className="text-3xl font-black text-[#0F172A]">4.9</div>
              <StarRow count={5} />
              <p className="text-xs mt-1">on Clutch</p>
            </div>
            <div className="w-px h-12 bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-black text-[#0F172A]">4.8</div>
              <StarRow count={5} />
              <p className="text-xs mt-1">on GoodFirms</p>
            </div>
          </div>
        </div>

        {/* Testimonial grid — equal-height rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name}
              className={`flex flex-col h-full rounded-2xl border p-6 ${i === 0 || i === 5 ? 'bg-[#0A0E1A] border-white/10' : 'bg-[#F8FAFC] border-slate-200'}`}>
              <div className="flex items-start justify-between mb-4">
                <Quote size={20} className={i === 0 || i === 5 ? 'text-[#EAA812]/60' : 'text-slate-300'} />
                <div className="flex items-center gap-2">
                  <StarRow count={t.rating} />
                  <span className={`text-[10px] font-semibold uppercase tracking-wider ${i === 0 || i === 5 ? 'text-slate-500' : 'text-slate-400'}`}>
                    {t.platform}
                  </span>
                </div>
              </div>
              <p className={`text-sm leading-relaxed ${i === 0 || i === 5 ? 'text-slate-300' : 'text-slate-700'}`}>
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="mt-auto pt-5 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#006837] to-[#006837] flex items-center justify-center text-white font-bold text-xs shrink-0">
                  {t.name[0]}
                </div>
                <div>
                  <p className={`text-sm font-bold leading-none ${i === 0 || i === 5 ? 'text-white' : 'text-[#0F172A]'}`}>{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
