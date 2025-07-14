
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import Solutions from '@/pages/Solutions';
import Partners from '@/pages/Partners';
import HowItWorks from '@/pages/HowItWorks';
import Evidence from '@/pages/Evidence';
import About from '@/pages/About';
import FAQ from '@/pages/FAQ';
import Contact from '@/pages/Contact';
import NotFound from '@/pages/NotFound';
import { useLanguage } from '@/contexts/LanguageContext';

/**
 * Main routing component that handles multilingual routes
 * Detects language from URL path and updates language context accordingly
 */
const AppRoutes = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Update language context based on URL path
  useEffect(() => {
    const path = location.pathname;
    
    // Set language based on URL path prefix
    if (path.startsWith('/de')) {
      setLanguage('de');
    } else if (path.startsWith('/fr')) {
      setLanguage('fr');
    } else if (path !== '/' && !path.includes('/de/') && !path.includes('/fr/')) {
      // For non-root English paths that don't contain language prefixes
      setLanguage('en');
    }
  }, [location.pathname, setLanguage]);

  return (
    <Routes>
      {/* English Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/solutions" element={<Solutions />} />
      <Route path="/partners" element={<Partners />} />
      <Route path="/how-it-works" element={<HowItWorks />} />
      <Route path="/evidence" element={<Evidence />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Legacy routes - redirect to new pages */}
      <Route path="/for-patients" element={<Navigate to="/solutions" replace />} />
      <Route path="/for-physicians" element={<Navigate to="/partners" replace />} />
      <Route path="/physicians" element={<Navigate to="/partners" replace />} />
      
      {/* German Routes */}
      <Route path="/de" element={<Index />} />
      <Route path="/de/losungen" element={<Solutions />} />
      <Route path="/de/partner" element={<Partners />} />
      <Route path="/de/wie-es-funktioniert" element={<HowItWorks />} />
      <Route path="/de/evidenz" element={<Evidence />} />
      <Route path="/de/uber-uns" element={<About />} />
      <Route path="/de/faq" element={<FAQ />} />
      <Route path="/de/kontakt" element={<Contact />} />
      
      {/* Legacy German routes */}
      <Route path="/de/fur-patienten" element={<Navigate to="/de/losungen" replace />} />
      <Route path="/de/fur-arzte" element={<Navigate to="/de/partner" replace />} />
      <Route path="/de/arzt" element={<Navigate to="/de/partner" replace />} />
      
      {/* French Routes */}
      <Route path="/fr" element={<Index />} />
      <Route path="/fr/solutions" element={<Solutions />} />
      <Route path="/fr/partenaires" element={<Partners />} />
      <Route path="/fr/comment-ca-marche" element={<HowItWorks />} />
      <Route path="/fr/preuves" element={<Evidence />} />
      <Route path="/fr/a-propos" element={<About />} />
      <Route path="/fr/faq" element={<FAQ />} />
      <Route path="/fr/contact" element={<Contact />} />
      
      {/* Legacy French routes */}
      <Route path="/fr/pour-patients" element={<Navigate to="/fr/solutions" replace />} />
      <Route path="/fr/pour-medecins" element={<Navigate to="/fr/partenaires" replace />} />
      <Route path="/fr/medecin" element={<Navigate to="/fr/partenaires" replace />} />
      
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
