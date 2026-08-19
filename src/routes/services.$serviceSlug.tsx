import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Header } from "@/components/site/Header";
import { getService } from "@/lib/content";
import { buildLinks, buildMetaTags } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";
import FAQ from "@/components/FAQ";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/services/$serviceSlug")({
  loader: ({ params }) => {
    const service = getService(params.serviceSlug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service Not Found | PrimeWrap" }],
      };
    }
    const path = `/services/${loaderData.slug}`;
    return {
      meta: buildMetaTags({
        title: `${loaderData.title} in Dubai & UAE | PrimeWrap`,
        description: loaderData.summary,
        path,
        keywords: `${loaderData.title} Dubai, ${loaderData.title} UAE, PrimeWrap`,
      }),
      links: buildLinks(path),
    };
  },
  component: ServiceDetail,
});

function ServiceDetail() {
  const service = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        
        {/* Light & Clean Hero */}
        <section className={`${PAGE_TOP} bg-[#efeeea] px-6 pb-20 md:px-12 md:pb-32 border-b border-navy/5`}>
          <div className="mx-auto max-w-[1400px]">
            <Reveal>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-navy/60 transition-colors hover:text-orange mb-12"
              >
                <ArrowLeft className="h-3.5 w-3.5" /> All services
              </Link>
            </Reveal>

            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-20 items-center">
              <Reveal delay={0.1}>
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
                    <span className="w-8 h-[1px] bg-orange" />
                    {service.eyebrow}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold leading-[0.95] tracking-tighter uppercase text-navy mb-8 font-display">
                    {service.title}
                  </h1>
                  <p className="text-lg md:text-xl font-light leading-relaxed text-gray-500 max-w-xl mb-12">
                    {service.description}
                  </p>
                  
                  <div>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 rounded-full text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 px-8 py-4 bg-navy text-white shadow-[0_10px_30px_rgba(20,35,70,0.15)] hover:bg-[#C19A5B] hover:shadow-[0_10px_40px_rgba(193,154,91,0.2)]"
                    >
                      <span>Request Proposal</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative">
                  <div className="aspect-[4/5] md:aspect-square w-full rounded-sm overflow-hidden shadow-2xl relative z-10">
                    <img
                      src={service.image}
                      alt={`${service.title} by PrimeWrap`}
                      className="w-full h-full object-cover filter contrast-[1.1]"
                    />
                  </div>
                  {/* Decorative background element */}
                  <div className="absolute -bottom-8 -right-8 w-2/3 h-2/3 bg-navy/5 rounded-sm z-0 hidden md:block" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Details Grid */}
        <section className="py-24 md:py-32 px-6">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left: Benefits */}
            <Reveal>
              <div className="flex flex-col">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-8 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-orange" />
                  Why choose it
                </div>
                <ul className="flex flex-col gap-6">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex gap-5 items-start group">
                      <div className="w-6 h-6 rounded-full border border-navy/10 flex items-center justify-center shrink-0 group-hover:border-orange transition-colors mt-0.5">
                        <Check className="h-3 w-3 text-orange" />
                      </div>
                      <span className="text-base text-gray-500 leading-relaxed font-light">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: Applications */}
            <Reveal delay={0.1}>
              <div className="flex flex-col">
                <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-8 flex items-center gap-4">
                  <span className="w-6 h-[1px] bg-orange" />
                  Applications
                </div>
                <ul className="flex flex-col border-t border-navy/10">
                  {service.idealFor.map((item, idx) => (
                    <li
                      key={idx}
                      className="border-b border-navy/10 py-5 text-xl font-semibold text-navy uppercase font-display tracking-tight flex items-center justify-between group cursor-default hover:text-orange transition-colors"
                    >
                      {item}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange" />
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

          </div>
        </section>
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
