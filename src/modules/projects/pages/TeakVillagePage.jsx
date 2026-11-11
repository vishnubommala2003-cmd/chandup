import React from 'react';
import MainLayout from '@app/layouts/MainLayout';

export default function TeakVillagePage() {
  return (
    <MainLayout footerVariant="compact">
      <section className="relative min-h-[55vh] flex items-center py-20 px-4 sm:px-8 overflow-hidden bg-slate-900 text-white">
    <div className="absolute inset-0 -z-10">
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1920&q=85" alt="Teak Village Agro Retreat" className="w-full h-full object-cover filter brightness-[0.4]" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/60 to-transparent"></div>
    </div>
    <div className="max-w-4xl mx-auto text-center space-y-4">
      <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block">Managed Eco-Luxury Farmland</span>
      <h1 className="text-4xl sm:text-6xl font-serif text-white font-bold">Teak Village Estate</h1>
      <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto font-light leading-relaxed">
        Own productive, professionally managed teak plantation farmland that matures into multi-generational timber wealth while serving as your private weekend sanctuary.
      </p>
    </div>
  </section>

  <section className="py-20 bg-slate-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-8">
      <div className="grid md:grid-cols-3 gap-6 mb-16">
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm reveal-up luxury-card-hover">
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Scientific Agro-Management</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Drip irrigation, soil enrichment, and expert forestry management handled entirely by our team.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm reveal-up luxury-card-hover">
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">High Timber Value</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Teakwood commands premium commodity market valuations upon maturity, generating significant capital return.</p>
        </div>
        <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm reveal-up luxury-card-hover">
          <h3 className="text-xl font-serif text-slate-900 mb-2 font-bold">Weekend Agro Cottages</h3>
          <p className="text-xs text-slate-600 leading-relaxed">Provision to set up wooden cottages, organic vegetable farming, and spend serene weekends with family.</p>
        </div>
      </div>

      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 text-center max-w-2xl mx-auto space-y-4 shadow-sm reveal-scale luxury-card-hover">
        <h2 className="text-3xl font-serif text-slate-900 font-bold">Enquire About Teak Village</h2>
        <p className="text-xs text-slate-600">Farmland units starting from 0.5 Acres. Book a weekend farm tour.</p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <a href="tel:+919100024000" className="px-8 py-3.5 rounded-full bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:bg-emerald-700 transition">
            Call +91 91000 24000
          </a>
          <a href="https://wa.me/919100024000?text=Hi%20Viseshta%20Group,%20I%20am%20interested%20in%20Teak%20Village%20Managed%20Farmland." target="_blank" rel="noreferrer" className="px-8 py-3.5 rounded-full border border-slate-300 text-slate-700 text-xs font-bold uppercase tracking-wider hover:border-emerald-600 hover:text-emerald-600 transition">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
    </MainLayout>
  );
}
