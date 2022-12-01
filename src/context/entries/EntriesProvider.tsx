import {FC, useEffect, useReducer} from 'react'
import { EntriesContext, EntriesReducer } from '@context/entries/index';
import { IEntry } from '@interfaces/index';
import {entriesAPI} from '@api/index';

type EntriesProviderProps = {
	children: JSX.Element | JSX.Element[]
}

export type EntriesState = {
	entries: IEntry[]
}

const ENTRIES_INITIAL_STATE: EntriesState = {
	entries: []
}

export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

	useEffect(() => {
		refreshEntries()
	}, [])
	
	const refreshEntries = async () => {
		const {data} = await entriesAPI.get<IEntry[]>('/entries');

		dispatch({ type: '[Entries] Refresh Entries', payload: data });
	}

	const addNewEntry = async (description: string) => {
		const {data} = await entriesAPI.post<IEntry>('/entries', {description})

		dispatch({
			type: '[Entries] Add Entry',
			payload: data
		})
	}

	const updateEntry = (entry: IEntry) => {
		dispatch({
			type: '[Entries] Update Entry',
			payload: entry
		})
	}

	return (
		<EntriesContext.Provider value={{...state, addNewEntry, updateEntry}}>
			{
				children
			}
		</EntriesContext.Provider>
	)
}
