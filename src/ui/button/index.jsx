import React from 'react'
import {Button as AntdButton} from 'antd'
import styles from './styles.module.scss'

export const Button = ({
  children,
  type = 'primary',
  className = '',
  onClick,
  disabled = false,
  loading = false,
}) => {
  return (
    <AntdButton
      className={`${styles.button} ${className}`}
      type={type}
      children={children}
      onClick={onClick}
      disabled={disabled}
      loading={loading}
    />
  )
}
