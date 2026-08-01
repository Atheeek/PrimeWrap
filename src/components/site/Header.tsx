import { useState, useEffect, useRef, ReactElement } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, BookOpen } from "lucide-react";

/* ---------------------------------------------------------
   Configuration & Design System
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

/* ---------------------------------------------------------
   Engine 1: Magnetic Spring Physics (Hover.dev / 21st.dev)
--------------------------------------------------------- */
const Magnetic = ({ children }: { children: ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className="relative z-50 flex items-center justify-center"
    >
      {children}
    </motion.div>
  );
};

/* ---------------------------------------------------------
   Engine 2: Staggered Kinetic Typography (Hover.dev)
--------------------------------------------------------- */
const KineticLink = ({ children, to, isScrolled }: { children: string; to: string; isScrolled: boolean }) => {
  return (
    <Link to={to} className="relative block overflow-hidden uppercase tracking-widest text-sm font-bold">
      <motion.div initial="initial" whileHover="hovered" className="relative flex">
        
        {/* Layer 1: Base Text */}
        <div className="flex">
          {children.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: 0 },
                hovered: { y: "-110%" },
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
              className={`inline-block ${isScrolled ? "text-[#142346]" : "text-white"}`}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>

        {/* Layer 2: Hover Text (Orange) */}
        <div className="absolute inset-0 flex">
          {children.split("").map((letter, i) => (
            <motion.span
              key={i}
              variants={{
                initial: { y: "110%" },
                hovered: { y: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: i * 0.02 }}
              className="inline-block text-orange-500"
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
        
      </motion.div>
    </Link>
  );
};

/* ---------------------------------------------------------
   Main Component
--------------------------------------------------------- */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hook into scroll to trigger dynamic island morphing
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 w-full z-[100] flex justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] pointer-events-none"
        style={{ paddingTop: isScrolled ? "1.5rem" : "0" }}
      >
        <div
          className={`pointer-events-auto flex items-center justify-between transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled
              ? "w-[95%] md:w-[85%] max-w-[1100px] bg-white/30 backdrop-blur-2xl border border-white/40 shadow-[0_12px_40px_rgba(20,35,70,0.1)] rounded-[2rem] px-6 py-3"
              : "w-full max-w-[1400px] bg-transparent px-6 md:px-12 py-6 border-transparent"
          }`}
        >
          
          {/* ===================== BRANDING ===================== */}
          <Link to="/" className="flex items-center gap-3 z-50 group">
            
            <div className="flex flex-col pt-3 overflow-hidden">
              <span 
                className={`text-lg font-bold leading-none tracking-tight transition-colors duration-500 ${
                  isScrolled || mobileMenuOpen ? "text-[#142346]" : "text-white"
                }`} 
                style={raleway}
              >
                Wrap It
              </span>
              <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest mt-0.5">
                Studio
              </span>
            </div>
          </Link>

          {/* ===================== DESKTOP NAVIGATION ===================== */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-8">
              {navLinks.map((link) => (
                <KineticLink key={link.name} to={link.path} isScrolled={isScrolled}>
                  {link.name}
                </KineticLink>
              ))}
            </nav>

            <div className="flex items-center gap-4 ml-6 pl-6 border-l border-gray-300/30">
              <Magnetic>
                <a
                  href="#catalog"
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-300 ${
                    isScrolled 
                      ? "bg-gray-100 text-[#142346] hover:bg-orange-50 hover:text-orange-500" 
                      : "bg-white/10 text-white hover:bg-white hover:text-[#142346]"
                  }`}
                  aria-label="View Catalog"
                >
                  <BookOpen className="w-4 h-4" />
                </a>
              </Magnetic>
              
              <Magnetic>
                <a
                  href="#book"
                  className="group relative overflow-hidden bg-[#142346] text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-xl flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
                >
                  {/* Glowing Hover Effect Layer */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <span className="relative z-10">Book Viewing</span>
                  <ArrowRight className="w-4 h-4 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Magnetic>
            </div>
          </div>

          {/* ===================== MOBILE TOGGLE ===================== */}
          <Magnetic>
            <button
              className={`lg:hidden relative z-[100] w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
                isScrolled || mobileMenuOpen 
                  ? "bg-white/30 text-[#142346]" 
                  : "bg-white/10 text-white backdrop-blur-sm"
              }`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.div>
            </button>
          </Magnetic>
        </div>
      </header>

      {/* ===================== FLUID VECTOR MOBILE OVERLAY ===================== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: "circle(0px at calc(100% - 48px) 48px)" }}
            animate={{ clipPath: "circle(150% at calc(100% - 48px) 48px)" }}
            exit={{ clipPath: "circle(0px at calc(100% - 48px) 48px)" }}
            transition={{ type: "spring", stiffness: 30, restDelta: 2 }}
            className="fixed inset-0 bg-[#efeeea] z-[90] lg:hidden flex flex-col justify-center px-8"
          >
            {/* Background Accent Graphics */}
            <div className="absolute top-1/4 -right-24 w-96 h-96 b blur-3xl rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-24 w-96 h-96  blur-3xl rounded-full pointer-events-none" />

            <nav className="flex flex-col gap-6 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ delay: 0.1 + idx * 0.1, type: "spring", stiffness: 100 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-5xl font-bold text-[#142346] tracking-tighter flex items-center gap-4 group"
                    style={raleway}
                  >
                    {link.name}
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowRight className="w-8 h-8 text-orange-500" />
                    </motion.div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div 
              className="flex flex-col gap-4 mt-16 relative z-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
            >
              <a
                href="#catalog"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full bg-white text-[#142346] px-6 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest border border-gray-200 active:scale-[0.98] transition-transform shadow-sm"
              >
                View Catalog
                <BookOpen className="w-5 h-5 text-gray-400" />
              </a>
              
              <a
                href="#book"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between w-full bg-orange-500 text-white px-6 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl active:scale-[0.98] transition-transform"
              >
                Book a Viewing
                <ArrowRight className="w-5 h-5 text-white/80" />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}