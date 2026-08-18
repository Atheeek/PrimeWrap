import { MessageCircle, Home } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

export function FloatingWhatsApp() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <>
      <style>{`
        body.menu-open .floating-actions {
          opacity: 0;
          pointer-events: none;
          transform: scale(0.8);
        }
      `}</style>
      <div className="floating-actions fixed bottom-6 right-6 z-40 flex flex-col gap-3 transition-all duration-300">

        {/* Mobile-only Home Button (Hidden on Homepage) */}
        {!isHome && (
          <Link
            to="/"
            className="w-14 h-14 rounded-full bg-navy text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 md:hidden"
            aria-label="Home"
          >
            <Home className="w-6 h-6" />
          </Link>
        )}

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/918971490262?text=I%27m%20interested%20in%20your%20services"
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </a>

      </div>
    </>
  );
}
