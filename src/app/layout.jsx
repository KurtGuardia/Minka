// app/layout.js
import { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.scss';

export const metadata = {
  title: 'Minka: Ayudando Bolivia',
  description: 'Minka es una plataforma que centraliza las donaciones para diferentes causas en Bolivia...',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={styles.html}>
      <body className={styles.body}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}