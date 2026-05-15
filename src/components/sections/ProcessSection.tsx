import { Lightbulb, Search, PenTool, Code2, Rocket } from 'lucide-react';

const STEPS = [
  {
    icon: Lightbulb,
    num: '01',
    title: 'Discovery',
    desc: "We dig into your vision, market, and users. Not 30-page decks — focused conversations that uncover what actually matters.",
    color: '#F59E0B',
  },
  {
    icon: Search,
    num: '02',
    title: 'Strategy',
    desc: 'Roadmap, tech stack, team structure. We decide what to build first and why — based on data, not guesses.',
    color: '#F59E0B',
  },
  {
    icon: PenTool,
    num: '03',
    title: 'Design',
    desc: 'Wireframes, design systems, interactive prototypes. Validated with real users before a single line of code.',
    color: '#EC4899',
  },
  {
    icon: Code2,
    num: '04',
    title: 'Build',
    desc: 'Agile sprints. CI/CD pipelines. Clean, tested, documented code. You can see progress every single week.',
    color: '#F59E0B',
  },
  {
    icon: Rocket,
    num: '05',
    title: 'Launch & Grow',
    desc: 'Deploy, monitor, iterate. We stay on board after launch — because the best products never stop evolving.',
    color: '#10B981',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-white py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F59E0B] mb-3">How we work</p>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0F172A]">
            A process refined<br />over 1,500 projects.
          </h2>
        </div>

        {/* Steps — horizontal on desktop, vertical on mobile */}
        <div className="relative">
          {/* Connecting dashed line — desktop only */}
          <div className="hidden lg:block absolute top-[52px] left-[10%] right-[10%] h-px"
            style={{ background: 'repeating-linear-gradient(to right, #E2E8F0, #E2E8F0 8px, transparent 8px, transparent 16px)' }} />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {STEPS.map((step, i) => (
              <div key={step.num} className="flex flex-col items-center text-center lg:items-center">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-lg z-10 relative"
                    style={{ backgroundColor: step.color }}>
                    <step.icon size={28} className="text-white" strokeWidth={1.5} />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#0F172A] text-white text-[10px] font-black flex items-center justify-center border-2 border-white">
                    {i + 1}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl bg-[#F8FAFC] border border-slate-200 p-8 lg:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-extrabold text-[#0F172A]">Ready to start the process?</h3>
            <p className="text-slate-500 mt-2 text-sm">First call is free. No pressure. Just a conversation about your idea.</p>
          </div>
          <div className="flex flex-wrap gap-4 shrink-0">
            <a href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F59E0B] text-white font-semibold rounded-full hover:bg-[#D97706] transition-colors">
              Book a free call
            </a>
            <a href="https://wa.me/918898489138"
              className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-slate-200 text-slate-700 font-semibold rounded-full hover:border-[#F59E0B] hover:text-[#F59E0B] transition-colors">
              WhatsApp us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
