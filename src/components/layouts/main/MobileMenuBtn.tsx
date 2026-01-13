import { faClose, faBars } from "@fortawesome/free-solid-svg-icons";
import { ServiceIcon } from "../../services/ServiceIcon";


type MobileMenuBtnProps = {
    open: boolean,
    setOpen: () => void;
}

export const MobileMenuBtn = ({open, setOpen}: MobileMenuBtnProps) => {
  return (
    <button
          onClick={(e) => {
            e.stopPropagation()
                setOpen()
          }}
          className="md:hidden flex flex-col justify-center items-center gap-1.5"
          aria-label="Toggle menu"
        >
            <ServiceIcon icon={open?faClose:faBars} color="var(--v-navy)"/>
    </button>
  )
}
