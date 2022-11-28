import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from '@context/ui/index'

export interface UIState {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	isDragging: boolean
}

type UIProviderProps = {
	children: JSX.Element | JSX.Element[]
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false,
	isAddingEntry: false,
	isDragging: false
}


export const UIProvider: FC<UIProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(UIReducer, UI_INITIAL_STATE);

	const openSideMenu = () => {
		dispatch({
			type: '[UI] Open Sidebar'
		})
	}

	const closeSideMenu = () => {
		dispatch({
			type: '[UI] Close Sidebar'
		})
	}

	const setIsAddingEntry = (isAdding: boolean) => {
		dispatch({
			type: '[UI] Adding new entry',
			payload: isAdding
		})
	}

	const startDragging = () => {
		dispatch({
			type: '[UI] Start dragging'
		})
	}

	const endDragging = () => {
		dispatch({
			type: '[UI] End dragging'
		})
	}

	return (
		<UIContext.Provider value={{ 
			...state, 
			openSideMenu, 
			closeSideMenu, 
			setIsAddingEntry,
			startDragging,
			endDragging
		}}>
			{ children }
		</UIContext.Provider>
	)
}
