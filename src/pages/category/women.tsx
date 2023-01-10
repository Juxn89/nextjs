import { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '@components/layouts'
import { FullScreenLoading } from '@components/ui'
import { ProductList } from '@components/products'
import { useProduct } from '@hooks/index'

const WomenPage: NextPage = () => {

  const { products, isLoading } = useProduct('/products/?gender=women')
  
  return (
    <ShopLayout title={'Testo-Shop - Women'} pageDescription={'Find the best Testo\'s proudcts for women'} >
      <Typography variant='h1' component='h1'>Women</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products for Women</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products }/>
      }
    </ShopLayout>
  )
}

export default WomenPage