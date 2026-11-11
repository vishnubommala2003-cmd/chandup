import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function CareersPage() {
  return (
    <MainLayout footerVariant="compact">
      <section className="py-16 sm:py-24 px-4 sm:px-8 border-b border-slate-200 text-center bg-slate-50">
    <div className="max-w-4xl mx-auto space-y-4">
      <span className="text-xs uppercase tracking-wider text-blue-600 font-bold block">Join Our Team</span>
      <h1 className="text-4xl sm:text-6xl font-serif text-slate-900 font-bold">Careers at Viseshta Group</h1>
      <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
        Be part of a fast-growing, high-integrity real estate development group shaping Hyderabad's commercial and residential landscape.
      </p>
    </div>
  </section>

  <section className="py-20 bg-white">
    <div className="max-w-5xl mx-auto px-4 sm:px-8 space-y-6">
      
      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs reveal-up luxury-card-hover">
        <div>
          <span className="text-[10px] text-blue-600 uppercase font-bold tracking-wider">Commercial Real Estate · Full Time</span>
          <h3 className="text-2xl font-serif text-slate-900 mt-1 font-bold">Senior Commercial Investment Advisor</h3>
          <p className="text-xs text-slate-600 mt-1 max-w-xl">
            Lead consultations for the Invesmart commercial project, interface with high-net-worth investors, IT directors, and explain commercial yield frameworks.
          </p>
          <span className="text-xs text-slate-500 block mt-2 font-medium">Experience: 3–7 Years · Location: Hyderabad</span>
        </div>
        <a href="mailto:careers@viseshtagroup.com?subject=Application: Senior Commercial Investment Advisor" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider text-center shrink-0 shadow-md">
          Apply via Email →
        </a>
      </div>

      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs reveal-up luxury-card-hover">
        <div>
          <span className="text-[10px] text-emerald-600 uppercase font-bold tracking-wider">Marketing & Growth · Full Time</span>
          <h3 className="text-2xl font-serif text-slate-900 mt-1 font-bold">Digital Marketing & Performance Lead</h3>
          <p className="text-xs text-slate-600 mt-1 max-w-xl">
            Manage Meta Ads, Google Ads, funnel optimization, and high-conversion landing page strategies for commercial property launches.
          </p>
          <span className="text-xs text-slate-500 block mt-2 font-medium">Experience: 2–5 Years · Location: Hyderabad</span>
        </div>
        <a href="mailto:careers@viseshtagroup.com?subject=Application: Digital Marketing Lead" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider text-center shrink-0 shadow-md">
          Apply via Email →
        </a>
      </div>

      <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xs reveal-up luxury-card-hover">
        <div>
          <span className="text-[10px] text-indigo-600 uppercase font-bold tracking-wider">Legal & Governance · Full Time</span>
          <h3 className="text-2xl font-serif text-slate-900 mt-1 font-bold">Legal Executive (Real Estate & RERA)</h3>
          <p className="text-xs text-slate-600 mt-1 max-w-xl">
            Assist in Title deed vetting, Sub-Registrar documentation, TS RERA compliance dockets, and corporate lease documentation.
          </p>
          <span className="text-xs text-slate-500 block mt-2 font-medium">Experience: 2–4 Years · Location: Hyderabad</span>
        </div>
        <a href="mailto:careers@viseshtagroup.com?subject=Application: Legal Executive" className="px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold uppercase tracking-wider text-center shrink-0 shadow-md">
          Apply via Email →
        </a>
      </div>

      <div className="p-8 rounded-3xl bg-blue-50 border border-blue-200 text-center">
        <h4 className="text-xl font-serif text-slate-900 mb-2 font-bold">Don't see a role matching your skill set?</h4>
        <p className="text-xs text-slate-600 mb-4">We are always eager to meet motivated professionals. Email your resume and brief introduction.</p>
        <a href="mailto:careers@viseshtagroup.com" className="text-xs text-blue-700 font-bold uppercase tracking-wider hover:underline">
          Send Resume to careers@viseshtagroup.com ↗
        </a>
      </div>

    </div>
  </section>
    </MainLayout>
  );
}
