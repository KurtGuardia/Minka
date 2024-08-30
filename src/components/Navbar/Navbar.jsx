'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import logo from '../../../public/logo-white.svg'
// import chevron from '../../../public/icons/chevron.svg'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [displayAbout, setDisplayAbout] = useState(false)

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
      className={`${styles.navbar} ${
        isSticky ? styles.sticky : ''
      }`}
    >
      <div className={styles.container}>
        <Link href='/'
          onClick={(e) => {
            e.preventDefault()
            document
              .getElementById('top')
              .scrollIntoView({ behavior: 'smooth' })
          }}>
          <Image
            src={logo}
            alt='Minka Logo'
            width={150}
            height={50}
          />
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div
                className={styles.about}
                onClick={() =>
                  setDisplayAbout(!displayAbout)
                }
              >
                <p>Acerca de</p>
                {/* <Image
                src={chevron}
                alt='dropdown'
                width={10}
              /> */}
                <ul
                  style={{
                    display: displayAbout ? 'block' : 'none',
                  }}
                >
                  <Link href='#'>Nosotros</Link>
                  <Link href='#faq'>FAQ</Link>
                  <Link href='#contact'>Contáctanos</Link>
                </ul>
              </div>
            </li>
            <li className={styles.li}>
              <Link href='/donar'>Donar</Link>
            </li>
            <li className={styles.li}>
              <Link href='/recaudarfondos'>
                Recaudar fondos
              </Link>
            </li>
            <li className={styles.li}>
              <Link
                href='#footer'
                className={styles.buttonWhite}
              >
                Iniciar una campaña
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
