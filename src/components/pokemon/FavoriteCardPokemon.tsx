import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'
import React from 'react'

type FavoriteCardPokemonProps = {
    id: number
}

export const FavoriteCardPokemon = ({id}: FavoriteCardPokemonProps) => {  
  const router = useRouter();

  const onFavoriteClick = (id: number) => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid key={id} xs={6} sm={3} md={2} xl={1}>
        <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image 
            src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
            width={ '100%' }
            height={ 240 }
            onClick={ (e) => onFavoriteClick(id) }
        />
        </Card>
    </Grid>
  )
}
