import React from 'react'
import styles from './styles.module.scss'

export const Paper = ({children, className = ''}) => {
  return <div className={`${styles.wrapper} ${className}`}>{children}</div>
}
