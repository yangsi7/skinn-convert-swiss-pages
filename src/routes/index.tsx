
import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import Physicians from '@/pages/Physicians';
import NotFound from '@/pages/NotFound';
import { useLanguage } from '@/contexts/LanguageContext';

const AppRoutes = () => {
  const { language, setLanguage } = useLanguage();
  const location = useLocation();

  // Update language based on URL path
  useEffect(() => {
    const path = location.pathname;
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
      <Route path="/physicians" element={<Physicians />} />
      
      {/* German Routes */}
      <Route path="/de" element={<Index />} />
      <Route path="/de/arzt" element={<Physicians />} />
      
      {/* French Routes */}
      <Route path="/fr" element={<Index />} />
      <Route path="/fr/medecin" element={<Physicians />} />
      
      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
