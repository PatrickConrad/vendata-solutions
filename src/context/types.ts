// src/context/types.ts
export type User = {
  id: string;
  name: string;
};

export type AppState = {
  user: User | null;
  darkMode: boolean;
};

export type AppAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" };