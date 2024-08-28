'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      if (window.scrollY > viewportHeight * 1.5) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () =>
      window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`${styles.header} ${
        isSticky ? styles.sticky : ''
      }`}
    >
      <div className={styles.container}>
        <Link href='/'>
          <Image
            src='/logo.svg'
            alt='Minka Logo'
            width={150}
            height={50}
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <Link href='/recaudarfondos'>
                Recaudar fondos
              </Link>
            </li>
            <li className={styles.li}>
              <Link href='/donar'>Donar</Link>
            </li>
            <li className={styles.li}>
              <Link
                href='/ingresar'
                className={styles.buttonWhite}
              >
                Ingresar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
