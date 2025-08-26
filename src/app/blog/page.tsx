import Link from 'next/link';
import { getBlogPosts, getTags } from '@/lib/mdx';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/landing/Header';
import { Footer } from '@/components/landing/Footer';
import { Calendar, User } from 'lucide-react';

export default function BlogPage() {
  const posts = getBlogPosts();
  const tags = getTags();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-20">
        <div className="container">
          {/* Header */}
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Blog Arion OS
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Découvrez les dernières actualités, conseils et insights sur la gestion d&apos;entreprise intelligente.
            </p>
          </div>

          {/* Tags Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Badge variant="secondary" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
              Tous
            </Badge>
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Featured Post */}
          {posts.filter(post => post.featured).length > 0 && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold text-foreground mb-8">Article à la une</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {posts.filter(post => post.featured).slice(0, 1).map((post) => (
                  <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    {post.image && (
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.published_at).toLocaleDateString('fr-FR')}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {post.author}
                        </div>
                      </div>
                      <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-base">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* All Posts */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-8">Tous les articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  {post.image && (
                    <div className="aspect-video overflow-hidden rounded-lg">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.published_at).toLocaleDateString('fr-FR')}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
