import fs from 'fs';
import path, { resolve } from 'path';
import matter from 'gray-matter';
import prism from 'remark-prism';
const remark = require('remark');
const html = require('remark-html');

const { readdir } = fs.promises;
const markdownDirectory = path.join(process.cwd(), 'public/markdown');

type fileObj = (directory: string) => Promise<string[]>;

const getFiles: fileObj = async (directory: string) => {
  const dirents = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    dirents.map((dirent) => {
      const res = resolve(directory, dirent.name);
      return dirent.isDirectory()
        ? getFiles(res)
        : res.replace(markdownDirectory, '');
    })
  );
  return Array.prototype.concat(...files);
};

export async function getPosts() {
  // Get file names under /posts
  // const fileNames = fs.readdirSync(markdownDirectory);
  const fileNames = await getFiles(markdownDirectory);
  const allPosts = fileNames.map((fileName: string) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(markdownDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  return allPosts;
}

export async function getPost(id: string) {
  const fullPath = path.join(markdownDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html, { sanitize: false })
    .use(prism)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id
  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}
