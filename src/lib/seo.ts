export const SITE_URL = "https://primewrap.ae";
export const SITE_NAME = "PrimeWrap";
export const SITE_TAGLINE = "Wrap • Refine • Transform";
export const SITE_DESCRIPTION =
  "PrimeWrap is the UAE's premier vinyl wrapping studio in Dubai. Best kitchen, door, bathroom & furniture wrap services across Dubai, Abu Dhabi & the UAE. Fire-safe, luxury finishes.";
export const SITE_KEYWORDS =
  "best wrap UAE, vinyl wrapping Dubai, kitchen wrap UAE, door wrapping Dubai, bathroom wrap UAE, furniture wrapping Dubai, interior wrap Abu Dhabi, PrimeWrap";
export const SITE_PHONE = "+971501234567";
export const SITE_EMAIL = "Rihan@primewrap.ae";
export const SITE_ADDRESS = "Al Quoz, Dubai, United Arab Emirates";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  keywords?: string;
};

export const pages: PageMeta[] = [
  {
    title: "Best Vinyl Wrapping in UAE | PrimeWrap Dubai",
    description:
      "Looking for the best wrap in UAE? PrimeWrap delivers premium vinyl wrapping for kitchens, doors, bathrooms & furniture across Dubai and the UAE. Book a free consultation.",
    path: "/",
    keywords: "best wrap UAE, best vinyl wrap Dubai, kitchen wrapping UAE",
  },
  {
    title: "About PrimeWrap | UAE's Premier Vinyl Wrapping Studio",
    description:
      "Meet PrimeWrap — Dubai's trusted vinyl wrapping experts. Craft, care and luxury finishes for homes and businesses across the UAE.",
    path: "/about",
  },
  {
    title: "Vinyl Wrapping Services in UAE | PrimeWrap",
    description:
      "Full-service vinyl wrapping in Dubai & UAE: kitchens, doors, bathrooms, furniture, wardrobes & commercial spaces. Fire-safe, premium materials.",
    path: "/services",
    keywords: "vinyl wrapping services UAE, kitchen wrap Dubai, door wrap UAE",
  },
  {
    title: "Gallery | PrimeWrap Vinyl Wrapping Projects in UAE",
    description:
      "Browse PrimeWrap's portfolio of vinyl wrapping transformations across Dubai and the UAE — kitchens, bathrooms, doors and more.",
    path: "/gallery",
  },
  {
    title: "Contact PrimeWrap | Book a Vinyl Wrap Consultation in UAE",
    description:
      "Contact PrimeWrap for a free vinyl wrapping quote in Dubai or anywhere in the UAE. Call, WhatsApp or book a site visit today.",
    path: "/contact",
  },
  {
    title: "Thank You | PrimeWrap",
    description: "Your inquiry has been received. The PrimeWrap team will get back to you shortly.",
    path: "/thank-you",
  },
  {
    description: "PrimeWrap privacy policy — how we collect, use and protect your personal information.",
    path: "/privacy-policy",
  },
  {
    title: "Terms & Conditions | PrimeWrap",
    description: "Terms and conditions for using PrimeWrap's website and vinyl wrapping services in the UAE.",
    path: "/terms-and-conditions",
  },
];

export function pageMeta(path: string): PageMeta {
  return pages.find((p) => p.path === path) ?? pages[0];
}

export function buildMetaTags(meta: PageMeta) {
  const url = `${SITE_URL}${meta.path === "/" ? "" : meta.path}`;
  return [
    { title: meta.title },
    { name: "description", content: meta.description },
    { name: "keywords", content: meta.keywords ?? SITE_KEYWORDS },
    { name: "author", content: SITE_NAME },
    { name: "robots", content: "index, follow" },
    { name: "geo.region", content: "AE-DU" },
    { name: "geo.placename", content: "Dubai, United Arab Emirates" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:title", content: meta.title },
    { property: "og:description", content: meta.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:locale", content: "en_AE" },
    { property: "og:image", content: `${SITE_URL}/logo.png` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: meta.title },
    { name: "twitter:description", content: meta.description },
    { name: "twitter:image", content: `${SITE_URL}/logo.png` },
  ];
}

export function buildLinks(path: string) {
  const canonical = `${SITE_URL}${path === "/" ? "" : path}`;
  return [{ rel: "canonical", href: canonical }];
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/logo.png`,
  telephone: SITE_PHONE,
  email: SITE_EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Al Quoz",
    addressLocality: "Dubai",
    addressRegion: "Dubai",
    addressCountry: "AE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 25.1304,
    longitude: 55.2397,
  },
  areaServed: [
    { "@type": "City", name: "Dubai" },
    { "@type": "City", name: "Abu Dhabi" },
    { "@type": "Country", name: "United Arab Emirates" },
  ],
  priceRange: "$$",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Vinyl Wrapping Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kitchen Wrapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Door Wrapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bathroom Wrapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Wrapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Wrapping" } },
    ],
  },
};
