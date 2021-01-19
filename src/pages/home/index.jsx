import React from 'react'
import {Message} from 'ui/message'
import {Dialogs} from 'ui/dialogs'
import styles from './styles.module.scss'

export const Home = () => {
  return (
    <div className={styles.home}>
      <Dialogs
        items={[
          {
            id: Math.floor(Math.random() * 1000),
            last_message: {
              text:
                'Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюш',
              created_at: 'Sun Jan 18 2021 21:39:00 GMT+0300',

              user: {
                fullname: 'Федор Достоевский',
                avatar:
                  'https://sun1-23.userapi.com/impg/x69hlC167a2JA9Huu6aE9IFgsp-qdKKx1wrmYQ/wpdPspANwPE.jpg?size=200x0&quality=96&crop=246,0,327,327&sign=4c95e030c30e1df9f49e6352bceda28d&ava=1',
                online: true,
                unread_messages: 5,
              },
            },
          },
          {
            id: Math.floor(Math.random() * 1000),
            last_message: {
              text: 'Го в WhatsApp, я создал',
              created_at: 'Sun Jan 11 2021 21:39:00 GMT+0300',
              user: {
                fullname: 'Ян Борисович Кум',
                avatar:
                  'https://sun1-23.userapi.com/impg/x69hlC167a2JA9Huu6aE9IFgsp-qdKKx1wrmYQ/wpdPspANwPE.jpg?size=200x0&quality=96&crop=246,0,327,327&sign=4c95e030c30e1df9f49e6352bceda28d&ava=1',
                online: false,
                unread_messages: 1,
              },
            },
          },
        ]}
      />
      <div>
        <Message
          user={{
            fullname: 'Федор Достоевский',
            avatar:
              'https://sun1-86.userapi.com/impf/c830208/v830208701/597a7/AVsWVPGm_SU.jpg?size=100x0&quality=96&crop=138,106,554,554&sign=8bfabf152a30d4dcd424fb84e3660263&ava=1',
          }}
          text="🖐🏻"
          date="Fri Jan 08 2021 22:58:02"
          isAuthor={true}
          read={false}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
          ]}
        />
        <Message
          user={{
            avatar:
              'https://sun1-23.userapi.com/impg/x69hlC167a2JA9Huu6aE9IFgsp-qdKKx1wrmYQ/wpdPspANwPE.jpg?size=200x0&quality=96&crop=246,0,327,327&sign=4c95e030c30e1df9f49e6352bceda28d&ava=1',
          }}
          text="🖐🏻"
          date="Fri Jan 08 2021 22:58:02"
          isAuthor={false}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
            },
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&water',
            },
          ]}
        />
        <Message
          user={{
            avatar:
              'https://sun1-23.userapi.com/impg/x69hlC167a2JA9Huu6aE9IFgsp-qdKKx1wrmYQ/wpdPspANwPE.jpg?size=200x0&quality=96&crop=246,0,327,327&sign=4c95e030c30e1df9f49e6352bceda28d&ava=1',
          }}
          date="Fri Jan 08 2021 22:58:02"
          isAuthor={false}
          attachments={[
            {
              filename: 'image.jpg',
              url: 'https://source.unsplash.com/100x100/?random=1&nature,water',
            },
          ]}
        />
      </div>
    </div>
  )
}
