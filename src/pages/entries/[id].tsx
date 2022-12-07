import React, { ChangeEvent, FC, useContext, useMemo, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, 
	Grid, Radio, RadioGroup, TextField, capitalize, IconButton } from '@mui/material'
	import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
	import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
	import { Layout } from '@components/layouts'
	import { EntriesContext } from '@context/entries';
import { EntryStatus, IEntry } from '@interfaces/index';
import { dbEntries } from '@database/index';

const VALID_STATUS: EntryStatus[] = [  'pending', 'in-progress', 'finished' ]

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time	
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { params } = ctx;
	const { id } = params as { id: string};

	const entry = await dbEntries.getEntryById(id)

	if( !entry ) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			entry
		}
	}
}

type EntryPageProps = {
	entry: IEntry
}

const EntryPage: FC<EntryPageProps> = ({entry}) => {

	const { updateEntry } = useContext(EntriesContext)

	const [inputValue, setInputValue] = useState<string>(entry.description);
	const [status, setStatus] = useState<EntryStatus>(entry.status);
	const [touched, setTouched] = useState<boolean>(false);

	const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

	const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as EntryStatus)
	}

	const onSave = () => {
		if(inputValue.trim().length === 0) return;

		const updatedEntry: IEntry = {
			...entry,
			status,
			description: inputValue
		}

		updateEntry(updatedEntry, true)
	}

	return (
		<Layout title={ `${inputValue.substring(0, 20)}...` }>
			<Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
				<Grid item xs={ 12 } sm={ 8 }  md={ 6 }>
					<Card>
						<CardHeader title={ `Entry: ${ inputValue }` } subheader={ `Created at ${entry.createdAt} minutes ago` }/>
						<CardContent>
							<TextField 
								sx={{ marginTop: 2, marginBottom: 1 }}
								fullWidth
								placeholder='New entry'
								autoFocus
								multiline
								label="New entry"
								onChange={ onInputValueChange }
								value={ inputValue }
								helperText={ isNotValid && 'Enter a value' }
								onBlur={ () => setTouched(true) }
								error={ isNotValid }
							/>

							<FormControl>
								<FormLabel>Status: </FormLabel>
								<RadioGroup row onChange={ onStatusChange } value={ status }>
									{
										VALID_STATUS.map(option => (
											<FormControlLabel key={ option } value={ option } control={ <Radio /> } label={ capitalize(option) }/>
										))
									}
								</RadioGroup>
							</FormControl>
						</CardContent>
						<CardActions>
							<Button 
								startIcon={ <SaveOutlinedIcon /> }
								variant="contained"
								fullWidth
								onClick={ onSave }
								disabled={ inputValue.length < 1}
							>
								Save
							</Button>
						</CardActions>
					</Card>
				</Grid>
			</Grid>

			<IconButton sx={{ 
				position: 'fixed', 
				bottom: 30, 
				right: 30,
				// backgroundColor: 'red'
				// backgroundColor: 'text.secondary' // take color from Material UI's theme
				backgroundColor: 'error.dark' // take color from Material UI's theme
			}}>
				<DeleteOutlineOutlinedIcon />
			</IconButton>

		</Layout>
	)
}

export default EntryPage