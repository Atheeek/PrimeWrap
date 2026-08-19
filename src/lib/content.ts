import bathroom from "@/assets/banner-bathroom.jpeg";
import doors from "@/assets/door_dark.jpeg";
import kitchen from "@/assets/banner-kitchen.jpeg";
import wardrobe from "@/assets/Wardrobe.jpeg";
import furniture from "@/assets/gallery-kitchen-2.jpeg";
import appliances from "@/assets/appliances-wrap.jpg";
import windowframes from "@/assets/gallery-bathroom-1.jpeg";

export type ServiceContent = {
  slug: string;
  type: "residential" | "commercial";
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  benefits: string[];
  idealFor: string[];
};

export const services: ServiceContent[] = [
  // --- RESIDENTIAL ---
  {
    slug: "kitchen-wrapping",
    type: "residential",
    title: "Kitchens",
    eyebrow: "Culinary spaces",
    summary: "Refresh cabinet fronts, islands and splashbacks without the disruption of a full kitchen replacement.",
    description: "Our kitchen wrapping service gives tired cabinetry a tailored new finish while preserving the layout you already love. We prepare each surface carefully and use architectural films selected for everyday kitchen life.",
    image: kitchen,
    benefits: [
      "A considered alternative to replacement",
      "A wide choice of contemporary finishes",
      "Designed for a clean, low-disruption installation",
    ],
    idealFor: ["Cabinet fronts", "Kitchen islands", "Pantries and utility units"],
  },
  {
    slug: "furniture-wrapping",
    type: "residential",
    title: "Furniture",
    eyebrow: "Asset renewal",
    summary: "Extend the life of valued furniture with a finish that feels intentional and current.",
    description: "Whether it is a built-in unit or a favourite piece at home, furniture wrapping can turn a worn surface into a design feature. Each recommendation is guided by the material, use and desired look.",
    image: furniture,
    benefits: [
      "Refreshes existing assets",
      "Supports sustainable home updates",
      "Offers consistent colour and texture across pieces",
    ],
    idealFor: ["Cabinets and sideboards", "Built-in joinery", "Wardrobes"],
  },
  {
    slug: "bathroom-wrapping",
    type: "residential",
    title: "Bathrooms",
    eyebrow: "Moisture-aware finishes",
    summary: "Create a more refined bathroom look by updating vanity units, cabinetry and selected surfaces.",
    description: "A bathroom upgrade does not always require a full renovation. PrimeWrap helps refresh compatible vanity and storage surfaces with a detail-led installation and finishes selected for the space.",
    image: bathroom,
    benefits: [
      "A practical cosmetic refresh",
      "Spa-inspired stone, wood and matte looks",
      "Minimal disruption compared with replacement",
    ],
    idealFor: ["Vanity units", "Storage cabinets", "Selected decorative panels"],
  },
  {
    slug: "door-wrapping",
    type: "residential",
    title: "Doors",
    eyebrow: "Surface detail",
    summary: "Give internal doors, frames and feature panels a cohesive, high-end finish.",
    description: "Door wrapping is a fast way to bring the joinery in a property into one visual language. From subtle timber tones to calm mattes, our finish options help refresh a room without replacing its doors.",
    image: doors,
    benefits: [
      "Renews worn or dated doors",
      "Coordinates rooms with one finish palette",
      "Avoids unnecessary replacement waste",
    ],
    idealFor: ["Internal doors", "Door frames", "Wardrobe doors"],
  },
  {
    slug: "walls-panels-wrapping",
    type: "residential",
    title: "Walls Panels",
    eyebrow: "Architectural focus",
    summary: "Transform feature walls and interior panels with premium textured films.",
    description: "Instead of traditional paint or wallpaper, our architectural films provide a highly durable, textured, or smooth finish for your interior walls and paneling, immediately elevating the aesthetic of any room.",
    image: windowframes,
    benefits: [
      "Instantly adds depth and texture",
      "Durable and easy to maintain",
      "Seamless integration with existing decor",
    ],
    idealFor: ["Feature walls", "Headboard panels", "Living room focal points"],
  },
  {
    slug: "window-frame-wrapping",
    type: "residential",
    title: "Window Frame",
    eyebrow: "Thermal & style",
    summary: "Refine frames and selected glazing with a finish that complements the wider interior.",
    description: "Window wrapping helps unify the details that often get overlooked in an interior update. We advise on finish direction, surface suitability and a clean application plan for the space.",
    image: "https://images.unsplash.com/photo-1630368177606-471ad5e501c4?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Brings frames into the design palette",
      "Helps refresh dated details",
      "Suitable for targeted upgrades",
    ],
    idealFor: ["Interior frames", "Conservatory structures", "Patio door frames"],
  },
  {
    slug: "appliances-wrap",
    type: "residential",
    title: "Appliances Wrap",
    eyebrow: "Kitchen integration",
    summary: "Seamlessly integrate your white goods into your kitchen's design palette.",
    description: "Instead of hiding your appliances or buying new ones to match a remodel, wrapping them allows for perfect color coordination with your cabinetry and worktops, ensuring a unified kitchen design.",
    image: appliances,
    benefits: [
      "Cost-effective alternative to buying new",
      "Creates a built-in, cohesive look",
      "Protects original appliance surfaces",
    ],
    idealFor: ["Fridges & Freezers", "Dishwashers", "Washing machines"],
  },

  // --- COMMERCIAL ---
  {
    slug: "office-wrapping",
    type: "commercial",
    title: "Offices",
    eyebrow: "Corporate spaces",
    summary: "Revitalize your workspace without the downtime of a full renovation.",
    description: "Transform desks, meeting room tables, partition frames, and reception areas with our premium architectural films. We offer a swift, low-odor installation process that minimizes disruption to your business operations while maximizing aesthetic impact.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Zero downtime for your workforce",
      "Cost-effective brand alignment",
      "Durable finishes for high-traffic environments",
    ],
    idealFor: ["Desks and workstations", "Meeting room tables", "Office doors and frames"],
  },
  {
    slug: "showroom-wrapping",
    type: "commercial",
    title: "Showroom",
    eyebrow: "Retail exhibition",
    summary: "Create an immersive and premium backdrop for your products.",
    description: "First impressions are vital in a showroom. Our wrapping solutions can update display plinths, feature walls, and reception counters to reflect your brand's current identity, creating a high-end environment that elevates your merchandise.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Rapid deployment for product launches",
      "Endless customization options",
      "Premium aesthetic at a fraction of the cost",
    ],
    idealFor: ["Display units", "Feature walls", "Sales desks"],
  },
  {
    slug: "retail-wrapping",
    type: "commercial",
    title: "Retail",
    eyebrow: "Customer experience",
    summary: "Refresh your retail environment to keep customers engaged and inspired.",
    description: "The retail landscape moves fast. Keep your store looking fresh by updating cash wraps, shelving, and fitting rooms with our durable vinyl films. A cost-effective way to execute a rebrand or seasonal update across multiple locations.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Overnight installation to prevent lost sales",
      "Consistent branding across branches",
      "Hard-wearing surfaces for retail wear-and-tear",
    ],
    idealFor: ["Checkout counters", "Display shelving", "Storefront window frames"],
  },
  {
    slug: "restaurants-cafes-wrapping",
    type: "commercial",
    title: "Restaurants & Cafés",
    eyebrow: "Hospitality design",
    summary: "Update your dining atmosphere with minimal operational disruption.",
    description: "From bar fronts and tabletops to restroom vanities, our wrapping services can completely alter the mood of your hospitality venue. We use hygienic, easy-to-clean films that withstand the rigors of a busy restaurant or café.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Hygienic and easy to clean",
      "Minimal downtime for your venue",
      "Transforms ambiance instantly",
    ],
    idealFor: ["Bar fronts and counters", "Dining tables", "Washroom facilities"],
  },
  {
    slug: "hotels-wrapping",
    type: "commercial",
    title: "Hotels",
    eyebrow: "Guest experience",
    summary: "Elevate guest rooms and common areas without taking rooms out of service for weeks.",
    description: "Hotel refurbishments are traditionally costly and disruptive. Wrapping offers a swift alternative to update headboards, wardrobes, bathroom vanities, and lobby areas, maintaining your property's luxury appeal with minimal loss of revenue.",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Refurbish rooms in hours, not days",
      "Significantly reduces renovation budgets",
      "Maintains a high-end luxury feel",
    ],
    idealFor: ["Guest room furniture", "Lobby reception desks", "Elevator interiors"],
  },
  {
    slug: "salons-spas-wrapping",
    type: "commercial",
    title: "Salons & Spas",
    eyebrow: "Wellness environments",
    summary: "Create a serene and stylish environment that reflects your wellness brand.",
    description: "Aesthetic is everything in the beauty and wellness industry. Update styling stations, reception desks, and treatment room cabinetry with finishes that soothe and impress, from natural woods to calming stone effects.",
    image: "https://images.unsplash.com/photo-1600334129128-685054110230?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Water and chemical resistant options",
      "Quick updates to match beauty trends",
      "Creates a cohesive, calming atmosphere",
    ],
    idealFor: ["Styling stations", "Reception areas", "Treatment room cabinets"],
  },
  {
    slug: "reception-common-areas",
    type: "commercial",
    title: "Reception & Common Areas",
    eyebrow: "First impressions",
    summary: "Make a lasting impact from the moment clients walk through the door.",
    description: "The reception is the face of your business. We specialize in wrapping large reception desks, feature walls, and waiting area furniture to create an imposing, professional, and welcoming first impression.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "High-impact visual upgrade",
      "Cost-effective alternative to bespoke joinery",
      "Durable finishes for busy entrances",
    ],
    idealFor: ["Main reception desks", "Lobby feature walls", "Waiting area fixtures"],
  },
  {
    slug: "stair-wrap",
    type: "commercial",
    title: "Stair Wrap",
    eyebrow: "Architectural flow",
    summary: "Transform structural staircases into stunning architectural features.",
    description: "Staircases are often central to a building's design. Our wrapping films can completely change the look of stair treads, risers, and handrails, turning a functional element into a striking focal point for your commercial space.",
    image: "https://images.unsplash.com/photo-1506443314050-681b95f2d01e?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Slip-resistant finishes available",
      "Dramatic visual transformation",
      "Avoids structural replacement costs",
    ],
    idealFor: ["Main staircases", "Handrails", "Step risers"],
  },
  {
    slug: "yacht-wrap",
    type: "commercial",
    title: "Yacht Wrap",
    eyebrow: "Marine luxury",
    summary: "Refit your vessel's interior with marine-grade architectural finishes.",
    description: "Yacht interiors demand the highest quality and durability. Our specialized films are perfect for updating bulkheads, cabinetry, and tables, providing a flawless finish that withstands the marine environment without the weight and cost of traditional refits.",
    image: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=1200",
    benefits: [
      "Lightweight alternative to real wood or stone",
      "Marine-grade durability",
      "Rapid refit with zero mess or dust",
    ],
    idealFor: ["Interior bulkheads", "Galley cabinetry", "Saloon tables and doors"],
  }
];

export const getService = (slug: string) => services.find((service) => service.slug === slug);

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readingTime: string;
  image: string;
  sections: { heading: string; body: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "kitchen-wrapping-vs-replacing-cabinets",
    title: "Kitchen wrapping vs. replacing cabinets: how to choose",
    excerpt:
      "A simple framework for deciding whether a surface refresh or a full kitchen replacement better fits your space.",
    category: "Kitchen ideas",
    publishedAt: "2026-08-14",
    readingTime: "5 min read",
    image: kitchen,
    sections: [
      {
        heading: "Start with the structure",
        body: "If the cabinet boxes, hinges and layout still work well, refreshing the visible surfaces can be a more focused route. Replacement is often the better choice when storage, plumbing or the layout itself needs to change.",
      },
      {
        heading: "Think beyond the colour",
        body: "Finish affects how a kitchen feels throughout the day. Consider light, surrounding materials, maintenance and whether you want the cabinetry to blend in or become a feature.",
      },
      {
        heading: "Plan the quote around the whole scope",
        body: "Share photos, measurements and your preferred finish direction early. This helps a specialist advise on suitability and create a clearer proposal.",
      },
    ],
  },
  {
    slug: "how-to-choose-a-vinyl-wrap-finish",
    title: "How to choose a vinyl wrap finish for your home",
    excerpt:
      "From warm woods to soft mattes, learn how to build a finish palette that feels cohesive rather than trend-led.",
    category: "Design guide",
    publishedAt: "2026-08-10",
    readingTime: "4 min read",
    image: wardrobe,
    sections: [
      {
        heading: "Use the room as your reference",
        body: "Natural light, flooring, wall colour and fixed fixtures should guide the finish choice. A small sample can look very different once it sits beside the materials already in the room.",
      },
      {
        heading: "Choose contrast deliberately",
        body: "A darker wrap can add depth to a pale room, while a quiet matte can settle a space with busy stone or patterned tile. The goal is balance, not simply more texture.",
      },
      {
        heading: "Prioritise everyday use",
        body: "High-touch areas benefit from a finish and installation approach that matches their use. Discuss cleaning, edges and expected wear before committing.",
      },
    ],
  },
  {
    slug: "bathroom-vanity-refresh-ideas-dubai",
    title: "Bathroom vanity refresh ideas for a calmer, more polished space",
    excerpt:
      "Small surface changes can have an outsized impact on a bathroom—especially when they work with the fittings you already have.",
    category: "Bathroom ideas",
    publishedAt: "2026-08-05",
    readingTime: "4 min read",
    image: bathroom,
    sections: [
      {
        heading: "Let the vanity anchor the scheme",
        body: "The vanity is often the visual centre of the bathroom. A warm wood effect, clean white or mineral-inspired finish can give the room a fresh direction without changing the full layout.",
      },
      {
        heading: "Coordinate the metalwork",
        body: "Look at tapware, handles and mirrors before choosing a surface finish. A few coordinated details make a compact bathroom feel more considered.",
      },
      {
        heading: "Assess the surface first",
        body: "A professional should check compatibility and the exact areas to be refreshed. This ensures the recommendation suits the conditions of the room.",
      },
    ],
  },
  {
    slug: "refreshing-interior-doors-with-vinyl-wrap",
    title: "Refreshing interior doors with vinyl wrap: a room-by-room guide",
    excerpt:
      "Why doors deserve a place in your interior update, and how to keep the result consistent across the home.",
    category: "Home improvement",
    publishedAt: "2026-07-28",
    readingTime: "5 min read",
    image: doors,
    sections: [
      {
        heading: "Treat doors as part of the architecture",
        body: "Doors repeat throughout a home, which makes their finish surprisingly influential. Updating them can create a stronger connection between rooms.",
      },
      {
        heading: "Build a restrained palette",
        body: "One finish across every door is not the only option. A main finish with one feature treatment can create hierarchy while keeping the home visually calm.",
      },
      {
        heading: "Account for frames and hardware",
        body: "The best result considers frames, skirting and handles from the beginning. These smaller junctions are where a design often feels either intentional or unfinished.",
      },
    ],
  },
];

export const getBlogPost = (slug: string) => blogPosts.find((post) => post.slug === slug);
