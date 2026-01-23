import { AppAction, AppState } from "./types";


export const initialState: AppState = {
  user: null,
  darkMode: false,
};

export function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };

    case "LOGOUT":
      return { ...state, user: null };

    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };

    default:
      return state;
  }
}
