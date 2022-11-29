import {FC, DragEvent, useContext} from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '@interfaces/index';
import { UIContext } from '@context/ui';

type EntryCardProps = {
	entry: IEntry
}

export const EntryCard: FC<EntryCardProps> = ({entry}) => {
	const { startDragging, endDragging } = useContext(UIContext)

	const onDragStart = (event: DragEvent<HTMLDivElement>) => {
		startDragging()
		event.dataTransfer.setData('text', entry._id)
	}

	const onDragEnd = () => {
		endDragging()
	}

	return (
		<Card 
			sx={{ marginBottom: 1 }} 
			draggable
			onDragStart={ onDragStart }
			onDragEnd= { onDragEnd }
		>
			<CardActionArea>
				<CardContent>
					<Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
				</CardContent>
				<CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
					<Typography variant='body2'>30 mintus ago</Typography>
				</CardActions>
			</CardActionArea>
		</Card>
	)
}
