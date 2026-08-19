import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

import scene2Desktop from "@/assets/hero/scene2-desktop.png";
import scene2Mobile from "@/assets/hero/scene2-mobile.jpg";

/* =========================================================
   HERO SCENE
========================================================= */

const heroScenes = [
  {
    id: 2,
    desktop: scene2Desktop,
    mobile: scene2Mobile,
    alt: "Luxury surface refinishing - Wardrobes",
  },
];

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const [currentScene, setCurrentScene] = useState(0);

  useEffect(() => {
    if (heroScenes.length <= 1) return;
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % heroScenes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[100dvh] min-h-[680px] w-full overflow-hidden bg-navy">

      {/* =====================================================
          BACKGROUND IMAGE
      ===================================================== */}

      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={heroScenes[currentScene].mobile} />
              <img
                src={heroScenes[currentScene].desktop}
                alt={heroScenes[currentScene].alt}
                className="h-full w-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* =====================================================
          OVERLAY — dark centre-weighted for text legibility
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10 bg-black/15" />

      {/* =====================================================
          MAIN CONTENT — centred
      ===================================================== */}

      <div className="relative z-20 flex w-full h-full flex-col items-center justify-end px-5 pb-12 md:pb-16 lg:pb-20 text-center">

        {/* Eyebrow label */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60"
        >
          <span className="h-px w-8 bg-orange" />
          Premium Surface Refinishing
          <span className="h-px w-8 bg-orange" />
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl drop-shadow-2xl"
        >
          {/* Line 1 */}
          <span
            className="block text-[clamp(2.8rem,6vw,4.2rem)] font-medium leading-[1.05] tracking-tight text-white [text-shadow:0_4px_16px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Transform Your Space.
          </span>

          {/* Line 2 — StephenGillion font in gold/orange theme */}
          <span
            className="mt-0 block text-[clamp(4.8rem,9vw,8rem)] font-normal leading-[1] tracking-normal text-orange [text-shadow:0_4px_24px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'StephenGillion', sans-serif", fontWeight: 400 }}
          >
            Without Replacing It.
          </span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 max-w-2xl text-[15px] font-normal leading-relaxed text-white sm:text-base md:text-lg [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Discover the limitless possibilities of architectural vinyl film. Elevate your surfaces with a premium finish at a fraction of the cost of traditional renovations.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6"
        >
          {/* Primary button */}
          <Link
            to="/services"
            className="group relative inline-flex items-center justify-center gap-6 bg-orange px-8 py-5 overflow-hidden text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:shadow-2xl hover:shadow-orange/20"
          >
            <span className="absolute inset-0 w-full h-full bg-navy origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 flex items-center gap-6">
              <span>Explore Services</span>
              <div className="flex items-center gap-2">
                <div className="w-6 h-[1px] bg-white/30 group-hover:w-10 group-hover:bg-white transition-all duration-500 ease-out" />
                <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
              </div>
            </span>
          </Link>

          {/* Secondary button */}
          <Link
            to="/gallery"
            className="group relative inline-flex items-center justify-center gap-6 border border-white/40 px-8 py-5 overflow-hidden text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:border-white"
          >
            <span className="absolute inset-0 w-full h-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            <span className="relative z-10 flex items-center gap-6 transition-colors duration-500 group-hover:text-navy">
              <span>View Our Work</span>
            </span>
          </Link>
        </motion.div>

      </div>

    </section>
  );
};

export default Hero;