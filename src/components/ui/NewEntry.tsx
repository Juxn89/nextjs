import React, { ChangeEvent, useContext, useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import SaveRoundedIcon from '@mui/icons-material/SaveRounded';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import { EntriesContext } from '@context/entries';

export const NewEntry = () => {
	const { addNewEntry } = useContext(EntriesContext)
	const [isAdding, setIsAdding] = useState<boolean>(false);
	const [inputValue, setInputValue] = useState<string>('');
	const [touched, setTouched] = useState<boolean>(false);

	const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const onSave = () => {
		if(inputValue.length === 0) return;

		addNewEntry(inputValue);

		setInputValue('')
		setTouched(false)
		setIsAdding(false)
	}

	return (
		<Box sx={{ marginBottom: 2, paddingX: 2 }}>
			{
				isAdding ? (
					<>
						<TextField 
							fullWidth 
							sx={{ marginTop: 2, marginBottom: 2 }} 
							autoFocus 
							multiline 
							label="New entry"
							value={ inputValue }
							onChange={ onTextFieldChanges }
							error={ inputValue.length <= 0 && touched }
							onBlur={ () => setTouched(true) }
						/>
						<Box display='flex' justifyContent="space-between">
							<Button 
								variant='outlined'
								onClick={ () => setIsAdding(false)}
							>
								Cancel
							</Button>
							<Button 
								variant='outlined' 
								color='secondary'
								endIcon={ <SaveRoundedIcon /> }
								onClick={ onSave }
							>
								Save
							</Button>
						</Box>
					</>
				) 
				:
				(
					<Button startIcon={ <AddBoxRoundedIcon /> } fullWidth variant='outlined' onClick={ () => setIsAdding(true) }>
						Add task
					</Button>
				)
			}
		</Box>
	)
}
