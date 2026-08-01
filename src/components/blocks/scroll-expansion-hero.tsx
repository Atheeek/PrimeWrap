import { useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

export default function ScrollExpandMedia({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend = false,
  children,
}: ScrollExpandMediaProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    const computeProgress = () => {
      const section = sectionRef.current;
      if (!section) return;
      const scrollableDistance = section.offsetHeight - window.innerHeight;
      const scrolled = -section.getBoundingClientRect().top;
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

  useEffect(() => {
    const reset = () => setProgress(0);
    window.addEventListener("resetSection", reset);
    return () => window.removeEventListener("resetSection", reset);
  }, []);

  const expandRaw = Math.min(progress / 0.65, 1);
  const eased = 1 - Math.pow(1 - expandRaw, 2); 

  const mediaSize = 42 + eased * 58; 
  const radius = 32 - eased * 32; 
  const overlayOpacity = 0.72 - eased * 0.72;

  // Title splits inwards and stays visible over the media
  const textProgress = Math.min(progress / 0.4, 1);
  const textOffset = (1 - textProgress) * 30; // Starts 30vw apart, slides inward to 0

  const hintOpacity = Math.max(1 - progress / 0.12, 0);

  const titleWords = (title ?? "").split(" ");
  const titleFirst = titleWords[0] ?? "";
  const titleRest = titleWords.slice(1).join(" ");

  return (
    <section ref={sectionRef} className="relative" style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-navy">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{ backgroundImage: `url(${bgImageSrc})`, filter: "blur(10px)" }}
        />
        <div className="absolute inset-0 bg-navy" style={{ opacity: overlayOpacity }} />

        {/* Date label */}
        {date && (
          <div
            className="absolute top-8 left-6 md:left-10 z-10 text-white/70 text-xs md:text-sm tracking-[0.25em] uppercase"
            style={{ opacity: hintOpacity }}
          >
            {date}
          </div>
        )}

        {/* Media (z-20) */}
        <div
          className="relative z-20 overflow-hidden shadow-2xl"
          style={{
            width: `${mediaSize}vw`,
            height: `${mediaSize}vh`,
            maxWidth: "100vw",
            maxHeight: "100vh",
            borderRadius: `${radius}px`,
          }}
        >
          {mediaType === "video" ? (
            <video
              src={mediaSrc}
              poster={posterSrc}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img src={mediaSrc} alt={title ?? ""} className="w-full h-full object-cover" />
          )}
        </div>

        {/* Split, blended title (z-30 ensures it is in FRONT of media) */}
        {title && (
          <div className="absolute inset-0 z-30 flex flex-col items-center justify-center gap-0 md:gap-2 px-6 pointer-events-none">
            <h2
              className="font-display font-bold uppercase text-white text-[15vw] md:text-[8vw] leading-none"
              style={{
                transform: `translateX(-${textOffset}vw)`, // Slides in from the left
                mixBlendMode: textBlend ? "difference" : "normal",
              }}
            >
              {titleFirst}
            </h2>
            {titleRest && (
              <h2
                className="font-display font-bold uppercase text-white text-[15vw] md:text-[8vw] leading-none"
                style={{
                  transform: `translateX(${textOffset}vw)`, // Slides in from the right
                  mixBlendMode: textBlend ? "difference" : "normal",
                }}
              >
                {titleRest}
              </h2>
            )}
          </div>
        )}

        {/* Scroll hint */}
        {scrollToExpand && (
          <div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/70"
            style={{ opacity: hintOpacity }}
          >
            <span className="text-[11px] uppercase tracking-[0.3em]">{scrollToExpand}</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </div>
        )}
      </div>

      {/* Content revealed once the media finishes expanding */}
      {children && (
        <div className="relative z-40 bg-[#efeeea]">{children}</div>
      )}
    </section>
  );
}