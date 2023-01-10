import React, { FC, useReducer } from "react";
import { UIContext, UIReducer } from "@context/index";

interface IUIProviderProps {
  children?: React.ReactNode
}

export interface IUIState {
  isMenuOpen: boolean
}

const UI_INITIAL_STATE: IUIState = {
  isMenuOpen: false
}

export const UIProvider: FC<IUIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE)
  const toggleSideMenu = () => {
    dispatch({ type: '[UI] - ToggleMenu' })
  }

  return (
    <UIContext.Provider value={{ 
      ...state,
      toggleSideMenu
    }}>
      { children }
    </UIContext.Provider>
  )
}