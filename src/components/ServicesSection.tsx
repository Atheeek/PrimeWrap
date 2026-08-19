"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import bathroom from "@/assets/banner-bathroom.jpeg";
import door from "@/assets/Doors2.jpeg";
import kitchen from "@/assets/banner-kitchen.jpeg";
import furniture from "@/assets/gallery-kitchen-1.jpeg";
import { Link } from "@tanstack/react-router"; // Ensure Link is imported from TanStack Router

/* ---------------------------------------------------------
   Configuration & Data
--------------------------------------------------------- */

type Service = {
  id: string;
  title: string;
  category: string;
  desc: string;
  href: string;
  image: string;
};

const services: Service[] = [
  {
    id: "01",
    title: "Kitchens",
    category: "Culinary Spaces",
    desc: "Complete architectural transformation. Enhance your kitchen's appeal with seamless, heat-resistant films.",
    href: "/services",
    image: kitchen,
  },
//   {
//     id: "02",
//     title: "Doors",
//     category: "Surface Detail",
//     desc: "Bespoke interior vinyl wrapping for commercial and residential entryways.",
//     href: "https://primewrap.ae/services/interior-door-wrap",
//     image: door,
//   },
  {
    id: "03",
    title: "Bathrooms",
    category: "Moisture Safe",
    desc: "Water-resistant architectural films for a premium spa-like vanity makeover.",
    href: "/services",
    image: bathroom,
  },
  {
    id: "04",
    title: "Furniture",
    category: "Asset Renewal",
    desc: "Add sophistication and extreme durability to corporate desks and home cabinetry.",
    href: "/services",
    image: furniture,
  },
  {
    id: "05",
    title: "Flooring",
    category: "Ground Level",
    desc: "Impact-resistant SPC and vinyl wrapping for high-traffic environments.",
    href: "/services",
    image: "https://images.unsplash.com/photo-1575204015311-0fe377370780?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
          
          {/* Base Text (Rotates back and fades out) */}
          <motion.span
            className="inline-block origin-bottom text-navy"
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
          
          {/* Incoming Text (Rotates in from top) */}
          <motion.span
            className="absolute left-0 top-0 inline-block origin-top text-orange italic"
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
   Main Component
--------------------------------------------------------- */
export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="relative py-24 px-4 md:px-8 lg:px-18 xl:px-26 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-orange" />
            <span className="text-xs md:text-sm tracking-[0.2em] uppercase text-orange font-semibold">
              Our Expertise
            </span>
          </div>
          <span className="h-[2px] w-12 bg-orange mt-2" />
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-navy tracking-tight whitespace-nowrap">
            Every surface, wrapped to last.
          </h2>
        </div>
         
       
         
        {/* Kinesthetic Typography Accordion */}
        <div className="flex flex-col border-t border-navy/10">
          {services.map((service, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={service.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                className="group border-b border-navy/10 py-6 md:py-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6"
              >
                
                {/* 
                  LEFT SIDE: 3D Text Roll + Vertical Image Shutter 
                */}
                <div className="flex items-center gap-6 md:gap-10 w-full lg:w-auto">
                  <h3
                    className="text-3xl md:text-5xl lg:text-6xl xl:text-[5.5rem] leading-none font-semibold uppercase tracking-tight"
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
                    className="hidden lg:block overflow-hidden w-[320px] rounded-md shrink-0 shadow-[0_20px_40px_rgba(20,35,70,0.15)] ml-6"
                  >
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      // Hardcoding the height on the img prevents it from squishing as the container height collapses
                      className="w-full h-[160px] object-cover" 
                    />
                  </motion.div>
                </div>

                {/* 
                  MOBILE ONLY: Vertical Expansion 
                */}
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
                    className="w-full h-52 object-cover rounded-md mb-5 shadow-inner" 
                  />
                  <p className="text-sm text-gray-500 mb-6 leading-relaxed">
                    {service.desc}
                  </p>

                </motion.div>

                {/* 
                  RIGHT SIDE (Desktop Only): Category & Description 
                */}
                <div className="hidden lg:flex flex-col items-end text-right w-[350px] shrink-0">
                  <span className="text-xs tracking-[0.2em] uppercase font-semibold text-gray-400 mb-2 transition-colors duration-300 group-hover:text-navy">
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
                      className="text-orange font-bold flex items-center justify-end gap-2 text-xs uppercase tracking-widest hover:text-orange-600 transition-colors group/link"
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
       {/* Explore All Services Link at the Bottom */}
        <div className="mt-12 flex justify-end">
          <Link
            to="/services"
            className="group inline-flex items-center gap-2 text-sm md:text-base font-semibold text-navy uppercase tracking-widest hover:text-orange transition-colors duration-300"
          >
            <span>Explore All Services</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default ServicesSection;