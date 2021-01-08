import React from 'react'
import {Input as AntdInput} from 'antd'
import styles from './styles.module.scss'

export const Input = ({placeholder, type = 'text'}) => {
  return <AntdInput placeholder={placeholder} type={type} className={styles.input} />
}
