import {FC, useReducer} from 'react'
import { EntriesContext, EntriesReducer } from '@context/entries/index';

type EntriesProviderProps = {
	children: JSX.Element | JSX.Element[]
}

export type EntriesState = {
	entries: []
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: []
}

export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

	return (
		<EntriesContext.Provider value={{entries: []}}>
			{
				children
			}
		</EntriesContext.Provider>
	)
}
