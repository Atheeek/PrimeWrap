import { useState } from "react";
import { UploadCloud, Check, ArrowRight } from "lucide-react";

/* ---------------------------------------------------------
   Configuration
--------------------------------------------------------- */
const raleway = { fontFamily: "'Raleway', sans-serif" };

const wrapOptions = [
  "Kitchen",
  "Doors",
  "Bathroom",
  "Furniture",
  "Walls",
  "UPVC",
];

/* ---------------------------------------------------------
   Mobile View (Card Pattern)
--------------------------------------------------------- */
const MobileBookingView = ({ 
  selectedServices, 
  toggleService, 
  isHoveringDrop, 
  setIsHoveringDrop 
}: any) => (
  <div className="block lg:hidden w-full ">
    {/* Header */}
    <div className="text-center mb-10">
      <div className="flex items-center justify-center gap-3 mb-3">
        <span className="h-[2px] w-8 bg-orange-500" />
        <p className="text-orange-500 font-bold tracking-widest uppercase text-[10px]">
          Instant Proposal
        </p>
        <span className="h-[2px] w-8 bg-orange-500" />
      </div>
      <h2 className="text-3xl font-bold text-[#142346] tracking-tight" style={raleway}>
        Let's Wrap It.
      </h2>
    </div>

    {/* Enclosed Card */}
    <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(20,35,70,0.08)] overflow-hidden border border-gray-100 flex flex-col">
      
      {/* Top Half: Personal Details (Navy) */}
      <div className="bg-[#142346] p-6 sm:p-8 text-white">
        <h3 className="text-xl font-semibold mb-6" style={raleway}>Client Details</h3>
        <div className="space-y-5">
          <div>
            <label className="block text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1">Full Name</label>
            <input 
              type="text" 
              placeholder="John Doe"
              className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors rounded-none text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1">Phone Number</label>
            <input 
              type="tel" 
              placeholder="+971 50 000 0000"
              className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors rounded-none text-sm"
            />
          </div>
          <div>
            <label className="block text-[10px] font-medium text-gray-400 uppercase tracking-wider mb-1">Email Address *</label>
            <input 
              type="email" 
              placeholder="john@example.com"
              className="w-full bg-transparent border-b border-gray-600 pb-2 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition-colors rounded-none text-sm"
            />
          </div>
        </div>
      </div>

      {/* Bottom Half: Project Details (White) */}
      <div className="p-6 sm:p-8">
        <h3 className="text-lg font-semibold text-[#142346] mb-4" style={raleway}>Scope of Work</h3>
        
        {/* Surface Cards for Mobile touch targets */}
        <div className="grid grid-cols-2 gap-3 mb-8">
          {wrapOptions.map((option) => {
            const isSelected = selectedServices.includes(option);
            return (
              <button
                key={`mobile-${option}`}
                type="button"
                onClick={() => toggleService(option)}
                className={`relative p-3 rounded-xl text-left transition-all duration-200 border-2 flex flex-col justify-between h-20 ${
                  isSelected 
                    ? "border-orange-500 bg-orange-50/50" 
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                <span className={`text-xs font-semibold ${isSelected ? "text-orange-700" : "text-[#142346]"}`}>
                  {option}
                </span>
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                  isSelected ? "border-orange-500 bg-orange-500" : "border-gray-300"
                }`}>
                  {isSelected && <Check className="w-2.5 h-2.5 text-white" strokeWidth={3} />}
                </div>
              </button>
            );
          })}
        </div>

        <h3 className="text-lg font-semibold text-[#142346] mb-3" style={raleway}>Project Media</h3>
        <label 
          className={`block w-full rounded-xl border-2 border-dashed transition-all duration-300 cursor-pointer p-6 text-center ${
            isHoveringDrop ? "border-orange-500 bg-orange-50/50" : "border-gray-300 bg-gray-50"
          }`}
        >
          <input type="file" className="hidden" multiple accept="image/*" />
          <div className="w-10 h-10 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
            <UploadCloud className="w-5 h-5 text-[#142346]" />
          </div>
          <p className="text-[#142346] font-bold text-sm mb-1">Upload Photos</p>
          <p className="text-[10px] text-gray-500">Max 12 photos</p>
        </label>

        <button type="button" className="w-full mt-8 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-xl font-bold transition-all active:scale-[0.98]">
          Request Proposal
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

/* ---------------------------------------------------------
   Desktop View (Deconstructed Editorial Pattern)
--------------------------------------------------------- */
const DesktopBookingView = ({ 
  selectedServices, 
  toggleService, 
  isHoveringDrop, 
  setIsHoveringDrop 
}: any) => (
  <div className="hidden lg:grid grid-cols-12 gap-24 items-start w-full">
    
    {/* Left Anchor */}
    <div className="col-span-5 sticky top-32">
      <div className="flex items-center gap-4 mb-6">
        <span className="h-[2px] w-12 bg-orange-500" />
        <p className="text-orange-500 font-bold tracking-widest uppercase text-sm">
          Get Your Quote
        </p>
      </div>
      <h2 
        className="text-6xl font-bold text-[#142346] tracking-tight leading-[1.1] mb-6" 
        style={raleway}
      >
        Transform<br />Your Space.
      </h2>
      <p className="text-gray-500 text-lg leading-relaxed max-w-md mb-10">
        Skip the showroom visits and endless calls. Select your project scope, upload a few photos, and receive a precision-engineered proposal within 24 hours.
      </p>
      
      <div className="flex items-center gap-6 p-6 bg-[#efeeea] rounded-2xl max-w-sm">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm flex-shrink-0">
          <Check className="w-5 h-5 text-orange-500" />
        </div>
        <div>
          <p className="text-[#142346] font-bold text-sm">No-Obligation Proposal</p>
          <p className="text-gray-500 text-xs mt-1">Transparent pricing, zero hidden fees.</p>
        </div>
      </div>
    </div>

    {/* Right Form */}
    <div className="col-span-7">
      <form className="space-y-16">
        
        {/* 01. Contact Details */}
        <div>
          <div className="flex items-baseline gap-3 mb-8 border-b border-gray-200 pb-4">
            <span className="text-orange-500 font-bold text-lg">01</span>
            <h3 className="text-2xl font-bold text-[#142346]" style={raleway}>Client Details</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-12">
            <div className="group relative">
              <input 
                type="text" 
                id="desktop-fullName"
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-[#142346] placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors rounded-none text-lg"
                placeholder="Full Name"
              />
              <label 
                htmlFor="desktop-fullName"
                className="absolute left-0 -top-3.5 text-gray-500 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-xs"
              >
                Full Name
              </label>
            </div>

            <div className="group relative">
              <input 
                type="tel" 
                id="desktop-phone"
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-[#142346] placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors rounded-none text-lg"
                placeholder="Phone Number"
              />
              <label 
                htmlFor="desktop-phone"
                className="absolute left-0 -top-3.5 text-gray-500 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-xs"
              >
                Phone Number
              </label>
            </div>

            <div className="group relative col-span-2">
              <input 
                type="email" 
                id="desktop-email"
                className="peer w-full bg-transparent border-b-2 border-gray-200 py-3 text-[#142346] placeholder-transparent focus:outline-none focus:border-orange-500 transition-colors rounded-none text-lg"
                placeholder="Email Address"
              />
              <label 
                htmlFor="desktop-email"
                className="absolute left-0 -top-3.5 text-gray-500 text-xs font-semibold uppercase tracking-wider transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-orange-500 peer-focus:text-xs"
              >
                Email Address *
              </label>
            </div>
          </div>
        </div>

        {/* 02. Scope of Work */}
        <div>
          <div className="flex items-baseline gap-3 mb-8 border-b border-gray-200 pb-4">
            <span className="text-orange-500 font-bold text-lg">02</span>
            <h3 className="text-2xl font-bold text-[#142346]" style={raleway}>Scope of Work</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {wrapOptions.map((option) => {
              const isSelected = selectedServices.includes(option);
              return (
                <button
                  key={`desktop-${option}`}
                  type="button"
                  onClick={() => toggleService(option)}
                  className={`px-6 py-3 rounded-full border-2 font-semibold text-sm transition-all duration-200 flex items-center gap-2 ${
                    isSelected 
                      ? "border-[#142346] bg-[#142346] text-white shadow-md" 
                      : "border-gray-200 text-gray-500 hover:border-gray-300 hover:text-[#142346]"
                  }`}
                >
                  {isSelected && <Check className="w-4 h-4" strokeWidth={3} />}
                  {option}
                </button>
              );
            })}
          </div>
        </div>

        {/* 03. Media Upload */}
        <div>
          <div className="flex items-baseline gap-3 mb-8 border-b border-gray-200 pb-4">
            <span className="text-orange-500 font-bold text-lg">03</span>
            <h3 className="text-2xl font-bold text-[#142346]" style={raleway}>Project Media</h3>
          </div>

          <label 
            onDragEnter={() => setIsHoveringDrop(true)}
            onDragLeave={() => setIsHoveringDrop(false)}
            onDrop={() => setIsHoveringDrop(false)}
            className={`block w-full rounded-2xl border-2 border-dashed transition-all duration-300 cursor-pointer group p-14 text-center ${
              isHoveringDrop 
                ? "border-orange-500 bg-orange-50/50" 
                : "border-gray-300 bg-[#efeeea]/50 hover:border-orange-400 hover:bg-orange-50/30"
            }`}
          >
            <input type="file" className="hidden" multiple accept="image/*" />
            <div className="w-16 h-16 mx-auto rounded-full bg-white shadow-sm flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300">
              <UploadCloud className={`w-7 h-7 ${isHoveringDrop ? "text-orange-600" : "text-[#142346]"}`} />
            </div>
            <p className="text-[#142346] font-bold text-lg mb-2">Upload or drop your photos here</p>
            <p className="text-sm text-gray-500">Supports SVG, PNG, JPG (Maximum 12 photos)</p>
          </label>
        </div>

        {/* Submit */}
        <div className="pt-8">
          <button 
            type="button" 
            className="group flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 active:scale-[0.98]"
          >
            Submit for Proposal
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </form>
    </div>
  </div>
);

/* ---------------------------------------------------------
   Main Component Wrapper (Holds State)
--------------------------------------------------------- */
const BookNow = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isHoveringDrop, setIsHoveringDrop] = useState(false);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const stateProps = {
    selectedServices,
    toggleService,
    isHoveringDrop,
    setIsHoveringDrop
  };

  return (
    <section id="book" className="py-20 lg:py-24 px-4 md:px-8 bg-white lg:bg-white overflow-hidden transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto">
        <MobileBookingView {...stateProps} />
        <DesktopBookingView {...stateProps} />
      </div>
    </section>
  );
};

export default BookNow;