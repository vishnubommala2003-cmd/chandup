import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function NriDeskPage() {
  return (
    <MainLayout footerVariant="compact">
  {/* SECTION 3: HERO SECTION (5-IMAGE 5s ROTATING SLIDESHOW, KEN BURNS, UPWARD TEXT, ZERO SCROLL) */}
  <section className="relative w-full h-[calc(100vh-100px)] min-h-[580px] max-h-[820px] bg-slate-950 overflow-hidden flex items-center">
    {/* Slideshow container */}
    <div id="hero-slider" className="absolute inset-0 z-0">
      <div className="hero-bg-slide active" style={{ 'backgroundImage': 'url(\'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80\')' }}></div>
      <div className="hero-bg-slide" style={{ 'backgroundImage': 'url(\'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1920&q=80\')' }}></div>
      <div className="hero-bg-slide" style={{ 'backgroundImage': 'url(\'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80\')' }}></div>
      <div className="hero-bg-slide" style={{ 'backgroundImage': 'url(\'https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1920&q=80\')' }}></div>
      <div className="hero-bg-slide" style={{ 'backgroundImage': 'url(\'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1920&q=80\')' }}></div>
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/80 to-slate-900/60 z-10"></div>
    </div>

    {/* Content Area (Zero scroll, upward animated text) */}
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full py-4">
      <div className="max-w-3xl">
        {/* Badge */}
        <div className="animate-hero-up-1 inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-blue-200 text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-3">
          <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
          <span>Global Telugu & NRI Advisory Desk · Hyderabad Commercial Space</span>
        </div>

        {/* Headline */}
        <h1 className="animate-hero-up-2 text-2xl sm:text-4xl lg:text-5xl font-serif text-white font-bold leading-tight tracking-tight mb-2">
          Rent from Day 1.* Commercial space in Hyderabad's IT Corridor from <span className="text-blue-400">Rs 30 lakhs*</span> ($36,000 USD*).
        </h1>

        {/* Subheadline */}
        <p className="animate-hero-up-3 text-xs sm:text-sm lg:text-base text-slate-200 font-light mb-4 leading-relaxed max-w-2xl">
          100% remote acquisition via Indian Consulate Power of Attorney (PoA). Full FEMA compliance, repatriable NRE/NRO rental cash flows, and turnkey tenant management.
        </p>

        {/* CTAs */}
        <div className="animate-hero-up-4 flex flex-wrap items-center gap-3 pt-1">
          <a href="#nri-form" className="px-6 py-3 text-xs uppercase tracking-wider font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-xl shadow-blue-600/30 transition-all cursor-pointer">
            Schedule NRI Consultation →
          </a>
          <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group%20NRI%20Desk,%20I%20am%20an%20NRI%20interested%20in%20Invesmart%20commercial%20space." target="_blank" rel="noreferrer" className="px-5 py-3 text-xs uppercase tracking-wider font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all flex items-center gap-2">
            <span>WhatsApp NRI Desk</span>
          </a>
        </div>

        {/* Trust Highlights */}
        <div className="animate-hero-up-5 mt-5 pt-3 border-t border-white/15 flex flex-wrap items-center gap-4 text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> Zero Travel Required (Consulate PoA)</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> FEMA / RBI NRE & NRO Compliant</span>
          <span className="flex items-center gap-1.5"><span className="text-emerald-400 font-bold">✓</span> TS RERA Approved Project</span>
        </div>
      </div>
    </div>

    {/* 5s Slide Indicator */}
    <div className="absolute bottom-4 left-4 sm:left-8 lg:left-12 z-30 flex items-center gap-2">
      <div className="slide-indicator-bar" id="hero-progress-fill"></div>
      <span className="text-[10px] text-white/80 font-mono tracking-wider" id="hero-slide-num">01 / 05 · GLOBAL NRI DESK</span>
    </div>
  </section>

  {/* SECTION 4: GLOBAL CURRENCY ENTRY POINT CONVERTER */}
  <section className="py-12 bg-slate-50 border-b border-slate-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Indicative International Currency Valuation</span>
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold mt-1">Affordable Commercial Entry for NRIs</h2>
        <p className="text-xs text-slate-600 mt-1">Own grade-A commercial real estate in Hyderabad without tie-ups of multi-crore funds.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* USD */}
        <div className="p-5 bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">United States (USD)</span>
            <span className="text-lg">🇺🇸</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 font-serif">~$36,000 USD*</div>
          <div className="text-xs text-slate-600 mt-1">Starting ticket (~₹30 Lakhs*)</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-2">Rental: ~$300/mo indicative*</div>
        </div>

        {/* AED */}
        <div className="p-5 bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">UAE / Gulf (AED)</span>
            <span className="text-lg">🇦🇪</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 font-serif">~132,000 AED*</div>
          <div className="text-xs text-slate-600 mt-1">Starting ticket (~₹30 Lakhs*)</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-2">Rental: ~1,100 AED/mo indicative*</div>
        </div>

        {/* GBP */}
        <div className="p-5 bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">United Kingdom (GBP)</span>
            <span className="text-lg">🇬🇧</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 font-serif">~£28,500 GBP*</div>
          <div className="text-xs text-slate-600 mt-1">Starting ticket (~₹30 Lakhs*)</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-2">Rental: ~£240/mo indicative*</div>
        </div>

        {/* SGD */}
        <div className="p-5 bg-white border border-slate-200 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-slate-500 uppercase">Singapore (SGD)</span>
            <span className="text-lg">🇸🇬</span>
          </div>
          <div className="text-2xl font-bold text-blue-700 font-serif">~48,000 SGD*</div>
          <div className="text-xs text-slate-600 mt-1">Starting ticket (~₹30 Lakhs*)</div>
          <div className="text-[11px] text-emerald-600 font-semibold mt-2">Rental: ~400 SGD/mo indicative*</div>
        </div>
      </div>
      <p className="text-[10px] text-slate-400 text-center mt-3">*Currencies calculated at indicative benchmark forex rates. Actual transactions executed in Indian Rupees (INR) as mandated by RBI / FEMA guidelines.</p>
    </div>
  </section>

  {/* SECTION 5: 4 CORE PILLARS OF NRI COMMERCIAL ADVISORY */}
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Enterprise NRI Governance</span>
        <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold mt-1">The 4 Pillars of Hassle-Free NRI Ownership</h2>
        <p className="text-sm text-slate-600 mt-2">We handle everything on the ground so you don't have to take leave or fly to Hyderabad.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Pillar 1 */}
        <div className="p-8 bg-slate-50 border-2 border-slate-200 hover:border-blue-600 transition shadow-sm">
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
            01
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Remote Power of Attorney (PoA) Assistance</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            You do not need to fly to India. We assist you with drafting a special Power of Attorney (PoA) that can be attested at your nearest Indian Embassy or Consulate (in New York, San Francisco, Dubai, London, etc.) authorizing your chosen representative or our designated legal team for the registered sale deed.
          </p>
          <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Complete PoA drafting according to Telangana Registration Act</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Guidance on Indian Consulate attestation and adjudication in Hyderabad</li>
          </ul>
        </div>

        {/* Pillar 2 */}
        <div className="p-8 bg-slate-50 border-2 border-slate-200 hover:border-blue-600 transition shadow-sm">
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
            02
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">FEMA & RBI NRE/NRO Account Banking</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            All investments comply strictly with the Foreign Exchange Management Act (FEMA). We facilitate bank inward remittances via authorized dealer banks, obtaining Foreign Inward Remittance Certificates (FIRC) to guarantee that both rental income and future capital gains remain 100% legally repatriable.
          </p>
          <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Up to USD $1,000,000 per financial year repatriable under RBI guidelines</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Inward remittance guidance and FIRC procurement</li>
          </ul>
        </div>

        {/* Pillar 3 */}
        <div className="p-8 bg-slate-50 border-2 border-slate-200 hover:border-blue-600 transition shadow-sm">
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
            03
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">Turnkey Leasing & Day 1 Rental Cash Flow</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            Forget about tenant screening, rent collection delays, or maintenance headaches from overseas. With Invesmart's commercial structure, rental begins from Day 1*, credited straight into your NRE or NRO account on the specified date of every month.
          </p>
          <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Direct electronic monthly rent crediting with automated rent slips</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Comprehensive corporate tenant management and facility upkeep</li>
          </ul>
        </div>

        {/* Pillar 4 */}
        <div className="p-8 bg-slate-50 border-2 border-slate-200 hover:border-blue-600 transition shadow-sm">
          <div className="w-12 h-12 bg-blue-600 text-white flex items-center justify-center font-bold text-lg mb-4">
            04
          </div>
          <h3 className="text-xl font-serif font-bold text-slate-900 mb-2">DTAA & Lower Tax Deduction (TDS) Guidance</h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            India has Double Taxation Avoidance Agreements (DTAA) with the US, UAE, UK, Singapore, Canada, and Australia. Our empanelled chartered accountants assist you in applying for lower TDS deduction certificates (Form 13) under Section 197 of the Income Tax Act so you avoid excess tax withholding.
          </p>
          <ul className="text-xs text-slate-700 space-y-1.5 font-medium">
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Tax credit benefits in your country of residence under DTAA</li>
            <li className="flex items-center gap-2"><span className="text-blue-600">▪</span> Annual tax statement and Form 16A generation for filing</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 6: 4-STEP ZERO-TRAVEL ROADMAP */}
  <section className="py-16 bg-slate-900 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-400">Zero Travel Required</span>
        <h2 className="text-3xl font-serif font-bold text-white mt-1">4-Step Remote Acquisition Process</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-white/5 border border-white/10">
          <span className="text-3xl font-bold text-blue-400 font-mono">01</span>
          <h4 className="text-base font-bold mt-2 mb-1">Live Video Tour</h4>
          <p className="text-xs text-slate-300">Schedule a 1-on-1 virtual walkthrough and 4K live drone site inspection with our commercial advisory director.</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10">
          <span className="text-3xl font-bold text-blue-400 font-mono">02</span>
          <h4 className="text-base font-bold mt-2 mb-1">Title & RERA Verification</h4>
          <p className="text-xs text-slate-300">Receive certified digital copies of TS RERA registration, GHMC building sanction, and 30-year link document search report.</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10">
          <span className="text-3xl font-bold text-blue-400 font-mono">03</span>
          <h4 className="text-base font-bold mt-2 mb-1">Consulate PoA & Remittance</h4>
          <p className="text-xs text-slate-300">Execute Indian Consulate PoA from your city and transfer funds via FEMA-compliant NRE/NRO banking channels.</p>
        </div>

        <div className="p-6 bg-white/5 border border-white/10">
          <span className="text-3xl font-bold text-blue-400 font-mono">04</span>
          <h4 className="text-base font-bold mt-2 mb-1">Registered Deed & Rent</h4>
          <p className="text-xs text-slate-300">Receive registered freehold sale deed via courier, and start receiving Day 1 rental cash flows directly into your bank.</p>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 7: TIMEZONE CONSULTATION & NRI REGISTRATION FORM (SHARP DESIGN, NO BORDER RADIUS, CATEGORY SPACING) */}
  <section id="nri-form" className="py-20 bg-white">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="border-2 border-slate-900 p-8 sm:p-12 bg-white shadow-2xl">
        <div className="text-center max-w-2xl mx-auto mb-10 pb-6 border-b border-slate-200">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Direct Senior Advisor Access</span>
          <h2 className="text-3xl sm:text-4xl font-serif text-slate-900 font-bold mt-1">Book Your NRI Commercial Advisory Session</h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Select your timezone for a confidential 1-on-1 Zoom or WhatsApp call with our Head of NRI Portfolio Investments.
          </p>
        </div>

        <form action="thank-you.html" method="GET" className="space-y-6">
          {/* CATEGORY 1: INVESTOR PROFILE */}
          <div className="border border-slate-200 p-5 bg-slate-50/70">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 inline-block"></span>
                Category 01 · Global Contact Info
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Direct Verification</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Your Full Name *</label>
                <input type="text" name="name" required placeholder="Mr. / Ms. NRI Investor" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">WhatsApp Number (with Country Code) *</label>
                <input type="tel" name="phone" required placeholder="+1 (415) 555-0199 / +971 50 123 4567" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition" />
              </div>
            </div>
          </div>

          {/* CATEGORY 2: LOCATION & TIMEZONE */}
          <div className="border border-slate-200 p-5 bg-slate-50/70" id="nri-schedule">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 inline-block"></span>
                Category 02 · Country of Residence & Timezone
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Convenient Time</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Current Country of Residence *</label>
                <select name="country" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer transition">
                  <option value="United States (USA)">United States (USA)</option>
                  <option value="United Arab Emirates (UAE / Dubai)">United Arab Emirates (UAE / Dubai)</option>
                  <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Canada">Canada</option>
                  <option value="Saudi Arabia / Qatar / Kuwait / Oman">Gulf (Saudi / Qatar / Kuwait / Oman)</option>
                  <option value="Australia / New Zealand">Australia / New Zealand</option>
                  <option value="Other International">Other International</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Preferred Consultation Slot *</label>
                <select name="contact_time" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer transition">
                  <option value="US Morning / IST Evening (8:00 PM - 11:30 PM IST)">US Morning / IST Evening (8:00 PM - 11:30 PM IST)</option>
                  <option value="US Evening / IST Morning (7:00 AM - 10:00 AM IST)">US Evening / IST Morning (7:00 AM - 10:00 AM IST)</option>
                  <option value="Gulf Time Evening (6:00 PM - 9:00 PM GST)">Gulf Time Evening (6:00 PM - 9:00 PM GST)</option>
                  <option value="UK Afternoon / IST Late Evening">UK Afternoon / IST Late Evening</option>
                  <option value="Singapore / SGT Daytime">Singapore / SGT Daytime</option>
                  <option value="Immediate WhatsApp Message Only">Immediate WhatsApp Message Only</option>
                </select>
              </div>
            </div>
          </div>

          {/* CATEGORY 3: BUDGET & EMAIL */}
          <div className="border border-slate-200 p-5 bg-slate-50/70">
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 inline-block"></span>
                Category 03 · Email & Allocation Budget
              </span>
              <span className="text-[10px] text-slate-400 font-medium">Tailored Financials</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Official Email Address *</label>
                <input type="email" name="email" required placeholder="investor@domain.com" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none transition" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Target Commercial Budget Range *</label>
                <select name="budget" className="w-full bg-white border border-slate-300 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none cursor-pointer transition">
                  <option value="Rs 30L - Rs 50L (~$36K - $60K USD)">Rs 30L – Rs 50L (~$36K – $60K USD)</option>
                  <option value="Rs 50L - Rs 1 Cr (~$60K - $120K USD)">Rs 50L – Rs 1 Cr (~$60K – $120K USD)</option>
                  <option value="Rs 1 Cr - Rs 3 Cr (~$120K - $360K USD)">Rs 1 Cr – Rs 3 Cr (~$120K – $360K USD)</option>
                  <option value="Above Rs 3 Cr (Corporate Floor / Portfolio)">Above Rs 3 Cr (Corporate Floor / Portfolio)</option>
                </select>
              </div>
            </div>
          </div>

          {/* CATEGORY 4: CONSENT & SUBMISSION */}
          <div className="space-y-4 pt-2">
            <div className="flex items-start gap-3">
              <input type="checkbox" id="nriConsent" required defaultChecked className="mt-0.5 w-4 h-4 text-blue-600 focus:ring-0 border-slate-300 cursor-pointer" />
              <label htmlFor="nriConsent" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
                I consent to receive the Invesmart NRI Financial Docket, TS RERA compliance documents, and PoA remote registration guidelines via WhatsApp & Email.
              </label>
            </div>

            <button type="submit" className="w-full py-4 text-xs uppercase tracking-widest font-bold bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 btn-glow-pulse transition cursor-pointer flex items-center justify-center gap-2">
              <span>Book Confidential NRI Consultation →</span>
            </button>

            <div className="flex items-center justify-between text-[10px] text-slate-500 pt-2 border-t border-slate-100">
              <span>🔒 100% Confidential · Strict Non-Disclosure Policy</span>
              <span className="text-blue-600 font-semibold">Direct Director Access</span>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  {/* SECTION 8: FREQUENTLY ASKED NRI QUESTIONS */}
  <section className="py-16 bg-slate-50 border-t border-slate-200">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">Clarity & Compliance</span>
        <h2 className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold mt-1">Frequently Asked NRI Questions</h2>
      </div>

      <div className="space-y-3">
        {/* FAQ 1 */}
        <div className="faq-item border border-slate-200 bg-white">
          <button type="button" className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900" >
            <span>Can an NRI legally purchase commercial property in Hyderabad?</span>
            <span className="text-blue-600 text-lg font-mono leading-none">+</span>
          </button>
          <div className="faq-content px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 hidden leading-relaxed">
            Yes. Under general RBI permission (FEMA guidelines), Non-Resident Indians (NRIs) and Overseas Citizens of India (OCIs) can freely purchase any commercial or residential property in India. No prior approval from the Reserve Bank of India is required.
          </div>
        </div>

        {/* FAQ 2 */}
        <div className="faq-item border border-slate-200 bg-white">
          <button type="button" className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900" >
            <span>Can rental income and capital gains be repatriated to my overseas bank?</span>
            <span className="text-blue-600 text-lg font-mono leading-none">+</span>
          </button>
          <div className="faq-content px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 hidden leading-relaxed">
            Yes. Rental income credited to an NRO account is fully repatriable after payment of applicable Indian taxes (supported by Chartered Accountant Form 15CA/15CB). Furthermore, sale proceeds can be remitted abroad up to USD $1,000,000 per financial year under RBI's Liberalized Remittance Scheme.
          </div>
        </div>

        {/* FAQ 3 */}
        <div className="faq-item border border-slate-200 bg-white">
          <button type="button" className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900" >
            <span>Do I need to visit India for the property registration?</span>
            <span className="text-blue-600 text-lg font-mono leading-none">+</span>
          </button>
          <div className="faq-content px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 hidden leading-relaxed">
            No physical presence is required. You can execute a Specific Power of Attorney (PoA) in favor of your trusted family member or our legal counsel. The PoA is attested at your nearest Indian Embassy/Consulate and then adjudicated in Hyderabad for the Sub-Registrar Office sale deed registration.
          </div>
        </div>

        {/* FAQ 4 */}
        <div className="faq-item border border-slate-200 bg-white">
          <button type="button" className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-slate-900" >
            <span>How does "Rent from Day 1*" work for international buyers?</span>
            <span className="text-blue-600 text-lg font-mono leading-none">+</span>
          </button>
          <div className="faq-content px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 border-t border-slate-100 hidden leading-relaxed">
            From the execution of your agreement, indicative rental accruals commence. Our asset management framework credits your rental disbursements directly into your NRE or NRO bank account on a fixed monthly date, accompanied by electronic payment vouchers and TDS certificates.
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* SECTION 9: FOOTER */}
    </MainLayout>
  );
}
