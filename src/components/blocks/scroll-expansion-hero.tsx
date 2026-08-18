import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ScrollExpandMediaProps {
  mediaSrc: string;
  bgImageSrc: string;
  initialTitle?: string;
  finalTitle?: string;
  scrollToExpand?: string;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaSrc,
  bgImageSrc,
  initialTitle = "WE DON'T REPLACE THE SPACE.",
  finalTitle = "WE TRANSFORM IT.",
  scrollToExpand = "Scroll to explore",
  children,
}: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const computeProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrolled = -section.getBoundingClientRect().top;
      // Hardcode the animation to complete over 200vh of scrolling
      const scrollableDistance = window.innerHeight * 2;
      const raw = scrollableDistance > 0 ? scrolled / scrollableDistance : 0;
      setProgress(Math.min(Math.max(raw, 0), 1));
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        computeProgress();
        tickingRef.current = false;
      });
    };

    computeProgress();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const expandRaw = Math.min(progress / 0.65, 1);
  const eased = 1 - Math.pow(1 - expandRaw, 2); 

  // Image size & styling
  const mediaSize = 35 + eased * 65; 
  const radius = 16 - eased * 16; 
  const overlayOpacity = 0.85 - eased * 0.7;

  const clamp = (val: number, min: number, max: number) => Math.min(Math.max(val, min), max);

  // Text transition logic
  // 0-20% scroll: initialTitle fully visible
  // 20-45% scroll: initialTitle fades/moves out, finalTitle fades/moves in
  // >45% scroll: finalTitle fully visible (image continues expanding until 65%)

  // Initial text fades out and moves up between 20% and 45% progress
  const initialOpacity = 1 - clamp((progress - 0.2) / 0.25, 0, 1);
  const initialY = -clamp((progress - 0.2) / 0.25, 0, 1) * 30; // Move up 30px
  const initialScale = 1 + clamp((progress - 0.2) / 0.25, 0, 1) * 0.05;

  // Final text fades in, scales up, and moves up between 20% and 45% progress
  const finalOpacity = clamp((progress - 0.2) / 0.25, 0, 1);
  const finalY = 30 - clamp((progress - 0.2) / 0.25, 0, 1) * 30; // Move from 30px down to 0
  const finalScale = 0.9 + clamp((progress - 0.2) / 0.25, 0, 1) * 0.1;

  const hintOpacity = Math.max(1 - progress / 0.15, 0);

  // We only want the metadata to fade out at the very beginning (0-15%)
  const metaOpacity = 1 - clamp(progress / 0.15, 0, 1);

  return (
    <>
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-[#1a1a1a]">
        
        {/* Blurred Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${bgImageSrc})`, filter: "blur(20px) grayscale(50%)" }}
        />
        <div className="absolute inset-0 bg-[#0a0a0a]" style={{ opacity: overlayOpacity }} />

        {/* Editorial Metadata (Fades out quickly) */}
        <div 
          className="absolute top-10 left-6 md:left-12 z-30 text-white/50 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase flex flex-col gap-1 pointer-events-none"
          style={{ opacity: metaOpacity }}
        >
          <span>PrimeWrap</span>
          <span>Interior Surface Transformation</span>
          <span>UAE</span>
        </div>
        
        <div 
          className="absolute top-10 right-6 md:right-12 z-30 text-white/50 text-[10px] md:text-xs font-semibold tracking-[0.3em] uppercase flex flex-col gap-1 pointer-events-none text-right"
          style={{ opacity: metaOpacity }}
        >
          <span>SURFACE / 01</span>
        </div>

        {/* Media Container */}
        <div
          className="relative z-20 overflow-hidden shadow-2xl transition-all duration-75"
          style={{
            width: `${mediaSize}vw`,
            height: `${mediaSize}vh`,
            maxWidth: "100vw",
            maxHeight: "100vh",
            borderRadius: `${radius}px`,
          }}
        >
          <img src={mediaSrc} alt="Surface Detail" className="w-full h-full object-cover" />
          
          {/* Very subtle grain over the image */}
          <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none" 
               style={{ backgroundImage: 'url("https://upload.wikimedia.org/wikipedia/commons/7/76/1k_Dissolve_Noise_Texture.png")' }} />
        </div>

        {/* Dynamic Typography Overlay */}
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center px-6 pointer-events-none">
          {/* Initial Title */}
          <h2
            className="absolute font-display font-extrabold uppercase text-white text-[6vw] md:text-[3.5vw] leading-tight text-center max-w-4xl tracking-tight"
            style={{ 
              opacity: initialOpacity, 
              transform: `translateY(${initialY}px) scale(${initialScale})`,
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              willChange: "opacity, transform"
            }}
          >
            {initialTitle}
          </h2>

          {/* Final Title */}
          <h2
            className="absolute font-display font-extrabold uppercase text-white text-[12vw] md:text-[8vw] leading-none text-center tracking-tighter"
            style={{ 
              opacity: finalOpacity, 
              transform: `translateY(${finalY}px) scale(${finalScale})`,
              textShadow: "0 10px 40px rgba(0,0,0,0.3)",
              willChange: "opacity, transform"
            }}
          >
            {finalTitle}
          </h2>
        </div>

        {/* Scroll Hint */}
        {scrollToExpand && (
          <div
            className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 text-white/50"
            style={{ opacity: hintOpacity }}
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">{scrollToExpand}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        )}
      </div>
    </section>

    {/* Revealed Content */}
    {children && (
      <div className="relative z-40 bg-[#f4f3f0] -mt-[100vh] shadow-[0_-20px_50px_rgba(0,0,0,0.3)]">
        {children}
      </div>
    )}
    </>
  );
}