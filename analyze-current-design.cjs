const puppeteer = require('puppeteer');
const fs = require('fs');

async function analyzeCurrentDesign() {
    const browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: null,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        const page = await browser.newPage();
        
        // Navigate to the site
        await page.goto('http://localhost:8083/', {
            waitUntil: 'networkidle2',
            timeout: 30000
        });

        // Wait for content to load
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Capture desktop screenshot
        await page.setViewport({ width: 1440, height: 900 });
        await page.screenshot({
            path: 'current-homepage-desktop.png',
            fullPage: true
        });
        console.log('Desktop screenshot captured');

        // Capture mobile screenshot
        await page.setViewport({ width: 375, height: 667 });
        await new Promise(resolve => setTimeout(resolve, 1000));
        await page.screenshot({
            path: 'current-homepage-mobile.png',
            fullPage: true
        });
        console.log('Mobile screenshot captured');

        // Analyze design elements
        const designAnalysis = await page.evaluate(() => {
            const analysis = {
                colors: {},
                typography: {},
                layout: {},
                components: []
            };

            // Get computed styles from various elements
            const body = document.body;
            const bodyStyles = window.getComputedStyle(body);
            
            // Analyze colors
            analysis.colors.background = bodyStyles.backgroundColor;
            analysis.colors.text = bodyStyles.color;
            
            // Get primary colors from buttons and links
            const buttons = document.querySelectorAll('button, .btn, [class*="button"]');
            const primaryColors = new Set();
            buttons.forEach(btn => {
                const btnStyles = window.getComputedStyle(btn);
                primaryColors.add(btnStyles.backgroundColor);
                primaryColors.add(btnStyles.color);
            });
            analysis.colors.primary = Array.from(primaryColors);

            // Analyze typography
            analysis.typography.bodyFont = bodyStyles.fontFamily;
            analysis.typography.bodySize = bodyStyles.fontSize;
            analysis.typography.lineHeight = bodyStyles.lineHeight;
            
            // Get heading styles
            const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
            analysis.typography.headings = [];
            headings.forEach(h => {
                const hStyles = window.getComputedStyle(h);
                analysis.typography.headings.push({
                    tag: h.tagName.toLowerCase(),
                    fontSize: hStyles.fontSize,
                    fontWeight: hStyles.fontWeight,
                    color: hStyles.color,
                    text: h.textContent.trim().substring(0, 50)
                });
            });

            // Analyze layout
            const container = document.querySelector('.container, [class*="container"], main');
            if (container) {
                const containerStyles = window.getComputedStyle(container);
                analysis.layout.maxWidth = containerStyles.maxWidth;
                analysis.layout.padding = containerStyles.padding;
                analysis.layout.margin = containerStyles.margin;
            }

            // Identify components/sections
            const sections = document.querySelectorAll('section, [class*="section"], [class*="hero"], [class*="feature"], [class*="testimonial"]');
            sections.forEach(section => {
                const classes = section.className;
                const heading = section.querySelector('h1, h2, h3');
                analysis.components.push({
                    type: classes,
                    heading: heading ? heading.textContent.trim() : 'No heading',
                    hasImages: section.querySelectorAll('img').length > 0,
                    hasButtons: section.querySelectorAll('button, .btn').length > 0
                });
            });

            // Check for specific medical/healthcare elements
            const medicalElements = {
                hasLogo: !!document.querySelector('[class*="logo"], img[alt*="logo"], img[alt*="SKIIN"]'),
                hasNavigation: !!document.querySelector('nav, [class*="nav"]'),
                hasHero: !!document.querySelector('[class*="hero"]'),
                hasFeatures: !!document.querySelector('[class*="feature"]'),
                hasTestimonials: !!document.querySelector('[class*="testimonial"]'),
                hasContact: !!document.querySelector('[class*="contact"], form'),
                hasCTA: !!document.querySelector('[class*="cta"], [class*="call-to-action"]')
            };
            analysis.medicalElements = medicalElements;

            return analysis;
        });

        // Save analysis
        fs.writeFileSync('design-analysis.json', JSON.stringify(designAnalysis, null, 2));
        console.log('Design analysis saved to design-analysis.json');

        // Additional visual checks
        const visualChecks = await page.evaluate(() => {
            const checks = {
                hasGradients: false,
                hasRoundedCorners: false,
                hasShadows: false,
                hasAnimations: false,
                colorScheme: 'light'
            };

            // Check for gradients
            const allElements = document.querySelectorAll('*');
            allElements.forEach(el => {
                const styles = window.getComputedStyle(el);
                if (styles.backgroundImage.includes('gradient')) {
                    checks.hasGradients = true;
                }
                if (styles.borderRadius !== '0px') {
                    checks.hasRoundedCorners = true;
                }
                if (styles.boxShadow !== 'none') {
                    checks.hasShadows = true;
                }
                if (styles.transition !== 'none' || styles.animation !== 'none') {
                    checks.hasAnimations = true;
                }
            });

            // Determine color scheme
            const bgColor = window.getComputedStyle(document.body).backgroundColor;
            const rgb = bgColor.match(/\d+/g);
            if (rgb) {
                const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                checks.colorScheme = brightness > 128 ? 'light' : 'dark';
            }

            return checks;
        });

        console.log('Visual checks:', visualChecks);

        return { designAnalysis, visualChecks };

    } catch (error) {
        console.error('Error during analysis:', error);
    } finally {
        await browser.close();
    }
}

analyzeCurrentDesign().then(result => {
    console.log('Analysis complete');
}).catch(err => {
    console.error('Analysis failed:', err);
});