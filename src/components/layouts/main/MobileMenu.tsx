import { RefObject, useEffect, useRef } from "react"
import { ScrollLink } from "../../reusable/ScrollLink"
import { useModalClose } from "../../../hooks/useModal"

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
      className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
        open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6 px-6 py-8 font-bold text-v-navy/80">
        <ScrollLink to="/auth" onClick={onClose} className="hover:text-(--v-gold) transition">
          Clients
        </ScrollLink>
        <ScrollLink to="/insights" onClick={onClose} className="hover:text-(--v-gold) transition">
          Insights
        </ScrollLink>
        <ScrollLink to="/about" onClick={onClose} className="hover:text-(--v-gold)">
          About
        </ScrollLink>
        <ScrollLink to="/" hash="services" onClick={onClose} className="hover:text-(--v-gold)">
          Services
        </ScrollLink>
        <ScrollLink
          to="/consultation"
          onClick={onClose}
          className="btn-gold px-3 py-3 rounded-lg text-center text-sm"
        >
          Start Working Smarter
        </ScrollLink>
      </div>
    </div>
  )
}