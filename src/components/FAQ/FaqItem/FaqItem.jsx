'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import styles from './FaqItem.module.scss'
import chev from '../../../../public/icons/chevron.svg'

const Image = dynamic(() => import('next/image'), { ssr: false })

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleAnswer = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={styles.faq}>
      <h3
        onClick={toggleAnswer}
        className={styles.faqQuestion}
      >
        {question}
        <Image
          src={chev}
          alt='icono dropdown'
          width={15}
          height={15}
          className={isOpen ? styles.open : undefined}
        />
      </h3>
      {isOpen && (
        <div
          className={styles.faqAnswer}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default FaqItem