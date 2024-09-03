'use client'

import styles from './Hero.module.scss'
import Link from 'next/link'
import img from '../../../public/dog.png'
import Hero_Card from './Hero_Card/Hero_Card'
import Hero_Filter from './Hero_Filter/Hero_Filter'
import { useState } from 'react'

const dummyData = [
  {
    id: 1,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 3000,
    raised: 2500,
    query: 'Cercanas',
  },
  {
    id: 2,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 3000,
    raised: 2500,
    query: 'Últimas',
  },
  {
    id: 3,
    title: 'Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: img,
    target: 3000,
    raised: 2500,
    query: 'Antiguas',
  },
]

export default function Hero() {
  const [query, setQuery] = useState('')
  const filteredData = dummyData.filter((each) => each.query === query)

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
      <Hero_Filter options={dummyData.map(item => item.query)} current={query} setQuery={setQuery}/>
      <div className={styles.heroShowcase}>
        {dummyData.map((card) => (
          <Hero_Card {...card} key={card.id} />
        ))}
      </div>
    </div>
  )
}
