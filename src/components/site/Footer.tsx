import { Link } from "@tanstack/react-router";
import { MapPin, Mail, Phone, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        
        {/* Column 1: Brand & Socials */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-display text-2xl text-[#142346] font-bold tracking-tight">Wrap It</span>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            A premier vinyl wrapping and interior transformation studio based in Dubai. We turn everyday spaces into breathtaking experiences.
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="w-10 h-10 rounded-full bg-[#142346] text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#142346] text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full bg-[#142346] text-white flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Column 2: Sitemap */}
        <div>
          <h4 className="text-[#142346] font-bold text-xs uppercase tracking-[0.2em] mb-6">Sitemap</h4>
          <ul className="space-y-3 text-sm text-gray-500 font-medium">
            <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
            <li><Link to="/gallery" className="hover:text-orange-500 transition-colors">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="text-[#142346] font-bold text-xs uppercase tracking-[0.2em] mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-gray-500 font-medium">
            <li className="hover:text-[#142346] transition-colors cursor-default">Kitchen Wrapping</li>
            <li className="hover:text-[#142346] transition-colors cursor-default">Door Wrapping</li>
            <li className="hover:text-[#142346] transition-colors cursor-default">Bathroom Wrapping</li>
            <li className="hover:text-[#142346] transition-colors cursor-default">Furniture Wrapping</li>
            <li className="hover:text-[#142346] transition-colors cursor-default">Commercial Wrapping</li>
          </ul>
        </div>

        {/* Column 4: Reach Us */}
        <div>
          <h4 className="text-[#142346] font-bold text-xs uppercase tracking-[0.2em] mb-6">Reach Us</h4>
          <ul className="space-y-4 text-sm text-gray-500 font-medium">
            <li className="flex items-start gap-3 group">
              <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" strokeWidth={1.5} /> 
              <span className="group-hover:text-[#142346] transition-colors">Al Quoz, Dubai — UAE</span>
            </li>
            <li className="flex items-center gap-3 group">
              <Mail className="w-5 h-5 text-orange-500 shrink-0" strokeWidth={1.5} /> 
              <a href="mailto:hello@yallawrapit.ae" className="group-hover:text-[#142346] transition-colors">hello@yallawrapit.ae</a>
            </li>
            <li className="flex items-center gap-3 group">
              <Phone className="w-5 h-5 text-orange-500 shrink-0" strokeWidth={1.5} /> 
              <a href="tel:+971000000000" className="group-hover:text-[#142346] transition-colors font-bold">+971 00 000 0000</a>
            </li>
          </ul>
        </div>
        
      </div>
      
      <div className="border-t border-gray-100 py-6 px-6 text-center text-xs font-semibold text-gray-400 uppercase tracking-widest">
        © {new Date().getFullYear()} Wrap It. All rights reserved. Designed with care.
      </div>
    </footer>
  );
}