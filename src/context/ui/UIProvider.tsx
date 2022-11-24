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

	return (
		<UIContext.Provider value={ UI_INITIAL_STATE }>
			{ children }
		</UIContext.Provider>
	)
}
