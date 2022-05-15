import React from 'react'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import * as skillsets from '../data/skills'

import Social, { Social_SVG } from '../components/social'
import Education from '../components/about'

function About() {
    return (
        <>
            <Header title="About - Monil Goyal" header_content="About - Monil Goyal" />
            <Navbar />
            {/* <div className="zigzag-timeline__item">
                <div className="zigzag-timeline__milestone text-white">monnil</div>
            </div> */}
            {/* <section className="text-gray-500 dark:text-gray-400 body-font">
                <div className="container px-5 pt-24  mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className='dark:text-white text-indigo-500 mt-0 mb-20 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                            <h1>ABOUT ME</h1>
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/2 text-center sm:pr-8 sm:py-8">
                                <div className='w-20 h-20 border-2 rounded-full mx-auto border-gray-200'>
                                    <Image className='rounded-full inline-block ' src='/monil.png' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 dark:text-white text-gray-900 text-lg whitespace-nowrap">Monil Goyal</h2>
                                    <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base">Aloha! Web technology enthusiast with good knowledge of other related technology and a clear understanding of programming concepts.</p>
                                </div>
                            </div>
                            <div className="sm:w-1/2 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <div className="w-full">
                                    <Social_SVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            <section id='skills' className="text-gray-400 body-font mx-auto mt-8">
                <div className="container px-5 py-8  mx-auto">
                    <div className="flex flex-col text-center w-full ">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font  dark:text-white text-indigo-500">EDUCATION</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="">
                        <Education />
                    </div>
                </div>
            </section>
            <section id='skills' className="text-gray-400 body-font mx-auto">
                <div className="container px-5 py-16  mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 dark:text-white text-indigo-500">SKILLS</h1>
                        {/* <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p> */}
                    </div>
                    <div className="flex flex-wrap -m-2">
                        {
                            Object.keys(skillsets).map((skillset) => (
                                skillsets[skillset].map((skill) => (
                                    <div className="p-2 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full lg:hover:scale-105 transition-transform" key={skill.name}>
                                        <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
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