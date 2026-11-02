/**
 * VISESHTA GROUP - Advanced Animation & Micro-Interactions Engine
 * Provides silky smooth scroll reveals, hero staggered entrance, interactive card hover effects,
 * top scroll progress bar, floating back-to-top button, animated number counters,
 * radar pulse effects, and smart auto-staggering across EVERY page.
 */

(function () {
  'use strict';

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }

  function initAnimations() {
    initTopProgressBar();
    initBackToTopButton();
    initRadarPulses();
    initHeroEntrance();
    initAutoDecorations();
    initScrollObserver();
    initNumberCounters();
    initInteractiveCards();
    initSmoothAnchors();
  }

  // 1. Sleek Top Scroll Reading Progress Bar
  function initTopProgressBar() {
    let progressBar = document.getElementById('scroll-progress-bar');
    if (!progressBar) {
      progressBar = document.createElement('div');
      progressBar.id = 'scroll-progress-bar';
      document.body.appendChild(progressBar);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
          if (progressBar) {
            progressBar.style.width = scrolled + '%';
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 2. Floating Back To Top Button
  function initBackToTopButton() {
    let backToTop = document.getElementById('back-to-top');
    if (!backToTop) {
      backToTop = document.createElement('button');
      backToTop.id = 'back-to-top';
      backToTop.setAttribute('aria-label', 'Back to top');
      backToTop.setAttribute('title', 'Back to top');
      backToTop.innerHTML = `
        <svg class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7"/>
        </svg>
      `;
      backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      document.body.appendChild(backToTop);
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if (winScroll > 320) {
            backToTop.classList.add('visible');
          } else {
            backToTop.classList.remove('visible');
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // 3. Radar Pulses on Floating Quick Action Buttons
  function initRadarPulses() {
    const whatsappButtons = document.querySelectorAll(
      'a[href*="wa.me"], a[href*="whatsapp"], a[title="WhatsApp"], .floating-btn.bg-emerald-500'
    );
    whatsappButtons.forEach(btn => btn.classList.add('pulse-radar-green'));

    const callButtons = document.querySelectorAll(
      'a[href^="tel:"], a[title="Call"], .floating-btn.bg-blue-600'
    );
    callButtons.forEach(btn => btn.classList.add('pulse-radar-blue'));
  }

  // 4. Hero Staggered Entrance on Page Load
  function initHeroEntrance() {
    const heroSection = document.querySelector('section:first-of-type, .hero-section, #home');
    if (heroSection) {
      const heroBadges = heroSection.querySelectorAll(
        '.hero-badge, [class*="tracking-[0.25em]"], [class*="tracking-widest"]'
      );
      heroBadges.forEach(b => {
        if (!b.classList.contains('hero-enter-1')) b.classList.add('hero-enter-1');
      });

      const heroHeadings = heroSection.querySelectorAll('h1');
      heroHeadings.forEach(h => {
        if (!h.classList.contains('hero-enter-2') && !h.classList.contains('hero-word')) {
          h.classList.add('hero-enter-2');
        }
      });

      const heroSubtitles = heroSection.querySelectorAll('h1 + p, p.text-base, p.text-lg, p.leading-relaxed');
      heroSubtitles.forEach(p => {
        if (!p.classList.contains('hero-enter-3') && p.closest('section:first-of-type, .hero-section, #home')) {
          p.classList.add('hero-enter-3');
        }
      });

      const heroCtas = heroSection.querySelectorAll('a[href*="#"], button, .btn-primary-bronze');
      heroCtas.forEach(cta => {
        if (cta.closest('.max-w-7xl, .container, section:first-of-type') && !cta.classList.contains('hero-enter-4')) {
          cta.classList.add('btn-shimmer');
        }
      });
    }
  }

  // 5. Smart Auto-Decorations: Automatically tags cards, headings and stats across any page
  function initAutoDecorations() {
    const sections = document.querySelectorAll('section, main > div');
    sections.forEach(sec => {
      // 1. Section headers
      const headings = sec.querySelectorAll('h2, h3.text-3xl, h3.text-4xl');
      headings.forEach(h => {
        if (!h.classList.contains('reveal') && !h.classList.contains('reveal-up') && !h.closest('#page-loader, nav, header')) {
          h.classList.add('reveal-up');
        }
      });

      // 2. Section lead paragraphs
      const leads = sec.querySelectorAll('h2 + p, .section-subtitle, p.max-w-2xl, p.max-w-xl');
      leads.forEach(p => {
        if (!p.classList.contains('reveal') && !p.classList.contains('reveal-up') && !p.closest('#page-loader, nav, header')) {
          p.classList.add('reveal-up', 'reveal-delay-1');
        }
      });

      // 3. Grid cards (auto-stagger children)
      const grids = sec.querySelectorAll('.grid');
      grids.forEach(grid => {
        if (grid.closest('#page-loader, nav, header, footer')) return;
        
        const cards = Array.from(grid.children);
        if (cards.length >= 2 && cards.length <= 16) {
          cards.forEach((card, idx) => {
            if (!card.classList.contains('reveal') && !card.classList.contains('reveal-up') && !card.classList.contains('no-reveal')) {
              card.classList.add('reveal-up');
              const delay = (idx % 6) + 1;
              card.classList.add(`reveal-delay-${delay}`);
              if (card.classList.contains('rounded-2xl') || card.classList.contains('rounded-3xl') || card.classList.contains('rounded-xl') || card.classList.contains('p-6') || card.classList.contains('p-8')) {
                if (!card.classList.contains('card-hover') && !card.classList.contains('luxury-card-hover')) {
                  card.classList.add('luxury-card-hover');
                }
              }
            }
          });
        }
      });

      // 4. Image containers inside cards
      const cardImages = sec.querySelectorAll('.rounded-2xl img, .rounded-3xl img, .card-hover img, .luxury-card-hover img');
      cardImages.forEach(img => {
        const parent = img.parentElement;
        if (parent && !parent.classList.contains('img-zoom')) {
          parent.classList.add('img-zoom');
        }
      });
    });
  }

  // 6. High-Performance IntersectionObserver for Scroll Reveals
  function initScrollObserver() {
    const revealSelector = `
      .reveal, 
      .reveal-up, 
      .reveal-fade, 
      .reveal-scale, 
      .reveal-left, 
      .reveal-right, 
      .category-reveal-item, 
      .invesmart-hero-item, 
      .stagger-category-card, 
      [data-reveal]
    `;

    const revealElements = document.querySelectorAll(revealSelector);

    if ('IntersectionObserver' in window && revealElements.length > 0) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const el = entry.target;
            el.classList.add('visible', 'is-revealed', 'revealed');
            obs.unobserve(el);
          }
        });
      }, {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px'
      });

      revealElements.forEach(el => observer.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('visible', 'is-revealed', 'revealed'));
    }
  }

  // 7. Animated Number Counters on Scroll
  function initNumberCounters() {
    const candidateStats = document.querySelectorAll(
      '.grid p.text-2xl, .grid p.text-3xl, .grid p.text-4xl, .grid h3.text-3xl, .grid h3.text-4xl, .stat-value'
    );

    candidateStats.forEach(el => {
      if (el.hasAttribute('data-counter-target') || el.closest('#page-loader, nav, header')) return;
      const text = el.textContent.trim();
      const match = text.match(/^([$₹]?)\s*([\d,.]+)\s*(\S*.*)$/);
      if (match && !isNaN(parseFloat(match[2].replace(/,/g, '')))) {
        const prefix = match[1] || '';
        const numStr = match[2].replace(/,/g, '');
        const targetNum = parseFloat(numStr);
        const suffix = match[3] || '';

        if (targetNum > 0 && targetNum <= 100000) {
          el.setAttribute('data-counter-target', targetNum);
          if (prefix) el.setAttribute('data-counter-prefix', prefix);
          if (suffix) el.setAttribute('data-counter-suffix', ' ' + suffix);
          if (match[2].includes(',')) el.setAttribute('data-counter-comma', 'true');
          el.innerHTML = `${prefix}0${suffix ? ' ' + suffix : ''}`;
        }
      }
    });

    const allCounters = document.querySelectorAll('[data-counter-target]');
    if ('IntersectionObserver' in window && allCounters.length > 0) {
      const counterObserver = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      allCounters.forEach(el => counterObserver.observe(el));
    }
  }

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-counter-target')) || 0;
    const prefix = el.getAttribute('data-counter-prefix') || '';
    const suffix = el.getAttribute('data-counter-suffix') || '';
    const duration = parseInt(el.getAttribute('data-counter-duration')) || 1700;
    const isCurrency = el.getAttribute('data-counter-comma') === 'true';
    const isDecimal = target % 1 !== 0;

    let startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeProgress = 1 - Math.pow(1 - progress, 4);
      let currentVal = easeProgress * target;

      let formatted = isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toString();
      if (isCurrency) {
        formatted = Math.floor(currentVal).toLocaleString('en-IN');
      }

      el.innerHTML = `${prefix}${formatted}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        let finalFormatted = isDecimal ? target.toFixed(1) : target.toString();
        if (isCurrency) {
          finalFormatted = target.toLocaleString('en-IN');
        }
        el.innerHTML = `${prefix}${finalFormatted}${suffix}`;
      }
    }

    window.requestAnimationFrame(step);
  }

  // 8. Interactive Micro-tilt & Card Glow
  function initInteractiveCards() {
    const cards = document.querySelectorAll('.luxury-card-hover, .card-hover');
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.willChange = 'transform, box-shadow';
      });
      card.addEventListener('mouseleave', () => {
        card.style.willChange = 'auto';
      });
    });
  }

  // 9. Smooth Scrolling for Internal Anchor Links
  function initSmoothAnchors() {
    document.querySelectorAll('a[href^="#"]:not([href="#"]):not([href="#contact"])').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
          e.preventDefault();
          const navOffset = 100;
          const elementPos = targetEl.getBoundingClientRect().top;
          const offsetPos = elementPos + window.pageYOffset - navOffset;
          window.scrollTo({
            top: offsetPos,
            behavior: 'smooth'
          });
        }
      });
    });
  }
})();
