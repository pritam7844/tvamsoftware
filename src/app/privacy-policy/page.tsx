import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Privacy Policy | Tvam Key Software',
  description:
    'How Tvam Key Software collects, uses, stores, and protects your personal information across our website and engagements.',
};

const LAST_UPDATED = '11 June 2026';

function Clause({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="text-xl md:text-2xl font-extrabold text-[#0F172A] mb-3">{title}</h2>
      <div className="space-y-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">{children}</div>
    </div>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Your privacy matters to us. This policy explains what we collect and how we use it.
          </p>
          <p className="mt-4 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <Section bg="white" containerSize="lg">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-10">
            This Privacy Policy describes how Tvam Key Software (&ldquo;Tvam Key Software&rdquo;, &ldquo;we&rdquo;,
            &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, and safeguards your information when you visit{' '}
            <span className="font-semibold text-[#006837]">www.tvamkeysoftware.com</span> (the &ldquo;Site&rdquo;) or
            engage our software engineering services. By using the Site, you agree to the practices described below.
          </p>

          <Clause title="1. Information We Collect">
            <p><strong className="text-[#0F172A]">Information you provide.</strong> When you submit a contact form,
              request a quote, apply for a role, or otherwise communicate with us, we may collect your name, email
              address, phone number, company details, and any information contained in your message, resume, or
              project brief.</p>
            <p><strong className="text-[#0F172A]">Information collected automatically.</strong> When you browse the
              Site, we may automatically collect your IP address, browser type, device information, pages viewed,
              referring URLs, and similar usage data through cookies and analytics tools.</p>
          </Clause>

          <Clause title="2. How We Use Your Information">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to enquiries, quotes, and support requests.</li>
              <li>To deliver, manage, and improve our software development services and engagements.</li>
              <li>To process and evaluate job and internship applications.</li>
              <li>To analyse and improve the performance, content, and usability of our Site.</li>
              <li>To send relevant updates or marketing communications where you have consented.</li>
              <li>To comply with legal obligations and protect our rights.</li>
            </ul>
          </Clause>

          <Clause title="3. Cookies & Tracking Technologies">
            <p>We use cookies and similar technologies to remember your preferences, understand how the Site is used,
              and improve your experience. You can control or disable cookies through your browser settings, though
              some features of the Site may not function correctly as a result.</p>
          </Clause>

          <Clause title="4. How We Share Information">
            <p>We do not sell your personal information. We may share it only with:</p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Trusted service providers (e.g. hosting, analytics, email) who process data on our behalf under
                confidentiality obligations.</li>
              <li>Authorities or third parties where required by law, regulation, or legal process.</li>
              <li>A successor entity in connection with a merger, acquisition, or asset transfer.</li>
            </ul>
          </Clause>

          <Clause title="5. Data Security">
            <p>We implement reasonable technical and organisational measures to protect your information against
              unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over
              the internet is completely secure, and we cannot guarantee absolute security.</p>
          </Clause>

          <Clause title="6. Data Retention">
            <p>We retain personal information only for as long as necessary to fulfil the purposes outlined in this
              policy, to comply with our legal obligations, resolve disputes, and enforce our agreements.</p>
          </Clause>

          <Clause title="7. Your Rights">
            <p>Subject to applicable law, you may have the right to access, correct, update, or delete your personal
              information, and to withdraw consent to marketing communications at any time. To exercise these rights,
              contact us using the details below.</p>
          </Clause>

          <Clause title="8. Third-Party Links">
            <p>Our Site may contain links to third-party websites. We are not responsible for the privacy practices or
              content of those websites and encourage you to review their privacy policies.</p>
          </Clause>

          <Clause title="9. Children's Privacy">
            <p>Our Site and services are not directed to individuals under the age of 18, and we do not knowingly
              collect personal information from children.</p>
          </Clause>

          <Clause title="10. Changes to This Policy">
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with a
              revised &ldquo;Last updated&rdquo; date. We encourage you to review this page periodically.</p>
          </Clause>

          <Clause title="11. Contact Us">
            <p>If you have any questions about this Privacy Policy or how we handle your data, please reach out:</p>
            <ul className="list-none space-y-1.5">
              <li>Email: <a href="mailto:info@tvamkeysoftware.com" className="text-[#006837] font-semibold hover:underline">info@tvamkeysoftware.com</a></li>
              <li>Phone: <a href="tel:+918898489138" className="text-[#006837] font-semibold hover:underline">+91 88984 89138</a></li>
              <li>Address: Office No. 49, Annex Mall, Near Western Express Highway, Borivali East, Mumbai – 400066, Maharashtra, India</li>
            </ul>
            <p className="pt-2">
              See also our{' '}
              <Link href="/terms" className="text-[#006837] font-semibold hover:underline">Terms &amp; Conditions</Link>.
            </p>
          </Clause>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
