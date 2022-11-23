import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { pokeAPI } from '@api/index';
import { IPokemonDetail } from '../../interfaces/IPokemonDetail';
import { IPokemonListResponse, Sprites } from '@interfaces/index';
import { getPokemonInfo, localFavorites } from '@utils/index';
import confetti from 'canvas-confetti';
import { Layout } from '@components/layouts';
import { PokemonDetail } from '@components/pokemon/';

type PokemonByNamePageProps = {
    pokemon: {
        id: number,
        name: string,
        sprites: Sprites
    }
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const {data} = await pokeAPI.get<IPokemonListResponse>('/pokemon?limit=151');
    const pokemonsNames = data.results.map(pokemon => (pokemon.name));

    return {
        paths: pokemonsNames.map(name => ({
            params: { name }
        })),
        // fallback: false
        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { params } = ctx;
    const { name } = params as {name: string};

    const pokemon = await getPokemonInfo(name)

    if(!pokemon) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }

    return {
        props: {
            pokemon
        }
    }
}

const PokemonByNamePage: NextPage<PokemonByNamePageProps> = ({pokemon}) => {
    const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id));    
  
    const onToogleFavorite = () => {
      localFavorites.toogleFavorites(pokemon.id);
      setIsInFavorite(!isInFavorite)
  
      if(isInFavorite) return;
  
      confetti({
        zIndex: 999,
        particleCount: 100,
        spread: 160,
        angle: -100,
        origin: {
          x: 1,
          y: 0
        }
      })
    }

    return (
        <Layout title={ pokemon.name }>
            <PokemonDetail 
                name={pokemon.name} 
                sprites={ pokemon.sprites } 
                isInFavorite={ isInFavorite } 
                onToogleFavorite={ onToogleFavorite } />
        </Layout>
    )
}

export default PokemonByNamePage;