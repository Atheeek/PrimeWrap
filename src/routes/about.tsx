import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import ScrollExpandMedia from "@/components/blocks/scroll-expansion-hero";
import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, type ReactNode } from "react";
import { ArrowRight, Plus } from "lucide-react";

import doorImg from "@/assets/Doors2.jpeg";
import gallery10 from "@/assets/gallery10.jpeg";
import gallery01 from "@/assets/gallery01.jpeg";
import gallery02 from "@/assets/gallery02.jpeg";
import gallery03 from "@/assets/gallery03.jpeg";
import gallery04 from "@/assets/gallery04.jpeg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — PrimeWrap" },
      { name: "description", content: "Transformation is a craft. Discover how PrimeWrap reimagines spaces without the disruption." },
    ],
  }),
  component: About,
});

const easeOut = [0.16, 1, 0.3, 1] as const;

import { Reveal } from "@/components/ui/Reveal";

// ----------------------------------------------------------------------
// 2. THE IDEA (PHILOSOPHY)
// ----------------------------------------------------------------------
function PhilosophySection() {
  return (
    <section className="py-16 md:py-24 px-6 max-w-7xl mx-auto border-b border-navy/10">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left: Label and Typography */}
        <div className="lg:col-span-7 flex flex-col pt-0">
          <Reveal>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6">
              The Idea
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-[1.05] tracking-tight uppercase font-display max-w-2xl mb-8">
              A space doesn't always need to be rebuilt.
            </h2>
          </Reveal>
          
          <Reveal delay={0.1}>
            <p className="text-navy text-lg md:text-xl font-medium leading-relaxed mb-4 font-display max-w-lg">
              PrimeWrap began with a simple idea: your space shouldn't need to be torn apart to feel new.
            </p>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-md">
              We help homes and businesses across the UAE reimagine their interiors and exteriors with premium vinyl wraps — quickly, cleanly, and beautifully. From residential kitchens to hospitality interiors, our team brings meticulous attention to every seam, corner, and edge. Because your space deserves it.
            </p>
          </Reveal>
        </div>
        
        {/* Right: Image */}
        <div className="lg:col-span-5 flex flex-col mt-8 lg:mt-0">
          <Reveal delay={0.2} className="w-full relative z-10">
            <div className="relative aspect-square overflow-hidden shadow-[0_10px_30px_rgba(20,35,70,0.1)] group rounded-sm">
              <img 
                src={gallery01} 
                alt="PrimeWrap Philosophy" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute top-6 right-6 text-[10px] font-semibold uppercase tracking-[0.4em] text-white mix-blend-difference opacity-70 group-hover:opacity-100 transition-opacity">
                PrimeWrap Philosophy
              </div>
            </div>
          </Reveal>
        </div>
        
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 3. THE TRANSFORMATION (WHY WE WRAP)
// ----------------------------------------------------------------------
function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"traditional" | "wrapping">("wrapping");

  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto border-b border-navy/10">
      <Reveal>
        <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-8">
          The Approach
        </div>
      </Reveal>
      
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-32">
        <Reveal delay={0.1}>
          <div className="flex flex-col gap-6">
            {/* Interactive Toggle */}
            <button 
              onMouseEnter={() => setActiveTab("traditional")}
              onClick={() => setActiveTab("traditional")}
              className={`text-left text-4xl md:text-5xl font-semibold uppercase font-display transition-colors duration-500 ${activeTab === "traditional" ? "text-navy" : "text-gray-300"}`}
            >
              Traditional <br/>Renovation
            </button>
            <button 
              onMouseEnter={() => setActiveTab("wrapping")}
              onClick={() => setActiveTab("wrapping")}
              className={`text-left text-4xl md:text-5xl font-semibold uppercase font-display transition-colors duration-500 ${activeTab === "wrapping" ? "text-navy" : "text-gray-300"}`}
            >
              Interior <br/>Wrapping
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="relative h-[300px]">
            <AnimatePresence mode="wait">
              {activeTab === "traditional" ? (
                <motion.div 
                  key="traditional"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <p className="text-xl font-light text-gray-500 leading-relaxed max-w-md">
                    Conventional methods require destruction before construction.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-semibold tracking-widest uppercase text-navy">
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-red-400" /> Demolition</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-red-400" /> Mess & Debris</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-red-400" /> Weeks of Disruption</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-red-400" /> Higher Costs</li>
                  </ul>
                </motion.div>
              ) : (
                <motion.div 
                  key="wrapping"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6"
                >
                  <p className="text-xl font-light text-navy leading-relaxed max-w-md">
                    We utilize what exists, applying architectural films to completely change the character of the room.
                  </p>
                  <ul className="flex flex-col gap-4 text-sm font-semibold tracking-widest uppercase text-navy">
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-orange" /> Keep Existing Structure</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-orange" /> Zero Demolition</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-orange" /> Done in Days</li>
                    <li className="flex gap-4 items-center"><span className="w-8 h-px bg-orange" /> Immediate Reveal</li>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 4. THE MATERIAL SHOWROOM
// ----------------------------------------------------------------------
const materials = [
  { name: "Wood Grain", img: gallery02, desc: "Tactile, warm, and indistinguishable from natural timber." },
  { name: "Matte Color", img: gallery03, desc: "Flawless, light-absorbing finishes for modern cabinetry." },
  { name: "Stone & Marble", img: gallery04, desc: "The elegance of masonry without the immense weight." },
  { name: "Metallic", img: gallery10, desc: "Sleek, industrial accents for statement pieces." },
];

function MaterialShowroom() {
  const [activeMat, setActiveMat] = useState(0);

  return (
    <section className="relative h-[100svh] min-h-[700px] flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Images Crossfade */}
      <AnimatePresence mode="wait">
        <motion.img
          key={activeMat}
          src={materials[activeMat].img}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent mix-blend-multiply" />

      <div className="relative z-10 max-w-7xl w-full px-6 grid md:grid-cols-2 gap-12 items-end h-full pb-24 md:pb-32">
        <div className="flex flex-col">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/50 mb-8">
            The Material
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-white uppercase font-display max-w-md leading-none mb-6">
            The surface changes everything.
          </h2>
          <p className="text-white/70 font-light text-lg max-w-sm leading-relaxed">
            {materials[activeMat].desc}
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-2 md:gap-4">
          {materials.map((m, idx) => (
            <button
              key={m.name}
              onMouseEnter={() => setActiveMat(idx)}
              className={`text-2xl md:text-4xl lg:text-5xl font-semibold uppercase font-display tracking-tight transition-all duration-300 text-left md:text-right w-full ${activeMat === idx ? "text-white translate-x-0" : "text-white/30 hover:text-white/60 md:translate-x-4"}`}
            >
              {m.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 5. THE CRAFT (DETAIL HOTSPOTS)
// ----------------------------------------------------------------------
function DetailHotspots() {
  const [activeDetail, setActiveDetail] = useState<number | null>(null);

  const details = [
    {
      id: 0,
      x: "30%", y: "40%",
      title: "Precision Finish",
      copy: "Every panel is measured, cut, and dressed by hand — no shortcuts, no visible seams."
    },
    {
      id: 1,
      x: "70%", y: "20%",
      title: "Care On Site",
      copy: "We treat your space like our own — dust sheets down, edges taped, nothing left behind."
    },
    {
      id: 2,
      x: "50%", y: "80%",
      title: "Built To Last",
      copy: "Automotive-grade vinyl rated for the Gulf climate, backed by a workmanship guarantee."
    }
  ];

  return (
    <section className="py-24 md:py-40 px-6 bg-[#f4f3f0]">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        <Reveal className="text-center mb-16 md:mb-24 max-w-2xl">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6">
            The Craft
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-navy uppercase font-display tracking-tight">
            Built around the details.
          </h2>
        </Reveal>

        <Reveal className="w-full relative">
          {/* We separate the image (which needs overflow-hidden) from the tooltips (which need to break out) */}
          <div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-gray-200 shadow-2xl group cursor-crosshair">
            
            <div className="absolute inset-0 overflow-hidden">
              <motion.img 
                src={doorImg} 
                alt="Installation detail"
                animate={{ scale: activeDetail !== null ? 1.05 : 1 }}
                transition={{ duration: 0.8, ease: easeOut }}
                className="w-full h-full object-cover filter contrast-125"
              />
              <div className="absolute inset-0 bg-navy/10 transition-opacity duration-500 group-hover:bg-navy/30" />
            </div>

            {/* Hotspots */}
            {details.map((d) => (
              <div 
                key={d.id}
                className="absolute z-20"
                style={{ left: d.x, top: d.y }}
                onMouseEnter={() => setActiveDetail(d.id)}
                onMouseLeave={() => setActiveDetail(null)}
                onClick={() => setActiveDetail(activeDetail === d.id ? null : d.id)}
              >
                {/* The Dot */}
                <div className="relative -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30" />
                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors duration-300 ${activeDetail === d.id ? "bg-orange" : "bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)]"}`} />
                </div>
                
                {/* The Card */}
                <AnimatePresence>
                  {activeDetail === d.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="fixed bottom-6 left-4 right-4 md:absolute md:bottom-auto md:top-8 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-[280px] bg-white/95 backdrop-blur-md p-5 shadow-[0_10px_40px_rgba(0,0,0,0.2)] border border-white/40 rounded-sm pointer-events-none z-[100]"
                    >
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-navy mb-2">{d.title}</h4>
                      <p className="text-sm font-light text-gray-500 leading-relaxed">{d.copy}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}

// ----------------------------------------------------------------------
// 6. FINAL CTA
// ----------------------------------------------------------------------
function FinalCTA() {
  return (
    <section className="py-32 md:py-48 px-6 bg-white border-t border-navy/5 text-center">
      <Reveal className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-semibold text-navy uppercase font-display leading-[0.9] tracking-tighter mb-12">
          The next <br/> <span className="text-gray-300">transformation.</span>
        </h2>
        <Link
          to="/contact"
          className="group inline-flex items-center gap-3 rounded-full text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 hover:-translate-y-1 px-8 py-4 bg-navy text-white shadow-[0_10px_30px_rgba(20,35,70,0.2)] hover:bg-[#C19A5B] hover:shadow-[0_10px_40px_rgba(193,154,91,0.3)]"
        >
          <span>Get a Free Quote</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </Reveal>
    </section>
  );
}

// ----------------------------------------------------------------------
// MAIN PAGE ASSEMBLE
// ----------------------------------------------------------------------
function About() {
  return (
    <div className="min-h-screen bg-[#f4f3f0]">
      <Header />

      <ScrollExpandMedia
        mediaSrc={doorImg}
        bgImageSrc={gallery10}
        initialTitle="We don't replace the space."
        finalTitle="We transform it."
        scrollToExpand="Scroll to explore"
      >
        <PhilosophySection />
        <ComparisonSection />
        <MaterialShowroom />
        <DetailHotspots />
        <FinalCTA />
      </ScrollExpandMedia>

      <FloatingWhatsApp />
    </div>
  );
}