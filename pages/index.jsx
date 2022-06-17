import Head from 'next/head'
import HeroImage from '../components/heroImage'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Vocally Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroImage/>
    </div>
  )
}

export default Home
