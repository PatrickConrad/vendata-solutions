import { useContext } from "react";
import { StateContext } from "../context/AppContext";

// ---- Hooks (Type Safe) ----
export function useAppState() {
  const ctx = useContext(StateContext);
  if (!ctx) throw new Error("useAppState must be used in AppProvider");
  return ctx;
}

