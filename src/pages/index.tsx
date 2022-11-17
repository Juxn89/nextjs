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

  return {
    props: {
      pokemons: data.results
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
            <li>{pokemon.name}</li>
          ))
        }
      </ul>  
    </Layout>
  )
}

export default HomePage;
