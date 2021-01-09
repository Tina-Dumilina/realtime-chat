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
      hasFeedback={values[name]}
      validateStatus={touched[name] && errors[name] ? 'error' : 'success'}
    >
      <Input
        id={name}
        placeholder={placeholder}
        value={values[name]}
        onChange={onChange}
        onBlur={onBlur}
        type={type}
        className={styles.input}
      />
    </Form.Item>
  )
}
