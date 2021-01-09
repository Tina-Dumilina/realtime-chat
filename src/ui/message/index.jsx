import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import ruLocale from 'date-fns/locale/ru'
import styles from './styles.module.scss'

export const Message = ({avatar, text, date, user = {}, isAuthor, read, attachments = []}) => {
  return (
    <article className={styles.message} data-is-author={isAuthor}>
      <div className={styles.message__avatar}>
        <img src={avatar} alt={`Avatar ${user.fullname}`} />
      </div>
      <div className={styles.message__content}>
        <div className={styles.message__check}>
          <div className={styles.message__container}>
            <div className={styles.message__bubble}>
              <p className={styles.message__text}>{text}</p>
            </div>
            {attachments.length > 0 && (
              <ul className={styles.attachments}>
                {attachments.map((item) => (
                  <li className={styles.attachments__item} key={item.url}>
                    <img src={item.url} alt={item.filename} />
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
