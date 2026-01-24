import { useEffect, RefObject } from "react"

export function useModalClose(
  ref: RefObject<HTMLElement | null>,
  isOpen: boolean,
  onClose: () => void,
  isNavMenu: boolean = false // Toggle logic for the Nav specific check
) {
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (!ref.current) return

      const target = event.target as Node
      const rect = ref.current.getBoundingClientRect()

      if (isNavMenu) {
        // NAV LOGIC: Only close if the click is BELOW the menu bottom
        // This ignores the header and the menu itself
        if (event.clientY > rect.bottom) {
          onClose()
        }
      } else {
        // MODAL LOGIC: Standard outside click
        if (!ref.current.contains(target)) {
          onClose()
        }
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose()
    }

    const handleScroll = (event: Event) => onClose();

    // Delay prevents the "Open" click from immediately triggering the close
      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleEscape)
      document.addEventListener("scroll", handleScroll)


    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
      document.removeEventListener("scroll", handleScroll)
    }
  }, [isOpen, onClose, ref, isNavMenu])
}