import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Logo } from "@/components/site/Logo";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { buildLinks, buildMetaTags } from "@/lib/seo";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import doorImg from "@/assets/Doors2.jpeg";

export const Route = createFileRoute("/thank-you")({
  head: () => ({
    meta: buildMetaTags({
      title: "Thank You | PrimeWrap",
      description: "Your inquiry has been received. The PrimeWrap team will get back to you shortly.",
      path: "/thank-you",
    }),
    links: buildLinks("/thank-you"),
  }),
  component: ThankYou,
});

function ThankYou() {
  return (
    <div className="min-h-screen bg-[#f4f3f0] text-navy font-display flex flex-col selection:bg-orange selection:text-white">
      <Header />

      <main className="flex-grow pt-32 pb-24 px-6 md:px-12 flex flex-col items-center justify-center relative overflow-hidden">
        
        <div className="max-w-4xl w-full mx-auto relative z-10 flex flex-col items-center">
          
          {/* Animated Line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "circOut" }}
            className="w-full max-w-[200px] h-[1px] bg-navy/20 mb-12 origin-left"
          />

          {/* Metadata */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-8 text-center"
          >
            Project Enquiry / Received
          </motion.div>

          {/* Image Centerpiece */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="relative w-full max-w-md aspect-[4/3] md:aspect-[16/9] overflow-hidden shadow-2xl mb-12"
          >
            <img 
              src={doorImg} 
              alt="PrimeWrap Interior" 
              className="w-full h-full object-cover filter contrast-[1.1]"
            />
            <div className="absolute inset-0 bg-navy/5" />
          </motion.div>

          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold uppercase tracking-tight text-center mb-6"
          >
            Enquiry Received.
          </motion.h1>

          {/* Supporting Text */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-lg md:text-xl font-light text-gray-500 text-center max-w-lg leading-relaxed mb-12"
          >
            Your project details have been successfully submitted. Our team will review the information and reach out to discuss the next steps.
          </motion.p>

          {/* Actions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Link 
              to="/" 
              className="group relative inline-flex items-center justify-center gap-3 bg-navy text-white px-8 py-4 overflow-hidden transition-colors hover:bg-navy/90 w-full sm:w-auto"
            >
              <span className="text-sm font-semibold uppercase tracking-widest relative z-10">
                Return Home
              </span>
              <div className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            </Link>
            
            <Link 
              to="/about" 
              className="group flex items-center justify-center gap-2 text-sm font-semibold uppercase tracking-widest text-navy hover:text-orange transition-colors py-4 px-2"
            >
              View Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

        </div>

      </main>

      <SimpleFooter />
      <FloatingWhatsApp />
    </div>
  );
}

function SimpleFooter() {
  return (
    <footer className="bg-navy text-white font-display border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 py-12 md:py-16 flex flex-col items-center text-center">
        <Logo size="footer" className="mb-10 brightness-0 invert mx-auto object-center" />
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl gap-6 pt-8 border-t border-white/10">
          <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} PrimeWrap
          </span>
          <ul className="flex gap-8 text-[10px] font-semibold text-white/40 uppercase tracking-[0.2em]">
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

export default ThankYou;
