import {FC, useReducer} from 'react'
import { v4 as uuidv4 } from 'uuid'
import { EntriesContext, EntriesReducer } from '@context/entries/index';
import { IEntry } from '@interfaces/intex';

type EntriesProviderProps = {
	children: JSX.Element | JSX.Element[]
}

export type EntriesState = {
	entries: IEntry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: [
		{
			_id: uuidv4(),
			description: 'Description',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'Description',
			status: 'pending',
			createdAt: Date.now() - 1_000_000,
		},
		{
			_id: uuidv4(),
			description: 'Description',
			status: 'pending',
			createdAt: Date.now() - 100_000,
		}
]
}

export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

	return (
		<EntriesContext.Provider value={{...state}}>
			{
				children
			}
		</EntriesContext.Provider>
	)
}
