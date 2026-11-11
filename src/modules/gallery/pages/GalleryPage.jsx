import React, { useState, useEffect } from 'react';
import MainLayout from '@app/layouts/MainLayout';

const galleryHeroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    title: 'Invesmart Tower Glass Elevation & Plaza',
    caption: 'View 01 of 05 · Invesmart Tower Glass Elevation & Plaza',
  },
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85',
    title: 'Double-Height Grade-A Corporate Lobby',
    caption: 'View 02 of 05 · Double-Height Grade-A Corporate Lobby',
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85',
    title: 'Palm Valley Luxury Villa Community',
    caption: 'View 03 of 05 · Palm Valley Luxury Villa Community',
  },
  {
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85',
    title: 'Teak Village Managed Agro-Farmland',
    caption: 'View 04 of 05 · Teak Village Managed Agro-Farmland',
  },
  {
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85',
    title: 'Vistara Valley Scenic Hillside Enclave',
    caption: 'View 05 of 05 · Vistara Valley Scenic Hillside Enclave',
  },
];

export default function GalleryPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % galleryHeroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
      {/* SECTION: HERO SECTION (5-IMAGE 5s SLIDESHOW & PERFECT ZERO-SCROLL POSITIONING) */}
      <section id="hero" className="hero-section relative isolate z-0 h-[calc(100vh-80px)] min-h-[580px] max-h-[820px] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
        
        {/* 5-Image Slideshow Background (Changes Every 5 Seconds with Smooth Ken Burns / 3D Cinematic Animation) */}
        <div id="hero-bg-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {galleryHeroSlides.map((slide, idx) => (
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
            <span>ARCHITECTURAL SHOWCASE · VERIFIED ON-GROUND ASSETS</span>
          </div>

          {/* Main Headline (Moves up forward, calibrated size for 100% viewport fit without scroll) */}
          <h1 className="animate-hero-up-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.08] sm:leading-[1.12] tracking-tight mb-2 sm:mb-3 drop-shadow-md">
            Visual Project Gallery.<br />
            <span className="italic font-light text-slate-100">Elevations, Master Plans & On-Site Progress.</span>
          </h1>

          {/* Subheadline (Moves up forward) */}
          <p className="animate-hero-up-3 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/90 max-w-xl mx-auto font-light leading-snug mb-4 sm:mb-5">
            Explore architectural renderings, drone layouts, and interior concepts across Viseshta Group's signature developments.
          </p>

          {/* Primary Action CTA & Quick Connect (Moves up forward) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
            <a href="#gallery-section" className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-bold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_8px_25px_rgba(37,99,235,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer">
              <span>Explore Photo Gallery ↓</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M19 14l-7 7m0 0l-7-7m7 7V3"/></svg>
            </a>

            <a href="/invesmart" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-medium text-white border border-white/30 hover:border-blue-400 hover:bg-white/10 transition-all">
              Invesmart Specifications
            </a>
          </div>

          {/* 4 Key Numbers Micro-Bar (Quick facts visible immediately without scroll) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 text-[11px] sm:text-xs text-slate-200">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Invesmart</span> Commercial
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-emerald-400 font-bold">Palm Valley</span> Villa Enclave
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Teak Village</span> Farmland
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">High-Res</span> 4K Media
            </div>
          </div>

          {/* Slide Indicator & 5s Timer Progress Bar (Moves up forward) */}
          <div className="animate-hero-up-5 flex flex-col items-center gap-2 w-full max-w-md pt-1">
            {/* Live Slide Caption */}
            <div id="hero-slide-caption" className="text-[10px] sm:text-[11px] tracking-wider uppercase text-blue-300 font-semibold hero-caption-animate flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span id="caption-text">{galleryHeroSlides[currentSlide].caption}</span>
            </div>

            {/* 5 Interactive 5s Progress Indicators */}
            <div className="flex items-center gap-2 w-full justify-center">
              {galleryHeroSlides.map((_, idx) => (
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
              Actual on-site photography, architectural elevation drawings, and master layout plans.
            </p>
          </div>

        </div>
      </section>


  {/* Filterable Gallery Section */}
  <section className="py-12 bg-white" id="gallery-section">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="flex flex-wrap items-center justify-center gap-2 pb-10">
        <button  className="gallery-tab active px-5 py-2 rounded-full text-xs uppercase tracking-wider font-bold border border-blue-600 bg-blue-600 text-white transition cursor-pointer shadow-xs">All Media</button>
        <button  className="gallery-tab px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 transition cursor-pointer">Invesmart Commercial</button>
        <button  className="gallery-tab px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 transition cursor-pointer">Palm Valley</button>
        <button  className="gallery-tab px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold border border-slate-300 bg-white text-slate-700 hover:border-blue-600 hover:text-blue-600 transition cursor-pointer">Teak Village</button>
      </div>
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="galleryGrid">
        
        <div className="gallery-item luxury-card-hover invesmart rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80" alt="Invesmart Commercial Facade" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Invesmart Tower</span>
            <h4 className="text-base font-serif text-white font-bold">Glass Curtain Wall Façade</h4>
          </div>
        </div>

        <div className="gallery-item luxury-card-hover invesmart rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" alt="Grade-A Lobby" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Invesmart Tower</span>
            <h4 className="text-base font-serif text-white font-bold">Double-Height Executive Lobby</h4>
          </div>
        </div>

        <div className="gallery-item luxury-card-hover invesmart rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80" alt="Workspace Floor Plate" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Invesmart Tower</span>
            <h4 className="text-base font-serif text-white font-bold">Modular IT Workspace Layout</h4>
          </div>
        </div>

        <div className="gallery-item luxury-card-hover palm rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="Palm Valley Clubhouse" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Palm Valley</span>
            <h4 className="text-base font-serif text-white font-bold">Villa Layout & Club Amenities</h4>
          </div>
        </div>

        <div className="gallery-item luxury-card-hover teak rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&q=80" alt="Teak Village Plantation" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Teak Village</span>
            <h4 className="text-base font-serif text-white font-bold">Managed Teakwood Agro Estate</h4>
          </div>
        </div>

        <div className="gallery-item luxury-card-hover invesmart rounded-2xl overflow-hidden border border-slate-200 relative group h-72 shadow-sm">
          <img src="https://images.unsplash.com/photo-1577495508048-b635879837f1?w=800&q=80" alt="Invesmart Night Elevation" className="w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5">
            <span className="text-[10px] text-blue-300 uppercase font-bold tracking-wider">Invesmart Tower</span>
            <h4 className="text-base font-serif text-white font-bold">Architectural Elevation at Dusk</h4>
          </div>
        </div>

      </div>
    </div>
    </div>
  </section>
    </MainLayout>
  );
}
