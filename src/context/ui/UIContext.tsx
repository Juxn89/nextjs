import { createContext } from 'react'

type UIContextProps = {
	sideMenuOpen: boolean,
	openSideMenu: () => void,
	closeSideMenu: () => void
}

export const UIContext = createContext({} as UIContextProps);
