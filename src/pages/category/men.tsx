import { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '@components/layouts'
import { ProductList } from '@components/products'
import { FullScreenLoading } from '@components/ui'
import { useProduct } from '@hooks/useProducts'

const MenPage: NextPage = () => {

  const { products, isLoading } = useProduct('/products/?gender=men')
  
  return (
    <ShopLayout title={'Testo-Shop - men'} pageDescription={'Find the best Testo\'s proudcts for men'} >
      <Typography variant='h1' component='h1'>Men</Typography>
      <Typography variant='h2' sx={{ mb: 1 }}>All products for men</Typography>

      {
        isLoading
          ? <FullScreenLoading />
          : <ProductList products={ products }/>
      }
    </ShopLayout>
  )
}

export default MenPage