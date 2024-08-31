'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import logo from '../../../public/logo-white.svg'
import { useOutsideClick } from '@/hooks/useOutsideClick'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)
  const [displayAbout, setDisplayAbout] = useState(false)
  const ref = useOutsideClick(() => setDisplayAbout(false))

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight
      if (window.scrollY > viewportHeight * 1.5) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }
    const handleCloseAbout = () => {
      setDisplayAbout(false)
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('scroll', handleCloseAbout)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('scroll', handleCloseAbout)
    }
  }, [])

  return (
    <header
      className={`${styles.navbar} ${
        isSticky ? styles.sticky : ''
      }`}
    >
      <div className={styles.container}>
        <AnchorLink offset={150}
          href='#top'
        >
          <Image
            src={logo}
            alt='Minka Logo'
            width={150}
            height={50}
          />
        </AnchorLink>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div
                className={styles.about}
                onClick={() =>
                  setDisplayAbout(!displayAbout)
                }
              >
                <p>Acerca de &nbsp; &darr;</p>
                <ul
                  style={{
                    display: displayAbout
                      ? 'block'
                      : 'none',
                  }}
                  ref={ref}
                >
                  <AnchorLink offset={150} href='#'>Nosotros</AnchorLink>
                  <AnchorLink offset={150} href='#faq'>FAQ</AnchorLink>
                  <AnchorLink offset={150} href='#contact'>Contáctanos</AnchorLink>
                </ul>
              </div>
            </li>
            <li className={styles.li}>
              <Link offset={150} href='/donar'>Donar</Link>
            </li>
            <li className={styles.li}>
              <Link offset={150} href='/login'>
                Recaudar fondos
              </Link>
            </li>
            <li className={styles.li}>
              <Link offset={150}
                href='/login'
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
