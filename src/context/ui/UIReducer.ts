import { UIState } from "@context/ui/index";

type UITypes = {
	type: '[UI] Open Sidebar' | '[UI] Close Sidebar',
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
		default:
			return state;
	}
}
