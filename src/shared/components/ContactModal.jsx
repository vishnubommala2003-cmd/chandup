import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';

export default function ContactModal() {
  const { isContactOpen, closeContactModal } = useModal();
  const [selectedChip, setSelectedChip] = useState('Acquiring');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Tashkent City',
    budget: '$1.5M - $3M',
    requirements: '',
  });

  if (!isContactOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleClose = () => {
    closeContactModal();
    // Reset state after close
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: 'Tashkent City',
        budget: '$1.5M - $3M',
        requirements: '',
      });
    }, 400);
  };

  return (
    <div
      id="contact-modal"
      className="fixed inset-0 z-[120] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 transition-all duration-500 overflow-y-auto active"
      style={{ display: 'flex', opacity: 1, visibility: 'visible', pointerEvents: 'auto' }}
    >
      {/* Click backdrop to close */}
      <div
        className="fixed inset-0 cursor-pointer"
        id="contact-modal-backdrop"
        onClick={handleClose}
      />

      <div
        className="relative w-full max-w-4xl bg-gradient-to-br from-[#0c1933] via-[#09152b] to-[#050d1c] rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(49,98,172,0.25)] border border-[#bfa181]/30 my-auto transform transition-all duration-500 z-10"
        id="contact-modal-card"
        style={{ transform: 'scale(1) translateY(0)' }}
      >
        {/* Top Subtle Gold Accent Ribbon */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#bfa181] to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          id="close-contact-btn"
          onClick={handleClose}
          className="absolute top-5 right-5 sm:top-6 sm:right-6 z-20 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 flex items-center justify-center transition-all duration-300 group shadow-lg cursor-pointer"
          aria-label="Close Contact Dialog"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            <line x1="1" y1="1" x2="13" y2="13" />
            <line x1="13" y1="1" x2="1" y2="13" />
          </svg>
        </button>

        <div className="grid lg:grid-cols-12">
          {/* Left Column: Editorial Brand & Private Advisory Info (5 cols) */}
          <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 relative overflow-hidden bg-gradient-to-b from-white/[0.04] to-transparent">
            {/* Ambient Radial Glow */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#3162ac]/20 rounded-full blur-3xl pointer-events-none" />

            <div>
              {/* Brand Badge */}
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-white px-3 py-1.5 rounded-lg flex items-center shadow-md">
                  <img src="/logo.png" alt="VISESHTA AVENUES" className="h-5 w-auto object-contain" />
                </div>
                <span className="text-[10px] tracking-[0.28em] uppercase text-[#bfa181] font-medium">Private Advisory</span>
              </div>

              <h3 className="text-3xl sm:text-4xl text-white font-serif italic mb-4 leading-tight">
                Let’s find your <span className="text-[#bfa181]">next home.</span>
              </h3>
              <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-8 font-light">
                We represent a discrete portfolio of prime penthouses, architectural villas, and new landmark developments across Tashkent, Dubai, London, and Almaty.
              </p>

              {/* Direct Desk Information */}
              <div className="space-y-4 text-xs">
                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#bfa181]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">Direct Client Line</div>
                    <a href="tel:+998712000707" className="font-mono text-white hover:text-[#bfa181] transition">
                      +998 71 200 07 07
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#bfa181]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">Private Desk</div>
                    <a href="mailto:hello@viseshtaavenues.com" className="text-white hover:text-[#bfa181] transition">
                      hello@viseshtaavenues.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-white/80">
                  <div className="w-8 h-8 rounded-full bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#bfa181]">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0116 0Z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-white/40">Advisory Suites</div>
                    <div className="text-white/90">Amir Temur 107, Tashkent City</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Live Status & Confidentiality Badge */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-[11px] text-white/60">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Advisors Online</span>
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#bfa181]/80">100% Confidential</span>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-10 bg-black/20">
            {!isSubmitted ? (
              <div id="contact-form-container">
                <div className="mb-6">
                  <p className="text-[11px] tracking-[0.24em] uppercase text-[#bfa181] font-medium mb-1">Inquiry Form</p>
                  <h4 className="text-2xl text-white font-medium">Request a Private Briefing</h4>
                </div>

                {/* Inquiry Segment Selection */}
                <div className="mb-5">
                  <label className="block text-[10px] uppercase tracking-widest text-white/50 mb-2">I am interested in</label>
                  <div className="grid grid-cols-3 gap-2" id="inquiry-type-chips">
                    {['Acquiring', 'Developments', 'Private Sale'].map((chip) => (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => setSelectedChip(chip)}
                        className={`inquiry-chip px-3 py-2 rounded-xl text-xs text-center transition cursor-pointer ${
                          selectedChip === chip
                            ? 'active border-[#bfa181] bg-[#bfa181]/20 text-white font-medium'
                            : 'border border-white/15 bg-white/5 text-white/70 hover:border-white/30'
                        }`}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form */}
                <form id="contact-popup-form" className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Elena Rostova"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none transition"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+998 90 123 45 67"
                        className="w-full bg-white/5 border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full bg-white/5 border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-3 text-sm text-white placeholder:text-white/30 focus:outline-none transition"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Target Location</label>
                      <select
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full bg-[#0c1830] border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition cursor-pointer"
                      >
                        <option value="Tashkent City">Tashkent City, Uzbekistan</option>
                        <option value="Dubai">Dubai, UAE</option>
                        <option value="London">London, UK</option>
                        <option value="Almaty">Almaty, Kazakhstan</option>
                        <option value="Other">Other Global Markets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Budget Expectation</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full bg-[#0c1830] border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition cursor-pointer"
                      >
                        <option value="$350k - $750k">$350,000 – $750,000</option>
                        <option value="$750k - $1.5M">$750,000 – $1,500,000</option>
                        <option value="$1.5M - $3M">$1,500,000 – $3,000,000</option>
                        <option value="$3M+">$3,000,000+</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-wider text-white/50 mb-1.5">Specific Requirements (Optional)</label>
                    <textarea
                      rows="2"
                      value={formData.requirements}
                      onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                      placeholder="e.g. 4-bedroom duplex with terrace in Aurelia Residences..."
                      className="w-full bg-white/5 border border-white/15 focus:border-[#bfa181] rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none transition resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-gradient-to-r from-[#bfa181] to-[#d6bc9f] hover:from-[#d6bc9f] hover:to-[#bfa181] text-black font-semibold text-xs tracking-[0.2em] uppercase transition duration-300 shadow-[0_10px_30px_rgba(191,161,129,0.3)] flex items-center justify-center gap-2 cursor-pointer btn-shimmer"
                    >
                      <span>Send Confidential Request</span>
                      <span className="text-base font-normal">→</span>
                    </button>
                  </div>

                  <p className="text-[10px] text-center text-white/40 tracking-wider">
                    Non-disclosure guaranteed · No spam or unsolicited marketing
                  </p>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <div id="contact-success-screen" className="text-center py-12 px-6 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h4 className="text-2xl text-white font-serif italic mb-2">Request Received Discreetly</h4>
                <p className="text-sm text-white/70 max-w-sm mb-6 leading-relaxed">
                  Your inquiry has been assigned to our senior private client advisor. You will receive a bespoke portfolio briefing within 2 hours.
                </p>
                <button
                  type="button"
                  id="close-success-btn"
                  onClick={handleClose}
                  className="px-6 py-2.5 rounded-full border border-white/30 text-xs tracking-widest uppercase text-white hover:bg-white hover:text-black transition cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
