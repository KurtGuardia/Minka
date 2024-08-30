import Hero from '@/components/Hero/Hero'
import styles from './page.module.scss'
import Offer from '@/components/Offer/Offer'
import Reviews from '@/components/Reviews/Reviews'
import FAQ from '@/components/FAQ/FAQ'
import Contact from '@/components/Contact/Contact'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <Offer />
      <Reviews />
      <FAQ />
      <Contact/>
      <Footer/>
    </main>
  )
}
