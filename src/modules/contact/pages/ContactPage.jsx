import React, { useState, useEffect } from 'react';
import MainLayout from '@app/layouts/MainLayout';

const contactHeroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=85',
    title: 'Corporate Advisory Suite & Reception',
    caption: 'Direct Advisory 01 · Corporate Advisory Suite & Reception',
  },
  {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=85',
    title: 'Financial District & Jubilee Hills Presence',
    caption: 'Direct Advisory 02 · Financial District & Jubilee Hills Presence',
  },
  {
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=85',
    title: 'Dedicated Senior Investment Managers',
    caption: 'Direct Advisory 03 · Dedicated Senior Investment Managers',
  },
  {
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=1920&q=85',
    title: 'Private Portfolio Briefing Lounge',
    caption: 'Direct Advisory 04 · Private Portfolio Briefing Lounge',
  },
  {
    image: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?w=1920&q=85',
    title: 'Guided On-Site Inspections & Tours',
    caption: 'Direct Advisory 05 · Guided On-Site Inspections & Tours',
  },
];

export default function ContactPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % contactHeroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <MainLayout>
      {/* SECTION: HERO SECTION (5-IMAGE 5s SLIDESHOW & PERFECT ZERO-SCROLL POSITIONING) */}
      <section id="hero" className="hero-section relative isolate z-0 h-[calc(100vh-80px)] min-h-[580px] max-h-[820px] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-8 lg:px-12 py-3 sm:py-5">
        
        {/* 5-Image Slideshow Background (Changes Every 5 Seconds with Smooth Ken Burns / 3D Cinematic Animation) */}
        <div id="hero-bg-container" className="absolute inset-0 z-0 overflow-hidden pointer-events-none" style={{ perspective: '1200px', transformStyle: 'preserve-3d' }}>
          {contactHeroSlides.map((slide, idx) => (
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
            <span>DIRECT INVESTOR DESK · HYDERABAD CORPORATE OFFICE</span>
          </div>

          {/* Main Headline (Moves up forward, calibrated size for 100% viewport fit without scroll) */}
          <h1 className="animate-hero-up-2 text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-serif text-white leading-[1.08] sm:leading-[1.12] tracking-tight mb-2 sm:mb-3 drop-shadow-md">
            Connect With Our Advisory Desk.<br />
            <span className="italic font-light text-slate-100">Schedule a site visit or confidential briefing.</span>
          </h1>

          {/* Subheadline (Moves up forward) */}
          <p className="animate-hero-up-3 text-sm sm:text-base md:text-lg lg:text-xl text-blue-100/90 max-w-xl mx-auto font-light leading-snug mb-4 sm:mb-5">
            Our senior commercial property directors are available for structured investment breakdowns, title dockets, and on-ground tours.
          </p>

          {/* Primary Action CTA & Quick Connect (Moves up forward) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-5 w-full">
            <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20would%20like%20to%20schedule%20a%20site%20visit." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-[0_8px_25px_rgba(16,185,129,0.4)] transition-all transform hover:-translate-y-0.5 cursor-pointer">
              <span>Connect via WhatsApp</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
            </a>

            <a href="#enquiry-form" className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full text-xs tracking-wider uppercase font-medium text-white border border-white/30 hover:border-blue-400 hover:bg-white/10 transition-all">
              Submit Form Below ↓
            </a>
          </div>

          {/* 4 Key Numbers Micro-Bar (Quick facts visible immediately without scroll) */}
          <div className="animate-hero-up-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4 text-[11px] sm:text-xs text-slate-200">
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">HQ</span> Jubilee Hills
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-emerald-400 font-bold">+91 91000 24000</span> Direct Line
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Free</span> Chauffeur Site Visits
            </div>
            <div className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 flex items-center gap-1.5 font-medium">
              <span className="text-blue-400 font-bold">Mon - Sat</span> 9:30 AM - 7 PM
            </div>
          </div>

          {/* Slide Indicator & 5s Timer Progress Bar (Moves up forward) */}
          <div className="animate-hero-up-5 flex flex-col items-center gap-2 w-full max-w-md pt-1">
            {/* Live Slide Caption */}
            <div id="hero-slide-caption" className="text-[10px] sm:text-[11px] tracking-wider uppercase text-blue-300 font-semibold hero-caption-animate flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
              <span id="caption-text">{contactHeroSlides[currentSlide].caption}</span>
            </div>

            {/* 5 Interactive 5s Progress Indicators */}
            <div className="flex items-center gap-2 w-full justify-center">
              {contactHeroSlides.map((_, idx) => (
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
              Reach our dedicated investment advisory team for transparent guidance and verified project dockets.
            </p>
          </div>

        </div>
      </section>


  <section className="py-20 bg-white" id="enquiry-form">
    <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
      <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left: Office & Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200 space-y-6 shadow-xs">
            <h3 className="text-2xl font-serif text-slate-900 font-bold">Hyderabad Corporate Office</h3>
            
            <div className="space-y-4 text-xs text-slate-700">
              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-600">📍</span>
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Corporate Address</strong>
                  <p className="text-slate-600 leading-relaxed">Road No. 36, Jubilee Hills / Financial District Outer Ring Road Belt, Hyderabad, Telangana 500033.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-600">📞</span>
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Phone Enquiries</strong>
                  <a href="tel:+919100024000" className="text-blue-600 font-semibold hover:underline block">+91 91000 24000</a>
                  <a href="tel:+914048529999" className="text-slate-600 hover:text-slate-900 block mt-0.5">+91 40 4852 9999</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-600">✉</span>
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Official Email</strong>
                  <a href="mailto:invest@viseshtagroup.com" className="text-blue-600 font-semibold hover:underline">invest@viseshtagroup.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-xl text-blue-600">⏰</span>
                <div>
                  <strong className="text-slate-900 block mb-0.5 font-bold">Visiting Hours</strong>
                  <p className="text-slate-600">Monday – Saturday: 9:30 AM – 7:00 PM<br />Sunday: By Prior Appointment Only</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20would%20like%20to%20schedule%20a%20site%20visit." target="_blank" rel="noreferrer" className="w-full py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md">
                <span>Direct WhatsApp Consultation</span>
              </a>
            </div>
          </div>

          {/* Embedded Map */}
          <div className="rounded-3xl overflow-hidden border border-slate-200 h-64 bg-slate-100 shadow-sm">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121820.65487771615!2d78.30737385202868!3d17.43575971510657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93a276dd4563%3A0x8dd0b10629a65d38!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ 'border': '0' }} 
              allowFullScreen 
              loading="lazy">
            </iframe>
          </div>
        </div>

        {/* Right: Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-lg">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wider text-blue-600 font-bold block mb-1">Send a Message</span>
              <h2 className="text-3xl font-serif text-slate-900 font-bold">Commercial Enquiry & Site Visit</h2>
              <p className="text-xs text-slate-600 mt-1">Fill out your requirements and an investment advisor will respond within 2 hours.</p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); }} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Your Full Name *</label>
                  <input type="text" name="name" required placeholder="Name" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Phone Number (Required) *</label>
                  <input type="tel" name="phone" required placeholder="Phone Number" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Email Address</label>
                  <input type="email" name="email" placeholder="name@domain.com" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none focus:border-blue-600" />
                </div>
                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Project of Interest</label>
                  <select name="interest" className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3.5 text-sm text-slate-900 focus:outline-none cursor-pointer">
                    <option value="Invesmart Commercial Tower">Invesmart Commercial Tower (From Rs 30L*)</option>
                    <option value="Palm Valley Villa Plots">Palm Valley Villa Plots</option>
                    <option value="Teak Village Managed Farmland">Teak Village Managed Farmland</option>
                    <option value="Vistara Valley Highway Plots">Vistara Valley Highway Plots</option>
                    <option value="General Corporate Query">General Corporate Query</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] uppercase tracking-wider text-slate-700 mb-1 font-semibold">Your Message / Questions</label>
                <textarea rows="4" placeholder="How can we assist your property portfolio?" className="w-full bg-white border border-slate-300 rounded-xl p-4 text-sm text-slate-900 focus:outline-none focus:border-blue-600"></textarea>
              </div>

              <div>
                <button type="submit" className="w-full py-4 rounded-full text-xs uppercase tracking-wider font-bold bg-blue-600 text-white hover:bg-blue-700 transition cursor-pointer shadow-md shadow-blue-500/25">
                  Submit Enquiry & Get Breakdown →
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </section>

  {/* Footer */}
    </MainLayout>
  );
}
