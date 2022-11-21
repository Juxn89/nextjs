import Image from 'next/image';
import NextLink from 'next/link';
import { Link, Spacer, Text, useTheme } from '@nextui-org/react'
import React from 'react'

export const Navbar = () => {

  const {theme} = useTheme();

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray50.value
    }}>
        <Image 
            src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
            alt='icon app'
            width={70}
            height={70}
        />
        <NextLink href='/' passHref legacyBehavior>          
          <Link>
            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemon</Text>          
          </Link>
        </NextLink>

        <Spacer css={ { flex: 1 } }/>
        
        <NextLink href='/favorites' passHref legacyBehavior>
          <Link>
            <Text color='white' h3>⭐ Favorites</Text>
          </Link>
        </NextLink>
    </div>
  )
}
