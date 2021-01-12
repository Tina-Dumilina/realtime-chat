import React from 'react'
import {Form, Input} from 'antd'
import styles from './styles.module.scss'

export const FormField = ({
  placeholder,
  type = 'text',
  name,
  values,
  errors,
  touched,
  onChange,
  onBlur,
}) => {
  return (
    <Form.Item
      name={name}
      hasFeedback
      validateStatus={validateField(name, touched, errors)}
      help={touched[name] && errors[name]}
    >
      {type === 'password' ? (
        <Input.Password
          id={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          className={styles.input}
        />
      ) : (
        <Input
          id={name}
          placeholder={placeholder}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          className={styles.input}
        />
      )}
    </Form.Item>
  )
}

function validateField(key, touched, errors) {
  if (touched[key]) {
    return errors[key] ? 'error' : 'success'
  } else {
    return ''
  }
}
