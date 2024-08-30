import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <div className={styles.contact} id='contact'>
      <p className={styles.contactQuestion}>
        ¿Todavía tienes dudas?
      </p>
      <p className={styles.contactText}>
        Póngase en contacto con nostros.
      </p>
      <button className={styles.buttonPrimary}>
        Contact
      </button>
    </div>
  )
}
