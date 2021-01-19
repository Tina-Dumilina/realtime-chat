import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ruLocale from 'date-fns/locale/ru'
import {Avatar} from 'ui/avatar'
import styles from './styles.module.scss'

export const Message = ({text, date, user = {}, isAuthor, read, attachments = []}) => {
  return (
    <article className={styles.message} data-is-author={isAuthor}>
      <Avatar user={user} size={30} className={styles.message__avatar} />
      <div className={styles.message__content}>
        <div className={styles.message__check}>
          <div className={styles.message__container}>
            {text && (
              <div className={styles.message__bubble}>
                <p className={styles.message__text}>{text}</p>
              </div>
            )}
            {attachments.length === 1 && (
              <div className={styles.attachments__single}>
                <img
                  className={styles.attachments__image}
                  src={attachments[0].url}
                  alt={attachments[0].filename}
                />
              </div>
            )}
            {attachments.length > 1 && (
              <ul className={styles.attachments}>
                {attachments.map((item) => (
                  <li className={styles.attachments__item} key={item.url}>
                    <img className={styles.attachments__image} src={item.url} alt={item.filename} />
                  </li>
                ))}
              </ul>
            )}
          </div>

          {isAuthor && <span className={styles.message__status} data-read={read} />}
        </div>

        <time className={styles.message__date} dateTime={date}>
          {formatDistanceToNowStrict(new Date(date), {
            addSuffix: true,
            includeSeconds: true,
            locale: ruLocale,
          })}
        </time>
      </div>
    </article>
  )
}
