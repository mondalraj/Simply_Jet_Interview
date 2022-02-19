import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

export default function Home() {
  const style = {
    background_circle_blur: {
      position: 'absolute',
      width: '421px',
      height: '431px',
      left: '225px',
      top: '331px',
      background: '#3747D7',
      filter: 'blur(624px)'
    }
  }
  return (
    <div className='relative'>
      <Head>
        <title>UNX</title>
        <meta name="description" content="Simply Jet Interview Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div style={style.background_circle_blur}></div>
      <Header />
    </div>
  )
}