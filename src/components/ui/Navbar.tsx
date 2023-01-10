import { useContext } from 'react';
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { UIContext } from '@context/index'

export const Navbar = () => {
  const { asPath } = useRouter();
  const { toggleSideMenu } = useContext(UIContext)
  const category = asPath.split('/')[2];

  return (
    <AppBar>
        <Toolbar>
            <NextLink href='/' passHref legacyBehavior>
                <Link display='flex' alignItems='center'>
                    <Typography variant='h6'>Teslo | </Typography>
                    <Typography sx={{ ml: 0.5 }}>Shop</Typography>
                </Link>
            </NextLink>

            <Box flex={1} />

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <NextLink href='/category/women' passHref legacyBehavior>
                <Link>
                  <Button color={ category === 'women' ? 'primary' : 'info' }>Women</Button>
                </Link>
              </NextLink>

              <NextLink href='/category/men' passHref legacyBehavior>
                <Link>
                  <Button color={ category === 'men' ? 'primary' : 'info' }>Men</Button>
                </Link>
              </NextLink>

              <NextLink href='/category/kids' passHref legacyBehavior>
                <Link>
                  <Button color={ category === 'kids' ? 'primary' : 'info' }>Kids</Button>
                </Link>
              </NextLink>
            </Box>

            <Box flex={1} />

            <IconButton>
              <SearchOutlined />
            </IconButton>

            <NextLink href='/cart' passHref legacyBehavior>
              <Link>
                <IconButton>
                  <Badge badgeContent={2} color='secondary'>
                    <ShoppingCartOutlined />
                  </Badge>
                </IconButton>
              </Link>
            </NextLink>

            <Button onClick={ toggleSideMenu }>
              Menu
            </Button>

        </Toolbar>
    </AppBar>
  )
}
