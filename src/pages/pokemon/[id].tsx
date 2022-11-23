import React, { useEffect, useState } from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import confetti from 'canvas-confetti';

import { Layout } from '@components/layouts'
import { IPokemon } from '@interfaces/index'
import localFavorites from '@utils/localFavorites'
import { PokemonDetail } from '@components/pokemon/';
import { getPokemonInfo } from '@utils/index';

type PokemonPageProps = {
    pokemon: IPokemon
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    const allPokemonsPaths: string[] = [...Array(151)].map( (value, index) => `${index + 1}` );
  
    return {
      paths: allPokemonsPaths.map(id => ({ 
        params: { id }
       })),
      fallback: false
    }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { params } = ctx;
    const { id } = params as { id: string };
  
    return {
      props: {
        pokemon: await getPokemonInfo(id)
      },
      revalidate: 86400 // 60 * 60 * 24 
    }
  }

const PokemonPage:NextPage<PokemonPageProps> = ({pokemon}) => {

  const [isInFavorite, setIsInFavorite] = useState(localFavorites.existInFavorites(pokemon.id));

  useEffect(() => {
    console.log('UseEffect...');
  }, [])
  

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
        name={ pokemon.name } 
        sprites={ pokemon.sprites } 
        isInFavorite={ isInFavorite } 
        onToogleFavorite={ onToogleFavorite  }
      />
    </Layout>
  )
}

export default PokemonPage