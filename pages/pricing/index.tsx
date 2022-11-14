import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../../components/layout/MainLayout'

const index = () => {
  return (
    <MainLayout>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Go to <Link href="/home">home</Link>
      </h1>
    </MainLayout>
  )
}

export default index;