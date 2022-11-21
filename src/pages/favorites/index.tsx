import React, {useEffect, useState} from 'react'
import { NextPage } from 'next'
import { Layout } from '@components/layouts'
import { NoFavorites } from '@components/ui'
import {localFavorites} from '@utils/index'
import { Card, Grid } from '@nextui-org/react'

const FavoritePage: NextPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritePokemons(localFavorites.getFavoritesPokemons())
  }, [])
  

  return (
    <Layout title='Pokemon | Favorites'>
      {
        favoritePokemons.length === 0 
        ? <NoFavorites />
        : (
          <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
              favoritePokemons.map(id => (
                <Grid key={id} xs={6} sm={3} md={2} xl={1}>
                  <Card isHoverable isPressable css={{ padding: 10 }}>
                    <Card.Image 
                      src={ `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg` }
                      width={ '100%' }
                      height={ 140 }
                    />
                  </Card>
                </Grid>
              ))
            }
          </Grid.Container>
        )
      }
    </Layout>
  )
}

export default FavoritePage