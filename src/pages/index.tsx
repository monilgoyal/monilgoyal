import type { NextPage } from 'next'
import Footer from '../components/footer'
import Header from '../components/header'
import Hero from '../components/main/home/hero'
import Navbar from '../components/navbar'
import Skills from '../components/main/home/skill'
import Project from '../components/main/home/project'
import Certificate from '../components/main/home/certificate'
import Service from '../components/main/home/service'
const Home: NextPage = () => {
  return (
    <>
      <Header />
      <div className="snap-y overflow-y-scroll overflow-x-hidden snap-mandatory h-screen min-h-fit hide-sb ">
        <div className='relative h-screen snap-center min-h-[calc(750px)] ' >
          <Navbar />
          <Hero />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Project />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Certificate />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Service />
        </div>
        <div className='relative h-screen snap-center min-h-[calc(750px)]'>
          <Skills />
          <div className="absolute bottom-0 w-full">
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
