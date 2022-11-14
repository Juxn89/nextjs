import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { DarkLayout } from '../components/layout/DarkLayout';
import { MainLayout } from '../components/layout/MainLayout';

/*
  Multiple layouts nested: https://nextjs.org/docs/basic-features/layouts
*/

export default function about() {
  return (
    <>
      <h1 className={'title'}>
          Go to <Link href="/">home</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </>
  )
}

about.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}