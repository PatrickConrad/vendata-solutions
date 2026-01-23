// src/context/AppContext.tsx
import {
  createContext,
  useReducer,
  useMemo,
  useRef,
  ReactNode,
  useEffect,
} from "react";
import { appReducer, initialState } from "./reducer";
import { AppState, User } from "./types";
import { getInitialTheme } from "../../utils/theme";
import { useHydrated } from "@tanstack/react-router";

// ---- Contexts ----
export const StateContext = createContext<AppState | null>(null);

type Actions = {
  login: (user: User) => void;
  logout: () => void;
  toggleTheme: () => void;
};

export const ActionsContext = createContext<Actions | null>(null);

// ---- Provider ----
export function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(appReducer, {
    ...initialState,
    darkMode: getInitialTheme()
  });

  // Stable dispatch ref (never changes)
  const dispatchRef = useRef(dispatch);
  dispatchRef.current = dispatch;

  const hydrated = useHydrated();

  // This handles the "Fucking change the theme" logic whenever the state updates
  useEffect(() => {
    if(!hydrated) return;
    const root = window.document.documentElement;
    if (state.darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    // Save preference for next time
    localStorage.setItem('vendata-theme', state.darkMode.toString());

  }, [state.darkMode, hydrated]);

  // Stable action creators
  const actions = useMemo<Actions>(
    () => ({
      login: (user) =>
        dispatchRef.current({ type: "LOGIN", payload: user }),

      logout: () =>
        dispatchRef.current({ type: "LOGOUT" }),

      toggleTheme: () =>
        dispatchRef.current({ type: "TOGGLE_THEME" }),
    }),
    []
  );

  // Memoized state to prevent unnecessary provider updates
  const memoState = useMemo(() => state, [state.user, state.darkMode]);

  return (
    <StateContext.Provider value={memoState}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
}


