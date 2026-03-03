import { Header, InfoWindow, Input, MapWindow } from '@/components'
import styles from './styles.module.scss'

export default function Home() {
  return (
    <main className={styles.wrapper}>
      <Header />
      <InfoWindow />
      <MapWindow />
      <Input />
    </main>
  )
}
