const fs = require('fs');

const htmlContent = fs.readFileSync('C:\\Users\\Admin\\.gemini\\antigravity-ide\\brain\\9fb6cf84-6a5c-494e-8c1b-3727994a651d\\.system_generated\\steps\\6\\content.md', 'utf8');

// Extract heading texts
const headings = htmlContent.match(/<h[1-6][^>]*>([\s\S]*?)<\/h[1-6]>/gi) || [];
const texts = htmlContent.match(/<p[^>]*>([\s\S]*?)<\/p>/gi) || [];

const cleanText = (tag) => tag.replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' ');

const result = {
  headings: [...new Set(headings.map(cleanText).filter(t => t.length > 0))],
  paragraphs: [...new Set(texts.map(cleanText).filter(t => t.length > 0))]
};

fs.writeFileSync('parsed_content.json', JSON.stringify(result, null, 2));
console.log('Done parsing');
