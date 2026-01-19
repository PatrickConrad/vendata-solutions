import { useContext } from "react";
import { ActionsContext } from "../context/AppContext";

export function useAppActions() {
  const ctx = useContext(ActionsContext);
  if (!ctx) throw new Error("useAppActions must be used in AppProvider");
  return ctx;
}