'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Sparkles } from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';

const OFFICES = [
  { city: 'Mumbai, India (HQ)', address: 'Office No. 49, Annex Mall, Near Western Express Highway, Borivali East, Mumbai – 400066, Maharashtra', phone: '+91 88984 89138 / +91 77387 58226' },
  { city: 'Registered Office', address: '305, Building No. 2, Wing L, Prathamesh Dreams, Vasai, Palghar, Vasai-Virar City (M Corp) – 401303', phone: '' },
  { city: 'Pune Office', address: "Office-743, Gera's Imperium Rise, Wipro Circle, Hinjewadi Phase 2, Pune – 411057", phone: '' },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Let&apos;s Build Something{' '}
            <span className="text-[#EAA812]">Amazing Together</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-xl mx-auto">
            Drop us a message and our engineering team will get back to you within 24 hours. Or call us directly — we love talking about great architectural ideas.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="tel:+918898489138"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20">
              <Phone size={16} /> +91 88984 89138
            </a>
            <a href="tel:+917738758226"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20">
              <Phone size={16} /> +91 77387 58226
            </a>
            <a href="https://wa.me/918898489138"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#25D366]/20 text-white rounded-full hover:bg-[#25D366]/30 transition-colors border border-[#25D366]/30">
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a href="mailto:info@tvamkeysoftware.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20">
              <Mail size={16} /> info@tvamkeysoftware.com
            </a>
          </div>
        </div>
      </section>

      <Section bg="alt">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h2 className="text-2xl font-extrabold text-[#0F172A] mb-6">Send Us a Message</h2>

            {sent ? (
              <div className="text-center py-12">
                <div className="mx-auto w-16 h-16 rounded-full bg-[#006837]/10 flex items-center justify-center text-[#006837] mb-4">
                  <Sparkles size={28} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Message Sent!</h3>
                <p className="text-slate-500">We&apos;ll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input required name="name" value={form.name} onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email *</label>
                    <input required type="email" name="email" value={form.email} onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange}
                      placeholder="+91 88984 89138"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Company</label>
                    <input name="company" value={form.company} onChange={handleChange}
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Service Required</label>
                  <select name="service" value={form.service} onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-700 focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all bg-white">
                    <option value="">Select a service...</option>
                    <option>iOS Development</option>
                    <option>Android Development</option>
                    <option>React / Next.js</option>
                    <option>Flutter Development</option>
                    <option>AI & ML Development</option>
                    <option>UI/UX Design</option>
                    <option>Cloud Computing</option>
                    <option>Blockchain</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Project Details *</label>
                  <textarea required name="message" value={form.message} onChange={handleChange}
                    placeholder="Tell us about your project — what you want to build, your timeline, and any specific requirements..."
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all resize-none" />
                </div>
                <button type="submit"
                  className="w-full py-4 bg-[#006837] hover:bg-[#004D28] text-white font-bold rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-60">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Contact Details</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#006837]/10 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#006837]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone (India)</p>
                    <a href="tel:+918898489138" className="text-sm font-semibold text-[#0F172A] hover:text-[#006837] block">+91 88984 89138</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#006837]/10 flex items-center justify-center shrink-0">
                    <Phone size={14} className="text-[#006837]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Phone (India)</p>
                    <a href="tel:+917738758226" className="text-sm font-semibold text-[#0F172A] hover:text-[#006837] block">+91 77387 58226</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#006837]/10 flex items-center justify-center shrink-0">
                    <Mail size={14} className="text-[#006837]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Email</p>
                    <a href="mailto:info@tvamkeysoftware.com" className="text-sm font-semibold text-[#0F172A] hover:text-[#006837]">info@tvamkeysoftware.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <MessageCircle size={14} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">WhatsApp</p>
                    <a href="https://wa.me/918898489138" className="text-sm font-semibold text-[#0F172A] hover:text-[#25D366]">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#006837]/10 flex items-center justify-center shrink-0">
                    <Clock size={14} className="text-[#006837]" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">Response Time</p>
                    <p className="text-sm font-semibold text-[#0F172A]">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Corporate HQ Office */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <h3 className="text-lg font-bold text-[#0F172A] mb-4">Our Offices</h3>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.city} className="flex items-start gap-3">
                    <MapPin size={14} className="text-[#EAA812] mt-1 shrink-0" />
                    <div>
                      <p className="text-sm font-semibold text-[#0F172A]">{o.city}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{o.address}</p>
                      {o.phone && <a href={`tel:${o.phone.replace(/\s/g, '')}`} className="text-xs text-[#006837] hover:underline mt-0.5 block">{o.phone}</a>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
