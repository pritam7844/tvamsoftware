import Link from 'next/link';
import { Phone, MessageCircle, ArrowRight, CheckCircle } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Bordered card with teal left accent */}
        <div className="relative rounded-3xl border border-slate-200 bg-[#F8FAFC] overflow-hidden shadow-sm">

          {/* Top accent strip */}
          <div className="h-1 w-full bg-gradient-to-r from-[#00C4B4] via-[#6366F1] to-[#00C4B4]" />

          {/* Subtle vector bg — static circles */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <svg viewBox="0 0 900 340" className="absolute right-0 top-0 h-full opacity-[0.04]" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
              <circle cx="750" cy="80"  r="180" stroke="#00C4B4" strokeWidth="1.5" fill="none" />
              <circle cx="750" cy="80"  r="130" stroke="#00C4B4" strokeWidth="1" fill="none" />
              <circle cx="750" cy="80"  r="80"  stroke="#6366F1" strokeWidth="1" fill="none" />
              <circle cx="820" cy="280" r="120" stroke="#6366F1" strokeWidth="1.5" fill="none" />
              <circle cx="120" cy="300" r="90"  stroke="#00C4B4" strokeWidth="1" fill="none" />
            </svg>
          </div>

          <div className="relative px-8 py-16 lg:px-20 lg:py-20">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00C4B4] mb-5">Let&apos;s talk</p>

              <h2 className="text-4xl sm:text-5xl font-black text-[#0F172A] leading-tight">
                Your idea deserves<br />
                <span className="text-[#00C4B4]">a great team.</span>
              </h2>

              <p className="mt-5 text-slate-500 text-base leading-relaxed max-w-lg mx-auto">
                First consultation is free. Tell us what you&apos;re building and we&apos;ll tell you exactly how we&apos;d help — no fluff.
              </p>

              {/* CTA buttons */}
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/contact"
                  className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[#0F172A] text-white font-semibold rounded-full text-sm hover:bg-[#1E293B] transition-colors shadow-lg shadow-slate-900/15">
                  Get a free consultation
                  <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <a href="https://wa.me/918898489138"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-slate-200 text-slate-700 font-semibold rounded-full text-sm hover:border-[#25D366] hover:text-[#25D366] hover:bg-[#25D366]/5 transition-colors">
                  <MessageCircle size={15} /> WhatsApp
                </a>
                <a href="tel:+918898489138"
                  className="inline-flex items-center gap-2.5 px-8 py-4 border border-slate-200 text-slate-700 font-semibold rounded-full text-sm hover:border-[#00C4B4] hover:text-[#00C4B4] hover:bg-[#00C4B4]/5 transition-colors">
                  <Phone size={15} /> +91 88984 89138
                </a>
              </div>

              {/* Trust micro-indicators */}
              <div className="mt-10 flex flex-wrap justify-center gap-5 text-xs text-slate-500">
                {['Free consultation. No commitment.', 'Reply within 24 hours.', 'NDA available on request.'].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <CheckCircle size={13} className="text-[#00C4B4]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
