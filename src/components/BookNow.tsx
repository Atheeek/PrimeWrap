import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import gallery10 from "@/assets/gallery10.jpeg";

const BookNow = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  return (
    <section 
      id="book" 
      ref={containerRef}
      className="py-24 md:py-32 px-6 md:px-12 bg-white overflow-hidden relative"
    >
      <div className="max-w-[1600px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: The Visual Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square w-full overflow-hidden shadow-2xl group"
          >
            <motion.div style={{ scale: imageScale, y: imageY }} className="w-full h-full origin-bottom">
              <img 
                src={gallery10} 
                alt="PrimeWrap transformation" 
                className="w-full h-full object-cover filter contrast-[1.1] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </motion.div>
            <div className="absolute inset-0 bg-navy/5 transition-colors duration-500 group-hover:bg-transparent" />
            
            {/* Subtle Metadata overlay */}
            <div className="absolute bottom-6 left-6 text-[9px] uppercase tracking-widest text-white font-semibold mix-blend-difference opacity-70">
              PRIMEWRAP STUDIO <br /> AL QUOZ, DUBAI
            </div>
          </motion.div>

          {/* Right: The Typographic CTA */}
          <div className="flex flex-col justify-center items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
                <span className="w-8 h-[1px] bg-orange" />
                The Next Step
              </div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tighter uppercase text-navy mb-8"
            >
              Ready To <br />
              <span className="text-gray-400">Transform</span> <br />
              Your Space?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              className="text-lg md:text-xl font-light text-gray-500 max-w-md leading-relaxed mb-12"
            >
              Tell us what you're looking to transform. Share photos of your space, and we'll take it from there.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.5 }}
            >
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
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BookNow;