import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { ChevronLeft, ChevronRight, GripVertical, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import beforeImg from "@/assets/wardrobe_before.jpeg";
import afterImg from "@/assets/wardrobe_after.jpeg";

/* ---------------------------------------------------------
   Configuration
--------------------------------------------------------- */

const projects = [
  {
    id: 1,
    title: "Wardrobe Transformation",
    description: "Complete transformation from dated dark wood to a modern, light-reflecting matte white finish. Enhances the space with a clean, contemporary look.",
    before: beforeImg,
    after: afterImg,
  }
];

const CheckOurWork = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const activeProject = projects[activeIndex];

  // --- Slider Logic ---
  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  // --- Navigation Logic ---
  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    setSliderPosition(50); // Reset slider on change
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    setSliderPosition(50);
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Editorial Header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="h-[2px] w-12 bg-orange" />
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-semibold text-navy tracking-tight uppercase whitespace-nowrap"
          >
            Check Our Work
          </h2>
          <span className="h-[2px] flex-1 bg-gray-200" />
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Project Details & Navigation */}
          <div className="lg:col-span-4 flex flex-col order-2 lg:order-1">
            <div>
              {projects.length > 1 && (
                <div className="text-orange font-semibold tracking-widest text-sm mb-4">
                  PROJECT {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>
              )}
              <h3 
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-navy leading-[1.1] mb-6"
              >
                {activeProject.title}
              </h3>
              <p className="text-gray-500 text-lg leading-relaxed font-light">
                {activeProject.description}
              </p>
            </div>

            {/* Navigation & Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8 lg:mt-10">
              {projects.length > 1 && (
                <div className="flex items-center gap-4">
                  <button 
                    onClick={goPrev}
                    aria-label="Previous project"
                    className="w-14 h-14 rounded-md border-2 border-navy text-navy flex items-center justify-center hover:bg-navy hover:text-white transition-all active:scale-95"
                  >
                    <ChevronLeft className="w-6 h-6 -ml-0.5" />
                  </button>
                  <button 
                    onClick={goNext}
                    aria-label="Next project"
                    className="w-14 h-14 rounded-md bg-orange text-white flex items-center justify-center hover:bg-orange-600 transition-all active:scale-95 shadow-[0_8px_20px_rgba(249,115,22,0.3)]"
                  >
                    <ChevronRight className="w-6 h-6 ml-0.5" />
                  </button>
                </div>
              )}
              
              <Link 
                to="/gallery"
                className="group relative w-full sm:w-auto inline-flex items-center justify-between sm:justify-center gap-6 bg-navy px-8 py-5 overflow-hidden text-[11px] font-bold uppercase tracking-[0.25em] text-white transition-all duration-500 hover:shadow-2xl hover:shadow-navy/20"
              >
                <span className="absolute inset-0 w-full h-full bg-[#C19A5B] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                <span className="relative z-10 flex items-center gap-6 w-full justify-between sm:w-auto sm:justify-center">
                  <span>View All Works</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-[1px] bg-white/30 group-hover:w-10 group-hover:bg-white transition-all duration-500 ease-out" />
                    <ArrowRight className="w-4 h-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
                  </div>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Comparison Engine */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            <div 
              ref={containerRef}
              className="relative w-full aspect-[4/3] md:aspect-[16/9] bg-gray-200 overflow-hidden cursor-ew-resize select-none shadow-[0_20px_50px_rgba(20,35,70,0.15)] group"
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={onMouseMove}
              onTouchStart={() => setIsDragging(true)}
              onTouchEnd={() => setIsDragging(false)}
              onTouchMove={onTouchMove}
            >
              {/* BEFORE Image (Base Layer) */}
              <img 
                src={activeProject.before} 
                alt="Before wrapping" 
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
              
              {/* BEFORE Label */}
              <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md text-white text-xs font-semibold tracking-widest px-4 py-2 uppercase">
                Before
              </div>

              {/* AFTER Image (Top Layer clipped by slider) */}
              <div 
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
              >
                <img 
                  src={activeProject.after} 
                  alt="After wrapping" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* AFTER Label */}
                <div className="absolute top-6 left-6 bg-orange text-white text-xs font-semibold tracking-widest px-4 py-2 uppercase">
                  After
                </div>
              </div>

              {/* Slider Handle (The physical line & grip) */}
              <div 
                className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none transition-transform duration-75"
                style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-md flex items-center justify-center shadow-lg text-navy group-hover:scale-110 transition-transform">
                  <GripVertical className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <p className="text-center text-xs text-gray-400 mt-4 font-semibold tracking-widest uppercase lg:hidden">
              Drag to compare
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CheckOurWork;