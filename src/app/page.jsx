import Hero from '@/components/Hero/Hero'
import styles from './page.module.scss'
import Offer from '@/components/Offer/Offer'
import Reviews from '@/components/Reviews/Reviews'
import FAQ from '@/components/FAQ/FAQ'
import Contact from '@/components/Contact/Contact'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={styles.headingSec}>
        NOT YET RESPONSIVE. Check it out on desktop, thank
        you.
      </h1>
      <div className={styles.mainContent}>
        <Hero />
        <Offer />
        <Reviews />
        <FAQ />
        <Contact />
      </div>
    </main>
  )
}
