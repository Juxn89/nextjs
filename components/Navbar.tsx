import Link from 'next/link'
import React from 'react'
import { ActiveLink } from './ActiveLink'
import style from './Navbar.module.css'

const menuItems = [
  {
      text: 'Home',
      href: '/'
  },
  {
      text: 'About',
      href: '/about'
  },
  {
      text: 'Contact',
      href: '/contact'
  },
  {
      text: 'Pricing',
      href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={ style['menu-container'] }>
      {
        menuItems.map((menu) => (
          <ActiveLink key={menu.href} href={ menu.href } text={ menu.text }/>
        ))
      }
    </nav>
  )
}
