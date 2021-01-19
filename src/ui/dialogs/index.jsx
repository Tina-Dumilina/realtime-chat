import React from 'react'
import {Card} from 'ui/card'
import styles from './styles.module.scss'

export const Dialogs = ({items}) => {
  const sortedItems = items.sort((a, b) => {
    return (
      new Date(b.last_message.created_at).getTime() - new Date(a.last_message.created_at).getTime()
    )
  })
  return (
    <div className={styles.dialogs}>
      <ul className={styles.dialogs__list}>
        {sortedItems.map((item) => (
          <li key={item.id}>
            <Card message={item.last_message} />
          </li>
        ))}
      </ul>
    </div>
  )
}
