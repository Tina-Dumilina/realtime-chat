import React from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'antd'
import {InfoCircleTwoTone} from '@ant-design/icons'
import {Input} from 'ui/input'
import {Button} from 'ui/button'
import {Paper} from 'ui/paper'
import styles from './styles.module.scss'

export const RegisterForm = () => {
  const success = true
  return (
    <>
      <div className={styles.auth__top}>
        <h1 className={styles.auth__title}>Регистрация</h1>
        <p className={styles.auth__subtitle}>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      {!success ? (
        <Paper className={styles.auth__paper}>
          <Form name="login">
            <Form.Item name="email" hasFeedback validateStatus="success">
              <Input type="email" placeholder="E-mail" />
            </Form.Item>
            <Form.Item name="username" hasFeedback validateStatus="success">
              <Input placeholder="Ваше имя" />
            </Form.Item>
            <Form.Item name="password" hasFeedback validateStatus="error">
              <Input type="password" placeholder="Пароль" />
            </Form.Item>
            <Form.Item name="confirmation" hasFeedback validateStatus="error">
              <Input type="password" placeholder="Повторить пароль" />
            </Form.Item>
            <Form.Item>
              <Button>Зарегистрироваться</Button>
            </Form.Item>
            <Link to="/login" className={styles.auth__link}>
              Войти в аккаунт
            </Link>
          </Form>
        </Paper>
      ) : (
        <Paper className={styles.success}>
          <InfoCircleTwoTone className={styles.success__icon} />
          <h2 className={styles.success__title}>Подтвердите свой аккаунт</h2>
          <p className={styles.success__subtitle}>
            На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.
          </p>
        </Paper>
      )}
    </>
  )
}
