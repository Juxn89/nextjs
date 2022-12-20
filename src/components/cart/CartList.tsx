import React, { FC } from 'react'
import NextLink from 'next/link'
import { initialData } from '@database/products';
import { Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { ItemCounter } from '@components/ui';

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

export const CartList: FC = () => {
  return (
    <>
      {
        productsInCart.map(product => (
          <Grid key={product.slug} container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              <NextLink href={'/product/slug'} passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                    <CardMedia image={ `products/${product.images[0]}` } component='img' sx={{ borderRadius: '5px' }}/>
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>                
                <Typography variant='body1' >{ product.title }</Typography>
                <Typography variant='body1' >Size: <strong>M</strong> </Typography>

                <ItemCounter />
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1'>{ `$${ product.price }` }</Typography>
              <Button variant='text' color='secondary'>
                Remove
              </Button>
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
