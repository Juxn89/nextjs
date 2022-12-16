import { ShopLayout } from '@components/layouts/ShopLayout';
import { Card, CardActionArea, CardMedia, Grid, Typography } from '@mui/material';
import { initialData } from '@database/products'

export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>All products</Typography>

      <Grid container spacing={4}>
        {
          initialData.products.map(item => (            
            <Grid key={item.slug} item xs={6} sm={4}>
              <Card>
                <CardActionArea>
                  <CardMedia component='img' image={ `products/${ item.images[0] }` } alt={ item.title }></CardMedia>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </ShopLayout>
  )
}
