import { RefObject, useEffect, useRef } from "react"
import { ScrollLink } from "../../reusable/ScrollLink"
import { useModalClose } from "../../../hooks/useModal"
import { OrbitToggle, ThemeButton } from "../../reusable/ThemeBtn"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUserLock } from "@fortawesome/free-solid-svg-icons"

interface MobileMenuProps {
  open: boolean
  onClose: () => void,
}

export const MobileMenu = ({ open, onClose }: MobileMenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null)

    useModalClose(menuRef, open, onClose, true);

    useEffect(()=>{

    const handleScroll = (event: Event) => {
      onClose();
    }

    // Delay prevents the "Open" click from immediately triggering the close
      document.addEventListener("scroll", handleScroll)


    return () => {
      document.removeEventListener("scroll", handleScroll)
    }
  }, [])


  return (
    <div
      ref={menuRef}
      className={`min-[1020px]:hidden bg-white border-t border-b border-gray-500 overflow-hidden transition-all duration-300 ${
        open ? "max-h-fit opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="flex flex-col gap-6 px-6 py-8 font-bold text-v-navy/80">
        <ScrollLink to="/about" onClick={onClose} className="hover:text-(--v-gold)">
          About
        </ScrollLink>
        <ScrollLink to="/toolbox" onClick={onClose} className="hover:text-(--v-gold) transition">
          Toolbox
        </ScrollLink>
        <ScrollLink to="/services" onClick={onClose} className="hover:text-(--v-gold)">
          Services
        </ScrollLink>
        <ScrollLink to="/showcase" onClick={onClose} className="hover:text-(--v-gold) transition">
          Showcase
        </ScrollLink>
       
        <ScrollLink to="/intel" onClick={onClose} className="hover:text-(--v-gold) transition">
          Intel
        </ScrollLink>

        <ScrollLink
          to="/services/diagnostics"
          onClick={onClose}
          className="btn-gold px-3 py-3 rounded-lg text-center text-sm"
        >
         Work with Vendata
        </ScrollLink>
        <div className="w-full flex justify-center h-10 ">
          <ScrollLink 
              to="/auth" 
              onClick={onClose}
          >
            <FontAwesomeIcon icon={faUserLock} className="text-lg opacity-80 group-hover:opacity-100 dark:text-(--v-gold)" />
          </ScrollLink>
        </div>
      </div>
    </div>
  )
}