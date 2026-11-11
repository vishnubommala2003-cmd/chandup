import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function AboutPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
      caption: "OUR PHILOSOPHY — Architecture Conceived for Generations"
    },
    {
      src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85",
      caption: "REGIONAL STUDIOS — Tashkent, Dubai, London, Almaty"
    },
    {
      src: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1920&q=85",
      caption: "CRAFT & DISCIPLINE — 12 Years of Uncompromising Precision"
    },
    {
      src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=85",
      caption: "CONFIDENTIAL ADVISORY — Over $1.4B in Private Transactions"
    },
    {
      src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=85",
      caption: "ARCHITECTURAL INTEGRITY — Curating Timeless Addresses"
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
      {/* ABOUT CATEGORY HERO SECTION (5-Image Smooth 5s Slideshow) */}
      <section className="hero-section relative isolate z-0 min-h-[90vh] w-full overflow-hidden flex flex-col justify-end pt-36 pb-16 px-5 sm:px-8 lg:px-12">
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

          {/* Soft dark gradient overlay for crystal clear text readability while showing vivid imagery */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/35 to-black/20 z-[3] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(14,13,11,0.45)_100%)] z-[3] pointer-events-none"></div>
          {/* Atmospheric 3D light sheen */}
          <div className="hero-light-sheen absolute -inset-y-20 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-[4]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto w-full">
          {/* Category Badge */}
          <div className="flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase text-[#bfa181] font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-[#bfa181]"></span>
            <span>FOUNDED 2014 · THE VISESHTA PHILOSOPHY</span>
          </div>

          {/* Main Category Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
            We present homes the way <span className="italic text-[#f5f2eb]">architects imagine them.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            A private advisory and development studio dedicated to architectural integrity, confidentiality, and generational value across four international capitals.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl sm:text-3xl font-medium text-white">$1.4B+</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Sales Transacted</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl sm:text-3xl font-medium text-[#bfa181]">320+</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Residences Delivered</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl sm:text-3xl font-medium text-white">4</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Regional Studios</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl sm:text-3xl font-medium text-[#bfa181]">12 Yrs</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Architectural Rigor</p>
            </div>
          </div>

          {/* 5 Slide Indicators & Dynamic Caption */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/15">
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
            <div className="text-[11px] tracking-[0.2em] uppercase text-[#bfa181] font-medium transition-all duration-300">
              {heroSlides[currentSlide].caption}
            </div>
          </div>
        </div>
      </section>

  {/* THE FOUR PILLARS */}
  <section className="py-24 bg-white text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="max-w-2xl mb-16">
        <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-3">Operating Philosophy</p>
        <h2 className="text-4xl sm:text-5xl font-serif italic mb-6">Built on discipline, not volume</h2>
        <p className="text-sm text-black/70 leading-relaxed">
          Most luxury real estate operates on mass volume and aggressive promotion. We deliberately operate in reverse: selective mandates, meticulous physical curation, and deep architectural understanding.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Pillar 1 */}
        <div className="p-8 rounded-2xl bg-[#f8f7f4] border border-black/5 flex flex-col justify-between">
          <div>
            <span className="text-sm font-mono text-[#bfa181] font-semibold mb-4 block">01</span>
            <h3 className="text-xl font-medium mb-3">Curated, Never Listed</h3>
            <p className="text-xs text-black/60 leading-relaxed">
              Every home is physically inspected, measured, and photographed by our in-house architectural team before admission. Fewer properties, selected with conviction.
            </p>
          </div>
        </div>

        {/* Pillar 2 */}
        <div className="p-8 rounded-2xl bg-[#f8f7f4] border border-black/5 flex flex-col justify-between">
          <div>
            <span className="text-sm font-mono text-[#bfa181] font-semibold mb-4 block">02</span>
            <h3 className="text-xl font-medium mb-3">Developer-Grade Rigor</h3>
            <p className="text-xs text-black/60 leading-relaxed">
              We produce cinematic architectural films, daylight studies, and material analysis that articulate a home long before the first private walkthrough.
            </p>
          </div>
        </div>

        {/* Pillar 3 */}
        <div className="p-8 rounded-2xl bg-[#f8f7f4] border border-black/5 flex flex-col justify-between">
          <div>
            <span className="text-sm font-mono text-[#bfa181] font-semibold mb-4 block">03</span>
            <h3 className="text-xl font-medium mb-3">Four Capitals, One Standard</h3>
            <p className="text-xs text-black/60 leading-relaxed">
              Tashkent, Dubai, Almaty, and London — managed by resident studio partners sharing one rigorous private client standard and unified reporting.
            </p>
          </div>
        </div>

        {/* Pillar 4 */}
        <div className="p-8 rounded-2xl bg-[#f8f7f4] border border-black/5 flex flex-col justify-between">
          <div>
            <span className="text-sm font-mono text-[#bfa181] font-semibold mb-4 block">04</span>
            <h3 className="text-xl font-medium mb-3">Discreet By Design</h3>
            <p className="text-xs text-black/60 leading-relaxed">
              Private viewing suites, confidential NDA-governed access, and quiet negotiations tailored specifically for individuals and family offices who value privacy.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* GLOBAL STUDIOS DIRECTORY */}
  <section className="py-24 bg-[#f8f7f4] text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-3">Presence</p>
          <h2 className="text-4xl sm:text-5xl font-serif italic">Global Studio Locations</h2>
        </div>
        <p className="text-sm text-black/60 max-w-sm">Private viewing lounges and consultation suites open by prior appointment.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Studio 1 */}
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold mb-2">Central Asia HQ</p>
          <h3 className="text-2xl font-serif italic mb-4">Tashkent</h3>
          <p className="text-xs text-black/60 leading-relaxed mb-6">
            Amir Temur Avenue 107<br />
            Tashkent City 100084<br />
            Uzbekistan
          </p>
          <div className="border-t border-black/10 pt-4 text-xs space-y-1">
            <p className="font-medium">+998 71 200 07 07</p>
            <p className="text-black/50">tashkent@caldren.com</p>
          </div>
        </div>

        {/* Studio 2 */}
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold mb-2">Middle East</p>
          <h3 className="text-2xl font-serif italic mb-4">Dubai</h3>
          <p className="text-xs text-black/60 leading-relaxed mb-6">
            DIFC Gate Village 04<br />
            Level 06, Financial Centre<br />
            United Arab Emirates
          </p>
          <div className="border-t border-black/10 pt-4 text-xs space-y-1">
            <p className="font-medium">+971 4 420 18 00</p>
            <p className="text-black/50">dubai@caldren.com</p>
          </div>
        </div>

        {/* Studio 3 */}
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold mb-2">Kazakhstan</p>
          <h3 className="text-2xl font-serif italic mb-4">Almaty</h3>
          <p className="text-xs text-black/60 leading-relaxed mb-6">
            Dostyk Avenue 210<br />
            Medeu District 050051<br />
            Kazakhstan
          </p>
          <div className="border-t border-black/10 pt-4 text-xs space-y-1">
            <p className="font-medium">+7 727 312 04 20</p>
            <p className="text-black/50">almaty@caldren.com</p>
          </div>
        </div>

        {/* Studio 4 */}
        <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-sm">
          <p className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold mb-2">Europe</p>
          <h3 className="text-2xl font-serif italic mb-4">London</h3>
          <p className="text-xs text-black/60 leading-relaxed mb-6">
            18 Mount Street<br />
            Mayfair, London W1K 2RN<br />
            United Kingdom
          </p>
          <div className="border-t border-black/10 pt-4 text-xs space-y-1">
            <p className="font-medium">+44 20 7946 09 12</p>
            <p className="text-black/50">london@caldren.com</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
