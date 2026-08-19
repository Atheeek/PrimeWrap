import { useState, useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { FormSubmitFields } from "@/components/site/FormSubmitFields";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, X, Check } from "lucide-react";

import doorImg from "@/assets/Doors2.jpeg";
import gallery10 from "@/assets/gallery10.jpeg";
import gallery01 from "@/assets/gallery01.jpeg";
import gallery02 from "@/assets/gallery02.jpeg";
import gallery03 from "@/assets/gallery03.jpeg";
import gallery04 from "@/assets/gallery04.jpeg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — PrimeWrap" },
      { name: "description", content: "Start a transformation. Reach the PrimeWrap studio in Dubai." },
    ],
  }),
  component: Contact,
});

const wrapOptions = [
  { id: "Kitchen", img: gallery10 },
  { id: "Doors", img: doorImg },
  { id: "Bathroom", img: gallery02 },
  { id: "Furniture", img: gallery03 },
  { id: "Walls", img: gallery04 },
  { id: "UPVC", img: gallery01 },
];

function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [preferredContact, setPreferredContact] = useState("WhatsApp");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles((prev) => [...prev, ...Array.from(e.target.files!)]);
    }
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Determine which image to show on the left
  const activeImage = hoveredService 
    ? wrapOptions.find(o => o.id === hoveredService)?.img 
    : selectedServices.length > 0 
      ? wrapOptions.find(o => o.id === selectedServices[selectedServices.length - 1])?.img
      : gallery01;

  return (
    <div className="min-h-screen bg-[#f4f3f0] text-navy font-display selection:bg-orange selection:text-white flex flex-col">
      <Header />
      <main className="flex-grow pt-32 md:pt-40 lg:pt-48 pb-24 px-6 md:px-12 max-w-[1600px] mx-auto w-full">
        
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LEFT: EDITORIAL ANCHOR */}
          <div className="lg:col-span-5 flex flex-col gap-12 lg:sticky lg:top-32">
            
            {/* Intro */}
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6">
                Start a transformation
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-semibold leading-[0.95] tracking-tighter uppercase mb-6">
                Your Space.<br />
                Your Surface.<br />
                <span className="text-gray-400">Your Next Move.</span>
              </h1>
              <p className="text-gray-600 font-light leading-relaxed max-w-md text-lg">
                Tell us about the space, select what you want transformed, and share photos if useful. Let's start the conversation.
              </p>
            </div>

            {/* Dynamic Image Window */}
            <div className="relative aspect-[4/3] w-full bg-gray-200 overflow-hidden shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeImage}
                  src={activeImage}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0 w-full h-full object-cover filter contrast-125"
                />
              </AnimatePresence>
              <div className="absolute inset-0 bg-navy/5" />
              <div className="absolute bottom-4 right-4 text-[9px] uppercase tracking-widest text-white font-semibold mix-blend-difference opacity-70">
                PrimeWrap Studio UAE
              </div>
            </div>

            {/* Editorial Contact Details */}
            <div className="flex flex-col gap-6 pt-4 border-t border-navy/10">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Direct</div>
                  <a href="tel:+971521263146" className="text-sm font-medium hover:text-orange transition-colors">+971 521263146</a>
                </div>
                <div>
                  <div className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Email</div>
                  <a href="mailto:hello@primewrap.ae" className="text-sm font-medium hover:text-orange transition-colors">hello@primewrap.ae</a>
                </div>
                <div className="col-span-2">
                  <div className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold mb-1">Studio</div>
                  <div className="text-sm font-medium">Al Quoz, Dubai — UAE</div>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT: THE STUDIO DESK (FORM) */}
          <div className="lg:col-span-7 w-full max-w-2xl">
            <form action="https://formsubmit.co/Rihan@primewrap.ae" method="POST" encType="multipart/form-data" className="flex flex-col gap-16 lg:gap-24">
              
              <FormSubmitFields subject="New PrimeWrap Project Enquiry" />
              <input type="hidden" name="Selected Services" value={selectedServices.join(", ") || "Not specified"} />
              <input type="hidden" name="Preferred Contact" value={preferredContact} />

              {/* 01 ABOUT YOU */}
              <div className="flex flex-col gap-8">
                <div className="border-b border-navy/10 pb-4 flex items-baseline gap-4">
                  <span className="text-orange font-semibold">01</span>
                  <h2 className="text-2xl font-semibold uppercase tracking-tight">About You</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-8">
                  <div className="group relative">
                    <input type="text" name="name" id="name" required placeholder=" "
                      className="peer w-full bg-transparent border-b border-navy/20 py-2 text-navy text-lg focus:outline-none focus:border-orange transition-colors rounded-none placeholder-transparent"
                    />
                    <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-semibold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange peer-focus:text-[10px]">
                      Full Name
                    </label>
                  </div>

                  <div className="group relative">
                    <input type="tel" name="phone" id="phone" required placeholder=" "
                      className="peer w-full bg-transparent border-b border-navy/20 py-2 text-navy text-lg focus:outline-none focus:border-orange transition-colors rounded-none placeholder-transparent"
                    />
                    <label htmlFor="phone" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-semibold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange peer-focus:text-[10px]">
                      Phone Number
                    </label>
                  </div>

                  <div className="group relative md:col-span-2">
                    <input type="email" name="email" id="email" required placeholder=" "
                      className="peer w-full bg-transparent border-b border-navy/20 py-2 text-navy text-lg focus:outline-none focus:border-orange transition-colors rounded-none placeholder-transparent"
                    />
                    <label htmlFor="email" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-semibold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange peer-focus:text-[10px]">
                      Email Address
                    </label>
                  </div>
                </div>
              </div>

              {/* 02 THE SURFACE */}
              <div className="flex flex-col gap-8">
                <div className="border-b border-navy/10 pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-orange font-semibold">02</span>
                    <h2 className="text-2xl font-semibold uppercase tracking-tight">What are you transforming?</h2>
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold ml-8 md:ml-0">Select all that apply</span>
                </div>
                
                <div className="flex flex-col">
                  {wrapOptions.map((option, idx) => {
                    const isSelected = selectedServices.includes(option.id);
                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => toggleService(option.id)}
                        onMouseEnter={() => setHoveredService(option.id)}
                        onMouseLeave={() => setHoveredService(null)}
                        className={`group relative flex items-center justify-between py-5 border-b border-navy/5 transition-all duration-300 ${isSelected ? 'pl-4 pr-4 bg-white shadow-lg border-transparent z-10' : 'hover:pl-2'}`}
                      >
                        <div className="flex items-center gap-6">
                          <span className={`text-[10px] font-semibold tracking-widest transition-colors ${isSelected ? 'text-orange' : 'text-gray-400'}`}>
                            0{idx + 1}
                          </span>
                          <span className={`text-xl md:text-3xl uppercase tracking-tight transition-colors ${isSelected ? 'font-semibold text-navy' : 'font-light text-gray-500 group-hover:text-navy'}`}>
                            {option.id}
                          </span>
                        </div>
                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${isSelected ? 'border-orange bg-orange' : 'border-gray-300 group-hover:border-navy'}`}>
                          {isSelected && <Check className="w-3 h-3 text-white" strokeWidth={3} />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 03 TELL US MORE */}
              <div className="flex flex-col gap-8">
                <div className="border-b border-navy/10 pb-4 flex items-baseline gap-4">
                  <span className="text-orange font-semibold">03</span>
                  <h2 className="text-2xl font-semibold uppercase tracking-tight">Tell us more</h2>
                </div>
                
                <div className="group relative">
                  <textarea name="message" id="message" placeholder=" " rows={3}
                    className="peer w-full bg-transparent border-b border-navy/20 py-2 text-navy text-lg focus:outline-none focus:border-orange transition-colors rounded-none placeholder-transparent resize-none"
                  />
                  <label htmlFor="message" className="absolute left-0 -top-3.5 text-gray-400 text-[10px] font-semibold uppercase tracking-widest transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-orange peer-focus:text-[10px]">
                    Project details (Optional)
                  </label>
                </div>
              </div>

              {/* 04 SHOW US THE SPACE */}
              <div className="flex flex-col gap-8">
                <div className="border-b border-navy/10 pb-4 flex flex-col md:flex-row md:items-baseline md:justify-between gap-2">
                  <div className="flex items-baseline gap-4">
                    <span className="text-orange font-semibold">04</span>
                    <h2 className="text-2xl font-semibold uppercase tracking-tight">Show us the space</h2>
                  </div>
                  <span className="text-[10px] text-gray-400 uppercase tracking-widest font-semibold ml-8 md:ml-0">Optional Photos</span>
                </div>
                
                <label 
                  onDragEnter={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDragLeave={(e) => { e.preventDefault(); setIsDragging(false); }}
                  onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                  onDrop={(e) => {
                    e.preventDefault();
                    setIsDragging(false);
                    if (e.dataTransfer.files) {
                      setFiles((prev) => [...prev, ...Array.from(e.dataTransfer.files!)]);
                    }
                  }}
                  className={`relative flex flex-col items-center justify-center py-12 px-6 border-2 border-dashed transition-all duration-300 cursor-pointer text-center ${isDragging ? 'border-orange bg-orange/5' : 'border-navy/15 hover:border-orange hover:bg-white'}`}
                >
                  <input type="file" name="attachment" className="hidden" multiple accept="image/*" onChange={handleFileChange} ref={fileInputRef} />
                  <div className="text-lg font-medium mb-1">Drag your photos here</div>
                  <div className="text-sm font-light text-gray-500">or click to browse from device</div>
                </label>

                {/* Uploaded Thumbnails */}
                {files.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {files.map((file, idx) => (
                      <div key={idx} className="relative aspect-square rounded-md overflow-hidden bg-gray-200 border border-navy/10 group">
                        <img 
                          src={URL.createObjectURL(file)} 
                          alt="Upload preview" 
                          className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          onLoad={(e) => URL.revokeObjectURL((e.target as HTMLImageElement).src)}
                        />
                        <button 
                          type="button" 
                          onClick={(e) => { e.preventDefault(); removeFile(idx); }}
                          className="absolute top-2 right-2 w-6 h-6 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-500 transition-colors"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* 05 HOW SHOULD WE CONTACT YOU? */}
              <div className="flex flex-col gap-8">
                <div className="border-b border-navy/10 pb-4 flex items-baseline gap-4">
                  <span className="text-orange font-semibold">05</span>
                  <h2 className="text-2xl font-semibold uppercase tracking-tight">The Conversation</h2>
                </div>
                
                <div className="flex gap-8">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${preferredContact === 'WhatsApp' ? 'border-orange bg-orange' : 'border-gray-300 group-hover:border-navy'}`}>
                      {preferredContact === 'WhatsApp' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-lg font-medium">WhatsApp</span>
                    <input type="radio" name="contact" value="WhatsApp" checked={preferredContact === 'WhatsApp'} onChange={(e) => setPreferredContact(e.target.value)} className="hidden" />
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${preferredContact === 'Phone Call' ? 'border-orange bg-orange' : 'border-gray-300 group-hover:border-navy'}`}>
                      {preferredContact === 'Phone Call' && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className="text-lg font-medium">Phone Call</span>
                    <input type="radio" name="contact" value="Phone Call" checked={preferredContact === 'Phone Call'} onChange={(e) => setPreferredContact(e.target.value)} className="hidden" />
                  </label>
                </div>
              </div>

              {/* PROJECT SUMMARY & CTA */}
              <div className="pt-8 border-t border-navy/10">
                
                {/* Live Summary */}
                <div className="bg-[#142346] text-white p-6 md:p-8 mb-8 shadow-2xl">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-6">
                    Project Summary
                  </div>
                  <div className="flex flex-col gap-4 text-sm font-light">
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-400">Surfaces</span>
                      <span className="font-medium text-right max-w-[200px]">{selectedServices.length > 0 ? selectedServices.join(", ") : "None selected"}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-3">
                      <span className="text-gray-400">Media</span>
                      <span className="font-medium">{files.length} Photos attached</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-gray-400">Contact Method</span>
                      <span className="font-medium">{preferredContact}</span>
                    </div>
                  </div>
                </div>

                <button type="submit" className="group relative w-full bg-navy text-white py-6 overflow-hidden flex items-center justify-center gap-4 hover:bg-navy/90 transition-colors">
                  <span className="text-lg font-semibold uppercase tracking-widest relative z-10">Start the conversation</span>
                  <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-2 transition-transform" />
                  <div className="absolute inset-0 bg-orange translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                </button>
                
              </div>
            </form>
          </div>
        </div>

      </main>

      {/* WHAT HAPPENS NEXT? */}
      <section className="bg-white py-24 px-6 md:px-12 border-t border-navy/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start justify-between gap-16">
          <div className="md:w-1/3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange mb-4">
              What Happens Next?
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold uppercase tracking-tight leading-none">
              The Process.
            </h2>
          </div>
          <div className="md:w-2/3 grid sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-light text-gray-300">01</span>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-navy">You tell us about the space</h3>
              <p className="text-sm font-light text-gray-500 leading-relaxed">Fill out the project details and share photos of the surfaces you want to transform.</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-light text-gray-300">02</span>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-navy">We understand the scope</h3>
              <p className="text-sm font-light text-gray-500 leading-relaxed">Our team reviews your submission to ensure we can achieve the best possible result.</p>
            </div>
            <div className="flex flex-col gap-4">
              <span className="text-2xl font-light text-gray-300">03</span>
              <h3 className="text-sm font-semibold uppercase tracking-widest text-navy">We continue the conversation</h3>
              <p className="text-sm font-light text-gray-500 leading-relaxed">We will reach out via your preferred method to discuss options, pricing, and next steps.</p>
            </div>
          </div>
        </div>
      </section>

      <FloatingWhatsApp />
    </div>
  );
}

export default Contact;