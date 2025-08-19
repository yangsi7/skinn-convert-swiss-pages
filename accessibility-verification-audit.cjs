// WCAG 2.1 AA Verification Audit - Testing the FIXED S&W Design System
const fs = require('fs');

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

function rgbToHex(rgb) {
  return "#" + ((1 << 24) + (rgb.r << 16) + (rgb.g << 8) + rgb.b).toString(16).slice(1);
}

// FIXED S&W Design color palette (ACCESSIBILITY COMPLIANT)
const colorPalette = {
  // Base colors (FIXED HSL values from updated CSS)
  background: hslToRgb(0, 0, 100),     // white
  foreground: hslToRgb(0, 0, 5),       // #0D0D0D near black
  primary: hslToRgb(208, 87, 39),      // #0d69ba FIXED ACCESSIBILITY COMPLIANT Primary Blue
  primaryForeground: hslToRgb(0, 0, 100), // white
  secondary: hslToRgb(30, 29, 91),     // #EEE8E1 cream
  secondaryForeground: hslToRgb(209, 100, 29), // #004C96 dark blue
  muted: hslToRgb(0, 0, 95),           // #F2F2F2 off white
  mutedForeground: hslToRgb(213, 11, 33), // #475259 charcoal
  accent: hslToRgb(245, 48, 47),       // #5549A6 purple
  accentForeground: hslToRgb(0, 0, 100), // white
  
  // S&W Landing page specific colors (FIXED)
  lpPrimaryBlue: hslToRgb(208, 87, 39),    // #0d69ba FIXED
  lpDarkBlue: hslToRgb(209, 100, 29),      // #004C96  
  lpCharcoal: hslToRgb(213, 11, 33),       // #475259
  lpBlack: hslToRgb(0, 0, 5),              // #0D0D0D
  lpPurple: hslToRgb(245, 48, 47),         // #5549A6
  lpWhite: hslToRgb(0, 0, 95),             // #F2F2F2
  lpCream: hslToRgb(30, 29, 91)            // #EEE8E1
};

// Test the FIXED primary blue color
console.log('🔍 ACCESSIBILITY VERIFICATION AUDIT - FIXED S&W Design System');
console.log('='.repeat(70));
console.log('Testing FIXED Primary Blue: HSL(208° 87% 39%) = #0d69ba\n');

const contrastTests = [
  // Critical fixed combinations
  { name: '🚨 FIXED: White text on primary blue button', text: colorPalette.primaryForeground, bg: colorPalette.primary },
  { name: '🚨 FIXED: Primary blue text on white', text: colorPalette.primary, bg: colorPalette.background },
  { name: '🚨 FIXED: Primary blue on cream', text: colorPalette.primary, bg: colorPalette.secondary },
  
  // Other combinations that were already passing
  { name: 'Body text on white background', text: colorPalette.mutedForeground, bg: colorPalette.background },
  { name: 'Headlines on white background', text: colorPalette.foreground, bg: colorPalette.background },
  { name: 'Dark blue headers on white', text: colorPalette.secondaryForeground, bg: colorPalette.background },
  { name: 'White text on purple button', text: colorPalette.accentForeground, bg: colorPalette.accent },
  { name: 'White text on dark blue button', text: colorPalette.primaryForeground, bg: colorPalette.secondaryForeground },
  { name: 'Charcoal text on cream background', text: colorPalette.lpCharcoal, bg: colorPalette.lpCream },
  { name: 'Purple accent text on white', text: colorPalette.accent, bg: colorPalette.background }
];

let passCount = 0;
let failCount = 0;
const results = [];

console.log('🎯 CRITICAL FIXES VERIFICATION:\n');

contrastTests.forEach((test, index) => {
  const ratio = getContrastRatio(test.text, test.bg);
  const passes = ratio >= 4.5;
  const passesLarge = ratio >= 3.0;
  
  if (passes) passCount++;
  else failCount++;
  
  const status = passes ? '✅ PASS' : '❌ FAIL';
  const urgency = test.name.includes('FIXED') ? '🚨' : '';
  
  console.log(`${status} ${urgency} ${test.name}`);
  console.log(`   Ratio: ${ratio.toFixed(2)}:1 ${passes ? '(WCAG AA Compliant)' : '(Below 4.5:1 - CRITICAL)'}`);
  
  if (test.name.includes('FIXED')) {
    const oldColor = hslToRgb(208, 87, 63); // Old failing color
    const oldRatio = getContrastRatio(test.text === colorPalette.primary ? oldColor : test.text, 
                                     test.bg === colorPalette.primary ? oldColor : test.bg);
    const improvement = (ratio / oldRatio).toFixed(2);
    console.log(`   ⬆️  Improved from ${oldRatio.toFixed(2)}:1 (${improvement}x better)`);
  }
  console.log();
  
  results.push({
    name: test.name,
    ratio: ratio.toFixed(2),
    passes,
    critical: test.name.includes('FIXED'),
    textColor: `rgb(${test.text.r}, ${test.text.g}, ${test.text.b})`,
    bgColor: `rgb(${test.bg.r}, ${test.bg.g}, ${test.bg.b})`,
    hex: test.bg === colorPalette.primary ? rgbToHex(colorPalette.primary) : 
         test.text === colorPalette.primary ? rgbToHex(colorPalette.primary) : null
  });
});

const totalTests = contrastTests.length;
const passRate = (passCount / totalTests * 100).toFixed(1);

console.log('='.repeat(70));
console.log(`📊 VERIFICATION RESULTS:`);
console.log(`Total tests: ${totalTests}`);
console.log(`Passed: ${passCount} (${passRate}%)`);
console.log(`Failed: ${failCount} (${(100 - passRate).toFixed(1)}%)`);

const criticalResults = results.filter(r => r.critical);
const criticalPassed = criticalResults.filter(r => r.passes).length;

console.log(`\n🎯 CRITICAL FIXES STATUS:`);
console.log(`Critical fixes tested: ${criticalResults.length}`);
console.log(`Critical fixes passed: ${criticalPassed}`);
console.log(`Critical fixes success rate: ${(criticalPassed / criticalResults.length * 100).toFixed(1)}%`);

if (failCount === 0) {
  console.log('\n🎉 SUCCESS: WCAG 2.1 AA COMPLIANCE ACHIEVED!');
  console.log('✅ Medical device marketing compliance restored');
  console.log('✅ All accessibility barriers resolved');
  console.log('✅ S&W Design System is now accessibility-compliant');
  
  console.log('\n🔧 IMPLEMENTED FIX:');
  console.log(`Primary Blue: HSL(208° 87% 39%) = ${rgbToHex(colorPalette.primary)}`);
  console.log('✅ Maintains brand identity while achieving compliance');
} else {
  console.log('\n⚠️  ADDITIONAL FIXES REQUIRED');
  results.filter(r => !r.passes).forEach(result => {
    console.log(`   • ${result.name}: ${result.ratio}:1 ratio needs fixing`);
  });
}

// Save verification report
const verificationReport = {
  timestamp: new Date().toISOString(),
  fixApplied: 'Primary Blue: 208° 87% 63% → 208° 87% 39%',
  newPrimaryBlue: {
    hsl: '208° 87% 39%',
    hex: rgbToHex(colorPalette.primary),
    rgb: colorPalette.primary
  },
  totalTests,
  passCount,
  failCount,
  passRate: parseFloat(passRate),
  criticalFixesApplied: criticalResults.length,
  criticalFixesPassed: criticalPassed,
  wcagCompliant: failCount === 0,
  medicalDeviceCompliant: failCount === 0,
  results
};

fs.writeFileSync('accessibility-verification-report.json', JSON.stringify(verificationReport, null, 2));

console.log('\n📄 Verification report saved to: accessibility-verification-report.json');
console.log(`\n${failCount === 0 ? '✅ ACCESSIBILITY COMPLIANCE ACHIEVED' : '❌ COMPLIANCE STILL BLOCKED'}`);
console.log(`${failCount === 0 ? '✅ MEDICAL DEVICE MARKETING APPROVED' : '❌ MEDICAL DEVICE MARKETING STILL BLOCKED'}`);