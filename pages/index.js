import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>UNX</title>
        <meta name="description" content="Simply Jet Interview Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      
    </div>
  )
}
