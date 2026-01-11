import { Link } from "@tanstack/react-router"
import { ScrollLink } from "../utils/ScrollLink"

function Nav() {
  return (

   <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center">
                <Link to='/'>
                    <img src="full-logo-text.png" alt="Vendata Solutions Logo" className="logo-light h-14" />
                    <img src="full-logo-text-dark.png" alt="Vendata Solutions Logo" className="logo-dark h-14" />
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 font-bold text-v-navy/70">
                <ScrollLink to="/" hash="services" className="hover:text-v-gold transition">Services</ScrollLink>
                <Link to="/about" className="hover:text-v-gold transition">About</Link>
                <Link to="/contact" className="btn-gold px-6 py-2.5 rounded-lg text-sm">Start Working Smarter</Link>
            </div>
        </div>
    </nav>
  )
}

export default Nav