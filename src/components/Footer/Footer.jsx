'use client'

import Image from 'next/image'
import styles from './Footer.module.scss'
import logo from '../../../public/logo-dark-green.svg'
import facebook from '../../../public/icons/facebook.svg'
import instagram from '../../../public/icons/instagram.svg'
import whatsapp from '../../../public/icons/whatsapp.svg'
import Link from 'next/link'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function Footer() {
  const date = () => {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ]

    return `${monthNames[month]}/${year}`
  }

  return (
    <footer className={styles.footer} id='footer'>
      <div className={styles.footerIcons}>
        <AnchorLink offset={150} href='#top'>
          <Image
            src={logo}
            alt='Minka Logo'
            width={150}
            height={50}
          />
        </AnchorLink>
        <div className={styles.footerIconsSocial}>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.facebook.com'
          >
            <Image
              src={facebook}
              alt='icono de facebook'
              width={30}
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://www.instagram.com/minka_comunidad/'
          >
            <Image
              src={instagram}
              alt='icono de instagram'
              width={30}
            />
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            href='https://wa.me/+34685360189?text=Hello%20Kurt%20I%20love%20your%20development%20you%20are%20a%20f**king%20crack!'
          >
            <Image
              src={whatsapp}
              alt='icono de whatsapp'
              width={30}
            />
          </a>
        </div>
      </div>
      <div className={styles.footerInfo}>
        <div>
          <Link href='/saber'>
            <p className={styles.footerInfoTitle}>
              Saber más
            </p>
          </Link>
          <Link href='/about'>
            <p className={styles.text}>Sobre Minka</p>
          </Link>
          <Link href='/team'>
            <p className={styles.text}>Equipo</p>
          </Link>
          <Link href='/condiciones'>
            <p className={styles.text}>
              Condiciones generales
            </p>
          </Link>
          <Link href='/security'>
            <p className={styles.text}>Confidencialidad</p>
          </Link>
        </div>
        <div>
          <Link href='/funciones'>
            <p className={styles.footerInfoTitle}>
              Funciones
            </p>
          </Link>
          <Link href='/login'>
            <p className={styles.text}>Recaudar fondos</p>
          </Link>
          <Link href='/donar'>
            <p className={styles.text}>Donar</p>
          </Link>
        </div>
        <div>
          <Link href='/recursos'>
            <p className={styles.footerInfoTitle}>
              Recursos y apoyo
            </p>
          </Link>
          <AnchorLink offset={150} href='#faq'>
            <p className={styles.text}>FAQ</p>
          </AnchorLink>
          <Link href='/guia'>
            <p className={styles.text}>
              Guía de recaudación de fondos
            </p>
          </Link>
          <Link href='/red'>
            <p className={styles.text}>
              Red de socios para kermes y rifas
            </p>
          </Link>
          <AnchorLink offset={150} href='#testimonios'>
            <p className={styles.text}>Testimonios</p>
          </AnchorLink>
        </div>
      </div>
      <p className={styles.footerCopy}>
        App developed by{' '}
        <a
          href='https://kurtguardia.com'
          target='_blank'
          rel='noreferrer'
        >
          Kurt Guardia
        </a> - update: {date()}
         {' '}· Copyright &reg;
      </p>
    </footer>
  )
}
