import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function JournalPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1920&q=85",
      caption: "ESSAY 01 — The Poetics of Daylight in Contemporary Residences"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=85",
      caption: "ESSAY 02 — Travertine & Raw Bronze: Honest Materiality"
    },
    {
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1920&q=85",
      caption: "ESSAY 03 — In Dialogue with Master Architect Kengo Kuma"
    },
    {
      src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1920&q=85",
      caption: "ESSAY 04 — Acoustics and Sanctuary in High-Density Capitals"
    },
    {
      src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=85",
      caption: "ESSAY 05 — The Evolution of Private Art Galleries at Home"
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
      {/* JOURNAL CATEGORY HERO SECTION (5-Image Smooth 5s Slideshow) */}
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
            <span>THE VISESHTA JOURNAL · AUTUMN 2026 EDITION</span>
          </div>

          {/* Main Category Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
            Notes on architecture, address and <span className="italic text-[#f5f2eb]">living well.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            Critical perspectives, materiality studies, and dialogues with the architects shaping our cities — written by our resident advisors and studio partners.
          </p>

          {/* Category Tags */}
          <div className="flex flex-wrap items-center gap-3 mb-8">
            <span className="px-4 py-2 rounded-full bg-white text-black text-xs tracking-wider uppercase font-medium">All Essays</span>
            <span className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs tracking-wider uppercase transition cursor-pointer">Architecture</span>
            <span className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs tracking-wider uppercase transition cursor-pointer">Market Intelligence</span>
            <span className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs tracking-wider uppercase transition cursor-pointer">Interviews</span>
            <span className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white/80 text-xs tracking-wider uppercase transition cursor-pointer">Materiality</span>
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

  {/* EDITORIAL ESSAYS GRID */}
  <section className="py-24 bg-white text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      
      {/* Lead Featured Essay */}
      <div className="grid lg:grid-cols-12 gap-10 items-center bg-[#f8f7f4] rounded-3xl overflow-hidden p-8 lg:p-12 border border-black/5 mb-16">
        <div className="lg:col-span-7">
          <div className="rounded-2xl overflow-hidden h-[400px]">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80" alt="Travertine Facade Architecture" className="w-full h-full object-cover img-scale" />
          </div>
        </div>
        <div className="lg:col-span-5 flex flex-col justify-between py-4">
          <div>
            <div className="flex items-center gap-3 text-xs tracking-widest uppercase text-black/50 mb-3">
              <span className="px-3 py-1 bg-[#bfa181] text-white rounded-full font-medium">Featured Story</span>
              <span>Architecture · 8 Min Read</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif italic mb-4 leading-tight">
              Why travertine is quietly returning to the modern facade
            </h2>
            <p className="text-sm text-black/70 leading-relaxed mb-6">
              Far from the sterile polished finishes of the 1990s, contemporary architects are embracing rough-veined, unfilled Italian travertine for its tactile thermal mass and ability to age with poetic grace under Mediterranean and Central Asian light.
            </p>
            <p className="text-xs text-black/40 uppercase tracking-widest mb-6">By Antonello Rossi, Lead Partner</p>
          </div>
          <div>
            <a href="#" className="inline-flex items-center gap-2 text-sm font-medium border-b border-black pb-1 hover:text-[#bfa181] hover:border-[#bfa181] transition">
              Read Complete Essay →
            </a>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid md:grid-cols-3 gap-8">
        {/* Article 1 */}
        <article className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="overflow-hidden h-60">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Rooftop Living" className="w-full h-full object-cover img-scale" />
            </div>
            <div className="p-6">
              <p className="text-[11px] tracking-widest uppercase text-black/40 mb-2">Living · 6 Min Read</p>
              <h3 className="text-xl font-medium leading-snug group-hover:underline underline-offset-4 mb-3">
                The new rooftop: why terraces are becoming the most valuable room in the home
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                Examining the dramatic shift toward expansive private sky gardens with biophilic landscaping and outdoor fireplaces.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0 border-t border-black/5">
            <span className="text-xs font-medium text-[#bfa181] group-hover:text-black transition">Read Article →</span>
          </div>
        </article>

        {/* Article 2 */}
        <article className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="overflow-hidden h-60">
              <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=700&q=80" alt="Tashkent City Architecture" className="w-full h-full object-cover img-scale" />
            </div>
            <div className="p-6">
              <p className="text-[11px] tracking-widest uppercase text-black/40 mb-2">Market Intelligence · 10 Min Read</p>
              <h3 className="text-xl font-medium leading-snug group-hover:underline underline-offset-4 mb-3">
                Tashkent City in 2026: what global capital is paying for
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                An analytical report tracking foreign direct investment, currency resilience, and the rapid maturation of Uzbekistan's luxury market.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0 border-t border-black/5">
            <span className="text-xs font-medium text-[#bfa181] group-hover:text-black transition">Read Article →</span>
          </div>
        </article>

        {/* Article 3 */}
        <article className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="overflow-hidden h-60">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=700&q=80" alt="Double Height Living" className="w-full h-full object-cover img-scale" />
            </div>
            <div className="p-6">
              <p className="text-[11px] tracking-widest uppercase text-black/40 mb-2">Architecture Dialogue · 12 Min Read</p>
              <h3 className="text-xl font-medium leading-snug group-hover:underline underline-offset-4 mb-3">
                Light as structure: designing for silence in vertical towers
              </h3>
              <p className="text-xs text-black/60 leading-relaxed">
                A technical and sensory dialogue on acoustic dampening, triple-layer laminated facade glass, and floating subfloors.
              </p>
            </div>
          </div>
          <div className="p-6 pt-0 border-t border-black/5">
            <span className="text-xs font-medium text-[#bfa181] group-hover:text-black transition">Read Article →</span>
          </div>
        </article>
      </div>

    </div>
  </section>

  {/* PRINT JOURNAL SUBSCRIPTION BANNER */}
  <section className="py-20 star-bg text-white text-center">
    <div className="max-w-3xl mx-auto px-6">
      <p className="text-xs tracking-[0.25em] uppercase text-[#bfa181] mb-3 font-medium">DISCREET COMPLIMENTARY COPIES</p>
      <h2 className="text-3xl sm:text-5xl font-serif italic mb-6">Receive the Print Edition</h2>
      <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
        A quarterly, linen-bound monograph printed in Milan on 180gsm archival paper, featuring architectural photography and private portfolios.
      </p>
      <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
        <input type="email" placeholder="Your residential address or email" className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/50 text-white" />
        <button type="submit" className="bg-white text-black px-6 py-3 rounded-full text-xs tracking-widest uppercase font-medium hover:bg-[#bfa181] hover:text-white transition">Request Copy</button>
      </form>
    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
