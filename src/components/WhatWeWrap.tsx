import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

/* ---------------------------------------------------------
   Data Structure (Source of Truth)
--------------------------------------------------------- */
const services = {
  residential: [
    { id: "r1", name: "Kitchen" },
    { id: "r2", name: "Furniture" },
    { id: "r3", name: "Bathrooms" },
    { id: "r4", name: "Doors" },
    { id: "r5", name: "Wall Panels" },
    { id: "r6", name: "Window Frame" },
    { id: "r7", name: "Appliances Wrap" },
    { id: "r8", name: "Protection Film" },
  ],
  commercial: [
    { id: "c1", name: "Offices" },
    { id: "c2", name: "Showroom" },
    { id: "c3", name: "Retail" },
    { id: "c4", name: "Restaurants & Cafés" },
    { id: "c5", name: "Hotels" },
    { id: "c6", name: "Salons & Spas" },
    { id: "c7", name: "Reception & Common Areas" },
    { id: "c8", name: "Stair Wrap" },
    { id: "c9", name: "Yacht Wrap" },
  ],
};

const WhatWeWrap = () => {
  const [activeCategory, setActiveCategory] = useState<"residential" | "commercial">("residential");

  return (
    <section 
      className="py-20 md:py-32 bg-[#f8f7f5] relative overflow-hidden font-display"
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row gap-16 lg:gap-32 relative">
        
        {/* ======================= LEFT: EDITORIAL HEADER & SELECTOR ======================= */}
        <div className="lg:w-[35%] lg:sticky lg:top-40 h-fit flex flex-col z-20">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-orange" />
              Capabilities
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.9] tracking-tighter uppercase text-navy mb-8">
              One Surface. <br />
              <span className="text-gray-400">Many</span> <br />
              Possibilities.
            </h2>
            
            <p className="text-sm md:text-base font-light text-gray-500 leading-relaxed max-w-sm">
              From residential interiors to commercial spaces, PrimeWrap works across a wide range of surfaces and environments.
            </p>
          </motion.div>
        </div>

        {/* ======================= RIGHT: INTERACTIVE SERVICE INDEX ======================= */}
        <div className="lg:w-[65%] relative z-10 flex flex-col">
          
          {/* Interactive Category Selector (Moved to Top Right) */}
          <motion.div 
            className="flex flex-row gap-8 md:gap-12 lg:gap-16 border-b border-navy/10 pb-6 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {(["residential", "commercial"] as const).map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="relative group text-left outline-none flex items-center"
                >
                  <span 
                    className={`text-xs md:text-sm font-semibold uppercase tracking-[0.2em] transition-colors duration-500 ${
                      isActive ? "text-navy" : "text-gray-400 group-hover:text-navy/60"
                    }`}
                  >
                    {cat}
                  </span>
                  
                  {/* Active Indicator Line */}
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute -bottom-6 left-0 w-full h-[2px] bg-orange"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col"
            >
              {services[activeCategory].map((service, idx) => (
                <div
                  key={service.id}
                  className="group relative border-b border-navy/10 py-3 md:py-4 lg:py-5 flex items-center justify-between overflow-hidden"
                >
                  {/* Subtle Background Hover Fill (Restored for Desktop) */}
                  <div className="absolute inset-0 bg-white/50 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0 hidden lg:block" />

                  <div className="flex items-start gap-4 md:gap-6 lg:gap-8 w-full relative z-10">
                    {/* Numbering */}
                    <span className="text-[10px] md:text-xs font-semibold text-orange/60 tracking-widest mt-1.5 md:mt-2 shrink-0 w-6">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    
                    {/* Service Name */}
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-navy uppercase tracking-tighter leading-none">
                        {service.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default WhatWeWrap;