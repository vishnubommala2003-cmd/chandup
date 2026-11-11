import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// Feature-based module lazy imports
const HomePage = lazy(() => import('../modules/home/pages/HomePage'));
const AboutPage = lazy(() => import('../modules/about/pages/AboutPage'));
const ProjectsPage = lazy(() => import('../modules/projects/pages/ProjectsPage'));
const PalmValleyPage = lazy(() => import('../modules/projects/pages/PalmValleyPage'));
const TeakVillagePage = lazy(() => import('../modules/projects/pages/TeakVillagePage'));
const VistaraValleyPage = lazy(() => import('../modules/projects/pages/VistaraValleyPage'));
const InvesmartPage = lazy(() => import('../modules/invesmart/pages/InvesmartPage'));
const GalleryPage = lazy(() => import('../modules/gallery/pages/GalleryPage'));
const ContactPage = lazy(() => import('../modules/contact/pages/ContactPage'));
const BlogPage = lazy(() => import('../modules/blog/pages/BlogPage'));
const JournalPage = lazy(() => import('../modules/blog/pages/JournalPage'));
const CareersPage = lazy(() => import('../modules/careers/pages/CareersPage'));
const DevelopmentsPage = lazy(() => import('../modules/developments/pages/DevelopmentsPage'));
const PropertiesPage = lazy(() => import('../modules/developments/pages/PropertiesPage'));
const LocationsPage = lazy(() => import('../modules/locations/pages/LocationsPage'));
const NriDeskPage = lazy(() => import('../modules/nri-desk/pages/NriDeskPage'));
const LandingPage = lazy(() => import('../modules/landing/pages/LandingPage'));
const TermsDisclaimerPage = lazy(() => import('../modules/legal/pages/TermsDisclaimerPage'));
const PrivacyPolicyPage = lazy(() => import('../modules/legal/pages/PrivacyPolicyPage'));
const ThankYouPage = lazy(() => import('../modules/misc/pages/ThankYouPage'));
const LogoThemesPage = lazy(() => import('../modules/misc/pages/LogoThemesPage'));
const NotFoundPage = lazy(() => import('../modules/misc/pages/NotFoundPage'));

export default function AppRouter() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0e0d0b]" />}>
      <Routes>
        {/* 1. Home */}
        <Route path="/" element={<HomePage />} />
        <Route path="/index.html" element={<HomePage />} />

        {/* 2. About Us */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about.html" element={<AboutPage />} />

        {/* 3. Projects */}
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects.html" element={<ProjectsPage />} />

        {/* 4. Developments */}
        <Route path="/developments" element={<DevelopmentsPage />} />
        <Route path="/developments.html" element={<DevelopmentsPage />} />

        {/* 5. Invesmart */}
        <Route path="/invesmart" element={<InvesmartPage />} />
        <Route path="/invesmart.html" element={<InvesmartPage />} />

        {/* 6. Gallery */}
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/gallery.html" element={<GalleryPage />} />

        {/* 7. Contact Us */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/contact.html" element={<ContactPage />} />

        {/* 8. Blogs & Journal */}
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog.html" element={<BlogPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journal.html" element={<JournalPage />} />

        {/* 9. Careers */}
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers.html" element={<CareersPage />} />

        {/* 10. Locations */}
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations.html" element={<LocationsPage />} />

        {/* 11. Properties */}
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties.html" element={<PropertiesPage />} />

        {/* 12. Palm Valley */}
        <Route path="/palm-valley" element={<PalmValleyPage />} />
        <Route path="/palm-valley.html" element={<PalmValleyPage />} />

        {/* 13. Teak Village */}
        <Route path="/teak-village" element={<TeakVillagePage />} />
        <Route path="/teak-village.html" element={<TeakVillagePage />} />

        {/* 14. Vistara Valley */}
        <Route path="/vistara-valley" element={<VistaraValleyPage />} />
        <Route path="/vistara-valley.html" element={<VistaraValleyPage />} />

        {/* 15. NRI Desk */}
        <Route path="/nri-desk" element={<NriDeskPage />} />
        <Route path="/nri-desk.html" element={<NriDeskPage />} />

        {/* 16. Landing */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/landing.html" element={<LandingPage />} />

        {/* 17. Terms & Disclaimer */}
        <Route path="/terms-disclaimer" element={<TermsDisclaimerPage />} />
        <Route path="/terms-disclaimer.html" element={<TermsDisclaimerPage />} />

        {/* 18. Privacy Policy */}
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/privacy-policy.html" element={<PrivacyPolicyPage />} />

        {/* 19. Thank You */}
        <Route path="/thank-you" element={<ThankYouPage />} />
        <Route path="/thank-you.html" element={<ThankYouPage />} />

        {/* 20. Logo Themes */}
        <Route path="/logo-themes" element={<LogoThemesPage />} />
        <Route path="/logo-themes.html" element={<LogoThemesPage />} />

        {/* 21. 404 Not Found & Wildcard */}
        <Route path="/404" element={<NotFoundPage />} />
        <Route path="/404.html" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

