import React, {useEffect, useState} from 'react'
import { NextPage } from 'next'
import { Layout } from '@components/layouts'
import { FavoritePokemons, NoFavorites } from '@components/ui'
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
        : <FavoritePokemons favoritePokemons={ favoritePokemons }/>
      }
    </Layout>
  )
}

export default FavoritePage