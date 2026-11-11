import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function LogoThemesPage() {
  return (
    <MainLayout footerVariant="compact">
      {/* Hero Header */}
  <section className="py-16 sm:py-20 px-4 sm:px-8 border-b border-slate-200 text-center bg-white">
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-widest font-bold">
        Brand Identity System · 5 Curated Themes
      </div>
      <h1 className="text-4xl sm:text-6xl font-serif text-slate-900">
        Viseshta Group <span className="italic text-blue-600">Logo Themes</span>
      </h1>
      <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
        Explore 5 distinct visual expressions tailored for institutional commercial property, Grade-A IT corporate corridors, and sustainable plotted communities in Hyderabad.
      </p>

      {/* Background Switcher (Preview on Light vs Deep Blue) */}
      <div className="pt-4 flex items-center justify-center gap-3">
        <span className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Preview Canvas:</span>
        <button  id="lightBtn" className="px-4 py-1.5 rounded-full text-xs font-bold bg-blue-600 text-white border border-blue-600 transition cursor-pointer shadow-sm">Crisp White</button>
        <button  id="darkBtn" className="px-4 py-1.5 rounded-full text-xs font-bold bg-white text-slate-700 border border-slate-300 hover:border-blue-600 transition cursor-pointer shadow-sm">Navy Canvas</button>
      </div>
    </div>
  </section>

  {/* 5 LOGO THEMES SHOWCASE GRID */}
  <section className="py-16 px-4 sm:px-8 lg:px-12" id="canvasContainer">
    <div className="max-w-7xl mx-auto space-y-16">

      {/* THEME 1: ROYAL BRONZE & IMPERIAL GOLD */}
      <div className="theme-card bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 transition-all shadow-lg">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Logo Display Area */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-[#0c0b0a] border border-[#bfa181]/30 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-[#bfa181]/15 rounded-full blur-3xl"></div>
            
            {/* SVG Logo: Theme 1 */}
            <div className="flex items-center gap-5">
              {/* Emblem */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#241f18] via-[#1a1712] to-[#0c0b09] p-3 border border-[#bfa181] shadow-[0_10px_35px_rgba(191,161,129,0.35)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FCE19B"/>
                      <stop offset="50%" stopColor="#D4AF37"/>
                      <stop offset="100%" stopColor="#9B7B56"/>
                    </linearGradient>
                  </defs>
                  <path d="M8 8L24 38L40 8H32.5L24 24L15.5 8H8Z" fill="url(#goldGrad1)"/>
                  <line x1="17" y1="28" x2="31" y2="28" stroke="url(#goldGrad1)" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="url(#goldGrad1)" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="21" y1="36" x2="27" y2="36" stroke="url(#goldGrad1)" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>

              {/* Typography */}
              <div className="leading-none text-left">
                <div className="text-3xl sm:text-4xl font-serif tracking-[0.22em] text-white font-medium">VISESHTA</div>
                <div className="flex items-center gap-2 my-1.5">
                  <div className="h-px w-6 bg-gradient-to-r from-transparent to-[#bfa181]"></div>
                  <div className="w-1 h-1 rotate-45 bg-[#bfa181]"></div>
                  <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#bfa181]"></div>
                </div>
                <div className="text-xs sm:text-sm tracking-[0.45em] text-[#bfa181] font-semibold uppercase">GROUP · HYDERABAD</div>
              </div>
            </div>
          </div>

          {/* Description & Details */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-amber-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-600"></span>
              Theme 01 · Imperial Bronze & Champagne Gold
            </div>
            <h3 className="text-3xl font-serif text-slate-900">Private Wealth & Architectural Prestige</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Crafted for luxury commercial portfolios and discerning high-ticket investors. The metallic gold gradient represents financial strength, stability, and enduring architectural permanence.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-mono">Primary: #BFA181</span>
              <span className="px-3 py-1 rounded-lg bg-amber-100 text-amber-900 border border-amber-200 font-mono">Accent: #D4AF37</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono">Base: #0E0D0B</span>
            </div>

            <div className="pt-3 flex gap-3 text-xs">
              <button  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer shadow-sm">
                Copy Vector SVG
              </button>
              <span className="text-[11px] text-slate-500 self-center">Best for: Header, VIP Brochures, Gold Foil Cards</span>
            </div>
          </div>
        </div>
      </div>

      {/* THEME 2: CORPORATE SAPPHIRE & PLATINUM */}
      <div className="theme-card bg-white rounded-3xl p-8 sm:p-12 border border-blue-200 transition-all shadow-lg ring-2 ring-blue-500/20">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-[#081224] border border-blue-500/30 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#1b4382] via-[#102a5c] to-[#071736] p-3 border border-blue-400/50 shadow-[0_10px_35px_rgba(27,67,130,0.5)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L24 38L40 8H32.5L24 24L15.5 8H8Z" fill="#FFFFFF"/>
                  <line x1="17" y1="28" x2="31" y2="28" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="21" y1="36" x2="27" y2="36" stroke="#60A5FA" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="leading-none text-left">
                <div className="text-3xl sm:text-4xl font-sans font-extrabold tracking-[0.18em] text-white">VISESHTA</div>
                <div className="h-0.5 w-full bg-gradient-to-r from-blue-500 to-transparent my-1.5"></div>
                <div className="text-xs sm:text-sm tracking-[0.4em] text-blue-400 font-bold uppercase">COMMERCIAL IT TOWERS</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-blue-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
              Theme 02 · Corporate Sapphire & Platinum (Official Theme)
            </div>
            <h3 className="text-3xl font-serif text-slate-900">Grade-A Enterprise & IT Corridor Authority</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Ideal for corporate tech tenants, institutional commercial sales, and Invesmart IT offices. Sapphire blue represents reliability, institutional trust, and commercial excellence.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 font-mono">Sapphire: #1B4382</span>
              <span className="px-3 py-1 rounded-lg bg-blue-100 text-blue-800 border border-blue-200 font-mono">Cyan: #60A5FA</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono">Base: #081224</span>
            </div>

            <div className="pt-3 flex gap-3 text-xs">
              <button  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer shadow-sm">
                Copy Vector SVG
              </button>
              <span className="text-[11px] text-slate-500 self-center">Best for: Commercial Lease Decks, Corporate Towers</span>
            </div>
          </div>
        </div>
      </div>

      {/* THEME 3: MINIMALIST MONOCHROME & ARCHITECTURAL TITANIUM */}
      <div className="theme-card bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 transition-all shadow-lg">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-black border border-slate-700 relative overflow-hidden group">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white text-black p-3 shadow-2xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L24 38L40 8H32.5L24 24L15.5 8H8Z" fill="#000000"/>
                  <line x1="17" y1="28" x2="31" y2="28" stroke="#000000" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#000000" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="21" y1="36" x2="27" y2="36" stroke="#000000" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="leading-none text-left">
                <div className="text-3xl sm:text-4xl font-sans font-light tracking-[0.25em] text-white">VISESHTA</div>
                <div className="h-px w-full bg-white/30 my-2"></div>
                <div className="text-xs sm:text-sm tracking-[0.5em] text-slate-300 uppercase font-light">GROUP · HYDERABAD</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-slate-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
              Theme 03 · Stark Architectural Monochrome
            </div>
            <h3 className="text-3xl font-serif text-slate-900">Pure Architectural Precision</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              High-contrast, razor-sharp editorial aesthetic influenced by international architectural monographs and modern minimalist design.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-slate-100 text-slate-900 border border-slate-300 font-mono font-bold">Pure White: #FFFFFF</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 text-white font-mono">Deep Obsidian: #000000</span>
            </div>

            <div className="pt-3 flex gap-3 text-xs">
              <button  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer shadow-sm">
                Copy Vector SVG
              </button>
              <span className="text-[11px] text-slate-500 self-center">Best for: Blueprints, Signage, Luxury Editorial Print</span>
            </div>
          </div>
        </div>
      </div>

      {/* THEME 4: FOREST EMERALD & CHAMPAGNE GOLD (SUSTAINABLE ESTATES) */}
      <div className="theme-card bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 transition-all shadow-lg">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-[#061c14] border border-emerald-500/30 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-emerald-500/20 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0d3b2e] via-[#08281f] to-[#041510] p-3 border border-emerald-400/40 shadow-[0_10px_35px_rgba(16,185,129,0.3)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L24 38L40 8H32.5L24 24L15.5 8H8Z" fill="#FCE19B"/>
                  <line x1="17" y1="28" x2="31" y2="28" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="21" y1="36" x2="27" y2="36" stroke="#34D399" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="leading-none text-left">
                <div className="text-3xl sm:text-4xl font-serif tracking-[0.2em] text-white">VISESHTA</div>
                <div className="h-0.5 w-full bg-gradient-to-r from-emerald-400 to-transparent my-1.5"></div>
                <div className="text-xs sm:text-sm tracking-[0.4em] text-emerald-400 font-semibold uppercase">ESTATES & FARMLANDS</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-emerald-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
              Theme 04 · Forest Emerald & Champagne
            </div>
            <h3 className="text-3xl font-serif text-slate-900">Sustainable Living & Farmland Luxury</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Tailored for green-certified commercial developments (IGBC), Palm Valley villa plots, and Teak Village agro retreats. Evokes nature, natural heritage, and responsible stewardship.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 font-mono">Emerald: #0D3B2E</span>
              <span className="px-3 py-1 rounded-lg bg-emerald-100 text-emerald-800 border border-emerald-200 font-mono">Mint: #34D399</span>
              <span className="px-3 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-mono">Champagne: #FCE19B</span>
            </div>

            <div className="pt-3 flex gap-3 text-xs">
              <button  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer shadow-sm">
                Copy Vector SVG
              </button>
              <span className="text-[11px] text-slate-500 self-center">Best for: Eco-Estates, Villa Communities, Farmlands</span>
            </div>
          </div>
        </div>
      </div>

      {/* THEME 5: LUMINESCENT AZURE & CYBER TITANIUM (FUTURE IT HUBS) */}
      <div className="theme-card bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 transition-all shadow-lg">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center justify-center p-8 sm:p-12 rounded-2xl bg-[#07131d] border border-cyan-400/30 relative overflow-hidden group">
            <div className="absolute -top-16 -left-16 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl"></div>

            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-[#0e2a3a] via-[#071924] to-[#030d14] p-3 border border-cyan-400/60 shadow-[0_10px_35px_rgba(34,211,238,0.35)] flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 8L24 38L40 8H32.5L24 24L15.5 8H8Z" fill="#38BDF8"/>
                  <line x1="17" y1="28" x2="31" y2="28" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="19" y1="32" x2="29" y2="32" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="21" y1="36" x2="27" y2="36" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>

              <div className="leading-none text-left">
                <div className="text-3xl sm:text-4xl font-sans font-black tracking-[0.2em] text-white">VISESHTA</div>
                <div className="h-0.5 w-full bg-gradient-to-r from-cyan-400 to-indigo-500 my-1.5"></div>
                <div className="text-xs sm:text-sm tracking-[0.42em] text-cyan-400 font-bold uppercase">NEXT-GEN REALTY</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-cyan-700 font-bold">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-600"></span>
              Theme 05 · Luminescent Azure & Titanium
            </div>
            <h3 className="text-3xl font-serif text-slate-900">Smart Commercial & Tech Campus Innovation</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Refined for tech-driven fractional ownership, commercial digital asset models, and smart building management systems.
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="px-3 py-1 rounded-lg bg-cyan-50 text-cyan-700 border border-cyan-200 font-mono">Electric Azure: #38BDF8</span>
              <span className="px-3 py-1 rounded-lg bg-slate-900 text-cyan-200 font-mono">Titanium: #0E2A3A</span>
            </div>

            <div className="pt-3 flex gap-3 text-xs">
              <button  className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold transition cursor-pointer shadow-sm">
                Copy Vector SVG
              </button>
              <span className="text-[11px] text-slate-500 self-center">Best for: Digital Dashboards, Web App, Tech Portals</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>

  {/* REAL-WORLD COLLATERAL PREVIEW SECTION */}
  <section className="py-20 bg-slate-100 border-t border-slate-200">
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="text-center mb-16">
        <span className="text-xs uppercase tracking-[0.25em] text-blue-600 font-bold block mb-2">Real-World Mockups</span>
        <h2 className="text-3xl sm:text-5xl font-serif text-slate-900">Brand Applications</h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-2 font-normal">How the logo themes render across primary touchpoints.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Application 1: Matte Business Card */}
        <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative overflow-hidden">
          <div className="text-[10px] uppercase tracking-widest text-blue-600 font-bold mb-6">Foil-Stamped Corporate Card</div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-blue-900 border border-blue-600 flex items-center justify-center shadow-sm">
              <span className="font-serif text-white font-bold text-xl">V</span>
            </div>
            <div>
              <div className="text-xl font-serif text-slate-900 font-bold">VISESHTA GROUP</div>
              <div className="text-[9px] tracking-[0.3em] text-blue-600 font-semibold">COMMERCIAL INVESTMENTS</div>
            </div>
          </div>
          <div className="pt-6 border-t border-slate-100 flex justify-between items-end text-xs text-slate-600">
            <div>
              <strong className="text-slate-900 block font-serif text-sm">Mr. Suman Babu Garaga</strong>
              <span className="text-[10px] text-slate-500">Founder & Managing Director</span>
            </div>
            <div className="text-right text-[10px] font-mono text-slate-500">
              Jubilee Hills, Hyderabad<br />+91 91000 24000
            </div>
          </div>
        </div>

        {/* Application 2: Commercial Tower Glass Signage */}
        <div className="bg-gradient-to-br from-[#0c1a2e] to-[#060e1a] p-8 rounded-3xl border border-blue-400/30 shadow-2xl relative overflow-hidden">
          <div className="text-[10px] uppercase tracking-widest text-blue-400 font-semibold mb-6">Grade-A Architectural Glass Signage</div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1b4382] to-[#071736] border border-blue-400/50 flex items-center justify-center">
              <span className="font-sans text-white font-black text-xl">V</span>
            </div>
            <div>
              <div className="text-xl font-sans font-bold tracking-widest text-white">INVESMART</div>
              <div className="text-[9px] tracking-[0.3em] text-blue-400">HYDERABAD IT CORRIDOR</div>
            </div>
          </div>
          <div className="pt-6 border-t border-white/10 flex justify-between items-end text-xs text-white/70">
            <div>
              <strong className="text-white block font-medium">Main Entrance Façade</strong>
              <span className="text-[10px] text-white/40">Illuminated Acrylic & Brushed Steel</span>
            </div>
            <div className="text-right text-[10px] text-emerald-400 font-mono">
              Grade-A Pre-Certified
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* Footer */}
    </MainLayout>
  );
}
