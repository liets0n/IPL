import path from 'node:path'
import type { NextConfig } from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(import.meta.dirname, 'src/styles')],
    additionalData: `@use 'theme/_palette' as *;`
  }
}

export default withNextIntl(nextConfig)
