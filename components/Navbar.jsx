import Link from 'next/link'
import React from 'react'
import { ActiveLinks } from './ActiveLinks'
import styles from "./Navbar.module.css"
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


/*El text y href son argumentos tambiien*/ 
export const Navbar = () => {
  return (
    <nav className={styles.menu}>
      {menuItems.map((items) =>
      
        <ActiveLinks key={items.href} text={items.text} href={items.href}/>

        )
      }
    </nav>
  )
}
