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
        <a
          href='mailto:kurtguardia@gmail.com?subject=Great%20website!&body=Love%20the%20landing%20page!!%20'
          target='_blank'
          rel='noreferrer'
        >
          Contact
        </a>
      </button>
    </div>
  )
}
