import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source 
          src="https://pub-94b60e1c01de476ca12f24951caa24bd.r2.dev/6312631-hd_1920_1080_25fps.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/20 z-10" />

      {/* Main Content - Naturally centered by flexbox, no padding hacks needed */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 pt-60 sm:pt-6 md:pt-50">
        <div className="max-w-xl text-white">
          
        

          <h1 className="text-4xl sm:text-5xl md:text-[4rem] font-bold leading-[1.1] tracking-tight">
           Elevate Your Space,

          </h1>
          
          <div 
            className="text-[3rem] sm:text-[4rem] md:text-[5.5rem] text-[#F39C4B] mt-[-10px] sm:mt-[-15px] md:mt-[-25px] ml-2 sm:ml-4 md:ml-8 transform -rotate-2 drop-shadow-md select-none"
            style={{ fontFamily: "'Great Vibes', cursive, 'Brush Script MT'" }}
          >
            Elegantly
          </div>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl text-gray-300 max-w-md leading-relaxed">
             From kitchens and cabinets to commercial interiors, we transform spaces
  with premium vinyl wraps—fast, affordable, and built to last.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <button className="px-6 sm:px-8 py-3.5 bg-[#F39C4B] hover:bg-[#e0893b] text-white rounded-xl font-bold text-sm sm:text-base transition-all duration-300  hover:-translate-y-0.5 active:scale-95">
              Book A Viewing
            </button>
          </div>
        </div>
      </div>

      {/* Floating Icons */}
      {/* <div className="absolute bottom-6 left-4 sm:left-6 z-30">
        <a 
          href="tel:+1234567890" 
          aria-label="Call Us"
          className="flex items-center justify-center w-12 h-12 bg-[#66C65C] rounded-xl hover:bg-green-600 transition-all duration-300 shadow-lg hover:scale-110 active:scale-95"
        >
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/>
          </svg>
        </a>
      </div> */}

      {/* <div className="absolute bottom-6 right-4 sm:right-6 z-30">
        <a 
          href="https://wa.me/1234567890" 
          aria-label="Chat on WhatsApp"
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full hover:bg-green-600 transition-all duration-300 shadow-lg border-2 border-white hover:scale-110 active:scale-95"
        >
          <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div> */}
    </section>
  );
};

export default Hero;