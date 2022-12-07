import {FC, useEffect, useReducer} from 'react'
import { useSnackbar } from 'notistack';
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
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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

		dispatch({ type: '[Entries] Add Entry', payload: data });
	}

	const updateEntry = async ({ _id, description, status }: IEntry, showSnackBar: boolean = false) => {
		try {
			const { data } = await entriesAPI.put<IEntry>(`/entries/${_id}`, { description, status });

			dispatch({ type: '[Entries] Update Entry', payload: data })

			if (showSnackBar) {
				enqueueSnackbar('Entry updated', {
					variant: 'success',
					autoHideDuration: 1500,
					anchorOrigin: {
						vertical: 'top',
						horizontal: 'right'
					}
				});
			}
			
		} catch (error) {

		}
	}

	return (
		<EntriesContext.Provider value={{...state, addNewEntry, updateEntry}}>
			{
				children
			}
		</EntriesContext.Provider>
	)
}
