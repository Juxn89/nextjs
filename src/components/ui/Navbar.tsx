import React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

export const Navbar = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<IconButton size='large' edge='start'>
					<MenuRoundedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	)
}
