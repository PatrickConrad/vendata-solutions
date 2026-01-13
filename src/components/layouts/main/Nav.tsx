import { Link } from "@tanstack/react-router"
import { useState } from "react"
import { MobileMenu } from "./MobileMenu"
import { DesktopMenu } from "./DesktopMenu"
import { MobileMenuBtn } from "./MobileMenuBtn"

function Nav() {
    const [open, setOpen] = useState(false)
  return (

    <nav className="fixed w-full z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={()=>setOpen(false)}>
          <img src="/nb-logo-w-text.png" alt="Vendata Solutions Logo" className="h-15" />
        </Link>

        {/* Desktop Menu */}
        <DesktopMenu />

        {/* Hamburger Button (Mobile) */}
          <MobileMenuBtn open={open} setOpen={()=>setOpen(prev=>!prev)}/>
      </div>

      {/* Mobile Menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </nav>
  )
}

export default Nav