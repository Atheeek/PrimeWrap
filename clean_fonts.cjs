const fs = require('fs');
const path = require('path');

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  content = content.replace(/const raleway = \{ fontFamily: "'Raleway', sans-serif" \};\r?\n?/g, '');
  content = content.replace(/\s*style=\{raleway\}/g, '');
  content = content.replace(/\s*style=\{\{\s*fontFamily:\s*"'Raleway', sans-serif"\s*\}\}/g, '');
  content = content.replace(/style=\{\{\s*\.\.\.raleway,\s*fontWeight:\s*700\s*\}\}\s*className="/g, 'className="font-bold ');
  content = content.replace(/className="([^"]+)"\s*style=\{\{\s*\.\.\.raleway,\s*fontWeight:\s*700\s*\}\}/g, 'className="$1 font-bold"');

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
  }
}

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      results.push(file);
    }
  });
  return results;
}

walk('./src').forEach(processFile);
