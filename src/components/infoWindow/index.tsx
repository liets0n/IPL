'use client'

import { useTranslations } from 'next-intl'

import { Window } from '@/components'
import { useInfo } from '@/store'
import { textFormatter } from '@/utils'
import styles from './styles.module.scss'

export default function InfoWindow() {
  const t = useTranslations('home')
  const data = useInfo(state => state.data)
  const time = new Date(String(data.time_zone.current_time))

  return (
    <Window windowTitle={t('window.title.information')}>
      <div className={styles.container}>
        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.ipv4')}</span>
            &nbsp;
            <span>{textFormatter(data.ip, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.city')}</span>
            &nbsp;
            <span>{textFormatter(data.city, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.state')}</span>
            &nbsp;
            <span>{textFormatter(data.region, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.country')}
            </span>
            &nbsp;
            <span>
              {textFormatter(`${data.country_name} ${data.emoji_flag}`, t)}
            </span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.continent')}
            </span>
            &nbsp;
            <span>{textFormatter(data.continent_name, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.time')}</span>
            &nbsp;
            <span>{textFormatter(time.toLocaleString(), t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.latitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.latitude, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.longitude')}
            </span>
            &nbsp;
            <span>{textFormatter(data.longitude, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.idiom')}</span>
            &nbsp;
            <span>
              {textFormatter(
                Array.isArray(data.languages) && data.languages.length > 0
                  ? `${data.languages[0].name} (${String(data.languages[0].code).toUpperCase()})`
                  : 'N/A',
                t
              )}
            </span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.currency')}
            </span>
            &nbsp;
            <span>
              {textFormatter(
                `${data.currency.name} (${data.currency.code})`,
                t
              )}
            </span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.ddd')}</span>
            &nbsp;
            <span>{textFormatter(`+${data.calling_code}`, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.tor')}</span>
            &nbsp;
            <span>{textFormatter(data.threat.is_tor, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>{t('info.proxy')}</span>
            &nbsp;
            <span>{textFormatter(data.threat.is_proxy, t)}</span>
          </p>
        </li>

        <li className={styles.list__item}>
          <p className={styles.item__text}>
            <span className={styles['text--emphasis']}>
              {t('info.dataCenter')}
            </span>
            &nbsp;
            <span>{textFormatter(data.threat.is_datacenter, t)}</span>
          </p>
        </li>
      </div>
    </Window>
  )
}
