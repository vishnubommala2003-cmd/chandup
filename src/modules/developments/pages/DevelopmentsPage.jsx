import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';
import { useModal } from '@contexts/ModalContext';

export default function DevelopmentsPage() {
  const { openContactModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&q=85",
      caption: "AURELIA TOWER — Handover Q2 2027 · Tashkent City"
    },
    {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85",
      caption: "THE MERIDIAN SPIRE — 64 Floors of Engineered Precision"
    },
    {
      src: "https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=85",
      caption: "FORUM PLAZA RESIDENCES — Master-Planned Urban Landmark"
    },
    {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=85",
      caption: "THE ARCHITECTURAL ATRIUM — Integrated Mixed-Use High-Rise"
    },
    {
      src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&q=85",
      caption: "HORIZON HEIGHTS — Next-Generation Sustainable Towers"
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
      {/* DEVELOPMENTS CATEGORY HERO SECTION (5-Image Smooth 5s Slideshow) */}
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
            <span>OFF-PLAN &amp; IN PROGRESS · 2026–2029</span>
          </div>

          {/* Main Category Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
            Landmarks in progress, shaped from <span className="italic text-[#f5f2eb]">first sketch.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            From groundbreaking to final handover — a master-planned portfolio of residential developments defined by architectural discipline and generational value.
          </p>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mb-8">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl font-medium text-white">12</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Delivered Projects</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl font-medium text-[#bfa181]">Q2 2027</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Next Handover</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl font-medium text-white">$420K</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Starting Price</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/15">
              <p className="text-2xl font-medium text-[#bfa181]">100%</p>
              <p className="text-[10px] tracking-wider uppercase text-white/60">Architectural Freehold</p>
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

  {/* DEVELOPMENTS COLLECTION */}
  <section className="py-24 bg-white text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-3">Portfolio Overview</p>
          <h2 className="text-4xl sm:text-5xl font-serif italic">Global Residential Developments</h2>
        </div>
        <p className="text-sm text-black/60 max-w-sm">Every development represents an exclusive partnership with renowned master architects and local advisors.</p>
      </div>

      {/* Development Projects Cards */}
      <div className="space-y-16">
        {/* Project 1: Aurelia Residences */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#f8f7f4] rounded-3xl overflow-hidden p-8 lg:p-12 border border-black/5">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl h-[420px]">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1000&q=80" alt="Aurelia Residences" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-5 left-5 text-[10px] tracking-widest uppercase bg-black text-white px-3.5 py-1.5 rounded-full font-medium">Under Construction</span>
              <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase bg-white text-black px-3.5 py-1.5 rounded-full font-medium">Tashkent City</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-3xl font-serif italic">Aurelia Residences</h3>
                <span className="text-xl font-medium text-[#bfa181]">From $420,000</span>
              </div>
              <p className="text-sm text-black/60 mb-6">A landmark 36-storey residential tower towering over Tashkent City Park, wrapped in Italian limestone panels and floor-to-ceiling soundproof glass.</p>
              
              {/* Timeline Specs */}
              <div className="space-y-3 border-t border-black/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Completion</span>
                  <span className="font-medium">Ready Q2 2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Total Units</span>
                  <span className="font-medium">84 Private Residences</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Architect</span>
                  <span className="font-medium">Studio Rossi &amp; Partners</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Amenities</span>
                  <span className="font-medium">Sky Lounge, Heated Lap Pool, Concierge</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze flex-1 text-center py-3.5 rounded-full text-xs tracking-widest uppercase font-medium text-white">Download Brochure</a>
              <a href="#contact" onClick={openContactModal} className="contact-trigger btn-outline flex-1 text-center py-3.5 rounded-full text-xs tracking-widest uppercase font-medium text-black">Private Briefing</a>
            </div>
          </div>
        </div>

        {/* Project 2: Monument */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#f8f7f4] rounded-3xl overflow-hidden p-8 lg:p-12 border border-black/5">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl h-[420px]">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1000&q=80" alt="Monument Dubai Hills" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-5 left-5 text-[10px] tracking-widest uppercase bg-[#bfa181] text-white px-3.5 py-1.5 rounded-full font-medium">Launching 2027</span>
              <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase bg-white text-black px-3.5 py-1.5 rounded-full font-medium">Dubai Hills</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-3xl font-serif italic">Monument</h3>
                <span className="text-xl font-medium text-[#bfa181]">From $1,100,000</span>
              </div>
              <p className="text-sm text-black/60 mb-6">Ultra-low density community of 24 architectural park villas designed around tranquil desert courtyards and private sculpture pavilions.</p>
              
              <div className="space-y-3 border-t border-black/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Completion</span>
                  <span className="font-medium">Handover Q4 2027</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Typologies</span>
                  <span className="font-medium">4, 5 &amp; 6 Bedroom Mansions</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Interior Finish</span>
                  <span className="font-medium">Travertine, Roman Bronze, White Oak</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze flex-1 text-center py-3.5 rounded-full text-xs tracking-widest uppercase font-medium text-white">Request Floor Plans</a>
            </div>
          </div>
        </div>

        {/* Project 3: Casa North */}
        <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#f8f7f4] rounded-3xl overflow-hidden p-8 lg:p-12 border border-black/5">
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-2xl h-[420px]">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1000&q=80" alt="Casa North Almaty" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-5 left-5 text-[10px] tracking-widest uppercase bg-black text-white px-3.5 py-1.5 rounded-full font-medium">Completed · Ready</span>
              <span className="absolute top-5 right-5 text-[10px] tracking-widest uppercase bg-white text-black px-3.5 py-1.5 rounded-full font-medium">Medeu, Almaty</span>
            </div>
          </div>
          <div className="lg:col-span-5 flex flex-col justify-between h-full py-4">
            <div>
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-3xl font-serif italic">Casa North</h3>
                <span className="text-xl font-medium text-[#bfa181]">From $680,000</span>
              </div>
              <p className="text-sm text-black/60 mb-6">Nestled in the alpine foothills of Medeu, Casa North integrates timber cantilevered pavilions with panoramic Tien Shan mountain vistas.</p>
              
              <div className="space-y-3 border-t border-black/10 pt-4 text-xs">
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Status</span>
                  <span className="font-medium">Handover Complete</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-black/40 uppercase">Remaining</span>
                  <span className="font-medium">Only 3 Residences Available</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze flex-1 text-center py-3.5 rounded-full text-xs tracking-widest uppercase font-medium text-white">Book Site Visit</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
