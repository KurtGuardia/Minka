// app/login/page.js
'use client'

import { useState } from 'react'
import styles from './Login.module.scss'  // You'll need to create this CSS module file

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempt with:', { email, password })
  }

  return (
    <main className={styles.login}>
      <h1>Login to Minka</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Log In</button>
      </form>
    </main>
  )
}
// import styles from './Login.module.scss'

// export default function Login() {
//   return (
//     <main className={styles.login}>Login</main>
//   )
// }
