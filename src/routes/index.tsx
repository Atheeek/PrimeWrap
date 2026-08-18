import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { useState, useEffect, useRef } from "react";

import AboutOurWrap from "@/components/AboutOurWrap";
import Hero from '@/components/Hero';
// import TrustedPartners from "@/components/TrustedPartners";
import WhatWeWrap from "@/components/WhatWeWrap";
// import Testimonials from "@/components/Testimonials";
import BookNow from "@/components/BookNow";
import CheckOurWork from "@/components/CheckOurWork";
import HowWeDoIt from "@/components/HowWeDoIt";
import ServicesSection from "@/components/ServicesSection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PrimeWrap — Premier Vinyl Wrapping in Dubai" },
      { name: "description", content: "Fire-safe, budget-friendly vinyl wrapping for kitchens, doors and bathrooms in Dubai. Timeless finishes, quick turnaround." },
      { property: "og:title", content: "PrimeWrap — Vinyl Wrapping Dubai" },
      { property: "og:description", content: "Transform your space with premium vinyl wrapping." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-[#142346]">
      <Header />
      
      <main className="relative z-10 bg-[#efeeea]">
        <Hero />
        <AboutOurWrap />
        {/* <TrustedPartners /> */}
        <WhatWeWrap />
        <CheckOurWork />
        {/* <Testimonials /> */}
        <BookNow />
        <HowWeDoIt />
        <ServicesSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default Home;