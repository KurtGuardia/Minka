import Hero from '@/components/Hero/Hero'
import styles from '../page.module.scss'
import Offer from '@/components/Offer/Offer'
import Reviews from '@/components/Reviews/Reviews'
import FAQ from '@/components/FAQ/FAQ'
import Contact from '@/components/Contact/Contact'

export default function Home() {
  return (
    <>
      <div className={styles.mainContent}>
        <Hero />
        <Offer />
        <Reviews />
        <FAQ min={true} />
        <Contact />
      </div>
    </>
  )
}
