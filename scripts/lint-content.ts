import fs from 'fs';
import path from 'path';

const FORBIDDEN_STRINGS = [
  { pattern: /\u2014|—/g, name: 'Em Dash (—)' },
  { pattern: /\blive call\b/i, name: '"live call"' },
  { pattern: /\bguarantee\b|\bguaranteed\b/i, name: '"guarantee" or "guaranteed"' },
  { pattern: /\bunlimited\b/i, name: '"unlimited"' },
  { pattern: /\bpilot\b/i, name: '"pilot"' },
  { pattern: /\bfree trial\b/i, name: '"free trial"' },
  { pattern: /\b7-day\b/i, name: '"7-day"' },
  { pattern: /\b14-day\b/i, name: '"14-day"' },
  { pattern: /\bteam@talkeradesk\.com\b/i, name: '"team@talkeradesk.com"' },
  { pattern: /\b12 minute\b/i, name: '"12 minute"' },
  { pattern: /\bseamless\b/i, name: '"seamless"' },
  { pattern: /\bcutting-edge\b/i, name: '"cutting-edge"' },
  { pattern: /\brevolutionary\b/i, name: '"revolutionary"' },
  { pattern: /\bunlock\b/i, name: '"unlock"' },
  { pattern: /\bsupercharge\b/i, name: '"supercharge"' },
  { pattern: /\bgame-changing\b/i, name: '"game-changing"' },
  { pattern: /\belevate\b/i, name: '"elevate"' },
  { pattern: /\bempower\b/i, name: '"empower"' },
  { pattern: /\bharness\b/i, name: '"harness"' },
  { pattern: /\bleverage\b/i, name: '"leverage"' },
  // Fake statistics banned
  { pattern: /(?<!max-w-\[|w-\[|\d)85%(?!\w|\])/i, name: '"85%" fake statistic' },
  { pattern: /(?<!max-w-\[|w-\[|\d)62%(?!\w|\])/i, name: '"62%" fake statistic' },
  { pattern: /(?<!max-w-\[|w-\[|\d)80%(?!\w|\])/i, name: '"80%" fake statistic' },
  { pattern: /\$1,?200(\s*per missed call)?/i, name: '"$1,200" fake stat' },
];

function checkFile(filePath: string): string[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const errors: string[] = [];

  for (const item of FORBIDDEN_STRINGS) {
    if (item.pattern.test(content)) {
      // Find line number
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (item.pattern.test(line)) {
          errors.push(`  [Line ${idx + 1}] Forbidden pattern found: ${item.name} -> "${line.trim().slice(0, 80)}"`);
        }
      });
    }
  }

  // Check for forbidden 100% outside terms/specific cases
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (line.includes('100%') && !filePath.includes('terms') && !line.includes('100% triage') && !line.includes('width') && !line.includes('transform')) {
      // 100% is only allowed in specific technical or Terms contexts
      errors.push(`  [Line ${idx + 1}] Check "100%" usage (forbidden outside Terms): "${line.trim().slice(0, 80)}"`);
    }
  });

  return errors;
}

function scanDir(dir: string, extensions: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist' && file !== '.astro') {
        results = results.concat(scanDir(fullPath, extensions));
      }
    } else {
      if (extensions.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

console.log('🔍 Running Talkera Desk Content Linter...');

const filesToScan = [
  ...scanDir(path.join(process.cwd(), 'content'), ['.json', '.md']),
  ...scanDir(path.join(process.cwd(), 'src'), ['.astro', '.ts', '.tsx', '.json', '.html']),
];

let totalErrors = 0;

for (const file of filesToScan) {
  const relPath = path.relative(process.cwd(), file);
  const errors = checkFile(file);
  if (errors.length > 0) {
    console.error(`❌ Errors in ${relPath}:`);
    errors.forEach(e => console.error(e));
    totalErrors += errors.length;
  }
}

if (totalErrors > 0) {
  console.error(`\n🚨 Content linter failed with ${totalErrors} violation(s). Fix all forbidden terms before deploying!`);
  process.exit(1);
} else {
  console.log(`\n✅ Content lint passed! Scanned ${filesToScan.length} files. Zero forbidden terms, zero em dashes.`);
}
