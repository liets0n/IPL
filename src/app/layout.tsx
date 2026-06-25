import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Space_Grotesk } from 'next/font/google'
import { getLocale } from 'next-intl/server'

import { siteConfig } from '@/config/site'

import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url
  },

  applicationName: 'IPLookup',
  title: 'IPLookup',
  description:
    'IPLookup provides advanced IP address analysis with geographic, network, reputation, and provider data. Fast, accurate, and ideal for technical teams.',
  keywords: [
    'IP lookup',
    'IP address lookup',
    'check IP address',
    'what is my IP',
    'IP geolocation',
    'IP location finder',
    'find IP location',
    'IP address checker',
    'trace IP address',
    'IP tracker',
    'free IP lookup',
    'IP address locator',
    'geolocation by IP',
    'public IP lookup',
    'ISP lookup'
  ],

  authors: [
    {
      name: 'Lietson Dos Santos',
      url: 'https://www.linkedin.com/in/lietsondosantos'
    }
  ],
  creator: 'Lietson Dos Santos',
  publisher: 'IPLookup Tool',

  openGraph: {
    title: 'IPLookup - Free IP Address Lookup Tool',
    description:
      'Discover your public IP address instantly. Get detailed information about your IPv4/IPv6, location, ISP, and network details with our free tool.',
    url: siteConfig.url,
    siteName: 'IPLookup',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'IPLookup - Free IP Address Lookup Tool',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iplookup',
    creator: '@lietsondosantos',
    title: 'IPLookup - Free IP Address Lookup Tool',
    description:
      'Discover your public IP address instantly. Get detailed information about your IPv4/IPv6, location, ISP, and network details with our free tool.',
    images: ['/opengraph-image.png']
  }
}

export const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta'
})

export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin']
})

type Props = Readonly<{ children: React.ReactNode }>

export default async function RootLayout({ children }: Props) {
  const locale = await getLocale()

  return (
    <html lang={locale} className={`${spaceGrotesk.className}`}>
      <body>{children}</body>
    </html>
  )
}
