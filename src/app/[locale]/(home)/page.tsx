import { Header, InfoWindow, Input, MapWindow } from '@/components'

export default function Home() {
  return (
    <>
      <main className='relative min-h-screen min-w-screen flex items-center justify-center -mt-8.5'>
        <div className='main-layout'>
          <Header />
          <InfoWindow />
          <MapWindow />
          <Input />
        </div>
      </main>

      <footer className='text-zinc-500 dark:text-zinc-500 absolute left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col gap-1 text-sm text-center'>
        <p>Made with 🧠 by Lietson Dos S.</p>
        <p>&copy; 2026 IP Lookup. All rights reserved</p>
      </footer>
    </>
  )
}
