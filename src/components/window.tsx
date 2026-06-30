import type { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = {
  children: ReactNode
  windowTitle: string
  className?: string
}

export default function Window({ children, windowTitle, className }: Props) {
  return (
    <section className='w-120 h-90 border-2 border-zinc-950 dark:border-zinc-50 rounded-md shadow-default dark:shadow-default-dark overflow-hidden max-[1050px]:w-full max-[1050px]:h-112 max-[828px]:h-88 max-[828px]:shadow-default-sm dark:max-[828px]:shadow-default-sm-dark'>
      <div className='w-full h-[2.6rem] flex items-center justify-between p-4 border-b-2 border-b-zinc-950 dark:border-b-zinc-50'>
        <p className='text-zinc-950 dark:text-zinc-50 font-bold'>
          {windowTitle}
        </p>

        <ul className='w-max flex items-center justify-center list-none gap-2'>
          <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50' />
          <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50' />
          <li className='w-4 h-4 rounded-full border-2 border-zinc-950 dark:border-zinc-50 bg-zinc-950 dark:bg-zinc-50' />
        </ul>
      </div>

      <div
        className={twMerge(
          'w-full h-[90%] overflow-x-hidden overflow-y-scroll',
          className
        )}
      >
        {children}
      </div>
    </section>
  )
}
