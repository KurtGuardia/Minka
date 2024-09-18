import Image from 'next/image'
import styles from './HeroCard.module.scss'

const HeroCard = ({
    title,
    by,
    target,
    raised,
    image,
    query,
  }) => {
    const raisedWidth = (raised * 100) / target
    return (
      <div className={styles.heroCard}>
        <div className={styles.heroCardTop}>
          <p className={styles.heroCardTag}>{query}</p>
          <Image
            src={image}
            className={styles.heroCardImage}
            alt={title}
            width={300}
            height={200}
            layout='responsive'
          />
        </div>
        <p className={styles.heroCardTitle}>{title}</p>
        <p className={styles.heroCardText}>{by}</p>
        <div className={styles.heroCardProgressBar}>
          <span
            className={styles.heroCardProgressBarRaised}
            style={{ width: `${raisedWidth}%` }}
          ></span>
        </div>
        <div className={styles.heroCardTitle}>
          {raised} Bs. recaudados
        </div>
      </div>
    )
  }

  export default HeroCard;