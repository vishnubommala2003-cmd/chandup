import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function LocationsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1920&q=85",
      caption: "DUBAI — Downtown & Marina Panoramic Skyline"
    },
    {
      src: "https://images.unsplash.com/photo-1514565131-fce0801e5785?w=1920&q=85",
      caption: "TASHKENT CITY — Central Asia's Modern Renaissance Boulevard"
    },
    {
      src: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1920&q=85",
      caption: "LONDON — Mayfair & Belgravia Prime Metropolis"
    },
    {
      src: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1920&q=85",
      caption: "ALMATY — Medeu District Alpine Residences"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
      caption: "GLOBAL METROPOLIS — Prime International Advisory Hubs"
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
      {/* LOCATIONS CATEGORY HERO SECTION (5-Image Smooth 5s Slideshow) */}
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
            <span>GLOBAL ADVISORY · FOUR CAPITALS</span>
          </div>

          {/* Main Category Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
            Four cities, one <span className="italic text-[#f5f2eb]">uncompromising standard.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            We advise in prime destinations where architectural vision, economic strength, and privacy align. Each regional studio is anchored by resident advisory partners.
          </p>

          {/* City Quick Switcher */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <a href="#tashkent" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs tracking-wider uppercase border border-white/20 transition">Tashkent City (+18%)</a>
            <a href="#dubai" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs tracking-wider uppercase border border-white/20 transition">Dubai (+11%)</a>
            <a href="#almaty" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs tracking-wider uppercase border border-white/20 transition">Almaty (+9%)</a>
            <a href="#london" className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-xs tracking-wider uppercase border border-white/20 transition">London (+4%)</a>
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

  {/* DEEP-DIVE CITY DESTINATIONS */}
  <section className="py-24 bg-white text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-24">
      
      {/* City 1: Tashkent */}
      <div id="tashkent" className="grid lg:grid-cols-12 gap-12 items-center border-b border-black/10 pb-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs tracking-widest uppercase bg-[#0a1a3a] text-white px-3 py-1 rounded-full font-medium">Headquarters</span>
            <span className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold">+18% YOY Growth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-4">Tashkent City</h2>
          <p className="text-sm font-medium text-black/50 mb-6">Uzbekistan · Central Asia's Capital of Modern Renaissance</p>
          <p className="text-sm text-black/70 leading-relaxed mb-6">
            Tashkent has emerged as one of the world's most compelling high-yield luxury residential markets. With state-of-the-art master planning, pristine urban parks, and grand avenues, Tashkent City attracts regional and international private capital seeking architectural excellence.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-4 text-xs mb-8">
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Average Prime SqM</span>
              <span className="text-base font-medium">$2,900 / m²</span>
            </div>
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Advisory Studio</span>
              <span className="text-base font-medium">Amir Temur 107</span>
            </div>
          </div>
          <a href="properties.html" className="btn-primary-bronze inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase text-white font-medium">
            Explore Tashkent Properties →
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
            <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=900&q=80" alt="Tashkent City Skyline" className="w-full h-full object-cover img-scale" />
          </div>
        </div>
      </div>

      {/* City 2: Dubai */}
      <div id="dubai" className="grid lg:grid-cols-12 gap-12 items-center border-b border-black/10 pb-20">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
            <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&q=80" alt="Dubai Skyline" className="w-full h-full object-cover img-scale" />
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full font-medium">Global Hub</span>
            <span className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold">+11% YOY Growth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-4">Dubai</h2>
          <p className="text-sm font-medium text-black/50 mb-6">United Arab Emirates · DIFC &amp; Dubai Hills</p>
          <p className="text-sm text-black/70 leading-relaxed mb-6">
            The global gold standard for frictionless wealth preservation and tax-efficient residency. Our Dubai private office focuses exclusively on golf course mansions, ultra-exclusive branded towers, and bespoke off-market family compounds.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-4 text-xs mb-8">
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Prime Yield</span>
              <span className="text-base font-medium">6.8% Average Net</span>
            </div>
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Advisory Studio</span>
              <span className="text-base font-medium">DIFC Gate Village 04</span>
            </div>
          </div>
          <a href="properties.html" className="btn-primary-bronze inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase text-white font-medium">
            Explore Dubai Properties →
          </a>
        </div>
      </div>

      {/* City 3: Almaty */}
      <div id="almaty" className="grid lg:grid-cols-12 gap-12 items-center border-b border-black/10 pb-20">
        <div className="lg:col-span-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full font-medium">Alpine Foothills</span>
            <span className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold">+9% YOY Growth</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-4">Almaty</h2>
          <p className="text-sm font-medium text-black/50 mb-6">Kazakhstan · Medeu &amp; Esentai District</p>
          <p className="text-sm text-black/70 leading-relaxed mb-6">
            Set at the foot of the snow-crested Tien Shan mountains, Almaty offers unmatched ecological quality of life paired with contemporary timber and stone architecture. Favored by discerning families seeking space, air, and privacy.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-4 text-xs mb-8">
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Natural Heritage</span>
              <span className="text-base font-medium">Medeu Biosphere Buffer</span>
            </div>
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Advisory Studio</span>
              <span className="text-base font-medium">Dostyk 210</span>
            </div>
          </div>
          <a href="properties.html" className="btn-primary-bronze inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase text-white font-medium">
            Explore Almaty Properties →
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
            <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=900&q=80" alt="Almaty Mountains" className="w-full h-full object-cover img-scale" />
          </div>
        </div>
      </div>

      {/* City 4: London */}
      <div id="london" className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden h-[420px] shadow-xl">
            <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=900&q=80" alt="London Mayfair" className="w-full h-full object-cover img-scale" />
          </div>
        </div>
        <div className="lg:col-span-6 order-1 lg:order-2">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full font-medium">Timeless Haven</span>
            <span className="text-xs tracking-widest uppercase text-[#bfa181] font-semibold">+4% Capital Preserved</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif italic mb-4">London</h2>
          <p className="text-sm font-medium text-black/50 mb-6">United Kingdom · Mayfair, Belgravia &amp; Kensington</p>
          <p className="text-sm text-black/70 leading-relaxed mb-6">
            The enduring benchmark for international wealth preservation, legal security, and world-class educational access. Our London presence operates quietly out of Mount Street, providing direct private banking and family office representation.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-black/10 pt-4 text-xs mb-8">
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Legal Stability</span>
              <span className="text-base font-medium">Common Law Benchmark</span>
            </div>
            <div>
              <span className="block text-black/40 uppercase text-[10px]">Advisory Studio</span>
              <span className="text-base font-medium">18 Mount Street, Mayfair</span>
            </div>
          </div>
          <a href="properties.html" className="btn-primary-bronze inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs tracking-widest uppercase text-white font-medium">
            Explore London Properties →
          </a>
        </div>
      </div>

    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
