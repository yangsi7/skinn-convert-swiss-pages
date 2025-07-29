# Manual Navigation Testing Checklist
**Date**: 2025-07-26  
**Tester**: _________________  
**Browser**: _________________  
**Time Started**: _________________  

## Pre-Test Setup
- [ ] Open Chrome browser
- [ ] Navigate to http://localhost:8081
- [ ] Open Chrome DevTools (F12)
- [ ] Enable Device Toolbar (Ctrl+Shift+M)
- [ ] Clear browser cache
- [ ] Disable any ad blockers

## Test 1: Homepage Loading (All Languages)

### English (Default)
- [ ] Navigate to http://localhost:8081/
- [ ] Page loads without errors
- [ ] Hero section visible
- [ ] Navigation menu present
- [ ] Language switcher visible
- [ ] Footer loads correctly

### German
- [ ] Navigate to http://localhost:8081/de
- [ ] Page loads in German
- [ ] URL stays as /de
- [ ] No English content visible
- [ ] Navigation in German

### French
- [ ] Navigate to http://localhost:8081/fr
- [ ] Page loads in French
- [ ] URL stays as /fr
- [ ] No mixed language content
- [ ] Navigation in French

### Italian
- [ ] Navigate to http://localhost:8081/it
- [ ] Page loads in Italian
- [ ] URL stays as /it
- [ ] Content fully translated
- [ ] Navigation in Italian

## Test 2: Language Switching (Desktop View)

### From English Homepage
- [ ] Start at http://localhost:8081/
- [ ] Click language switcher
- [ ] Language dropdown appears
- [ ] Select "Deutsch"
- [ ] Page redirects to /de
- [ ] Content updates to German
- [ ] Navigation updates to German

### From Product Page
- [ ] Navigate to /solutions/10-day-heart-screening
- [ ] Click language switcher
- [ ] Select "Français"
- [ ] URL changes to /fr/solutions/bilan-cardiaque-10-jours
- [ ] Same page content in French
- [ ] Breadcrumbs in French

## Test 3: Mobile Navigation (375x667)

### Hamburger Menu
- [ ] Set viewport to iPhone SE (375x667)
- [ ] Hamburger icon visible
- [ ] Desktop menu hidden
- [ ] Click hamburger icon
- [ ] Menu slides in smoothly
- [ ] All menu items visible
- [ ] Submenu items expandable

### Touch Targets
- [ ] Menu items ≥ 44x44px
- [ ] Language switcher accessible
- [ ] Close button works
- [ ] Outside click closes menu

### Navigation Flow
- [ ] Click "Solutions" in mobile menu
- [ ] Submenu expands
- [ ] Click "10-Day Heart Screening"
- [ ] Menu closes automatically
- [ ] Page navigates correctly

## Test 4: Critical User Paths

### Path 1: Learn About Product
1. [ ] Start at homepage
2. [ ] Click "Solutions" → "10-Day Heart Screening"
3. [ ] Page loads correctly
4. [ ] Click "How it Works"
5. [ ] Information displays properly
6. [ ] Click "Get Started" CTA
7. [ ] Form or next step loads

### Path 2: Professional Access
1. [ ] Start at homepage
2. [ ] Click "Partners" → "General Practitioners"
3. [ ] Professional page loads
4. [ ] Medical information accurate
5. [ ] Professional CTAs present
6. [ ] Contact information visible

### Path 3: Insurance Check
1. [ ] Start at homepage
2. [ ] Click insurance CTA
3. [ ] Insurance section loads
4. [ ] 4 pathway cards visible
5. [ ] Reimbursement info clear
6. [ ] Links to FAQ work

## Test 5: Theme Verification

### Modern Theme (Should be Default)
- [ ] Modern theme active on load
- [ ] v7.2 components visible:
  - [ ] Silent Triad statistics
  - [ ] Product benefits (8 cards)
  - [ ] Numbers section
  - [ ] Tech carousel
  - [ ] Medical advisors
  - [ ] Risk cards

### Classic Theme
- [ ] Switch to Classic tab
- [ ] Different layout loads
- [ ] Older content version
- [ ] Theme persists on navigation

## Test 6: Component Functionality

### Interactive Elements
- [ ] Statistics counter animation
- [ ] Product card hover states
- [ ] Tech carousel advances
- [ ] FAQ accordions expand/collapse
- [ ] Video players work (if any)
- [ ] Image galleries function

### Forms
- [ ] Contact forms render
- [ ] Validation messages appear
- [ ] Success states work
- [ ] Error handling graceful

## Test 7: Performance Checks

### Loading Performance
- [ ] LCP < 2.5 seconds
- [ ] No layout shifts (CLS < 0.1)
- [ ] Images load progressively
- [ ] No blocking resources

### Console Checks
- [ ] No JavaScript errors
- [ ] No 404 errors
- [ ] No mixed content warnings
- [ ] No deprecated API usage

## Test 8: SEO Elements

### Meta Tags
- [ ] Page titles unique
- [ ] Meta descriptions present
- [ ] OG tags for social media
- [ ] Canonical URLs correct

### Language Tags
- [ ] Hreflang tags present
- [ ] Alternate language links
- [ ] Correct language codes
- [ ] Self-referencing hreflang

## Test 9: Accessibility Spot Checks

### Keyboard Navigation
- [ ] Tab through navigation
- [ ] Focus indicators visible
- [ ] Skip links work
- [ ] Modal escape works

### Screen Reader Basics
- [ ] Headings hierarchical
- [ ] Images have alt text
- [ ] Forms have labels
- [ ] ARIA landmarks present

## Test 10: Edge Cases

### URL Handling
- [ ] Trailing slashes handled
- [ ] Case sensitivity correct
- [ ] 404 page works
- [ ] Redirects function

### Browser Compatibility
- [ ] Chrome works
- [ ] Firefox works
- [ ] Safari works
- [ ] Edge works

## Post-Test Summary

### Critical Issues Found
1. _________________________________
2. _________________________________
3. _________________________________

### Medium Priority Issues
1. _________________________________
2. _________________________________
3. _________________________________

### Minor Issues/Improvements
1. _________________________________
2. _________________________________
3. _________________________________

### Test Completion
- **Time Ended**: _________________
- **Total Duration**: _________________
- **Tester Signature**: _________________

## Notes Section
_Use this space for additional observations, screenshots references, or detailed issue descriptions_

_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________
_______________________________________________