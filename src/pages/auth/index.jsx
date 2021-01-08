import React from 'react'
import {Route} from 'react-router-dom'
import {LoginForm} from 'features/login-form'
import {RegisterForm} from 'features/register-form'
import styles from './styles.module.scss'

export const Auth = () => {
  return (
    <div className={styles.auth}>
      <Route exact path={['/', '/login']} component={LoginForm} />
      <Route path="/register" component={RegisterForm} />
    </div>
  )
}
