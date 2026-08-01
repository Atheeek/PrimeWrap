import { useEffect, useRef, useState } from "react";
import { 
  ClipboardList, 
  Ruler, 
  ClipboardCheck, 
  CalendarCheck, 
  Eye 
} from "lucide-react";

/* ---------------------------------------------------------
   Configuration
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

const steps = [
  { 
    icon: ClipboardList, 
    title: "Consultation", 
    desc: "We understand your vision and space requirements." 
  },
  { 
    icon: Ruler, 
    title: "Measure & Design", 
    desc: "Precise measurements and material selection." 
  },
  { 
    icon: ClipboardCheck, 
    title: "Proposal", 
    desc: "Transparent quote with samples for approval." 
  },
  { 
    icon: CalendarCheck, 
    title: "Schedule", 
    desc: "We book a time that suits your schedule." 
  },
  { 
    icon: Eye, 
    title: "Installation", 
    desc: "Meticulous install with a final walkthrough." 
  },
];

const HowWeDoIt = () => {
  const [activeMobileStep, setActiveMobileStep] = useState(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll Spy Engine: Detects which step is in the middle of the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setActiveMobileStep(index);
          }
        });
      },
      { 
        // Triggers when the element hits the middle 40% of the screen
        rootMargin: "-40% 0px -40% 0px" 
      } 
    );

    stepRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 md:px-8 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 md:mb-24">
          <span className="h-[2px] w-12 bg-orange-500" />
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#142346] tracking-tight uppercase" 
            style={raleway}
          >
            How We Do It
          </h2>
          <span className="h-[2px] flex-1 bg-gray-200" />
        </div>

        {/* Industrial Timeline Grid */}
        <div className="relative">
          
          {/* Static Background Track (Desktop) */}
          <div className="hidden md:block absolute top-[4.5rem] left-0 right-0 h-[2px] bg-gray-100" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-6 relative">
            {steps.map((step, index) => {
              const isActive = activeMobileStep === index;

              return (
                <div 
                  key={step.title} 
                  data-index={index}
                  ref={(el) => { stepRefs.current[index] = el; }}
                  className="relative flex flex-row md:flex-col group"
                >
                  
                  {/* 
                    Mobile Layout: Vertical Line 
                    Uses max-md classes to trigger styles based on Scroll Spy
                  */}
                  <div className="flex flex-col items-center mr-6 md:hidden">
                    <div 
                      className={`text-3xl font-bold transition-colors duration-300 text-gray-200 ${
                        isActive ? "max-md:text-orange-500" : ""
                      }`} 
                      style={raleway}
                    >
                      0{index + 1}
                    </div>
                    {index !== steps.length - 1 && (
                      <div 
                        className={`w-[2px] h-full mt-2 transition-colors duration-300 bg-gray-100 ${
                          isActive ? "max-md:bg-orange-500" : ""
                        }`} 
                      />
                    )}
                  </div>

                  {/* 
                    Desktop Layout: Step Number & Node 
                    Relies solely on group-hover, ignoring scroll state
                  */}
                  <div className="hidden md:block">
                    <div 
                      className="text-5xl font-bold text-gray-100 md:group-hover:text-orange-500 transition-colors duration-500 mb-6" 
                      style={raleway}
                    >
                      0{index + 1}
                    </div>
                    
                    {/* Interactive Progress Line (Fills on hover) */}
                    {index !== steps.length - 1 && (
                      <div className="absolute top-[4.5rem] left-6 w-full h-[2px] overflow-hidden">
                        <div className="w-0 h-full bg-orange-500 md:group-hover:w-full transition-all duration-700 ease-out" />
                      </div>
                    )}

                    {/* Node Connector */}
                    <div className="w-5 h-5 rounded-full border-4 border-white bg-gray-200 absolute top-[4.15rem] left-1 md:group-hover:bg-orange-500 md:group-hover:border-orange-100 md:group-hover:scale-125 transition-all duration-300 z-10 shadow-sm" />
                  </div>

                  {/* Content Block (Hybrid Styling) */}
                  <div className="pt-2 md:pt-10 flex-1">
                    <div 
                      className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 bg-[#efeeea] md:group-hover:bg-[#142346] ${
                        isActive ? "max-md:bg-[#142346]" : ""
                      }`}
                    >
                      <step.icon 
                        className={`w-6 h-6 transition-colors duration-300 text-[#142346] md:group-hover:text-white ${
                          isActive ? "max-md:text-white" : ""
                        }`} 
                      />
                    </div>
                    <h3 
                      className="text-xl font-bold text-[#142346] mb-3" 
                      style={raleway}
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-sm md:text-base leading-relaxed pr-4">
                      {step.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default HowWeDoIt;