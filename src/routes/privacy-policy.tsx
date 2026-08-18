import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { buildLinks, buildMetaTags, pageMeta } from "@/lib/seo";
import { PAGE_TOP } from "@/lib/layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => {
    const meta = pageMeta("/privacy-policy");
    return { meta: buildMetaTags(meta), links: buildLinks("/privacy-policy") };
  },
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="px-6 py-16 md:px-12 md:py-24">
          <div className="mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none prose-p:text-navy/60 prose-p:font-light prose-p:leading-relaxed prose-headings:text-navy prose-headings:font-semibold prose-headings:uppercase prose-headings:tracking-tight prose-li:text-navy/60 prose-li:font-light prose-a:text-orange hover:prose-a:text-navy transition-colors">
              <p className="text-xl md:text-2xl text-navy/80 font-normal mb-12 leading-snug">
                At PrimeWrap, accessible from our website, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by PrimeWrap and how we use it.
              </p>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">Information We Collect</h2>
              <p className="mb-6">
                The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
              </p>
              <p className="mb-10">
                If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
              </p>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">How We Use Your Information</h2>
              <ul className="list-disc pl-6 mb-10 space-y-3">
                <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
              </ul>
              
              <h2 className="text-2xl md:text-3xl mt-16 mb-6">Contact Us</h2>
              <p className="mb-10">
                If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at <a href="mailto:Rihan@primewrap.ae" className="font-semibold text-orange no-underline border-b border-orange hover:text-navy hover:border-navy transition-colors">Rihan@primewrap.ae</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
