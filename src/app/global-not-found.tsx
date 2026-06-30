import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getLocale, getTranslations } from 'next-intl/server'
import { ThemeProvider } from 'next-themes'
import { cache } from 'react'

import './../styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

const getT = cache(() => getTranslations('globalNotFound'))

export async function generateMetadata(): Promise<Metadata> {
  const t = await getT()

  return {
    title: t('metadata.title'),
    description: t('metadata.description')
  }
}

export default async function GlobalNotFound() {
  const t = await getT()
  const locale = await getLocale()

  return (
    <html
      lang={locale}
      className={`${inter.className} bg-zinc-50 dark:bg-zinc-950`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <section className='absolute top-1/2 left-1/2 w-max -translate-x-1/2 -translate-y-1/2'>
            <div className='w-md h-40 border-2 border-zinc-950 dark:border-zinc-50 rounded-md shadow-default dark:shadow-default overflow-hidden max-[505px]:w-100 max-[505px]:h-32 max-[452px]:w-96 max-[452px]:h-34 max-[425px]:w-84 max-[425px]:h-34 max-[415px]:w-76 max-[415px]:h-34 max-[368px]:w-64 max-[368px]:h-34'>
              <div className='w-full h-[2%] flex items-center justify-between p-4 border-b-2 border-b-zinc-950 dark:border-b-zinc-50'>
                <p className='text-zinc-950 dark:text-zinc-50 font-bold'>
                  {t('title')}
                </p>

                <ul className='w-max flex items-center justify-center list-none gap-2'>
                  <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50' />
                  <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50' />
                  <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 dark:bg-zinc-50' />
                </ul>
              </div>

              <div className='flex m-auto items-center justify-center p-4'>
                <h1 className='text-[1.3rem] text-center text-zinc-950 dark:text-zinc-50 mt-8 max-[505px]:text-base max-[505px]:mt-2 max-[452px]:text-base max-[452px]:mt-2'>
                  {t('content')}
                </h1>
              </div>
            </div>
          </section>
        </ThemeProvider>
      </body>
    </html>
  )
}
