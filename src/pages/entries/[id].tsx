import React, { ChangeEvent, FC, useMemo, useState } from 'react'
import { GetServerSideProps } from 'next'
import { Layout } from '@components/layouts'
import { isValidObjectId } from 'mongoose';
import { Button, Card, CardActions, CardContent, CardHeader, FormControl, FormControlLabel, FormLabel, 
				 Grid, Radio, RadioGroup, TextField, capitalize, IconButton } from '@mui/material'
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { EntryStatus } from '@interfaces/index';

const VALID_STATUS: EntryStatus[] = [  'pending', 'in-progress', 'finished' ]

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time	
export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { params } = ctx;
	const { id } = params as { id: string};

	if(!isValidObjectId(id)) {
		return {
			redirect: {
				destination: '/',
				permanent: false
			}
		}
	}

	return {
		props: {
			id
		}
	}
}

type EntryPageProps = {
	id: string
}

const EntryPage: FC<EntryPageProps> = (props) => {

	const [inputValue, setInputValue] = useState<string>('');
	const [status, setStatus] = useState<EntryStatus>('pending');
	const [touched, setTouched] = useState<boolean>(false);

	const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

	const onInputValueChange = (event: ChangeEvent<HTMLInputElement>) => {
		setInputValue(event.target.value)
	}

	const onStatusChange = (event: ChangeEvent<HTMLInputElement>) => {
		setStatus(event.target.value as EntryStatus)
	}

	const onSave = () => {

	}

	return (
		<Layout title=''>
			<Grid container justifyContent={'center'} sx={{ marginTop: 2 }}>
				<Grid item xs={ 12 } sm={ 8 }  md={ 6 }>
					<Card>
						<CardHeader title={ `Entry: ${ inputValue }` } subheader={ `Created 8 minutes ago` }/>
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