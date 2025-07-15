# Repository Organization Conventions

## Directory Structure

### Core Directories

```
project-root/
├── src/                    # Source code
│   ├── assets/            # Static assets (images, fonts, etc.)
│   ├── components/        # React components
│   ├── contexts/          # React contexts
│   ├── hooks/             # Custom hooks
│   ├── pages/             # Page components
│   ├── routes/            # Routing configuration
│   ├── styles/            # Global styles
│   ├── translations/      # i18n files
│   ├── types/             # TypeScript definitions
│   └── utils/             # Utility functions
├── docs/                   # All documentation
│   ├── specifications/    # Technical specs
│   ├── reports/           # Analysis and test reports
│   ├── compliance/        # Legal and compliance docs
│   ├── archive/           # Archived documents by date
│   └── diagrams/          # Architecture diagrams
├── scripts/                # Scripts and automation
│   ├── tests/            # Test scripts
│   ├── utils/            # Utility scripts
│   └── build/            # Build scripts
├── test-results/          # Test outputs (gitignored)
│   ├── screenshots/      # Test screenshots
│   ├── reports/          # Test reports
│   └── coverage/         # Coverage reports
├── working_files/         # Active working documents
│   ├── archive/          # Archived working files
│   └── [5 core files]    # As defined in CLAUDE.md
├── public/               # Public static files
└── [config files]        # Root configuration files
```

### Root Directory Rules

Only the following types of files should exist at root:
1. **Configuration files**: package.json, tsconfig.json, vite.config.ts, etc.
2. **CLAUDE.md**: Agent entrypoint (special status)
3. **README.md**: Project overview
4. **LICENSE**: License file
5. **.gitignore**, **.env.example**: Version control files

### File Organization Rules

#### Documentation (*.md files)
- **Technical specs** → `docs/specifications/`
- **Reports & analyses** → `docs/reports/`
- **Meeting summaries** → `docs/reports/meetings/`
- **Visual test reports** → `docs/reports/visual-tests/`
- **Archived docs** → `docs/archive/YYYY-MM-DD/`

#### Scripts
- **Test scripts** (*.cjs, test-*.js) → `scripts/tests/`
- **Build scripts** → `scripts/build/`
- **Utility scripts** → `scripts/utils/`
- **One-off scripts** → Archive after use

#### Images & Screenshots
- **Marketing assets** → `src/assets/marketing/`
- **UI components** → `src/assets/images/`
- **Test screenshots** → `test-results/screenshots/` (gitignored)
- **Documentation images** → `docs/assets/`
- **Temporary screenshots** → Delete or archive immediately

#### Test Results
- **All test outputs** → `test-results/` (gitignored)
- **Keep only essential reports** in docs/reports/
- **Archive old test results** weekly

### Naming Conventions

#### Files
- **Components**: PascalCase.tsx (e.g., `HeroSection.tsx`)
- **Hooks**: camelCase.ts with 'use' prefix (e.g., `useTranslation.ts`)
- **Utils**: camelCase.ts (e.g., `formatDate.ts`)
- **Scripts**: kebab-case.js (e.g., `run-visual-tests.js`)
- **Docs**: UPPERCASE-TOPIC.md or kebab-case.md

#### Directories
- **Source code**: camelCase (e.g., `components/`)
- **Documentation**: kebab-case (e.g., `visual-tests/`)
- **Archives**: YYYY-MM-DD format (e.g., `2025-01-14/`)

### Archive Strategy

#### When to Archive
1. **Immediately**: Superseded implementations
2. **Daily**: Test screenshots and temporary files
3. **Weekly**: Old test reports and experimental code
4. **Monthly**: Outdated documentation

#### Archive Structure
```
docs/archive/
└── YYYY-MM-DD/
    ├── README.md         # What was archived and why
    ├── screenshots/      # Visual assets
    ├── reports/          # Old reports
    ├── scripts/          # Deprecated scripts
    └── documentation/    # Superseded docs
```

#### Never Archive
- Current working files (< 7 days old)
- Active specifications
- Configuration files
- Source code (use git history instead)

### .gitignore Rules

Always gitignore:
```
# Test outputs
test-results/
*.log

# Temporary files
*.tmp
.DS_Store

# Environment
.env
.env.local

# IDE
.idea/
.vscode/

# Dependencies
node_modules/

# Build outputs
dist/
build/
```

### Cleanup Checklist

Daily:
- [ ] Remove temporary screenshots from root
- [ ] Archive completed test outputs
- [ ] Update working files if needed

Weekly:
- [ ] Archive old test reports
- [ ] Clean scripts/ directory
- [ ] Review docs/ for outdated content

Monthly:
- [ ] Full repository audit
- [ ] Update archive index
- [ ] Prune unnecessary files

## Implementation Priority

1. **Immediate**: Move all root directory clutter
2. **Today**: Establish scripts/ and test-results/
3. **This week**: Consolidate all documentation
4. **Ongoing**: Maintain conventions daily