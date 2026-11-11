import React from 'react';
import Navbar from '../../shared/components/Navbar';
import Footer from '../../shared/components/Footer';
import ScrollProgressBar from '../../shared/components/ScrollProgressBar';
import BackToTop from '../../shared/components/BackToTop';
import ContactModal from '../../shared/components/ContactModal';
import ShowreelModal from '../../shared/components/ShowreelModal';
import { useAnimations } from '../../shared/hooks/useAnimations';

export default function MainLayout({ children, footerVariant = 'luxury', hideFooter = false, hideNavbar = false }) {
  useAnimations();

  return (
    <div className="min-h-screen flex flex-col bg-[#0e0d0b] text-white">
      <ScrollProgressBar />
      {!hideNavbar && <Navbar />}
      <main className="flex-grow">{children}</main>
      {!hideFooter && <Footer variant={footerVariant} />}
      <BackToTop />
      <ContactModal />
      <ShowreelModal />
    </div>
  );
}
