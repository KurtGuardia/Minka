import Link from 'next/link'
import Icon from '../Icon/Icon'
import styles from './Offer.module.scss'

export default function Offer() {
  return (
    <div className={styles.offer}>
      <p className={styles.textAlt}>
        Plataforma de Donaciones
      </p>
      <h2 className={styles.headingSec}>
        Lo que ofrece Minka
      </h2>

      <div className={styles.offerList}>
        <div className={styles.offerListCard}>
          <div className={styles.offerListCardTitle}>
            <Icon iconName='transfer' size={40} />
            <p className={styles.text}>
              Transferencias de dinero fácil
            </p>
          </div>
          <p className={styles.text}>
            Los donantes pueden enviar dinero mediante
            transferencia con tarjeta de crédito o código QR
          </p>
        </div>
        <div className={styles.offerListCard}>
          <div className={styles.offerListCardTitle}>
            <Icon iconName='tax' size={40} />
            <p className={styles.text}>Asequible precio</p>
          </div>
          <p className={styles.text}>
            Para garantizar la sostenibilidad de la
            plataforma, los donantes cubrirán una tasa de
            transferencia flexible y una tasa administrativa
            fija.
          </p>
        </div>
        <div className={styles.offerListCard}>
          <div className={styles.offerListCardTitle}>
            <Icon iconName='tap' size={40} />
            <p className={styles.text}>Fácil de usar</p>
          </div>
          <p className={styles.text}>
            Con Minka, los solicitantes de ayuda pueden
            iniciar una campaña de donaciones en un par de
            clics y centralizar la comunicación con los
            donantes internacionales y locales.
          </p>
        </div>
        <div className={styles.offerListCard}>
          <div className={styles.offerListCardTitle}>
            <Icon iconName='shield' size={40} />
            <p className={styles.text}>fiable</p>
          </div>
          <p className={styles.text}>
            Todas las campañas son verificadas por Minka, lo
            que garantiza su credibilidad ante los donantes.
          </p>
        </div>
      </div>

      <Link href='/saber'>
        <button className={styles.buttonPrimary}>
          Saber más
        </button>
      </Link>
    </div>
  )
}
