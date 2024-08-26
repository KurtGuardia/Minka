import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Que opinan</h1>
      <h2 className={styles.headingSec}>Hello Minka</h2>
      <p className={styles.textAlt}>Test</p>
      <p className={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Et harum quo dolores repellendus unde.
        Distinctio repellat voluptatem deserunt autem ab
        quasi reiciendis fuga modi voluptate ex nemo animi,
        doloribus nulla.
      </p>
      <button className={styles.buttonPrimary}>Try me</button>
      <button className={styles.buttonSecondary}>test me</button>
    </main>
  )
}
