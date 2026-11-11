import React, { useState, useEffect } from 'react';
import MainLayout from '@app/layouts/MainLayout';

const blogHeroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=85',
    title: 'Commercial Rental Yield & ROI Analytics',
    caption: 'Intelligence 01 · Commercial Rental Yield & ROI Analytics',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    title: 'Institutional Grade-A Office Space Trends',
    caption: 'Intelligence 02 · Institutional Grade-A Office Space Trends',
  },
  {
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=85',
    title: 'TS-RERA Compliance & Title Verification',
    caption: 'Intelligence 03 · TS-RERA Compliance & Title Verification',
  },
  {
    image: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=1920&q=85',
    title: 'Metro Corridor & ORR Growth Catalysts',
    caption: 'Intelligence 04 · Metro Corridor & ORR Growth Catalysts',
  },
  {
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=1920&q=85',
    title: 'Wealth Preservation Through Real Assets',
    caption: 'Intelligence 05 · Wealth Preservation Through Real Assets',
  },
];

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % blogHeroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
      {/* SECTION: HERO SECTION (5-IMAGE 5s SLIDESHOW & PERFECT ZERO-SCROLL POSITIONING) */}
      <section id="hero" className="hero-section relative isolate z-0 h-[calc(100vh-80px)] min-h-[580px] max-h-[820px] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
        
        {/* 5-Image Slideshow Background (Changes Every 5 Seconds with Smooth Ken Burns / 3D Cinematic Animation) */}
        <div id="hero-bg-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {blogHeroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
              data-caption={slide.caption}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
              />
            </div>
          ))}

          {/* Rich Blue & Navy Gradient Atmosphere for Crisp Text Readability & Image Vibrancy */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f]/75 via-[#0b1e3b]/40 to-[#081528]/55 z-[3] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.20)_0%,transparent_75%)] z-[3] pointer-events-none"></div>
        </div>

        {/* Main Hero Text Content (Upward Forward Animated, Perfectly Positioned Without Scroll) */}
        <div className="max-w-5xl mx-auto w-full text-center relative z-10 flex flex-col items-center justify-center my-auto">
          
          {/* Micro Badge (Moves up forward) */}
          <div className="animate-hero-up-1 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 backdrop-blur-md border border-blue-400/40 text-blue-300 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-semibold mb-2.5 sm:mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>RESEARCH & MARKET INTELLIGENCE · HYDERABAD IT CORRIDOR</span>
          </div>

          {/* Main Headline (Moves up forward, calibrated size for 100% viewport fit without scroll) */}
          <h1 className="animate-hero-up-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.08] sm:leading-[1.12] tracking-tight mb-2 sm:mb-3 drop-shadow-md">
            Commercial Investment Insights.<br />
            <span className="italic font-light text-slate-100">Actionable intelligence for modern investors.</span>
          </h1>

          {/* Subheadline (Moves up forward) */}
          <p className="animate-hero-up-3 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/90 max-w-xl mx-auto font-light leading-snug mb-4 sm:mb-5">
            Understand rental yields, TS RERA statutory safeguards, and high-growth commercial corridors in Greater Hyderabad.
          </p>

          {/* Primary Action CTA & Quick Connect (Moves up forward) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
            <a href="#articles" className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer">
              <span>Explore Market Articles ↓</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>

            <a href="/invesmart" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-medium text-white border border-white/30 hover:border-blue-400 hover:bg-white/10 transition-all">
              Invesmart Project Breakdown
            </a>
          </div>

          {/* 4 Key Numbers Micro-Bar (Quick facts visible immediately without scroll) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 text-[11px] sm:text-xs text-slate-200">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">8% - 10%*</span> Comm Yields
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-emerald-400 font-bold">GCC Boom</span> 50+ New Entrants
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">RERA</span> Diligence Guides
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Financial Dist</span> Market Data
            </div>
          </div>

          {/* Slide Indicator & 5s Timer Progress Bar (Moves up forward) */}
          <div className="animate-hero-up-5 flex flex-col items-center gap-2 w-full max-w-md pt-1">
            {/* Live Slide Caption */}
            <div id="hero-slide-caption" className="text-[10px] sm:text-[11px] tracking-wider uppercase text-blue-300 font-semibold hero-caption-animate flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span id="caption-text">{blogHeroSlides[currentSlide].caption}</span>
            </div>

            {/* 5 Interactive 5s Progress Indicators */}
            <div className="flex items-center gap-2 w-full justify-center">
              {blogHeroSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`slide-indicator-bar w-12 sm:w-16 cursor-pointer group ${idx === currentSlide ? 'active' : ''}`}
                  aria-label={`Slide ${idx + 1}`}
                >
                  <span className="slide-indicator-progress"></span>
                </button>
              ))}
            </div>

            {/* Micro Subtitle */}
            <p className="text-[10px] sm:text-[11px] text-blue-200/60 max-w-xl mx-auto font-light leading-tight text-center pt-1">
              In-depth market research from Hyderabad's premier commercial development advisors.
            </p>
          </div>

        </div>
      </section>


  <section className="py-20 bg-white" id="articles">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid md:grid-cols-3 gap-8">
        
        <article className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 card-hover flex flex-col justify-between shadow-xs">
          <div>
            <div className="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" alt="Commercial vs Residential" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-blue-600 text-white rounded-full">Yield Comparison</span>
            </div>
            <div className="p-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Commercial Real Estate · 6 Min Read</span>
              <h3 className="text-xl font-serif text-slate-900 mb-3 font-bold">Why Commercial Real Estate Outperforms Residential Yields in Hyderabad</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Residential rental yields in Hyderabad average 2.5% to 3.5%, while Grade-A commercial spaces in IT corridors yield 8% to 10%* with structured corporate lease escalations.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="/invesmart" className="text-xs text-blue-600 uppercase tracking-wider font-bold hover:underline">
              Read Breakdown in Invesmart →
            </a>
          </div>
        </article>

        <article className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 card-hover flex flex-col justify-between shadow-xs">
          <div>
            <div className="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80" alt="Pre-Leased Office Explained" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-emerald-600 text-white rounded-full">Investor Guide</span>
            </div>
            <div className="p-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Lease Structures · 8 Min Read</span>
              <h3 className="text-xl font-serif text-slate-900 mb-3 font-bold">Understanding 'Rent from Day 1': How Pre-Leased Commercial Spaces Function</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                A step-by-step explainer on how corporate tenant lock-in periods, security deposits, and tripartite lease assignment agreements safeguard property owners.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="/invesmart#rental" className="text-xs text-emerald-600 uppercase tracking-wider font-bold hover:underline">
              View Rental Structure →
            </a>
          </div>
        </article>

        <article className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 card-hover flex flex-col justify-between shadow-xs">
          <div>
            <div className="relative h-56 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=700&q=80" alt="Hyderabad IT Boom" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 bg-indigo-600 text-white rounded-full">Market Report</span>
            </div>
            <div className="p-6">
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold block mb-2">Macro Trends · 5 Min Read</span>
              <h3 className="text-xl font-serif text-slate-900 mb-3 font-bold">Global Capability Centers (GCCs) Driving Commercial Space Demand in Hyderabad</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Over 50 multinational GCCs expanded into Hyderabad in 2025-2026, creating an unprecedented appetite for high-specification Grade-A tech offices.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="/#breakdown-form-section" className="text-xs text-blue-600 uppercase tracking-wider font-bold hover:underline">
              Request Market Deck →
            </a>
          </div>
        </article>

      </div>
    </div>
  </section>
    </MainLayout>
  );
}
