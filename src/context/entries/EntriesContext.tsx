import { createContext } from 'react'
import { IEntry } from '@interfaces/intex'

type EntriesContext = {
	entries: IEntry[],
	addNewEntry: (description: string) => void
}

export const EntriesContext = createContext({} as EntriesContext)
