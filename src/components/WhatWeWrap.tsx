import { useState, useEffect } from "react";
import kitchen from "@/assets/kitchen.jpeg";
import doors from "@/assets/doors2.jpeg";
/* ---------------------------------------------------------
   Data Structure
   Each slide MUST have its own specific pins. 
   Do not reuse coordinates across different images.
--------------------------------------------------------- */
const slides = [
  {
    id: 1,
    imgUrl: kitchen, // Replace with your actual kitchen image URL
    alt: "Kitchen we can wrap",
    pins: [
      { label: "Cabinets", top: "35%", left: "25%" },
      { label: "Countertops", top: "58%", left: "50%" },
      { label: "Island", top: "75%", left: "75%" },
    ],
  },
  {
    id: 2,
    imgUrl: doors,
    alt: "Living space we can wrap",
    pins: [
      { label: "Wardrobe", top: "45%", left: "70%" },
      { label: "Internal Doors", top: "50%", left: "25%" },
    ],
  },
  {
    id: 3,
    imgUrl: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80",
    alt: "Bathroom we can wrap",
    pins: [
      { label: "Vanity Unit", top: "60%", left: "45%" },
      { label: "Wall Tiles", top: "30%", left: "70%" },
    ],
  },
];

const raleway = { fontFamily: "'Raleway', sans-serif" };

const WhatWeWrap = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slideshow logic (changes every 4 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer); // Cleanup prevents memory leaks
  }, []);

  return (
    <section className="py-20 px-6 bg-white/40 ">
      <div className="max-w-[1200px] mx-auto text-center">
        
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-14">
          <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
          <h2 style={{ ...raleway, fontWeight: 700 }} className="text-3xl md:text-[42px] text-[#142346] whitespace-nowrap">
            What Can We Wrap?
          </h2>
          <span className="h-[2px] w-12 md:w-32 bg-orange-500" />
        </div>

        {/* Slideshow Container */}
        <div className="relative border-[12px] md:border-[20px] border-white mx-auto max-w-[1000px] shadow-2xl rounded-sm aspect-[16/10] overflow-hidden bg-gray-200">
          
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                {/* Background Image */}
                <img
                  src={slide.imgUrl}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                />

                {/* Overlay to ensure pins remain readable */}
                <div className="absolute inset-0 bg-black/10" />

                {/* Pins */}
                {slide.pins.map((pin, pinIdx) => (
                  <div
                    key={pinIdx}
                    style={{ top: pin.top, left: pin.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 transition-all duration-700 delay-300 ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <span 
                        className="text-[#142346] text-sm md:text-base font-semibold bg-white px-4 py-1.5 rounded-full shadow-lg"
                        style={raleway}
                      >
                        {pin.label}
                      </span>
                      <span className="w-px h-6 md:h-8 bg-[#142346]/80" />
                      <span className="w-3 h-3 md:w-4 md:h-4 rounded-full bg-orange-500 ring-4 ring-orange-500/30 shadow-md" />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Manual Navigation Dots */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentSlide ? "w-8 bg-orange-500" : "w-2.5 bg-orange-500/30 hover:bg-orange-500/60"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeWrap;