import styles from './Hero.module.scss'
import Link from 'next/link'
import img from '../../../public/dog.png'
import Hero_Card from './Hero_Card/Hero_Card'

const dummyData = [
  {
    id: 1,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 2500,
    raised: 1000,
  },
  {
    id: 2,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 2500,
    raised: 1000,
  },
  {
    id: 3,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 2500,
    raised: 1000,
  },
]

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
      <div className={styles.heroShowcase}>
        {/* filter */}
        {dummyData.map((card) => (
          <Hero_Card {...card} key={card.id}/>
        ))}
      </div>
    </div>
  )
}
