import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogDirectory = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  featured: boolean;
  image?: string;
  content?: string;
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export function getBlogPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(blogDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(blogDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...(matterResult.data as Omit<BlogPost, 'slug'>),
      };
    })
    .sort((a, b) => new Date(b.published_at).getTime() - new Date(a.published_at).getTime());

  return allPostsData;
}

export function getBlogPost(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      slug,
      ...(matterResult.data as Omit<BlogPost, 'slug'>),
    };
  } catch {
    return null;
  }
}

export function getBlogPostContent(slug: string): Promise<BlogPostWithContent | null> {
  try {
    const fullPath = path.join(blogDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return Promise.resolve({
      slug,
      ...(matterResult.data as Omit<BlogPost, 'slug'>),
      content: matterResult.content,
    });
  } catch {
    return Promise.resolve(null);
  }
}

export function getBlogPostsByTag(tag: string): BlogPost[] {
  return getBlogPosts().filter((post) => post.tags.includes(tag));
}

export function getFeaturedPosts(): BlogPost[] {
  return getBlogPosts().filter((post) => post.featured);
}

export function getTags(): string[] {
  const posts = getBlogPosts();
  const tags = new Set<string>();
  
  posts.forEach((post) => {
    post.tags.forEach((tag) => tags.add(tag));
  });
  
  return Array.from(tags).sort();
}
