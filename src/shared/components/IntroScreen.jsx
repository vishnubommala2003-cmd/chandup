import React, { useEffect, useState } from 'react';
import { useIntro } from '../../contexts/IntroContext';

export default function IntroScreen() {
  const { introStatus, count, isCompleted } = useIntro();
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Lock body/html scroll during the flash screen intro
  useEffect(() => {
    if (!isCompleted) {
      document.body.classList.add('flash-active');
      document.documentElement.classList.add('flash-active');
    } else {
      document.body.classList.remove('flash-active');
      document.documentElement.classList.remove('flash-active');
    }
    return () => {
      document.body.classList.remove('flash-active');
      document.documentElement.classList.remove('flash-active');
    };
  }, [isCompleted]);

  // Sync native browser fullscreen status
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  const toggleFullscreen = (e) => {
    if (e) e.stopPropagation();
    if (!document.fullscreenElement) {
      const rootDoc = document.documentElement;
      if (rootDoc.requestFullscreen) {
        rootDoc.requestFullscreen().catch(() => {});
      } else if (rootDoc.webkitRequestFullscreen) {
        rootDoc.webkitRequestFullscreen();
      } else if (rootDoc.msRequestFullscreen) {
        rootDoc.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  // Hide completely from the render tree once transition has finished
  if (isCompleted) {
    return null;
  }

  const isSliding = introStatus === 'sliding';

  return (
    <div
      id="page-loader"
      className={`fixed inset-0 z-[100] overflow-hidden text-white flex flex-col justify-between p-6 sm:p-12 transition-transform duration-[1800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
        isSliding ? 'loaded' : ''
      }`}
      style={{
        width: '100vw',
        height: '100vh',
        minHeight: '100vh',
      }}
    >
      {/* 100% Full-Screen Cinematic Architectural Background Image */}
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=85"
        alt="VISESHTA AVENUES Flash Screen"
        className="flash-bg-image"
      />

      {/* Atmospheric Radial Gradient & Vignette Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1c40]/80 via-[#071738]/85 to-[#040d1f]/95 pointer-events-none z-[1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(49,98,172,0.45)_0%,transparent_70%)] pointer-events-none z-[2]" />

      {/* Golden Glowing Linear Progress Bar along bottom */}
      <div
        id="flash-progress-bar"
        className="flash-progress-bar"
        style={{ width: `${count}%` }}
      />

      {/* Top Bar with Brand & Fullscreen Toggle Button */}
      <div className="relative z-10 flex justify-between items-center text-[10px] sm:text-xs tracking-[0.28em] uppercase text-white/70 font-light">
        <div className="flex items-center gap-3">
          <span className="font-medium tracking-[0.3em] text-[#bfa181]">VISESHTA AVENUES</span>
          <span className="hidden md:inline text-white/30">|</span>
          <span className="hidden md:inline text-white/50">ARCHITECTURE &amp; RESIDENCES</span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={toggleFullscreen}
            className="flash-fullscreen-btn"
            title="Toggle Browser Fullscreen Mode"
          >
            <svg
              className="w-3.5 h-3.5 text-[#bfa181]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isFullscreen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              )}
            </svg>
            <span className="flash-fullscreen-btn-text">
              {isFullscreen ? 'Exit Fullscreen ✕' : 'Fullscreen ⛶'}
            </span>
          </button>
          <span className="text-white/50 text-[10px] sm:text-xs tracking-[0.2em]">EST. 2014</span>
        </div>
      </div>

      {/* Center Luxury Logo Presentation */}
      <div className="relative z-10 text-center my-auto flex flex-col items-center select-none">
        {/* Architectural Medallion Showcase with Layered Glow & Gold Hairline Rings */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36 flex items-center justify-center mb-6 group">
          {/* Concentric Gold Compass Ring */}
          <div className="absolute inset-0 rounded-full border border-[#bfa181]/40 scale-100 animate-[spin_60s_linear_infinite]" />
          <div className="absolute inset-2 rounded-full border border-dashed border-white/20 scale-95" />
          <div className="absolute -inset-2 rounded-full bg-[#3162ac]/30 blur-2xl animate-pulse" />

          {/* Center Frosted Sapphire Plaque */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-gradient-to-br from-[#1b4382]/95 via-[#102a5c]/90 to-[#081735]/95 backdrop-blur-2xl border border-[#bfa181]/50 flex items-center justify-center shadow-[0_0_50px_rgba(49,98,172,0.7),inset_0_1px_1px_rgba(255,255,255,0.4)]">
            {/* Viseshta Architectural Emblem SVG */}
            <svg width="56" height="56" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
              <rect x="4" y="4" width="40" height="40" rx="8" fill="#3162AC" />
              <path d="M10 8L24 37L38 8H31.5L24 24.5L16.5 8H10Z" fill="white" />
              <line x1="18" y1="28" x2="30" y2="28" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="19.5" y1="32" x2="28.5" y2="32" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="21" y1="36" x2="27" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Elevated Brand Typography with Bronze Architectural Divider */}
        <div className="text-white font-bold text-3xl sm:text-4xl tracking-[0.24em] uppercase font-sans drop-shadow-lg">
          VISESHTA
        </div>

        {/* Architectural Diamond Divider */}
        <div className="flex items-center gap-3 my-2.5 w-48">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#bfa181] to-[#bfa181]" />
          <div className="w-1.5 h-1.5 rotate-45 bg-[#bfa181] shadow-[0_0_8px_#bfa181]" />
          <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#bfa181] to-[#bfa181]" />
        </div>

        <div className="text-[#bfa181] text-xs sm:text-sm tracking-[0.45em] uppercase font-medium">
          AVENUES
        </div>
        <div className="text-white/40 text-[10px] tracking-[0.3em] uppercase mt-1">
          Master Planned Sanctuaries
        </div>
      </div>

      {/* Bottom Bar: Global Footprint & Counter */}
      <div className="relative z-10 flex justify-between items-end border-t border-white/15 pt-6">
        <div>
          <div className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/50 font-light">
            Tashkent · Dubai · Almaty · London
          </div>
          <div className="text-[9px] tracking-[0.2em] text-[#bfa181]/80 mt-1 uppercase hidden sm:block">
            Pinnacle Living Experience
          </div>
        </div>
        <div className="font-mono text-4xl sm:text-6xl font-light text-[#bfa181] tabular-nums drop-shadow-md" id="loader-counter">
          {count.toString().padStart(3, '0')}
        </div>
      </div>
    </div>
  );
}
