'use client'

import { useState } from 'react'
import styles from './Login.module.scss'
import Image from 'next/image'
import isotype from '../../../public/isotype.svg'
import Icon from '@/components/Icon/Icon'

export default function LoginPage() {
  const [isRegister, setIsRegister] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')

  const loginMethods = [
    {
      name: 'Google',
      icon: 'google',
    },
    {
      name: 'Facebook',
      icon: 'facebook',
    },
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login attempt with:', { email, password })
  }

  const handleLoginMethod = ({ method }) => {
    console.log('Login method:', method)
  }

  return (
    <main className={styles.login}>
      <div className={styles.loginLeft}>
        <h2 className={styles.loginTitle}>
          {!isRegister
            ? '¡Bienvenido de nuevo!'
            : 'Crea tu cuenta'}
        </h2>
        <p className={styles.text}>
          {!isRegister
            ? 'Introduzca sus credenciales para acceder a su cuenta.'
            : 'Introduzca sus credenciales para crear su cuenta,'}
        </p>
        <form
          onSubmit={handleSubmit}
          className={styles.loginForm}
        >
          <div className={styles.loginFormInput}>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label htmlFor='email'>
              Dirección de email
            </label>
          </div>
          <div className={styles.loginFormInput}>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label htmlFor='password'>Contraseña</label>
          </div>
          {isRegister && (
            <div className={styles.loginFormInput}>
              <input
                type='password'
                id='password'
                value={passwordRepeat}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
                required
              />
              <label htmlFor='passwordRepeat'>
                Repite la Contraseña
              </label>
            </div>
          )}
          <button
            className={styles.buttonPrimary}
            type='submit'
          >
            {!isRegister ? 'Iniciar sesión' : 'Registrarse'}
          </button>
        </form>
        <div className={styles.loginSeparator}>
          <small>
            {!isRegister
              ? 'o iniciar sesión con'
              : 'o crear cuenta con'}
          </small>
        </div>
        <div className={styles.loginMethods}>
          {loginMethods.map((method, index) => (
            <button
              key={index}
              className={styles.buttonSecondary}
              onClick={() => handleLoginMethod(method)}
            >
              <Icon iconName={method.icon} />
            </button>
          ))}
        </div>
        <p
          className={styles.text}
          onClick={() => setIsRegister(!isRegister)}
        >
          {!isRegister
            ? '¿No tienes cuenta? Crea una.'
            : '¿Ya tienes cuenta? Accede a ella'}
        </p>
      </div>
      <div className={styles.loginRight}>
        <p className={styles.loginRightText}>
          Apoya a tu comunidad
        </p>
        <Image
          src={isotype}
          alt='Isotipo de Minka'
          width={150}
        />
      </div>
    </main>
  )
}
