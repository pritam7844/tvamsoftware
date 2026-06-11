import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/layout/Section';
import Badge from '@/components/ui/Badge';
import CtaSection from '@/components/sections/CtaSection';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tvam Key Software',
  description:
    'The terms and conditions governing your use of the Tvam Key Software website and our software engineering services.',
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

export default function TermsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-[#0A0E1A] to-[#0F1929] pt-28 pb-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="ghost" className="mb-6 !bg-white/10 !text-white !border-white/20">Legal</Badge>
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Terms &amp; <span className="gradient-text">Conditions</span>
          </h1>
          <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto">
            Please read these terms carefully before using our website or services.
          </p>
          <p className="mt-4 text-sm text-slate-500">Last updated: {LAST_UPDATED}</p>
        </div>
      </section>

      <Section bg="white" containerSize="lg">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm md:text-[15px] text-slate-600 leading-relaxed mb-10">
            These Terms &amp; Conditions (&ldquo;Terms&rdquo;) govern your access to and use of{' '}
            <span className="font-semibold text-[#006837]">www.tvamkeysoftware.com</span> (the &ldquo;Site&rdquo;) and
            the software engineering, design, and consulting services provided by Tvam Key Software
            (&ldquo;Tvam Key Software&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). By using the
            Site or engaging our services, you agree to be bound by these Terms.
          </p>

          <Clause title="1. Acceptance of Terms">
            <p>By accessing the Site or entering into an engagement with us, you confirm that you are at least 18 years
              old and have the authority to accept these Terms on behalf of yourself or the entity you represent.</p>
          </Clause>

          <Clause title="2. Services">
            <p>We provide custom software development, mobile and web application engineering, UI/UX design, cloud,
              AI, and related consulting services. The specific scope, deliverables, timelines, and fees for any
              engagement will be set out in a separate proposal, statement of work, or written agreement, which
              prevails over these Terms in the event of any conflict.</p>
          </Clause>

          <Clause title="3. Intellectual Property">
            <p>All content on the Site — including text, graphics, logos, and software — is owned by or licensed to
              Tvam Key Software and is protected by applicable intellectual property laws. Ownership of custom
              deliverables produced under an engagement is governed by the relevant statement of work; unless agreed
              otherwise, ownership transfers to the client upon full payment.</p>
          </Clause>

          <Clause title="4. Client Responsibilities">
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide accurate, complete information and timely feedback required to deliver the services.</li>
              <li>Obtain all rights, licenses, and consents for materials you supply to us.</li>
              <li>Use any deliverables in compliance with applicable laws and these Terms.</li>
            </ul>
          </Clause>

          <Clause title="5. Engagement & Payment">
            <p>Fees, payment milestones, and invoicing terms are defined in the applicable proposal or statement of
              work. Unless stated otherwise, invoices are payable within the period specified therein. Late payments
              may result in suspension of work and may attract interest as permitted by law.</p>
          </Clause>

          <Clause title="6. Confidentiality">
            <p>Each party agrees to keep confidential any non-public information disclosed by the other party during an
              engagement and to use it solely for the purpose of performing the services, except where disclosure is
              required by law.</p>
          </Clause>

          <Clause title="7. Warranties & Disclaimers">
            <p>We perform our services with reasonable skill and care. Except as expressly stated in a written
              agreement, the Site and services are provided &ldquo;as is&rdquo; without warranties of any kind,
              whether express or implied, including fitness for a particular purpose and non-infringement.</p>
          </Clause>

          <Clause title="8. Limitation of Liability">
            <p>To the maximum extent permitted by law, Tvam Key Software shall not be liable for any indirect,
              incidental, special, or consequential damages, or loss of profits or data, arising out of your use of
              the Site or services. Our total aggregate liability for any engagement shall not exceed the fees paid by
              you for that engagement.</p>
          </Clause>

          <Clause title="9. Third-Party Services">
            <p>Our services may incorporate or rely on third-party tools, platforms, or APIs. We are not responsible
              for the availability, performance, or terms of such third-party services.</p>
          </Clause>

          <Clause title="10. Termination">
            <p>Either party may terminate an engagement in accordance with the terms set out in the applicable
              statement of work. Upon termination, you agree to pay for all services performed up to the effective
              date of termination.</p>
          </Clause>

          <Clause title="11. Governing Law & Jurisdiction">
            <p>These Terms are governed by the laws of India. Any disputes arising out of or in connection with these
              Terms shall be subject to the exclusive jurisdiction of the courts of Mumbai, Maharashtra, India.</p>
          </Clause>

          <Clause title="12. Changes to These Terms">
            <p>We may revise these Terms from time to time. The updated version will be posted on this page with a new
              &ldquo;Last updated&rdquo; date. Your continued use of the Site or services constitutes acceptance of
              the revised Terms.</p>
          </Clause>

          <Clause title="13. Contact Us">
            <p>For any questions regarding these Terms, please contact:</p>
            <ul className="list-none space-y-1.5">
              <li>Email: <a href="mailto:info@tvamkeysoftware.com" className="text-[#006837] font-semibold hover:underline">info@tvamkeysoftware.com</a></li>
              <li>Phone: <a href="tel:+918898489138" className="text-[#006837] font-semibold hover:underline">+91 88984 89138</a></li>
              <li>Address: Office No. 49, Annex Mall, Near Western Express Highway, Borivali East, Mumbai – 400066, Maharashtra, India</li>
            </ul>
            <p className="pt-2">
              See also our{' '}
              <Link href="/privacy-policy" className="text-[#006837] font-semibold hover:underline">Privacy Policy</Link>.
            </p>
          </Clause>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
