'use client'

import Image from 'next/image'
import styles from './Footer.module.scss'
import logo from '../../../public/logo-dark-green.svg'
import facebook from '../../../public/icons/facebook.svg'
import instagram from '../../../public/icons/instagram.svg'
import whatsapp from '../../../public/icons/whatsapp.svg'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer} id='footer'>
      <div className={styles.footerIcons}>
        <Link
          href='#'
          onClick={(e) => {
            e.preventDefault()
            document
              .getElementById('top')
              .scrollIntoView({ behavior: 'smooth' })
          }}
        >
          <Image
            src={logo}
            alt='Minka Logo'
            width={150}
            height={50}
          />
        </Link>
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
            href='https://wa.me/+34685360189?text=Hello Kurt I love your development you are a f**king crack!'
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
          <p className={styles.footerInfoTitle}>
            Saber más
          </p>
          <p className={styles.text}>Sobre Minka</p>
          <p className={styles.text}>Equipo</p>
          <p className={styles.text}>
            Condiciones generales
          </p>
          <p className={styles.text}>Confidencialidad</p>
        </div>
        <div>
          <p className={styles.footerInfoTitle}>
            Funciones
          </p>
          <p className={styles.text}>Recaudar fondos</p>
          <p className={styles.text}>Donar</p>
        </div>
        <div>
          <p className={styles.footerInfoTitle}>
            Recursos y apoyo
          </p>
          <p className={styles.text}>FAQ</p>
          <p className={styles.text}>
            Guía de recaudación de fondos
          </p>
          <p className={styles.text}>
            Red de socios para kermes y rifas
          </p>
          <p className={styles.text}>Testimonios</p>
        </div>
      </div>
      <p className={styles.footerCopy}>
        App developed by{' '}
        <a href='https://kurtguardia.com'>Kurt Guardia</a> ·
        Copyright &copy;
      </p>
    </div>
  )
}
