import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useState, useEffect, useRef } from "react";

import AboutOurWrap from "@/components/AboutOurWrap";
import Hero from '@/components/Hero';
import TrustedPartners from "@/components/TrustedPartners";
import WhatWeWrap from "@/components/WhatWeWrap";
import Testimonials from "@/components/Testimonials";
import BookNow from "@/components/BookNow";
import CheckOurWork from "@/components/CheckOurWork";
import HowWeDoIt from "@/components/HowWeDoIt";
import ServicesSection from "@/components/ServicesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yalla Wrap It — Premier Vinyl Wrapping in Dubai" },
      { name: "description", content: "Fire-safe, budget-friendly vinyl wrapping for kitchens, doors and bathrooms in Dubai. Timeless finishes, quick turnaround." },
      { property: "og:title", content: "Yalla Wrap It — Vinyl Wrapping Dubai" },
      { property: "og:description", content: "Transform your space with premium vinyl wrapping." },
    ],
  }),
  component: Home,
});

function Home() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement | null>(null);
  
  useEffect(() => {
    if (footerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        setFooterHeight(entries[0].contentRect.height);
      });
      resizeObserver.observe(footerRef.current);
      return () => resizeObserver.disconnect();
    }
  }, []);

  return (
    <div 
      className="bg-[#142346]"
      style={{ "--footer-height": `${footerHeight}px` } as React.CSSProperties}
    >
      
      {/* 
        MAIN CONTENT: 
        mb-0 on mobile so it doesn't leave a gap.
        lg:mb-[var(--footer-height)] on desktop to create space for the reveal.
      */}
      <main className="relative z-10 bg-white mb-0 lg:mb-[var(--footer-height)]">
        <Header />
        <Hero />
        <AboutOurWrap />
        <TrustedPartners />
        <WhatWeWrap />
        <CheckOurWork />
        <Testimonials />
        <BookNow />
        <HowWeDoIt />
        <ServicesSection />
      </main>

      {/* 
        FOOTER WRAPPER: 
        relative on mobile (scrolls normally).
        lg:fixed on desktop (locks to background for curtain reveal).
      */}
      <div 
        ref={footerRef} 
        className="relative lg:fixed bottom-0 left-0 w-full z-0"
      >
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

export default Home;