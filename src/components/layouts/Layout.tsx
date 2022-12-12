import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '@components/ui'

interface ILayoutProps {
    children: JSX.Element | JSX.Element[]
}

export const Layout = ({children}: ILayoutProps) => {
  return (
    <>
        <Head>

        </Head>
        <nav>
          <Navbar />
        </nav>
        <main style={{ padding: '20px 50px' }}>
            { children }
        </main>
    </>
  )
}
