import React from 'react'
import Head from 'next/head'
import { Navbar } from '@components/ui';

type LayoutProps = {
    children: JSX.Element | JSX.Element[],
    title?: string
}

export const Layout = ({children, title}: LayoutProps) => {
  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Juan Gómez"/>
            <meta name="description" content="Information about pokemon"/>
            <meta name="keywords" content={ `${title}, juan, gómez, juan gómez, pokemon, pokedex`}/>
        </Head>

        <Navbar />

        <main style={{
          padding: '0px 20px'
        }}>
            { children }
        </main>
    </>
  )
}