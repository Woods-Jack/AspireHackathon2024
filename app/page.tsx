import MainInterface from '@/components/MainInterface'
import styles from './page.module.css'

export default function Home() {
  return(
    <main className={styles.main}>
      <div className={styles.description}>
        <MainInterface />
      </div>
    </main>
  )
}
