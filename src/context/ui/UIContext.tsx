import { createContext } from 'react'

type UIContextProps = {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	openSideMenu: () => void,
	closeSideMenu: () => void,
	setIsAddingEntry: (payload: boolean) => void
}

export const UIContext = createContext({} as UIContextProps);
