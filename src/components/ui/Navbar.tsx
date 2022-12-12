import React from 'react'
import NextLink from 'next/link'
import { AppBar, IconButton, Link, Toolbar, Typography } from '@mui/material'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

export const Navbar = () => {
  return (
    <AppBar position='sticky' elevation={0}>
      <Toolbar>
        <IconButton size='large' edge='start'>
          <MenuOutlinedIcon />
        </IconButton>

        <NextLink href='/' passHref legacyBehavior>
          <Link underline='none'>
            <Typography variant='h6' color={'white'}>CookieMaster</Typography>
          </Link>
        </NextLink>

        <div style={{flex: 1}}></div>

        <NextLink href='/theme-changer' passHref legacyBehavior>
          <Link underline='none'>
            <Typography variant='h6' color={'white'}>Change theme</Typography>
          </Link>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
