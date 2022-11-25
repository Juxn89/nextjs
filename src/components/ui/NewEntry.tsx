import React from 'react'
import { Button, Box, TextField } from '@mui/material'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

export const NewEntry = () => {
	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			<Button startIcon={ <AddBoxRoundedIcon /> } fullWidth variant='outlined'>
				Add task
			</Button>
			<TextField fullWidth sx={{ marginTop: 2, marginBottom: 2 }} autoFocus multiline label="New entry"/>
			<Box display='flex' justifyContent="space-between">
				<Button 
					variant='outlined'
				>
					Cancel
				</Button>
				<Button 
					variant='outlined' 
					color='secondary'
					endIcon={ <SaveRoundedIcon /> }
				>
					Save
				</Button>
			</Box>
		</Box>
	)
}
