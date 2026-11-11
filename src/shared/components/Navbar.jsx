import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';
import { useIntro } from '../../contexts/IntroContext';

export default function Navbar() {
  const location = useLocation();
  const { openContactModal } = useModal();
  const { heroTriggered, isCompleted } = useIntro();
  const [headerVisible, setHeaderVisible] = useState(isCompleted);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProjectsDropdownOpen, setIsProjectsDropdownOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const dropdownTimeoutRef = useRef(null);

  const pathname = location.pathname;

  // Active state indicators
  const isHomeActive = pathname === '/' || pathname === '/index.html';
  const isProjectsActive = pathname.startsWith('/projects') || pathname === '/palm-valley' || pathname === '/teak-village' || pathname === '/vistara-valley';
  const isInvesmartActive = pathname.startsWith('/invesmart');
  const isGalleryActive = pathname.startsWith('/gallery');
  const isAboutActive = pathname.startsWith('/about');
  const isContactActive = pathname.startsWith('/contact');
  const isBlogsActive = pathname.startsWith('/blog');
  const isCareersActive = pathname.startsWith('/careers');

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProjectsDropdownOpen(false);
    setIsMobileProjectsOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Header drop-down entrance transition after intro screen completes
  useEffect(() => {
    if (isCompleted) {
      setHeaderVisible(true);
      return;
    }
    if (heroTriggered) {
      const timer = setTimeout(() => {
        setHeaderVisible(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [heroTriggered, isCompleted]);

  // Handle sticky header scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('site-header');
      if (!header) return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > 40) {
        header.classList.add('nav-glass-scrolled');
      } else {
        header.classList.remove('nav-glass-scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsProjectsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsProjectsDropdownOpen(false);
    }, 180);
  };

  return (
    <>
      {/* Mobile Full-Screen Menu Drawer */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-50 bg-[#121110] text-[#f5f2eb] flex flex-col justify-between p-5 sm:p-8 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0 pointer-events-auto' : 'translate-x-full pointer-events-none'
        }`}
      >
        <div className="flex items-center justify-between border-b border-white/10 pb-4 shrink-0">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center mobile-menu-close">
            <div className="bg-white/95 px-3 py-1.5 rounded-lg flex items-center shadow-sm">
              <img src="/logo.png" alt="VISESHTA GROUP" className="h-6 w-auto object-contain" />
            </div>
          </Link>
          <button
            id="close-menu-btn"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition duration-300 cursor-pointer"
            aria-label="Close navigation menu"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Navigation Items in Clean Vertical Drawer (Exact 8 Positions) */}
        <div className="flex flex-col gap-1 my-4 text-xl sm:text-2xl font-serif">
          {/* 1. Home */}
          <Link
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isHomeActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Home</span>
            <span className={`text-xs font-sans tracking-widest ${isHomeActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              01
            </span>
          </Link>

          {/* 2. Projects (Accordion) */}
          <div className="border-b border-white/5 py-1">
            <button
              type="button"
              id="mobile-projects-btn"
              onClick={() => setIsMobileProjectsOpen(prev => !prev)}
              className={`mobile-accordion-btn w-full text-left transition flex items-center justify-between py-2.5 cursor-pointer ${
                isProjectsActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>Projects</span>
                <span className={`text-xs font-sans tracking-widest ${isProjectsActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
                  02
                </span>
              </span>
              <svg
                className={`mobile-accordion-chevron w-4 h-4 text-white/60 transition-transform duration-300 ${
                  isMobileProjectsOpen ? 'rotate-180 text-[#bfa181]' : ''
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Projects Submenu Accordion */}
            <div
              id="mobile-projects-accordion"
              className={`mobile-accordion-content pl-3 flex flex-col gap-2 font-sans text-sm transition-all duration-300 ${
                isMobileProjectsOpen ? 'max-h-[500px] opacity-100 py-2' : 'max-h-0 opacity-0 overflow-hidden'
              }`}
            >
              <Link
                to="/projects#ongoing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Ongoing Projects</span>
              </Link>
              <Link
                to="/invesmart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                <span>Investment Projects</span>
              </Link>
              <Link
                to="/palm-valley"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                <span>Palm Valley</span>
              </Link>
              <Link
                to="/projects#upcoming"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                <span>Upcoming Projects</span>
              </Link>
              <Link
                to="/projects#completed"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>Completed Projects</span>
              </Link>
              <Link
                to="/teak-village"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                <span>Teak Village</span>
              </Link>
              <Link
                to="/vistara-valley"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mobile-menu-close py-1.5 text-white/70 hover:text-white flex items-center gap-2 border-l border-white/10 pl-3"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                <span>Vistara Valley</span>
              </Link>
            </div>
          </div>

          {/* 3. Invesmart */}
          <Link
            to="/invesmart"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isInvesmartActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Invesmart</span>
            <span className={`text-xs font-sans tracking-widest ${isInvesmartActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              03
            </span>
          </Link>

          {/* 4. Gallery */}
          <Link
            to="/gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isGalleryActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Gallery</span>
            <span className={`text-xs font-sans tracking-widest ${isGalleryActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              04
            </span>
          </Link>

          {/* 5. About Us */}
          <Link
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isAboutActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>About Us</span>
            <span className={`text-xs font-sans tracking-widest ${isAboutActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              05
            </span>
          </Link>

          {/* 6. Contact Us */}
          <Link
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isContactActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Contact Us</span>
            <span className={`text-xs font-sans tracking-widest ${isContactActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              06
            </span>
          </Link>

          {/* 7. Blogs */}
          <Link
            to="/blog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isBlogsActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Blogs</span>
            <span className={`text-xs font-sans tracking-widest ${isBlogsActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              07
            </span>
          </Link>

          {/* 8. Careers */}
          <Link
            to="/careers"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`mobile-menu-close transition flex items-center justify-between py-2.5 border-b border-white/5 ${
              isCareersActive ? 'text-[#bfa181]' : 'hover:text-[#bfa181]'
            }`}
          >
            <span>Careers</span>
            <span className={`text-xs font-sans tracking-widest ${isCareersActive ? 'text-[#bfa181]' : 'text-white/40'}`}>
              08
            </span>
          </Link>
        </div>

        {/* Bottom Action & Contact Info in Drawer */}
        <div className="border-t border-white/10 pt-4 space-y-4 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              setIsMobileMenuOpen(false);
              openContactModal(e);
            }}
            className="contact-trigger w-full py-3.5 rounded-full text-xs tracking-[0.2em] uppercase font-semibold text-black bg-gradient-to-r from-[#bfa181] via-[#d6bc9f] to-[#bfa181] hover:from-[#d6bc9f] hover:to-[#bfa181] flex items-center justify-center gap-2 shadow-lg transition cursor-pointer"
          >
            <span>Enquire Now</span>
            <span>↗</span>
          </button>
          <div className="flex items-center justify-between text-[11px] tracking-widest uppercase text-white/50 pt-2">
            <span>Viseshta Group</span>
            <span>Est. 2018</span>
          </div>
        </div>
      </div>

      {/* Top Navigation Header (Sticky Luxury Header) */}
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 lg:px-8 py-3 transition-all duration-500 bg-[#0e0d0b]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)] ${
          headerVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 xl:gap-4">
          {/* Left: Viseshta Group Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <div className="bg-white/95 hover:bg-white transition-all duration-300 px-3.5 py-1.5 rounded-lg flex items-center shadow-sm border border-white/15 group-hover:scale-[1.02]">
              <img src="/logo.png" alt="VISESHTA GROUP" className="h-6 sm:h-7 w-auto object-contain" />
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Single horizontal row with exact 8 categories) */}
          <nav
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 px-3 py-1.5 rounded-full nav-glass border border-white/10 text-[11px] xl:text-[12px] tracking-[0.14em] uppercase text-white/80 whitespace-nowrap flex-nowrap shrink-0 shadow-lg"
            aria-label="Main Navigation"
          >
            {/* 1. Home */}
            <Link
              to="/"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isHomeActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>

            {/* 2. Projects Dropdown */}
            <div
              className="relative group/dropdown"
              id="projects-dropdown-container"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/projects"
                id="projects-dropdown-btn"
                className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition flex items-center gap-1.5 cursor-pointer font-medium ${
                  isProjectsActive
                    ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
                aria-expanded={isProjectsDropdownOpen}
                aria-haspopup="true"
              >
                <span>Projects</span>
                <svg
                  className={`dropdown-chevron w-3 h-3 text-white/60 transition-transform duration-300 ${
                    isProjectsDropdownOpen ? 'rotate-180 text-[#bfa181]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              {/* Dropdown Menu */}
              <div
                id="projects-dropdown-menu"
                className={`dropdown-menu absolute top-full left-1/2 -translate-x-1/2 pt-3.5 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] z-50 ${
                  isProjectsDropdownOpen
                    ? 'opacity-100 pointer-events-auto translate-y-0'
                    : 'opacity-0 pointer-events-none translate-y-2 group-hover/dropdown:opacity-100 group-hover/dropdown:pointer-events-auto group-hover/dropdown:translate-y-0'
                }`}
              >
                <div className="w-64 bg-[#121110]/95 backdrop-blur-2xl border border-[#bfa181]/35 rounded-2xl p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.85),0_0_35px_rgba(191,161,129,0.18)] ring-1 ring-white/10">
                  <div className="px-3 py-1.5 text-[9px] tracking-[0.25em] uppercase text-[#bfa181] font-mono border-b border-white/5 mb-1 flex items-center justify-between">
                    <span>Developments</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                  </div>
                  <div className="flex flex-col gap-0.5 font-sans">
                    <Link
                      to="/projects#ongoing"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                        <span>Ongoing Projects</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/invesmart"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span>
                        <span>Investment Projects</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/palm-valley"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                        <span>Palm Valley</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/projects#upcoming"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                        <span>Upcoming Projects</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/projects#completed"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                        <span>Completed Projects</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/teak-village"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                        <span>Teak Village</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                    <Link
                      to="/vistara-valley"
                      className="dropdown-link group/item flex items-center justify-between px-3 py-2 rounded-xl text-xs text-white/85 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#bfa181]"></span>
                        <span>Vistara Valley</span>
                      </span>
                      <span className="text-[10px] text-[#bfa181] opacity-0 group-hover/item:opacity-100 group-hover/item:translate-x-0.5 transition-all">↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Invesmart */}
            <Link
              to="/invesmart"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isInvesmartActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Invesmart
            </Link>

            {/* 4. Gallery */}
            <Link
              to="/gallery"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isGalleryActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Gallery
            </Link>

            {/* 5. About Us */}
            <Link
              to="/about"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isAboutActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              About Us
            </Link>

            {/* 6. Contact Us */}
            <Link
              to="/contact"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isContactActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact Us
            </Link>

            {/* 7. Blogs */}
            <Link
              to="/blog"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isBlogsActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Blogs
            </Link>

            {/* 8. Careers */}
            <Link
              to="/careers"
              className={`nav-item-link px-2.5 xl:px-3.5 py-1.5 rounded-full transition font-medium ${
                isCareersActive
                  ? 'text-[#bfa181] bg-white/15 font-semibold active shadow-xs ring-1 ring-[#bfa181]/40'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              Careers
            </Link>
          </nav>

          {/* Right: Premium CTA Button (Enquire Now) & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={openContactModal}
              className="contact-trigger hidden sm:inline-flex items-center gap-1.5 px-4.5 xl:px-5 py-2.5 rounded-full text-[11px] xl:text-xs tracking-[0.16em] uppercase text-black font-semibold bg-gradient-to-r from-[#bfa181] via-[#d6bc9f] to-[#bfa181] hover:from-[#d6bc9f] hover:to-[#bfa181] transition-all duration-300 shadow-[0_4px_20px_rgba(191,161,129,0.35)] hover:shadow-[0_6px_25px_rgba(191,161,129,0.5)] hover:scale-[1.02] cursor-pointer whitespace-nowrap"
            >
              <span>Enquire Now</span>
              <span className="inline-block transition-transform duration-300 font-normal">↗</span>
            </button>

            {/* Hamburger toggle button */}
            <button
              id="open-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition shrink-0 cursor-pointer"
              aria-label="Open navigation menu"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="3" y1="7" x2="21" y2="7"></line>
                <line x1="3" y1="17" x2="21" y2="17"></line>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
