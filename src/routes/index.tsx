import React, { useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Index from '@/pages/Index';
import Home2 from '@/pages/Home2';
import HomeV7 from '@/pages/HomeV7';
import NotFound from '@/pages/NotFound';
import ComponentShowcase from '@/pages/ComponentShowcase';

// Solutions pages
import Solutions10DayHeartScreening from '@/pages/solutions/10DayHeartScreening';
import SolutionsTritest from '@/pages/solutions/Tritest';

// Partners pages
import PartnersOverview from '@/pages/partners/Overview';
import PartnersGPs from '@/pages/partners/GeneralPractitioners';
import PartnersCardiologists from '@/pages/partners/Cardiologists';
import PartnersTelemedicine from '@/pages/partners/Telemedicine';
import PartnersCorporate from '@/pages/partners/Corporate';

// How It Works pages
import HowItWorksOverview from '@/pages/how-it-works/Overview';
import HowItWorksProcess from '@/pages/how-it-works/Process';
import HowItWorksReimbursement from '@/pages/how-it-works/Reimbursement';
import HowItWorksTechnology from '@/pages/how-it-works/Technology';
import HowItWorksEvidence from '@/pages/how-it-works/Evidence';
import HowItWorksFAQ from '@/pages/how-it-works/FAQ';

// About Us pages
import AboutOverview from '@/pages/about/Overview';
import AboutCompany from '@/pages/about/Company';
import AboutBoard from '@/pages/about/MedicalBoard';
import AboutBlog from '@/pages/about/Blog';
import AboutTestimonials from '@/pages/about/Testimonials';
import AboutCompliance from '@/pages/about/Compliance';
import AboutContact from '@/pages/about/Contact';

// Legal pages
import Privacy from '@/pages/legal/Privacy';
import Terms from '@/pages/legal/Terms';
import Cookies from '@/pages/legal/Cookies';

// Other pages
import RequestDemo from '@/pages/RequestDemo';

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
    } else if (path.startsWith('/it')) {
      setLanguage('it');
    } else if (path !== '/' && !path.includes('/de/') && !path.includes('/fr/') && !path.includes('/it/')) {
      // For non-root English paths that don't contain language prefixes
      setLanguage('en');
    }
  }, [location.pathname, setLanguage]);

  return (
    <Routes>
      {/* English Routes */}
      <Route path="/" element={<Home2 />} />
      <Route path="/home-old" element={<Index />} />
      <Route path="/home-v7-archive" element={<HomeV7 />} />
      <Route path="/component-showcase" element={<ComponentShowcase />} />
      
      {/* Solutions Routes */}
      <Route path="/solutions/10-day-heart-screening" element={<Solutions10DayHeartScreening />} />
      <Route path="/solutions/tritest" element={<SolutionsTritest />} />
      
      {/* Partners Routes */}
      <Route path="/partners" element={<PartnersOverview />} />
      <Route path="/partners/general-practitioners" element={<PartnersGPs />} />
      <Route path="/partners/cardiologists" element={<PartnersCardiologists />} />
      <Route path="/partners/telemedicine" element={<PartnersTelemedicine />} />
      <Route path="/partners/corporate" element={<PartnersCorporate />} />
      
      {/* How It Works Routes */}
      <Route path="/how-it-works" element={<HowItWorksOverview />} />
      <Route path="/how-it-works/process" element={<HowItWorksProcess />} />
      <Route path="/how-it-works/reimbursement" element={<HowItWorksReimbursement />} />
      <Route path="/how-it-works/technology" element={<HowItWorksTechnology />} />
      <Route path="/how-it-works/evidence" element={<HowItWorksEvidence />} />
      <Route path="/how-it-works/faq" element={<HowItWorksFAQ />} />
      
      {/* About Us Routes */}
      <Route path="/about" element={<AboutOverview />} />
      <Route path="/about/company" element={<AboutCompany />} />
      <Route path="/about/medical-board" element={<AboutBoard />} />
      <Route path="/about/blog" element={<AboutBlog />} />
      <Route path="/about/testimonials" element={<AboutTestimonials />} />
      <Route path="/about/compliance" element={<AboutCompliance />} />
      <Route path="/about/contact" element={<AboutContact />} />
      
      {/* Legal Routes */}
      <Route path="/privacy" element={<Privacy />} />
      <Route path="/terms" element={<Terms />} />
      <Route path="/cookies" element={<Cookies />} />
      
      {/* Other Routes */}
      <Route path="/request-demo" element={<RequestDemo />} />
      
      {/* German Routes */}
      <Route path="/de" element={<Home2 />} />
      <Route path="/de/home-old" element={<Index />} />
      <Route path="/de/home-v7-archive" element={<HomeV7 />} />
      
      {/* German Solutions Routes */}
      <Route path="/de/loesungen/10-tage-herzscreening" element={<Solutions10DayHeartScreening />} />
      <Route path="/de/loesungen/tritest" element={<SolutionsTritest />} />
      
      {/* German Partners Routes */}
      <Route path="/de/partner" element={<PartnersOverview />} />
      <Route path="/de/partner/hausaerzte" element={<PartnersGPs />} />
      <Route path="/de/partner/kardiologen" element={<PartnersCardiologists />} />
      <Route path="/de/partner/telemedizin" element={<PartnersTelemedicine />} />
      <Route path="/de/partner/unternehmen" element={<PartnersCorporate />} />
      
      {/* German How It Works Routes */}
      <Route path="/de/wie-es-funktioniert" element={<HowItWorksOverview />} />
      <Route path="/de/wie-es-funktioniert/prozess" element={<HowItWorksProcess />} />
      <Route path="/de/wie-es-funktioniert/kostenerstattung" element={<HowItWorksReimbursement />} />
      <Route path="/de/wie-es-funktioniert/technologie" element={<HowItWorksTechnology />} />
      <Route path="/de/wie-es-funktioniert/evidenz" element={<HowItWorksEvidence />} />
      <Route path="/de/wie-es-funktioniert/faq" element={<HowItWorksFAQ />} />
      
      {/* German About Us Routes */}
      <Route path="/de/ueber-uns" element={<AboutOverview />} />
      <Route path="/de/ueber-uns/unternehmen" element={<AboutCompany />} />
      <Route path="/de/ueber-uns/beirat" element={<AboutBoard />} />
      <Route path="/de/ueber-uns/blog" element={<AboutBlog />} />
      <Route path="/de/ueber-uns/erfahrungsberichte" element={<AboutTestimonials />} />
      <Route path="/de/ueber-uns/compliance" element={<AboutCompliance />} />
      <Route path="/de/ueber-uns/kontakt" element={<AboutContact />} />
      
      {/* German Legal Routes */}
      <Route path="/de/datenschutz" element={<Privacy />} />
      <Route path="/de/agb" element={<Terms />} />
      <Route path="/de/cookies" element={<Cookies />} />
      
      {/* French Routes */}
      <Route path="/fr" element={<Home2 />} />
      <Route path="/fr/home-old" element={<Index />} />
      <Route path="/fr/home-v7-archive" element={<HomeV7 />} />
      
      {/* French Solutions Routes */}
      <Route path="/fr/solutions/bilan-cardiaque-10-jours" element={<Solutions10DayHeartScreening />} />
      <Route path="/fr/solutions/tritest" element={<SolutionsTritest />} />
      
      {/* French Partners Routes */}
      <Route path="/fr/partenaires" element={<PartnersOverview />} />
      <Route path="/fr/partenaires/medecins-generalistes" element={<PartnersGPs />} />
      <Route path="/fr/partenaires/cardiologues" element={<PartnersCardiologists />} />
      <Route path="/fr/partenaires/telemedecine" element={<PartnersTelemedicine />} />
      <Route path="/fr/partenaires/entreprises" element={<PartnersCorporate />} />
      
      {/* French How It Works Routes */}
      <Route path="/fr/comment-ca-marche" element={<HowItWorksOverview />} />
      <Route path="/fr/comment-ca-marche/processus" element={<HowItWorksProcess />} />
      <Route path="/fr/comment-ca-marche/remboursement" element={<HowItWorksReimbursement />} />
      <Route path="/fr/comment-ca-marche/technologie" element={<HowItWorksTechnology />} />
      <Route path="/fr/comment-ca-marche/evidence" element={<HowItWorksEvidence />} />
      <Route path="/fr/comment-ca-marche/faq" element={<HowItWorksFAQ />} />
      
      {/* French About Us Routes */}
      <Route path="/fr/a-propos" element={<AboutOverview />} />
      <Route path="/fr/a-propos/entreprise" element={<AboutCompany />} />
      <Route path="/fr/a-propos/conseil-medical" element={<AboutBoard />} />
      <Route path="/fr/a-propos/blog" element={<AboutBlog />} />
      <Route path="/fr/a-propos/temoignages" element={<AboutTestimonials />} />
      <Route path="/fr/a-propos/conformite" element={<AboutCompliance />} />
      <Route path="/fr/a-propos/contact" element={<AboutContact />} />
      
      {/* French Legal Routes */}
      <Route path="/fr/confidentialite" element={<Privacy />} />
      <Route path="/fr/conditions" element={<Terms />} />
      <Route path="/fr/cookies" element={<Cookies />} />
      
      {/* Italian Routes */}
      <Route path="/it" element={<Home2 />} />
      <Route path="/it/home-old" element={<Index />} />
      <Route path="/it/home-v7-archive" element={<HomeV7 />} />
      
      {/* Italian Solutions Routes */}
      <Route path="/it/soluzioni/screening-cardiaco-10-giorni" element={<Solutions10DayHeartScreening />} />
      <Route path="/it/soluzioni/tritest" element={<SolutionsTritest />} />
      
      {/* Italian Partners Routes */}
      <Route path="/it/partner" element={<PartnersOverview />} />
      <Route path="/it/partner/medici-famiglia" element={<PartnersGPs />} />
      <Route path="/it/partner/cardiologi" element={<PartnersCardiologists />} />
      <Route path="/it/partner/telemedicina" element={<PartnersTelemedicine />} />
      <Route path="/it/partner/aziende" element={<PartnersCorporate />} />
      
      {/* Italian How It Works Routes */}
      <Route path="/it/come-funziona" element={<HowItWorksOverview />} />
      <Route path="/it/come-funziona/processo" element={<HowItWorksProcess />} />
      <Route path="/it/come-funziona/rimborso" element={<HowItWorksReimbursement />} />
      <Route path="/it/come-funziona/tecnologia" element={<HowItWorksTechnology />} />
      <Route path="/it/come-funziona/evidenze" element={<HowItWorksEvidence />} />
      <Route path="/it/come-funziona/faq" element={<HowItWorksFAQ />} />
      
      {/* Italian About Us Routes */}
      <Route path="/it/chi-siamo" element={<AboutOverview />} />
      <Route path="/it/chi-siamo/azienda" element={<AboutCompany />} />
      <Route path="/it/chi-siamo/consiglio-medico" element={<AboutBoard />} />
      <Route path="/it/chi-siamo/blog" element={<AboutBlog />} />
      <Route path="/it/chi-siamo/testimonianze" element={<AboutTestimonials />} />
      <Route path="/it/chi-siamo/conformita" element={<AboutCompliance />} />
      <Route path="/it/chi-siamo/contatti" element={<AboutContact />} />
      
      {/* Italian Legal Routes */}
      <Route path="/it/privacy" element={<Privacy />} />
      <Route path="/it/termini" element={<Terms />} />
      <Route path="/it/cookies" element={<Cookies />} />
      
      {/* Catch-all for 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;