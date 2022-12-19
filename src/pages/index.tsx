import { ShopLayout } from '@components/layouts/ShopLayout';
import { Typography } from '@mui/material';
import { initialData } from '@database/products'
import { ProductList } from '@components/products';

export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>All products</Typography>

      <ProductList products={ initialData.products as any }/>
    </ShopLayout>
  )
}
