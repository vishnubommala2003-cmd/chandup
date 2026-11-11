import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../../contexts/ModalContext';

export default function Footer({ variant = 'luxury' }) {
  const { openContactModal } = useModal();

  if (variant === 'compact') {
    return (
      <footer className="py-10 bg-[#0f172a] text-center text-xs text-slate-400 border-t border-slate-800">
        <p>© 2026 Viseshta Group. Founded 2018. Hyderabad, Telangana.</p>
      </footer>
    );
  }

  return (
    <footer className="bg-[#0a1a3a] text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <div className="flex items-center mb-6">
              <div className="bg-white px-3.5 py-2 rounded-lg flex items-center shadow-sm">
                <img src="/logo.png" alt="VISESHTA AVENUES" className="h-7 sm:h-8 w-auto object-contain" />
              </div>
            </div>
            <h3 className="text-3xl font-serif italic mb-6">
              Private listings,<br />first.
            </h3>
            <form className="flex max-w-sm gap-2" onSubmit={(e) => { e.preventDefault(); alert('Subscribed to private listings.'); }}>
              <input
                type="email"
                placeholder="Your email address"
                required
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-5 py-2.5 text-sm placeholder:text-white/40 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                className="bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-white/90 transition btn-shimmer cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Explore</p>
              <ul className="space-y-2.5 text-white/80">
                <li><Link to="/properties" className="hover:text-white transition">Properties</Link></li>
                <li><Link to="/developments" className="hover:text-white transition">Developments</Link></li>
                <li><Link to="/locations" className="hover:text-white transition">Locations</Link></li>
                <li><Link to="/journal" className="hover:text-white transition">Journal</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Company</p>
              <ul className="space-y-2.5 text-white/80">
                <li><Link to="/about" className="hover:text-white transition">About</Link></li>
                <li><button type="button" onClick={openContactModal} className="hover:text-white transition cursor-pointer text-left">Contact</button></li>
                <li><Link to="/careers" className="hover:text-white transition">Careers</Link></li>
                <li><Link to="/journal" className="hover:text-white transition">Press</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Offices</p>
              <ul className="space-y-2.5 text-white/80 text-xs leading-relaxed">
                <li>Tashkent — Amir Temur 107</li>
                <li>Dubai — DIFC Gate Village</li>
                <li>Almaty — Dostyk 210</li>
                <li>London — 18 Mount Street</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>© 2026 CALDREN. All rights reserved.</p>
          <p className="font-serif italic text-4xl sm:text-6xl text-white/10 select-none">CALDREN</p>
        </div>
      </div>
    </footer>
  );
}
