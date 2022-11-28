import { UIState } from "@context/ui/index";

type UITypes = {
	type: '[UI] Open Sidebar' | '[UI] Close Sidebar' | '[UI] Adding new entry',
	payload?: any
}

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
		default:
			return state;
	}
}
