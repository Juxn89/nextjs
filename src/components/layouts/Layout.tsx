import React from 'react'
import Head from 'next/head'
import { Navbar } from '@components/ui';
import { useRouter } from 'next/router';

type LayoutProps = {
    children: JSX.Element | JSX.Element[],
    title?: string
}

const ORIGIN = (typeof window === 'undefined') ? '' : window.location.origin

export const Layout = ({children, title}: LayoutProps) => {

  return (
    <>
        <Head>
            <title>{ title || 'Pokemon App' }</title>
            <meta name="author" content="Juan Gómez"/>
            <meta name="description" content="Information about pokemon"/>
            <meta name="keywords" content={ `${title}, juan, gómez, juan gómez, pokemon, pokedex`}/>

            <meta property="og:title" content={`Information about ${title}`} />
            <meta property="og:description" content={`This page is about ${title}`} />
            <meta property="og:image" content={`${ORIGIN}/img/banner_pokemon_seo.png`} />
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