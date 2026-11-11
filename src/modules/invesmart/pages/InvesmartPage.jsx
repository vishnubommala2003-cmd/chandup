import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';
import { useModal } from '@contexts/ModalContext';

export default function InvesmartPage() {
  const { openContactModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
      caption: "INVESMART — Grade-A IT Workspace Tower · Financial District"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85",
      caption: "FLOOR PLATES — 100% Pre-Leased Institutional Quality"
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=85",
      caption: "YIELD MECHANICS — 9.2% Net Rental Yield + Capital Growth"
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85",
      caption: "CORPORATE TENANTS — Long-Term Blue-Chip Leases"
    },
    {
      src: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&q=85",
      caption: "LOCATION ADVANTAGE — Arterial Metro & Airport Connectivity"
    }
  ];

  const startSlideTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, 5000); // changes smoothly every 5 seconds
  };

  useEffect(() => {
    startSlideTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (idx) => {
    setCurrentSlide(idx);
    startSlideTimer();
  };

  return (
    <MainLayout>
      {/* 1. HERO SECTION WITH 5-IMAGE 5s SLIDESHOW & QUICK ENQUIRY FORM */}
      <section className="hero-section relative isolate z-0 min-h-[90vh] flex flex-col justify-center pt-10 sm:pt-14 pb-16 px-4 sm:px-8 lg:px-12 overflow-hidden border-b border-slate-200">
        {/* 5-Image Slideshow Background */}
        <div id="hero-bg-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {heroSlides.map((slide, idx) => (
            <div key={idx} className={`hero-slide ${currentSlide === idx ? 'active' : ''}`}>
              <img 
                src={slide.src} 
                alt={slide.caption} 
                className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
              />
            </div>
          ))}

          {/* Elegant balanced blue overlay allowing images to shine through with strong contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a192f]/70 via-[#0a192f]/40 to-[#081528]/50 z-[3] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,transparent_75%)] z-[3] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="invesmart-hero-item inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 border border-blue-400/40 text-blue-300 text-xs tracking-wider uppercase font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Pre-Leased Commercial Units Available
            </div>

            <h1 className="invesmart-hero-item text-4xl sm:text-6xl lg:text-7xl font-serif text-white leading-tight">
              Rent from Day 1.<span className="text-blue-400">*</span><br />
              <span className="italic font-light text-slate-100">Commercial space in Hyderabad's</span><br />
              IT Corridor from <span className="text-blue-400 font-sans font-bold">Rs 30 lakhs.*</span>
            </h1>

            <p className="invesmart-hero-item text-base sm:text-xl text-blue-100/90 font-light max-w-xl leading-relaxed">
              Commercial ownership without a crore-level budget. Grade-A corporate office asset engineered for stable rental yields and capital growth.
            </p>

            {/* Quick highlights */}
            <div className="invesmart-hero-item flex flex-wrap gap-3 pt-2 text-xs">
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">📍 Hyderabad IT Growth Belt</span>
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">🏢 Grade-A Building Sanctions</span>
              <span className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium">📜 TS RERA Compliant</span>
            </div>

            {/* 5 Slide Indicators & Dynamic Caption */}
            <div className="invesmart-hero-item flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-white/15">
              <div className="flex items-center gap-3">
                <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-mono">
                  {String(currentSlide + 1).padStart(2, '0')} / 05
                </span>
                <div className="flex items-center gap-1.5">
                  {[0, 1, 2, 3, 4].map(idx => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleDotClick(idx)}
                      className={`hero-dot cursor-pointer ${currentSlide === idx ? 'active' : ''}`}
                      aria-label={`Slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-blue-300 font-medium transition-all duration-300">
                {heroSlides[currentSlide].caption}
              </div>
            </div>
          </div>

      {/* Right: Quick Hero Enquiry Form */}
      <div className="lg:col-span-5 invesmart-hero-item" id="enquire">
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl">
          <div className="mb-5">
            <span className="text-[10px] uppercase tracking-wider text-blue-600 font-bold block mb-1">Priority Desk</span>
            <h3 className="text-2xl font-serif text-slate-900 font-bold">Instant Property Breakdown</h3>
            <p className="text-xs text-slate-600">Fill below to get the official pricing sheet and rental model.</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-4">
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Full Name *</label>
              <input type="text" name="name" required placeholder="Your Name" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Phone Number (WhatsApp) *</label>
              <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none" />
            </div>
            <div>
              <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Unit Sizing Preference</label>
              <select name="unit_pref" className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-900 focus:outline-none cursor-pointer">
                <option value="Modular Commercial Unit (Rs 30L*)">Modular Commercial Unit (From Rs 30L*)</option>
                <option value="Executive Suite (~750 sq.ft)">Executive Suite (~750 sq.ft)</option>
                <option value="Corporate Wing (1500+ sq.ft)">Corporate Wing (1500+ sq.ft)</option>
                <option value="Full Floor Plate (5000+ sq.ft)">Full Floor Plate (5000+ sq.ft)</option>
              </select>
            </div>
            <button type="submit" className="w-full py-3.5 rounded-full text-xs uppercase tracking-wider font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md shadow-blue-500/25 transition cursor-pointer">
              Get Breakdown Sheet Now →
            </button>
            <p className="text-[10px] text-slate-500 text-center">Direct WhatsApp delivery available upon request.</p>
          </form>
        </div>
      </div>
    </div>
  </section>


  {/* Investment Categories Navigator Bar */}
  <nav id="category-nav-bar" className="relative z-20 bg-[#0e0d0b] border-y border-white/10 py-2.5 px-3 sm:px-6 shadow-lg overflow-x-auto no-scrollbar">
    <div className="max-w-7xl mx-auto flex items-center justify-start md:justify-center gap-2 text-xs uppercase tracking-[0.14em] whitespace-nowrap">
      <button type="button" className="category-btn active px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="all">
        <span>✦ All Categories</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="pillars">
        <span>🏛️ 4 Pillars</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="rental">
        <span>📈 Rental Yields</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="specs">
        <span>🏢 Specifications</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="plans">
        <span>📐 Unit Plans</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="amenities">
        <span>✨ Amenities</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="journey">
        <span>🚀 4-Step Process</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="calculator">
        <span>🧮 ROI Calculator</span>
      </button>
      <button type="button" className="category-btn px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer text-[11px]" data-target="faq">
        <span>❓ FAQs</span>
      </button>
    </div>
  </nav>


  {/* 2. PRICE AND RENTAL QUICK FACTS */}
  <section id="metrics" className="py-12 bg-slate-50 border-b border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center category-stagger-group" id="stats-group">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs category-reveal-item">
          <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Entry Ticket</span>
          <span className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">Rs 30 Lakhs<span className="text-blue-600">*</span></span>
          <span className="text-[11px] text-blue-600 font-semibold block mt-1">Starting Unit Price</span>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs category-reveal-item">
          <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Indicative Rental</span>
          <span className="text-2xl sm:text-3xl font-serif text-emerald-600 font-bold">Rs 25,000<span className="text-xs font-sans">/mo*</span></span>
          <span className="text-[11px] text-emerald-600 font-semibold block mt-1">Estimated Yield Payout</span>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs category-reveal-item">
          <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Rent Commencement</span>
          <span className="text-2xl sm:text-3xl font-serif text-slate-900 font-bold">Day 1<span className="text-blue-600">*</span></span>
          <span className="text-[11px] text-slate-500 font-semibold block mt-1">Upon Corporate Handover</span>
        </div>
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs category-reveal-item">
          <span className="text-xs uppercase tracking-wider text-slate-500 block mb-1">Asset Grade</span>
          <span className="text-2xl sm:text-3xl font-serif text-blue-600 font-bold">Grade-A</span>
          <span className="text-[11px] text-slate-500 font-semibold block mt-1">High-Speed DG & HVAC</span>
        </div>
      </div>
    </div>
  </section>

  {/* 3. PROJECT OVERVIEW */}
  <section id="overview" className="py-24 bg-white category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 category-reveal-item">
          <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold block">Architectural Overview</span>
          <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">
            Designed for Hyderabad's Next Wave of Enterprise Growth
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed">
            Invesmart is conceived as a contemporary, energy-efficient corporate IT and commercial destination. Featuring a high-performance double-glazed glass envelope, expansive floor plates with minimal column intrusion, and cutting-edge building management systems, it offers occupiers an elite work environment.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            Located within Hyderabad’s high-growth IT and BFSI investment corridor, the building caters to multinational back offices, software product firms, clinical research companies, and fintech institutions requiring Grade-A infrastructure.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Structure</span>
              <span className="text-slate-900 font-semibold">B + G + 9 Commercial Floors</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Ceiling Height</span>
              <span className="text-slate-900 font-semibold">3.8 Meters Floor-to-Ceiling</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Power Infrastructure</span>
              <span className="text-slate-900 font-semibold">100% Dual DG Redundancy</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
              <span className="text-slate-500 uppercase text-[10px] font-bold block">Parking</span>
              <span className="text-slate-900 font-semibold">Multi-Level Stacker & Basement</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 category-reveal-item">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1000&q=80" alt="Invesmart Commercial Interior Workspace" className="w-full h-[450px] object-cover" />
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 4. WHY INVEST SECTION */}
  <section id="pillars" className="py-24 bg-slate-50 border-t border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Investment Thesis</span>
        <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Why Invesmart Stands Out</h2>
        <p className="category-reveal-item text-sm text-slate-600 mt-3">Institutional real estate principles applied to empower individual investors.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="p-8 rounded-2xl bg-white border border-slate-200 card-hover shadow-xs category-reveal-item">
          <div className="text-3xl text-blue-600 mb-4">🛡</div>
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Registered Tangible Ownership</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Unlike paper financial products, you receive a legally registered Sale Deed and undivided share of land (UDS) for your commercial space at the Sub-Registrar Office.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-slate-200 card-hover shadow-xs category-reveal-item">
          <div className="text-3xl text-blue-600 mb-4">📊</div>
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Corporate Grade Leasing</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Corporate tenants typically sign 5 to 9-year long-term leases with 15% escalation clauses every 3 years, offering inflation-hedging income potential.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-white border border-slate-200 card-hover shadow-xs category-reveal-item">
          <div className="text-3xl text-blue-600 mb-4">🚀</div>
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Dual Wealth Engine</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Benefit from both ongoing monthly indicative rental yields and the long-term capital appreciation of prime commercial land in Hyderabad's premier growth corridor.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 5. RENTAL EXPLANATION WITH CLEAR DISCLAIMER */}
  <section id="rental" className="py-24 bg-white border-t border-slate-200 category-section">
    <div className="max-w-5xl mx-auto px-4 sm:px-8">
      <div className="p-8 sm:p-12 rounded-3xl bg-blue-50 border border-blue-200 category-reveal-item shadow-sm">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-700 font-bold mb-2 block">Yield Mechanics</span>
        <h2 className="category-reveal-item text-3xl sm:text-4xl font-serif text-slate-900 mb-6">How the Indicative Rental Framework Operates</h2>
        
        <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            Commercial real estate returns are dictated by tenant quality, fit-out specifications, and the net leasable area. At Invesmart, our leasing management division works with leading institutional brokerage houses to secure vetted corporate occupants.
          </p>
          <div className="p-6 rounded-2xl bg-white border border-blue-200 space-y-3 shadow-xs">
            <h4 className="text-slate-900 font-bold text-sm">Example Scenario (Indicative Calculation):</h4>
            <div className="grid sm:grid-cols-3 gap-4 text-xs">
              <div>
                <span className="text-slate-500 block">Investment Outlay:</span>
                <span className="text-base font-bold text-slate-900">Rs 30,00,000*</span>
              </div>
              <div>
                <span className="text-slate-500 block">Indicative Monthly Payout:</span>
                <span className="text-base font-bold text-emerald-600">~Rs 25,000 / month*</span>
              </div>
              <div>
                <span className="text-slate-500 block">Gross Indicative Yield:</span>
                <span className="text-base font-bold text-blue-700">~10.0% p.a.*</span>
              </div>
            </div>
          </div>
          <p className="text-[11px] text-slate-500 italic pt-2">
            *Mandatory Disclaimer: The rental figures quoted are indicative projections based on current micro-market leasing benchmarks for Grade-A commercial office space in Hyderabad. Yields are not guaranteed and are subject to final tenant lease terms, vacancy periods, and government taxes.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 6. LOCATION ADVANTAGES */}
  <section id="locations" className="py-24 bg-slate-50 border-t border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Micro-Market Value</span>
        <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Location Advantages</h2>
        <p className="category-reveal-item text-sm text-slate-600 mt-3">Strategic proximity to Hyderabad's biggest technology and employment hubs.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs category-reveal-item">
          <div className="text-2xl text-blue-600 mb-3">🏢</div>
          <h4 className="text-lg font-serif text-slate-900 mb-1 font-bold">HITEC City (12 Mins)</h4>
          <p className="text-xs text-slate-600">Cyber Towers, Mindspace, and major enterprise campuses.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs category-reveal-item">
          <div className="text-2xl text-blue-600 mb-3">🏦</div>
          <h4 className="text-lg font-serif text-slate-900 mb-1 font-bold">Financial District (8 Mins)</h4>
          <p className="text-xs text-slate-600">Waverock, multinational banking headquarters, and US Consulate.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs category-reveal-item">
          <div className="text-2xl text-blue-600 mb-3">🚇</div>
          <h4 className="text-lg font-serif text-slate-900 mb-1 font-bold">Raidurg Metro (12 Mins)</h4>
          <p className="text-xs text-slate-600">Direct Blue Line rapid transit to Secunderabad and Hyderabad CBD.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs category-reveal-item">
          <div className="text-2xl text-blue-600 mb-3">✈</div>
          <h4 className="text-lg font-serif text-slate-900 mb-1 font-bold">RGIA Airport (32 Mins)</h4>
          <p className="text-xs text-slate-600">Smooth high-speed transit via Nehru Outer Ring Road.</p>
        </div>
      </div>
    </div>
  </section>

  {/* 7. AMENITIES AND SPECIFICATIONS */}
  <section id="specs" className="py-24 bg-white border-t border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Grade-A Benchmark</span>
        <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Amenities & Specifications</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">⚡ 100% DG Power Backup</h4>
          <p className="text-xs text-slate-600">Fully redundant dual DG sets for unhindered 24/7 IT enterprise operations.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">🛗 High-Speed Elevators</h4>
          <p className="text-xs text-slate-600">Passenger elevators with destination control and dedicated service/fire lift.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">❄ Centralized VRV HVAC</h4>
          <p className="text-xs text-slate-600">Energy-efficient climate control with individualized floor-by-floor metering.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">🛡 3-Tier Security</h4>
          <p className="text-xs text-slate-600">24/7 CCTV surveillance, RFID vehicular access barrier, and boom gates.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">☕ Rooftop Executive Lounge</h4>
          <p className="text-xs text-slate-600">Cafeteria, open breakout terrace, and landscaped networking spaces.</p>
        </div>
        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">
          <h4 className="text-lg font-serif text-slate-900 mb-2 font-bold">🔋 EV Charging Bays</h4>
          <p className="text-xs text-slate-600">Dedicated electric vehicle charging stations across multi-level basements.</p>
        </div>
      </div>
    </div>
  </section>

  {/* 8. FLOOR PLANS AND UNIT OPTIONS */}
  <section id="plans" className="py-24 bg-slate-50 border-t border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Configuration Options</span>
          <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Floor Plans & Unit Options</h2>
        </div>
        <button onClick={openContactModal} className="text-xs uppercase tracking-wider px-6 py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition cursor-pointer shadow-md shadow-blue-500/20">
          Download Detailed Floor Plans (PDF)
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-xs category-reveal-item">
          <div>
            <span className="text-xs tracking-wider uppercase px-3 py-1 bg-blue-50 text-blue-700 font-bold rounded-full">Entry Modular Unit</span>
            <h3 className="text-2xl font-serif text-slate-900 mt-4 mb-2 font-bold">Modular Suite</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">From Rs 30 Lakhs*</p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>• Size: ~350 - 500 Sq.Ft SBUA</li>
              <li>• Suitable for IT micro-workspaces & startups</li>
              <li>• Indicative Rent: ~Rs 25,000 / month*</li>
              <li>• Undivided Share of Land (UDS) registered</li>
            </ul>
          </div>
          <button onClick={openContactModal} className="w-full py-3 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-bold text-xs uppercase tracking-wider transition cursor-pointer">
            Select Modular Unit →
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 border-2 border-blue-600 relative flex flex-col justify-between shadow-xl category-reveal-item">
          <div className="absolute -top-3.5 right-6 bg-blue-600 text-white text-[10px] uppercase tracking-wider font-bold px-3.5 py-1 rounded-full shadow-sm">
            Most Popular
          </div>
          <div>
            <span className="text-xs tracking-wider uppercase px-3 py-1 bg-blue-50 text-blue-700 font-bold rounded-full">Corporate Suite</span>
            <h3 className="text-2xl font-serif text-slate-900 mt-4 mb-2 font-bold">Executive Office</h3>
            <p className="text-3xl font-bold text-blue-600 mb-4">From Rs 65 Lakhs*</p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>• Size: ~750 - 1,200 Sq.Ft SBUA</li>
              <li>• Private pantry and executive cabin provision</li>
              <li>• Indicative Rent: ~Rs 55,000 / month*</li>
              <li>• Dedicated reserved car parking slot</li>
            </ul>
          </div>
          <button onClick={openContactModal} className="w-full py-3 rounded-xl bg-blue-600 text-white text-xs uppercase tracking-wider font-bold hover:bg-blue-700 transition cursor-pointer shadow-md">
            Select Executive Suite →
          </button>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-xs category-reveal-item">
          <div>
            <span className="text-xs tracking-wider uppercase px-3 py-1 bg-slate-100 text-slate-700 font-bold rounded-full">Enterprise Floor</span>
            <h3 className="text-2xl font-serif text-slate-900 mt-4 mb-2 font-bold">Full Floor Plate</h3>
            <p className="text-3xl font-bold text-slate-900 mb-4">Custom Pricing*</p>
            <ul className="space-y-2.5 text-xs text-slate-600 mb-6">
              <li>• Size: 5,000 - 10,000+ Sq.Ft SBUA</li>
              <li>• Direct elevator lobby branding rights</li>
              <li>• Multi-tenant or single institutional lease</li>
              <li>• Custom fit-out options available</li>
            </ul>
          </div>
          <button onClick={openContactModal} className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 hover:border-blue-600 hover:text-blue-600 font-bold text-xs uppercase tracking-wider transition cursor-pointer">
            Enquire for Floor Plate →
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* 9. IMAGE GALLERY */}
  <section id="gallery" className="py-24 bg-white border-t border-slate-200 category-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Visual Showcase</span>
        <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Project Architectural Gallery</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-xs category-reveal-item">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Façade view" className="w-full h-full object-cover img-scale" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-xs category-reveal-item">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Lobby view" className="w-full h-full object-cover img-scale" />
        </div>
        <div className="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-xs category-reveal-item">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Office floor" className="w-full h-full object-cover img-scale" />
        </div>
      </div>
    </div>
  </section>

  {/* 10. DOCUMENTS AND APPROVALS */}
  <section id="documents" className="py-24 bg-slate-50 border-t border-slate-200 category-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-12">
        <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">100% Legal Transparency</span>
        <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">Documents & Approvals</h2>
        <p className="category-reveal-item text-xs text-slate-600 mt-2 font-light">All statutory certifications are verified and open for investor due diligence.</p>
      </div>

      <div className="bg-white rounded-3xl p-8 border border-slate-200 divide-y divide-slate-100 text-xs text-slate-700 shadow-sm category-reveal-item">
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-900 block">TS RERA Project Registration</span>
            <span className="text-[11px] text-slate-500">Telangana Real Estate Regulatory Authority Acknowledgement</span>
          </div>
          <span className="text-blue-600 font-mono font-bold">[Confirm with Management]</span>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-900 block">Building Sanction & Commercial Zoning</span>
            <span className="text-[11px] text-slate-500">HMDA / Municipal Approval Docket</span>
          </div>
          <span className="text-emerald-600 font-bold">Sanctioned ✓</span>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-900 block">Title Deed & 30-Year Encumbrance Certificate</span>
            <span className="text-[11px] text-slate-500">Clear title, zero litigation legal certificate</span>
          </div>
          <span className="text-emerald-600 font-bold">Clear & Vetted ✓</span>
        </div>
        <div className="py-4 flex justify-between items-center">
          <div>
            <span className="font-bold text-slate-900 block">Fire Safety & Environmental Clearance</span>
            <span className="text-[11px] text-slate-500">State Disaster Response and Fire Services Dept</span>
          </div>
          <span className="text-emerald-600 font-bold">NOC Issued ✓</span>
        </div>
      </div>
      
      <div className="text-center mt-8">
        <button onClick={openContactModal} className="px-8 py-3 rounded-full text-xs uppercase tracking-wider font-bold border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
          Request Legal Docket Copy →
        </button>
      </div>
    </div>
  </section>

  {/* 11. INVESTMENT BREAKDOWN CALCULATOR */}
  <section id="calculator" className="py-24 bg-white border-t border-slate-200 category-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-blue-800 shadow-xl category-reveal-item">
        <div className="text-center mb-8">
          <span className="category-reveal-item text-xs uppercase tracking-wider text-blue-300 font-bold mb-1 block">Interactive Simulator</span>
          <h2 className="category-reveal-item text-3xl sm:text-4xl font-serif text-white">Investment Breakdown Estimator</h2>
          <p className="category-reveal-item text-xs text-blue-100/70 mt-1">Estimate your potential rental yield based on unit ticket size.</p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-wider text-blue-200 mb-2 font-semibold">Select Investment Outlay (in Lakhs):</label>
            <input type="range" id="investRange" min="30" max="150" step="5" defaultValue="30" className="w-full accent-blue-400 cursor-pointer" />
            <div className="flex justify-between text-xs text-blue-200/70 font-mono mt-1">
              <span>Rs 30 Lakhs</span>
              <span id="rangeLabel" className="text-blue-300 font-bold text-sm">Rs 30 Lakhs</span>
              <span>Rs 1.5 Crores</span>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
            <div className="p-4 rounded-2xl bg-white/10">
              <span className="text-[10px] uppercase text-blue-200/80 block">Investment Outlay</span>
              <span id="calcOutlay" className="text-xl font-bold text-white">Rs 30,00,000*</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10">
              <span className="text-[10px] uppercase text-emerald-300 block">Indicative Monthly Rent*</span>
              <span id="calcRent" className="text-xl font-bold text-emerald-400">Rs 25,000 / mo*</span>
            </div>
            <div className="p-4 rounded-2xl bg-white/10">
              <span className="text-[10px] uppercase text-blue-300 block">Annual Rental Income*</span>
              <span id="calcAnnual" className="text-xl font-bold text-blue-300">Rs 3,00,000 / yr*</span>
            </div>
          </div>

          <p className="text-[10px] text-blue-200/60 text-center">
            *Indicative simulation computed at ~10% gross annual yield benchmark. Actual returns are governed by final corporate lease agreements.
          </p>
        </div>
      </div>
    </div>
  </section>

  {/* 12. FAQ SECTION */}
  <section id="faq" className="py-24 bg-slate-50 border-t border-slate-200 category-section">
    <div className="max-w-4xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <h2 className="category-reveal-item text-4xl font-serif text-slate-900">Invesmart FAQs</h2>
      </div>
      <div className="space-y-4">
        <div className="faq-item rounded-2xl bg-white border border-slate-200 p-6 shadow-xs category-reveal-item">
          <button className="w-full flex justify-between items-center text-left text-base font-serif text-slate-900 cursor-pointer" >
            <span className="font-bold">Can I resell my commercial unit later?</span>
            <span className="faq-icon text-blue-600 text-xl">▼</span>
          </button>
          <div className="faq-answer text-xs text-slate-600 leading-relaxed">
            Yes. Since the unit is registered in your name with clear title deed and undivided land share, you can freely transfer, sell, or mortgage the property at prevailing market valuations.
          </div>
        </div>
        <div className="faq-item rounded-2xl bg-white border border-slate-200 p-6 shadow-xs category-reveal-item">
          <button className="w-full flex justify-between items-center text-left text-base font-serif text-slate-900 cursor-pointer" >
            <span className="font-bold">Who manages the corporate tenant leasing?</span>
            <span className="faq-icon text-blue-600 text-xl">▼</span>
          </button>
          <div className="faq-answer text-xs text-slate-600 leading-relaxed">
            Viseshta Group's dedicated asset management wing handles corporate tenant procurement, fit-out inspections, lease renewals, and rent disbursements.
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* 13. LEAD FORM AND WHATSAPP CTA */}
  <section id="cta-section" className="py-24 bg-white border-t border-slate-200 text-center category-section">
    <div className="max-w-3xl mx-auto px-4 sm:px-8">
      <h2 className="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900 mb-4">Request Complete Invesmart Breakdown</h2>
      <p className="category-reveal-item text-sm text-slate-600 mb-8">Speak with our commercial property specialists and schedule a VIP site visit.</p>
      
      <div className="flex flex-wrap justify-center gap-4 category-reveal-item">
        <button onClick={openContactModal} className="px-8 py-4 rounded-full text-xs uppercase tracking-wider font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition cursor-pointer">
          Get Breakdown Sheet →
        </button>
        <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20would%20like%20to%20get%20the%20property%20breakdown%20for%20Invesmart." target="_blank" rel="noreferrer" className="px-8 py-4 rounded-full text-xs uppercase tracking-wider font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition flex items-center gap-2 shadow-md">
          <span>Chat on WhatsApp</span>
        </a>
      </div>
    </div>
  </section>

  {/* 14. LEGAL DISCLAIMER & FOOTER */}
    </MainLayout>
  );
}
