import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react";

// ── Named shots ────────────────────────────────────────────────
import bathroomImg from "@/assets/bathroom.jpeg";
import doorsImg from "@/assets/Doors.jpeg";
import doors2Img from "@/assets/Doors2.jpeg";
import furnitureImg from "@/assets/furniture.jpeg";
import kitchenImg from "@/assets/Kitchen.jpeg";
import wardrobeImg from "@/assets/Wardrobe.jpeg";

import gallery1 from "@/assets/gallery01.jpeg";
import gallery2 from "@/assets/gallery02.jpeg";
import gallery3 from "@/assets/gallery03.jpeg";
import gallery4 from "@/assets/gallery04.jpeg";
import gallery5 from "@/assets/gallery05.jpeg";
import gallery6 from "@/assets/gallery06.jpeg";
import gallery7 from "@/assets/gallery07.jpeg";
import gallery8 from "@/assets/gallery08.jpeg";
import gallery9 from "@/assets/gallery09.jpeg";
import gallery10 from "@/assets/gallery10.jpeg";
import gallery11 from "@/assets/gallery11.jpeg";
import gallery12 from "@/assets/gallery12.jpeg";
import gallery13 from "@/assets/gallery13.jpeg";
import gallery14 from "@/assets/gallery14.jpeg";
import gallery15 from "@/assets/gallery15.jpeg";
import gallery16 from "@/assets/gallery16.jpeg";
import gallery17 from "@/assets/gallery17.jpeg";
import gallery18 from "@/assets/gallery18.jpeg";
import gallery19 from "@/assets/gallery19.jpeg";
import gallery20 from "@/assets/gallery20.jpeg";
import gallery21 from "@/assets/gallery21.jpeg";
import gallery22 from "@/assets/gallery22.jpeg";

import vid1 from "@/assets/video01.mp4";
import vid2 from "@/assets/video02.mp4";
import vid3 from "@/assets/video03.mp4";
import vid4 from "@/assets/video04.mp4";

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

// ─────────────────────────────────────────────────────────────
// Data & Configuration
// ─────────────────────────────────────────────────────────────
const raleway = { fontFamily: "'Raleway', sans-serif" };

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  category: "Kitchens" | "Bathrooms" | "Doors" | "Furniture" | "Wardrobes" | "Recent Work";
  span: "sm" | "md" | "lg" | "tall" | "wide";
};

// Deterministic bento pattern
const PATTERN: MediaItem["span"][] = ["lg", "sm", "md", "wide", "sm", "tall", "sm", "md"];

function sizeFor(i: number): MediaItem["span"] {
  return PATTERN[i % PATTERN.length];
}

const namedShots: Omit<MediaItem, "span" | "id">[] = [
  { type: "image", src: kitchenImg, category: "Kitchens" },
  { type: "image", src: bathroomImg, category: "Bathrooms" },
  { type: "image", src: doorsImg, category: "Doors" },
  { type: "image", src: doors2Img, category: "Doors" },
  { type: "image", src: furnitureImg, category: "Furniture" },
  { type: "image", src: wardrobeImg, category: "Wardrobes" },
];

const recentWork: string[] = [
  gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7, gallery8, gallery9, gallery10, gallery11, gallery12, gallery13,
  gallery14, gallery15, gallery16, gallery17, gallery18, gallery19, gallery20, gallery21, gallery22,
];

const videos: string[] = [vid1, vid2, vid3, vid4];

const ITEMS: MediaItem[] = [
  ...namedShots.map((s, i) => ({ ...s, id: `named-${i}`, span: sizeFor(i) })),
  ...recentWork.map((src, i) => ({
    id: `wa-${i}`,
    type: "image" as const,
    src,
    category: "Recent Work" as const,
    span: sizeFor(i + namedShots.length),
  })),
  ...videos.map((src, i) => ({
    id: `vid-${i}`,
    type: "video" as const,
    src,
    category: "Recent Work" as const,
    span: sizeFor(i + namedShots.length + recentWork.length),
  })),
];

const FILTERS = ["All", "Kitchens", "Bathrooms", "Doors", "Furniture", "Wardrobes", "Videos"] as const;
type Filter = (typeof FILTERS)[number];

// Refactored spans to support a dense 2-column layout on mobile
const SPAN_CLASSES: Record<MediaItem["span"], string> = {
  sm: "col-span-1 row-span-1",
  md: "col-span-1 row-span-2",
  lg: "col-span-2 row-span-2 md:col-span-2 md:row-span-2",
  tall: "col-span-1 row-span-2 md:row-span-3",
  wide: "col-span-2 row-span-1",
};

// ─────────────────────────────────────────────────────────────
// Component
// ─────────────────────────────────────────────────────────────
function Gallery() {
  const [filter, setFilter] = useState<Filter>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = useMemo(() => {
    if (filter === "All") return ITEMS;
    if (filter === "Videos") return ITEMS.filter((i) => i.type === "video");
    return ITEMS.filter((i) => i.category === filter && i.type !== "video");
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
    <div className="min-h-screen bg-[#efeeea]">
      <Header />

      {/* ===================== ARCHITECTURAL HERO ===================== */}
      <section className="pt-32 md:pt-40 pb-12 px-4 md:px-8 lg:px-16 xl:px-24 border-b border-[#142346]/10">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] w-10 bg-orange-500" />
              <span className="text-xs tracking-[0.25em] uppercase text-orange-500 font-bold">
                Portfolio
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-[#142346] tracking-tight leading-[1.1] md:leading-[0.9]" style={raleway}>
              The Gallery.
            </h1>
          </div>
          <div className="max-w-xs pb-2">
            <p className="text-gray-500 text-sm leading-relaxed">
              An index of {ITEMS.length} recent architectural transformations across Dubai, strictly categorized.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== MAGNETIC FILTERS (Non-Sticky) ===================== */}
      <div className="relative z-20 bg-[#efeeea] border-b border-[#142346]/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 lg:px-16 xl:px-24 py-4 overflow-x-auto no-scrollbar flex items-center gap-2">
          {FILTERS.map((f) => {
            const isActive = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-colors duration-300 z-10 ${
                  isActive ? "text-white" : "text-[#142346] hover:text-orange-500"
                }`}
                style={raleway}
              >
                {isActive && (
                  <motion.div
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-[#142346] rounded-full -z-10 shadow-md"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {f}
              </button>
            );
          })}
        </div>
      </div>

      {/* ===================== COLLAGE / BENTO GRID ===================== */}
      <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-24 max-w-[1400px] mx-auto">
        <motion.div 
          layout
          // Changed to grid-cols-2 on mobile for collage effect, reduced auto-row height
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[120px] md:auto-rows-[160px] gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                key={item.id}
                className={SPAN_CLASSES[item.span]}
              >
                <GalleryTile item={item} onOpen={() => openLightbox(item.id)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <span className="text-[#142346]/20 font-bold text-4xl mb-4" style={raleway}>∅</span>
            <p className="text-[#142346]/50 text-sm font-bold uppercase tracking-widest">No records found</p>
          </div>
        )}
      </section>

      <Footer />
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
      className="group relative w-full h-full overflow-hidden bg-gray-200 border border-black/5 focus:outline-none"
    >
      {item.type === "video" ? (
        <video
          src={item.src}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-75"
          muted
          loop
          playsInline
          autoPlay
          preload="metadata"
        />
      ) : (
        <img
          src={item.src}
          alt={item.category}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 filter group-hover:brightness-75"
        />
      )}

      {/* Structural Inner Border overlay */}
      <div className="absolute inset-2 md:inset-4 border border-white/0 group-hover:border-white/20 transition-colors duration-500 z-10 pointer-events-none" />

      {/* Center Action Icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
        <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white transform scale-50 group-hover:scale-100 transition-transform duration-500">
          {item.type === "video" ? <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" fill="currentColor" /> : <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white" />}
        </div>
      </div>

      {/* Bottom Category Tag */}
      <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 translate-y-4 group-hover:translate-y-0">
        <span className="px-2 py-1 md:px-3 md:py-1.5 bg-[#142346] text-white text-[8px] md:text-[10px] font-bold uppercase tracking-widest shadow-lg" style={raleway}>
          {item.category}
        </span>
      </div>
    </button>
  );
}

// ─────────────────────────────────────────────────────────────
// Cinematic Lightbox (Framer Motion)
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
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#142346]/95 backdrop-blur-2xl"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-8 flex items-center justify-between z-50">
        <span className="text-white/60 text-[10px] md:text-xs font-bold uppercase tracking-widest" style={raleway}>
          {index + 1} / {items.length} <span className="mx-2 md:mx-4 h-px w-4 md:w-8 bg-white/20 inline-block align-middle" /> {active.category}
        </span>
        <button
          onClick={onClose}
          className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white/5 hover:bg-orange-500 text-white flex items-center justify-center transition-colors group"
          aria-label="Close"
        >
          <X className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => { e.stopPropagation(); onPrev(); }}
        className="absolute left-2 md:left-12 h-10 w-10 md:h-14 md:w-14 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-[#142346] text-white flex items-center justify-center transition-colors z-50"
        aria-label="Previous"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 ml-[-2px]" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); onNext(); }}
        className="absolute right-2 md:right-12 h-10 w-10 md:h-14 md:w-14 rounded-full bg-white/5 border border-white/10 hover:bg-white hover:text-[#142346] text-white flex items-center justify-center transition-colors z-50"
        aria-label="Next"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 mr-[-2px]" />
      </button>

      {/* Media Container */}
      <div className="w-full h-full max-w-6xl max-h-[85vh] px-14 md:px-20 flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            transition={{ duration: 0.4 }}
            className="w-full h-full flex items-center justify-center"
          >
            {active.type === "video" ? (
              <video 
                src={active.src} 
                className="max-h-full max-w-full rounded-sm shadow-2xl" 
                controls 
                autoPlay 
              />
            ) : (
              <img 
                src={active.src} 
                alt={active.category} 
                className="max-h-full max-w-full object-contain rounded-sm shadow-2xl" 
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}