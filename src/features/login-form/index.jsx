import React from 'react'
import {Link} from 'react-router-dom'
import {Form} from 'antd'
import {useFormik} from 'formik'
import {Button} from 'ui/button'
import {Paper} from 'ui/paper'
import {FormField} from 'ui/form-field'
import styles from './styles.module.scss'

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
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
        <h1 className={styles.auth__title}>Войти в аккаунт</h1>
        <p className={styles.auth__subtitle}>Пожалуйста, войдите в свой аккаунт</p>
      </div>
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
            name="password"
            placeholder="Пароль"
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
            type="password"
          />
          <Form.Item>
            <Button disabled={isSubmitting} loading={isSubmitting} onClick={handleSubmit}>
              Войти в аккаунт
            </Button>
          </Form.Item>
          <Link to="/register" className={styles.auth__link}>
            Зарегистрироваться
          </Link>
        </Form>
      </Paper>
    </>
  )
}
