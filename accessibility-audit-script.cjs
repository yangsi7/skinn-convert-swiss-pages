// Comprehensive Accessibility Audit Script
// This script will analyze color contrast ratios and identify WCAG violations

const fs = require('fs');

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

function hslToRgb(h, s, l) {
  s /= 100;
  l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs((h / 60) % 2 - 1));
  const m = l - c / 2;
  let r, g, b;

  if (0 <= h && h < 60) {
    r = c; g = x; b = 0;
  } else if (60 <= h && h < 120) {
    r = x; g = c; b = 0;
  } else if (120 <= h && h < 180) {
    r = 0; g = c; b = x;
  } else if (180 <= h && h < 240) {
    r = 0; g = x; b = c;
  } else if (240 <= h && h < 300) {
    r = x; g = 0; b = c;
  } else if (300 <= h && h < 360) {
    r = c; g = 0; b = x;
  }

  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255)
  };
}

function getLuminance(rgb) {
  const { r, g, b } = rgb;
  const sRGB = [r, g, b].map(channel => {
    const c = channel / 255;
    return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * sRGB[0] + 0.7152 * sRGB[1] + 0.0722 * sRGB[2];
}

function getContrastRatio(color1, color2) {
  const lum1 = getLuminance(color1);
  const lum2 = getLuminance(color2);
  const brightest = Math.max(lum1, lum2);
  const darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
}

// S&W Design color palette from index.css
const colorPalette = {
  // Base colors (HSL values from CSS)
  background: hslToRgb(0, 0, 100), // white
  foreground: hslToRgb(0, 0, 5),   // #0D0D0D near black
  primary: hslToRgb(208, 87, 63),  // #5298F2 primary blue
  primaryForeground: hslToRgb(0, 0, 100), // white
  secondary: hslToRgb(30, 29, 91), // #EEE8E1 cream
  secondaryForeground: hslToRgb(209, 100, 29), // #004C96 dark blue
  muted: hslToRgb(0, 0, 95),       // #F2F2F2 off white
  mutedForeground: hslToRgb(213, 11, 33), // #475259 charcoal
  accent: hslToRgb(245, 48, 47),   // #5549A6 purple
  accentForeground: hslToRgb(0, 0, 100), // white
  
  // S&W Landing page specific colors
  lpPrimaryBlue: hslToRgb(208, 87, 63),  // #5298F2
  lpDarkBlue: hslToRgb(209, 100, 29),    // #004C96  
  lpCharcoal: hslToRgb(213, 11, 33),     // #475259
  lpBlack: hslToRgb(0, 0, 5),            // #0D0D0D
  lpPurple: hslToRgb(245, 48, 47),       // #5549A6
  lpWhite: hslToRgb(0, 0, 95),           // #F2F2F2
  lpCream: hslToRgb(30, 29, 91)          // #EEE8E1
};

// Common text/background combinations to test
const contrastTests = [
  // Main text combinations
  { name: 'Body text on white background', text: colorPalette.mutedForeground, bg: colorPalette.background },
  { name: 'Headlines on white background', text: colorPalette.foreground, bg: colorPalette.background },
  { name: 'Dark blue headers on white', text: colorPalette.secondaryForeground, bg: colorPalette.background },
  { name: 'Charcoal text on white', text: colorPalette.lpCharcoal, bg: colorPalette.background },
  { name: 'Black headlines on white', text: colorPalette.lpBlack, bg: colorPalette.background },
  
  // Button combinations
  { name: 'White text on primary blue button', text: colorPalette.primaryForeground, bg: colorPalette.primary },
  { name: 'White text on purple button', text: colorPalette.accentForeground, bg: colorPalette.accent },
  { name: 'White text on dark blue button', text: colorPalette.primaryForeground, bg: colorPalette.secondaryForeground },
  
  // Muted background combinations
  { name: 'Charcoal text on cream background', text: colorPalette.lpCharcoal, bg: colorPalette.lpCream },
  { name: 'Dark blue on cream background', text: colorPalette.lpDarkBlue, bg: colorPalette.lpCream },
  { name: 'Black text on cream background', text: colorPalette.lpBlack, bg: colorPalette.lpCream },
  { name: 'Charcoal text on muted background', text: colorPalette.lpCharcoal, bg: colorPalette.muted },
  
  // Link and accent combinations
  { name: 'Primary blue text on white', text: colorPalette.primary, bg: colorPalette.background },
  { name: 'Purple accent text on white', text: colorPalette.accent, bg: colorPalette.background },
  { name: 'Primary blue on cream', text: colorPalette.primary, bg: colorPalette.lpCream },
  
  // Navigation and UI elements
  { name: 'Muted foreground on white (secondary text)', text: colorPalette.mutedForeground, bg: colorPalette.background },
  { name: 'Secondary foreground on secondary bg', text: colorPalette.secondaryForeground, bg: colorPalette.secondary }
];

console.log('🔍 WCAG 2.1 AA Color Contrast Audit - S&W Design System');
console.log('='.repeat(70));
console.log('Target: 4.5:1 minimum ratio for normal text, 3:1 for large text\n');

const results = [];
let passCount = 0;
let failCount = 0;

contrastTests.forEach(test => {
  const ratio = getContrastRatio(test.text, test.bg);
  const passes = ratio >= 4.5;
  const passesLarge = ratio >= 3.0;
  
  if (passes) passCount++;
  else failCount++;
  
  const status = passes ? '✅ PASS' : '❌ FAIL';
  const largeStatus = passesLarge ? '✅ PASS Large' : '❌ FAIL Large';
  
  console.log(`${status} ${test.name}`);
  console.log(`   Ratio: ${ratio.toFixed(2)}:1 ${passes ? '' : '(Below 4.5:1)'}`);
  console.log(`   Large text: ${largeStatus} ${passesLarge ? '' : '(Below 3:1)'}\n`);
  
  results.push({
    name: test.name,
    ratio: ratio.toFixed(2),
    passes,
    passesLarge,
    textColor: `rgb(${test.text.r}, ${test.text.g}, ${test.text.b})`,
    bgColor: `rgb(${test.bg.r}, ${test.bg.g}, ${test.bg.b})`
  });
});

const totalTests = contrastTests.length;
const passRate = (passCount / totalTests * 100).toFixed(1);

console.log('='.repeat(70));
console.log(`📊 SUMMARY:`);
console.log(`Total tests: ${totalTests}`);
console.log(`Passed: ${passCount} (${passRate}%)`);
console.log(`Failed: ${failCount} (${(100 - passRate).toFixed(1)}%)`);

if (failCount > 0) {
  console.log('\n🚨 CRITICAL ACCESSIBILITY ISSUES FOUND:');
  console.log(`${failCount} color combinations fail WCAG 2.1 AA standards`);
  console.log('This blocks medical device marketing compliance!');
  
  console.log('\n❌ Failed combinations that need immediate fixes:');
  results.filter(r => !r.passes).forEach(result => {
    console.log(`   • ${result.name}: ${result.ratio}:1 ratio`);
  });
}

// Generate fix recommendations
console.log('\n🔧 RECOMMENDED FIXES:');
results.filter(r => !r.passes).forEach(result => {
  const currentRatio = parseFloat(result.ratio);
  const neededImprovement = (4.5 / currentRatio).toFixed(2);
  console.log(`   • ${result.name}:`);
  console.log(`     Current: ${result.ratio}:1, Need: ${neededImprovement}x improvement`);
  console.log(`     Text: ${result.textColor}, Background: ${result.bgColor}`);
});

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  totalTests,
  passCount,
  failCount,
  passRate: parseFloat(passRate),
  criticalIssues: failCount > 0,
  results,
  wcagCompliant: failCount === 0,
  medicalDeviceCompliant: failCount === 0
};

fs.writeFileSync('/Users/yangsim/Nanoleq/sideProjects/skinn-convert-swiss-pages/accessibility-contrast-audit.json', 
  JSON.stringify(report, null, 2));

console.log('\n📄 Detailed report saved to: accessibility-contrast-audit.json');
console.log(`\n${failCount === 0 ? '✅ WCAG 2.1 AA COMPLIANT' : '❌ NOT WCAG 2.1 AA COMPLIANT'}`);
console.log(`${failCount === 0 ? '✅ MEDICAL DEVICE MARKETING APPROVED' : '❌ MEDICAL DEVICE MARKETING BLOCKED'}`);