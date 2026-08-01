import { useState, useEffect } from "react";

/* ---------------------------------------------------------
   Font & Icons
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

const HygienicIcon = () => (
  // Metaphor: A clean water drop with a medical/health cross and sparkles
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Main Drop */}
    <path d="M24 8 C24 8 12 22 12 30 A12 12 0 0 0 36 30 C36 22 24 8 24 8 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-navy" />
    {/* Inner Cross */}
    <path d="M20 30 H28 M24 26 V34" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-navy" />
    {/* Sparkles */}
    <path d="M38 10 L39.5 13.5 L43 15 L39.5 16.5 L38 20 L36.5 16.5 L33 15 L36.5 13.5 Z" fill="currentColor" className="text-orange-500" />
    <path d="M12 14 L13 16 L15 17 L13 18 L12 20 L11 18 L9 17 L11 16 Z" fill="currentColor" className="text-orange-500" />
  </svg>
);

const EcoFriendlyIcon = () => (
  // Metaphor: A clean, modern plant sprout with a vibrant accent leaf
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Stem */}
    <path d="M24 44 V26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-navy" />
    {/* Left Leaf (Outline) */}
    <path d="M24 26 C12 26 8 14 8 14 C16 12 24 18 24 26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-navy" />
    {/* Right Leaf (Solid) */}
    <path d="M24 32 C36 32 40 20 40 20 C32 16 24 24 24 32 Z" fill="currentColor" className="text-orange-500" />
    {/* Accent Dot */}
    <circle cx="16" cy="36" r="2" fill="currentColor" className="text-orange-500" />
  </svg>
);

const AestheticIcon = () => (
  // Metaphor: A perfectly symmetrical diamond (representing beauty/design) with an accent sparkle
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Diamond Outer Shape */}
    <path d="M14 14 H34 L42 26 L24 44 L6 26 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-navy" />
    {/* Diamond Inner Facets */}
    <path d="M14 14 L24 44 M34 14 L24 44 M6 26 H42" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="text-navy" />
    {/* Sparkle */}
    <path d="M10 6 L11 9 L14 10 L11 11 L10 14 L9 11 L6 10 L9 9 Z" fill="currentColor" className="text-orange-500" />
  </svg>
);

const FireSafeIcon = () => (
  // Metaphor: A protective shield containing a flame
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Outer Shield */}
    <path d="M24 4 C14 4 10 10 10 10 V24 C10 35 24 44 24 44 C24 44 38 35 38 24 V10 C38 10 34 4 24 4 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy" />
    {/* Inner Flame */}
    <path d="M24 14 C24 14 18 20 18 26 C18 29.3 20.7 32 24 32 C27.3 32 30 29.3 30 26 C30 20 24 14 24 14 Z" fill="currentColor" className="text-orange-500" />
  </svg>
);

const BudgetFriendlyIcon = () => (
  // Metaphor: A retail price tag with a heart, representing friendly pricing
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Tag Body */}
    <path d="M24 6 H10 V20 L28 38 C30.2 40.2 33.8 40.2 36 38 L42 32 C44.2 29.8 44.2 26.2 42 24 L24 6 Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy" />
    {/* Tag Hole */}
    <circle cx="16" cy="12" r="2" fill="currentColor" className="text-navy" />
    {/* Heart Accent */}
    <path d="M31 18 C29 16 26 16 26 18 C26 16 23 16 21 18 C19 20 19 23 21 25 L26 30 L31 25 C33 23 33 20 31 18 Z" fill="currentColor" className="text-orange-500" />
  </svg>
);

const TimelessQualityIcon = () => (
  // Metaphor: A premium rosette badge with a star
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Ribbons (placed behind conceptually) */}
    <path d="M15 29 L10 44 L17 41 L22 45 L20.5 33.5 M33 29 L38 44 L31 41 L26 45 L27.5 33.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-navy" />
    {/* Main Badge Circle */}
    <circle cx="24" cy="20" r="14" stroke="currentColor" strokeWidth="2" className="text-navy" />
    {/* Inner Dashed Border */}
    <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" className="text-navy" />
    {/* Premium Star */}
    <path d="M24 12 L25.5 16.5 H30 L26.5 19.5 L28 24 L24 21.5 L20 24 L21.5 19.5 L18 16.5 H22.5 Z" fill="currentColor" className="text-orange-500" />
  </svg>
);

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */
const wrapFeatures = [
  { icon: HygienicIcon, title: "Hygienic", desc: "Effortless cleaning meets antibacterial and antifungal properties, ensuring a clean and healthy environment for you and your family." },
  { icon: EcoFriendlyIcon, title: "Eco-Friendly", desc: "Our Wrap proudly meets rigorous global standards. We're committed to eco-friendly solutions that are certified for performance and sustainability." },
  { icon: AestheticIcon, title: "Aesthetic", desc: "Discover a wide range of textured patterns to suit your interior design preferences, from modern to traditional, and bring your vision to life." },
  { icon: FireSafeIcon, title: "Fire-Safe", desc: "Our films come in both fire-retardant and standard options to meet your unique installation needs, ensuring safety and compliance." },
  { icon: BudgetFriendlyIcon, title: "Budget-Friendly", desc: "Experience stunning renovations at a fraction of the cost of traditional methods with our architectural film." },
  { icon: TimelessQualityIcon, title: "Timeless Quality", desc: "Enjoy a flawless appearance that lasts over a decade, a testament to our commitment to lasting quality." },
];

/* ---------------------------------------------------------
   Sub-Components
--------------------------------------------------------- */
const DesktopCard = ({ feature }: { feature: typeof wrapFeatures[0] }) => (
  <div className="min-h-[300px] rounded-2xl p-8 flex flex-col items-center justify-start text-center transition-transform duration-300 hover:-translate-y-2 shadow-[0_16px_45px_rgba(20,35,70,0.16),0_6px_18px_rgba(0,0,0,0.08)] bg-white">
    <div className="w-16 h-16 flex-shrink-0 text-navy mb-4">
      <feature.icon />
    </div>
    <h3 style={{ ...raleway, fontWeight: 700 }} className="text-2xl text-[#142346] mb-3">
      {feature.title}
    </h3>
    <p className="text-sm text-gray-500 max-w-[280px] mx-auto leading-relaxed">
      {feature.desc}
    </p>
  </div>
);
const MobileCard = ({ feature }: { feature: typeof wrapFeatures[0] }) => (
  <div className="w-full h-[135px] rounded-[22px] p-4 flex flex-row items-start gap-4 transition-transform duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(20,35,70,0.12),0_4px_12px_rgba(0,0,0,0.06)] bg-white overflow-hidden">
    <div className="w-14 h-14 flex-shrink-0 text-navy mt-1">
      <feature.icon />
    </div>
    <div className="flex-1 text-left flex flex-col justify-start">
      <h3 style={{ ...raleway, fontWeight: 700 }} className="text-lg text-[#142346] mb-1">
        {feature.title}
      </h3>
      <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
        {feature.desc}
      </p>
    </div>
  </div>
);

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
const AboutOurWrap = () => {
  const [page, setPage] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(3);

  useEffect(() => {
    const updateCardsPerPage = () => setCardsPerPage(window.innerWidth < 768 ? 2 : 3);
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
    return () => window.removeEventListener("resize", updateCardsPerPage);
  }, []);

  const totalPages = Math.ceil(wrapFeatures.length / cardsPerPage);

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages - 1));
  }, [totalPages]);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const visibleCards = wrapFeatures.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-20 px-4 md:px-6 bg-white/40">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-10 md:mb-14">
          <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
          <h2 style={{ ...raleway, fontWeight: 700 }} className="text-2xl md:text-[42px] text-[#142346] whitespace-nowrap">
            About Our Wrap
          </h2>
          <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
        </div>

        {/* Carousel Container */}
        <div className="relative w-full mx-auto px-2 md:px-0">
          
          {/* Previous Button */}
          <button
            onClick={goPrev}
            aria-label="Previous"
            className="absolute -left-2 md:-left-[40px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-orange-500 z-10 hover:scale-110 transition-transform duration-300 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 -ml-0.5" fill="currentColor">
              <path d="M15 5l-7 7 7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>

          {/* Desktop Grid */}
          <div className="hidden md:grid grid-cols-3 gap-[32px] w-[full] px-4 items-stretch">
            {visibleCards.map((c) => (
              <DesktopCard key={c.title} feature={c} />
            ))}
          </div>

          {/* Mobile Stack */}
          <div className="flex flex-col gap-3 md:hidden w-full">
            {visibleCards.map((c) => (
              <MobileCard key={c.title} feature={c} />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={goNext}
            aria-label="Next"
            className="absolute -right-2 md:-right-[40px] top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-orange-500 z-10 hover:scale-110 transition-transform duration-300 shadow-[0_6px_18px_rgba(0,0,0,0.08)]"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-6 md:h-6 ml-0.5" fill="currentColor">
              <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-3 mt-8 md:mt-12">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === page ? "w-8 bg-orange-500" : "w-2.5 bg-orange-500/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutOurWrap;