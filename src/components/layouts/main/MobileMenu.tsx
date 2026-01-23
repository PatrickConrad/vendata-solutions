import { RefObject, useEffect, useRef } from "react"
import { ScrollLink } from "../../reusable/ScrollLink"
import { useModalClose } from "../../../hooks/useModal"
import { OrbitToggle, ThemeButton } from "../../reusable/ThemeBtn"

interface MobileMenuProps {
  open: boolean
  onClose: () => void,
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

    useModalClose(menuRef, open, onClose, true);

  return (
    <div
      ref={menuRef}
      className={`md:hidden bg-white border-t border-b border-gray-500 overflow-hidden transition-all duration-300 ${
        open ? "max-h-105 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6 px-6 py-8 font-bold text-v-navy/80">
        <ScrollLink to="/auth" onClick={onClose} className="decoration-1 hover:text-(--v-gold)">
          Login
        </ScrollLink>
        <ScrollLink to="/our-work" onClick={onClose} className="hover:text-(--v-gold) transition">
          Our Work
        </ScrollLink>
        <ScrollLink to="/insights" onClick={onClose} className="hover:text-(--v-gold) transition">
          Insights
        </ScrollLink>
        <ScrollLink to="/about" onClick={onClose} className="hover:text-(--v-gold)">
          About
        </ScrollLink>
        <ScrollLink to="/services" onClick={onClose} className="hover:text-(--v-gold)">
          Services
        </ScrollLink>
        <ScrollLink
          to="/consultation"
          onClick={onClose}
          className="btn-gold px-3 py-3 rounded-lg text-center text-sm"
        >
          Start Working Smarter
        </ScrollLink>
        <div className="w-full flex justify-center">
          <OrbitToggle />
        </div>
      </div>
    </div>
  )
}