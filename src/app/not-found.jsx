import Link from 'next/link'
import styles from './not-found.module.scss'

export default function NotFoud() {
  return (
    <div className={styles.notFound}>
      <h1 className={styles.heading}>
        Esta sección sigue en construcción. <br />
        vuelve al <Link href='/'>inicio</Link>
      </h1>
    </div>
  )
}
