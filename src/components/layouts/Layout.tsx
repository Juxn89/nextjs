import React, { FC } from 'react'
import Head from 'next/head'
import { Navbar } from '@components/ui'

type LayoutProps = {
    children: JSX.Element | JSX.Element[]
}

export const Layout: FC<LayoutProps> = ({children}) => {
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
