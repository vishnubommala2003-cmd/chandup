import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function ThankYouPage() {
  return (
    <MainLayout footerVariant="compact">
      {/* Main Content */}
  <main className="py-16 px-4 sm:px-8 my-auto">
    <div className="max-w-2xl mx-auto text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-blue-100 shadow-xl">
      <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto text-3xl font-bold shadow-sm">
        ✓
      </div>

      <h1 className="text-3xl sm:text-5xl font-serif text-slate-900">
        Thank You, <span id="userName" className="text-blue-600 font-serif">Investor</span>!
      </h1>

      <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
        We have received your enquiry for the <strong className="text-slate-900 font-semibold">Invesmart Commercial Project</strong>. One of our senior commercial investment advisors is preparing your customized Property Breakdown sheet.
      </p>

      {/* Immediate WhatsApp Connect CTA Card */}
      <div className="p-6 rounded-2xl bg-blue-50/70 border border-blue-100 text-left space-y-4">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
          <span className="text-xs uppercase tracking-wider text-blue-700 font-bold">Instant VIP Delivery Available</span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          Skip the queue and receive your Invesmart pricing workbook, floor plans, and RERA approval dockets directly on WhatsApp right now.
        </p>
        <a id="waDirectBtn" href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20just%20submitted%20the%20breakdown%20request%20for%20Invesmart." target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-[0.18em] transition shadow-md shadow-emerald-600/20">
          <span>Connect with Investment Advisor on WhatsApp</span>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.23 8.23 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.5-1.41-1.75-.15-.25-.02-.39.11-.51.11-.11.25-.29.37-.44.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.47c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.23.9 2.43 1.02 2.6.13.17 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.17-.48-.29z"/></svg>
        </a>
      </div>

      {/* Quick Links */}
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs font-semibold">
        <a href="/invesmart" className="px-5 py-2.5 rounded-full border border-blue-200 text-blue-700 bg-white hover:bg-blue-50 transition shadow-sm">
          View Invesmart Specifications
        </a>
        <a href="/" className="px-5 py-2.5 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition shadow-sm">
          Back to Homepage
        </a>
      </div>
    </div>
  </main>

  {/* Footer */}
    </MainLayout>
  );
}
