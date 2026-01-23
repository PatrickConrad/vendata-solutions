import { Link } from "@tanstack/react-router";
import { ScrollLink } from "../../reusable/ScrollLink";
import { useEffect, useState } from "react";
import { useAppActions } from "../../../hooks/useAppActions";
import { ThemeButton } from "../../reusable/ThemeBtn";

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
    <div className="hidden md:flex items-center gap-8 font-bold text-v-navy/70">
      <Link to="/auth" className="hover:text-(--v-gold) transition">Clients</Link>
      <Link to="/insights" className="hover:text-(--v-gold) transition">Insights</Link>
      <Link to="/about" className="hover:text-(--v-gold) transition">About</Link>
      <ScrollLink to="/" hash="services" className="hover:text-(--v-gold) transition">Services</ScrollLink>
      <Link to="/consultation" className="btn-gold px-6 py-2.5 rounded-lg text-sm">Start Working Smarter</Link>
      <ThemeButton />
    </div>
  )
}