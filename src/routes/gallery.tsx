import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/site/Header";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { X, ChevronLeft, ChevronRight, Play, ArrowRight } from "lucide-react";

// ── Named shots ────────────────────────────────────────────────
import bathroomImg from "@/assets/bathroom.jpeg";
import doorsImg from "@/assets/Doors.jpeg";
import doors2Img from "@/assets/Doors2.jpeg";
import kitchenImg from "@/assets/Kitchen.jpeg";
import wardrobeImg from "@/assets/Wardrobe.jpeg";
import furnitureImg from "@/assets/Wardrobe.jpeg";

import gallery1 from "@/assets/gallery01.jpeg";
import gallery2 from "@/assets/gallery02.jpeg";
import gallery3 from "@/assets/gallery03.jpeg";
import gallery4 from "@/assets/gallery04.jpeg";
import gallery5 from "@/assets/gallery05.jpeg";
import gallery7 from "@/assets/gallery07.jpeg";
import gallery8 from "@/assets/gallery08.jpeg";
import gallery9 from "@/assets/gallery09.jpeg";
import gallery10 from "@/assets/gallery10.jpeg";
import gallery12 from "@/assets/gallery12.jpeg";
import gallery13 from "@/assets/gallery13.jpeg";
import gallery15 from "@/assets/gallery15.jpeg";
import gallery16 from "@/assets/gallery16.jpeg";
import gallery18 from "@/assets/gallery18.jpeg";
import gallery20 from "@/assets/gallery20.jpeg";

import bannerBathroom from "@/assets/banner-bathroom.jpeg";
import bannerHall from "@/assets/banner-hall.jpeg";
import bannerKitchen from "@/assets/banner-kitchen.jpeg";
import newBath1 from "@/assets/gallery-bathroom-1.jpeg";
import newKitchen1 from "@/assets/gallery-kitchen-1.jpeg";
import newKitchen2 from "@/assets/gallery-kitchen-2.jpeg";
import newKitchen3 from "@/assets/gallery-kitchen-3.jpeg";
import newKitchen4 from "@/assets/gallery-kitchen-4.jpeg";
import newKitchen5 from "@/assets/gallery-kitchen-5.jpeg";

import doorLightImg from "@/assets/door_light.jpeg";
import doorDarkImg from "@/assets/door_dark.jpeg";

import wardrobeBeforeImg from "@/assets/wardrobe_before.jpeg";
import wardrobeAfterImg from "@/assets/wardrobe_after.jpeg";

import vid1 from "@/assets/video01.mp4";
import vid2 from "@/assets/video02.mp4";
import vid3 from "@/assets/video03.mp4";
import vid4 from "@/assets/video04.mp4";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — PrimeWrap" },
      { name: "description", content: "Recent vinyl wrapping projects across Dubai — kitchens, bathrooms, doors and more." },
      { property: "og:title", content: "Gallery — PrimeWrap" },
      { property: "og:description", content: "See our recent transformations." },
    ],
  }),
  component: Gallery,
});

// ─────────────────────────────────────────────────────────────
// Data & Configuration
// ─────────────────────────────────────────────────────────────
type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  categories: ("Kitchens" | "Bathrooms" | "Doors" | "Furniture" | "Transformations")[];
  span: "anchor" | "wide" | "portrait" | "square";
};

// Editorial layout sequence
const PATTERN: MediaItem["span"][] = [
  "anchor",
  "wide", "portrait",
  "portrait", "wide",
  "square", "square",
  "portrait", "portrait", "portrait"
];

function sizeFor(i: number): MediaItem["span"] {
  return PATTERN[i % PATTERN.length];
}

const namedShots: Omit<MediaItem, "span" | "id">[] = [
  { type: "image", src: doorsImg, categories: ["Furniture", "Doors"] },
  { type: "image", src: doors2Img, categories: ["Furniture", "Doors"] },
  { type: "image", src: kitchenImg, categories: ["Kitchens"] },
  { type: "image", src: wardrobeImg, categories: ["Furniture"] },
  { type: "image", src: bathroomImg, categories: ["Bathrooms"] },
  { type: "image", src: furnitureImg, categories: ["Kitchens"] },
];

const recentWork: Omit<MediaItem, "span" | "id">[] = [
  { type: "image", src: gallery1, categories: ["Kitchens"] },
  { type: "image", src: gallery2, categories: ["Kitchens"] },
  { type: "image", src: gallery3, categories: ["Furniture"] },
  { type: "image", src: gallery4, categories: ["Bathrooms"] },
  { type: "image", src: gallery5, categories: ["Bathrooms"] },
  { type: "image", src: gallery7, categories: ["Kitchens"] },
  { type: "image", src: gallery8, categories: ["Kitchens"] },
  { type: "image", src: gallery9, categories: ["Bathrooms"] },
  { type: "image", src: gallery10, categories: ["Furniture"] },
  { type: "image", src: gallery12, categories: ["Furniture"] },
  { type: "image", src: gallery13, categories: ["Bathrooms"] },
  { type: "image", src: gallery15, categories: ["Bathrooms"] },
  { type: "image", src: gallery16, categories: ["Furniture"] },
  { type: "image", src: gallery18, categories: ["Kitchens"] },
  { type: "image", src: gallery20, categories: ["Kitchens"] },
  { type: "image", src: bannerBathroom, categories: ["Bathrooms"] },
  { type: "image", src: bannerHall, categories: ["Kitchens"] },
  { type: "image", src: bannerKitchen, categories: ["Kitchens"] },
  { type: "image", src: newBath1, categories: ["Bathrooms"] },
  { type: "image", src: newKitchen1, categories: ["Kitchens"] },
  { type: "image", src: newKitchen2, categories: ["Kitchens"] },
  { type: "image", src: newKitchen3, categories: ["Kitchens"] },
  { type: "image", src: newKitchen4, categories: ["Kitchens"] },
  { type: "image", src: newKitchen5, categories: ["Kitchens"] },
  { type: "image", src: wardrobeBeforeImg, categories: ["Furniture", "Transformations"] },
  { type: "image", src: wardrobeAfterImg, categories: ["Furniture", "Transformations"] },
  { type: "image", src: doorLightImg, categories: ["Doors", "Transformations"] },
  { type: "image", src: doorDarkImg, categories: ["Doors", "Transformations"] },
];

const videos: Omit<MediaItem, "span" | "id">[] = [
  { type: "video", src: vid1, categories: ["Transformations"] },
  { type: "video", src: vid2, categories: ["Transformations"] },
  { type: "video", src: vid3, categories: ["Transformations"] },
  { type: "video", src: vid4, categories: ["Transformations"] },
];

const ITEMS: MediaItem[] = [
  ...namedShots.map((s, i) => ({ ...s, id: `named-${i}`, span: sizeFor(i) })),
  ...recentWork.map((s, i) => ({
    ...s,
    id: `wa-${i}`,
    span: sizeFor(i + namedShots.length),
  })),
  ...videos.map((s, i) => ({
    ...s,
    id: `vid-${i}`,
    span: sizeFor(i + namedShots.length + recentWork.length),
  })),
];

const FILTERS = ["All", "Kitchens", "Furniture", "Doors", "Bathrooms", "Transformations"] as const;
type Filter = (typeof FILTERS)[number];

const SPAN_CLASSES: Record<MediaItem["span"], string> = {
  anchor: "col-span-12 md:col-span-10 md:col-start-2",
  wide: "col-span-12 md:col-span-7",
  portrait: "col-span-12 md:col-span-5",
  square: "col-span-12 md:col-span-6",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return ITEMS;
    return ITEMS.filter((i) => i.categories.includes(filter as any));
  }, [filter]);

  const openLightbox = (id: string) => {
    const idx = filtered.findIndex((i) => i.id === id);
    setLightboxIndex(idx);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const step = (dir: 1 | -1) => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return (prev + dir + filtered.length) % filtered.length;
    });
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, filtered.length]);

  return (
    <div className="min-h-screen bg-[#efeeea] font-display selection:bg-orange selection:text-white">
      <Header />

      {/* ===================== ARCHITECTURAL HERO ===================== */}
      <section className="pt-32 md:pt-40 pb-12 px-6 md:px-12 border-b border-navy/10 relative">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-orange" />
              Our Work
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-semibold text-navy tracking-tighter leading-[0.9] uppercase mb-8">
              Surfaces, <br />
              <span className="text-gray-400">Reimagined.</span>
            </h1>

            <p className="text-base md:text-lg font-light text-gray-500 max-w-lg leading-relaxed">
              An index of recent architectural transformations across Dubai. Select a category below to explore the possibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===================== EDITORIAL FILTERS ===================== */}
      <div className="sticky top-0 z-30 bg-[#efeeea]/90 backdrop-blur-md border-b border-navy/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-6 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-8 md:gap-12 min-w-max">
            {FILTERS.map((f) => {
              const isActive = filter === f;
              return (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="group relative flex flex-col items-start gap-2"
                >
                  <span className={`text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${
                    isActive ? "text-navy" : "text-gray-400 hover:text-navy"
                  }`}>
                    {f}
                  </span>
                  <div className={`h-[1px] bg-navy transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ===================== MASONRY GRID ===================== */}
      <section className="py-12 md:py-24 px-6 md:px-12 max-w-[1600px] mx-auto">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-12 space-y-6 md:space-y-12"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                key={item.id}
                className="break-inside-avoid"
              >
                <GalleryTile item={item} onOpen={() => openLightbox(item.id)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-40 text-center">
            <span className="text-gray-300 font-light text-6xl mb-6">∅</span>
            <p className="text-gray-400 text-xs font-semibold uppercase tracking-[0.2em]">No records found</p>
          </div>
        )}
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-navy/10 bg-white flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-5xl font-semibold uppercase tracking-tighter text-navy leading-[0.95] mb-12">
          Your Space <br />
          Could Be Next.
        </h2>
        <Link 
          to="/contact" 
          className="group relative inline-flex items-center justify-center gap-4 bg-navy text-white px-10 py-6 overflow-hidden transition-colors hover:bg-navy/90"
        >
          <span className="text-base font-semibold uppercase tracking-widest relative z-10">
            Get a Free Quote
          </span>
          <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
          <div className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
        </Link>
      </section>

      <FloatingWhatsApp />

      {/* ===================== CINEMATIC LIGHTBOX ===================== */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            items={filtered}
            index={lightboxIndex}
            onClose={closeLightbox}
            onNext={() => step(1)}
            onPrev={() => step(-1)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Premium Gallery Tile
// ─────────────────────────────────────────────────────────────
function GalleryTile({ item, onOpen }: { item: MediaItem; onOpen: () => void }) {
  return (
    <button
      onClick={onOpen}
      className="group relative w-full overflow-hidden bg-gray-100 focus:outline-none flex"
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105 filter group-hover:contrast-110"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.categories.join(", ")}
          loading="lazy"
          className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105 filter group-hover:contrast-110"
        />
      )}

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/20 transition-colors duration-500 z-10 pointer-events-none" />

      {/* Play Icon for Videos */}
      {item.type === "video" && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
            <Play className="w-6 h-6 ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Typographic Metadata Reveal */}
      <div className="absolute top-6 left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 -translate-y-4 group-hover:translate-y-0">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white mix-blend-difference drop-shadow-md">
          {item.categories[0]}
        </span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Cinematic Lightbox
// ─────────────────────────────────────────────────────────────
function Lightbox({
  items,
  index,
  onClose,
  onNext,
  onPrev,
}: {
  items: MediaItem[];
  index: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}) {
  const active = items[index];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0a1122]/95 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex items-center justify-between z-50">
        <span className="text-white/40 text-[10px] font-semibold uppercase tracking-[0.2em]">
          {index + 1} / {items.length} <span className="mx-4 h-[1px] w-8 bg-white/20 inline-block align-middle" /> {active.categories.join(", ")}
        </span>
        <button
          onClick={onClose}
          className="group flex items-center gap-4 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60 hover:text-white transition-colors"
          aria-label="Close"
        >
          Close
          <X className="w-5 h-5 group-hover:rotate-90 transition-transform duration-500" />
        </button>
      </div>

      {/* Navigation Areas */}
      <div 
        className="absolute left-0 top-0 bottom-0 w-1/4 cursor-w-resize z-40 group flex flex-col justify-center"
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
      >
        <div className="ml-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronLeft className="w-5 h-5 -ml-0.5" />
        </div>
      </div>

      <div 
        className="absolute right-0 top-0 bottom-0 w-1/4 cursor-e-resize z-40 group flex flex-col justify-center items-end"
        onClick={(e) => { e.stopPropagation(); onNext(); }}
      >
        <div className="mr-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <ChevronRight className="w-5 h-5 -mr-0.5" />
        </div>
      </div>

      {/* Media Container */}
      <div className="w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(8px)" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full flex items-center justify-center"
          >
            {active.type === "video" ? (
              <video 
                src={active.src} 
                className="max-h-full max-w-full object-contain shadow-2xl" 
                controls 
                autoPlay 
              />
            ) : (
              <img 
                src={active.src} 
                alt={active.categories.join(", ")} 
                className="max-h-full max-w-full object-contain shadow-2xl" 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}