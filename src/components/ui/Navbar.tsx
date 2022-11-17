import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image';
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
        <Text color='white' h2>P</Text>
        <Text color='white' h3>okemon</Text>
        <Spacer css={ { flex: 1 } }/>
        <Text color='white' h3>⭐ Favorites</Text>
    </div>
  )
}
