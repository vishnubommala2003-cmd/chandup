const fs = require('fs');

let content = fs.readFileSync('invesmart.html', 'utf8');

// Ensure all sections have category-section class
content = content.replace(
  '<section class="py-12 bg-slate-50 border-b border-slate-200">',
  '<section id="metrics" class="py-12 bg-slate-50 border-b border-slate-200 category-section">'
);

content = content.replace(
  '<section id="overview" class="py-24 bg-white">',
  '<section id="overview" class="py-24 bg-white category-section">'
);

content = content.replace(
  '<section class="py-24 bg-slate-50 border-t border-slate-200">\n    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">\n      <div class="text-center max-w-2xl mx-auto mb-16">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Micro-Market Value</span>',
  '<section id="locations" class="py-24 bg-slate-50 border-t border-slate-200 category-section">\n    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">\n      <div class="text-center max-w-2xl mx-auto mb-16">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Micro-Market Value</span>'
);

content = content.replace(
  '<section class="py-24 bg-white border-t border-slate-200">\n    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">\n      <div class="text-center max-w-2xl mx-auto mb-16">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Visual Showcase</span>',
  '<section id="gallery" class="py-24 bg-white border-t border-slate-200 category-section">\n    <div class="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">\n      <div class="text-center max-w-2xl mx-auto mb-16">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Visual Showcase</span>'
);

content = content.replace(
  '<section class="py-24 bg-slate-50 border-t border-slate-200">\n    <div class="max-w-4xl mx-auto px-4 sm:px-8">\n      <div class="text-center mb-12">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">100% Legal Transparency</span>',
  '<section id="documents" class="py-24 bg-slate-50 border-t border-slate-200 category-section">\n    <div class="max-w-4xl mx-auto px-4 sm:px-8">\n      <div class="text-center mb-12">\n        <span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">100% Legal Transparency</span>'
);

content = content.replace(
  '<section class="py-24 bg-white border-t border-slate-200 text-center">',
  '<section id="cta-section" class="py-24 bg-white border-t border-slate-200 text-center category-section">'
);

// Add category-reveal-item to section headings, subtexts, and eyebrow badges across all sections
const replacePatterns = [
  // Eyebrows
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold block">Architectural Overview<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold block">Architectural Overview</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Investment Thesis<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Investment Thesis</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-700 font-bold mb-2 block">Yield Mechanics<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-700 font-bold mb-2 block">Yield Mechanics</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Micro-Market Value<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Micro-Market Value</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Grade-A Benchmark<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Grade-A Benchmark</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Configuration Options<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Configuration Options</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Visual Showcase<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">Visual Showcase</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">100% Legal Transparency<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-600 font-bold mb-2 block">100% Legal Transparency</span>'],
  [/<span class="text-xs uppercase tracking-wider text-blue-300 font-bold mb-1 block">Interactive Simulator<\/span>/g,
   '<span class="category-reveal-item text-xs uppercase tracking-wider text-blue-300 font-bold mb-1 block">Interactive Simulator</span>'],

  // Section Headings
  [/<h2 class="text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">/g,
   '<h2 class="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900 leading-tight">'],
  [/<h2 class="text-4xl sm:text-5xl font-serif text-slate-900">/g,
   '<h2 class="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900">'],
  [/<h2 class="text-3xl sm:text-4xl font-serif text-slate-900 mb-6">/g,
   '<h2 class="category-reveal-item text-3xl sm:text-4xl font-serif text-slate-900 mb-6">'],
  [/<h2 class="text-3xl sm:text-4xl font-serif text-white">/g,
   '<h2 class="category-reveal-item text-3xl sm:text-4xl font-serif text-white">'],
  [/<h2 class="text-4xl font-serif text-slate-900">Invesmart FAQs<\/h2>/g,
   '<h2 class="category-reveal-item text-4xl font-serif text-slate-900">Invesmart FAQs</h2>'],
  [/<h2 class="text-4xl sm:text-5xl font-serif text-slate-900 mb-4">Request Complete Invesmart Breakdown<\/h2>/g,
   '<h2 class="category-reveal-item text-4xl sm:text-5xl font-serif text-slate-900 mb-4">Request Complete Invesmart Breakdown</h2>'],

  // Subtitles / Descriptions
  [/<p class="text-sm text-slate-600 mt-3">/g,
   '<p class="category-reveal-item text-sm text-slate-600 mt-3">'],
  [/<p class="text-xs text-slate-600 mt-2 font-light">/g,
   '<p class="category-reveal-item text-xs text-slate-600 mt-2 font-light">'],
  [/<p class="text-xs text-blue-100\/70 mt-1">/g,
   '<p class="category-reveal-item text-xs text-blue-100/70 mt-1">'],
  [/<p class="text-sm text-slate-600 mb-8">Speak with our commercial property specialists and schedule a VIP site visit.<\/p>/g,
   '<p class="category-reveal-item text-sm text-slate-600 mb-8">Speak with our commercial property specialists and schedule a VIP site visit.</p>'],

  // Overview columns
  [/<div class="lg:col-span-6 space-y-6">/g,
   '<div class="lg:col-span-6 space-y-6 category-reveal-item">'],
  [/<div class="lg:col-span-6">\s*<div class="rounded-3xl overflow-hidden/g,
   '<div class="lg:col-span-6 category-reveal-item">\n          <div class="rounded-3xl overflow-hidden'],

  // Key Facts cards
  [/<div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs stagger-category-card">/g,
   '<div class="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs category-reveal-item">'],

  // 4 Pillars cards
  [/<div class="p-8 rounded-2xl bg-white border border-slate-200 card-hover shadow-xs">/g,
   '<div class="p-8 rounded-2xl bg-white border border-slate-200 card-hover shadow-xs category-reveal-item">'],

  // Rental Yield Card
  [/<div class="p-8 sm:p-12 rounded-3xl bg-blue-50 border border-blue-200 stagger-category-card">/g,
   '<div class="p-8 sm:p-12 rounded-3xl bg-blue-50 border border-blue-200 category-reveal-item shadow-sm">'],

  // Location Cards
  [/<div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">/g,
   '<div class="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs category-reveal-item">'],

  // Spec Cards
  [/<div class="p-6 rounded-2xl bg-slate-50 border border-slate-200">/g,
   '<div class="p-6 rounded-2xl bg-slate-50 border border-slate-200 category-reveal-item">'],

  // Floor Plan Cards
  [/<div class="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-xs">/g,
   '<div class="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col justify-between shadow-xs category-reveal-item">'],
  [/<div class="bg-white rounded-3xl p-8 border-2 border-blue-600 relative flex flex-col justify-between shadow-xl">/g,
   '<div class="bg-white rounded-3xl p-8 border-2 border-blue-600 relative flex flex-col justify-between shadow-xl category-reveal-item">'],

  // Gallery images
  [/<div class="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-xs">/g,
   '<div class="rounded-2xl overflow-hidden border border-slate-200 h-64 shadow-xs category-reveal-item">'],

  // Documents card
  [/<div class="bg-white rounded-3xl p-8 border border-slate-200 divide-y divide-slate-100 text-xs text-slate-700 shadow-sm">/g,
   '<div class="bg-white rounded-3xl p-8 border border-slate-200 divide-y divide-slate-100 text-xs text-slate-700 shadow-sm category-reveal-item">'],

  // Calculator Card
  [/<div class="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-blue-800 shadow-xl stagger-category-card">/g,
   '<div class="bg-gradient-to-br from-blue-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 rounded-3xl border border-blue-800 shadow-xl category-reveal-item">'],

  // FAQ Items
  [/<div class="faq-item rounded-2xl bg-white border border-slate-200 p-6 shadow-xs">/g,
   '<div class="faq-item rounded-2xl bg-white border border-slate-200 p-6 shadow-xs category-reveal-item">'],

  // Final CTA buttons
  [/<div class="flex flex-wrap justify-center gap-4">/g,
   '<div class="flex flex-wrap justify-center gap-4 category-reveal-item">']
];

replacePatterns.forEach(([pattern, replacement]) => {
  content = content.replace(pattern, replacement);
});

// Update the script engine to handle .category-reveal-item across all sections
const newEngineScript = `
  <script>
    // =========================================================================
    // One-by-One Category & Hero Reveal Animation Engine
    // =========================================================================
    document.addEventListener('DOMContentLoaded', () => {
      // 1. Staggered Hero Section Reveal on page load (Badge -> Title -> Subtitle -> Chips -> Form)
      const heroItems = document.querySelectorAll('.invesmart-hero-item');
      heroItems.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('revealed');
        }, 100 + index * 130);
      });

      // 2. IntersectionObserver: Reveal all category elements one by one with smooth hero animation
      const categorySections = document.querySelectorAll('.category-section');
      
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              const revealItems = entry.target.querySelectorAll('.category-reveal-item');
              revealItems.forEach((item, idx) => {
                setTimeout(() => {
                  item.classList.add('revealed');
                }, idx * 100); // 100ms smooth sequential stagger
              });
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 0.08,
          rootMargin: '0px 0px -40px 0px'
        });

        categorySections.forEach(section => observer.observe(section));
      } else {
        // Fallback for older browsers
        document.querySelectorAll('.category-reveal-item').forEach(el => el.classList.add('revealed'));
      }

      // 3. Interactive Category Pill Bar: Click to navigate & re-trigger one-by-one cascade
      const categoryBtns = document.querySelectorAll('.category-btn');
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          categoryBtns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          const targetId = btn.getAttribute('data-target');
          if (targetId === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
          }

          const targetEl = document.getElementById(targetId);
          if (targetEl) {
            const headerOffset = 125;
            const elementPosition = targetEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });

            // Smoothly replay the category's one-after-another reveal animation
            const items = targetEl.querySelectorAll('.category-reveal-item');
            items.forEach(item => item.classList.remove('revealed'));
            items.forEach((item, idx) => {
              setTimeout(() => {
                item.classList.add('revealed');
              }, 200 + idx * 90);
            });

            // Pulse highlight animation on category card
            targetEl.classList.remove('category-highlight');
            void targetEl.offsetWidth; // force reflow
            targetEl.classList.add('category-highlight');
          }
        });
      });
    });
  </script>
`;

// Replace existing engine script
if (content.includes('// One-by-One Category Reveal Animation Engine')) {
  const engineRegex = /<script>[\s\S]*?\/\/ One-by-One Category Reveal Animation Engine[\s\S]*?<\/script>/;
  content = content.replace(engineRegex, newEngineScript);
} else {
  content = content.replace('</body>', `${newEngineScript}\n</body>`);
}

fs.writeFileSync('invesmart.html', content, 'utf8');
console.log('All categories on invesmart.html successfully updated with the hero reveal animation!');
