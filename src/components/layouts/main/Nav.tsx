import { Link } from "@tanstack/react-router"
import { ScrollLink } from "../../../utils/ScrollLink"
import { useState } from "react"

function Nav() {
    const [open, setOpen] = useState(false)
  return (

   <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center">
                <Link to='/'>
                    <img src="nb-logo-w-text.png" alt="Vendata Solutions Logo" className="h-15" />
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 font-bold text-v-navy/70">
                <ScrollLink to="/" hash="services" className="hover:text-(--v-gold) transition">Services</ScrollLink>
                <Link to="/about" className="hover:text-(--v-gold) transition">About</Link>
                <Link to="/consultation" className="btn-gold px-6 py-2.5 rounded-lg text-sm">Start Working Smarter</Link>
            </div>

            {/* Hamburger Button (Mobile) */}
            <button
            onClick={() => setOpen(!open)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5"
            aria-label="Toggle menu"
            >
            <span className={`w-6 h-0.5 bg-v-navy transition ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-v-navy transition ${open ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-v-navy transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
        </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-6 px-6 py-8 font-bold text-v-navy/80">
          <ScrollLink
            to="/"
            hash="services"
            className="hover:text-(--v-gold)"
            onClick={() => setOpen(false)}
          >
            Services
          </ScrollLink>

          <ScrollLink
            to="/about"
            className="hover:text-(--v-gold)"
            onClick={() => setOpen(false)}
          >
            About
          </ScrollLink>

          <ScrollLink
            to="/contact"
            className="btn-gold px-3 py-3 rounded-lg text-center text-sm"
            onClick={() => setOpen(false)}
          >
            Start Working Smarter
          </ScrollLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav