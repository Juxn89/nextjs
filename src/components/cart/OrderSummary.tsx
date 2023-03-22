import React, { useContext } from 'react'
import { Grid, Typography } from '@mui/material';
import { CartContext } from '@context/index';

export const OrderSummary = () => {
  const { cart } = useContext(CartContext);

  return (
    <Grid container>
      <Grid item xs={6}>
        <Typography>Quantity Items</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ cart.length }</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Sub-total</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ `$${ 0 }` }</Typography>
      </Grid>

      <Grid item xs={6}>
        <Typography>Taxes (15%)</Typography>
      </Grid>
      <Grid item xs={6} display='flex' justifyContent='end'>
        <Typography>{ `$${ 35.36 }` }</Typography>
      </Grid>

      <Grid item xs={6} sx={{ mt: 2 }}>
        <Typography variant='subtitle1'>Total</Typography>
      </Grid>
      <Grid item xs={6} sx={{ mt: 2 }} display='flex' justifyContent='end'>
        <Typography variant='subtitle1'>{ `$${ 1000 }` }</Typography>
      </Grid>
    </Grid>
  )
}
