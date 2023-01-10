import { NextPage } from 'next';
import { Typography } from '@mui/material';
import { ShopLayout } from '@components/layouts/ShopLayout';
import { ProductList } from '@components/products';
import { useProduct } from '@hooks/index';
import { FullScreenLoading } from '@components/ui';

const HomePage: NextPage = () => {
  const { products, isError, isLoading } = useProduct('/products');

  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>All products</Typography>
      
      { 
        isLoading ? <FullScreenLoading /> : <ProductList products={ products }/>
      }
    </ShopLayout>
  )
}

export default HomePage
