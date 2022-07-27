import fs from "fs";
import path from "path";
import matter from "gray-matter";
import prism from "remark-prism";
const remark = require("remark");
const html = require("remark-html");

const markdownDirectory = path.join(process.cwd(), "public/markdown");

export function getPosts() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(markdownDirectory);
  const allPosts = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(markdownDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

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
  const fileContents = fs.readFileSync(fullPath, "utf8");

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
