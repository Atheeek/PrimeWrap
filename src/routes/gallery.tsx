import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Yalla Wrap It" },
      { name: "description", content: "Recent vinyl wrapping projects across Dubai — kitchens, bathrooms, doors and more." },
      { property: "og:title", content: "Gallery — Yalla Wrap It" },
      { property: "og:description", content: "See our recent transformations." },
    ],
  }),
  component: Gallery,
});

const shots = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=80",
];

function Gallery() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative h-[40vh] min-h-[300px] bg-navy overflow-hidden">
        <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
          <div className="text-white pt-16">
            <p className="script text-4xl text-orange">Portfolio</p>
            <h1 className="text-5xl font-display font-semibold">Our Work</h1>
          </div>
        </div>
      </section>
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 [column-fill:_balance]">
          {shots.map((s, i) => (
            <img key={i} src={s} alt={`Project ${i + 1}`} className="mb-4 w-full rounded-xl shadow-md break-inside-avoid" />
          ))}
        </div>
      </section>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
