# Feature Specifications Directory

This directory contains individual feature specifications following the Agent OS spec-driven development pattern.

## Structure

Each feature gets its own JSON file named: `{feature-name}.json`

## Spec Template

Each spec follows the template defined in `memory/product.json#spec_templates.feature_spec`

## Fields

- **id**: Unique identifier (kebab-case)
- **name**: Human-readable feature name
- **requirements**: Functional, non-functional, and constraints
- **acceptance_criteria**: Testable success criteria
- **technical_design**: Architecture and components
- **ui_design**: Mockups and user flows
- **implementation_plan**: Phases and effort estimates
- **testing_strategy**: Test coverage plans
- **status**: draft | approved | in_progress | completed

## Workflow

1. Create spec using `/create-spec {feature-name}`
2. Spec is researched and structured by agents
3. Tasks generated from spec using `/create-tasks`
4. Implementation tracked against spec
5. Spec marked completed when all criteria met

## Integration

- Specs link to roadmap items in `memory/product.json`
- Tasks in TodoWrite reference spec sections
- Patterns discovered during implementation update `memory/patterns.json`