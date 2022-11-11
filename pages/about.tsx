import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { Navbar } from '../components/Navbar'
import styles from '../styles/Home.module.css'

export default function about() {
  return (
    <div className={styles.container}>
        <Head>
            <title>Create Next App</title>
            <meta name="description" content="Home Page" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />

        <main className={styles.main}>
            <h1 className={styles.title}>
                Go to <Link href="/">home</Link>
            </h1>
        </main>
    </div>
  )
}
