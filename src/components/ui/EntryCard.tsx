import {FC} from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { IEntry } from '@interfaces/intex';

type EntryCardProps = {
	entry: IEntry
}

export const EntryCard: FC<EntryCardProps> = ({entry}) => {
	return (
		<Card sx={{ marginBottom: 1 }}>
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
