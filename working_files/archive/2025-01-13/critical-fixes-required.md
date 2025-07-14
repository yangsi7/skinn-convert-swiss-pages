# Critical Fixes Required - SKIIN Swiss Pages

## 🚨 IMMEDIATE ACTIONS NEEDED

Based on Puppeteer visual testing, the following critical issues must be fixed before any further development:

### 1. Page Component Errors (All New Pages)
**Issue**: All new pages (About, Solutions, Partners, HowItWorks, Evidence, FAQ, Contact) throw React errors because:
- Missing translation sections (e.g., `useTranslation('about')` but no 'about' translations exist)
- Missing Layout wrapper (no Navbar/Footer)

**Fix Required**:
```typescript
// Each page needs:
1. Create translation files: src/translations/{pageName}/en.ts, de.ts, fr.ts
2. Wrap content with Layout component:
   import Layout from '@/components/layout/Layout';
   
   return (
     <Layout>
       {/* page content */}
     </Layout>
   );
```

### 2. Translation System Broken
**Issue**: Language switching changes URL but not content
- useTranslation hook not triggering re-renders
- Language context updates not propagating

**Fix Required**:
- Debug useTranslation hook to ensure it re-renders on language change
- Verify LanguageContext provider is properly updating

### 3. Page Titles Generic
**Issue**: All pages show "skinn-convert-swiss-pages" instead of descriptive titles

**Fix Required**:
- Implement dynamic page titles using react-helmet-async
- Add title translations for each page

## Priority Order

1. **Fix page component errors first** - Without this, we can't even see the pages
2. **Fix translation system** - Core functionality needed for multilingual support  
3. **Add page titles** - Important for SEO and user experience

## Time Estimate

- Fix page errors: 2-3 hours
- Fix translation system: 4-6 hours
- Add page titles: 1 hour

**Total: 7-10 hours of critical fixes before Phase 0 can begin**

## Next Steps

1. Create basic translation files for all pages with placeholder content
2. Add Layout wrapper to all page components
3. Debug and fix the translation system
4. Then proceed with Phase 0 architecture realignment