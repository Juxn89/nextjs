import { useContext, useState, KeyboardEvent } from 'react';
import NextLink from 'next/link'
import router, { useRouter } from 'next/router'
import { AppBar, Box, Button, IconButton, Input, InputAdornment, Link, Toolbar, Typography } from "@mui/material"
import { ClearOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material'
import Badge from '@mui/material/Badge'
import { UIContext } from '@context/index'

export const Navbar = () => {
  const { asPath, push } = useRouter();
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isSearchVisble, setIsSearchVisble] = useState<boolean>(false)
  const { toggleSideMenu } = useContext(UIContext)

  const category = asPath.split('/')[2];

  const onSearchTerm = () => {
    if( searchTerm.trim().length === 0 ) return;

    push(`/search/${ searchTerm }`)
  }

  const handlerSearchTermEnter = (event: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    return event.key === 'Enter' ? onSearchTerm() : null;
  }

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

            <Box sx={{ display: isSearchVisble ? 'none' : { xs: 'none', sm: 'block' } }} className='fadeIn'>
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

            { /* Big screens  */ }
            {
              isSearchVisble
                ?
                  (
                    <Input
                      sx={{ display: { xs: 'none', sm: 'block' } }}
                      className='fadeIn'
                      autoFocus
                      type='text'
                      placeholder="Search..."
                      value={ searchTerm }
                      onChange={ (e) => setSearchTerm(e.target.value) }
                      onKeyUp={ handlerSearchTermEnter }
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={ () => setIsSearchVisble(false) }
                          >
                            <ClearOutlined />
                          </IconButton>
                        </InputAdornment>
                      }
                    />                
                  )
                :
                  (
                    <IconButton
                      onClick={ () => setIsSearchVisble(true) }
                      sx={{ display: { xs: 'none', sm: 'flex' } }}
                      className='fadeIn'
                    >
                      <SearchOutlined />
                    </IconButton>
                  )
            }



            { /* Small screens  */}
            <IconButton 
              sx={{ display: { xs: 'flex', sm: 'none' } }}
              onClick={ toggleSideMenu }
            >
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
