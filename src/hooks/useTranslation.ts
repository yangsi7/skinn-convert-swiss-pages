
import { useLanguage } from '@/contexts/LanguageContext';
import { homeTranslations as enHomeTranslations } from '@/translations/home/en';
import { homeTranslations as deHomeTranslations } from '@/translations/home/de';
import { homeTranslations as frHomeTranslations } from '@/translations/home/fr';
import { physiciansContent as enPhysiciansTranslations } from '@/translations/physicians/en';
import { physiciansContent as dePhysiciansTranslations } from '@/translations/physicians/de';
import { physiciansContent as frPhysiciansTranslations } from '@/translations/physicians/fr';
import { enAboutTranslations } from '@/translations/about/en';
import { deAboutTranslations } from '@/translations/about/de';
import { frAboutTranslations } from '@/translations/about/fr';
import { enForPatientsTranslations } from '@/translations/forPatients/en';
import { deForPatientsTranslations } from '@/translations/forPatients/de';
import { frForPatientsTranslations } from '@/translations/forPatients/fr';
import { enForPhysiciansTranslations } from '@/translations/forPhysicians/en';
import { deForPhysiciansTranslations } from '@/translations/forPhysicians/de';
import { frForPhysiciansTranslations } from '@/translations/forPhysicians/fr';
import { enHowItWorksTranslations } from '@/translations/howItWorks/en';
import { deHowItWorksTranslations } from '@/translations/howItWorks/de';
import { frHowItWorksTranslations } from '@/translations/howItWorks/fr';
import { evidenceTranslations as enEvidenceTranslations } from '@/translations/evidence/en';
import { evidenceTranslations as deEvidenceTranslations } from '@/translations/evidence/de';
import { evidenceTranslations as frEvidenceTranslations } from '@/translations/evidence/fr';
import { enFaqTranslations } from '@/translations/faq/en';
import { deFaqTranslations } from '@/translations/faq/de';
import { frFaqTranslations } from '@/translations/faq/fr';
import { en as enContactTranslations } from '@/translations/contact/en';
import { de as deContactTranslations } from '@/translations/contact/de';
import { fr as frContactTranslations } from '@/translations/contact/fr';
import { enSolutionsTranslations } from '@/translations/solutions/en';
import { deSolutionsTranslations } from '@/translations/solutions/de';
import { frSolutionsTranslations } from '@/translations/solutions/fr';
import { enPartnersTranslations } from '@/translations/partners/en';
import { dePartnersTranslations } from '@/translations/partners/de';
import { frPartnersTranslations } from '@/translations/partners/fr';

/**
 * Hook for handling translations in the application
 * 
 * Can be used in two ways:
 * 1. With direct content objects: useTranslation(enContent, deContent, frContent)
 * 2. With predefined section: useTranslation('home') or useTranslation('physicians')
 * 
 * @returns The translated content based on the current language
 */
export function useTranslation<T>(
  enContent: T, 
  deContent: T, 
  frContent: T
): T;

export function useTranslation(section: 'home'): typeof enHomeTranslations;
export function useTranslation(section: 'physicians'): typeof enPhysiciansTranslations;
export function useTranslation(section: 'about'): typeof enAboutTranslations;
export function useTranslation(section: 'forPatients'): typeof enForPatientsTranslations;
export function useTranslation(section: 'forPhysicians'): typeof enForPhysiciansTranslations;
export function useTranslation(section: 'howItWorks'): typeof enHowItWorksTranslations;
export function useTranslation(section: 'evidence'): typeof enEvidenceTranslations;
export function useTranslation(section: 'faq'): typeof enFaqTranslations;
export function useTranslation(section: 'contact'): typeof enContactTranslations;
export function useTranslation(section: 'solutions'): typeof enSolutionsTranslations;
export function useTranslation(section: 'partners'): typeof enPartnersTranslations;

export function useTranslation<T>(
  enContentOrSection: T | string,
  deContent?: T,
  frContent?: T
): any {
  const { language } = useLanguage();
  
  // Handle section-based translations
  if (typeof enContentOrSection === 'string') {
    const section = enContentOrSection;
    
    switch (section) {
      case 'home':
        switch (language) {
          case 'de': return deHomeTranslations;
          case 'fr': return frHomeTranslations;
          default: return enHomeTranslations;
        }
      case 'physicians':
        switch (language) {
          case 'de': return dePhysiciansTranslations;
          case 'fr': return frPhysiciansTranslations;
          default: return enPhysiciansTranslations;
        }
      case 'about':
        switch (language) {
          case 'de': return deAboutTranslations;
          case 'fr': return frAboutTranslations;
          default: return enAboutTranslations;
        }
      case 'forPatients':
        switch (language) {
          case 'de': return deForPatientsTranslations;
          case 'fr': return frForPatientsTranslations;
          default: return enForPatientsTranslations;
        }
      case 'forPhysicians':
        switch (language) {
          case 'de': return deForPhysiciansTranslations;
          case 'fr': return frForPhysiciansTranslations;
          default: return enForPhysiciansTranslations;
        }
      case 'howItWorks':
        switch (language) {
          case 'de': return deHowItWorksTranslations;
          case 'fr': return frHowItWorksTranslations;
          default: return enHowItWorksTranslations;
        }
      case 'evidence':
        switch (language) {
          case 'de': return deEvidenceTranslations;
          case 'fr': return frEvidenceTranslations;
          default: return enEvidenceTranslations;
        }
      case 'faq':
        switch (language) {
          case 'de': return deFaqTranslations;
          case 'fr': return frFaqTranslations;
          default: return enFaqTranslations;
        }
      case 'contact':
        switch (language) {
          case 'de': return deContactTranslations;
          case 'fr': return frContactTranslations;
          default: return enContactTranslations;
        }
      case 'solutions':
        switch (language) {
          case 'de': return deSolutionsTranslations;
          case 'fr': return frSolutionsTranslations;
          default: return enSolutionsTranslations;
        }
      case 'partners':
        switch (language) {
          case 'de': return dePartnersTranslations;
          case 'fr': return frPartnersTranslations;
          default: return enPartnersTranslations;
        }
      // Add other sections as needed
      default:
        console.warn(`Translation section "${section}" not found`);
        return null;
    }
  }
  
  // Handle direct content translations
  switch (language) {
    case 'de':
      return deContent as T;
    case 'fr':
      return frContent as T;
    default:
      return enContentOrSection as T;
  }
}
