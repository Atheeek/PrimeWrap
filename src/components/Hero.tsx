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
   TRANSFORMATION STAGES
========================================================= */

const stages = [
  {
    id: "01",
    title: "Wrap",
    description:
      "Apply premium architectural film to existing surfaces with precision.",
  },
  {
    id: "02",
    title: "Refine",
    description:
      "Elevate the material, colour and finish to create a more considered interior.",
  },
  {
    id: "03",
    title: "Transform",
    description:
      "Give the space an entirely new character — without replacing what already works.",
  },
];

/* =========================================================
   HERO
========================================================= */

const Hero = () => {
  const [currentScene, setCurrentScene] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  /* ---------------------------------------------------------
     Background scene rotation
  --------------------------------------------------------- */

  useEffect(() => {
    if (heroScenes.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % heroScenes.length);
    }, 7000);

    return () => clearInterval(timer);
  }, []);

  /* ---------------------------------------------------------
     Transformation stage rotation
  --------------------------------------------------------- */

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const stage = stages[activeStage];

  return (
    <section className="relative flex h-[100dvh] min-h-[680px] w-full overflow-hidden bg-[#111]">

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
            transition={{
              duration: 1.8,
              ease: "easeInOut",
            }}
            className="absolute inset-0 h-full w-full"
          >

            <picture>

              <source
                media="(max-width: 767px)"
                srcSet={heroScenes[currentScene].mobile}
              />

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
          CINEMATIC OVERLAY
          Deliberately lighter than the previous version.
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0 z-10">

        <div className="pointer-events-none absolute inset-0 z-10">

          <div
            className="
      absolute inset-0
      bg-gradient-to-t
      from-black/35
      via-transparent
      to-transparent
    "
          />

          <div
            className="
      absolute inset-y-0 left-0
      w-[45%]
      bg-gradient-to-r
      from-black/10
      to-transparent
    "
          />

        </div>

      </div>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div className="relative z-20 flex w-full flex-col justify-end">

        <div
          className="
            mx-auto
            w-full
            max-w-[1600px]
            px-6
            pb-10
            sm:px-8
            sm:pb-12
            md:px-12
            md:pb-14
            lg:px-16
            xl:px-20
          "
        >

          {/* =================================================
              TOP MICRO LABEL
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8 flex items-center gap-4"
          >

            <span className="h-px w-8 bg-[#C19A5B] md:w-12" />

            <span
              className="
                text-[9px]
                font-semibold
                uppercase
                tracking-[0.3em]
                text-white/70
                md:text-[10px]
              "
            >
              Architectural Surface Transformation
            </span>

          </motion.div>

          {/* =================================================
              TRANSFORMATION EXPERIENCE
          ================================================= */}

          <div className="max-w-[1050px]">

            {/* -----------------------------------------------
                Stage counter
            ----------------------------------------------- */}

            <div className="mb-4 flex items-center gap-4">

              <span className="font-sans text-[10px] font-medium tracking-[0.2em] text-white/45">
                {stage.id}
              </span>

              <span className="h-px w-8 bg-white/20" />

              <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">
                Transformation Sequence
              </span>

            </div>

            {/* -----------------------------------------------
                Active stage word
            ----------------------------------------------- */}

            <div className="relative overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={stage.title}
                  initial={{
                    opacity: 0,
                    y: 45,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    y: -35,
                    filter: "blur(8px)",
                  }}
                  transition={{
                    duration: 0.65,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >

                  <h1
                    className="
    font-display
    text-[clamp(3.8rem,8vw,7rem)]
    font-medium
    uppercase
    leading-[0.84]
    tracking-[-0.05em]
    text-white
  "
                  >
                    {stage.title}
                    <span className="text-[#C19A5B]">.</span>
                  </h1>

                </motion.div>

              </AnimatePresence>

            </div>

            {/* =================================================
                STAGE NAVIGATION
            ================================================= */}

            <div
              className="
                mt-7
                flex
                flex-wrap
                items-center
                gap-x-7
                gap-y-3
                md:mt-8
                md:gap-x-10
              "
            >

              {stages.map((item, index) => {

                const isActive = index === activeStage;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveStage(index)}
                    className="group relative flex items-center gap-2.5"
                  >

                    <span
                      className={`
                        font-sans
                        text-[10px]
                        font-semibold
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${isActive
                          ? "text-[#C19A5B]"
                          : "text-white/35 group-hover:text-white/70"
                        }
                      `}
                    >
                      {item.id}
                    </span>

                    <span
                      className={`
                        text-xs
                        font-semibold
                        uppercase
                        tracking-[0.18em]
                        transition-colors
                        duration-300
                        ${isActive
                          ? "text-white"
                          : "text-white/35 group-hover:text-white/70"
                        }
                      `}
                    >
                      {item.title}
                    </span>

                    {/* Active indicator */}
                    <span
                      className={`
                        absolute
                        -bottom-2
                        left-0
                        h-px
                        bg-[#C19A5B]
                        transition-all
                        duration-500
                        ${isActive
                          ? "w-full"
                          : "w-0"
                        }
                      `}
                    />

                  </button>
                );

              })}

            </div>

            {/* =================================================
                DESCRIPTION + CTA
            ================================================= */}

            <div className="mt-8 flex flex-col gap-8 md:mt-10 md:flex-row md:items-end md:gap-12">

              {/* Description */}

              <div className="max-w-[390px]">

                <AnimatePresence mode="wait">

                  <motion.p
                    key={stage.description}
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    exit={{
                      opacity: 0,
                      y: -10,
                    }}
                    transition={{
                      duration: 0.4,
                    }}
                    className="
                      text-[13px]
                      font-light
                      leading-[1.7]
                      text-white/65
                      md:text-sm
                    "
                  >
                    {stage.description}
                  </motion.p>

                </AnimatePresence>

              </div>

              {/* CTA */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="shrink-0"
              >

                <Link
                  to="/services"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-4
                    border
                    border-white/25
                    bg-white/[0.08]
                    px-5
                    py-3
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#C19A5B]/60
                    hover:bg-white/[0.14]
                  "
                >

                  <span
                    className="
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.18em]
                    "
                  >
                    Explore Our Work
                  </span>

                  <span
                    className="
                      flex
                      h-8
                      w-8
                      items-center
                      justify-center
                      rounded-full
                      bg-[#C19A5B]
                      transition-all
                      duration-300
                      group-hover:bg-[#d6a863]
                      group-hover:translate-x-0.5
                    "
                  >
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>

                </Link>

              </motion.div>

            </div>

          </div>

          {/* =================================================
              BOTTOM PROGRESS SYSTEM
          ================================================= */}

          <div className="mt-10 flex w-full items-center gap-5 md:mt-12">

            <div className="flex flex-1 gap-2">

              {stages.map((item, index) => {

                const isActive = index === activeStage;

                return (
                  <div
                    key={item.id}
                    className="
                      relative
                      h-[2px]
                      flex-1
                      overflow-hidden
                      bg-white/20
                    "
                  >

                    {isActive && (
                      <motion.div
                        key={`progress-${activeStage}`}
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 3.5,
                          ease: "linear",
                        }}
                        className="absolute inset-y-0 left-0 bg-[#C19A5B]"
                      />
                    )}

                    {index < activeStage && (
                      <div className="absolute inset-0 bg-[#C19A5B]/50" />
                    )}

                  </div>
                );

              })}

            </div>

            <span className="hidden font-sans text-[9px] uppercase tracking-[0.25em] text-white/30 sm:block">
              PrimeWrap
            </span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;