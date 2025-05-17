
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Physicians from '@/pages/Physicians';
import NotFound from '@/pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      {/* English Routes */}
      <Route path="/" element={<Index />} />
      <Route path="/physicians" element={<Physicians />} />
      
      {/* German Routes */}
      <Route path="/de" element={<Navigate to="/" replace />} />
      <Route path="/de/arzt" element={<Physicians />} />
      
      {/* French Routes */}
      <Route path="/fr" element={<Navigate to="/" replace />} />
      <Route path="/fr/medecin" element={<Physicians />} />
      
      {/* Catch-all */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
