import { FC } from 'react';
import { Card, CardActionArea, CardMedia, Grid } from '@mui/material'
import { IProduct } from '@interfaces/index';

interface ProductCardProps {
  product: IProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  return (
  <Grid item xs={6} sm={4}>
    <Card>
        <CardActionArea>
          <CardMedia component='img' image={ `products/${ product.images[0] }` } alt={ product.title }></CardMedia>
        </CardActionArea>
    </Card>
  </Grid>
  )
}
