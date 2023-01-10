import { GetServerSideProps, NextPage } from "next"
import { useRouter } from "next/router";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "@components/layouts"
import { ItemCounter, SlideShow } from "@components/ui";
import { SizeSelector } from "@components/products";
import { useProduct } from '@hooks/index';
import { IProduct } from '@interfaces/index';
import 'react-slideshow-image/dist/styles.css'
import { dbProducts } from "@database/index";

interface IProductPageProps {
  product: IProduct
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { params } = ctx;
  const { slug = '' } = params as { slug: string };

  const product = await dbProducts.getProductBySlug(slug)

  if(!product) return { 
    redirect: {
      destination: '/',
      permanent: false
    }
  };

  return {
    props: {
      product
    }
  }
}

const ProductPage: NextPage<IProductPageProps> = ({ product }) => {

  return (
    <ShopLayout title={ product.title } pageDescription={ product.description }>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={7}>
          <SlideShow images={ product.images }/>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display={'flex'} flexDirection='column'>
            <Typography variant="h1" component='h1'>{ product.title }</Typography>
            <Typography variant="subtitle1" component='h2'>{ `$${product.price}` }</Typography>
            
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2">Quantity</Typography>
              <ItemCounter />
              <SizeSelector sizes={ product.sizes } />
            </Box>

            <Button color="secondary" className="circular-btn">
              Add to cart
            </Button>

            <Chip label="Not in stock" color="error" variant="outlined"/>

            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle2">Description</Typography>
              <Typography variant="body2">{ product.description }</Typography>
            </Box>
          </Box>
        </Grid>
        
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage