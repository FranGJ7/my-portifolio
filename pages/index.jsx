import styles from '../styles/Home.module.scss'
import Head from 'next/head'
import { Footer } from '../src/components/footer'
import { Header } from '../src/components/header'

export default function Home() {
  return (
    <>
    <Head>
        <title>Portifólio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
    <div className={styles.container}>
    
      <Header/>

      <main className={styles.main}>
        

        

      </main>

    
    </div>
    <Footer/>
    </>
  )
}
