# Bugs To‑Do
This checklist tracks active bugs that require resolution. Each entry should reference a bug in bugs.md, indicate its severity and assign an owner or team responsible for the fix. Once a bug is resolved, mark it as completed here and update its status in bugs.md. Also create an entry in bug_fix_planning.md outlining the fix approach.

Active Bugs

- [ ] BUG-20250725-01 (P1) – Classic Theme Loads by Default Instead of Modern – Owner: Frontend Team
  - Impact: Users don't see v7.2 features
  - Fix: Update HomePageTabs defaultTab="modern"
  - Priority: HIGH - Fix before launch

- [ ] BUG-20250725-02 (P2) – Missing data-testid Attributes on v7.2 Components – Owner: QA Team
  - Impact: Automated testing difficult
  - Fix: Add test IDs to all v7.2 components
  - Priority: MEDIUM - Fix for QA automation

- [x] BUG-20250726-01 (P0) – Homepage Renders Blank for All Languages – Owner: Frontend Team ✅ FIXED
  - Impact: Complete site failure, no homepage access
  - Fix: Added missing problemSolution sections to all translation files
  - Priority: CRITICAL - FIXED 2025-07-26 16:12

- [ ] BUG-20250726-02 (P0) – Route URLs Don't Match v7.2 Specification – Owner: Frontend Team
  - Impact: SEO failure, broken marketing links
  - Fix: Update routes to match v7.2 spec terminology
  - Priority: CRITICAL - Fix before launch

- [ ] BUG-20250726-03 (P0) – Italian Translation Structure Incompatible – Owner: Frontend Team
  - Impact: Italian language completely broken
  - Fix: Reorganize Italian translation files or update import logic
  - Priority: CRITICAL - Blocks Italian market

<!-- Add new bug checklist entries below this line -->
