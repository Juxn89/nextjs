import { NextPage } from "next"
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { ShopLayout } from "@components/layouts"
import { initialData } from "@database/products"
import { ItemCounter, SlideShow } from "@components/ui";
import 'react-slideshow-image/dist/styles.css'

const product = initialData.products[0];

const slug: NextPage = () => {
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

export default slug