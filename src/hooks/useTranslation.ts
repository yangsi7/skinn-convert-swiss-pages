
import { useLanguage } from '@/contexts/LanguageContext';

export function useTranslation<T>(
  enContent: T, 
  deContent: T, 
  frContent: T
): T {
  const { language } = useLanguage();
  
  switch (language) {
    case 'de':
      return deContent;
    case 'fr':
      return frContent;
    default:
      return enContent;
  }
}
