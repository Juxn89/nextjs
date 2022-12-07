import { createContext } from 'react'
import { IEntry } from '@interfaces/index'

type EntriesContext = {
	entries: IEntry[],
	addNewEntry: (description: string) => void,
	updateEntry: (entry: IEntry, showSnackBar?: boolean) => void
}

export const EntriesContext = createContext({} as EntriesContext)
