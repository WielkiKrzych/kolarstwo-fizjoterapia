import { getAllPosts } from "@/lib/blog";
import { Navigation } from "@/components/ui/Navigation";
import { BookOpen, Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0f]">
      <Navigation />

      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-20 pointer-events-none" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#00f0ff]/20 rounded-full blur-[100px] animate-float pointer-events-none" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#b829dd]/20 rounded-full blur-[120px] animate-float pointer-events-none" style={{animationDelay: '2s'}} />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-8">
              <BookOpen className="w-4 h-4 text-[#00f0ff]" />
              <span className="text-sm text-white/80">Blog</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-white">Mój{" "}</span>
              <span className="gradient-text glow-text">Blog</span>
            </h1>
            
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Wpisy o treningu, fizjoterapii i życiu kolarza. 
              Dzielę się wiedzą i doświadczeniem.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-white mb-4">Jeszcze nie ma wpisów</h2>
              <p className="text-white/60">
                Blog jest w przygotowaniu. Wkrótce pojawią się pierwsze artykuły!
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="glass-card rounded-2xl overflow-hidden group hover:scale-105 transition-transform"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="p-8">
                      <div className="flex items-center space-x-2 text-white/50 text-sm mb-4">
                        <Calendar className="w-4 h-4" />
                        <span>
                          {new Date(post.date).toLocaleDateString('pl-PL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </span>
                      </div>

                      <h2 className="text-xl font-bold text-white mb-3 group-hover:text-[#00f0ff] transition-colors">
                        {post.title}
                      </h2>

                      <p className="text-white/60 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center px-2 py-1 rounded text-xs glass"
                            >
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center text-[#00f0ff] font-medium">
                        <span>Czytaj więcej</span>
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
