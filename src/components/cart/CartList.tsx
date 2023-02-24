import { useContext, useState } from 'react';
import React, { FC, useEffect } from 'react'
import NextLink from 'next/link'

import { Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

import { ItemCounter } from '@components/ui';
import { CartContext } from '@context/index';
import { ICartProduct } from '../../interfaces/cart';

interface ICartListProps {
  isEditable?: boolean;
}

export const CartList: FC<ICartListProps> = ({ isEditable = false }) => {

  const { cart, updateQuantity } = useContext(CartContext);

  const updateProductQuantityValue = (product: ICartProduct, newQuantityValue: number) => {
    product.quantity += newQuantityValue;
    updateQuantity(product);
  }

  return (
    <>
      {
        cart.map(product => (
          <Grid key={product.slug + product.size} container spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              <NextLink href={`/product/${product.slug}`} passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                    <CardMedia image={ `/products/${product.image}` } component='img' sx={{ borderRadius: '5px' }}/>
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display='flex' flexDirection='column'>                
                <Typography variant='body1' >{ product.title }</Typography>
                <Typography variant='body1' >Size: <strong>{ product.size }</strong> </Typography>

                {
                  isEditable 
                    ? <ItemCounter 
                        currentValue={product.quantity} 
                        updateQuantity={ (value) => updateProductQuantityValue(product, value) } 
                        maxValue={ 10 } 
                      /> 
                    : <Typography variant='h5'>Not editable</Typography>
                }
              </Box>
            </Grid>
            <Grid item xs={2} display='flex' alignItems='center' flexDirection='column'>
              <Typography variant='subtitle1'>{ `$${ product.price * product.quantity }` }</Typography>
              {
                isEditable &&
                (
                  <Button variant='text' color='secondary'>
                    Remove
                  </Button>
                )
              }
            </Grid>
          </Grid>
        ))
      }
    </>
  )
}
