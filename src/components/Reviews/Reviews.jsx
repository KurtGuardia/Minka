import Image from 'next/image'
import styles from './Reviews.module.scss'
import woman from '../../../public/woman.png'
import woman2 from '../../../public/woman2.png'
import man from '../../../public/man.png'

export default function Reviews() {
  return (
    <div className={styles.reviews}>
      <p className={styles.textAlt}>Testimonios</p>
      <h2 className={styles.headingSec}>
        Qué opinan los usuarios
      </h2>
      <div className={styles.container}>
        <div className={styles.reviewsCard}>
          <Image
            width={90}
            src={woman}
            alt='Foto de Juana Flores'
          />
          <p className={styles.reviewsCardName}>
            Juana Flores
          </p>
          <p className={styles.reviewsCardQuote}>
            Gracias a Minka, pude recaudar fondos para la
            cirugía urgente de un perrito callejero. La
            transferencia de dinero fue súper fácil con el
            código QR y la comunidad fue muy solidaria.
          </p>
        </div>
        <div className={styles.reviewsCard}>
          <Image
            width={90}
            src={man}
            alt='Foto de Jose Vargas'
          />{' '}
          <p className={styles.reviewsCardName}>
            Jose Vargas
          </p>
          <p className={styles.reviewsCardQuote}>
            No sabía cómo pagar el tratamiento médico de mi
            hermano hasta que descubrí Minka. Inicié una
            campaña en solo un par de clics y logramos
            reunir el dinero necesario gracias a conocidos
            de la familia que viven en el extranjero.
          </p>
        </div>
        <div className={styles.reviewsCard}>
          <Image
            width={90}
            src={woman2}
            alt='Foto de Maria Rojas'
          />{' '}
          <p className={styles.reviewsCardName}>
            Maria Rojas
          </p>
          <p className={styles.reviewsCardQuote}>
            He donado a varias campañas a través de Minka y
            la experiencia siempre ha sido excelente. La
            plataforma es muy fácil de donar con la tarjeta
            credita, las transferencias son seguras y me
            siento tranquilo sabiendo que todas las campañas
            están verificadas.
          </p>
        </div>
      </div>
      <button className={styles.buttonPrimary}>
        Empieza
      </button>
    </div>
  )
}
