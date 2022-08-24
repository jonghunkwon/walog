import matter from 'gray-matter';
import prism from 'remark-prism';
const remark = require('remark');
const html = require('remark-html');

export async function getHtml(content: string) {
  const matterResult = matter(content);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content);

  // Combine the data with the id
  return processedContent.toString();
}

export function getRemark(id: string, content: string) {
  const matterResult = matter(content);

  // Combine the data with the id
  return {
    id,
    content,
    ...matterResult.data,
  };
}
