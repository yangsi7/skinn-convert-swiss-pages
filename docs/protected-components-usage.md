# Protected Components Usage Guide

## Overview
The protected components are critical medical components with specific restrictions. They have been implemented according to CLAUDE.md specifications.

## Components

### 1. HeartBalanceRing
**Protection**: Clinical accuracy & CE marking (Read-only)
**Usage**: Display heart rhythm balance metrics

```tsx
import { HeartBalanceRing } from '@/components/protected';

// Basic usage
<HeartBalanceRing />
```

### 2. ContributingFactorCards
**Protection**: Regulatory copy approved (Text only)
**Usage**: Display contributing health factors

```tsx
import { ContributingFactorCards } from '@/components/protected';

// Basic usage
<ContributingFactorCards />
```

### 3. TabNavigation
**Protection**: Used by marketing ops (Style override only)
**Usage**: Navigation tabs with marketing tracking

```tsx
import { TabNavigation } from '@/components/protected';

// Basic usage
<TabNavigation 
  defaultTab="overview"
  onTabChange={(tabId) => console.log('Tab changed:', tabId)}
/>
```

### 4. TodayTab
**Protection**: Licensed algorithm (No structural edits)
**Usage**: Display today's health insights

```tsx
import { TodayTab } from '@/components/protected';

// Basic usage
<TodayTab />
```

## Example Page Integration

```tsx
import React from 'react';
import { 
  HeartBalanceRing, 
  ContributingFactorCards, 
  TabNavigation, 
  TodayTab 
} from '@/components/protected';

const PatientDashboard = () => {
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Heart Health Dashboard</h1>
      
      {/* Heart Balance Visualization */}
      <div className="mb-12">
        <HeartBalanceRing />
      </div>
      
      {/* Navigation Tabs */}
      <TabNavigation 
        defaultTab="overview"
        onTabChange={(tab) => {
          // Marketing tracking handled internally
          console.log('Active tab:', tab);
        }}
      />
      
      {/* Today's Insights */}
      <div className="my-12">
        <TodayTab />
      </div>
      
      {/* Contributing Factors */}
      <div className="mt-12">
        <ContributingFactorCards />
      </div>
    </div>
  );
};
```

## Important Notes

1. **DO NOT MODIFY** these components without CEO approval
2. **HeartBalanceRing**: No changes allowed (clinical accuracy dependent)
3. **ContributingFactorCards**: Only text content can be updated (with regulatory approval)
4. **TabNavigation**: Only styling changes allowed (marketing ops dependency)
5. **TodayTab**: No structural changes (licensed algorithm)

## Compliance

All components include appropriate medical disclaimers and certification notices:
- CE marking compliance
- Medical device regulations
- Data protection statements
- Clinical validation references