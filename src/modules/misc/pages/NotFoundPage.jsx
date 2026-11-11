import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function NotFoundPage() {
  return (
    <MainLayout footerVariant="compact">
      <main className="py-20 px-4 sm:px-8 my-auto text-center">
    <div className="max-w-xl mx-auto space-y-6 bg-white p-10 sm:p-14 rounded-3xl border border-slate-200 shadow-xl">
      <div className="font-serif italic text-6xl sm:text-8xl text-blue-600">404</div>
      <h1 className="text-2xl sm:text-3xl font-serif text-slate-900">Page Not Found</h1>
      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
        The destination you requested has moved or is no longer available. Explore our commercial and residential portfolios below.
      </p>

      <div className="pt-4 flex flex-wrap items-center justify-center gap-3 text-xs font-semibold">
        <a href="/" className="px-6 py-3 rounded-full bg-blue-600 text-white font-bold uppercase tracking-wider hover:bg-blue-700 transition shadow-sm">
          Home
        </a>
        <a href="/invesmart" className="px-6 py-3 rounded-full border border-blue-600 text-blue-600 bg-white font-semibold uppercase tracking-wider hover:bg-blue-50 transition shadow-sm">
          Invesmart Commercial
        </a>
        <a href="/projects" className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 bg-white font-medium uppercase tracking-wider hover:bg-slate-100 transition shadow-sm">
          All Projects
        </a>
        <a href="/contact" className="px-6 py-3 rounded-full border border-slate-300 text-slate-700 bg-white font-medium uppercase tracking-wider hover:bg-slate-100 transition shadow-sm">
          Contact Us
        </a>
      </div>
    </div>
  </main>
    </MainLayout>
  );
}
