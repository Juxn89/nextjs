import { createContext } from "react";

interface IUIContextProps {
  isMenuOpen: boolean,
  toggleSideMenu: () => void
}

export const UIContext = createContext({} as IUIContextProps)