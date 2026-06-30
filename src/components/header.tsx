import { Playfair_Display } from 'next/font/google'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import LocaleSwitcher from '@/components/localeSwitcher'
import ThemeSwitcher from '@/components/themeSwitcher'

const playfair = Playfair_Display({
  subsets: ['latin']
})

export default function Header() {
  const t = useTranslations('home')

  return (
    <header className='h-max flex items-end [grid-area:header] pb-[0.3rem] pr-[0.3rem] max-[1050px]:w-full max-[887px]:items-start max-[887px]:flex-col max-[887px]:gap-8'>
      <div className='w-full flex flex-col gap-4'>
        <Link
          href='/'
          className='w-max text-5xl no-underline normal-case text-zinc-950 max-[486px]:text-3xl'
        >
          <h1
            className={`text-zinc-950 dark:text-zinc-50 font-bold ${playfair.className}`}
          >
            IP Lookup
          </h1>
        </Link>

        <p className='w-98 text-zinc-500 dark:text-zinc-500 max-[486px]:w-68 max-[486px]:text-sm'>
          {t('header.subtitle')}
        </p>
      </div>

      <div className='flex items-center gap-[1.3rem] max-[486px]:w-full max-[486px]:gap-[0.7rem]'>
        <ThemeSwitcher />
        <LocaleSwitcher />
      </div>
    </header>
  )
}
