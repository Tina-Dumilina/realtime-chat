import React from 'react'
import styles from './styles.module.scss'

export const Avatar = ({user, size, className = ''}) => {
  const avatarSize = size + 'px'
  return (
    <div
      className={`${styles.avatar} ${className}`}
      style={{height: avatarSize, width: avatarSize}}
    >
      <svg role="none" style={{height: avatarSize, width: avatarSize}} viewBox="0 0 40 40">
        <mask id="circle">
          <circle cx="20" cy="20" fill="white" r="20" />
        </mask>
        <g mask="url(#circle)">
          <image
            x="0"
            y="0"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            width="100%"
            xlinkHref={user.avatar}
          />
          <circle className={styles.border} cx="20" cy="20" r="20" />
        </g>
      </svg>
      {user.online && <span className={styles.badge} />}
    </div>
  )
}
