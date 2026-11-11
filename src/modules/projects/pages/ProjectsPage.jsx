import React, { useState, useEffect } from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function ProjectsPage() {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [category, setCategory] = useState('all');

  const heroCaptions = [
    "View 01 of 05 · Invesmart Commercial IT Tower · Financial District",
    "View 02 of 05 · Palm Valley · Luxury Plotted Community",
    "View 03 of 05 · Teak Village · Managed Agro Farmland Retreat",
    "View 04 of 05 · Vistara Valley · High-Growth Highway Plotted Layout",
    "View 05 of 05 · Grade-A Pre-Leased Commercial Floor Plates"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide(prev => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const filterProjects = (cat) => {
    setCategory(cat);
  };

  return (
    <MainLayout>
      {/* SECTION: HERO SECTION */}
      <section id="hero" className="hero-section relative isolate z-0 h-[calc(100vh-80px)] min-h-[580px] max-h-[820px] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
        <div id="hero-bg-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85",
            "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85",
            "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=85"
          ].map((src, idx) => (
            <div key={idx} className={`hero-bg-slide ${currentHeroSlide === idx ? 'active' : ''}`}>
              <img
                src={src}
                alt="Project Showcase"
                className="w-full h-full object-cover object-center filter brightness-[0.9] contrast-[1.05]"
              />
            </div>
          ))}

          {/* Rich Blue & Navy Gradient Atmosphere for Crisp Text Readability while preserving imagery */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/85 via-[#0b1e3b]/40 to-[#081528]/50 z-[3] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.18)_0%,transparent_75%)] z-[3] pointer-events-none"></div>
        </div>

        <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center justify-center my-auto">
          <div className="animate-hero-up-1 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/40 text-blue-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-2.5 sm:mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>VISESHTA GROUP PORTFOLIO · HYDERABAD & BEYOND</span>
          </div>

          <h1 className="animate-hero-up-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.08] sm:leading-[1.12] tracking-tight mb-2 sm:mb-3 drop-shadow-md">
            Signature Developments.<br />
            <span className="italic font-light text-slate-100">Commercial, Residential & Farmland.</span>
          </h1>

          <p className="animate-hero-up-3 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/90 max-w-xl mx-auto font-light leading-snug mb-4 sm:mb-5">
            From Grade-A IT workspace towers to secure gated villa plots and curated agro retreats.
          </p>

          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
            <a href="/invesmart" className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer">
              <span>Explore Invesmart Commercial</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#projects-grid" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-medium text-white border border-white/30 hover:border-blue-400 hover:bg-white/10 transition-all">
              Browse All Projects ↓
            </a>
          </div>

          {/* 4 Key Numbers Micro-Bar */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 text-[11px] sm:text-xs text-slate-200">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Invesmart</span> Grade-A IT Tower
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-emerald-400 font-bold">Palm Valley</span> Villa Plots
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Teak Village</span> Eco Farmland
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Vistara</span> Highway Plots
            </div>
          </div>

          {/* Slide Indicator & 5s Timer Progress Bar */}
          <div className="animate-hero-up-5 flex flex-col items-center gap-2 w-full max-w-md pt-1">
            <div id="hero-slide-caption" className="text-[10px] sm:text-[11px] tracking-wider uppercase text-blue-300 font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span id="caption-text">{heroCaptions[currentHeroSlide]}</span>
            </div>

            <div className="flex items-center gap-2 w-full justify-center">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`slide-indicator-bar w-12 sm:w-16 cursor-pointer group ${currentHeroSlide === idx ? 'active' : ''}`}
                  aria-label={`Slide ${idx + 1}`}
                >
                  <span className="slide-indicator-progress"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter Tabs Section */}
      <section className="py-6 bg-slate-100 border-b border-slate-200 shadow-xs" id="projects-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'commercial', label: 'Commercial' },
              { id: 'residential', label: 'Plotted & Residential' },
              { id: 'farmland', label: 'Managed Farmland' }
            ].map(tab => (
              <button
                key={tab.id}
                type="button"
                onClick={() => filterProjects(tab.id)}
                className={`project-tab px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold transition cursor-pointer shadow-xs ${category === tab.id
                  ? 'active border-blue-600 bg-blue-600 text-white border'
                  : 'border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Render the rest of the projects grid with category filtering applied */}
      <div className={`projects-container category-${category}`}>
        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="grid md:grid-cols-2 gap-8">

              {/* Project 1: Invesmart (Commercial) */}
              <div className="project-card luxury-card-hover commercial bg-slate-50 rounded-3xl overflow-hidden border border-blue-200 shadow-md flex flex-col justify-between">
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=900&q=80" alt="Invesmart Commercial Tower" className="w-full h-full object-cover img-scale" />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase rounded-full shadow-sm">Commercial · Flagship</span>
                      <span className="px-3 py-1 bg-white/95 text-slate-900 text-[11px] uppercase rounded-full font-semibold">IT Corridor</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur px-3.5 py-1.5 rounded-xl border border-slate-200 text-right shadow-sm">
                      <span className="text-[9px] uppercase text-slate-500 font-bold block">Entry Point</span>
                      <span className="text-base font-bold text-blue-700">From Rs 30 Lakhs*</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-serif text-slate-900 font-bold">Invesmart Commercial Tower</h3>
                    <p className="text-xs text-blue-600 uppercase tracking-wider font-semibold mt-1 mb-3">Grade-A Corporate Workspace · Hyderabad IT Growth Belt</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      Modular and full-floor commercial office spaces engineered for tech firms and institutional tenants. Day 1 indicative rental yield structure starting at ~Rs 25,000/month*.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200 mb-6">
                      <div>• Indicative Rent: ~Rs 25,000/mo*</div>
                      <div>• Location: Near ORR & Financial Dist</div>
                      <div>• Approvals: TS RERA Compliant</div>
                      <div>• Power: 100% Dual DG Redundancy</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0 flex gap-3">
                  <a href="/invesmart" className="flex-1 text-center py-3.5 rounded-full bg-blue-600 text-white text-xs uppercase tracking-wider font-bold hover:bg-blue-700 transition shadow-md shadow-blue-500/20">
                    Explore Invesmart →
                  </a>
                  <a href="/#breakdown-form-section" className="px-6 py-3.5 rounded-full border border-slate-300 text-slate-700 text-xs uppercase tracking-wider font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                    Get Breakdown
                  </a>
                </div>
              </div>

              {/* Project 2: Palm Valley (Residential Plotted) */}
              <div className="project-card luxury-card-hover residential bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" alt="Palm Valley Villa Plots" className="w-full h-full object-cover img-scale" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-600 text-white text-[11px] font-bold uppercase rounded-full">Gated Villa Plots</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-serif text-slate-900 font-bold">Palm Valley</h3>
                    <p className="text-xs text-blue-600 uppercase tracking-wider font-semibold mt-1 mb-3">Luxury Plotted Gated Community · Greater Hyderabad</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      Premium residential villa plots nestled amidst tranquil landscapes. Built with 40-ft and 30-ft blacktop roads, underground electricity cabling, landscaped parks, and clubhouse privileges.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200 mb-6">
                      <div>• Plot Sizes: 200 - 500 Sq. Yds</div>
                      <div>• Clear Titles & Immediate Registration</div>
                      <div>• Underground Utilities & Water</div>
                      <div>• Gated 24/7 Security & CCTV</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <a href="/palm-valley" className="block w-full text-center py-3.5 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white text-xs uppercase tracking-wider font-bold transition">
                    Explore Palm Valley Layout →
                  </a>
                </div>
              </div>

              {/* Project 3: Teak Village (Farmland) */}
              <div className="project-card luxury-card-hover farmland bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=900&q=80" alt="Teak Village Managed Farmland" className="w-full h-full object-cover img-scale" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-emerald-600 text-white text-[11px] font-bold uppercase rounded-full">Managed Farmland</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-serif text-slate-900 font-bold">Teak Village</h3>
                    <p className="text-xs text-emerald-600 uppercase tracking-wider font-semibold mt-1 mb-3">Eco-Luxury Agro Retreat & Teak Plantation</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      A sustainable agricultural asset combining high-yield commercial teakwood forestry with peaceful weekend agro-resort living and organic orchards.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200 mb-6">
                      <div>• Farmland units from 0.5 Acres</div>
                      <div>• Professionally managed plantation</div>
                      <div>• Weekend farmhouse cottage provision</div>
                      <div>• High capital appreciation timber asset</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <a href="/teak-village" className="block w-full text-center py-3.5 rounded-full border border-emerald-600 text-emerald-600 hover:bg-emerald-600 hover:text-white text-xs uppercase tracking-wider font-bold transition">
                    Explore Teak Village →
                  </a>
                </div>
              </div>

              {/* Project 4: Vistara Valley (Plotted Highway) */}
              <div className="project-card luxury-card-hover residential bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="relative h-72 sm:h-80 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80" alt="Vistara Valley Highway Plots" className="w-full h-full object-cover img-scale" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-slate-900 text-white text-[11px] font-bold uppercase rounded-full">Highway Growth Corridor</span>
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-serif text-slate-900 font-bold">Vistara Valley</h3>
                    <p className="text-xs text-slate-700 uppercase tracking-wider font-semibold mt-1 mb-3">Strategic Plotted Layout · Rapid Growth Belt</p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      Carefully planned open residential plots along Greater Hyderabad's upcoming growth arteries, providing high liquidity and immediate appreciation.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs text-slate-700 pt-2 border-t border-slate-200 mb-6">
                      <div>• Direct Highway Proximity</div>
                      <div>• Layout with compound fencing</div>
                      <div>• Immediate Sub-Registrar registration</div>
                      <div>• High long-term resale demand</div>
                    </div>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <a href="/vistara-valley" className="block w-full text-center py-3.5 rounded-full border border-slate-800 text-slate-800 hover:bg-slate-900 hover:text-white text-xs uppercase tracking-wider font-bold transition">
                    Explore Vistara Valley →
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Footer */}
      </div>
    </MainLayout>
  );
}
