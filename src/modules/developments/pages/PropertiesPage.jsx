import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '@app/layouts/MainLayout';
import { useModal } from '@contexts/ModalContext';

export default function PropertiesPage() {
  const { openContactModal } = useModal();
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const heroSlides = [
    {
      src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85",
      caption: "VILLA TRAVERTINE — Private Estate, Emirates Hills"
    },
    {
      src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85",
      caption: "THE SKYLINE PENTHOUSE — Belgravia Triplex Residence"
    },
    {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85",
      caption: "PALAZZO LUMIÈRE — Tashkent City Grand Villa"
    },
    {
      src: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=1920&q=85",
      caption: "THE GLASS PAVILION — Double-Height Architectural Salon"
    },
    {
      src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85",
      caption: "MARINA WATERFRONT RETREAT — Private Shoreline Haven"
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
      {/* PROPERTIES CATEGORY HERO SECTION (5-Image Smooth 5s Slideshow) */}
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
            <span>EXCLUSIVE PORTFOLIO · 2026 RESIDENCES</span>
          </div>

          {/* Main Category Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-light leading-[0.95] tracking-tight text-white mb-6 max-w-4xl">
            Curated residences, chosen for <span className="italic text-[#f5f2eb]">architecture and light.</span>
          </h1>

          <p className="text-white/80 text-base sm:text-lg max-w-2xl font-light leading-relaxed mb-8">
            From double-height sky penthouses in Tashkent City to private beachfront villas in Dubai Hills and discreet heritage duplexes in London.
          </p>

          {/* Filter Controls Bar */}
          <div className="flex flex-wrap items-center gap-3 bg-white/10 backdrop-blur-md p-2 rounded-2xl sm:rounded-full border border-white/15 max-w-3xl mb-8">
            <button className="px-5 py-2.5 rounded-full bg-white text-black text-xs tracking-wider uppercase font-medium transition">All Residences (18)</button>
            <button className="px-5 py-2.5 rounded-full hover:bg-white/10 text-white/80 text-xs tracking-wider uppercase transition">Penthouses (6)</button>
            <button className="px-5 py-2.5 rounded-full hover:bg-white/10 text-white/80 text-xs tracking-wider uppercase transition">Private Villas (4)</button>
            <button className="px-5 py-2.5 rounded-full hover:bg-white/10 text-white/80 text-xs tracking-wider uppercase transition">Off-Market (8)</button>
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

  {/* PROPERTIES SHOWCASE GRID */}
  <section className="py-24 bg-white text-[#141311]">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <p className="text-xs tracking-[0.25em] uppercase text-black/40 mb-3">Available Portfolios</p>
          <h2 className="text-4xl sm:text-5xl font-serif italic">Active Private Listings</h2>
        </div>
        <p className="text-sm text-black/60 max-w-sm">Every residence is independently inspected, architecturally documented, and represented with discretion.</p>
      </div>

      {/* 6 Properties Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Property 1 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Caldren Residence 07" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">For Sale</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">Tashkent City</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">Caldren Residence 07</h3>
                <span className="text-lg font-medium text-[#bfa181]">$1,850,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Four-bedroom terrace residence framed in Italian travertine and fluted bronze.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 4</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 5</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 420 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>

        {/* Property 2 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80" alt="The Sky Penthouse" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-[#bfa181] text-white px-3 py-1 rounded-full">Penthouse</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">Tashkent City</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">The Sky Penthouse</h3>
                <span className="text-lg font-medium text-[#bfa181]">$2,450,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Triplex crown penthouse with 360-degree city views, private sky deck and plunge pool.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 5</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 6</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 580 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>

        {/* Property 3 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80" alt="Villa Solarium" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Exclusive</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">Dubai Hills</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">Villa Solarium</h3>
                <span className="text-lg font-medium text-[#bfa181]">$4,200,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Contemporary architectural villa overlooking the fairways with subterranean gallery.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 6</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 7</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 850 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>

        {/* Property 4 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Medeu Alpine Villa" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">For Sale</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">Almaty</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">Medeu Alpine Villa</h3>
                <span className="text-lg font-medium text-[#bfa181]">$1,650,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Cantilevered mountain residence crafted in Siberian larch and rough-hewn basalt stone.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 4</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 4</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 390 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>

        {/* Property 5 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80" alt="Belgravia Crescent Duplex" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-[#bfa181] text-white px-3 py-1 rounded-full">Heritage</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">London SW1</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">Belgravia Duplex</h3>
                <span className="text-lg font-medium text-[#bfa181]">£3,950,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Restored stucco-fronted townhouse residence featuring private walled courtyard garden.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 3</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 3</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 310 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>

        {/* Property 6 */}
        <div className="card-hover bg-[#f8f7f4] rounded-2xl overflow-hidden border border-black/5 flex flex-col justify-between group">
          <div>
            <div className="relative overflow-hidden h-72">
              <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80" alt="The Glass Pavilion" className="w-full h-full object-cover img-scale" />
              <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-black text-white px-3 py-1 rounded-full">Under Offer</span>
              <span className="absolute top-4 right-4 text-[10px] tracking-widest uppercase bg-white/90 backdrop-blur px-3 py-1 rounded-full">Tashkent</span>
            </div>
            <div className="p-6">
              <div className="flex justify-between items-baseline mb-2">
                <h3 className="text-xl font-medium">The Glass Pavilion</h3>
                <span className="text-lg font-medium text-[#bfa181]">$2,100,000</span>
              </div>
              <p className="text-xs text-black/60 mb-6">Minimalist waterside estate with double-height glass walls and private boat mooring.</p>
              <div className="grid grid-cols-3 gap-2 border-t border-black/10 pt-4 text-xs text-black/70">
                <div><span className="block text-black/40 uppercase text-[9px]">Beds</span> 4</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Baths</span> 5</div>
                <div><span className="block text-black/40 uppercase text-[9px]">Area</span> 460 m²</div>
              </div>
            </div>
          </div>
          <div className="p-6 pt-0">
            <a href="#contact" onClick={openContactModal} className="contact-trigger btn-primary-bronze block text-center py-3 rounded-full text-xs tracking-widest uppercase font-medium text-white">Inquire Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* PRIVATE OFF-MARKET ADVISORY BANNER */}
  <section className="py-20 star-bg text-white text-center">
    <div className="max-w-3xl mx-auto px-6">
      <p className="text-xs tracking-[0.25em] uppercase text-[#bfa181] mb-3 font-medium">DISCREET ACCESS</p>
      <h2 className="text-3xl sm:text-5xl font-serif italic mb-6">Seeking an unlisted, private residence?</h2>
      <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-8 font-light">
        A significant portion of our portfolio never reaches the public domain. Contact our Private Client Advisory team to register your exact acquisition criteria.
      </p>
      <a href="#contact" onClick={openContactModal} className="contact-trigger inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black text-xs tracking-widest uppercase font-medium hover:bg-[#bfa181] hover:text-white transition duration-300">
        Register Confidential Brief →
      </a>
    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
