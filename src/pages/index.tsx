import { NextPage } from 'next';
import { GetStaticProps } from 'next'
import {pokeAPI} from '@api/index';
import { Layout } from '@components/layouts';
import { IPokemonListResponse, ISmallPokemon } from '@interfaces/index';

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
  console.log(pokemons);
  return (
    <Layout title='List of pokemons'>
      <ul>
        {
          pokemons.map((pokemon: ISmallPokemon) => (
            <li key={pokemon.name}>#{pokemon.id} - {pokemon.name}</li>
          ))
        }
      </ul>  
    </Layout>
  )
}

export default HomePage;
