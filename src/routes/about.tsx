import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Sparkles, Users, Target, Heart } from "lucide-react";

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

function About() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[50vh] min-h-[380px] bg-navy overflow-hidden">
        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80" alt="" className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="text-white pt-16">
            <p className="script text-4xl text-orange">Our Story</p>
            <h1 className="text-5xl font-display font-semibold">About Yalla Wrap It</h1>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80" alt="Team at work" className="rounded-2xl shadow-xl aspect-[4/3] object-cover" />
        <div>
          <h2 className="section-title mb-4">Craft meets care</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Yalla Wrap It began with a simple idea: transformation shouldn't mean disruption. We help homes and businesses across the UAE reimagine their spaces with premium vinyl wraps — quickly, cleanly and beautifully.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From residential kitchens to hospitality interiors, our team brings meticulous attention to every detail — because your space deserves it.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-white/40">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">
          {[
            { icon: Sparkles, k: "500+", l: "Projects completed" },
            { icon: Users, k: "10+", l: "Skilled installers" },
            { icon: Target, k: "98%", l: "Client satisfaction" },
            { icon: Heart, k: "6yr", l: "Years of craft" },
          ].map((s) => (
            <div key={s.l} className="card-soft p-6 text-center">
              <s.icon className="w-8 h-8 text-orange mx-auto mb-3" />
              <p className="text-3xl font-display font-semibold text-navy">{s.k}</p>
              <p className="text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
