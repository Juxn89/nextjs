import { FC, useMemo, useState } from 'react';
import NextLink from 'next/link'
import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material'
import { IProduct } from '@interfaces/index';

interface ProductCardProps {
  product: IProduct
}

export const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  
  const productImage = useMemo(() => {
    return isHovered ? `products/${ product.images[1] }` : `products/${ product.images[0] }`
  }, [isHovered])

  return (
    <Grid 
      item xs={6} 
      sm={4} 
      onMouseEnter={ () => setIsHovered(true) } 
      onMouseLeave={ () => setIsHovered(false) }
    >
      <Card>
        <NextLink href='/product/slug' passHref legacyBehavior prefetch={false}>
          <Link>
            <CardActionArea>
              <CardMedia 
                component='img' 
                image={ productImage } 
                alt={ product.title } 
                className="fadeIn"
                onLoad={ () => console.log('loaded') }
              />
            </CardActionArea>          
          </Link>
        </NextLink>

      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>{ product.title }</Typography>
        <Typography fontWeight={500}>{ `$${product.price}` }</Typography>
      </Box>
    </Grid>
  )
}