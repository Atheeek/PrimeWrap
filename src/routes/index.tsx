import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
// Removed unused hooks: useState, useEffect, useRef
import { Flame, Wallet, Award, ChevronLeft, ChevronRight, Star, Upload, ClipboardList, Ruler, ClipboardCheck, CalendarCheck, Eye, ChefHat, DoorOpen, Bath } from "lucide-react";
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

// Note: If you aren't using brands, wraps, reviews, steps, and services in this specific file, 
// you should delete those arrays too. I left them in case they are used in components you didn't show.
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
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow z-10 bg-white">
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

      {/* The Footer handles its own sticky logic now. No wrappers needed. */}
      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}

export default Home;