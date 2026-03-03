import Link from 'next/link'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

export default function Header() {
  const t = useTranslations('home')

  return (
    <header className={styles.wrapper}>
      <div className={styles.leftSide}>
        <Link href='/' className={styles.leftSide__title}>
          <h1>{t('header.title')}</h1>
        </Link>

        <p className={styles.leftSide__description}>{t('header.subtitle')}</p>
      </div>

      <div className={styles.rightSide}>
        <select
          name='theme'
          defaultValue='system'
          className={`${styles.rightSide__select} ${styles['rightSide__select--theme']}`}
        >
          <option value='system'>{t('header.theme.system')}</option>
          <option value='light'>{t('header.theme.light')}</option>
          <option value='dark'>{t('header.theme.dark')}</option>
        </select>

        <select
          name='language'
          defaultValue='pt'
          className={`${styles.rightSide__select} ${styles['rightSide__select--languages']}`}
        >
          <option value='en'>{t('header.language.english')}</option>
          <option value='pt'>{t('header.language.portuguese')}</option>
        </select>
      </div>
    </header>
  )
}
