import styles from './FAQ.module.scss'
import FaqItem from './FaqItem/FaqItem'

const faqsGeneral = [
  {
    question: '¿Qué tipo de campaña puedo iniciar?',
    answer:
      'Minka es una plataforma de crowdfunding diseñada para facilitar la recaudación de fondos a quienes lo necesiten, ofreciendo un entorno seguro y transparente para realizar donaciones. Los usuarios pueden contribuir a diversas campañas mediante transferencias por QR o utilizando tarjetas de débito o crédito.',
  },
  {
    question: '¿Dónde está disponible Minka?',
    answer:
      'Minka es una plataforma digital en internet, se puede acceder desde cualquier parte del mundo, solo necesitas conexión a internet.',
  },
  {
    question:
      '¿Minka es una plataforma segura para recaudar fondos?',
    answer:
      'Si. Minka garantiza que todo lo recaudado llegue a la persona o institución beneficiada con la campaña de recaudación de fondos.',
  },
  {
    question:
      '¿Qué tipos de campañas son más exitosas en Minka?',
    answer:
      'Las campañas más exitosas suelen ser aquellas que presentan una necesidad clara y urgente, con una historia conmovedora y transparente.',
  },
]

const faqsInit = [
  {
    question: '¿Qué tipo de campaña puedo iniciar?',
    answer:
      'Puedes iniciar campañas de recaudación de fondos para cubrir necesidades personales, ya sea para ti o para otras personas en Bolivia que necesiten ayuda económica​. Solo necesitas tener tu carnet de identidad si eres una persona natural o tu Número de Identificación Tributaria, si eres una persona jurídica.',
  },
  {
    question: '¿Cómo creo una campaña?',
    answer:
      'Para crear una campaña, solo debes tener una cuenta autenticada y seguir los pasos establecidos en la página web. En caso de cualquier dificultad, recibirás asistencia para gestionar todos los aspectos, incluyendo la creación y la promoción a través de la plataforma en línea y las redes sociales',
  },
  {
    question:
      '¿Hay algún costo inicial para iniciar una campaña o donar?',
    answer:
      'No existe ningún costo inicial, sin embargo se cobrará un porcentaje del monto total recaudado, que es destinado a cubrir costos administrativos.',
  },
  {
    question: '¿Puedo crear una campaña para otra persona?',
    answer:
      'Sí, puedes crear campañas para ayudar a otras personas en Bolivia​ con su previo consentimiento.',
  },
  {
    question:
      '¿Cuáles son las condiciones para crear una campaña de donación?',
    answer:
      'Las campañas deben ser verificadas para asegurar su autenticidad. Esto incluye la verificación de las necesidades de los beneficiarios dependiendo de sus requisitos en cada tipo de campaña.',
  },
  {
    question:
      '¿Qué sucede si no alcanzo mi objetivo de donación?',
    answer:
      'Si no alcanzas el monto establecido como objetivo al inicio de la campaña, Minka de todas formas te transferirá todo lo recaudado, menos el porcentaje destinado a cubrir gastos administrativos',
  },
  {
    question:
      '¿Cómo puedo involucrar a más personas para apoyar mi campaña?',
    answer:
      'Te recomendamos utilizar redes sociales, contactar medios locales, y aprovechar nuestra plataforma para llegar a una audiencia más amplia e involucrar a más personas en tu causa.',
  },
  {
    question:
      '¿Qué pasa si quiero cambiar el objetivo de recaudación durante la campaña?',
    answer:
      'Puedes ajustar el objetivo de tu campaña, pero Minka realizará una nueva verificación antes de que el cambio se haga efectivo.',
  },
  {
    question:
      '¿Minka ofrece algún tipo de soporte o asesoría para mejorar mi campaña?',
    answer:
      'Sí, al momento de crear la campaña tendrás varios consejos en cada paso para crear una campaña exitosa basada en las que tuvieron mejores resultados.',
  },
  {
    question:
      '¿Puedo vincular mi campaña con redes sociales o sitios web externos?',
    answer:
      'Sí, puedes compartir tu campaña fácilmente en redes sociales y sitios web externos mediante enlaces directos y herramientas de integración.',
  },
  {
    question: '¿Cómo puedo recibir el dinero recaudado?',
    answer:
      'Mediante transferencias a un banco o en efectivo?',
  },
]

const faqsDonation = [
  {
    question: '¿Puedo donar de manera anónima?',
    answer:
      'Sí, para garantizar la transparencia en las recaudaciones, es necesario completar todos los datos solicitados. Sin embargo, al momento de realizar la donación, puedes optar por hacerlo de manera anónima. De esta forma, tanto el organizador de la campaña como el beneficiario no tendrán acceso a tu información personal, y tu donación será registrada como anónima.',
  },
  {
    question:
      '¿Cómo puedo saber si mi donación ha sido recibida?',
    answer:
      'Recibirás actualizaciones regulares sobre el impacto de tus donaciones, lo que indica que se te notificará sobre la recepción de tus aportes​.',
  },
  {
    question: '¿Puedo donar desde fuera de Bolivia?',
    answer:
      'Sí, las personas en el extranjero pueden donar a campañas en Bolivia utilizando tarjetas de débito o crédito.',
  },
  {
    question:
      '¿Cómo puedo recibir actualizaciones sobre el estado de mi donación?',
    answer:
      'Toda la información sobre las donaciones será actualizada constantemente en la página web. Sin embargo, puedes optar por suscribirte a la página para que te lleguen las actualizaciones a tu correo electrónico.',
  },
  {
    question:
      '¿Puedo solicitar una devolución de mi donación?',
    answer:
      'Las donaciones realizadas son definitivas y no pueden ser reembolsadas, excepto en casos especiales de fraude confirmado y solucionado.',
  },
]

const faqsPayment = [
  {
    question:
      '¿Cuál es la estructura de las tasas (comisiones)?',
    answer:
      'Se aplica un pequeño porcentaje flexible y un monto fijo por cada donación procesada. Además, existe la opción de que los donantes contribuyan directamente al mantenimiento de la plataforma a través de donaciones voluntarias​.',
  },
  {
    question:
      '¿Cuáles son las opciones de pago para los donantes?',
    answer:
      'Los donantes pueden realizar pagos mediante tarjetas de débito o crédito y transferencias a través de QR.',
  },
  {
    question:
      '¿Cómo y cuándo se transfieren los fondos recaudados?',
    answer:
      'Los fondos recaudados serán transferidos una vez que la persona o institución que organizó la campaña de recolección de fondos lo solicite, siempre y cuando se haya cumplido el monto señalado como objetivo al inicio de la campaña o haya transcurrido el tiempo señalado.',
  },
  {
    question:
      '¿Hay un monto mínimo o máximo para las donaciones?',
    answer: 'No existe ningún monto mínimo o máximo.',
  },
  {
    question:
      '¿Puedo retirar mi campaña antes de que finalice el plazo?',
    answer:
      'En principio no, sin embargo en caso de extrema necesidad tu caso será analizado por el equipo de Minka y puede darse una excepción.',
  },
]

const faqsSecurity = [
  {
    question: '¿Por qué Minka verifica las campañas?',
    answer:
      'Minka verifica las campañas para asegurar la autenticidad de las necesidades de los beneficiarios y garantizar que los fondos se destinen a las causas correctas​.',
  },
  {
    question:
      '¿Cómo garantiza Minka la credibilidad y fiabilidad de las campañas?',
    answer:
      'La credibilidad y fiabilidad se aseguran a través de un proceso de autenticación de las cuentas organizadoras, verificación de las necesidades de los beneficiarios, junto con la gestión y supervisión de las campañas.',
  },
  {
    question:
      ' ¿Cómo protege Minka mis datos personales y financieros?',
    answer:
      'Minka utiliza encriptación de alta seguridad para proteger tu información personal y financiera. Nunca compartimos tus datos con terceros sin tu consentimiento.',
  },
  {
    question:
      '¿Cómo se gestiona el dinero recaudado hasta que se transfiere al beneficiario?',
    answer:
      'Los fondos recaudados se almacenan en una cuenta segura gestionada por Minka hasta que se transfieran al beneficiario designado.',
  },
  {
    question:
      '¿Qué debo hacer si detecto una campaña fraudulenta?',
    answer:
      'Si sospechas de una campaña fraudulenta, reportarla inmediatamente a nuestro equipo de soporte para que realice una investigación y tomar las medidas necesarias.',
  },
]

export default function FAQ() {
  return (
    <div className={styles.faq}>
      <p className={styles.textAlt}>F.A.Q.</p>
      <h2 className={styles.headingSec}>
        ¿Tienes preguntas?
      </h2>
      <p className={styles.faqSubtitle}>General</p>
      {faqsGeneral.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      <p className={styles.faqSubtitle}>Iniciar una campaña</p>
      {faqsInit.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      <p className={styles.faqSubtitle}>Donaciones</p>
      {faqsDonation.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      <p className={styles.faqSubtitle}>Pagos y tasas</p>
      {faqsPayment.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      <p className={styles.faqSubtitle}>Credibilidad y seguridad</p>
      {faqsSecurity.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  )
}
