import prism from 'remark-prism';
const remark = require('remark');
const html = require('remark-html');

export async function getHtml(markdown: string) {
  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(markdown);

  // Combine the data with the id
  return processedContent.toString();
}
