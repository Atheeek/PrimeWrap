import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { ArrowRight } from "lucide-react";
import bathroom from "@/assets/bathroom.jpeg";
import door from "@/assets/Doors2.jpeg";
import kitchen from "@/assets/Kitchen.jpeg";
import wardrobe from "@/assets/Wardrobe.jpeg";
export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Yalla Wrap It" },
      { name: "description", content: "Explore our full menu of professional architectural vinyl wrapping and flooring solutions in Dubai." },
      { property: "og:title", content: "Vinyl Wrapping Services — Yalla Wrap It" },
      { property: "og:description", content: "Kitchen, door, bathroom, furniture, floor, and SPC flooring wrapping services for homes and businesses." },
    ],
  }),
  component: Services,
});

/* ---------------------------------------------------------
   Configuration & Data
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

type Service = {
  id: string;
  title: string;
  category: string;
  desc: string;
  href: string;
  image: string;
};

const servicesList: Service[] = [
  {
    id: "01",
    title: "Kitchens",
    category: "Culinary Spaces",
    desc: "Enhance your kitchen's appeal with our professional and seamless kitchen wrapping solutions, tailored to elevate your space effortlessly.",
    href: "/services/full-kitchen-wrap-services",
    image: kitchen,
  },
  {
    id: "02",
    title: "Doors",
    category: "Surface Detail",
    desc: "Unlock a new dimension of style and protection for your doors with our bespoke interior door vinyl wrapping solutions, tailored to reflect your unique taste.",
    href: "/services/interior-door-wrap",
    image: door,
  },
  {
    id: "03",
    title: "Bathrooms",
    category: "Moisture Safe",
    desc: "Discover the ultimate bathroom makeover through our expert bathroom wrapping services, adding elegance and longevity to your space.",
    href: "/services/bathroom-wrapping",
    image: bathroom,
  },
  {
    id: "04",
    title: "Furniture",
    category: "Asset Renewal",
    desc: "Redesign your space with our exquisite furniture wrapping service, adding a touch of sophistication and protection to your treasured pieces.",
    href: "/services/furniture-wrapping",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "05",
    title: "Flooring",
    category: "Ground Level",
    desc: "Transform your floors with our innovative floor wrapping services, elevating your space with creativity and durability.",
    href: "/services/floor-wrapping",
    image: "https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: "06",
    title: "Windows",
    category: "Thermal & Style",
    desc: "Reimagine your space with our specialized windows wrapping service, combining style and functionality seamlessly.",
    href: "/services/windows-wrapping",
    image: "https://images.unsplash.com/photo-1630368177606-471ad5e501c4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "07",
    title: "SPC Flooring",
    category: "Heavy Duty",
    desc: "SPC flooring is one of the most popular house remodeling solutions currently — highly durable, waterproof, and premium.",
    href: "/services/spc-vinyl-flooring",
    image: "https://images.unsplash.com/photo-1575204015311-0fe377370780?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "08",
    title: "Wardrobes",
    category: "Personalization",
    desc: "Experience a chic transformation with our expert vinyl wardrobe wrapping service, elevating style and personalization effortlessly.",
    href: "/services/wardrobe-vinyl-wrapping",
    image: wardrobe,
  },
];

/* ---------------------------------------------------------
   Kinetic 3D Text Roll Engine
--------------------------------------------------------- */
const TextRoll = ({ text, isActive }: { text: string; isActive: boolean }) => {
  return (
    <span className="relative flex overflow-visible" style={{ perspective: "800px" }}>
      {text.split("").map((char, i) => (
        <span key={i} className="relative inline-block whitespace-pre">
          <motion.span
            className="inline-block origin-bottom text-[#142346]"
            initial={false}
            animate={{ 
              rotateX: isActive ? 90 : 0, 
              filter: isActive ? "blur(2px)" : "blur(0px)",
              opacity: isActive ? 0 : 1,
              y: isActive ? "-20%" : "0%"
            }}
            transition={{ duration: 0.2, delay: i * 0.015, ease: "easeOut" }}
          >
            {char}
          </motion.span>
          
          <motion.span
            className="absolute left-0 top-0 inline-block origin-top text-orange-500 italic"
            initial={false}
            animate={{ 
              rotateX: isActive ? 0 : -90, 
              filter: isActive ? "blur(0px)" : "blur(2px)",
              opacity: isActive ? 1 : 0,
              y: isActive ? "0%" : "20%"
            }}
            transition={{ duration: 0.2, delay: i * 0.015, ease: "easeOut" }}
          >
            {char}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

/* ---------------------------------------------------------
   Main Services Component
--------------------------------------------------------- */
function Services() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="min-h-screen bg-[#efeeea] ">
      <Header />
      
      {/* Editorial Header Banner */}
      <section className="relative pt-24 pb-8 px-4 md:px-8 lg:px-16 xl:px-24 bg-[#efeeea]">
  <div className="max-w-[1400px] mx-auto relative z-10">
    
    {/* Tightened layout gaps and bottom padding */}
    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#142346]/10 pb-10">
      
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 mb-6">
          <span className="h-[2px] w-10 bg-orange-500" />
          <span className="text-xs tracking-[0.25em] uppercase text-orange-500 font-bold">
            Complete Catalog
          </span>
        </div>
        
        {/* Scaled down typography: lg:text-[4rem] instead of 5rem */}
        <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-[#142346] tracking-tight leading-[1.1]" style={raleway}>
          Architectural <br className="hidden md:block" />
          Surface Solutions.
        </h1>
      </div>

      <div className="max-w-sm lg:pb-2">
        <p className="text-gray-500 text-sm leading-relaxed">
          An exhaustive catalog of our premium wrapping capabilities. Designed for longevity, engineered for luxury. Select an expertise below.
        </p>
      </div>

    </div>
    
  </div>
</section>

      {/* Kinesthetic Typography Accordion Section */}
      <section className="py-24 px-4 md:px-8 lg:px-16 xl:px-24 bg-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto relative z-10">
          
          <div className="flex flex-col border-t border-[#142346]/10">
            {servicesList.map((service, idx) => {
              const isActive = activeIndex === idx;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className="group border-b border-[#142346]/10 py-6 md:py-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  
                  {/* LEFT SIDE: 3D Text Roll + Vertical Image Shutter */}
                  <div className="flex items-center gap-6 md:gap-10 w-full lg:w-auto">
                    <h3
                      className="text-4xl md:text-6xl lg:text-[5.5rem] leading-none font-bold uppercase tracking-tight"
                      style={raleway}
                    >
                      <TextRoll text={service.title} isActive={isActive} />
                    </h3>

                    {/* Desktop Vertical Shutter Reveal */}
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isActive ? 160 : 0, 
                        opacity: isActive ? 1 : 0,
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="hidden lg:block overflow-hidden w-[320px] rounded-3xl shrink-0 shadow-[0_20px_40px_rgba(20,35,70,0.15)] ml-6"
                    >
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="w-full h-[160px] object-cover" 
                      />
                    </motion.div>
                  </div>

                  {/* MOBILE ONLY: Vertical Expansion */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isActive ? "auto" : 0, 
                      opacity: isActive ? 1 : 0 
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="block lg:hidden overflow-hidden w-full"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-52 object-cover rounded-2xl mb-5 shadow-inner" 
                    />
                    <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                      {service.desc}
                    </p>
                    {/* <a 
                      href={service.href} 
                      className="text-orange-500 font-bold flex items-center gap-2 text-sm uppercase tracking-widest active:scale-95 transition-transform w-max"
                    >
                      Explore Service <ArrowRight className="w-4 h-4" />
                    </a> */}
                  </motion.div>

                  {/* RIGHT SIDE (Desktop Only): Category & Description */}
                  <div className="hidden lg:flex flex-col items-end text-right w-[350px] shrink-0">
                    <span className="text-xs tracking-[0.2em] uppercase font-bold text-gray-400 mb-2 transition-colors duration-300 group-hover:text-[#142346]">
                      {service.category}
                    </span>
                    
                    <motion.div
                      initial={false}
                      animate={{ 
                        height: isActive ? "auto" : 0, 
                        opacity: isActive ? 1 : 0 
                      }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-500 text-sm leading-relaxed mb-5">
                        {service.desc}
                      </p>
                      {/* <a 
                        href={service.href} 
                        className="text-orange-500 font-bold flex items-center justify-end gap-2 text-xs uppercase tracking-widest hover:text-orange-600 transition-colors group/link"
                      >
                        Explore Service 
                        <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                      </a> */}
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Services;