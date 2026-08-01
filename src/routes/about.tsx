import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Sparkles, Users, Target, Heart } from "lucide-react";
import doorImg from "@/assets/Doors2.jpeg";
import gallery10 from "@/assets/gallery10.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Yalla Wrap It" },
      { name: "description", content: "Meet the studio behind Dubai's most elegant vinyl wraps. Craft, care and quality since day one." },
      { property: "og:title", content: "About Yalla Wrap It" },
      { property: "og:description", content: "Craft, care and quality since day one." },
    ],
  }),
  component: About,
});

/* ---------------------------------------------------------
   Motion primitives
--------------------------------------------------------- */
const easeOut = [0.16, 1, 0.3, 1] as const;

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function CountUp({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState("0");

  const match = value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let frame: number;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * target).toString());
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------------------------------------------------
   Content
--------------------------------------------------------- */
const values = [
  {
    icon: Sparkles,
    title: "Precision finish",
    copy: "Every panel is measured, cut and dressed by hand — no shortcuts, no visible seams.",
  },
  {
    icon: Heart,
    title: "Care on site",
    copy: "We treat your home or business like our own — dust sheets down, edges taped, nothing left behind.",
  },
  {
    icon: Target,
    title: "Built to last",
    copy: "Automotive-grade vinyl rated for the Gulf climate, backed by a workmanship guarantee.",
  },
];

const stats = [
  { icon: Sparkles, k: "500+", l: "Projects completed" },
  { icon: Users, k: "10+", l: "Skilled installers" },
  { icon: Target, k: "98%", l: "Client satisfaction" },
  { icon: Heart, k: "6yr", l: "Years of craft" },
];

function About() {
  return (
    <div className="min-h-screen bg-[#efeeea]">
      <Header />

      {/* Scroll-expand hero */}
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={doorImg}
        bgImageSrc={gallery10}
        title="WrapIt Studio"
        scrollToExpand="Scroll to explore"
        textBlend
      />

      {/* ===================== STORY ===================== */}
      <section className="pt-24 pb-24 md:pt-28 md:pb-28 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="rounded-[1.75rem] overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80"
                  alt="Team fitting a vinyl wrap panel"
                  className="w-full aspect-[4/3] object-cover grayscale"
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, x: -10 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
                className="absolute -bottom-8 -right-4 md:-right-10 bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/60 px-6 py-5 flex items-center gap-4 max-w-[240px]"
              >
                <div className="w-11 h-11 rounded-full bg-orange/10 flex items-center justify-center shrink-0">
                  <Heart className="w-5 h-5 text-orange" />
                </div>
                <div>
                  <p className="text-2xl font-display font-semibold text-navy leading-none">
                    <CountUp value="6yr" />
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">Of craft, one wrap at a time</p>
                </div>
              </motion.div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-orange" />
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange">About Us</p>
            </div>
            <h2 className="section-title mb-5 text-navy">Transformation, without the disruption</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Yalla Wrap It began with a simple idea: your space shouldn't need to be torn apart to feel new.
              We help homes and businesses across the UAE reimagine their interiors and exteriors with
              premium vinyl wraps — quickly, cleanly and beautifully.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              From residential kitchens to hospitality interiors, our team brings meticulous attention to
              every seam, corner and edge — because your space deserves it.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===================== VALUES ===================== */}
      <section className="px-6 max-w-6xl mx-auto pb-24 md:pb-28">
        <Reveal className="mb-12 max-w-xl">
          <h2 className="section-title text-navy mb-3">What that looks like in practice</h2>
          <p className="text-muted-foreground leading-relaxed">
            Three commitments that shape every job we take on, big or small.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.1}>
              <div className="group h-full rounded-2xl bg-white/70 border border-navy/5 p-7 transition-all duration-300 hover:bg-white hover:shadow-lg hover:-translate-y-1">
                <div className="w-11 h-11 rounded-full bg-navy/5 flex items-center justify-center mb-5 group-hover:bg-orange/10 transition-colors duration-300">
                  <v.icon className="w-5 h-5 text-navy group-hover:text-orange transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-navy mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===================== STATS STRIP ===================== */}
      <section className="py-16 md:py-20 px-6 bg-navy">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal
                key={s.l}
                delay={i * 0.08}
                className={`relative text-center px-4 py-6 md:py-0 ${
                  i !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <s.icon className="w-5 h-5 text-orange mx-auto mb-3" />
                <p className="text-4xl font-display font-semibold text-white">
                  <CountUp value={s.k} />
                </p>
                <p className="text-sm text-white/60 mt-1">{s.l}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}