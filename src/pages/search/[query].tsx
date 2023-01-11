import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { Typography } from '@mui/material';
import { ShopLayout } from '@components/layouts/ShopLayout';
import { ProductList } from '@components/products';
import { FullScreenLoading } from '@components/ui';
import { useProduct } from '@hooks/index';
import { dbProducts } from '@database/index';
import { IProduct } from '@interfaces/products';

interface ISearchPageProps {
  products: IProduct[]
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

  return {
    props: {
      products
    }
  }
}

const SearchPage: NextPage<ISearchPageProps> = ({ products }) => {
  const router = useRouter()
  const { query } = router.query

  return (
    <ShopLayout title={'Teslo-Shop - Search'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Search product</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>
        Result for <strong>{`"${query}"`}</strong>
      </Typography>
      
      <ProductList products={ products }/>

    </ShopLayout>
  )
}

export default SearchPage
