'use client'

import Image from 'next/image'
import styles from './Navbar.module.scss'
import logo from '../../../public/logo-white.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Icon from '../Icon/Icon'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import HamburgerIcon from '../Hamburger/Hamburger'
import useIsMobile from '@/hooks/useIsDesktop'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      {(!isMobile || showMenu) && (
        <header className={styles.navbar}>
          <div
            className={styles.container}
            onClick={toggleMenu}
          >
            {pathname === '/' && (
              <AnchorLink offset={150} href='#top'>
                <Image
                  src={logo}
                  alt='Minka Logo'
                  width={150}
                  height={50}
                />
              </AnchorLink>
            )}
            {pathname !== '/' && (
              <Link offset={150} href='/'>
                {
                  <Image
                    src={logo}
                    alt='Minka Logo'
                    width={150}
                    height={50}
                  />
                }
              </Link>
            )}
            <nav className={styles.nav}>
              <ul className={styles.ul}>
                <li className={styles.li}>
                  <div className={styles.about} />
                  <p>
                    Acerca de
                    <Icon
                      iconName='chevron-white'
                      size={15}
                    />
                  </p>
                  <ul>
                    <Link offset={150} href='/about'>
                      Nosotros
                    </Link>
                    {pathname === '/' ? (
                      <AnchorLink offset={150} href='#faq'>
                        FAQ
                      </AnchorLink>
                    ) : (
                      <Link href='/faq'>FAQ</Link>
                    )}{' '}
                    {pathname === '/' ? (
                      <AnchorLink
                        offset={150}
                        href='#contact'
                      >
                        Contáctanos
                      </AnchorLink>
                    ) : (
                      <Link offset={150} href='/#contact'>
                        Contáctanos
                      </Link>
                    )}
                  </ul>
                </li>
                <li className={styles.li}>
                  <Link offset={150} href='/donar'>
                    Donar
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link offset={150} href='/login'>
                    Recaudar fondos
                  </Link>
                </li>
                <li className={styles.li}>
                  <Link
                    offset={150}
                    href='/login'
                    className={styles.button}
                  >
                    Iniciar una campaña
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
      {isMobile && (
        <HamburgerIcon
          isOpen={showMenu}
          onClick={toggleMenu}
        />
      )}
    </>
  )
}

export default Navbar
