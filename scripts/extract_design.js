const https = require('https');
const fs = require('fs');

async function analyzeSites() {
  const aveaContent = fs.readFileSync('C:\\Users\\Kishore kumar\\.gemini\\antigravity-ide\\brain\\dad8def1-2074-4617-b07e-fb64e3b7b59e\\.system_generated\\steps\\324\\content.md', 'utf8');
  const emotionContent = fs.readFileSync('C:\\Users\\Kishore kumar\\.gemini\\antigravity-ide\\brain\\dad8def1-2074-4617-b07e-fb64e3b7b59e\\.system_generated\\steps\\326\\content.md', 'utf8');

  console.log('=== AVEA STUDIO ANALYSIS ===');
  // Extract fonts
  const aveaFonts = [...aveaContent.matchAll(/font-family:[^;]+/g)].map(m => m[0]);
  console.log('Fonts found:', [...new Set(aveaFonts)].slice(0, 10));

  // Extract classes
  const aveaClasses = [...aveaContent.matchAll(/class=\"([^\"]+)\"/g)].map(m => m[1]);
  console.log('Sample structural classes:', [...new Set(aveaClasses.flatMap(c => c.split(' ')))].filter(c => c.includes('hero') || c.includes('card') || c.includes('nav') || c.includes('btn') || c.includes('title')).slice(0, 25));

  console.log('\n=== EMOTION AGENCY ANALYSIS ===');
  // Extract theme tokens from Emotion Agency style tag
  const tokenMatch = emotionContent.match(/#theme-tokens\{([^}]+)\}/);
  if (tokenMatch) {
    console.log('Theme tokens:\n', tokenMatch[1].replace(/;/g, ';\n'));
  }

  // Extract fonts from emotion agency
  const emoFonts = [...emotionContent.matchAll(/font-family:[^;]+/g)].map(m => m[0]);
  console.log('Emotion fonts found:', [...new Set(emoFonts)].slice(0, 10));

  // Extract key layout components
  const emoSections = [...emotionContent.matchAll(/class=\"([^\"]+)\"/g)].map(m => m[1]);
  console.log('Sample structural classes:', [...new Set(emoSections.flatMap(c => c.split(' ')))].filter(c => c.includes('hero') || c.includes('btn') || c.includes('nav') || c.includes('pill') || c.includes('loader')).slice(0, 25));
}

analyzeSites();
