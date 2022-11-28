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
			description: 'Pending task',
			status: 'pending',
			createdAt: Date.now(),
		},
		{
			_id: uuidv4(),
			description: 'In progress task',
			status: 'in-progress',
			createdAt: Date.now() - 1_000_000,
		},
		{
			_id: uuidv4(),
			description: 'Task done',
			status: 'finished',
			createdAt: Date.now() - 100_000,
		}
	]
}

export const EntriesProvider: FC<EntriesProviderProps> = ({children}) => {
	const [state, dispatch] = useReducer(EntriesReducer, ENTRIES_INITIAL_STATE);

	const addNewEntry = (description: string) => {
		const newEntry: IEntry = {
			_id: uuidv4(),
			description,
			createdAt: Date.now(),
			status: 'pending'
		}
	
		dispatch({
			type: '[Entries] Add Entry',
			payload: newEntry
		})
	}

	return (
		<EntriesContext.Provider value={{...state, addNewEntry}}>
			{
				children
			}
		</EntriesContext.Provider>
	)
}
