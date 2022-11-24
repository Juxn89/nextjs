import React, { useContext } from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { UIContext } from '@context/ui';

export const Navbar = () => {
	const { openSideMenu } = useContext(UIContext)

	return (
		<AppBar position='sticky'>
			<Toolbar>
				<IconButton size='large' edge='start' onClick={ openSideMenu }>
					<MenuRoundedIcon />
				</IconButton>
				<Typography variant='h6'>OpenJira</Typography>
			</Toolbar>
		</AppBar>
	)
}
