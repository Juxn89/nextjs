import { createContext } from 'react'

type UIContextProps = {
	sideMenuOpen: boolean,
	isAddingEntry: boolean,
	isDragging: boolean,
	openSideMenu: () => void,
	closeSideMenu: () => void,
	setIsAddingEntry: (payload: boolean) => void,
	startDragging: () => void,
	endDragging: () => void
}

export const UIContext = createContext({} as UIContextProps);
