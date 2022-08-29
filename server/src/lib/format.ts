import matter from 'gray-matter';
import prism from 'remark-prism';
const remarkSlug = require('remark-slug');
const remarkAutolinkHeadings = require('remark-autolink-headings');
const remark = require('remark');
const html = require('remark-html');
const remarkToc = require('remark-toc');

export async function getHtml(content: string) {
  const matterResult = matter(content);

  // Use remark to convert toc markdown into HTML string
  const processedTocContent = await remark()
    .use(remarkToc, { maxDepth: 3 }) // table of Contents html generating
    .use(remarkSlug) // autolink-headings 사용을 위해 필요한 라이브러리
    .use(remarkAutolinkHeadings) // add auto heading id
    .use(html, { sanitize: false })
    .use(prism)
    .process('## Table of Contents' + matterResult.content); // Table of Contents markdown 아래로 toc 생성

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(remarkSlug)
    .use(remarkAutolinkHeadings)
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content);

  // Combine the data with the id
  const tableOfContentsPattern = /^<h2[^>]*>((\n|\r|.)*?)<\/h2>/gim;
  const toc = tableOfContentsPattern.exec(processedTocContent.toString());

  return {
    toc: processedTocContent
      .toString()
      .replace(processedContent.toString(), '')
      .replace(toc && toc[0], ''),
    content: processedContent.toString(),
  };
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
