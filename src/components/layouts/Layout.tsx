import React from 'react'
import Head from 'next/head'

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
            <meta name="keywords" content="juan, gómez, juan gómez, pokemon, pokedex "/>
        </Head>

        { /* NAVBAR  */ }

        <main>
            { children }
        </main>
    </>
  )
}