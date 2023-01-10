import { IUIState } from "@context/index";

type UIActionType =
  | { type: '[UI] - ToggleMenu' }

export const UIReducer = (state: IUIState, action: UIActionType): IUIState => {
  switch (action.type) {
    case '[UI] - ToggleMenu': 
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen
      }  
    default:
      return state
  }
}