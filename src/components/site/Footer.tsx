import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUp, ArrowRight } from "lucide-react";

/* ---------------------------------------------------------
   Configuration
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

export function Footer() {
  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="bg-white pt-16 pb-10 px-4 md:px-8 lg:px-16 xl:px-24 overflow-hidden relative border-t border-gray-100">
      
      <div className="max-w-[1400px] mx-auto relative z-10">

        {/* ===================== MAIN FOOTER CONTENT GRID ===================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 items-start relative">

          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="absolute top-0 right-0 w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#142346] text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300 shadow-lg group z-20"
          >
            <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1" />
          </button>

          {/* Column 2: Sitemap & Services (Using social link font and styling style) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1" style={raleway}>Sitemap</span>
              <Link to="/" className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max" style={raleway}>Home</Link>
              <Link to="/about" className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max" style={raleway}>About Us</Link>
              <Link to="/services" className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max" style={raleway}>Services</Link>
              <Link to="/gallery" className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max" style={raleway}>Gallery</Link>
              <Link to="/contact" className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max" style={raleway}>Contact</Link>
            </div>

            <div className="flex flex-col space-y-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1" style={raleway}>Services</span>
              <span className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max cursor-pointer" style={raleway}>Kitchen Wrapping</span>
              <span className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max cursor-pointer" style={raleway}>Door Wrapping</span>
              <span className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max cursor-pointer" style={raleway}>Bathroom Wrapping</span>
              <span className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max cursor-pointer" style={raleway}>Furniture Wrapping</span>
              <span className="text-sm font-semibold text-[#142346] hover:text-orange-500 transition-colors w-max cursor-pointer" style={raleway}>Commercial Wrapping</span>
            </div>
          </div>

          {/* Column 3: Newsletter Intake & Reach Us */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#142346] tracking-tight mb-2" style={raleway}>
                Subscribe to Newsletter
              </h3>
              <p className="text-xs md:text-sm text-gray-500 mb-4" style={raleway}>
                Receive news and descriptions every month:
              </p>

              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@mail.com" 
                  required
                  className="w-full bg-gray-100/80 border border-gray-200 rounded-full py-3.5 pl-6 pr-14 text-sm text-[#142346] placeholder:text-gray-400 focus:outline-none focus:border-orange-500 focus:bg-white transition-all"
                />
                <button 
                  type="submit"
                  aria-label="Submit newsletter"
                  className="absolute right-2 w-10 h-10 rounded-full bg-transparent text-[#142346] hover:text-orange-500 flex items-center justify-center transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            <div>
              <p className="text-sm text-gray-600 leading-relaxed font-medium" style={raleway}>
                Al Quoz Industrial Area 3<br />
                Dubai, United Arab Emirates
              </p>
              <a 
                href="tel:+971000000000" 
                className="text-lg font-bold text-[#142346] hover:text-orange-500 transition-colors tracking-tight block mt-2"
                style={raleway}
              >
                +971 00 000 0000
              </a>
            </div>
          </div>

        </div>

        {/* ===================== BOTTOM COPYRIGHT BAR ===================== */}
        <div className="border-t border-gray-200 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500" style={raleway}>
          <p>© 2026 Yalla Wrap It. All rights reserved. Designed with care.</p>
          <p>Website design by StacyMore</p>
        </div>

      </div>
    </footer>
  );
}