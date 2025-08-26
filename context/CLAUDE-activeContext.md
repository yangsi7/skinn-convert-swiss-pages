# CLAUDE-activeContext.md
<!-- Current session state, goals, and progress tracking -->

## Session Information
**Last Updated:** 2025-08-25
**Session Focus:** Memory Bank Synchronization - GP Referral System
**Phase:** Synchronization & Documentation

## Current Goals
1. ✅ Update CLAUDE.md with memory bank system
2. ✅ Create core memory bank files in context/
3. ✅ Integrate research-first methodology
4. ✅ Update agent files with new patterns
5. ✅ Complete documentation restructuring (v2.1)
6. ✅ Synchronize memory bank with new patterns
7. ✅ Standardize all 20 agents with self_prime: true
8. ✅ Implement request_id tracking across agent system
9. ✅ Fix hooks preventing unwanted directory creation
10. ✅ Delete 16 .bak files and organize file locations
11. ✅ Achieve full system autonomy
12. ✅ **GP Referral System Implementation** (NEW)
13. ✅ **Memory Bank Synchronization for GP System** (ACTIVE)

## Active Work

### Recently Completed
- ✅ **Agent System Standardization (v2.1)**:
  - Added `self_prime: true` to all 20 agents (autonomous initialization)
  - Implemented `request_id` tracking across entire agent system (50+ occurrences)
  - Created automation scripts (add_self_prime.py, add_request_id.py)
  - Standardized agent frontmatter with consistent patterns
- ✅ **System Cleanup & Hook Fixes**:
  - Deleted all 16 .bak files throughout codebase
  - Fixed update-event-stream.py hook to stop creating subagent-contexts/
  - Moved WORKFLOWS.md to context/ directory
  - Created missing CLAUDE-troubleshooting.md and CLAUDE-config-variables.md
- ✅ **Complete Memory Bank Synchronization**:
  - Updated CLAUDE-patterns.md with agent standardization patterns
  - Added 4 new architectural decisions to CLAUDE-decisions.md
  - Synchronized all memory bank files with current system state
  - Documented autonomous system patterns and capabilities
- ✅ **File Organization Compliance**:
  - All files now in correct locations per organization rules
  - No backup files or unwanted directories remain
  - Project indexes updated to reflect clean structure
- ✅ **GP Referral System Implementation** (NEW):
  - Full production system with 2 new database tables
  - 14 atomic components (≤50 lines each) following design system
  - 3 API routes with comprehensive error handling
  - 2 edge functions with Resend email integration
  - Multi-step wizard with progress tracking
  - QR code generation and sharing functionality
  - Swiss healthcare compliance (HIN email validation)
  - Bcrypt security with 30-day expiration

### In Progress
- ✅ **GP Referral System Memory Bank Synchronization**:
  - Updated CLAUDE-patterns.md with referral code patterns
  - Added 6 new architectural decisions to CLAUDE-decisions.md
  - Synchronizing activeContext.md with GP system completion
  - Planning troubleshooting entries for referral system

### Next Steps
- System operates autonomously - no manual intervention needed
- Agents self-prime with context on every invocation
- Memory bank automatically synchronized after significant changes
- Workflow detection system handles task routing
- Continue monitoring system performance and self-correction

## Project Context

### Key Systems
- **4-Index System v2.0**: Efficient context management
  - PROJECT_INDEX.json (~160KB) - code structure
  - VISUAL_ASSETS_INDEX.json (~124KB) - visual assets
  - project-tree.txt (~36KB) - directory navigation
  - project-index.md (~10KB) - high-level overview

- **GP Referral System** (NEW - Production Ready):
  - 16 tables total (added referral_codes, doctor_referrals)
  - 3 new API routes (/api/referral/*)
  - 14 new atomic components following ≤50 lines rule
  - 2 edge functions with Resend email integration
  - QR code generation and multi-step wizard patterns

### Active Patterns
- **Atomic Design**: Components ≤50 lines
- **Research-First**: No deliverables until research complete
- **Swiss Compliance**: 4 languages, VAT, canton validation
- **OTP Auth**: Rate-limited, no passwords

### Current Architecture
- **Frontend**: Vite + React 18 + TypeScript 5
- **Styling**: Tailwind CSS + shadcn/ui
- **Backend**: Supabase (16 tables, RLS, edge functions)
- **Testing**: Vitest + Playwright
- **Email Service**: Resend API integration
- **File Storage**: Supabase Storage with 10MB limits

## Session Notes

### Important Decisions
- Agent standardization: all 20 agents now fully autonomous with self_prime: true
- Hook fixes: no more unwanted directory creation
- System autonomy: zero manual intervention required
- Request tracking: full debugging capability with request_id system
- File organization: strict compliance with location rules

### System Capabilities Achieved
- **100% Agent Standardization**: All 20 agents self-prime and track requests
- **Full System Autonomy**: No manual intervention needed for any operation
- **Clean Codebase**: Zero .bak files, all files in correct locations
- **Memory Bank Synchronization**: Automatic updates after significant changes
- **Workflow Integration**: WORKFLOWS.md properly integrated into context system
- **GP Referral System**: Full production implementation with Swiss compliance
- **Email Integration**: Professional notifications via Resend API
- **QR Code Support**: Mobile-optimized code sharing

## Open Questions
- None currently

## Blockers
- None currently

## Session History
```markdown
2025-08-25: System Audit & Autonomous Standardization + GP Referral Implementation
- ✅ **Agent System Standardization (v2.1)**:
  * Added self_prime: true to all 20 agents for autonomous operation
  * Implemented request_id tracking across entire agent system
  * Created automation scripts for systematic standardization
  * Achieved zero manual intervention requirement

- ✅ **System Cleanup & Hook Fixes**:
  * Deleted 16 .bak files throughout codebase
  * Fixed update-event-stream.py hook creating unwanted directories
  * Moved WORKFLOWS.md and other files to correct locations
  * Created missing memory bank files (troubleshooting, config-variables)

- ✅ **Memory Bank Full Synchronization**:
  * Updated CLAUDE-patterns.md with agent standardization patterns
  * Added 4 new architectural decisions documenting recent changes
  * Synchronized CLAUDE-activeContext.md with autonomous system state
  * All memory bank files now accurately reflect current system reality

- ✅ **GP Referral System Implementation** (MAJOR FEATURE):
  * Full production system: 16 database tables total
  * 14 new atomic components following ≤50 lines rule
  * 3 API routes + 2 edge functions with Resend integration
  * Swiss compliance: HIN validation, GDPR consent, 7-year retention
  * Security: bcrypt hashing, 30-day expiration, single-use codes
  * UX: QR codes, multi-step wizard, progress tracking
  * Mobile-optimized with accessibility compliance

- ✅ **Achievement: Full System Autonomy + Production GP Referral**:
  * System operates without manual intervention
  * All agents self-prime with relevant context
  * Complete request traceability for debugging
  * Clean, organized codebase with strict file organization compliance
  * Production-ready GP referral system deployed to Supabase
```

## Quick Commands
```bash
# Regenerate indexes if needed
./scripts/generate-indexes.sh

# Check file organization
./scripts/file-organization-scanner.sh

# Run quality checks
npm run check:all

# Test the application
npm run test:all
```

## References
- Main documentation: README.md
- Project index: context/project-index.md
- Event stream: context/event-stream.md
- Planning: context/CLAUDE-planning.md

---
*This file tracks the current session state. Update regularly during work.*