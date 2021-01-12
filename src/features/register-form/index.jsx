import React from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {Form} from 'antd'
import {InfoCircleTwoTone} from '@ant-design/icons'
import {validate} from 'lib/validate'
import {FormField} from 'ui/form-field'
import {Button} from 'ui/button'
import {Paper} from 'ui/paper'
import styles from './styles.module.scss'

export const RegisterForm = () => {
  let success = false
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmation: '',
    },
    validate: (values) => validate(values),
    onSubmit: (values, {setSubmitting}) => {
      setSubmitting(true)
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    },
  })
  const {handleSubmit, handleChange, handleBlur, isSubmitting, values, errors, touched} = formik

  return (
    <>
      <div className={styles.auth__top}>
        <h1 className={styles.auth__title}>Регистрация</h1>
        <p className={styles.auth__subtitle}>Для входа в чат вам нужно зарегистрироваться</p>
      </div>
      {!success ? (
        <Paper className={styles.auth__paper}>
          <Form>
            <FormField
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="username"
              placeholder="Ваше имя"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="password"
              placeholder="Пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              type="password"
            />
            <FormField
              name="confirmation"
              placeholder="Повторить пароль"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
              type="password"
            />
            <Form.Item>
              <Button disabled={isSubmitting} loading={isSubmitting} onClick={handleSubmit}>
                Зарегистрироваться
              </Button>
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
