import React from 'react'
import { Button, Card, Container, Grid, Text, Image } from '@nextui-org/react'
import { Sprites } from '@interfaces/index'

type Pokemon = {
    name: string,
    sprites: Sprites,
    isInFavorite: boolean,
    onToogleFavorite: () => void
}

export const PokemonDetail = ({name, sprites, isInFavorite, onToogleFavorite}: Pokemon) => {
  return (
    <Grid.Container css={{ marginTop:'5px' }} gap={ 2 }>
    <Grid xs={ 12 } sm={ 4 }>
        <Card isHoverable css={{ padding: '30px' }}>
        <Card.Body>
            <Card.Image  
            src={ sprites.other?.dream_world.front_default || 'no-image.png' }
            alt={ name }
            width="100%"
            height={ 200 }
            />
        </Card.Body>
        </Card>
    </Grid>
    <Grid xs={ 12 } sm={ 8 }>
        <Card>
        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
            <Text h1 transform='capitalize'> { name } </Text>
            <Button color='gradient' ghost={ !isInFavorite } onClick={ onToogleFavorite }> 
            { isInFavorite ? '❌ Remove from favorites' : '⭐ Add to favorites' }
            </Button>
        </Card.Header>
        <Card.Body>
            <Text size={30}>Sprites:</Text>
            <Container direction='row' display='flex' gap={ 0 }>
            <Image
                src={ sprites.front_default }
                alt={ name }
                width={ 100 }
                height={ 100 }
            />
            <Image
                src={ sprites.back_default }
                alt={ name }
                width={ 100 }
                height={ 100 }
            />
            <Image
                src={ sprites.front_shiny }
                alt={ name }
                width={ 100 }
                height={ 100 }
            />
            <Image
                src={ sprites.back_shiny }
                alt={ name }
                width={ 100 }
                height={ 100 }
            />
            </Container>
        </Card.Body>
        </Card>
    </Grid>
    </Grid.Container>
  )
}
