import Head from 'next/head'
import HeroImage from '../components/heroImage'
import Navbar from '../components/Navbar'
import Section from '../components/Section'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Vocally Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <HeroImage/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default Home
