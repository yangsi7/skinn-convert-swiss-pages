# Todo List - Repository Cleanup & Organization

## 🎯 Project: Clean Up Repository According to Conventions

### Phase 1: Create Directory Structure
- [x] Create `scripts/` directory with subdirectories
  - [x] `scripts/tests/`
  - [x] `scripts/utils/`
  - [x] `scripts/build/`
- [x] Create `test-results/` directory (add to .gitignore)
  - [x] `test-results/screenshots/`
  - [x] `test-results/reports/`
  - [x] `test-results/coverage/`
- [x] Create `docs/reports/` directory structure
  - [x] `docs/reports/meetings/`
  - [x] `docs/reports/visual-tests/`
  - [x] `docs/assets/` for documentation images

### Phase 2: Move Documentation Files
- [x] Move all `*_SUMMARY.md` files from root → `docs/reports/`
- [x] Move all `*_REPORT.md` files from root → `docs/reports/`
- [x] Move `SCROLL_FIX_DOCUMENTATION.md` → `docs/reports/`
- [x] Move `contact-form-test-report.md` → `docs/reports/`
- [x] Remove duplicate `GAP_ANALYSIS_REPORT.md` from root (keep docs/ version)

### Phase 3: Organize Scripts
- [x] Move all `.cjs` test files → `scripts/tests/`
- [x] Move `visual-baseline-test.js` → `scripts/tests/`
- [x] Delete duplicate `take-homepage-screenshot.js` (keep .cjs version)
- [x] Move utility scripts to appropriate subdirectories

### Phase 4: Archive Screenshots
- [x] Create `docs/archive/2025-01-14/screenshots/`
- [x] Move all `.png` files from root → archive
- [x] Keep only essential screenshots in `docs/assets/`
- [x] Document what was archived in README.md

### Phase 5: Consolidate Test Results
- [x] Move `visual-testing-screenshots/` → `test-results/screenshots/`
- [x] Move `visual-testing-baseline/` → `test-results/baseline/`
- [x] Move `navigation-test-screenshots/` → `test-results/screenshots/navigation/`
- [x] Move test JSON files to `test-results/reports/`

### Phase 6: Final Cleanup
- [x] Move `new_images/` → `src/assets/images/german/`
- [x] Update .gitignore with new patterns
- [x] Update doc-ref.md with new locations
- [x] Add repository-conventions.md reference to CLAUDE.md
- [x] Update conventions.md with repository organization section

## Completed Work Summary
- ✅ CLAUDE.md restructuring completed
- ✅ Working files streamlined to 5 core files
- ✅ Created repository-conventions.md
- ✅ Complete repository cleanup executed:
  - Created proper directory structure (scripts/, test-results/, docs/reports/)
  - Moved 12 documentation files from root to docs/reports/
  - Moved 7 test scripts to scripts/tests/
  - Archived 30+ screenshots to docs/archive/2025-01-14/
  - Consolidated test directories into test-results/
  - Updated all documentation with new conventions
  - Root directory now contains only config files and CLAUDE.md

## Notes
- Follow new repository conventions strictly
- Archive rather than delete when unsure
- Update references in all documentation