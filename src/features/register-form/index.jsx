import React from 'react'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {Form} from 'antd'
import {InfoCircleTwoTone} from '@ant-design/icons'
import {FormField} from 'ui/form-field'
import {Button} from 'ui/button'
import {Paper} from 'ui/paper'
import styles from './styles.module.scss'

export const RegisterForm = () => {
  const success = false
  const formik = useFormik({
    initialValues: {
      email: '',
      // username: '',
      // password: '',
      // confirmation: '',
    },
    validate: (values) => {
      console.log(values)
      const errors = {}

      if (!values.email) {
        errors.email = 'Required'
      }

      return errors
    },
    onSubmit: (values) => {
      console.log('onSubmit', values)
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
          <Form onSubmit={handleSubmit}>
            <FormField
              name="email"
              placeholder="E-Mail"
              onChange={handleChange}
              onBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            {/* <Form.Item
              name="username"
              hasFeedback={values.username}
              validateStatus={errors.username ? 'error' : 'success'}
            >
              <Input
                id="username"
                name="username"
                placeholder="Ваше имя"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
            </Form.Item>
            <Form.Item
              name="password"
              hasFeedback={values.password}
              validateStatus={errors.password ? 'error' : 'success'}
            >
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="Пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </Form.Item>
            <Form.Item
              name="confirmation"
              hasFeedback={values.confirmation}
              validateStatus={errors.confirmation ? 'error' : 'success'}
            >
              <Input
                id="confirmation"
                name="confirmation"
                type="password"
                placeholder="Повторить пароль"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.confirmation}
              />
            </Form.Item> */}
            <Form.Item>
              <Button disabled={isSubmitting}>Зарегистрироваться</Button>
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

// export const RegisterForm = withFormik({
//   mapPropsToValues: () => ({email: '', username: '', password: '', confirmation: ''}),

//   // validate: (values) => {
//   //   const errors = {}

//   //   if (!values.name) {
//   //     errors.name = 'Required'
//   //   }

//   //   return errors
//   // },

//   handleSubmit: (values, {setSubmitting}) => {
//     console.log(values)
//     setSubmitting(false)
//   },

//   displayName: 'RegisterForm',
// })(BaseForm)
