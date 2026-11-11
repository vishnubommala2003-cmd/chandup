import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@app/layouts/MainLayout';
import { useModal } from '@contexts/ModalContext';
import { useIntro } from '@contexts/IntroContext';

export default function HomePage() {
  const { openContactModal, openShowreelModal } = useModal();
  const { heroTriggered, isCompleted } = useIntro();

  const [currentSlide, setCurrentSlide] = useState(0);
  const [revealedWords, setRevealedWords] = useState(
    isCompleted ? [true, true, true, true] : [false, false, false, false]
  );
  const [revealedStaggers, setRevealedStaggers] = useState(
    isCompleted ? [true, true, true, true, true, true, true] : [false, false, false, false, false, false, false]
  );
  const [hero3dActive, setHero3dActive] = useState(isCompleted);

  const heroBgContainerRef = useRef(null);
  const heroContentRef = useRef(null);
  const carouselTimerRef = useRef(null);

  const heroCaptions = [
    'AURELIA RESIDENCES — Tashkent City · From $420,000',
    'THE SKYLINE PENTHOUSE — Mayfair, London · £6,850,000',
    'VILLA TRAVERTINE — Emirates Hills, Dubai · $8,400,000',
    'PALAZZO LUMIÈRE — Tashkent City · From $950,000',
    'MARINA PANORAMA — Dubai Harbour · $3,200,000'
  ];

  // 1. Staggered Masked Headline & Element Rise triggered when Intro Screen slides up
  useEffect(() => {
    if (isCompleted) {
      setRevealedWords([true, true, true, true]);
      setRevealedStaggers([true, true, true, true, true, true, true]);
      setHero3dActive(true);
      return;
    }

    if (!heroTriggered) return;

    // Initiate 10-second 3D cinematic animation on the hero background image at 100ms
    const tBg = setTimeout(() => {
      setHero3dActive(true);
    }, 100);

    // Staggered reveal of headline words inside masks (0.08s per word)
    const wordTimers = [
      setTimeout(() => setRevealedWords(p => [true, p[1], p[2], p[3]]), 350),
      setTimeout(() => setRevealedWords(p => [true, true, p[2], p[3]]), 430),
      setTimeout(() => setRevealedWords(p => [true, true, true, p[3]]), 510),
      setTimeout(() => setRevealedWords([true, true, true, true]), 590),
    ];

    // Staggered rise of subtext, buttons, chips, indicators (0.11s per item)
    const staggerTimers = [0, 1, 2, 3, 4, 5, 6].map(idx =>
      setTimeout(() => {
        setRevealedStaggers(p => {
          const next = [...p];
          next[idx] = true;
          return next;
        });
      }, 750 + idx * 110)
    );

    return () => {
      clearTimeout(tBg);
      wordTimers.forEach(t => clearTimeout(t));
      staggerTimers.forEach(t => clearTimeout(t));
    };
  }, [heroTriggered, isCompleted]);

  // 2. 5-Image One-By-One Reveal Hero Carousel (Auto every 5s)
  const startCarouselTimer = () => {
    if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    carouselTimerRef.current = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 5);
    }, 5000);
  };

  useEffect(() => {
    startCarouselTimer();
    return () => {
      if (carouselTimerRef.current) clearInterval(carouselTimerRef.current);
    };
  }, []);

  const handleDotClick = (idx) => {
    setCurrentSlide(idx);
    startCarouselTimer();
  };

  // 3. Desktop 3D Mouse Parallax & Scroll Parallax
  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let targetX = 0, targetY = 0;
    let animId;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      targetX = (e.clientX / innerWidth - 0.5) * 24;
      targetY = (e.clientY / innerHeight - 0.5) * 24;
    };

    const renderParallax = () => {
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      if (scrollY < vh * 1.3) {
        const bgScroll = scrollY * 0.35;
        const contentScroll = scrollY * 0.45;
        const contentOpacity = Math.max(0, 1 - scrollY / (vh * 0.72));
        const bgScale = 1.0 + (scrollY / vh) * 0.08;

        if (heroBgContainerRef.current) {
          heroBgContainerRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY + bgScroll}px, 0) scale(${bgScale})`;
        }
        if (heroContentRef.current) {
          heroContentRef.current.style.transform = `translate3d(0, -${contentScroll}px, 0)`;
          heroContentRef.current.style.opacity = contentOpacity;
        }
      }
      animId = requestAnimationFrame(renderParallax);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(renderParallax);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MainLayout>
      {/* HERO (Full Viewport 100vh) */}
  <section id="home" className="hero-section relative isolate z-0 h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-between pt-24 pb-8 sm:pb-10 px-5 sm:px-8 lg:px-12 text-white">
    {/* Background Slides: 5 Images with Cinematic One-by-One Reveal Animation & Parallax */}
    <div id="hero-bg-container" ref={heroBgContainerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{"perspective":"1200px","transformStyle":"preserve-3d"}}>
      {/* Slide 1: Aurelia Residences, Tashkent City at dusk */}
      <div className={`hero-slide ${currentSlide === 0 ? 'active' : ''}`}>
        <img 
          id="hero-bg-img" 
          src="https://framerusercontent.com/images/qGgfjkIwBKkllvcImC85cBkUK3o.png" 
          alt="Aurelia Residences, Tashkent City" 
          className={`hero-slide-img w-full h-full object-cover object-center will-change-transform ${
            hero3dActive ? 'hero-3d-active' : ''
          }`}
        />
      </div>

      {/* Slide 2: The Skyline Penthouse, London */}
      <div className={`hero-slide ${currentSlide === 1 ? 'active' : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920&q=85" 
          alt="The Skyline Penthouse, London" 
          className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
        />
      </div>

      {/* Slide 3: Villa Travertine, Emirates Hills, Dubai */}
      <div className={`hero-slide ${currentSlide === 2 ? 'active' : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85" 
          alt="Villa Travertine, Dubai" 
          className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
        />
      </div>

      {/* Slide 4: Palazzo Lumière, Tashkent City */}
      <div className={`hero-slide ${currentSlide === 3 ? 'active' : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=85" 
          alt="Palazzo Lumière, Tashkent City" 
          className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
        />
      </div>

      {/* Slide 5: Marina Panorama, Dubai Harbour */}
      <div className={`hero-slide ${currentSlide === 4 ? 'active' : ''}`}>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920&q=85" 
          alt="Marina Panorama, Dubai" 
          className="hero-slide-img w-full h-full object-cover object-center will-change-transform"
        />
      </div>

      {/* Soft dark gradient overlay for crystal clear text readability while showing vivid imagery */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e0d0b] via-[#0e0d0b]/35 to-black/20 z-[3] pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(14,13,11,0.45)_100%)] z-[3] pointer-events-none"></div>
      {/* Atmospheric 3D light sheen */}
      <div className="hero-light-sheen absolute -inset-y-20 -left-1/3 w-2/3 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-[4]"></div>
    </div>

    {/* Top spacer to position content nicely */}
    <div className="w-full h-4"></div>

    {/* Main Hero Foreground Content */}
    <div id="hero-content" ref={heroContentRef} className="relative max-w-7xl mx-auto w-full will-change-transform transition-opacity duration-300">
      <div className="grid lg:grid-cols-12 gap-8 items-end">
        {/* Bottom-Left Main Column */}
        <div className="lg:col-span-8">
          {/* Small Label (Stagger 0) */}
          <div className={`hero-stagger ${revealedStaggers[0] ? 'revealed' : 'opacity-0 translate-y-5'} flex items-center gap-2.5 text-[11px] tracking-[0.25em] uppercase text-[#bfa181] font-medium mb-4 sm:mb-6`}>
            <span className="w-2 h-2 rounded-full bg-[#bfa181]"></span>
            <span>AURELIA RESIDENCES · TASHKENT CITY</span>
          </div>

          {/* Main Headline: Masked and split into words */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-white mb-6 font-serif font-light">
            <div className="overflow-hidden py-0.5">
              <span className={`hero-word ${revealedWords[0] ? 'revealed' : ''}`}>Exceptional</span>{' '}
              <span className={`hero-word italic text-[#f5f2eb] ${revealedWords[1] ? 'revealed' : ''}`}>spaces,</span>
            </div>
            <div className="overflow-hidden py-0.5">
              <span className={`hero-word ${revealedWords[2] ? 'revealed' : ''}`}>thoughtfully</span>{' '}
              <span className={`hero-word italic text-[#f5f2eb] ${revealedWords[3] ? 'revealed' : ''}`}>presented.</span>
            </div>
          </h1>

          {/* Subtext under headline (Stagger 1) */}
          <p className={`hero-stagger ${revealedStaggers[1] ? 'revealed' : 'opacity-0 translate-y-5'} text-white/80 text-base sm:text-lg max-w-xl font-light leading-relaxed mb-8`}>
            Residences, penthouses and new developments selected for architecture, address and light.
          </p>

          {/* CTAs & Secondary link (Stagger 2) */}
          <div className={`hero-stagger ${revealedStaggers[2] ? 'revealed' : 'opacity-0 translate-y-5'} flex flex-wrap items-center gap-6 sm:gap-8`}>
            {/* Primary CTA */}
            <a href="#properties" className="btn-primary-bronze inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs tracking-[0.2em] uppercase font-medium relative overflow-hidden group">
              <span className="btn-wipe-bg absolute inset-0 bg-[#bfa181]"></span>
              <span className="relative z-10 text-white group-hover:text-[#141311] transition-colors duration-300">Explore Properties</span>
              <span className="relative z-10 text-white group-hover:text-[#141311] transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>

            {/* Secondary Text Link */}
            <div className="text-xs text-white/70 max-w-xs leading-relaxed">
              <span>Curating exceptional residences across Tashkent, Dubai, Almaty and London.</span>
              <Link to="/about" className="block mt-1 text-[#bfa181] hover:text-white font-medium tracking-[0.18em] uppercase text-[11px] underline underline-offset-4 transition duration-300">+ DISCOVER CALDREN</Link>
            </div>
          </div>
        </div>

        {/* Bottom-Right Column: Showreel Button & Caption Chip */}
        <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-5">
          {/* Watch Showreel button with circular thumbnail (Stagger 3) */}
          <button id="showreel-btn" onClick={openShowreelModal} className={`hero-stagger ${revealedStaggers[3] ? 'revealed' : 'opacity-0 translate-y-5'} group flex items-center gap-4 bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/20 hover:border-[#bfa181]/60 pl-2 pr-6 py-2.5 rounded-full transition-all duration-300 text-left cursor-pointer`}>
            <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://framerusercontent.com/images/2k7C0rwaIbWcfmaARPsJmp2fBWA.jpg" 
                alt="Watch Showreel Preview" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="showreel-pulse-ring absolute inset-0 rounded-full border border-white/70"></span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="white" className="ml-0.5"><path d="M8 5v14l11-7z"/></svg>
              </div>
            </div>
            <div>
              <p className="text-[9px] tracking-[0.25em] uppercase text-[#bfa181] font-medium">FILM PREVIEW</p>
              <p className="text-xs text-white tracking-wider font-light group-hover:text-white transition">Watch Showreel</p>
            </div>
          </button>

          {/* 5 Slide One-By-One Reveal Progress Indicators (Stagger 4) */}
          <div className={`hero-stagger ${revealedStaggers[4] ? 'revealed' : 'opacity-0 translate-y-5'} flex items-center gap-3`}>
            <span className="text-[10px] tracking-[0.25em] uppercase text-white/50 font-mono" id="hero-slide-num">{`0${currentSlide + 1} / 05`}</span>
            <div className="flex items-center gap-1.5" id="hero-indicators">
              {[0, 1, 2, 3, 4].map(idx => (
                <button
                  key={idx}
                  type="button"
                  className={`hero-dot cursor-pointer ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => handleDotClick(idx)}
                  aria-label={`Reveal slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Bottom Corner Caption Chip (Dynamically synchronized with the current revealed image) (Stagger 5) */}
          <Link to="/developments" className={`hero-stagger ${revealedStaggers[5] ? 'revealed' : 'opacity-0 translate-y-5'} caption-chip inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-black/40 hover:bg-black/60 backdrop-blur-md border border-white/15 hover:border-[#bfa181] text-[11px] tracking-[0.16em] uppercase text-white/90 transition-all duration-300`}>
            <span className="w-2 h-2 rounded-full bg-[#bfa181]"></span>
            <span id="hero-caption-text">{heroCaptions[currentSlide]}</span>
            <span className="text-white/60">↗</span>
          </Link>
        </div>
      </div>
    </div>

    {/* Bottom-Center: Keep Scrolling with animated line & traveling dot (Stagger 6) */}
    <div className={`hero-stagger ${revealedStaggers[6] ? 'revealed' : 'opacity-0 translate-y-5'} flex flex-col items-center gap-2 self-center mt-6 cursor-pointer group`} onClick={scrollToProperties}>
      <span className="text-[10px] tracking-[0.25em] uppercase text-white/60 group-hover:text-white transition font-light">Keep scrolling</span>
      <div className="relative w-[1px] h-9 bg-white/25 overflow-hidden">
        <div className="scroll-indicator-dot absolute top-0 left-0 w-full h-3 bg-[#bfa181]"></div>
      </div>
    </div>
  </section>

  {/* FEATURED RESIDENCE */}
  <section id="properties" className="py-24 bg-white text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
        <div>
          <p className="text-sm tracking-widest uppercase text-slate-400 mb-4 reveal">Featured</p>
          <h2 className="text-5xl lg:text-6xl font-serif italic text-slate-300 reveal">Caldren Residence 07</h2>
        </div>
        <div className="lg:pt-12 reveal reveal-delay-1">
          <p className="text-lg text-slate-700 mb-6 max-w-md">
            A four-bedroom residence framed in travertine and bronze, set above the quiet boulevards of Tashkent City.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium border-b border-black text-slate-900 pb-0.5 hover:opacity-70 transition">
            View residence →
          </a>
        </div>
      </div>

      {/* Main property image + details */}
      <div className="grid lg:grid-cols-12 gap-6 mb-10">
        <div className="lg:col-span-8 reveal">
          <div className="relative overflow-hidden rounded-2xl">
            <img 
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80" 
              alt="Luxury residence exterior with pool"
              className="w-full h-[480px] object-cover img-scale"
            />
          </div>
        </div>
        <div className="lg:col-span-4 bg-[#f8f7f4] rounded-2xl p-8 flex flex-col justify-between reveal reveal-delay-1">
          <div>
            <div className="flex justify-between items-start mb-6">
              <span className="text-xs tracking-widest uppercase px-3 py-1 bg-black text-white rounded-full">For sale</span>
              <span className="text-sm text-slate-500">Tashkent City, Uzbekistan</span>
            </div>
            <p className="text-3xl font-medium mb-8 text-slate-900">$1,850,000</p>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between border-b border-black/10 pb-3">
                <span className="text-slate-500">Bedrooms</span>
                <span className="font-medium text-slate-900">4</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-3">
                <span className="text-slate-500">Bathrooms</span>
                <span className="font-medium text-slate-900">5</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-3">
                <span className="text-slate-500">Interior</span>
                <span className="font-medium text-slate-900">420 m²</span>
              </div>
              <div className="flex justify-between border-b border-black/10 pb-3">
                <span className="text-slate-500">Terrace</span>
                <span className="font-medium text-slate-900">96 m²</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Completion</span>
                <span className="font-medium text-slate-900">Ready · 2026</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3 mt-10">
            <a href="#contact" className="btn-primary flex-1 text-center py-3 rounded-full text-sm font-medium">Request a Viewing</a>
            <a href="#" className="btn-outline flex-1 text-center py-3 rounded-full text-sm text-slate-900 border border-slate-300 hover:border-slate-900">Details</a>
          </div>
        </div>
      </div>

      {/* Gallery */}
      <div className="grid md:grid-cols-3 gap-5">
        <div className="reveal">
          <div className="overflow-hidden rounded-xl mb-3">
            <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80" alt="Double-height living room" className="w-full h-56 object-cover img-scale card-hover" />
          </div>
          <p className="text-sm text-black/60">Double-height living room</p>
        </div>
        <div className="reveal reveal-delay-1">
          <div className="overflow-hidden rounded-xl mb-3">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Sunset views" className="w-full h-56 object-cover img-scale card-hover" />
          </div>
          <p className="text-sm text-black/60">Sunset views over Tashkent City</p>
        </div>
        <div className="reveal reveal-delay-2">
          <div className="overflow-hidden rounded-xl mb-3">
            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80" alt="Travertine kitchen" className="w-full h-56 object-cover img-scale card-hover" />
          </div>
          <p className="text-sm text-black/60">Travertine kitchen & dining</p>
        </div>
      </div>
    </div>
  </section>

  {/* DEVELOPMENTS */}
  <section id="developments" className="py-24 star-bg text-white">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif italic reveal">
          New addresses, <span className="not-italic">in progress</span>
        </h2>
        <div className="max-w-sm reveal reveal-delay-1">
          <p className="text-white/70 text-sm mb-4">
            From first sketch to handover — a portfolio of residential developments shaped by light, proportion and material.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-sm border-b border-white/40 pb-0.5 hover:border-white transition">
            All developments →
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="card-hover bg-white/5 rounded-2xl overflow-hidden border border-white/10 reveal">
          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80" alt="Aurelia Residences" className="w-full h-72 object-cover img-scale" />
            <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 text-black px-3 py-1 rounded-full">Under Construction</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium mb-1">Aurelia Residences</h3>
            <div className="flex justify-between text-sm text-white/60">
              <span>Tashkent City, Uzbekistan</span>
              <span>From $420,000</span>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card-hover bg-white/5 rounded-2xl overflow-hidden border border-white/10 reveal reveal-delay-1">
          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=700&q=80" alt="Monument" className="w-full h-72 object-cover img-scale" />
            <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 text-black px-3 py-1 rounded-full">Launching 2027</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium mb-1">Monument</h3>
            <div className="flex justify-between text-sm text-white/60">
              <span>Dubai Hills, UAE</span>
              <span>From $1,100,000</span>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card-hover bg-white/5 rounded-2xl overflow-hidden border border-white/10 reveal reveal-delay-2">
          <div className="relative overflow-hidden">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=700&q=80" alt="Casa North" className="w-full h-72 object-cover img-scale" />
            <span className="absolute top-4 left-4 text-[10px] tracking-widest uppercase bg-white/90 text-black px-3 py-1 rounded-full">Completed</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-medium mb-1">Casa North</h3>
            <div className="flex justify-between text-sm text-white/60">
              <span>Medeu, Almaty</span>
              <span>From $680,000</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* APPROACH */}
  <section id="about" className="py-24 bg-white text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      {/* Main Section Header */}
      <div className="mb-12 lg:mb-16 reveal">
        <span className="text-xs uppercase tracking-[0.2em] text-[#bfa181] font-semibold mb-3 block">Architectural Distinction</span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-slate-900 leading-[1.15] max-w-3xl">
          We present homes<br />
          the way <span className="font-serif italic font-light text-slate-700">architects</span> imagine them.
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
        {/* Left Column: Full-Height Image (Height increases parallel to that text, filling all empty space) */}
        <div className="reveal flex flex-col h-full">
          <div className="overflow-hidden rounded-3xl flex-1 min-h-[480px] lg:min-h-[580px] h-full shadow-2xl relative group">
            <img 
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=1200&q=85" 
              alt="Luxury bedroom architectural interior" 
              className="w-full h-full object-cover img-scale will-change-transform" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
              <span className="text-[10px] tracking-widest uppercase bg-white/20 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/30 text-white font-medium inline-block mb-2">Architectural Detail</span>
              <p className="text-sm font-serif italic text-white/95">Curated materials, natural light & proportion</p>
            </div>
          </div>
        </div>

        {/* Right Column: 4 Points (01, 02, 03, 04) */}
        <div className="flex flex-col justify-between space-y-6 lg:space-y-8 h-full">
          <div className="reveal border-t border-slate-200 pt-6">
            <div className="flex gap-6">
              <span className="text-sm font-mono text-[#bfa181] font-semibold">01</span>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Curated, never listed</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Every residence is visited, measured and photographed by our team before it reaches the portfolio — fewer homes, chosen carefully.</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-1 border-t border-slate-200 pt-6">
            <div className="flex gap-6">
              <span className="text-sm font-mono text-[#bfa181] font-semibold">02</span>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Developer-grade presentation</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Films, floor plans and material stories that help buyers understand a home long before the first viewing.</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-2 border-t border-slate-200 pt-6">
            <div className="flex gap-6">
              <span className="text-sm font-mono text-[#bfa181] font-semibold">03</span>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Four markets, one standard</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Tashkent, Dubai, Almaty and London — local advisors, shared discipline, one private client experience.</p>
              </div>
            </div>
          </div>
          <div className="reveal reveal-delay-3 border-t border-slate-200 pt-6">
            <div className="flex gap-6">
              <span className="text-sm font-mono text-[#bfa181] font-semibold">04</span>
              <div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Discreet from first call</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Private viewings, off-market access and quiet negotiation for clients who value time and privacy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* LOCATIONS */}
  <section id="locations" className="py-24 bg-[#f8f7f4] text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center mb-14 reveal">
        <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">Four cities, one standard</h2>
        <p className="text-slate-600 max-w-lg mx-auto">We work where architecture, demand and quality of life align — each market led by a local CALDREN advisor.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="card-hover relative overflow-hidden rounded-2xl aspect-[3/4] reveal">
          <img src="https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&q=80" alt="Tashkent" className="absolute inset-0 w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <span className="text-[10px] tracking-widest uppercase bg-white/90 text-black px-2.5 py-1 rounded-full">+18% YOY</span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">↗</span>
          </div>
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-2xl font-medium">Tashkent</h3>
            <p className="text-sm text-white/70">Uzbekistan</p>
          </div>
        </div>
        <div className="card-hover relative overflow-hidden rounded-2xl aspect-[3/4] reveal reveal-delay-1">
          <img src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80" alt="Dubai" className="absolute inset-0 w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <span className="text-[10px] tracking-widest uppercase bg-white/90 text-black px-2.5 py-1 rounded-full">+11% YOY</span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">↗</span>
          </div>
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-2xl font-medium">Dubai</h3>
            <p className="text-sm text-white/70">United Arab Emirates</p>
          </div>
        </div>
        <div className="card-hover relative overflow-hidden rounded-2xl aspect-[3/4] reveal reveal-delay-2">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80" alt="Almaty" className="absolute inset-0 w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <span className="text-[10px] tracking-widest uppercase bg-white/90 text-black px-2.5 py-1 rounded-full">+9% YOY</span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">↗</span>
          </div>
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-2xl font-medium">Almaty</h3>
            <p className="text-sm text-white/70">Kazakhstan</p>
          </div>
        </div>
        <div className="card-hover relative overflow-hidden rounded-2xl aspect-[3/4] reveal reveal-delay-3">
          <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80" alt="London" className="absolute inset-0 w-full h-full object-cover img-scale" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute top-4 left-4 right-4 flex justify-between">
            <span className="text-[10px] tracking-widest uppercase bg-white/90 text-black px-2.5 py-1 rounded-full">+4% YOY</span>
            <span className="w-8 h-8 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white">↗</span>
          </div>
          <div className="absolute bottom-5 left-5 text-white">
            <h3 className="text-2xl font-medium">London</h3>
            <p className="text-sm text-white/70">United Kingdom</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* STATS */}
  <section className="py-24 bg-white text-slate-900 border-t border-slate-100">
    <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
      <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 mb-16 reveal">
        Quietly, <span className="font-serif italic font-light text-slate-700">at scale.</span>
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
        <div className="reveal p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
          <p className="text-4xl sm:text-5xl font-serif text-slate-900 font-bold mb-3">$1.4B</p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">In residential sales since 2014</p>
        </div>
        <div className="reveal reveal-delay-1 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
          <p className="text-4xl sm:text-5xl font-serif text-slate-900 font-bold mb-3">320+</p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Residences sold since 2014</p>
        </div>
        <div className="reveal reveal-delay-2 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
          <p className="text-4xl sm:text-5xl font-serif text-slate-900 font-bold mb-3">12</p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Developments delivered with partners</p>
        </div>
        <div className="reveal reveal-delay-3 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs">
          <p className="text-4xl sm:text-5xl font-serif text-slate-900 font-bold mb-3">4</p>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">Markets, one private client team</p>
        </div>
      </div>
    </div>
  </section>

  {/* JOURNAL */}
  <section id="journal" className="py-24 bg-[#f8f7f4] text-slate-900">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
        <h2 className="text-4xl sm:text-5xl font-serif text-slate-900 reveal">
          Notes on <span className="font-serif italic font-light text-slate-700">living well</span>
        </h2>
        <div className="max-w-sm reveal reveal-delay-1">
          <p className="text-slate-600 text-sm mb-3">
            Market perspectives, architecture and the quiet details that make a home — written by our advisors and partners.
          </p>
          <a href="#" className="inline-flex items-center gap-2 text-sm text-slate-900 font-medium border-b border-slate-400 pb-0.5 hover:border-slate-900 transition">
            Read the journal →
          </a>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <article className="reveal group">
          <div className="overflow-hidden rounded-2xl mb-5">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Rooftop terrace" className="w-full h-56 object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <p className="text-[11px] tracking-widest uppercase text-slate-400 mb-2">Lifestyle · Sep 4, 2026 · 7 min</p>
          <h3 className="text-lg font-medium text-slate-900 leading-snug group-hover:underline underline-offset-4">The new rooftop: why terraces are becoming the most valuable room in the home</h3>
        </article>
        <article className="reveal reveal-delay-1 group">
          <div className="overflow-hidden rounded-2xl mb-5">
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80" alt="Travertine facade" className="w-full h-56 object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <p className="text-[11px] tracking-widest uppercase text-slate-400 mb-2">Architecture · Aug 28, 2026 · 6 min</p>
          <h3 className="text-lg font-medium text-slate-900 leading-snug group-hover:underline underline-offset-4">Why travertine is quietly returning to the facade</h3>
        </article>
        <article className="reveal reveal-delay-2 group">
          <div className="overflow-hidden rounded-2xl mb-5">
            <img src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80" alt="Tashkent City" className="w-full h-56 object-cover transition duration-700 group-hover:scale-105" />
          </div>
          <p className="text-[11px] tracking-widest uppercase text-slate-400 mb-2">Market · Aug 21, 2026 · 8 min</p>
          <h3 className="text-lg font-medium text-slate-900 leading-snug group-hover:underline underline-offset-4">Tashkent City in 2026: what buyers are paying for</h3>
        </article>
      </div>
    </div>
  </section>

  {/* CTA */}
  <section id="cta" className="py-28 star-bg text-white text-center relative">
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 reveal">
        Let’s find your<br /><span className="font-serif italic">next home.</span>
      </h2>
      <p className="text-white/70 mb-10 reveal reveal-delay-1">
        Tell us how you want to live. We will return with a short, considered selection.
      </p>
      <div className="flex flex-wrap justify-center gap-4 reveal reveal-delay-2">
        <button type="button" onClick={openContactModal} className="contact-trigger bg-white text-black px-8 py-3.5 rounded-full text-sm font-medium hover:bg-[#bfa181] hover:text-white transition cursor-pointer">Start a Conversation</button>
        <a href="#properties" className="border border-white/40 px-8 py-3.5 rounded-full text-sm hover:bg-white/10 transition">Explore Properties</a>
      </div>
    </div>
  </section>

  {/* FOOTER */}
    </MainLayout>
  );
}
