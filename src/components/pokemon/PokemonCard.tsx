import React from 'react'
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { ISmallPokemon } from '@interfaces/index'

type PokemonCardProps = {
    pokemon: ISmallPokemon
}

export const PokemonCard = ({pokemon}: PokemonCardProps) => {
  const router = useRouter();
  const { img, name, id } = pokemon;

  const onPokemonClick = (name: string) => {
    router.push(`/name/${name}`)
  }

  return (
    <Grid xs={ 6 } sm={ 3} md={ 2 } xl={ 1 }>
        <Card isHoverable isPressable onClick={ () => onPokemonClick(name) }>
          <Card.Body css={{ padding: 1 }}>
              <Card.Image src={ img} width='100%' height={140}/>
          </Card.Body>
          <Card.Footer>
              <Row justify='space-between'>
              <Text transform='capitalize'>{name}</Text>
              <Text>#{id}</Text>
              </Row>
          </Card.Footer>
        </Card>
    </Grid>
  )
}
