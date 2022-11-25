import {FC, useContext, useMemo} from 'react'
import { Paper, List } from '@mui/material'
import { EntryCard } from '@components/ui/'
import { EntryStatus } from '@interfaces/intex'
import { EntriesContext } from '@context/entries'

type EntryListProp = {
	status: EntryStatus
}

export const EntryList: FC<EntryListProp> = ({ status }) => {
	
	const { entries } = useContext(EntriesContext)
	const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [entries])	

	return (
		<div>
			<Paper sx={{ height: 'calc(100vh - 185px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
				<List sx={{ opacity: 1 }}>
					{
						entriesByStatus.map(entry => (
							<EntryCard key={entry._id} entry={ entry }/>
						))
					}
				</List>
			</Paper>
		</div>
	)
}
