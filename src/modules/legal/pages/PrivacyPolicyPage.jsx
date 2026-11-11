import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function PrivacyPolicyPage() {
  return (
    <MainLayout footerVariant="compact">
      <main className="py-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
    <div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold block mb-1">Legal Information</span>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-900">Privacy Policy</h1>
      <p className="text-xs text-slate-500 mt-1">Last Updated: November 2026</p>
    </div>

    <div className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">1. Introduction</h2>
        <p>
          Viseshta Group ("we", "us", or "our"), founded in 2018 in Hyderabad, values the privacy of our website visitors, clients, and prospective property investors. This Privacy Policy outlines how we collect, use, and safeguard personal information submitted across our digital platforms, including inquiries regarding Invesmart, Palm Valley, Teak Village, and Vistara Valley.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">2. Information We Collect</h2>
        <p>When you request property breakdowns, brochures, or site visits through our enquiry forms, we collect:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Full name and contact details (telephone number, WhatsApp number, email address)</li>
          <li>Investment preferences, desired unit sizing, and budget range</li>
          <li>Preferred times of contact and communication channel preferences</li>
          <li>Technical data such as IP address and browser cookies to improve platform functionality</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">3. Purpose and Use of Data</h2>
        <p>We use collected data solely to:</p>
        <ul className="list-disc pl-5 space-y-1 text-slate-600">
          <li>Transmit requested property breakdowns, pricing sheets, and floor plans via Email or WhatsApp</li>
          <li>Coordinate verified site visits to our development locations in Greater Hyderabad</li>
          <li>Provide statutory RERA compliance dockets and project progress updates</li>
          <li>Respond directly to customer inquiries and service requests</li>
        </ul>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">4. Confidentiality & Non-Disclosure</h2>
        <p>
          We maintain a strict zero-spam, non-disclosure policy. Your personal information is never sold, leased, or traded to unauthorized third-party marketing brokers. Data is accessible solely to authorized Viseshta Group investment consultants.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">5. Opt-Out and Contact</h2>
        <p>
          You may withdraw consent to receive communications at any time by replying "STOP" on WhatsApp or sending an email to <a href="mailto:privacy@viseshtagroup.com" className="text-blue-600 font-semibold underline">privacy@viseshtagroup.com</a>.
        </p>
      </section>
    </div>
  </main>
    </MainLayout>
  );
}
