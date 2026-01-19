// src/context/AppContext.tsx
import {
  createContext,
  useReducer,
  useMemo,
  useRef,
  ReactNode,
} from "react";
import { appReducer, initialState } from "./reducer";
import { AppState, User } from "./types";

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
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Stable dispatch ref (never changes)
  const dispatchRef = useRef(dispatch);
  dispatchRef.current = dispatch;

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
  const memoState = useMemo(() => state, [state.user, state.theme]);

  return (
    <StateContext.Provider value={memoState}>
      <ActionsContext.Provider value={actions}>
        {children}
      </ActionsContext.Provider>
    </StateContext.Provider>
  );
}


