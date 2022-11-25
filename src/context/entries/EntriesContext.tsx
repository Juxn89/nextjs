import { createContext } from 'react'
import { IEntry } from '@interfaces/intex'

type EntriesContext = {
	entries: IEntry[]
}

export const EntriesContext = createContext({} as EntriesContext)
