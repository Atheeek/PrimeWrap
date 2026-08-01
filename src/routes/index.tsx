import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Flame, Wallet, Award, ChevronLeft, ChevronRight, Star, Upload, ClipboardList, Ruler, ClipboardCheck, CalendarCheck, Eye, ChefHat, DoorOpen, Bath } from "lucide-react";
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

const brands = ["Rotana", "% Arabica", "EMAAR", "DAMAC", "Emirates"];

const wraps = [
  { top: "8%", left: "18%", label: "Cabinet" },
  { top: "22%", left: "52%", label: "Backsplash" },
  { top: "44%", left: "28%", label: "Countertop" },
  { top: "70%", left: "18%", label: "Flooring" },
  { top: "60%", left: "62%", label: "Island" },
];

const reviews = [
  { name: "Sarah M.", text: "Absolutely stunning work — my kitchen looks brand new. The team was punctual and precise.", rating: 5 },
  { name: "Ahmed R.", text: "Fantastic finish on our doors. Highly recommend this crew, super professional.", rating: 5 },
  { name: "Priya S.", text: "Yalla Wrap It transformed my bathroom without the mess of a full renovation.", rating: 5 },
];

const steps = [
  { icon: ClipboardList, title: "Consultation", desc: "We understand your vision and space requirements." },
  { icon: Ruler, title: "Measure & Design", desc: "Precise measurements and material selection." },
  { icon: ClipboardCheck, title: "Proposal", desc: "Transparent quote with samples for approval." },
  { icon: CalendarCheck, title: "Schedule", desc: "We book a time that suits your schedule." },
  { icon: Eye, title: "Installation", desc: "Meticulous install with a final walkthrough." },
];

const services = [
  { icon: ChefHat, title: "Kitchen Wrapping", desc: "Cabinets, countertops and islands re-imagined." },
  { icon: DoorOpen, title: "Door Wrapping", desc: "Interior and exterior doors, elegantly renewed." },
  { icon: Bath, title: "Bathroom Wrapping", desc: "Water-resistant finishes for a spa-like feel." },
];

function Home() {
  const [gIdx, setGIdx] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement | null>(null);
  
  const gallery = [
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
  ];

  // Defensive programming: Use ResizeObserver to ensure the margin matches the footer 
  // exactly, even if content wraps or screen orientation changes.
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
    <div className="bg-[#142346]"> {/* Base background matches your footer to prevent visual flashing */}
      
      {/* 
        MAIN CONTENT FOREGROUND
        By applying a bottom margin equal to the footer's height, 
        we allow the user to scroll exactly far enough to reveal the fixed footer behind it.
      */}
      <main 
        className="relative z-10 bg-white "
        style={{ marginBottom: `${footerHeight}px` }}
      >
        <Header />
        <Hero />
        <AboutOurWrap />
        <TrustedPartners />
        <WhatWeWrap />
        <CheckOurWork />
        <Testimonials />
        <BookNow />

        {/* HOW WE DO IT */}
       <HowWeDoIt />

    {/* SERVICES */}
<ServicesSection />
      </main>

      {/* 
        STICKY REVEAL FOOTER 
        Positioned strictly behind the main content. 
      */}
      <div 
        ref={footerRef} 
        className="fixed bottom-0 left-0 w-full z-0"
      >
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}

export default Home;