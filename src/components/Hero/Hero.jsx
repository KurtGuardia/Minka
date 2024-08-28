import Image from 'next/image'
import styles from './Hero.module.scss'
import img from '../../../public/child.png'

export default function Hero() {
  return (
    <div className={styles.hero}>
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
        <button className={styles.buttonPrimary}>
          Recaudar fondos
        </button>
        <button className={styles.buttonSecondary}>
          Donar
        </button>
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
