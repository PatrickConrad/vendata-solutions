// src/context/types.ts
export type User = {
  id: string;
  name: string;
};

export type AppState = {
  user: User | null;
  theme: "light" | "dark";
};

export type AppAction =
  | { type: "LOGIN"; payload: User }
  | { type: "LOGOUT" }
  | { type: "TOGGLE_THEME" };