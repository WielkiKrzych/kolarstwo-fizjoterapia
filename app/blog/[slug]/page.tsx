import { getPostBySlug, getPostContent, getAllSlugs } from "@/lib/blog";
import { Navigation } from "@/components/ui/Navigation";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { JsonLd, createBlogPostingSchema } from "@/components/JsonLd";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  return {
    title: post?.title || "Blog Post",
    description: post?.excerpt || "",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) {
    return (
      <main className="min-h-screen bg-[#0a0a0f]">
        <Navigation />
        <div className="pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Nie znaleziono wpisu</h1>
          <Link href="/blog" className="text-[#00f0ff] hover:underline">
            Wróć do bloga
          </Link>
        </div>
      </main>
    );
  }

  const contentHtml = await getPostContent(slug);

  return (
    <>
      <JsonLd data={createBlogPostingSchema({
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        slug: post.slug,
        coverImage: post.coverImage,
        tags: post.tags,
      })} />
      <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      <article className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div>
            <Link
              href="/blog"
              className="inline-flex items-center text-white/60 hover:text-[#00f0ff] mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Wróć do bloga
            </Link>

            <div className="flex items-center space-x-4 text-white/50 text-sm mb-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>
                  {new Date(post.date).toLocaleDateString('pl-PL', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className="gradient-text">{post.title}</span>
            </h1>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm glass"
                  >
                    <Tag className="w-3 h-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div
              className="prose prose-invert prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            />
          </div>
        </div>
      </article>
    </main>
    </>
  );
}
