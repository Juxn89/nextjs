import { UIState } from "@context/ui/index";

type UITypes = 
		| { type: '[UI] Open Sidebar' }
		| { type: '[UI] Close Sidebar' }
		| { type: '[UI] Adding new entry', payload: boolean }
		| { type: '[UI] Start dragging' }
		| { type: '[UI] End dragging' }

export const UIReducer = (state: UIState, action: UITypes): UIState => {
	switch (action.type) {
		case '[UI] Open Sidebar':
			return {
				...state,
				sideMenuOpen: true
			}
		case '[UI] Close Sidebar':
			return {
				...state,
				sideMenuOpen: false
			}
		case '[UI] Adding new entry':
			return {
				...state,
				isAddingEntry: action.payload
			}
		case '[UI] Start dragging':
			return {
				...state,
				isDragging: true
			}
		case '[UI] End dragging':
			return {
				...state,
				isDragging: false
			}
		default:
			return state;
	}
}
