import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../components/layout/MainLayout';

export default function about() {
  return (
    <MainLayout>
      <h1 className={'title'}>
          Go to <Link href="/">home</Link>
      </h1>
    </MainLayout>
  )
}
