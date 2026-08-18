import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Header } from "@/components/site/Header";
import { getBlogPost } from "@/lib/content";
import { buildLinks, buildMetaTags } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";

export const Route = createFileRoute("/blog/$blogSlug")({
  loader: ({ params }) => {
    const post = getBlogPost(params.blogSlug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Article Not Found | PrimeWrap" }],
      };
    }
    const path = `/blog/${loaderData.slug}`;
    return {
      meta: buildMetaTags({
        title: `${loaderData.title} | PrimeWrap Journal`,
        description: loaderData.excerpt,
        path,
      }),
      links: buildLinks(path),
    };
  },
  component: BlogPostDetail,
});

function BlogPostDetail() {
  const post = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className={`${PAGE_TOP} bg-paper px-4 pb-14 md:px-8 md:pb-20`}>
          <div className="mx-auto max-w-[900px]">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-navy/65 transition-colors hover:text-orange"
            >
              <ArrowLeft className="h-4 w-4" />
              All articles
            </Link>
            
            <div className="mt-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-orange mb-4">
                {post.category} · {post.readingTime}
              </p>
              <h1 className="text-3xl font-bold leading-[1.2] text-navy md:text-5xl mb-6">
                {post.title}
              </h1>
              <p className="text-lg text-navy/60 leading-relaxed mb-8 max-w-3xl">
                {post.excerpt}
              </p>
            </div>
            
            <img
              src={post.image}
              alt={post.title}
              className="aspect-video w-full max-w-4xl rounded-md object-cover shadow-sm mb-12"
            />
            
            <div className="space-y-12">
              {post.sections.map((section, idx) => (
                <div key={idx} className="prose prose-lg max-w-none prose-headings:font-bold prose-headings:text-navy prose-p:text-navy/75">
                  <h2 className="text-2xl font-bold text-navy mb-4">{section.heading}</h2>
                  <p className="text-base leading-relaxed text-navy/70">{section.body}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 pt-10 border-t border-navy/10 flex justify-center">
               <a
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-md bg-orange px-8 py-4 text-base font-bold text-white transition-colors hover:bg-[#b47936]"
                >
                  Discuss your project <ArrowRight className="h-5 w-5" />
                </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
