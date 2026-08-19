import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy text-white font-display overflow-hidden">

      {/* LAYER 1: FINAL BRAND / CTA MOMENT */}
      <div className="border-b border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 lg:py-20 flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12">
          <div className="flex flex-col">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-orange" />
              The Next Step
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-[0.9] tracking-tighter uppercase text-white">
              Ready To <br />
              <span className="text-white/40">Transform</span> <br />
              Your Space?
            </h2>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center gap-4 bg-white text-navy px-8 py-5 overflow-hidden transition-colors hover:bg-gray-100 mt-6 lg:mt-0"
            >
              <span className="text-base font-semibold uppercase tracking-widest relative z-10">
                Start Your Project
              </span>
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
              <div className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </div>
      </div>

      {/* LAYER 2: NAVIGATION & INFORMATION */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-16 xl:gap-8">

          {/* Brand Anchor */}
          <div className="xl:col-span-5 flex flex-col">
            <div className="overflow-hidden mb-6 -ml-1">
              <div
                className="
                  select-none
                  whitespace-nowrap
                  text-3xl md:text-4xl lg:text-[3.5rem]
                  font-semibold
                  uppercase
                  leading-[0.75]
                  tracking-[-0.06em]
                   text-white/[0.055]
                "
              >
                PrimeWrap
              </div>
            </div>
            <p className="text-base md:text-lg font-light text-white/50 leading-relaxed max-w-sm">
              PrimeWrap is Dubai's premium vinyl wrapping studio — transforming kitchens, doors, bathrooms, and furniture with fire-safe, luxury finishes.
            </p>
          </div>

          {/* Explore */}
          <div className="xl:col-span-2 flex flex-col">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-8">
              Explore
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-semibold text-white uppercase tracking-widest">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Gallery", to: "/gallery" },
                { label: "Contact", to: "/contact" },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="hover:text-orange transition-colors relative group inline-block py-1">
                    {label}
                    <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="xl:col-span-3 flex flex-col">
            <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-8">
              Services
            </h4>
            <ul className="flex flex-col gap-3 text-xs font-semibold text-white uppercase tracking-widest">
              {["Kitchen Wrapping", "Door Wrapping", "Bathroom Wrapping", "Furniture Wrapping", "Commercial Wrapping"].map(
                (service) => (
                  <li key={service} className="group cursor-default flex items-center gap-2">
                    <span className="hover:text-orange transition-colors duration-300 relative inline-block py-1">
                      {service}
                    </span>
                    <ArrowRight className="w-4 h-4 text-orange opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact & Socials */}
          <div className="xl:col-span-2 flex flex-col gap-16">
            <div className="flex flex-col">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-8">
                Studio
              </h4>
              <div className="flex flex-col gap-4 text-base font-medium text-white tracking-wide">
                <span className="text-white/50">Al Quoz, Dubai — UAE</span>
                <a href="mailto:Rihan@primewrap.ae" className="hover:text-orange transition-colors relative inline-block w-fit">
                  Rihan@primewrap.ae
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
                </a>
                <a href="tel:+971501234567" className="hover:text-orange transition-colors relative inline-block w-fit">
                  +971 50 123 4567
                  <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange scale-x-0 origin-left transition-transform duration-300 hover:scale-x-100" />
                </a>
              </div>
            </div>

            <div className="flex flex-col">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-6">
                Socials
              </h4>
              <ul className="flex flex-col gap-3 text-xs font-semibold text-white uppercase tracking-widest">
                {["Instagram", "Facebook", "LinkedIn"].map((social) => (
                  <li key={social}>
                    <a href="#" className="hover:text-orange transition-colors relative group inline-block">
                      {social}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-orange scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* LAYER 3: LEGAL BOTTOM BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em] text-center sm:text-left">
            © {new Date().getFullYear()} PrimeWrap
          </span>
          <ul className="flex gap-6 text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">
            <li>
              <Link to="/privacy-policy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms-and-conditions" className="hover:text-white transition-colors">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </footer>
  );
} 