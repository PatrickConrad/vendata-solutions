import { Link } from "@tanstack/react-router";
import { SocialBar } from "../../reusable/SocialBar";
import { FooterResources } from "./Footer.resources";
import { FooterCompany } from "./Footer.company";
import { FooterContact } from "./Footer.contact";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      {/* Container to keep content aligned with your Header/Main sections */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col">

       <div className="w-full flex flex-col gap-4 text-center order-1 md:pt-10 md:order-2">
          <h3 className="text-(--v-gold) text-md font-semibold mb-2 uppercase tracking-wider md:text-xl">VenData Solutions</h3>
          <p className="text-sm md:text-lg leading-relaxed w-full">
            Data-driven systems, automation, and AI solutions for modern businesses.
          </p>
        </div>
        {/* Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-evenly md:gap-24 order-2 md:order-1">
           
            <FooterCompany className="pt-10 md:pt-0 text-center order-1"/>
            <FooterContact className="pt-10 md:pt-0 text-center order-3 md:order-2" />

            {/* Resources */}
            <FooterResources className="pt-10 md:pt-0 text-center order-2 md:order-3"/>
        </div>
      
       
       
        <SocialBar className="flex order-3 pt-10" />


      </div>

      {/* Bottom Bar */}
      <div className="w-full mx-auto">
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} VenData Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}