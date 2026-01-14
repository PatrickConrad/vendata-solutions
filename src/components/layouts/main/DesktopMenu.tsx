import { Link } from "@tanstack/react-router";
import { ScrollLink } from "../../reusable/ScrollLink";

export const DesktopMenu = () => (
  <div className="hidden md:flex items-center gap-8 font-bold text-v-navy/70">
    <Link to="/auth" className="hover:text-(--v-gold) transition">Clients</Link>
    <Link to="/content" className="hover:text-(--v-gold) transition">Content</Link>
    <ScrollLink to="/" hash="services" className="hover:text-(--v-gold) transition">Services</ScrollLink>
    <Link to="/about" className="hover:text-(--v-gold) transition">About</Link>
    <Link to="/consultation" className="btn-gold px-6 py-2.5 rounded-lg text-sm">Start Working Smarter</Link>
  </div>
)