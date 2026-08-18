import { motion } from "motion/react";
import { ReactNode, useState } from "react";

/* ---------------------------------------------------------
   Icons (Retained but styled down for a premium look)
--------------------------------------------------------- */

const HygienicIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 8 C24 8 12 22 12 30 A12 12 0 0 0 36 30 C36 22 24 8 24 8 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M20 30 H28 M24 26 V34" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M38 10 L39.5 13.5 L43 15 L39.5 16.5 L38 20 L36.5 16.5 L33 15 L36.5 13.5 Z" fill="currentColor" />
    <path d="M12 14 L13 16 L15 17 L13 18 L12 20 L11 18 L9 17 L11 16 Z" fill="currentColor" />
  </svg>
);

const EcoFriendlyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 44 V26" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M24 26 C12 26 8 14 8 14 C16 12 24 18 24 26 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M24 32 C36 32 40 20 40 20 C32 16 24 24 24 32 Z" fill="currentColor" />
    <circle cx="16" cy="36" r="2" fill="currentColor" />
  </svg>
);

const AestheticIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M14 14 H34 L42 26 L24 44 L6 26 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M14 14 L24 44 M34 14 L24 44 M6 26 H42" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M10 6 L11 9 L14 10 L11 11 L10 14 L9 11 L6 10 L9 9 Z" fill="currentColor" />
  </svg>
);

const FireSafeIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 4 C14 4 10 10 10 10 V24 C10 35 24 44 24 44 C24 44 38 35 38 24 V10 C38 10 34 4 24 4 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M24 14 C24 14 18 20 18 26 C18 29.3 20.7 32 24 32 C27.3 32 30 29.3 30 26 C30 20 24 14 24 14 Z" fill="currentColor" />
  </svg>
);

const BudgetFriendlyIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M24 6 H10 V20 L28 38 C30.2 40.2 33.8 40.2 36 38 L42 32 C44.2 29.8 44.2 26.2 42 24 L24 6 Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="16" cy="12" r="2" fill="currentColor" />
    <path d="M31 18 C29 16 26 16 26 18 C26 16 23 16 21 18 C19 20 19 23 21 25 L26 30 L31 25 C33 23 33 20 31 18 Z" fill="currentColor" />
  </svg>
);

const TimelessQualityIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <path d="M15 29 L10 44 L17 41 L22 45 L20.5 33.5 M33 29 L38 44 L31 41 L26 45 L27.5 33.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="24" cy="20" r="14" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="20" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2.5" />
    <path d="M24 12 L25.5 16.5 H30 L26.5 19.5 L28 24 L24 21.5 L20 24 L21.5 19.5 L18 16.5 H22.5 Z" fill="currentColor" />
  </svg>
);

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */
const wrapFeatures = [
  { icon: HygienicIcon, title: "Sanitary Perfection", desc: "Effortless cleaning meets antibacterial and antifungal properties, ensuring a clean and healthy environment for you and your family." },
  { icon: EcoFriendlyIcon, title: "Sustainable Luxury", desc: "Our Wrap proudly meets rigorous global standards. We're committed to eco-friendly solutions that are certified for performance and sustainability." },
  { icon: AestheticIcon, title: "Curated Textures", desc: "Discover a wide range of textured patterns to suit your interior design preferences, from modern to traditional, and bring your vision to life." },
  { icon: FireSafeIcon, title: "Uncompromised Safety", desc: "Our films come in both fire-retardant and standard options to meet your unique installation needs, ensuring safety and compliance." },
  { icon: BudgetFriendlyIcon, title: "Smarter Investment", desc: "Experience stunning renovations at a fraction of the cost of traditional methods with our architectural film." },
  { icon: TimelessQualityIcon, title: "Timeless Quality", desc: "Enjoy a flawless appearance that lasts over a decade, a testament to our commitment to lasting quality." },
];

/* ---------------------------------------------------------
   Subcomponents
--------------------------------------------------------- */
function Reveal({ children, delay = 0, className = "" }: { children: ReactNode, delay?: number, className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const FeatureCard = ({ feature, index }: { feature: typeof wrapFeatures[0], index: number }) => (
  <div className="group relative py-8 lg:py-12 border-b border-navy/10 flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 items-start transition-colors duration-500 hover:border-orange/30 cursor-pointer">
    <div className="flex items-center gap-6 md:w-1/3 shrink-0">
      <span className="text-[10px] font-bold tracking-[0.25em] text-navy/30 group-hover:text-orange transition-colors duration-500">
        0{index + 1}
      </span>
      <div className="w-16 h-16 md:w-20 md:h-20 text-navy/80 group-hover:text-orange transition-colors duration-500 transform group-hover:scale-110">
        <feature.icon />
      </div>
    </div>
    <div className="md:w-2/3">
      <h3 className="text-xl md:text-2xl font-bold text-navy mb-3 font-display transform transition-transform duration-500 group-hover:translate-x-2">
        {feature.title}
      </h3>
      <p className="text-sm md:text-base font-light leading-relaxed text-gray-500 transform transition-transform duration-500 delay-75 group-hover:translate-x-2">
        {feature.desc}
      </p>
    </div>
  </div>
);

const MobileFeatureCard = ({ feature, index }: { feature: typeof wrapFeatures[0], index: number }) => (
  <div className="bg-white border border-navy/10 rounded-lg p-6 flex flex-col gap-4 shadow-[0_4px_20px_rgba(20,35,70,0.05)] transition-colors active:border-orange/30 h-[220px]">
    <div className="flex items-center justify-between shrink-0">
      <div className="w-12 h-12 text-navy">
        <feature.icon />
      </div>
      <span className="text-[10px] font-bold tracking-[0.2em] text-orange">
        0{index + 1}
      </span>
    </div>
    <div className="flex-1 overflow-hidden">
      <h3 className="text-lg font-bold text-navy mb-2 font-display">{feature.title}</h3>
      <p className="text-sm font-light text-gray-500 leading-relaxed line-clamp-4">{feature.desc}</p>
    </div>
  </div>
);

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
export default function AboutOurWrap() {
  const [page, setPage] = useState(0);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(wrapFeatures.length / cardsPerPage);

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages);
  const goNext = () => setPage((p) => (p + 1) % totalPages);

  const visibleMobileCards = wrapFeatures.slice(
    page * cardsPerPage,
    page * cardsPerPage + cardsPerPage
  );

  return (
    <section className="py-24 md:py-40 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

        {/* Editorial Header (Left Column) */}
        <div className="lg:col-span-5 flex flex-col lg:sticky lg:top-32">
          <Reveal>
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6">
              The PrimeWrap Difference
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold text-navy leading-[1.05] tracking-tight uppercase font-display max-w-md">
              A smarter way to transform.
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-8">
            <p className="text-navy/60 text-base md:text-lg font-light leading-relaxed max-w-sm">
              Our architectural films provide a sophisticated, durable finish that elevates any surface. We combine aesthetic precision with long-lasting performance, so you never have to compromise.
            </p>
          </Reveal>
        </div>

        {/* Features List (Right Column) */}
        <div className="lg:col-span-7 flex flex-col mt-8 lg:mt-0">

          {/* Desktop View (Editorial List) */}
          <div className="hidden md:flex flex-col">
            <div className="border-t border-navy/10" />
            {wrapFeatures.map((feature, idx) => (
              <Reveal key={feature.title} delay={0.1 * (idx % 3)}>
                <FeatureCard feature={feature} index={idx} />
              </Reveal>
            ))}
          </div>

          {/* Mobile View (Stacked Carousel) */}
          <div className="flex flex-col md:hidden w-full relative">
            <div className="flex flex-col gap-4 min-h-[360px]">
              {visibleMobileCards.map((feature, idx) => {
                const actualIndex = page * cardsPerPage + idx;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MobileFeatureCard feature={feature} index={actualIndex} />
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center justify-between mt-8 px-2">
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-navy/30">
                {String(page + 1).padStart(2, '0')} / {String(totalPages).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={goPrev}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-[#efeeea] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6" /></svg>
                </button>
                <button
                  onClick={goNext}
                  className="w-10 h-10 rounded-full border border-navy/10 flex items-center justify-center text-navy hover:bg-[#efeeea] transition-colors"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6" /></svg>
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}