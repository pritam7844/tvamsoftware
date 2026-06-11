'use client';
import { useState } from 'react';
import {
  ArrowRight, MapPin, Clock, Briefcase, Cpu, Lightbulb, Rocket, Users,
  TrendingUp, ShieldCheck, Building2, GraduationCap, HeartPulse, Coffee,
  Compass, X, Send, CheckCircle, Loader2
} from 'lucide-react';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const VALUES = [
  { icon: Cpu, title: 'Technical Rigor', desc: 'We build systems that are clean, durable, and structurally sound. Quality is non-negotiable.' },
  { icon: Lightbulb, title: 'Disciplined Innovation', desc: 'We value creative approaches grounded in security, efficiency, and engineering best practices.' },
  { icon: Rocket, title: 'Digital Leadership', desc: 'We bridge the gap between architectural vision and complex software implementations.' },
  { icon: Users, title: 'Mutual Accountability', desc: 'We maintain clear, high-trust communication across all client products and sprint cycles.' },
  { icon: TrendingUp, title: 'Continuous Growth', desc: 'Access advanced technical mentorship and expanding project opportunities.' },
  { icon: ShieldCheck, title: 'Security First', desc: 'A firm commitment to security, quality standards, and industry-grade compliance.' },
];

const PERKS = [
  { icon: Building2, title: 'Borivali East HQ', desc: 'Modern workspace at Annex Mall, Borivali East — well-connected and fully equipped.' },
  { icon: Clock, title: 'Flexible Scheduling', desc: 'Work-life balance with flexible core hours to maximise productivity.' },
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

interface ApplyForm {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  message: string;
}

export default function CareerPage() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [form, setForm] = useState<ApplyForm>({ name: '', email: '', phone: '', linkedin: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function openModal(title: string) {
    setSelectedJob(title);
    setForm({ name: '', email: '', phone: '', linkedin: '', message: '' });
    setStatus('idle');
  }

  function closeModal() {
    setSelectedJob(null);
    setStatus('idle');
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, position: selectedJob }),
      });
      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  }

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
              Join our dedicated engineering hubs building high-integrity platforms and complex software systems. Offices in Mumbai, Vasai, and Pune.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#openings">
                <Button size="lg" className="bg-[#006837] hover:bg-[#004D28] text-white">View Open Roles</Button>
              </a>
              <a href="mailto:hr@tvamkeysoftware.com">
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">What We Believe In</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {VALUES.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.title} className="rounded-2xl p-6 bg-[#F8FAFC] border border-slate-200">
                <div className="mb-3 text-[#006837]"><Icon size={28} strokeWidth={1.5} /></div>
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
                <div className="mb-3 text-[#EAA812]"><Icon size={28} strokeWidth={1.5} /></div>
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F172A]">Current Openings</h2>
          <p className="mt-4 text-slate-500">
            Don&apos;t see your role?{' '}
            <a href="mailto:hr@tvamkeysoftware.com" className="text-[#006837] font-medium hover:underline">Send us your CV anyway.</a>
          </p>
        </div>
        <div className="space-y-3">
          {OPENINGS.map((job) => (
            <div key={job.title}
              className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border border-slate-200 rounded-2xl p-5 hover:border-[#006837]/40 hover:shadow-md transition-all">
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
                <button
                  onClick={() => openModal(job.title)}
                  className="flex items-center gap-1 text-[#006837] text-sm font-semibold hover:gap-2 transition-all cursor-pointer">
                  Apply <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Apply Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-[500] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] flex flex-col overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex items-start justify-between shrink-0">
              <div>
                <p className="text-xs text-slate-400 uppercase tracking-widest font-semibold">Applying for</p>
                <h2 className="text-xl font-extrabold text-[#0F172A] mt-0.5">{selectedJob}</h2>
              </div>
              <button onClick={closeModal} className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors">
                <X size={20} />
              </button>
            </div>

            {status === 'sent' ? (
              <div className="p-10 text-center overflow-y-auto flex-1 flex flex-col justify-center">
                <div className="w-16 h-16 rounded-full bg-[#006837]/10 flex items-center justify-center mx-auto mb-4 shrink-0">
                  <CheckCircle size={32} className="text-[#006837]" />
                </div>
                <h3 className="text-xl font-bold text-[#0F172A] mb-2">Application Sent!</h3>
                <p className="text-slate-500 text-sm">Our HR team will reach out within 2–3 business days.</p>
                <button onClick={closeModal} className="mt-6 px-6 py-3 bg-[#006837] text-white rounded-full font-semibold text-sm hover:bg-[#004D28] transition-colors mx-auto">
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex-1 flex flex-col overflow-hidden">
                {/* Scrollable form fields */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Full Name *</label>
                      <input required name="name" value={form.name} onChange={handleChange} placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Email *</label>
                      <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Phone</label>
                      <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">LinkedIn Profile</label>
                      <input type="url" name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="linkedin.com/in/you"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-600 mb-1.5 uppercase tracking-wide">Cover Letter / Why us?</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Tell us about your experience and why you'd like to join Tvam Key Software..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#006837] focus:ring-2 focus:ring-[#006837]/20 transition-all resize-none" />
                  </div>
                  {status === 'error' && (
                    <p className="text-sm text-red-600 bg-red-50 px-4 py-3 rounded-xl">Something went wrong. Please try again or email us directly.</p>
                  )}
                </div>

                {/* Sticky/Fixed Footer containing the Submit Button */}
                <div className="p-6 border-t border-slate-100 bg-slate-50 shrink-0">
                  <button type="submit" disabled={status === 'sending'}
                    className="w-full py-4 bg-[#006837] hover:bg-[#004D28] text-white font-bold rounded-full flex items-center justify-center gap-2 transition-colors disabled:opacity-60">
                    {status === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <><Send size={16} /> Submit Application</>}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
