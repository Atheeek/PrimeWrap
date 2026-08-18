import { useState, useEffect } from "react";

/* ---------------------------------------------------------
   Data
--------------------------------------------------------- */
const partners = [
  { id: 1, name: "Rotana", url: "https://primewrap.ae/wp-content/uploads/2023/12/5-1.png" },
  { id: 2, name: "Arabica", url: "https://primewrap.ae/wp-content/uploads/2023/12/6-1.png" },
  { id: 3, name: "EMAAR", url: "https://primewrap.ae/wp-content/uploads/2023/12/3-1.png" },
  { id: 4, name: "DAMAC", url: "https://primewrap.ae/wp-content/uploads/2023/12/4-1.png" },
  { id: 5, name: "Emirates", url: "https://primewrap.ae/wp-content/uploads/2023/12/7-1.png" },
  { id: 6, name: "Partner 6", url: "https://primewrap.ae/wp-content/uploads/2023/12/3-1.png" },
];

const TrustedPartners = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  // Handle responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => setItemsPerPage(window.innerWidth < 768 ? 2 : 5);
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalItems = partners.length;

  // Infinite Next/Prev Handlers
  const goNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const goPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  // Generate visible items circularly based on current index
  const visiblePartners = Array.from({ length: itemsPerPage }, (_, i) => {
    const index = (currentIndex + i) % totalItems;
    return partners[index];
  });

  return (
    <section className="py-6 px-2 w-full overflow-hidden bg-white/40">
      <div className="max-w-[1400px] mx-auto text-center">
        
        {/* Heading */}
        <h3 className="text-[#5a6b8c] text-lg md:text-xl font-light mb-10">
          Trusted by 800+ Partners...
        </h3>

        {/* Carousel Container */}
        <div className="flex items-center justify-between w-full relative px-2 md:px-8">
          
          {/* Left Arrow */}
          <button
            onClick={goPrev}
            aria-label="Previous partners"
            className="text-orange-400 hover:text-orange-600 transition-colors duration-200 p-2 focus:outline-none"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="currentColor">
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Logos Grid */}
          <div className="flex-1 px-4 md:px-12">
            <div 
              className={`grid gap-6 md:gap-12 items-center justify-items-center w-full transition-all duration-300 ${
                itemsPerPage === 2 ? "grid-cols-2" : "grid-cols-5"
              }`}
            >
              {visiblePartners.map((partner, idx) => (
                <div key={`${partner.id}-${idx}`} className="w-full h-20 md:h-24 flex items-center justify-center p-2">
                  <img
                    src={partner.url}
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain mix-blend-multiply opacity-80 hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={goNext}
            aria-label="Next partners"
            className="text-orange-400 hover:text-orange-600 transition-colors duration-200 p-2 focus:outline-none"
          >
            <svg viewBox="0 0 24 24" className="w-8 h-8 md:w-10 md:h-10" fill="currentColor">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>

        {/* Pagination Dots (Maps to item index) */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {partners.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-md transition-all duration-300 ${
                i === currentIndex ? "bg-orange-400 scale-110" : "bg-orange-200/60 hover:bg-orange-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustedPartners;