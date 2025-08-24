# File Organization Framework for Agentic Coding Systems
VERSION: 1.0
CREATED: 2025-11-20
PURPOSE: Define and enforce strict file organization rules for repository cleanliness
STATUS: ACTIVE

## 1. Core Principles

### Single Location Principle
Every file type has ONE designated location. No exceptions.

### Zero Tolerance for Root Clutter
Only essential configuration files allowed in root. Everything else must be categorized.

### Automated Enforcement
Multiple layers of protection: conventions, hooks, and agent validation.

## 2. File Location Rules

### Root Directory (ONLY these files allowed)
```
/
├── .gitignore          # Git ignore rules
├── CLAUDE.md           # System instructions
├── README.md           # Project overview
├── package.json        # Node dependencies
├── package-lock.json   # Lock file
├── tsconfig.json       # TypeScript config
├── vite.config.ts      # Build config
├── tailwind.config.ts  # Tailwind config
├── postcss.config.js   # PostCSS config
├── eslint.config.js    # Linting config
├── vitest.config.ts    # Test config
├── components.json     # shadcn/ui config
└── index.html          # Entry point
```

### Visual Assets
```
/public/assets/
├── images/             # All images (jpg, jpeg, png, webp)
│   ├── products/      # Product images
│   ├── team/          # Team photos
│   ├── ui/            # UI elements
│   └── marketing/     # Marketing materials
├── videos/            # Video files
├── icons/             # SVG icons
└── documents/         # PDFs, etc.
```

### Documentation
```
/docs/
├── api/               # API specifications
├── architecture/      # System design docs
├── assets/           # Documentation-only images
├── content/          # Master copy documents
├── deployment/       # Deployment guides
├── design/           # Design system docs
└── design-system/    # Component specs
```

### Working Context
```
/context/              # ONLY working files
├── todo.md           # Active tasks
├── planning.md       # Current planning
├── event-stream.md   # Event log
├── conventions.md    # Standards
├── requirements.md   # Active requirements
└── doc-ref.md       # Documentation index
```

### Database & Backend
```
/supabase/
├── migrations/       # SQL migrations
├── functions/        # Edge functions
├── schemas/         # Schema definitions
├── scripts/         # Database scripts
└── test-data/       # Test data SQL
```

### Test Files
```
/tests/
├── unit/            # Unit tests
├── integration/     # Integration tests
└── config/          # Test configuration
```

### Scripts
```
/scripts/
├── build/           # Build scripts
├── utils/           # Utility scripts
└── ci/             # CI/CD scripts
```

## 3. Forbidden Patterns

### ❌ NEVER in Root
- Images (*.jpg, *.jpeg, *.png, *.gif, *.webp)
- SQL files (*.sql)
- Log files (*.log)
- Test results
- Duplicate context files
- Temporary files
- Reports (use docs/reports/)
- Random markdown files

### ❌ NEVER Create
- working_files/ directory (use context/)
- Random test directories
- Duplicate files across locations
- Files with spaces in names
- Unversioned documentation

## 4. File Type Mapping

| File Type | Location | Example |
|-----------|----------|---------|
| Images | /public/assets/images/ | hero-banner.jpg |
| Icons/SVG | /public/assets/icons/ | logo.svg |
| SQL Files | /supabase/migrations/ | 001_initial.sql |
| Reports | /docs/reports/ | 2025-11-20-audit.md |
| Test Results | /archive/tests/ | (ephemeral) |
| Logs | /archive/logs/ | (git-ignored) |
| Context Files | /context/ | todo.md |
| API Specs | /docs/api/ | endpoints.md |
| Components | /src/components/ | Button.tsx |

## 5. Enforcement Mechanisms

### Layer 1: Convention Documentation
- This document defines the rules
- Referenced in CLAUDE.md and conventions.md
- All agents must follow these rules

### Layer 2: Git Hooks (Pre-commit)
```bash
#!/bin/sh
# .git/hooks/pre-commit

# Check for forbidden files in root
forbidden_patterns=".*\.(jpg|jpeg|png|gif|webp|sql|log)$"
root_files=$(git ls-files --others --exclude-standard | grep -E "^[^/]*$" | grep -E "$forbidden_patterns")

if [ ! -z "$root_files" ]; then
  echo "❌ ERROR: Forbidden files in root directory:"
  echo "$root_files"
  echo "Move these files to their proper locations:"
  echo "  - Images → /public/assets/images/"
  echo "  - SQL → /supabase/"
  echo "  - Logs → Should be git-ignored"
  exit 1
fi

# Check for duplicate context files
if [ -d "working_files" ]; then
  echo "❌ ERROR: working_files/ directory exists"
  echo "Use /context/ for working files"
  exit 1
fi
```

### Layer 3: Agent Validation
The documentation-maintainer agent runs file organization checks:
1. Scans for misplaced files
2. Automatically moves files to correct locations
3. Updates references in code
4. Archives obsolete files

### Layer 4: CI/CD Pipeline
```yaml
name: File Organization Check
on: [push, pull_request]

jobs:
  validate-structure:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Check root directory
        run: |
          # Fail if images/sql/logs in root
          ! ls *.{jpg,jpeg,png,sql,log} 2>/dev/null
      - name: Validate structure
        run: |
          # Ensure proper directories exist
          test -d context/
          test -d docs/
          test -d public/assets/
          test -d tests/
```

## 6. Migration Checklist

When cleaning up a messy repository:

### Phase 1: Identify Misplaced Files
- [ ] List all files in root
- [ ] Identify files that violate rules
- [ ] Map each file to correct location

### Phase 2: Create Structure
- [ ] Ensure all required directories exist
- [ ] Create archive directories
- [ ] Update .gitignore

### Phase 3: Move Files
- [ ] Move images to /public/assets/images/
- [ ] Move SQL to /supabase/
- [ ] Move reports to /docs/reports/
- [ ] Archive test results
- [ ] Delete duplicate files

### Phase 4: Update References
- [ ] Update import paths in code
- [ ] Update documentation links
- [ ] Update build configs

### Phase 5: Enforce Rules
- [ ] Install git hooks
- [ ] Update CI/CD pipeline
- [ ] Document in conventions.md

## 7. Automated Cleanup Script

```bash
#!/bin/bash
# cleanup-repo.sh

echo "🧹 Starting repository cleanup..."

# Move images to proper location
for img in *.{jpg,jpeg,png,gif,webp}; do
  if [ -f "$img" ]; then
    echo "Moving $img to public/assets/images/"
    mv "$img" public/assets/images/
  fi
done

# Move SQL files
for sql in *.sql; do
  if [ -f "$sql" ]; then
    echo "Moving $sql to supabase/"
    mv "$sql" supabase/
  fi
done

# Archive logs
mkdir -p archive/logs/$(date +%Y-%m-%d)
for log in *.log; do
  if [ -f "$log" ]; then
    echo "Archiving $log"
    mv "$log" archive/logs/$(date +%Y-%m-%d)/
  fi
done

# Remove duplicate context files
if [ -f "planning.md" ] && [ -f "context/planning.md" ]; then
  echo "Removing duplicate planning.md from root"
  rm planning.md
fi

if [ -f "todo.md" ] && [ -f "context/todo.md" ]; then
  echo "Removing duplicate todo.md from root"
  rm todo.md
fi

# Remove working_files if exists
if [ -d "working_files" ]; then
  echo "Removing working_files directory"
  rm -rf working_files
fi

echo "✅ Cleanup complete!"
```

## 8. Success Metrics

- **Root files**: ≤15 configuration files only
- **Misplaced files**: 0
- **Duplicate files**: 0
- **Test results in repo**: 0 (all archived)
- **Organization compliance**: 100%

## 9. Agent Responsibilities

### documentation-maintainer
- Runs weekly file organization audit
- Moves misplaced files automatically
- Updates doc-ref.md with changes
- Archives obsolete files

### context-manager
- Ensures context/ has only authorized files
- Prevents context file duplication
- Maintains file version control

### All Agents
- MUST follow file location rules
- NEVER create files in root
- ALWAYS use designated directories
- Report violations in event-stream.md