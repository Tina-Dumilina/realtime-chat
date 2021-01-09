import React from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'antd'
// import {Input} from 'ui/form-field'
import {Button} from 'ui/button'
import {Paper} from 'ui/paper'
import styles from './styles.module.scss'

export const LoginForm = () => {
  return (
    <>
      <div className={styles.auth__top}>
        <h1 className={styles.auth__title}>Войти в аккаунт</h1>
        <p className={styles.auth__subtitle}>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Paper className={styles.auth__paper}>
        <Form name="login">
          {/* <Form.Item name="email" hasFeedback validateStatus="success">
            <Input type="email" placeholder="E-mail" />
          </Form.Item>
          <Form.Item name="password" hasFeedback validateStatus="error">
            <Input type="password" placeholder="Пароль" />
          </Form.Item> */}
          <Form.Item>
            <Button>Войти в аккаунт</Button>
          </Form.Item>
          <Link to="/register" className={styles.auth__link}>
            Зарегистрироваться
          </Link>
        </Form>
      </Paper>
    </>
  )
}
