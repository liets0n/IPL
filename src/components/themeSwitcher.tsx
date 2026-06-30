'use client'

import { useTranslations } from 'next-intl'
import { useTheme } from 'next-themes'

export default function ThemeSwitcher() {
  const t = useTranslations('home')
  const { theme, setTheme } = useTheme()

  return (
    <select
      name='theme'
      defaultValue='light'
      value={theme}
      className='w-32 h-12 text-base p-2 border-2 border-zinc-950 dark:border-zinc-50 rounded-md shadow-select dark:shadow-select-dark text-zinc-950 dark:text-zinc-50 bg-zinc-50 dark:bg-zinc-950 cursor-pointer max-[486px]:w-1/2 max-[486px]:text-sm max-[486px]:shadow-select-sm dark:max-[486px]:shadow-select-sm-dark'
      onChange={e => setTheme(e.target.value)}
    >
      <option value='system'>{t('header.theme.system')}</option>
      <option value='light'>{t('header.theme.light')}</option>
      <option value='dark'>{t('header.theme.dark')}</option>
    </select>
  )
}
