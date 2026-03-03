'use client'

import dynamic from 'next/dynamic'

const MapWindow = dynamic(() => import('./index'), { ssr: false })

export default MapWindow
