'use client'

import { useParams } from 'next/navigation'
import { useLocale } from 'next-intl'
import { useTransition } from 'react'
import { usePathname, useRouter } from '@/i18n/navigation'

const localeLabels: Record<string, string> = {
  pt: 'Português',
  en: 'English'
}

export default function LocaleSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const params = useParams()
  const [isPending, startTransition] = useTransition()

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return

    startTransition(() => {
      router.replace(
        // @ts-expect-error
        { pathname, params },
        { locale: nextLocale }
      )
    })
  }

  return (
    <select
      value={locale}
      onChange={e => switchLocale(e.target.value)}
      disabled={isPending}
      className='w-32 h-12 text-base p-2 border-2 border-gray-900 rounded-md shadow-[0.3rem_0.3rem_0_var(--gray-900)] text-gray-900 bg-gray-50 cursor-pointer max-[486px]:w-1/2 max-[486px]:text-sm max-[486px]:shadow-[0.2rem_0.2rem_0_var(--gray-900)]'
    >
      {Object.entries(localeLabels).map(([code, label]) => (
        <option key={code} value={code}>
          {label}
        </option>
      ))}
    </select>
  )
}
