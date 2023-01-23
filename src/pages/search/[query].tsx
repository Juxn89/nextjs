import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Box, Typography } from '@mui/material';
import { ShopLayout } from '@components/layouts/ShopLayout';
import { ProductList } from '@components/products';
import { dbProducts } from '@database/index';
import { IProduct } from '@interfaces/products';

interface ISearchPageProps {
  products: IProduct[],
  foundProducts: boolean,
  query: string
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx
  const { query = '' } = params as { query: string }

  if(query.length === 0) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
  
  let products = await dbProducts.getProductByTerm(query)
  const foundProducts = products.length > 0;

  if(!foundProducts) {
    products = await dbProducts.getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query
    }
  }
}

const SearchPage: NextPage<ISearchPageProps> = ({ products, foundProducts, query }) => {
  const router = useRouter()

  return (
    <ShopLayout title={'Teslo-Shop - Search'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Search product</Typography>
      {
        foundProducts
          ? <Typography variant='h2' sx={{ marginBottom: 1 }}>Result for <strong>{`"${query}"`}</strong></Typography>
          : <Box display='flex'>
              <Typography variant='h2' sx={{ mb: 1 }}>{`We didn't find any product`}</Typography>
              <Typography variant='h2' sx={{ ml: 1 }} color='secondary'>{query}</Typography>
            </Box>
      }
      
      
      <ProductList products={ products }/>

    </ShopLayout>
  )
}

export default SearchPage
