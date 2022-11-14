import Head from 'next/head';
import Link from 'next/link';
import React from 'react'
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

interface IMainLayoutPorps {
  children: JSX.Element | JSX.Element[]
}

export const MainLayout = ({children}: IMainLayoutPorps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
}
