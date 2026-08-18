import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { buildLinks, buildMetaTags, pageMeta } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/content";
import { Reveal } from "@/components/ui/Reveal";

export const Route = createFileRoute("/services/")({
  head: () => {
    const meta = pageMeta("/services");
    return {
      meta: buildMetaTags(meta),
      links: buildLinks("/services"),
    };
  },
  component: Services,
});

function Services() {
  const displayedServices = services.filter((s) => s.type === "residential");

  return (
    <div className="min-h-screen bg-[#f4f3f0]">
      <Header />
      
      {/* Editorial Header Banner */}
      <section className={`relative ${PAGE_TOP} pb-16 pt-8 px-6 md:px-12 bg-[#efeeea] border-b border-navy/5`}>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-[1px] w-8 bg-orange" />
                  <span className="text-[10px] tracking-[0.3em] uppercase text-orange font-semibold">
                    The Capabilities
                  </span>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-navy leading-[0.95] tracking-tighter uppercase font-display">
                  Architectural <br />
                  Surface Solutions.
                </h1>
              </div>
              <div className="max-w-sm lg:pb-3">
                <p className="text-gray-500 text-base md:text-lg font-light leading-relaxed">
                  An exhaustive catalog of our premium wrapping capabilities. Designed for longevity, engineered for luxury.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 px-6 md:px-12 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
          <AnimatePresence mode="popLayout">
            {displayedServices.map((service, idx) => (
              <Reveal key={service.slug} delay={idx * 0.1}>
                <Link
                  to="/services/$serviceSlug"
                  params={{ serviceSlug: service.slug }}
                  className="group block relative h-[450px] md:h-[600px] overflow-hidden rounded-sm"
                >
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  </div>
                  
                  <div className="relative z-10 h-full flex flex-col p-6 pb-10 md:p-10">
                    <div className="bg-white/10 backdrop-blur-md px-3 py-1 md:px-4 md:py-1.5 rounded-sm shadow-sm w-max mb-auto border border-white/20">
                      <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                        {service.eyebrow}
                      </span>
                    </div>
                    
                    <div className="translate-y-2 md:translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]">
                      <h3 className="text-3xl md:text-4xl font-semibold text-white mb-2 md:mb-4 font-display uppercase tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-4 md:mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-3 md:line-clamp-none">
                        {service.summary}
                      </p>
                      <div className="flex items-center gap-3 text-orange text-[10px] font-bold uppercase tracking-widest pb-2 md:pb-0">
                        Explore Service
                        <ArrowRight className="w-4 h-4 transition-transform duration-500 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
