import { useState, useContext } from 'react';
import { GetServerSideProps, GetStaticPaths, GetStaticProps, NextPage } from "next"
import { useRouter } from "next/router";

import { Box, Button, Chip, Grid, Typography } from "@mui/material";

import { ShopLayout } from "@components/layouts"
import { ItemCounter, SlideShow } from "@components/ui";
import { SizeSelector } from "@components/products";

import { useProduct } from '@hooks/index';
import { CartContext } from '@context/index';
import { ICartProduct, IProduct, ValidSizes } from '@interfaces/index';
import { dbProducts } from "@database/index";

import 'react-slideshow-image/dist/styles.css'

interface IProductPageProps {
  product: IProduct
}

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

/*   SERVER SIDE RENDERING  */
/*
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
*/

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const slugs = await dbProducts.getAllProductSlug()

  return {
    paths: slugs.map(({slug}) => ({ params: { slug } })),
    fallback: "blocking"
  }
}

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {
  const  { params } = ctx
  const { slug = '' } = params as { slug: string }

  const product = await dbProducts.getProductBySlug(slug);

  if(!product) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      product
    },
    revalidate: 86_400
  }
}

const ProductPage: NextPage<IProductPageProps> = ({ product }) => {

  const router = useRouter();
  const { addProductToCart } = useContext(CartContext);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    quantity: 1
  });

  const onSelectedSize = (size: ValidSizes) => {
    setTempCartProduct(currentProduct => ({
      ...currentProduct,
      size
    }));
  }

  const onUpdateQuantity = (quantity: number) => {
    const newQuantity: number = tempCartProduct.quantity + (quantity);

    if(newQuantity > product.inStock) return;

    if(newQuantity < 1) return;
    
    setTempCartProduct(currentProduct => ({
      ...tempCartProduct,
      quantity: newQuantity
    }))
  }

  const onAddProduct = () => {
    if(tempCartProduct.size === undefined) return;

    addProductToCart(tempCartProduct);

    router.push('/cart')
  }

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
              <ItemCounter
                currentValue={ tempCartProduct.quantity }
                updateQuantity={ onUpdateQuantity }
                maxValue={ product.inStock }
              />
              <SizeSelector 
                sizes={ product.sizes } 
                selectedSize={ tempCartProduct.size }
                onSelectedSize={ onSelectedSize }
              />
            </Box>

            {
              (product.inStock > 0) 
                ? (
                  <Button color="secondary" className="circular-btn" onClick={ onAddProduct }>
                    {
                      tempCartProduct.size
                        ? 'Add to cart'
                        : 'Select a size'
                    }
                  </Button>
                )
                : (
                  <Chip label="Currently unavailable" color="error" variant="outlined"/>
                )
            }

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