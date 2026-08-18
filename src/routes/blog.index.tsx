import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Header } from "@/components/site/Header";
import { blogPosts } from "@/lib/content";
import { buildLinks, buildMetaTags, pageMeta } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";

export const Route = createFileRoute("/blog/")({
  head: () => {
    const meta = pageMeta("/blog");
    return { meta: buildMetaTags(meta), links: buildLinks("/blog") };
  },
  component: Blog,
});

function Blog() {
  const featured = blogPosts[0];
  const articles = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section className={`${PAGE_TOP} bg-paper px-4 pb-14 md:px-8 md:pb-20`}>
          <div className="mx-auto max-w-[1400px]">
            <div className="mb-6 flex items-center gap-4">
              <span className="h-0.5 w-10 bg-orange" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-orange">
                PrimeWrap journal
              </span>
            </div>
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_0.5fr]">
              <h1 className="max-w-3xl text-5xl font-bold leading-[0.94] text-navy md:text-7xl">
                Practical ideas for more considered interiors.
              </h1>
              <p className="max-w-md text-sm leading-relaxed text-navy/60">
                Guides, inspiration and project-planning advice for refreshing a space without
                losing sight of how it needs to work.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 py-14 md:px-8 md:py-20">
          <div className="mx-auto max-w-[1400px]">
            <Link
              to="/blog/$blogSlug"
              params={{ blogSlug: featured.slug }}
              className="group grid overflow-hidden rounded-md bg-navy text-white lg:grid-cols-2"
            >
              <div className="min-h-72 overflow-hidden">
                <img
                  src={featured.image}
                  alt="Kitchen wrapping project"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col justify-center p-8 md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-orange">
                  Featured · {featured.category}
                </p>
                <h2 className="mt-4 max-w-xl text-3xl font-bold leading-tight md:text-5xl">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-lg text-sm leading-relaxed text-white/65">
                  {featured.excerpt}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-orange">
                  Read the guide{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
            <div className="mt-14 grid gap-x-5 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              {articles.map((post) => (
                <article key={post.slug} className="group">
                  <Link to="/blog/$blogSlug" params={{ blogSlug: post.slug }}>
                    <div className="aspect-[4/3] overflow-hidden rounded-md bg-paper">
                      <img
                        src={post.image}
                        alt=""
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.2em] text-orange">
                      {post.category} · {formatDate(post.publishedAt)}
                    </p>
                    <h2 className="mt-3 text-2xl font-bold leading-tight text-navy group-hover:text-orange">
                      {post.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-navy/60">{post.excerpt}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-navy">
                      Read article{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { day: "numeric", month: "short", year: "numeric" }).format(
    new Date(`${date}T12:00:00Z`),
  );
}
