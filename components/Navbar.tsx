import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import style from './Navbar.module.css'

export const Navbar = () => {
  return (
    <nav className={ style['menu-container'] }>
        <ActiveLink text='Home' href="/" />
        <ActiveLink text='About' href="/about"/>
        <ActiveLink text='Contact' href="/contact" />
        <ActiveLink text='Help' href="/help" />
    </nav>
  )
}
