import { FC, useReducer } from 'react'
import { UIContext, UIReducer } from '@context/ui/index'

export interface UIState {
	sideMenuOpen: boolean
}

type UIProviderProps = {
	children: JSX.Element | JSX.Element[]
}

const UI_INITIAL_STATE: UIState = {
	sideMenuOpen: false
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

	return (
		<UIContext.Provider value={ { ...state, openSideMenu, closeSideMenu } }>
			{ children }
		</UIContext.Provider>
	)
}
