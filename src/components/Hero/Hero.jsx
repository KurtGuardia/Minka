'use client'

import styles from './Hero.module.scss'
import Link from 'next/link'
import imgDog from '../../../public/dog.png'
import imgDoc from '../../../public/doc.png'
import imgChild from '../../../public/child.png'
import Hero_Filter from './Hero_Filter/Hero_Filter'
import { useEffect, useState } from 'react'
import HeroCarousel from './HeroCarousel/HeroCarousel'

const dummyData = [
  {
    id: 1,
    title: '1 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgDog,
    target: 5000,
    raised: 3000,
    query: 'Cercanas',
  },
  {
    id: 2,
    title: '2 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgDoc,
    target: 3000,
    raised: 2500,
    query: 'Últimas',
  },
  {
    id: 3,
    title: '3 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgChild,
    target: 1000,
    raised: 350,
    query: 'Antiguas',
  },
  {
    id: 4,
    title: '4 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgChild,
    target: 1000,
    raised: 350,
    query: 'Antiguas',
  },
  {
    id: 4,
    title: '4 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgChild,
    target: 1000,
    raised: 350,
    query: 'Antiguas',
  },
  {
    id: 4,
    title: '4 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgChild,
    target: 1000,
    raised: 350,
    query: 'Antiguas',
  },
  {
    id: 4,
    title: '4 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgChild,
    target: 1000,
    raised: 350,
    query: 'Antiguas',
  },
  {
    id: 5,
    title: '5 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgDoc,
    target: 3000,
    raised: 2500,
    query: 'Últimas',
  },
  {
    id: 6,
    title: '6 Aligned with City, finishes with the same',
    by: 'por Aid-seeker para Beneficiario',
    image: imgDog,
    target: 5000,
    raised: 3000,
    query: 'Cercanas',
  },
]

export default function Hero() {
  const [query, setQuery] = useState('Todas')
  const filteredData =
    query === 'Todas'
      ? dummyData
      : dummyData.filter((each) => each.query === query)

      useEffect(() => {
        document.documentElement.style.setProperty('--total-cards', filteredData.length);
      }, [filteredData]);
      console.log(filteredData.length);



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
      <Hero_Filter
        options={[
          'Todas',
          ...new Set(dummyData.map((item) => item.query)),
        ]}
        current={query}
        setQuery={setQuery}
      />
      <HeroCarousel
      key={query}
        cards={filteredData}
        interval={2000}
        transitionDuration={500}
      />
    </div>
  )
}
