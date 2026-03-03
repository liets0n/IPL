import type { ReactNode } from 'react'

import styles from './styles.module.scss'

type Props = {
  children: ReactNode
  windowTitle: string
}

export default function Window({ children, windowTitle }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.header__title}>{windowTitle}</p>

        <ul className={styles.header__list}>
          <li className={styles.list__item} />
          <li className={styles.list__item} />
          <li
            className={`${styles.list__item} ${styles['list__item--contrast']}`}
          />
        </ul>
      </div>

      <div className={styles.content}>{children}</div>
    </section>
  )
}
