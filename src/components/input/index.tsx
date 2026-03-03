'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { MagnifyingGlass } from '@phosphor-icons/react'
import { useTranslations } from 'next-intl'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useInfo } from '@/store'
import styles from './styles.module.scss'

type SchemaValidationType = { ipv4: string }

export default function Input() {
  const t = useTranslations('home')
  const setIpv4 = useInfo(state => state.setIpv4)
  const { ip: ipv4 } = useInfo(state => state.data)

  const schemaValidation = useMemo(
    () =>
      z.object({
        ipv4: z
          .string()
          .regex(
            /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/,
            t('input.error')
          )
      }),
    [t]
  )

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SchemaValidationType>({
    resolver: zodResolver(schemaValidation),
    mode: 'onChange'
  })

  const handleSearchForIpAddr = (data: SchemaValidationType) => {
    setIpv4(String(data.ipv4))
  }

  return (
    <form
      onSubmit={handleSubmit(handleSearchForIpAddr)}
      className={styles.wrapper}
    >
      <div className={styles.container}>
        <input
          type='text'
          id='ipv4'
          placeholder={ipv4}
          className={styles.container__input}
          {...register('ipv4')}
        />

        <button
          type='submit'
          className={styles.container__btn}
          aria-label={t('input.btnTitle')}
        >
          <MagnifyingGlass size={32} className={styles.btn__icon} />
        </button>
      </div>

      {errors.ipv4 != null && (
        <div className={styles.warning}>
          <p className={styles.warning__text}>{errors.ipv4?.message}</p>
        </div>
      )}
    </form>
  )
}
