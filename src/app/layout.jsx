import styles from './page.module.scss'
import Navbar from '../components/Navbar/Navbar'

export const metadata = {
  title: 'Minka: Ayudando Bolivia',
  description:
    'Minka es una plataforma que centraliza las donaciones para diferentes causas en Bolivia. Es una excelente manera de encontrar causas que te importan y apoyarlas financieramente. Con Minka, puedes hacer una diferencia en las vidas de las personas necesitadas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={styles.html}>
      <body className={styles.body}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
