import { Link } from "@tanstack/react-router";
import { ScrollLink } from "../../reusable/ScrollLink";
import { useEffect, useState } from "react";
import { useAppActions } from "../../../hooks/useAppActions";
import { OrbitToggle, ThemeButton } from "../../reusable/ThemeBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";

export const DesktopMenu = () => {

  
  const [toggeled, setToggled] = useState(false)

  useEffect(()=>{
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
    setToggled(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);

  }, []);

  const setMode = () => {
    setToggled(!toggeled);
    document.documentElement.classList.toggle("dark", !toggeled);

  }

  return (
    <div className="hidden min-[1020px]:flex items-center gap-8 font-bold text-v-navy/70">
      <Link to="/" className="hover:text-(--v-gold) transition">Home</Link>
      <Link to="/our-work" className="hover:text-(--v-gold) transition">Our Work</Link>
      <Link to="/insights" className="hover:text-(--v-gold) transition">Insights</Link>
      <Link to="/about" className="hover:text-(--v-gold) transition">About</Link>
      <Link to="/services" className="hover:text-(--v-gold) transition">Services</Link>
      <Link to="/consultation" className="btn-gold  py-2.5 rounded-lg text-sm px-3">Start Working Smarter</Link>
      {/* <ThemeButton /> */}
      <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-700 pl-6">
        <Link 
          to="/auth" 
          className="flex items-center gap-2 text-v-navy dark:text-white hover:text-v-gold transition group"
          title="Client Portal"
        >
          <FontAwesomeIcon icon={faUserLock} className="text-lg opacity-80 group-hover:opacity-100 dark:text-(--v-gold)" />
        </Link>
        
      </div>
    </div>
  )
}