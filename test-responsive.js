const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1920, height: 1080 },
];

const sections = [
  { id: 'hero', name: 'Hero Section' },
  { id: 'about', name: 'About Me Section' },
  { id: 'education', name: 'Education Section' },
  { id: 'work', name: 'Work Experience Section' },
  { id: 'social', name: 'Social Media Journey Section' },
];

async function testResponsiveness() {
  const browser = await puppeteer.launch();
  const screenshotsDir = path.join(__dirname, 'test-screenshots');

  // Create screenshots directory if it doesn't exist
  if (!fs.existsSync(screenshotsDir)) {
    fs.mkdirSync(screenshotsDir, { recursive: true });
  }

  console.log('Starting responsive design tests...\n');

  for (const viewport of viewports) {
    console.log(`\n=== Testing ${viewport.name} (${viewport.width}x${viewport.height}) ===`);

    const page = await browser.newPage();
    await page.setViewport(viewport);

    try {
      await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });

      // Take full page screenshot
      const filename = path.join(screenshotsDir, `full-page-${viewport.name}.png`);
      await page.screenshot({ path: filename, fullPage: true });
      console.log(`✓ Full page screenshot: ${filename}`);

      // Take screenshots of each section
      for (const section of sections) {
        try {
          const element = await page.$(`#${section.id}`);
          if (element) {
            const box = await element.boundingBox();
            const sectionFilename = path.join(
              screenshotsDir,
              `${section.id}-${viewport.name}.png`
            );
            await page.screenshot({
              path: sectionFilename,
              clip: {
                x: 0,
                y: box.y,
                width: viewport.width,
                height: Math.min(box.height, 800),
              },
            });
            console.log(`  ✓ ${section.name}: ${sectionFilename}`);
          }
        } catch (error) {
          console.log(`  ✗ ${section.name}: Failed to capture`);
        }
      }
    } catch (error) {
      console.error(`Error testing ${viewport.name}:`, error.message);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log(`\n✓ All tests completed! Screenshots saved to: ${screenshotsDir}`);
}

testResponsiveness().catch(console.error);
