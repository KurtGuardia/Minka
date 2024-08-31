import Image from 'next/image'
import styles from './Hero.module.scss'
import img from '../../../public/child.png'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className={`section ${styles.hero}`} id='top'>
      <div className={styles.heroTop}>
        <h1 className={styles.heading}>
          Apoya a tu comunidad
        </h1>
        <p
          className={`${styles.heroTopText} ${styles.textAlt}`}
        >
          Con la primera plataforma de donaciones enfocada
          en Bolivia.
        </p>
        <Link href='/login'>
          <button className={styles.buttonPrimary}>
            Recaudar fondos
          </button>
        </Link>
        <Link href='/donar'>
          <button className={styles.buttonSecondary}>
            Donar
          </button>
        </Link>
      </div>
      <div className={styles.heroImg}>
        <Image
          src={img}
          alt='Una niña boliviana buscando ayuda para su educación'
          fill
          sizes='(max-width: 640px) 100vw,
            (max-width: 1280px) 100vw,
            100vw'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </div>
  )
}
