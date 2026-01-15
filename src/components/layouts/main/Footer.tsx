import { Link } from "@tanstack/react-router";
import { SocialBar } from "../../reusable/SocialBar";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      {/* Container to keep content aligned with your Header/Main sections */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col">

        {/* Brand - Span 1 column */}
        <div className="w-full flex flex-col gap-4 text-center">
          <h3 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">VenData Solutions</h3>
          <p className="text-sm md:text-lg leading-relaxed w-full">
            Data-driven systems, automation, and AI solutions for modern businesses.
          </p>
          {/* Moved SocialBar here or kept separate depending on your design */}
        </div>
        <br/>
        <br/>

        {/* Navigation */}
        <div className="w-full flex flex-col md:flex-row justify-center md:gap-24">
            <div className="text-center">
              <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Company</h4>
              <ul className="space-y-4 text-sm md:text-lg">
                <li><Link to="/" className="hover:text-v-gold transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-v-gold transition">About</Link></li>
                <li><Link to="/contact" className="hover:text-v-gold transition">Contact</Link></li>
                <li><Link to="/consultation" className="hover:text-v-gold transition">Book a Call</Link></li>
              </ul>
              <br/>
            </div>
            <br/>
            {/* Resources */}
            <div className="text-center">
              <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Resources</h4>
              <ul className="space-y-4 text-sm md:text-lg">
                <li><Link to="/content" className="hover:text-v-gold transition">Blog</Link></li>
                <li><Link to="/privacy" className="hover:text-v-gold transition">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-v-gold transition">Terms of Service</Link></li>
                <li><Link to="/sitemap.xml" className="hover:text-v-gold transition">Sitemap</Link></li>
              </ul>
              <br/>

            </div>

        </div>
        <br/>
        <br/>
        {/* Contact/Support Info (Fills the 4th column for balance) */}
        <div className="w-full text-center">
          <h4 className="text-(--v-gold) text-md font-semibold mb-6 uppercase tracking-wider md:text-xl">Contact</h4>
          <p className="text-sm md:text-lg leading-relaxed">
            Ready to scale?<br />
            <Link to="/consultation" className="text-v-gold hover:underline font-medium">
              Schedule a strategy call
            </Link>
          </p>
        </div>
        <br/>
        <br/>

        <SocialBar className="flex px-5 align-middle justify-center" />


      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} VenData Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  )
}