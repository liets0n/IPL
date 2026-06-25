import { NextIntlClientProvider } from 'next-intl'

type Props = Readonly<{ children: React.ReactNode }>

export default async function SubLayout({ children }: Props) {
  return <NextIntlClientProvider>{children}</NextIntlClientProvider>
}
