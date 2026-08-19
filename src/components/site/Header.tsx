import {
  useState,
  useEffect,
  useRef,
  type ReactElement,
  type MouseEvent as ReactMouseEvent,
} from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight, Phone, BookOpen, Images, Home } from "lucide-react";

import { Logo } from "@/components/site/Logo";
import { useMediaQuery } from "@/hooks/use-media-query";


const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
  { name: "Gallery", path: "/gallery" },
];

const HERO_THRESHOLD_RATIO = 0.75;
const goldBtnClass =
  "bg-[#C19A5B] hover:bg-[#e0893b] active:bg-[#a8844f] text-white";

const Magnetic = ({ children }: { children: ReactElement }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: ReactMouseEvent) => {
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

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const lastScrollY = useRef(0);

  const useDarkTheme = isScrolled || mobileMenuOpen || !isHome;

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const heroHeight = window.innerHeight * HERO_THRESHOLD_RATIO;
      const isDesktop = window.innerWidth >= 1024;

      setIsScrolled(currentY > 10);

      if (!isDesktop) {
        setNavVisible(true);
        return;
      }

      if (desktopMenuOpen) {
        setNavVisible(true);
      } else if (!isHome) {
        setNavVisible(true);
      } else if (currentY <= heroHeight) {
        setNavVisible(true);
      } else if (currentY < lastScrollY.current - 8) {
        setNavVisible(true);
      } else if (currentY > lastScrollY.current + 8) {
        setNavVisible(false);
      }

      lastScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome, desktopMenuOpen]);

  useEffect(() => {
    const locked = mobileMenuOpen || desktopMenuOpen;
    document.body.style.overflow = locked ? "hidden" : "unset";
    if (locked) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
  }, [mobileMenuOpen, desktopMenuOpen]);

  useEffect(() => {
    setMobileMenuOpen(false);
    setDesktopMenuOpen(false);
  }, [location.pathname]);

  const onHeroDesktop = isHome && !isScrolled && !desktopMenuOpen;
  const onHeroMobile = isHome && !isScrolled && !mobileMenuOpen;

  const mobileActionBtnClass = onHeroMobile
    ? "w-12 h-12 flex items-center justify-center rounded-md bg-white/10 text-orange hover:bg-white/20 active:bg-white/25 shrink-0"
    : useDarkTheme
      ? "w-12 h-12 flex items-center justify-center rounded-md bg-white/30 text-[#142346] hover:bg-white/40 active:bg-white/50 shrink-0"
      : "w-12 h-12 flex items-center justify-center rounded-md bg-white/10 text-orange hover:bg-white/20 active:bg-white/25 shrink-0";

  return (
    <>
      {/* ===================== MOBILE HEADER ===================== */}
      {!isDesktop && !mobileMenuOpen && (
        <header className="site-header-mobile fixed top-0 inset-x-0 z-[100]">
          <div
            className={`flex items-center justify-between h-[88px] w-full px-5 transition-all duration-300 ${isScrolled || !isHome
              ? "bg-white/90 backdrop-blur-lg shadow-[0_4px_20px_rgba(20,35,70,0.12)]"
              : "bg-white/75 backdrop-blur-md shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
              }`}
          >
            <Link to="/" className="flex items-center h-full">
              <Logo size="mobile" className="ml-[-4px]" />
            </Link>

            <div className="flex items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open Menu"
                className="flex items-center gap-3 h-full text-navy group"
              >
                <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Menu</span>
                <div className="flex flex-col gap-[5px] items-end w-6">
                  <span className="w-full h-[1.5px] bg-navy transition-all duration-300" />
                  <span className="w-2/3 h-[1.5px] bg-navy transition-all duration-300 group-hover:w-full" />
                </div>
              </button>
            </div>
          </div>
        </header>
      )}

      {/* ===================== DESKTOP HEADER ===================== */}
      {isDesktop && (
        <header
          className={`site-header-desktop fixed top-0 left-0 w-full z-[100] transition-transform duration-500 ease-out ${navVisible || desktopMenuOpen ? "translate-y-0" : "-translate-y-full"
            }`}
        >
          {/* Full-width flush container */}
          <div
            className={`relative w-full min-h-[80px] flex items-center justify-between px-6 xl:px-12 transition-all duration-500 bg-white/85 backdrop-blur-lg shadow-[0_4px_24px_rgba(20,35,70,0.08)] border-b border-gray-100/50`}
          >
            {/* Left: Menu */}
            <div className="flex items-center z-[110] flex-1 min-w-0">
              <Magnetic>
                <button
                  type="button"
                  className={`flex items-center gap-4 transition-all duration-300 group text-navy hover:text-orange`}
                  onClick={() => setDesktopMenuOpen(!desktopMenuOpen)}
                  aria-label="Toggle Menu"
                  aria-expanded={desktopMenuOpen}
                >
                  <span className="relative flex flex-col gap-[6px] w-7 h-4 justify-center items-start">
                    <span className={`h-[1.5px] bg-current transition-all duration-300 ${desktopMenuOpen ? "w-full absolute top-1/2 -translate-y-1/2 rotate-45" : "w-full"}`} />
                    <span className={`h-[1.5px] bg-current transition-all duration-300 ${desktopMenuOpen ? "w-full absolute top-1/2 -translate-y-1/2 -rotate-45" : "w-2/3 group-hover:w-full"}`} />
                  </span>
                  <span className={`text-xs xl:text-[13px] font-bold uppercase tracking-[0.2em] text-navy`}>
                    {desktopMenuOpen ? "Close" : "Menu"}
                  </span>
                </button>
              </Magnetic>

            </div>

            {/* Center: Logo */}
            <Link
              to="/"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[120]"
            >
              <Logo size="header" />
            </Link>

            {/* Right: Gallery + Book Viewing */}
            <div className="flex items-center justify-end gap-8 xl:gap-10 z-[110] flex-1 min-w-0">
              <Link
                to="/gallery"
                className="relative text-xs xl:text-[13px] font-bold uppercase tracking-[0.2em] text-navy group overflow-hidden pb-1"
              >
                <span className="relative z-10 group-hover:text-orange transition-colors duration-300">Gallery</span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-orange -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              </Link>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center gap-3 bg-navy text-white px-7 py-3.5 overflow-hidden text-[11px] xl:text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-[#C19A5B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-3">
                  <span>Get a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </header>
      )}

      {/* ===================== MOBILE MENU ===================== */}
      {!isDesktop && (
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="site-mobile-menu fixed inset-0 bg-[#f8f7f5] z-[100] flex flex-col shadow-[-24px_0_80px_rgba(20,35,70,0.15)]"
            >
              <div className="flex items-center justify-between h-[88px] w-full px-5 shrink-0">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <Logo size="mobile" className="ml-[-4px]" />
                </Link>
                <button
                  type="button"
                  className="w-10 h-10 rounded-md border border-navy/10 flex items-center justify-center text-navy active:bg-navy active:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full h-full flex flex-col justify-center px-8 pb-20 relative overflow-hidden">
                <nav className="flex flex-col gap-4 relative z-10">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ delay: 0.1 + idx * 0.1, duration: 0.5, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <Link
                        to={link.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center gap-6 py-4 border-b border-navy/5"
                      >
                        <span className="text-xs font-semibold text-orange tracking-widest tabular-nums mt-1.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[2.5rem] font-semibold text-navy uppercase tracking-tighter leading-none group-hover:text-orange transition-colors group-hover:translate-x-4 duration-500 ease-out">
                          {link.name}
                        </span>
                      </Link>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Mobile Footer Area inside Menu */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-0 left-0 w-full p-8 border-t border-navy/10 flex justify-between items-center bg-[#f8f7f5]"
              >
                <a href="tel:+971501234567" className="text-xs font-semibold uppercase tracking-widest text-navy">
                  +971 50 123 4567
                </a>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-semibold uppercase tracking-widest text-orange"
                >
                  Get a Quote
                </Link>
              </motion.div>

            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* ===================== DESKTOP MENU ===================== */}
      {isDesktop && (
        <AnimatePresence>
          {desktopMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="site-desktop-menu fixed inset-0 z-[90]"
            >
              <button
                type="button"
                className="absolute inset-0 bg-navy/50 backdrop-blur-md"
                aria-label="Close menu"
                onClick={() => setDesktopMenuOpen(false)}
              />

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="absolute left-0 top-0 h-full w-[calc(100%-520px)] flex flex-col justify-center px-16 xl:px-24 pointer-events-none text-white"
              >
                <div className="text-[10px] uppercase tracking-[0.3em] text-orange mb-8 flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-orange" />
                  Contact Studio
                </div>

                <h3 className="text-2xl lg:text-3xl font-semibold mb-6 tracking-tight uppercase leading-tight font-display">
                  Ready to <br /><span className="text-white/40">Transform?</span>
                </h3>

                <p className="text-white/60 font-light mb-12 max-w-sm text-sm lg:text-base leading-relaxed">
                  Reach out to discuss your project. We bring premium architectural wraps to Dubai, UAE.
                </p>

                <div className="flex flex-col gap-6 font-semibold uppercase tracking-widest text-[10px] lg:text-xs pointer-events-auto">
                  <a href="mailto:info@primewrap.ae" className="hover:text-orange transition-colors flex items-center gap-3">
                    <ArrowRight className="w-4 h-4 text-orange" /> info@primewrap.ae
                  </a>
                  <a href="tel:+971501234567" className="hover:text-orange transition-colors flex items-center gap-3">
                    <span className="text-sm font-semibold tracking-wider">+971 50 123 4567</span>
                  </a>
                </div>

                <div className="mt-16 pointer-events-auto">
                  <Link
                    to="/services"
                    onClick={() => setDesktopMenuOpen(false)}
                    className="flex items-center justify-between bg-white text-navy px-6 py-4 text-[10px] lg:text-xs font-bold uppercase tracking-widest border border-gray-200 hover:border-orange hover:text-orange transition-colors w-max"
                  >
                    <span className="mr-6">View Services Catalog</span>
                    <BookOpen className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              <motion.aside
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", stiffness: 280, damping: 32 }}
                className="absolute right-0 top-0 h-full w-full max-w-[520px] bg-white flex flex-col shadow-[-24px_0_80px_rgba(20,35,70,0.15)]"
              >
                <div className="flex items-center justify-between px-10 pt-10 pb-6 border-b border-navy/10">
                  <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-navy/40">
                    Navigation
                  </span>
                  <button
                    type="button"
                    onClick={() => setDesktopMenuOpen(false)}
                    className="w-10 h-10 rounded-md border border-navy/10 flex items-center justify-center text-navy hover:bg-navy hover:text-white transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <nav className="flex-1 flex flex-col justify-center px-10 py-8 gap-1">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.08 + idx * 0.06, duration: 0.4 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setDesktopMenuOpen(false)}
                        className="group flex items-center gap-6 py-4 border-b border-navy/5"
                      >
                        <span className="text-xs font-semibold text-orange tracking-widest tabular-nums mt-1.5">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <span className="text-3xl xl:text-4xl font-semibold text-navy uppercase tracking-tighter leading-none group-hover:text-orange transition-colors group-hover:translate-x-4 duration-500 ease-out flex-1">
                          {link.name}
                        </span>
                        <ArrowRight className="w-5 h-5 text-orange opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="px-10 pb-10 pt-4 flex flex-col gap-3">
                  <Link
                    to="/services"
                    onClick={() => setDesktopMenuOpen(false)}
                    className="group flex items-center justify-between bg-white text-navy px-6 py-4 text-[10px] lg:text-xs font-bold uppercase tracking-[0.25em] border border-gray-200 hover:border-orange hover:text-orange transition-colors"
                  >
                    <span className="relative z-10">View Services</span>
                    <BookOpen className="w-4 h-4 text-gray-400 group-hover:text-orange transition-colors" />
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => setDesktopMenuOpen(false)}
                    className="group relative flex items-center justify-between px-6 py-4 overflow-hidden bg-navy text-white border border-navy transition-colors"
                  >
                    <span className="absolute inset-0 w-full h-full bg-[#C19A5B] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                    <span className="text-[10px] lg:text-xs font-bold uppercase tracking-[0.25em] relative z-10 group-hover:text-white transition-colors">
                      Get a Free Quote
                    </span>
                    <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.aside>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
}
