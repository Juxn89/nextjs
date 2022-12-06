import React, { useContext } from 'react'
import NextLink from 'next/link'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
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
				<NextLink href="/" passHref legacyBehavior>
					<Link underline='none' color='white'>
						<Typography	variant='h6'>OpenJira</Typography>
					</Link>
				</NextLink>
			</Toolbar>
		</AppBar>
	)
}
