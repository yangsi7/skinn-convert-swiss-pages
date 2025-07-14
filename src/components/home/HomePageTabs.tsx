import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useLanguage } from '@/contexts/LanguageContext';

const HomePageTabs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language } = useLanguage();

  const getTabValue = () => {
    if (location.pathname.includes('/home-2')) {
      return 'home-2';
    }
    return 'home';
  };

  const handleTabChange = (value: string) => {
    const basePrefix = language === 'en' ? '' : `/${language}`;
    
    if (value === 'home') {
      navigate(basePrefix === '' ? '/' : basePrefix);
    } else if (value === 'home-2') {
      navigate(`${basePrefix}/home-2`);
    }
  };

  const getTabLabels = () => {
    switch (language) {
      case 'de':
        return {
          home: 'Startseite',
          home2: 'Alternative Ansicht'
        };
      case 'fr':
        return {
          home: 'Accueil',
          home2: 'Vue Alternative'
        };
      default:
        return {
          home: 'Home',
          home2: 'Home-2'
        };
    }
  };

  const labels = getTabLabels();

  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border">
      <Tabs value={getTabValue()} onValueChange={handleTabChange}>
        <TabsList className="grid grid-cols-2 w-auto">
          <TabsTrigger value="home" className="px-6 py-2">
            {labels.home}
          </TabsTrigger>
          <TabsTrigger value="home-2" className="px-6 py-2">
            {labels.home2}
          </TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default HomePageTabs;