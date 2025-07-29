import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function verifyV72Implementation() {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: { width: 1920, height: 1080 }
  });
  
  const page = await browser.newPage();
  const resultsDir = path.join(__dirname, '..', 'test-results', 'visual-inspection-v7-2');
  
  const report = {
    timestamp: new Date().toISOString(),
    v72Verification: {
      heroVariants: {},
      statistics: {},
      silentTriad: {},
      productSection: {},
      mvcp: {},
      tenDayReferences: {},
      missingComponents: []
    }
  };
  
  try {
    // 1. Verify Hero Variants
    console.log('\n=== Verifying Hero Variants ===');
    for (const variant of ['A', 'B', 'C']) {
      await page.goto(`http://localhost:8080/?variant=${variant}`, { waitUntil: 'networkidle2' });
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for emotional subtitle
      const heroContent = await page.evaluate(() => {
        const hero = document.querySelector('[data-testid="hero-section"]');
        if (!hero) return null;
        
        return {
          headline: hero.querySelector('h1')?.textContent || '',
          subtitle: hero.querySelector('p')?.textContent || '',
          badge: hero.querySelector('[data-testid="certification-badge"]')?.textContent || '',
          ctas: Array.from(hero.querySelectorAll('button, a')).map(el => el.textContent?.trim())
        };
      });
      
      report.v72Verification.heroVariants[`variant${variant}`] = heroContent;
    }
    
    // 2. Verify Statistics
    console.log('\n=== Verifying Statistics ===');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const statistics = await page.evaluate(() => {
      const stats = document.querySelector('[data-testid="statistics-showcase"]');
      if (!stats) return null;
      
      const statValues = Array.from(stats.querySelectorAll('[data-testid*="stat-"]')).map(stat => ({
        value: stat.querySelector('[data-testid*="value"]')?.textContent || '',
        label: stat.querySelector('[data-testid*="label"]')?.textContent || ''
      }));
      
      return {
        found: statValues,
        has70Percent: statValues.some(s => s.value.includes('70')),
        has20to30Percent: statValues.some(s => s.value.includes('20') || s.value.includes('30')),
        has66vs9: statValues.some(s => s.value.includes('66') && s.value.includes('9'))
      };
    });
    
    report.v72Verification.statistics = statistics;
    
    // 3. Verify Silent Triad
    console.log('\n=== Verifying Silent Triad ===');
    const silentTriad = await page.evaluate(() => {
      const problemSection = document.querySelector('[data-testid="problem-solution"]');
      if (!problemSection) return null;
      
      const content = problemSection.textContent || '';
      return {
        hasECG: content.includes('ECG') || content.includes('cardiac'),
        hasABPM: content.includes('ABPM') || content.includes('blood pressure'),
        hasSleep: content.includes('sleep') || content.includes('Sleep'),
        hasThreeModalities: problemSection.querySelectorAll('[data-testid*="modality-"]').length === 3
      };
    });
    
    report.v72Verification.silentTriad = silentTriad;
    
    // 4. Verify Product Section (8 benefit cards)
    console.log('\n=== Verifying Product Section ===');
    const productSection = await page.evaluate(() => {
      const section = document.querySelector('[data-testid="product-section"]');
      if (!section) return null;
      
      const benefitCards = section.querySelectorAll('[data-testid*="benefit-card"]');
      return {
        cardCount: benefitCards.length,
        cardTitles: Array.from(benefitCards).map(card => 
          card.querySelector('h3, h4')?.textContent?.trim() || ''
        ),
        hasGrid: section.querySelector('.grid')?.classList.contains('grid-cols-4') || false
      };
    });
    
    report.v72Verification.productSection = productSection;
    
    // 5. Verify MVCP on GP page
    console.log('\n=== Verifying MVCP on GP Page ===');
    await page.goto('http://localhost:8080/partners/general-practitioners', { waitUntil: 'networkidle2' });
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mvcp = await page.evaluate(() => {
      const mvcpSection = document.querySelector('[data-testid="mvcp-section"]');
      const pageContent = document.body.textContent || '';
      
      return {
        hasMVCPSection: !!mvcpSection,
        mentionsMVCP: pageContent.includes('MVCP') || pageContent.includes('Virtual Clinic Portal'),
        features: mvcpSection ? Array.from(mvcpSection.querySelectorAll('li')).map(li => li.textContent?.trim()) : [],
        ctas: mvcpSection ? Array.from(mvcpSection.querySelectorAll('button, a')).map(el => el.textContent?.trim()) : []
      };
    });
    
    report.v72Verification.mvcp = mvcp;
    
    // 6. Check for 14-day references (should be 10-day)
    console.log('\n=== Checking for 14-day references ===');
    await page.goto('http://localhost:8080/', { waitUntil: 'networkidle2' });
    const dayReferences = await page.evaluate(() => {
      const pageText = document.body.textContent || '';
      const fourteenDayMatches = (pageText.match(/14[\s-]?day/gi) || []).length;
      const tenDayMatches = (pageText.match(/10[\s-]?day/gi) || []).length;
      
      return {
        fourteenDayCount: fourteenDayMatches,
        tenDayCount: tenDayMatches,
        needsUpdate: fourteenDayMatches > 0
      };
    });
    
    report.v72Verification.tenDayReferences = dayReferences;
    
    // 7. Check for missing components
    console.log('\n=== Checking for Missing Components ===');
    const componentChecks = await page.evaluate(() => {
      const checks = {
        numbersSection: !!document.querySelector('[data-testid="numbers-section"]'),
        clinicallyProven: !!document.querySelector('[data-testid="clinically-proven"]'),
        care360: !!document.querySelector('[data-testid="care360-section"]'),
        techCarousel: !!document.querySelector('[data-testid="tech-carousel"]'),
        processFlow: !!document.querySelector('[data-testid="process-flow"]')
      };
      
      return checks;
    });
    
    report.v72Verification.componentChecks = componentChecks;
    report.v72Verification.missingComponents = Object.entries(componentChecks)
      .filter(([_, exists]) => !exists)
      .map(([name]) => name);
    
  } catch (error) {
    console.error('Error during verification:', error);
    report.error = error.message;
  }
  
  // Save detailed report
  fs.writeFileSync(
    path.join(resultsDir, 'v7-2-verification-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  // Generate summary
  console.log('\n=== V7.2 Implementation Summary ===');
  console.log(`✓ Hero variants captured: ${Object.keys(report.v72Verification.heroVariants).length}`);
  console.log(`${report.v72Verification.statistics?.has70Percent ? '✓' : '✗'} 70% statistic found`);
  console.log(`${report.v72Verification.statistics?.has20to30Percent ? '✓' : '✗'} 20-30% statistic found`);
  console.log(`${report.v72Verification.statistics?.has66vs9 ? '✓' : '✗'} 66% vs 9% comparison found`);
  console.log(`${report.v72Verification.silentTriad?.hasThreeModalities ? '✓' : '✗'} Silent Triad (3 modalities) implemented`);
  console.log(`${report.v72Verification.productSection?.cardCount === 8 ? '✓' : '✗'} 8 benefit cards (found: ${report.v72Verification.productSection?.cardCount || 0})`);
  console.log(`${report.v72Verification.mvcp?.hasMVCPSection ? '✓' : '✗'} MVCP section on GP page`);
  console.log(`${!report.v72Verification.tenDayReferences?.needsUpdate ? '✓' : '✗'} All references updated to 10-day (${report.v72Verification.tenDayReferences?.fourteenDayCount || 0} 14-day references remaining)`);
  
  if (report.v72Verification.missingComponents.length > 0) {
    console.log(`\n⚠️  Missing components: ${report.v72Verification.missingComponents.join(', ')}`);
  }
  
  await browser.close();
  
  return report;
}

// Run verification
verifyV72Implementation()
  .then(report => {
    console.log('\n✅ Verification complete. Report saved to test-results/visual-inspection-v7-2/v7-2-verification-report.json');
  })
  .catch(console.error);