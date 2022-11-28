import {FC, useContext, useMemo, DragEvent} from 'react'
import { Paper, List } from '@mui/material'
import { EntryCard } from '@components/ui/'
import { EntryStatus } from '@interfaces/intex'
import { EntriesContext } from '@context/entries'
import { UIContext } from '@context/ui'
import styles from '@components/ui/EntryList.module.css';

type EntryListProp = {
	status: EntryStatus
}

export const EntryList: FC<EntryListProp> = ({ status }) => {
	
	const { entries } = useContext(EntriesContext)
	const { isDragging } = useContext(UIContext)

	const entriesByStatus = useMemo( () => entries.filter(entry => entry.status === status), [entries])

	const allowDrop = (event: DragEvent<HTMLDivElement>) => {
		event.preventDefault();
	}

	const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
		const id = event.dataTransfer.getData('text');
	}

	return (
		<div
			onDrop={ onDropEntry }
			onDragOver={ allowDrop }
			className={ isDragging ? styles.draggin : '' }
		>
			<Paper sx={{ height: 'calc(100vh - 185px)', overflow: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
				<List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all .3s'}}>
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
