import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { Layout } from '@components/layouts'
import pokeAPI from '@api/pokeAPI'
import { IPokemon } from '@interfaces/index'

type PokemonPageProps = {
    pokemon: any
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
    const {data} = await pokeAPI.get<IPokemon>(`/pokemon/${id}`);
  
    return {
      props: {
        pokemon: data
      }
    }
  }

const PokemonPage:NextPage<PokemonPageProps> = ({pokemon}) => {
  const {query} = useRouter();

  console.log(pokemon);

  return (
    <Layout title='Pokemon'>
        <h1>{pokemon.name}</h1>
    </Layout>
  )
}

export default PokemonPage