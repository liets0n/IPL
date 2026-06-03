/** biome-ignore-all lint/suspicious/noShadowRestrictedNames: s */

'use client'

import { useTranslations } from 'next-intl'
import { Window } from '@/components'
import { useInfo } from '@/store'
import { textFormatter } from '@/utils'

const Item = ({ title, content }: { title: string; content: string }) => {
  return (
    <li className='leading-[2.1rem] [&>span]:text-base'>
      <span className='font-bold text-gray-800'>{title}</span>
      &nbsp;
      <span>{content}</span>
    </li>
  )
}

export default function InfoWindow() {
  const t = useTranslations('home')
  const data = useInfo(state => state.data)
  const time = new Date(String(data.time_zone.current_time))

  return (
    <Window windowTitle={t('window.title.information')}>
      <ul className='[grid-area:info-window] pt-2 pr-4 pb-4 pl-4'>
        <Item title={t('info.city')} content={textFormatter(data.city, t)} />
        <Item title={t('info.state')} content={textFormatter(data.region, t)} />
        <Item
          title={t('info.country')}
          content={textFormatter(`${data.country_name} ${data.emoji_flag}`, t)}
        />
        <Item
          title={t('info.continent')}
          content={textFormatter(data.continent_name, t)}
        />
        <Item
          title={t('info.time')}
          content={textFormatter(time.toLocaleString(), t)}
        />
        <Item
          title={t('info.latitude')}
          content={textFormatter(data.latitude, t)}
        />
        <Item
          title={t('info.longitude')}
          content={textFormatter(data.longitude, t)}
        />
        <Item
          title={t('info.idiom')}
          content={textFormatter(
            Array.isArray(data.languages) && data.languages.length > 0
              ? `${data.languages[0].name} (${String(data.languages[0].code).toUpperCase()})`
              : 'N/A',
            t
          )}
        />
        <Item
          title={t('info.ddd')}
          content={textFormatter(`${data.calling_code}`, t)}
        />
        <Item
          title={t('info.tor')}
          content={textFormatter(data.threat.is_tor, t)}
        />
        <Item
          title={t('info.proxy')}
          content={textFormatter(data.threat.is_proxy, t)}
        />
        <Item
          title={t('info.dataCenter')}
          content={textFormatter(data.threat.is_datacenter, t)}
        />
      </ul>
    </Window>
  )
}
