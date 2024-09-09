'use client'

import Image from 'next/image'
import styles from './Navbar.module.scss'
import logo from '../../../public/logo-white.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Link from 'next/link'
import Icon from '../Icon/Icon'
import { usePathname } from 'next/navigation'

const logoIcon = (
  <Image
    src={logo}
    alt='Minka Logo'
    width={150}
    height={50}
  />
)

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className={styles.navbar}>
      <div className={styles.container}>
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
            {logoIcon}
          </Link>
        )}{' '}
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <div className={styles.about} />
              <p>
                Acerca de
                <Icon iconName='chevron-white' size={15} />
              </p>
              <ul>
                <AnchorLink offset={150} href='#'>
                  Nosotros
                </AnchorLink>
                <AnchorLink offset={150} href='#faq'>
                  FAQ
                </AnchorLink>
                <AnchorLink offset={150} href='#contact'>
                  Contáctanos
                </AnchorLink>
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
  )
}

export default Navbar
