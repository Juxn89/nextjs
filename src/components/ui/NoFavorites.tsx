import { Container, Text, Image } from '@nextui-org/react'
import React from 'react'

export const NoFavorites = () => {
  return (
    <Container css={ {
        alignItems: 'center',
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        height: 'calc(100vh - 100px)',
        justifyContent: 'center'
      }}>
        <Text h1>There aren&apos;t favorites</Text>
        <Image 
          src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png'
          width={250}
          height={250}
          css={ {
            opacity: 0.1
          }}
          alt="There aren't favorites"
        />
      </Container>
  )
}
