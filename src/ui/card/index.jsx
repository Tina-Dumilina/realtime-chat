import React from 'react'
import {Badge} from 'antd'
import format from 'date-fns/format'
import ruLocale from 'date-fns/locale/ru'
import {Avatar} from 'ui/avatar'
import styles from './styles.module.scss'

export const Card = ({message}) => {
  const formattedDate = getDateFormat(message.created_at)
  return (
    <div className={styles.card}>
      <Avatar user={message.user} size={40} online className={styles.card__avatar} />
      <div className={styles.card__content}>
        <div className={styles.card__top}>
          <h3 className={styles.card__user}>{message.user.fullname}</h3>
          <time className={styles.card__date} dateTime={message.created_at}>
            {formattedDate}
          </time>
        </div>
        <div className={styles.card__bottom}>
          <p className={styles.card__text}>{message.text}</p>
          <Badge className={styles.card__count} count={message.user.unread_messages} size="small" />
        </div>
      </div>
    </div>
  )
}

function getDateFormat(date) {
  const difference = Date.now() - new Date(date).getTime()
  const MS_PER_DAY = 1000 * 60 * 60 * 24
  const isToday = difference <= MS_PER_DAY
  const isWeekAgo = difference > MS_PER_DAY * 7
  if (isToday) return format(new Date(date), 'HH:mm')
  if (isWeekAgo) return format(new Date(date), 'dd.MM.yy')
  return format(new Date(date), 'EEEEEE', {locale: ruLocale})
}
