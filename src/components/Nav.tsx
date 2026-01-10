import { Link } from "@tanstack/react-router"

function Nav() {
  return (

   <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="flex items-center">
                <Link to='/'>
                    <img src="full-logo-text.png" alt="Vendata Solutions" className="h-14" />
                </Link>
            </div>
            <div className="hidden md:flex items-center gap-8 font-bold text-v-navy/70">
                <a href="#services" className="hover:text-v-gold transition">Services</a>
                <a href="#about" className="hover:text-v-gold transition">About</a>
                <a href="#contact" className="btn-gold px-6 py-2.5 rounded-lg text-sm">Start Working Smarter</a>
            </div>
        </div>
    </nav>
  )
}

export default Nav