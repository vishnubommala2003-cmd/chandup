import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function TermsDisclaimerPage() {
  return (
    <MainLayout footerVariant="compact">
      <main className="py-16 px-4 sm:px-8 max-w-4xl mx-auto space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
    <div>
      <span className="text-[10px] uppercase tracking-[0.25em] text-blue-600 font-bold block mb-1">Statutory Compliance</span>
      <h1 className="text-3xl sm:text-4xl font-serif text-slate-900">Terms & Legal Disclaimer</h1>
      <p className="text-xs text-slate-500 mt-1">Applicable to all Viseshta Group Projects & Marketing Platforms</p>
    </div>

    <div className="space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">1. Informational Nature of Platform</h2>
        <p>
          The materials, architectural renders, unit sizing, and content displayed on this website are for general informational purposes only and do not constitute an offer of sale, financial guarantee, solicitation, or legal commitment by Viseshta Group or its management.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">2. Indicative Pricing and Rental Figures</h2>
        <p>
          All pricing notations including "From Rs 30 Lakhs*" and rental yields such as "Rs 25,000/month indicative rent*" and "Rent from Day 1*" are indicative representations based on corporate leasing market benchmarks for Grade-A commercial spaces in Hyderabad's IT corridor.
        </p>
        <p className="text-slate-500 italic">
          Viseshta Group strictly does not promise or guarantee fixed returns. Actual yields depend upon unit configuration, prevailing tenant lease rates, fit-out agreements, and market absorption.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">3. TS RERA & Statutory Approvals</h2>
        <p>
          Projects undertaken by Viseshta Group adhere to the Real Estate (Regulation and Development) Act, 2016 (RERA) and Telangana Real Estate Regulatory Authority (TS RERA) provisions. Prospective purchasers are requested to review approved sanctions, registration copies, and master plan drawings prior to signing binding contracts.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">4. Artistic Impressions & Modifications</h2>
        <p>
          Photographs, walkthrough renders, elevations, furniture layouts, and finishes are artistic impressions intended to convey architectural design concepts. The developer reserves the right to make modifications in compliance with building sanctions, structural engineering mandates, and statutory authority requirements.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="text-lg font-serif text-slate-900">5. Independent Due Diligence</h2>
        <p>
          Prospective investors are advised to exercise independent legal and financial due diligence. No oral or unwritten claims by sales intermediaries shall be binding upon Viseshta Group.
        </p>
      </section>
    </div>
  </main>
    </MainLayout>
  );
}
