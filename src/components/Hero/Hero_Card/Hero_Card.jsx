import Image from 'next/image'
import styles from './Hero_Card.module.scss'

export default function Hero_Card({
  title,
  by,
  target,
  raised,
  image,
  query,
}) {
  const raisedWidth = (raised * 100) / target

  return (
    <div className={styles.card}>
      <div className={styles.cardTop}>
        <p className={styles.cardTag}>{query}</p>
        <Image
          src={image}
          className={styles.cardImage}
          alt={title}
        />
      </div>
      <p className={styles.cardTitle}>{title}</p>
      <p className={styles.cardText}>{by}</p>
      <div className={styles.cardProgressBar}>
        <span
          className={styles.cardProgressBarRaised}
          style={{ width: `${raisedWidth}%` }}
        ></span>
      </div>
      <div className={styles.cardTitle}>
        {raised} Bs. recaudados
      </div>
    </div>
  )
}
