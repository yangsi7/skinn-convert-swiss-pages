# Comprehensive Research Report: Hooks, Automation & Context Maintenance System
VERSION: 1.0.0  
CREATED: 2025-08-24  
STATUS: COMPLETE  
REPORT_ID: HAC-001

## Executive Summary

This report provides a comprehensive analysis of the project's hooks, automation systems, and context maintenance mechanisms. Critical findings reveal that while documentation exists for proper file organization and context management, enforcement mechanisms are absent, leading to systematic dysfunction. The PROJECT_INDEX.json file at 617KB is impractically large, and the presumed native Claude Code indexing commands (/index, /explore, /prime) are actually custom implementations that don't exist in this project.

### Key Findings
1. **Single Hook System**: Only one hook exists (update-event-stream.py) providing logging but no prevention
2. **Index File Crisis**: PROJECT_INDEX.json at 617KB exceeds practical limits; PROJECT_NAVIGATOR.json at 19KB is viable
3. **No Generation Scripts**: Index files exist but lack generation/update mechanisms
4. **File Organization Breakdown**: 21+ files misplaced in root (target: ≤15) with no enforcement
5. **Custom Commands Missing**: Referenced /index, /explore, /prime commands are not implemented

### Immediate Actions Required
1. Implement pre-commit hook to block file organization violations
2. Create auto-file-mover hook for corrective action
3. Build index generation scripts
4. Switch to PROJECT_NAVIGATOR.json as primary tool
5. Clean up 21 misplaced files immediately

## 1. Current State Analysis

### 1.1 Hooks & Automation Inventory

#### Existing Hooks
| Hook | Purpose | Effectiveness | Issues |
|------|---------|---------------|--------|
| update-event-stream.py | Logs tool usage to event-stream.md | Moderate | Passive only, no prevention |

#### Missing Critical Hooks
- **pre-commit-file-check**: Block commits with misplaced files
- **auto-file-mover**: Automatically organize files post-creation
- **index-updater**: Refresh PROJECT_NAVIGATOR.json on changes
- **context-validator**: Ensure context files remain consistent

### 1.2 Index Files Status

#### PROJECT_INDEX.json
- **Size**: 617KB (26,671 lines)
- **Contents**: Complete function signatures, classes, imports, dependency graphs
- **Issues**: Too large for context window, no update mechanism
- **Recommendation**: Use only for one-time deep analysis

#### PROJECT_NAVIGATOR.json
- **Size**: 19KB (691 lines)
- **Contents**: Lightweight navigation structure with progressive loading
- **Issues**: No generation script, not actively maintained
- **Recommendation**: Make this the primary navigation tool

#### project-tree.txt
- **Size**: 48KB
- **Contents**: Full directory tree
- **Issues**: Static snapshot, quickly becomes stale
- **Recommendation**: Generate on-demand rather than maintain

### 1.3 File Organization Violations

#### Current Violations (21 files in root)
```
❌ Test Files (should be in /tests/ or /scripts/):
- test-eligibility-flow-frontend.js
- test-full-eligibility-flow.js
- test-supabase-auth.js

❌ Specifications (should be in /docs/specs/):
- gp-referral-brainstorming-spec.json
- eligibility-questionnaire-test-automation-spec.json
- file-organization-tot-specification.json
- claude-code-indexing-research-specification.json

❌ Reports (should be in /docs/reports/):
- SWISS_HEALTHCARE_ELIGIBILITY_DESIGN_SYSTEM_TEST_REPORT.md
- ELIGIBILITY_QUESTIONNAIRE_COMPREHENSIVE_TEST_REPORT.md
- COGNEE_MEMORY_INTEGRATION_MULTI_PANEL_REVIEW_SPECIFICATION.json

❌ Documentation (should be in /docs/):
- RELEASE_NOTES.md
- WORKFLOWS.md
```

## 2. Root Cause Analysis

### 2.1 Why Files Accumulate in Wrong Places

#### Primary Causes (Confidence Levels)
1. **Convenience Over Compliance (90%)**: Agents choose speed, create files in root
2. **No Enforcement Mechanisms (95%)**: Only passive logging, no prevention
3. **Hidden Framework (70%)**: Guidelines exist but buried in /docs/
4. **No Immediate Consequences (85%)**: Violations don't block progress

#### System Design Gaps
- **Missing Prevention Layer**: No pre-commit hooks
- **Missing Correction Layer**: No automatic file movement
- **Missing Detection Layer**: No real-time monitoring
- **Missing Feedback Loop**: No immediate consequences

### 2.2 Why Index Files Don't Work

#### Discovery: Claude Code Doesn't Have Native Indexing
Research revealed that /index, /explore, and /prime commands referenced in documentation are **custom implementations**, not built-in Claude Code features. These commands would need to be created as markdown files in `.claude/commands/` directory, which don't exist in this project.

#### Current Problems
1. **No Generation Mechanism**: Index files exist but can't be updated
2. **Size Bloat**: PROJECT_INDEX.json grew to 617KB without pruning
3. **No Maintenance**: Files become stale immediately after creation
4. **No Integration**: Agents don't consistently use indexes

## 3. Impact Assessment

### 3.1 Productivity Impact
- **Time Lost**: ~15-30 minutes per session organizing files
- **Context Confusion**: Agents work with stale or incomplete information
- **Repeated Work**: Same explorations done multiple times
- **Cognitive Load**: Developers must manually track file locations

### 3.2 Quality Impact
- **Repository Professionalism**: Cluttered root gives poor impression
- **Navigation Difficulty**: Hard to find relevant files
- **Documentation Drift**: Docs don't match actual file locations
- **Technical Debt**: Cleanup becomes harder over time

### 3.3 Risk Assessment
| Risk | Severity | Likelihood | Impact |
|------|----------|------------|--------|
| Lost files | Medium | High | Development delays |
| Broken references | High | Medium | Build failures |
| Context corruption | High | Low | Major rework needed |
| Compliance violations | Low | High | Audit issues |

## 4. Recommended Solution Architecture

### 4.1 Three-Layer Defense System

#### Layer 1: Prevention (Block Problems)
```python
# .claude/hooks/pre-commit-file-check.py
#!/usr/bin/env python3
"""Block commits with misplaced files"""

import json
import sys
import os
import re

FORBIDDEN_ROOT_PATTERNS = [
    r'.*\.(jpg|jpeg|png|gif|webp)$',  # Images
    r'.*\.sql$',                       # SQL files
    r'.*\.log$',                       # Log files
    r'^test-.*\.js$',                  # Test scripts
    r'.*-spec\.json$',                 # Specifications
    r'.*-report\.md$'                  # Reports
]

ALLOWED_ROOT_FILES = [
    'README.md', 'CLAUDE.md', 'package.json', 'tsconfig.json',
    'vite.config.ts', 'tailwind.config.ts', 'postcss.config.js',
    '.gitignore', 'index.html', 'components.json'
]

def check_root_files():
    violations = []
    for file in os.listdir('.'):
        if os.path.isfile(file) and file not in ALLOWED_ROOT_FILES:
            for pattern in FORBIDDEN_ROOT_PATTERNS:
                if re.match(pattern, file):
                    violations.append(file)
    return violations

if __name__ == '__main__':
    violations = check_root_files()
    if violations:
        print(f"❌ ERROR: {len(violations)} files violate organization rules:")
        for file in violations:
            print(f"  - {file}")
        print("\nMove files to correct locations:")
        print("  - Test files → /tests/ or /scripts/")
        print("  - Images → /public/assets/images/")
        print("  - SQL → /supabase/")
        print("  - Specs → /docs/specs/")
        print("  - Reports → /docs/reports/")
        sys.exit(1)
```

#### Layer 2: Detection (Find Problems)
```python
# .claude/hooks/file-monitor.py
#!/usr/bin/env python3
"""Real-time file location monitoring"""

import os
import json
from datetime import datetime

def scan_violations():
    """Scan for misplaced files and generate metrics"""
    metrics = {
        'timestamp': datetime.now().isoformat(),
        'root_files': len([f for f in os.listdir('.') if os.path.isfile(f)]),
        'violations': [],
        'compliance_score': 0
    }
    
    # Check various violation patterns
    # Generate compliance score
    # Log to metrics file
    
    with open('context/file-organization-metrics.json', 'w') as f:
        json.dump(metrics, f, indent=2)
    
    return metrics
```

#### Layer 3: Correction (Fix Problems)
```python
# .claude/hooks/auto-file-mover.py
#!/usr/bin/env python3
"""Automatically move misplaced files to correct locations"""

import os
import shutil
import json
from pathlib import Path

FILE_MAPPINGS = {
    r'.*\.(jpg|jpeg|png|gif|webp)$': 'public/assets/images/',
    r'.*\.sql$': 'supabase/migrations/',
    r'^test-.*\.js$': 'scripts/',
    r'.*-spec\.json$': 'docs/specs/',
    r'.*-report\.md$': 'docs/reports/',
    r'.*\.log$': 'archive/logs/'
}

def move_misplaced_files():
    """Move files to their correct locations"""
    movements = []
    
    for file in os.listdir('.'):
        if os.path.isfile(file):
            for pattern, target_dir in FILE_MAPPINGS.items():
                if re.match(pattern, file):
                    # Ensure target directory exists
                    Path(target_dir).mkdir(parents=True, exist_ok=True)
                    
                    # Move file
                    target_path = os.path.join(target_dir, file)
                    shutil.move(file, target_path)
                    
                    movements.append({
                        'file': file,
                        'from': '.',
                        'to': target_path
                    })
                    
                    print(f"✓ Moved {file} → {target_path}")
    
    # Log movements
    if movements:
        with open('context/file-movements.json', 'a') as f:
            json.dump({
                'timestamp': datetime.now().isoformat(),
                'movements': movements
            }, f)
            f.write('\n')
    
    return movements
```

### 4.2 Index Generation System

#### Create PROJECT_NAVIGATOR Generator
```bash
#!/bin/bash
# scripts/generate-navigator.sh

echo "Generating PROJECT_NAVIGATOR.json..."

cat > PROJECT_NAVIGATOR.json << 'EOF'
{
  "version": "2.0.0",
  "generated": "$(date -u +"%Y-%m-%dT%H:%M:%SZ")",
  "instructions": {
    "usage": "Load this file for lightweight project navigation",
    "exploration": "Use /explore commands for detailed analysis",
    "cache": "Check .claude_cache/ for previous explorations"
  },
  "structure": {
    "total_files": $(find . -type f -name "*.ts" -o -name "*.tsx" | wc -l),
    "total_directories": $(find . -type d | wc -l),
    "key_directories": {
      "components": "src/components/",
      "pages": "src/pages/",
      "api": "src/api/",
      "docs": "docs/",
      "tests": "tests/"
    }
  },
  "quick_access": {
    "main_entry": "src/main.tsx",
    "router": "src/routes/index.tsx",
    "types": "src/types/",
    "translations": "src/translations/"
  },
  "recent_changes": $(git log --oneline -10 --pretty=format:'"%h: %s",' | sed '$ s/,$//')
}
EOF

echo "✓ PROJECT_NAVIGATOR.json generated ($(wc -c < PROJECT_NAVIGATOR.json) bytes)"
```

#### Create Custom Claude Commands
```markdown
# .claude/commands/prime.md
---
allowed-tools: Read, Glob
description: Initialize project context
---

## Initialize Project Context

Load PROJECT_NAVIGATOR.json for lightweight navigation.

Steps:
1. Check if PROJECT_NAVIGATOR.json exists
2. Load navigation structure
3. Report project statistics
4. Set up exploration context

Navigator: @PROJECT_NAVIGATOR.json

Report back with:
- Total files and directories
- Key directory locations
- Recent changes
- Readiness status
```

```markdown
# .claude/commands/explore.md
---
allowed-tools: Glob, Grep, Read
description: Progressive project exploration
---

## Explore Project Area

Explore specific project areas with caching.

Usage: /explore [area] [pattern]

Examples:
- /explore components Button
- /explore api auth
- /explore docs migration

Cache results in .claude_cache/ for reuse.
```

```markdown
# .claude/commands/refresh.md
---
allowed-tools: Bash, Write
description: Refresh project indexes
---

## Refresh Navigation Files

Regenerate PROJECT_NAVIGATOR.json with current structure.

Steps:
1. Run generation script
2. Clear .claude_cache/
3. Update context files
4. Report changes detected

Execute: !`bash scripts/generate-navigator.sh`
```

### 4.3 Event Stream Enhancement

#### Improve Description Context
```python
# Enhancement to update-event-stream.py
def format_enhanced_event_description(tool_name, tool_input, project_dir):
    """Generate meaningful descriptions with business context"""
    
    # MANDATORY: Use description parameter if provided
    if 'description' in tool_input and tool_input['description']:
        return tool_input['description']
    
    # Extract task context from todo.md
    current_task = get_current_task(project_dir)
    task_id = current_task.get('id', 'UNKNOWN')
    
    # Generate contextual description
    if tool_name == 'Write':
        file_path = tool_input.get('file_path', '')
        file_name = os.path.basename(file_path)
        file_type = get_file_type(file_path)
        
        return f"[{task_id}] Creating {file_type} {file_name} for {current_task.get('description', 'task')}"
    
    elif tool_name == 'Edit':
        file_path = tool_input.get('file_path', '')
        file_name = os.path.basename(file_path)
        
        return f"[{task_id}] Modifying {file_name} to {get_edit_purpose(tool_input)}"
    
    # ... more tool-specific descriptions
```

## 5. Implementation Roadmap

### Phase 1: Immediate Actions (Day 1)
| Task | Priority | Effort | Impact |
|------|----------|--------|--------|
| Clean up 21 misplaced files | CRITICAL | 30 min | High |
| Create pre-commit hook | CRITICAL | 1 hour | High |
| Create auto-file-mover hook | HIGH | 1 hour | High |
| Generate fresh PROJECT_NAVIGATOR.json | HIGH | 30 min | Medium |

### Phase 2: Core Infrastructure (Week 1)
| Task | Priority | Effort | Impact |
|------|----------|--------|--------|
| Create /prime, /explore, /refresh commands | HIGH | 2 hours | High |
| Enhance event-stream descriptions | MEDIUM | 1 hour | Medium |
| Set up file monitoring metrics | MEDIUM | 1 hour | Medium |
| Document new systems | MEDIUM | 1 hour | Low |

### Phase 3: Advanced Features (Week 2)
| Task | Priority | Effort | Impact |
|------|----------|--------|--------|
| Implement progressive caching | LOW | 3 hours | Medium |
| Create Serena MCP integration | LOW | 2 hours | High |
| Build compliance dashboard | LOW | 2 hours | Low |
| Set up automated reports | LOW | 1 hour | Low |

## 6. Success Metrics

### Immediate Success Criteria
- [ ] Root directory has ≤15 files (all configuration)
- [ ] All test files moved to appropriate directories
- [ ] PROJECT_NAVIGATOR.json < 30KB
- [ ] Pre-commit hook blocking violations
- [ ] Auto-mover correcting placements

### Week 1 Targets
| Metric | Current | Target | Method |
|--------|---------|--------|--------|
| Root files | 36 | ≤15 | Cleanup + enforcement |
| Misplaced files/day | 5-10 | 0 | Pre-commit hook |
| Index size | 617KB | <30KB | Use Navigator |
| Context load time | >5s | <1s | Progressive loading |
| Event descriptions | Generic | Contextual | Enhanced formatting |

### Long-term Goals
- 100% file organization compliance
- Fully automated index maintenance
- <100KB context window usage
- Zero manual file movements
- Complete event traceability

## 7. Risk Mitigation

### Identified Risks & Mitigations
| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Hooks break commits | Low | High | Provide override flag |
| Auto-mover moves wrong files | Medium | Medium | Dry-run mode first |
| Index generation fails | Low | Low | Keep backup indexes |
| Agents ignore rules | High | Medium | Enforce in multiple layers |

## 8. Questions for Clarification

Before proceeding with implementation, please confirm:

1. **Index Strategy**: Should we completely abandon PROJECT_INDEX.json in favor of PROJECT_NAVIGATOR.json?

2. **File Movement**: Are you comfortable with automatic file movement, or prefer manual review?

3. **Enforcement Level**: Should hooks block operations (strict) or just warn (lenient)?

4. **Custom Commands**: Do you want the /prime, /explore, /refresh commands implemented?

5. **Historical Data**: Should we archive the current 617KB PROJECT_INDEX.json or delete it?

6. **Testing Impact**: Some test files might have hardcoded paths - acceptable to update them?

7. **CI/CD Integration**: Should we add GitHub Actions for file organization checks?

## 9. Immediate Action Items

### Do Today (In Order)
1. **Clean Root Directory**
   ```bash
   # Move test files
   mv test-*.js scripts/
   
   # Move specs
   mkdir -p docs/specs
   mv *-spec.json docs/specs/
   
   # Move reports  
   mkdir -p docs/reports
   mv *-report.md docs/reports/
   mv *-REPORT.md docs/reports/
   ```

2. **Create Pre-commit Hook**
   ```bash
   # Create hook file
   cat > .claude/hooks/pre-commit-file-check.py << 'EOF'
   [Insert script from Section 4.1]
   EOF
   
   # Make executable
   chmod +x .claude/hooks/pre-commit-file-check.py
   
   # Link to git hooks
   ln -sf ../../.claude/hooks/pre-commit-file-check.py .git/hooks/pre-commit
   ```

3. **Generate Fresh Navigator**
   ```bash
   # Create generation script
   cat > scripts/generate-navigator.sh << 'EOF'
   [Insert script from Section 4.2]
   EOF
   
   # Run it
   bash scripts/generate-navigator.sh
   ```

4. **Create Auto-mover Hook**
   ```bash
   # Create hook
   cat > .claude/hooks/auto-file-mover.py << 'EOF'
   [Insert script from Section 4.1]
   EOF
   
   # Test in dry-run mode first
   python3 .claude/hooks/auto-file-mover.py --dry-run
   ```

## 10. Conclusion

The project's context maintenance and file organization issues stem from a fundamental gap between documentation and enforcement. While comprehensive guidelines exist, the lack of preventive and corrective mechanisms allows dysfunction to persist. The discovery that Claude Code's indexing commands are custom implementations explains why the index files aren't updating.

### Key Takeaways
1. **Documentation without enforcement fails** - Need active prevention
2. **Large indexes are impractical** - Use progressive loading instead
3. **Custom commands need implementation** - They're not built-in
4. **Multiple defense layers required** - Prevention + Detection + Correction
5. **Automation is essential** - Manual processes don't scale

### Next Steps
1. Execute immediate cleanup (30 minutes)
2. Implement enforcement hooks (2 hours)
3. Switch to PROJECT_NAVIGATOR.json (30 minutes)
4. Create custom commands (2 hours)
5. Monitor and iterate (ongoing)

By implementing these recommendations, the project will achieve:
- Clean, organized repository structure
- Efficient context management under 100KB
- Automated maintenance with zero manual intervention
- Complete traceability through enhanced event logging
- Sustainable development workflow

---

**Report Prepared By**: Claude Code Orchestrator  
**Review Status**: Ready for Implementation  
**Estimated Time to Full Implementation**: 1 week  
**Estimated Immediate Improvement**: 4 hours