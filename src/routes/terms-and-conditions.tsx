import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { buildLinks, buildMetaTags, pageMeta } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => {
    const meta = pageMeta("/terms-and-conditions");
    return { meta: buildMetaTags(meta), links: buildLinks("/terms-and-conditions") };
  },
  component: TermsAndConditions,
});

function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1">
        <section className={`${PAGE_TOP} bg-[#efeeea] px-6 pb-16 md:px-12 md:pb-24 border-b border-navy/5`}>
          <div className="mx-auto max-w-4xl pt-12">
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-orange mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-orange" />
              Legal
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.9] tracking-tighter uppercase text-navy">
              Terms & Conditions
            </h1>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none prose-p:text-navy/60 prose-p:font-light prose-p:leading-relaxed prose-headings:text-navy prose-headings:font-semibold prose-headings:uppercase prose-headings:tracking-tight prose-li:text-navy/60 prose-li:font-light prose-a:text-orange hover:prose-a:text-navy transition-colors">
              <p className="text-xl md:text-2xl text-navy/80 font-normal mb-12 leading-snug">
                Welcome to PrimeWrap! These terms and conditions outline the rules and regulations for the use of PrimeWrap's Website, located at primewrap.ae.
              </p>
              
              <p className="mb-10">
                By accessing this website we assume you accept these terms and conditions. Do not continue to use PrimeWrap if you do not agree to take all of the terms and conditions stated on this page.
              </p>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">License</h2>
              <p className="mb-10">
                Unless otherwise stated, PrimeWrap and/or its licensors own the intellectual property rights for all material on PrimeWrap. All intellectual property rights are reserved. You may access this from PrimeWrap for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">Services and Warranties</h2>
              <p className="mb-10">
                All wrapping services provided by PrimeWrap are subject to our standard service agreements. Any warranties on materials (such as vinyl wraps) are provided in accordance with the manufacturer's terms and will be detailed in your service contract.
              </p>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">Modifications to the Service and Prices</h2>
              <p className="mb-6">
                Prices for our products and services are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
              </p>
              <p className="mb-10">
                If you have any questions about these Terms, please contact us at <a href="mailto:Rihan@primewrap.ae" className="font-semibold text-orange no-underline border-b border-orange hover:text-navy hover:border-navy transition-colors">Rihan@primewrap.ae</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
