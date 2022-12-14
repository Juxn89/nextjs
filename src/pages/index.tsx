import Head from 'next/head'
import Image from 'next/image'
import { ShopLayout } from '@components/layouts/ShopLayout';
import { Typography } from '@mui/material';

export default function Home() {
  return (
    <ShopLayout title={'Teslo-Shop - Home'} pageDescription={'Find the best Teslo\'s products here'}>
      <Typography variant='h1' component='h1'>Shop</Typography>
      <Typography variant='h2' sx={{ marginBottom: 1 }}>All products</Typography>
    </ShopLayout>
  )
}
