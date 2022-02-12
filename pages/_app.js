import '../styles/globals.css'
import Head from 'next/head'
import { TransactionProvider } from '../context/TransactionContext'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <Head>
        <title>Cryptano - Crypto Deal online</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <TransactionProvider>
        <Component {...pageProps} />
      </TransactionProvider>
       

    </>
   )
}

export default MyApp
