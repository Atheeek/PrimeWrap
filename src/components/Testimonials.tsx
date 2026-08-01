"use client";
import React from "react";
import { motion } from "motion/react";

/* ---------------------------------------------------------
   Font Configuration
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

export type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={`overflow-hidden ${props.className}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-4 md:gap-6 pb-4 md:pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-4 md:p-6 rounded-[22px] md:rounded-[26px] bg-white shadow-[0_10px_30px_rgba(20,35,70,0.08)] w-full"
                  key={i}
                >
                  <p className="text-xs md:text-sm leading-relaxed text-gray-500">
                    {text}
                  </p>
                  <div className="flex items-center gap-3 mt-4 md:mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={name}
                      className="h-8 w-8 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-orange-500/20"
                    />
                    <div className="flex flex-col">
                      <div 
                        className="font-bold tracking-tight leading-5 text-[#142346] text-sm md:text-base"
                        style={raleway}
                      >
                        {name}
                      </div>
                      <div className="leading-tight md:leading-5 tracking-tight text-gray-400 text-[10px] md:text-xs mt-0.5 md:mt-0">
                        {role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */
export const testimonials: Testimonial[] = [
  {
    text: "The wrap on my G-Wagon came out flawless — zero bubbles, perfect edges. You genuinely can't tell it's not factory paint.",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Khalid Al Marri",
    role: "Dubai, UAE",
  },
  {
    text: "They matte-wrapped our entire villa facade in charcoal film. The finish held up through peak summer heat without a single lift.",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    name: "Fatima Al Suwaidi",
    role: "Homeowner",
  },
  {
    text: "Booked a same-week slot for a fleet of delivery vans. Clean branding wrap, delivered on time, and it still looks sharp a year later.",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Rashid Al Nuaimi",
    role: "Fleet Manager",
  },
  {
    text: "Went with the emerald chrome finish on my Range Rover. The team walked me through every material option before we committed.",
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Mariam Al Falasi",
    role: "Dubai, UAE",
  },
  {
    text: "Renovated our office reception with architectural film instead of a full remodel — saved weeks of downtime and the result looks premium.",
    image: "https://randomuser.me/api/portraits/men/15.jpg",
    name: "Omar Al Zaabi",
    role: "Facilities Director",
  },
  {
    text: "Paint protection film install was precise around every panel gap. Best detailing crew I've used in Dubai, hands down.",
    image: "https://randomuser.me/api/portraits/women/16.jpg",
    name: "Noura Al Shamsi",
    role: "Business Bay, Dubai",
  },
  {
    text: "They matched our brand's exact Pantone on a satin wrap for three cars. Consistent color across every panel, no visible seams.",
    image: "https://randomuser.me/api/portraits/men/17.jpg",
    name: "Saeed Al Mansoori",
    role: "Marketing Lead",
  },
  {
    text: "Kitchen countertops and cabinet fronts wrapped in a stone-effect film — looks like a full renovation for a fraction of the cost.",
    image: "https://randomuser.me/api/portraits/women/18.jpg",
    name: "Layla Haddad",
    role: "Homeowner, JVC",
  },
  {
    text: "Quoted fast, arrived on time, and the color-shift wrap on my M4 gets stopped in every parking lot. Worth every dirham.",
    image: "https://randomuser.me/api/portraits/men/19.jpg",
    name: "Hamdan Al Ketbi",
    role: "Dubai, UAE",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
const Testimonials = () => {
  return (
    <section className="py-20 px-4 md:px-6 bg-white relative">
      <div className="max-w-[1400px] z-10 mx-auto">
        
        {/* Header - Styled to match existing components */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center mx-auto mb-10 md:mb-14"
        >
          <div className="flex items-center justify-center gap-4">
            <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
            <h2 
              style={{ ...raleway, fontWeight: 700 }} 
              className="text-2xl md:text-[42px] text-[#142346] whitespace-nowrap"
            >
              Happy Clients
            </h2>
            <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
          </div>
          <p className="text-center mt-6 text-gray-500 max-w-lg text-sm md:text-base">
            Real feedback from wrap and renovation clients across the UAE.
          </p>
        </motion.div>

        {/* 
          Grid Layout: 
          Strictly forces 2 columns on mobile (grid-cols-2) and 3 on desktop (lg:grid-cols-3) 
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[600px] md:max-h-[740px] overflow-hidden px-2 md:px-0">
          <TestimonialsColumn 
            testimonials={firstColumn} 
            duration={15} 
          />
          <TestimonialsColumn
            testimonials={secondColumn}
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
        
      </div>
    </section>
  );
};

export default Testimonials;