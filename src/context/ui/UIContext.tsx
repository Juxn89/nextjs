import { createContext } from 'react'

type UIContextProps = {
	sideMenuOpen: boolean
}

export const UIContext = createContext({} as UIContextProps);
