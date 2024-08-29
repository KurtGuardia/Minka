'use client'

import Image from 'next/image'
import { useState } from 'react'
import styles from './FaqItem.module.scss'
import chev from '../../../../public/icons/chevron.svg'

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
          className={isOpen && styles.open}
        />
      </h3>
      {isOpen && (
        <div
          className={styles.faqAnswer}
          onClick={toggleAnswer}
        >
          {answer}
        </div>
      )}
    </div>
  )
}

export default FaqItem
