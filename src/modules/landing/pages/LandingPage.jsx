import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function LandingPage() {
  return (
    <MainLayout footerVariant="compact">
      {/* HERO SECTION WITH LEAD FORM ABOVE THE FOLD */}
  <section className="relative py-12 lg:py-20 px-4 sm:px-8 overflow-hidden bg-slate-900 text-white">
    <div className="absolute inset-0 -z-10">
      <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85" alt="Hyderabad IT Corridor Commercial Tower" className="w-full h-full object-cover filter brightness-[0.32]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f] via-[#0f284e]/80 to-transparent"></div>
    </div>

    <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      {/* Left: Headline & Indicative Figures */}
      <div className="lg:col-span-7 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs tracking-wider uppercase font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          Pre-Leased Commercial Units in Hyderabad IT Corridor
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-white leading-tight">
          Rent from Day 1.<span className="text-blue-400">*</span><br />
          <span className="italic font-light text-slate-100">Commercial space in Hyderabad's</span><br />
          IT Corridor from <span className="text-blue-400 font-sans font-bold">Rs 30 lakhs.*</span>
        </h1>

        <p className="text-lg sm:text-xl text-blue-100/90 font-light leading-relaxed">
          Commercial ownership without a crore-level budget.
        </p>

        {/* Indicative Figures Highlight Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-[10px] uppercase tracking-wider text-blue-200 block font-semibold">Entry Point</span>
            <span className="text-xl sm:text-2xl font-bold text-white">Rs 30L*</span>
            <span className="text-[10px] text-blue-200/70 block mt-0.5">Modular unit</span>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20">
            <span className="text-[10px] uppercase tracking-wider text-emerald-300 block font-semibold">Indicative Rent</span>
            <span className="text-xl sm:text-2xl font-bold text-emerald-300">Rs 25k/mo*</span>
            <span className="text-[10px] text-blue-200/70 block mt-0.5">Day 1 cycle</span>
          </div>
          <div className="p-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 col-span-2 sm:col-span-1">
            <span className="text-[10px] uppercase tracking-wider text-blue-300 block font-semibold">Location</span>
            <span className="text-lg sm:text-xl font-bold text-white">IT Corridor</span>
            <span className="text-[10px] text-blue-200/70 block mt-0.5">Near ORR</span>
          </div>
        </div>

        <p className="text-[11px] text-blue-200/60 leading-relaxed font-light">
          *Indicative pricing & rental yield. Backed by registered Sale Deed and corporate lease framework. Subject to formal terms.
        </p>
      </div>

      {/* Right: High-Converting Lead Form Visible Above The Fold */}
      <div className="lg:col-span-5">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-2xl text-slate-900">
          <div className="mb-5 text-center sm:text-left">
            <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold block mb-1">Instant Access</span>
            <h3 className="text-2xl font-serif text-slate-900 font-bold">Get Property Breakdown</h3>
            <p className="text-xs text-slate-600 mt-1">Receive pricing sheet, unit layouts & rental schedule on WhatsApp.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Full Name *</label>
              <input type="text" name="name" required placeholder="e.g. Ramesh Reddy" className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Phone Number (Required for WhatsApp) *</label>
              <input type="tel" name="phone" required placeholder="e.g. 98490 12345" className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Email Address</label>
              <input type="email" name="email" placeholder="name@domain.com" className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 focus:bg-white rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none" />
            </div>

            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Investment Budget</label>
              <select name="budget" className="w-full bg-slate-50 border border-slate-300 focus:border-blue-600 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none cursor-pointer">
                <option value="Rs 30 Lakhs (Invesmart Entry)">Rs 30 Lakhs (Invesmart Entry Unit)</option>
                <option value="Rs 50L - Rs 1 Crore">Rs 50 Lakhs – Rs 1 Crore</option>
                <option value="Rs 1 Crore+">Above Rs 1 Crore</option>
              </select>
            </div>

            <div className="pt-2">
              <button type="submit" className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition-all cursor-pointer">
                Get Your Property Breakdown
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[10px] text-slate-500 pt-1 font-medium">
              <span>🔒 100% Confidential</span>
              <span>•</span>
              <span>Direct WhatsApp Delivery</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* 3 VERIFIED BENEFIT POINTS */}
  <section className="py-16 bg-slate-50 border-y border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-serif text-slate-900">Three Verified Investment Advantages</h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-2xl text-blue-600 mb-3">📍</div>
          <h3 className="text-lg font-serif text-slate-900 mb-2 font-bold">1. Prime IT Corridor Belt</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Positioned minutes from Financial District & HITEC City with direct signal-free access to Nehru Outer Ring Road (ORR).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-2xl text-blue-600 mb-3">📜</div>
          <h3 className="text-lg font-serif text-slate-900 mb-2 font-bold">2. Registered Title Ownership</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Every investor receives registered title deeds with undivided share of land (UDS) and complete statutory compliance.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <div className="text-2xl text-blue-600 mb-3">💼</div>
          <h3 className="text-lg font-serif text-slate-900 mb-2 font-bold">3. Structured Monthly Yields</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Designed to generate indicative rental cash flow from Day 1 backed by corporate lease agreements with regular escalations.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* SHORT TRUST SECTION */}
  <section className="py-16 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
      <span className="text-xs uppercase tracking-wider text-blue-600 font-bold block">Developer Credibility</span>
      <h2 className="text-3xl sm:text-4xl font-serif text-slate-900">Viseshta Group — Founded in 2018</h2>
      <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
        Under the leadership of <strong>Mr. Suman Babu Garaga</strong>, Viseshta Group has successfully delivered plotted gated layouts, eco-resort farmlands, and now institutional commercial hubs in Hyderabad.
      </p>
      <div className="flex justify-center gap-8 pt-4 text-xs">
        <div>
          <span className="block text-2xl font-serif text-slate-900 font-bold">2018</span>
          <span className="text-[10px] text-slate-500 uppercase font-semibold">Founded</span>
        </div>
        <div>
          <span className="block text-2xl font-serif text-blue-600 font-bold">100%</span>
          <span className="text-[10px] text-slate-500 uppercase font-semibold">Title Vetting</span>
        </div>
        <div>
          <span className="block text-2xl font-serif text-slate-900 font-bold">TS RERA</span>
          <span className="text-[10px] text-slate-500 uppercase font-semibold">Compliant</span>
        </div>
      </div>
    </div>
  </section>

  {/* REPEAT LEAD FORM & WHATSAPP CTA */}
  <section className="py-16 bg-slate-50 border-t border-slate-200">
    <div className="max-w-xl mx-auto px-4 sm:px-8 text-center">
      <h3 className="text-3xl font-serif text-slate-900 mb-2 font-bold">Ready to View Invesmart?</h3>
      <p className="text-xs text-slate-600 mb-6">Schedule a physical site visit or receive the detailed financial workbook.</p>

      <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-3 mb-6 text-left">
        <input type="text" name="name" required placeholder="Your Name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none" />
        <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:border-blue-600 focus:outline-none" />
        <button type="submit" className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition cursor-pointer">
          Get Your Property Breakdown
        </button>
      </form>

      <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4">
        <span className="text-xs text-slate-500">Prefer direct communication?</span>
        <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20saw%20your%20Invesmart%20commercial%20ad%20and%20want%20the%20property%20breakdown." target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-md">
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  {/* FOOTER & DISCLAIMER */}
    </MainLayout>
  );
}
