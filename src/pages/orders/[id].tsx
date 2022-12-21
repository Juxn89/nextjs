import { NextPage } from 'next'
import NextLink from 'next/link'
import { Box, Card, CardContent, Chip, Divider, Grid, Link, Typography } from '@mui/material'
import { CreditCardOffOutlined, CreditScoreOutlined } from '@mui/icons-material'
import { ShopLayout } from '@components/layouts'
import { CartList, OrderSummary } from '@components/cart'

const OrderPage: NextPage = () => (
  <ShopLayout title={"Order summary No. XXXX-XXXX"} pageDescription={"Order summary"}>
    <Typography variant="h1" component="h1">Order summary</Typography>

    <Chip sx={{ my: 2 }} label="Outstanding" variant='outlined' color='error' icon={ <CreditCardOffOutlined /> }/>
    <Chip sx={{ my: 2 }} label="Paid-up order" variant='outlined' color='success' icon={ <CreditScoreOutlined /> }/>

    <Grid container>
      <Grid item xs={12} sm={7}>
        <CartList />
      </Grid>
      <Grid item xs={12} sm={5}>
        <Card className='summary-card'>
          <CardContent>
            <Typography variant='h2'>Summary (3 items)</Typography>
            <Divider sx={{ my: 1 }} />

            <Box display='flex' justifyContent='space-between'>
              <Typography variant='subtitle1'>Delivery address</Typography>
              <NextLink href='/' passHref legacyBehavior>
                <Link underline='always'>
                  Edit
                </Link>
              </NextLink>
            </Box>
            
            <Typography>Juan Gómez</Typography>
            <Typography>Somewhere</Typography>
            <Typography>City name, postal code</Typography>
            <Typography>Country</Typography>
            <Typography>Phone number</Typography>

            <Divider sx={{ my: 1 }} />

            <Box display='flex' justifyContent='end'>
              <NextLink href='/cart' passHref legacyBehavior>
                <Link underline='always'>
                  Edit
                </Link>
              </NextLink>
            </Box>

            <OrderSummary />

            <Box sx={{ mt: 3 }}>
              <Typography>Pay order</Typography>
              <Chip sx={{ my: 2 }} label="Paid-up order" variant='outlined' color='success' icon={ <CreditScoreOutlined /> }/>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </ShopLayout>
)

export default OrderPage