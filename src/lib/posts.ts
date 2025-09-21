import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src", "content", "posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDir).filter(f => f.endsWith(".md") || f.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDir, slug);
  const file = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(file);
  return { 
    slug: slug.replace(/\.mdx?$/, ""), 
    frontMatter: data, 
    content 
  };
}

export function getAllPosts() {
  const slugs = getPostSlugs();
  return slugs
    .map(s => getPostBySlug(s))
    .sort((a, b) => (a.frontMatter.date < b.frontMatter.date ? 1 : -1));
}
