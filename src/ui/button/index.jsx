import React from 'react'
import {Button as AntdButton} from 'antd'
import styles from './styles.module.scss'

export const Button = ({children, type = 'primary', className = ''}) => {
  return <AntdButton className={`${styles.button} ${className}`} type={type} children={children} />
}
