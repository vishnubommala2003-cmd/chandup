/**
 * VISESHTA GROUP - Advanced Animation Engine
 * Omnipresent animation orchestrator inspired by vaseshtaavenues:
 * - 3D Ken-Burns cinematic hero pan/zoom
 * - Staggered masked word slide-up reveals
 * - Staggered rise of subtitles, CTA buttons, and status chips
 * - Smooth desktop mouse-move & scroll parallax
 * - IntersectionObserver scroll reveals with stagger delays
 * - Luxury card hover elevations and image scales
 * - Animated numeric counters
 * - Radar pulses & traveling dot scroll indicators
 */

let parallaxCleanup = null;

export function triggerAnimations() {
  if (typeof window === 'undefined') return;

  // 1. Radar Pulses for WhatsApp and Call triggers
  const whatsappButtons = document.querySelectorAll(
    'a[href*="wa.me"], a[href*="whatsapp"], a[title="WhatsApp"], .floating-btn.bg-emerald-500'
  );
  whatsappButtons.forEach(btn => btn.classList.add('pulse-radar-green'));

  const callButtons = document.querySelectorAll(
    'a[href^="tel:"], a[title="Call"], .floating-btn.bg-blue-600'
  );
  callButtons.forEach(btn => btn.classList.add('pulse-radar-blue'));

  // 2. Hero Animations: Words, Stagger items & 3D Cinematic Zoom
  initHeroAnimations();

  // 3. Parallax on hero containers
  initHeroParallax();

  // 4. Auto-decorate section elements if not decorated
  autoDecoratePageElements();

  // 5. Scroll Reveals Observer
  initScrollReveals();

  // 6. Animated Number Counters
  initNumberCounters();
}

/**
 * Triggers masked word reveals, element rises, and 3D Ken Burns motion
 */
function initHeroAnimations() {
  const loader = document.getElementById('page-loader');
  // If the initial intro loader is still active, do not prematurely reveal hero elements!
  // Hero reveal on HomePage is orchestrated by useIntro().
  if (loader && !loader.classList.contains('loaded')) {
    return;
  }

  // Activate 3D cinematic pan & zoom on hero images
  const heroImages = document.querySelectorAll(
    '#hero-bg-img, .hero-slide-img, .page-hero-img, section:first-of-type img.scale-105'
  );
  heroImages.forEach(img => {
    img.classList.add('hero-3d-active');
  });
}

/**
 * Attaches smooth desktop mouse-move & scroll parallax to any hero
 */
function initHeroParallax() {
  if (parallaxCleanup) {
    parallaxCleanup();
    parallaxCleanup = null;
  }

  const heroBgContainer = document.querySelector('#hero-bg-container, .page-hero-parallax');
  const heroContent = document.querySelector('#hero-content, .page-hero-content');

  if (!heroBgContainer && !heroContent) return;

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;
  let animId = null;

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

      if (heroBgContainer) {
        heroBgContainer.style.transform = `translate3d(${mouseX}px, ${mouseY + bgScroll}px, 0) scale(${bgScale})`;
      }
      if (heroContent) {
        heroContent.style.transform = `translate3d(0, -${contentScroll}px, 0)`;
        heroContent.style.opacity = contentOpacity;
      }
    }
    animId = requestAnimationFrame(renderParallax);
  };

  window.addEventListener('mousemove', handleMouseMove, { passive: true });
  animId = requestAnimationFrame(renderParallax);

  parallaxCleanup = () => {
    window.removeEventListener('mousemove', handleMouseMove);
    if (animId) cancelAnimationFrame(animId);
  };
}

/**
 * Decorates sections, headings, cards, and buttons with luxury animation classes
 */
function autoDecoratePageElements() {
  const sections = document.querySelectorAll('section, main > div');

  sections.forEach(sec => {
    // 1. Headings get reveal-up
    const headings = sec.querySelectorAll('h2, h3.text-3xl, h3.text-4xl, h3.text-5xl');
    headings.forEach(h => {
      if (!h.classList.contains('reveal') && !h.classList.contains('reveal-up') && !h.closest('#page-loader, nav, header')) {
        h.classList.add('reveal-up');
      }
    });

    // 2. Lead paragraphs get reveal-up + delay-1
    const leads = sec.querySelectorAll('h2 + p, .section-subtitle, p.max-w-2xl, p.max-w-xl');
    leads.forEach(p => {
      if (!p.classList.contains('reveal') && !p.classList.contains('reveal-up') && !p.closest('#page-loader, nav, header')) {
        p.classList.add('reveal-up', 'reveal-delay-1');
      }
    });

    // 3. Grid cards get staggered reveals & luxury hover effects
    const grids = sec.querySelectorAll('.grid');
    grids.forEach(grid => {
      if (grid.closest('#page-loader, nav, header, footer')) return;
      const cards = Array.from(grid.children);
      if (cards.length >= 2 && cards.length <= 16) {
        cards.forEach((card, idx) => {
          if (!card.classList.contains('reveal') && !card.classList.contains('reveal-up') && !card.classList.contains('no-reveal')) {
            card.classList.add('reveal-up');
            const delay = (idx % 4) + 1;
            card.classList.add(`reveal-delay-${delay}`);
          }
          if (
            card.classList.contains('rounded-2xl') ||
            card.classList.contains('rounded-3xl') ||
            card.classList.contains('rounded-xl') ||
            card.classList.contains('p-6') ||
            card.classList.contains('p-8')
          ) {
            if (!card.classList.contains('card-hover') && !card.classList.contains('luxury-card-hover')) {
              card.classList.add('luxury-card-hover');
            }
          }
        });
      }
    });

    // 4. Image zoom & scale inside cards
    const cardImages = sec.querySelectorAll('.rounded-2xl img, .rounded-3xl img, .card-hover img, .luxury-card-hover img');
    cardImages.forEach(img => {
      if (!img.classList.contains('img-scale')) {
        img.classList.add('img-scale');
      }
    });

    // 5. Buttons get bronze wipe effects
    const buttons = sec.querySelectorAll(
      'a.btn-primary, button.btn-primary, .btn-primary-bronze, a.btn-outline'
    );
    buttons.forEach(btn => {
      if (!btn.classList.contains('btn-bronze-wipe') && !btn.classList.contains('btn-primary-bronze')) {
        btn.classList.add('btn-bronze-wipe');
      }
    });
  });
}

/**
 * Initializes IntersectionObserver for scroll-driven reveals
 */
function initScrollReveals() {
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
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible', 'is-revealed', 'revealed'));
  }
}

/**
 * Animated number counters that count up on scroll into view
 */
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
        el.setAttribute('data-counter-target', targetNum.toString());
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

export default {
  triggerAnimations
};
