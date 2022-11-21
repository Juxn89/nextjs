import React from 'react'
import { Grid } from '@nextui-org/react'
import { FavoriteCardPokemon } from '@components/pokemon'

type IFavoritePokemonsProps = {
    favoritePokemons: number[]
}

export const FavoritePokemons = ({favoritePokemons}: IFavoritePokemonsProps) => {
  return (
    <Grid.Container gap={2} direction='row' justify='flex-start' css={{ height: 180 }}>
    {
      favoritePokemons.map(id => (
        <FavoriteCardPokemon key={ id } id={ id } />
      ))
    }
    </Grid.Container>
  )
}
