import { useContext, useState } from "react";
import { ActionsContext, StateContext } from "../../context/AppContext";
import { ServiceIcon } from "./ServiceIcon";
import { MoonIcon, SunIcon } from "../../svg/icons";

export function ThemeButton() {
  const actions = useContext(ActionsContext);
  const state = useContext(StateContext);

  // If the context isn't ready, don't render anything
  if (!actions || !state) return null;

  return (
    <button 
      onClick={actions.toggleTheme}
      className="text-(--v-navy) dark:text-(--v-gold) cursor-pointer hover:text-(--v-green)"
    >
      {
        state.darkMode 
        ? 
        <SunIcon />
        : 
        <MoonIcon />
      }
    </button>
  );
}

type OrbitTogglePropType = {
  isDesktop?: boolean 
}

export function OrbitToggle({isDesktop = true}: OrbitTogglePropType) {
  const state = useContext(StateContext);
  const actions = useContext(ActionsContext);
  const [isSpinning, setIsSpinning] = useState(false);

  if (!state || !actions) return null;

  const handleToggle = () => {
    // 1. Trigger the CSS spin
    setIsSpinning(true);
    
    // 2. Change the theme
    actions.toggleTheme();

    // 3. Reset the spin class after animation finishes (600ms)
    setTimeout(() => setIsSpinning(false), 600);
  };

  return (
    <button
      onClick={handleToggle}
      className={` theme-orbit-container bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 ${
        isSpinning ? "theme-orbit-spin" : ""
      }${isDesktop?" fixed bottom-10 right-10 z-50 hidden md:flex":" flex relative"}`}
      aria-label="Toggle Theme"
    >
      {/* Sun Icon */}
      <span className="orbit-icon orbit-sun text-v-gold">
        <SunIcon className="w-8 h-8"/>
      </span>
      
      {/* Moon Icon */}
      <span className="orbit-icon orbit-moon text-v-navy">
        <MoonIcon className="w-8 h-8"/>
      </span>
    </button>
  );
}