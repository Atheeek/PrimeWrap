import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Reveal } from "@/components/ui/Reveal";

export const faqs = [
  {
    question: "What surfaces can be wrapped?",
    answer:
      "We assess kitchens, doors, wardrobes, furniture, selected bathroom units and other interior surfaces. Send us a few photos and we can advise on the best approach for your space.",
  },
  {
    question: "How long does a wrapping project take?",
    answer:
      "Timing depends on the size, condition and complexity of the project. After reviewing your photos or visiting the site, we provide a clear installation plan and expected timeline.",
  },
  {
    question: "Will I need to replace my existing cabinets or doors?",
    answer:
      "Not always. If the underlying structure is sound and suitable for wrapping, a surface refresh can avoid the disruption of replacement. We confirm suitability before work begins.",
  },
  {
    question: "Can I choose the finish?",
    answer:
      "Yes. We help you select a finish that complements the room, from refined mattes and wood effects to stone-inspired textures.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use the quote form to share your contact details, preferred contact method and optional photos. Our team will review the scope and get in touch.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-[#f4f3f0] px-6 py-24 md:px-12 md:py-40 border-t border-navy/5">
      <div className="mx-auto grid max-w-[1400px] gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        
        <Reveal>
          <div className="flex flex-col">
            <div className="mb-8 flex items-center gap-4">
              <span className="h-[1px] w-8 bg-orange" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-orange">
                Helpful answers
              </span>
            </div>
            <h2 className="max-w-md text-4xl md:text-5xl lg:text-6xl font-semibold leading-[0.95] tracking-tighter uppercase font-display text-navy mb-6">
              Questions, <br /> answered clearly.
            </h2>
            <p className="max-w-sm text-base font-light leading-relaxed text-gray-500">
              If your question is specific to your home or commercial space, send over photos and we
              will point you in the right direction.
            </p>
          </div>
        </Reveal>

        <div className="flex flex-col border-t border-navy/10">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <Reveal key={faq.question} delay={idx * 0.05}>
                <div className="border-b border-navy/10">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 md:py-8 text-left transition-colors group"
                  >
                    <span className={`text-xl md:text-2xl font-semibold uppercase font-display tracking-tight transition-colors duration-300 ${isOpen ? "text-orange" : "text-navy group-hover:text-orange"}`}>
                      {faq.question}
                    </span>
                    <div className={`w-10 h-10 rounded-full border flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "border-orange bg-orange text-white" : "border-navy/20 text-orange group-hover:border-orange"}`}>
                      <ChevronDown 
                        className={`h-5 w-5 transition-transform duration-500 ease-[0.16,1,0.3,1] ${isOpen ? "rotate-180" : ""}`} 
                      />
                    </div>
                  </button>
                  
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-8 pr-8 text-lg font-light leading-relaxed text-gray-500">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
