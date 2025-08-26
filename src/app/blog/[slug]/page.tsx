import { notFound } from 'next/navigation';
import { getBlogPost, getBlogPosts } from '@/lib/mdx';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

interface PostWithContent {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  published_at: string;
  updated_at: string;
  tags: string[];
  featured: boolean;
  image?: string;
  content: string;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    return {
      title: 'Article non trouvé',
    };
  }

  return {
    title: `${post.title} | Blog Arion OS`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.published_at,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function getBlogPostContent(slug: string): Promise<PostWithContent | null> {
  try {
    const fullPath = path.join(process.cwd(), 'src/content/blog', `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);
    
    return {
      slug,
      ...(matterResult.data as Omit<PostWithContent, 'slug' | 'content'>),
      content: matterResult.content,
    };
  } catch {
    return null;
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const postWithContent = await getBlogPostContent(params.slug);
  const relatedPosts = getBlogPosts()
    .filter(p => p.slug !== post.slug && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container max-w-4xl">
          {/* Back to Blog */}
          <div className="mb-8">
            <Link 
              href="/blog" 
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Retour au blog
            </Link>
          </div>

          {/* Article Header */}
          <article className="mb-16">
            {/* Meta Info */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.published_at).toLocaleDateString('fr-FR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Hero Image */}
            {post.image && (
              <div className="aspect-video overflow-hidden rounded-lg mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Share Button */}
            <div className="flex justify-end mb-8">
              <button className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                <Share2 className="h-4 w-4" />
                Partager
              </button>
            </div>
          </article>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-16">
            {postWithContent?.content ? (
              <div 
                className="text-foreground prose-headings:text-foreground prose-p:text-foreground prose-strong:text-foreground prose-code:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
                dangerouslySetInnerHTML={{ 
                  __html: postWithContent.content
                    .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mb-3 mt-8">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold mb-2 mt-6">$1</h3>')
                    .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-bold mb-2 mt-4">$1</h4>')
                    .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground my-4">$1</blockquote>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
                    .replace(/`(.*?)`/g, '<code class="bg-muted px-2 py-1 rounded text-sm font-mono">$1</code>')
                    .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
                    .replace(/\n/g, '<br>')
                }}
              />
            ) : (
              <div className="text-foreground">
                <p className="text-muted-foreground italic">
                  Le contenu de l&apos;article sera rendu ici. Pour l&apos;instant, nous affichons les métadonnées.
                </p>
                <p className="text-muted-foreground">
                  Titre: {post.title}
                </p>
                <p className="text-muted-foreground">
                  Auteur: {post.author}
                </p>
                <p className="text-muted-foreground">
                  Date: {new Date(post.published_at).toLocaleDateString('fr-FR')}
                </p>
              </div>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="border-t pt-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Articles similaires
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Card key={relatedPost.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {relatedPost.image && (
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                        <Link href={`/blog/${relatedPost.slug}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
