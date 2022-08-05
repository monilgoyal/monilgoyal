import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import * as skillsets from '../data/skills'
import { Social_SVG } from '../components/helpers/social'
import Education from '../components/main/about/education'
import Experience from '../components/main/about/experience'

function About() {
    return (
        <>
            <Header title="About - Monil Goyal" header_content="About - Monil Goyal" />
            <Navbar />
            <div className='dark:text-white text-indigo-500 mt-12 lg:mt-16 py-8 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                <h1>ABOUT ME</h1>
            </div>
            <section className="text-gray-500 dark:text-gray-400 body-font mb-4 py-4">
                <div className="flex flex-col lg:flex-row sm:w-5/6 xl:w-4/5 lg:w-5/6 mx-auto ">
                    <div className="lg:w-1/2 text-center sm:pr-8 sm:py-8">
                        <div className='w-40 h-40 rounded-full mx-auto border border-transparent dark:border-indigo-600 p-1'>
                            <Image className='rounded-full inline-block ' src='/mg.png' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                        </div>
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="font-medium title-font mt-4 dark:text-white text-gray-900 text-lg whitespace-nowrap">Monil Goyal</h2>
                            <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                            <p className="text-base">I am a full stack web developer, building and developing modern websites with latest technologies. Expertise in API development and integration, working on Linux and Windows environment.
                                Competent to develop scalable and user friendly websites. Helping businesses to develop and deploy APIs for production. I am having good understanding of development, testing and production environments.</p>
                        </div>
                    </div>
                    <div className="mt-4 justify-center align-middle flex flex-col sm:mx-auto sm:mt-0 pt-4 xs:w-full sm:w-2/3 lg:w-1/2 sm:pl-8 sm:py-8 lg:border-l-[4px] border-indigo-100 dark:border-gray-800 sm:border-t-0 border-t ">
                        {/* <div className="mt-4 pt-4 sm:w-1/2 sm:pl-8 sm:py-8 sm:mt-0 sm:border-l-[4px] border-indigo-100 dark:border-gray-800 sm:border-t-0 border-t "> */}
                        <div className="w-full px-6">
                            <Social_SVG />
                        </div>
                    </div>
                </div>
            </section>
            <section id='education' className="text-gray-400 body-font mx-auto mb-4 py-4">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mt-4 mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font  dark:text-white text-indigo-500">EDUCATION</h1>
                    </div>
                    <Education />
                </div>
            </section>
            <section id='education' className="text-gray-400 body-font mx-auto mb-4 py-4">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mt-4 mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font  dark:text-white text-indigo-500">EXPERIENCE</h1>
                    </div>
                    <Experience />
                </div>
            </section>
            <section id='skills' className="text-gray-400 body-font mx-auto mb-4 py-4">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-col text-center w-full mt-4 mb-8">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font dark:text-white text-indigo-500">SKILLS</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap xl:w-9/12 mx-auto">
                        {
                            Object.keys(skillsets).map((skillset) => (
                                skillsets[skillset].map((skill) => (
                                    <div className="p-2  md:w-1/3 sm:w-1/2 w-full lg:hover:scale-105 transition-transform" key={skill.name}>
                                        <div className="h-full flex items-center border-indigo-300 dark:border-gray-700 border p-4 rounded-lg">
                                            <div className="pt-4 pb-2 px-3 rounded-full bg-white">
                                                <Image src={skill.logo} width={30} height={25} objectFit='contain' alt={skill.name}></Image>

                                            </div>
                                            {/* <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80" /> */}
                                            <div className="flex-grow ml-2">
                                                <h2 className="dark:text-white text-gray-900 title-font font-medium">{skill.name}</h2>
                                                <p className="text-gray-600">{skill.level}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ))
                        }
                    </div>
                </div>
            </section>
            {/* <Social_SVG /> */}
            <Footer />
        </>
    )
}

export default About