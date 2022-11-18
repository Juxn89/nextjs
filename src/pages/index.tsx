import { NextPage } from 'next';
import { GetStaticProps } from 'next'
import { Grid } from '@nextui-org/react';

import {pokeAPI} from '@api/index';
import { Layout } from '@components/layouts';
import { IPokemonListResponse, ISmallPokemon } from '@interfaces/index';
import { PokemonCard } from '@components/pokemon';

type PokemonsProps = {
  pokemons: ISmallPokemon[]
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const {data} = await pokeAPI.get<IPokemonListResponse>('/pokemon?limit=151');

  const pokemons: ISmallPokemon[] = data.results.map(pokemon => {
    const id = pokemon.url.split('/').filter(item => item !== '').reverse()[0];
    return {
      ...pokemon,
      id: parseInt(id),
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    }
  })

  return {
    props: {
      pokemons
    }
  }
}

export const HomePage: NextPage<PokemonsProps> = ({pokemons}) => {
  return (
    <Layout title='List of pokemons'>
      <Grid.Container gap={ 2 } justify='flex-start'>
        {
          pokemons.map(( pokemon: ISmallPokemon) => (
            <PokemonCard key={pokemon.id} pokemon={ pokemon }/>
          ))
        }
      </Grid.Container>  
    </Layout>
  )
}

export default HomePage;
