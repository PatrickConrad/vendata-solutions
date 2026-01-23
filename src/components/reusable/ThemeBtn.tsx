import { useContext } from "react";
import { ActionsContext, StateContext } from "../../context/AppContext";
import { ServiceIcon } from "./ServiceIcon";
import { MoonIcon, SunIcon } from "../../svg/icons";

export function ThemeButton() {
  const actions = useContext(ActionsContext);
  const state = useContext(StateContext);

  // If the context isn't ready, don't render anything
  if (!actions || !state) return null;

  return (
    <div 
      onClick={actions.toggleTheme}
      className="text-(--v-navy) dark:text-(--v-gold)"
    >
      {
        state.darkMode 
        ? 
        <SunIcon />
        : 
        <MoonIcon />
      }
    </div>
  );
}