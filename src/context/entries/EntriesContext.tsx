import { createContext } from 'react'

type EntriesContext = {
	entries: []
}

export const EntriesContext = createContext({} as EntriesContext)
