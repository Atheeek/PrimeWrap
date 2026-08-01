import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white relative md:sticky md:bottom-0 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-40">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-4 gap-10">
        
        {/* Column 1: Brand & Socials */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-xl text-navy font-semibold">Wrap It</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            A premier vinyl wrapping and interior transformation studio based in Dubai. We turn everyday spaces into breathtaking experiences.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Facebook className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Instagram className="w-4 h-4" /></a>
            <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Linkedin className="w-4 h-4" /></a>
          </div>
        </div>

        {/* Column 2: Sitemap */}
        <div>
          <h4 className="text-navy font-semibold mb-4">Sitemap</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-orange">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-orange">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-navy font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Kitchen Wrapping</li>
            <li>Door Wrapping</li>
            <li>Bathroom Wrapping</li>
            <li>Furniture Wrapping</li>
            <li>Commercial Wrapping</li>
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div>
          <h4 className="text-navy font-semibold mb-4">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" /> Al Quoz, Dubai — UAE</li>
            <li className="flex gap-2"><Mail className="w-4 h-4 text-orange shrink-0 mt-0.5" /> hello@yallawrapit.ae</li>
            <li className="flex gap-2"><Phone className="w-4 h-4 text-orange shrink-0 mt-0.5" /> +971 00 000 0000</li>
          </ul>
        </div>
        
      </div>
      
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        © 2026 Wrap It. All rights reserved. Designed with care.
      </div>
    </footer>
  );
}

// import { Link } from "@tanstack/react-router";
// import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

// export function Footer() {
//   return (
//     <footer className="bg-white sticky bottom-0 max-h-[50vh] overflow-y-auto shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1)] z-40">
//       <div className="max-w-7xl mx-auto px-6 py-10 md:py-14 grid md:grid-cols-4 gap-10">
        
//         {/* Column 1: Brand & Socials */}
//         <div>
//           <div className="flex items-center gap-2 mb-4">
//             <span className="font-display text-xl text-navy font-semibold">Wrap It</span>
//           </div>
//           <p className="text-sm text-muted-foreground leading-relaxed">
//             A premier vinyl wrapping and interior transformation studio based in Dubai. We turn everyday spaces into breathtaking experiences.
//           </p>
//           <div className="flex gap-3 mt-4">
//             <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Facebook className="w-4 h-4" /></a>
//             <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Instagram className="w-4 h-4" /></a>
//             <a href="#" className="w-9 h-9 rounded-full bg-navy text-white flex items-center justify-center hover:bg-orange transition"><Linkedin className="w-4 h-4" /></a>
//           </div>
//         </div>

//         {/* Column 2: Sitemap */}
//         <div>
//           <h4 className="text-navy font-semibold mb-4">Sitemap</h4>
//           <ul className="space-y-2 text-sm text-muted-foreground">
//             <li><Link to="/" className="hover:text-orange">Home</Link></li>
//             <li><Link to="/about" className="hover:text-orange">About Us</Link></li>
//             <li><Link to="/services" className="hover:text-orange">Services</Link></li>
//             <li><Link to="/gallery" className="hover:text-orange">Gallery</Link></li>
//             <li><Link to="/contact" className="hover:text-orange">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Column 3: Services */}
//         <div>
//           <h4 className="text-navy font-semibold mb-4">Services</h4>
//           <ul className="space-y-2 text-sm text-muted-foreground">
//             <li>Kitchen Wrapping</li>
//             <li>Door Wrapping</li>
//             <li>Bathroom Wrapping</li>
//             <li>Furniture Wrapping</li>
//             <li>Commercial Wrapping</li>
//           </ul>
//         </div>

//         {/* Column 4: Reach Us */}
//         <div>
//           <h4 className="text-navy font-semibold mb-4">Reach Us</h4>
//           <ul className="space-y-3 text-sm text-muted-foreground">
//             <li className="flex gap-2"><MapPin className="w-4 h-4 text-orange shrink-0 mt-0.5" /> Al Quoz, Dubai — UAE</li>
//             <li className="flex gap-2"><Mail className="w-4 h-4 text-orange shrink-0 mt-0.5" /> hello@yallawrapit.ae</li>
//             <li className="flex gap-2"><Phone className="w-4 h-4 text-orange shrink-0 mt-0.5" /> +971 00 000 0000</li>
//           </ul>
//         </div>
        
//       </div>
      
//       <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
//         © 2026 Wrap It. All rights reserved. Designed with care.
//       </div>
//     </footer>
//   );
// }