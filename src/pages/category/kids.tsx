import { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '@components/layouts'
import { FullScreenLoading } from '@components/ui';
import { ProductList } from '@components/products';
import { useProduct } from '@hooks/index';

const KidsPage: NextPage = () => {

  const { products, isLoading } = useProduct('/products/?gender=kid')

  return (
    <ShopLayout title={'Testo-Shop - Kids'} pageDescription={'Find the best Testo\'s proudcts for kids'} >
      <Typography variant='h1' component='h1'>Kids</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products for kids</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products }/>
      }
    </ShopLayout>
  )
}

export default KidsPage