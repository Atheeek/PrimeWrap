import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

// import scene1Desktop from "@/assets/hero/scene1-desktop.jpg";
// import scene1Mobile from "@/assets/hero/scene1-mobile.jpg";
import scene2Desktop from "@/assets/hero/scene2-desktop.png";
import scene2Mobile from "@/assets/hero/scene2-mobile.jpg";
// import scene3Desktop from "@/assets/hero/scene3-desktop.jpg";
// import scene3Mobile from "@/assets/hero/scene3-mobile.jpg";

/* ---------------------------------------------------------
   Data Structure
--------------------------------------------------------- */
const heroScenes = [
  // {
  //   id: 1,
  //   desktop: scene1Desktop,
  //   mobile: scene1Mobile,
  //   alt: "Premium architectural wrap transformation - Kitchen",
  // },
  {
    id: 2,
    desktop: scene2Desktop,
    mobile: scene2Mobile,
    alt: "Luxury surface refinishing - Wardrobes",
  },
  // {
  //   id: 3,
  //   desktop: scene3Desktop,
  //   mobile: scene3Mobile,
  //   alt: "Premium architectural wrap transformation - Modern Kitchen",
  // },
];

const Hero = () => {
  const [currentScene, setCurrentScene] = useState(0);

  // Cinematic rotation (every 6.5 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % heroScenes.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-[100dvh] min-h-[650px] overflow-hidden flex flex-col bg-[#111]">

      {/* ===================== Background Image Sequence ===================== */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <picture>
              <source media="(max-width: 767px)" srcSet={heroScenes[currentScene].mobile} />
              <img
                src={heroScenes[currentScene].desktop}
                alt={heroScenes[currentScene].alt}
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===================== Cinematic Overlay ===================== */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Extremely subtle, bottom-left focused gradient to ensure readability without muddying the photography */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/50 via-black/10 to-transparent md:from-black/40 md:via-black/5 md:to-transparent" />
      </div>

      {/* ===================== Main Copy & CTA ===================== */}
      <div className="relative z-20 mt-auto pb-16 sm:pb-20 md:pb-24 w-full">

        <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="w-full md:w-[50%] lg:w-[45%] xl:w-[40%] min-w-[320px] flex flex-col items-start">

            {/* Editorial Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-6 md:mb-8"
            >


            </motion.div>

            {/* Italic Accent Headline */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic font-semibold text-white/90 leading-none tracking-tight text-3xl md:text-5xl lg:text-6xl mb-1 md:mb-2"
            >
              Wrap.
            </motion.p>

            {/* Main Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold uppercase text-white leading-[0.85] tracking-[-0.02em] text-[3.5rem] md:text-[5rem] lg:text-[6rem]"
            >
              Refine.<br />
              Transform.
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
              className="mt-6 md:mt-8 text-white/75 text-[13px] md:text-[15px] leading-relaxed font-light max-w-[400px]"
            >
              Discover the limitless possibilities of architectural vinyl film.
              Elevate your surfaces with a premium finish at a fraction of the
              cost of traditional renovations.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
              className="mt-10 md:mt-12"
            >
              <Link
                to="/services"
                className="group flex items-center gap-3 w-fit bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full pl-5 pr-1.5 py-1.5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="font-sans font-medium text-[11px] md:text-xs tracking-[0.1em] uppercase whitespace-nowrap pt-px">
                  Explore Our Work
                </span>
                <span className="w-8 h-8 rounded-full bg-[#C19A5B] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#d6a863]">
                  <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-0.5 transition-transform" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
