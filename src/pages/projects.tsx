import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import Link from 'next/link'
import { AiFillEye } from 'react-icons/ai'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { RiYoutubeLine } from 'react-icons/ri'
import { projects_data } from '../data/projects'
function Projects() {
    return (
        <>
            <Header title="Projects - Monil Goyal" header_content="Projects - Monil Goyal" />
            <Navbar />
            {/* <Projects /> */}
            <section className="text-gray-400 bg-transparent body-font">
                <div className="container px-5 py-20 lg:py-24 mx-auto">
                    <div className='dark:text-white text-indigo-500 mt-0 mb-20 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className="flex flex-wrap">
                        {projects_data.map((proj) => (

                            <div className="p-4 xl:w-1/3 lg:w-1/2 hover:scale-105 transition-transform" key={proj.id}>
                                <div className="h-full dark:bg-gray-800 bg-opacity-40 bg-indigo-100  px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 dark:text-gray-500 mb-1">{proj.date}</h2>
                                    <h1 className="title-font sm:text-2xl text-xl font-medium text-indigo-500 dark:text-white mb-3">{proj.title}</h1>
                                    <p className="leading-relaxed mb-3 text-gray-900 dark:text-gray-400 ">{proj.desc}</p>
                                    <div className="flex flex-wrap justify-center">
                                        {
                                            proj.tech.split(",").map((techno, index) => (
                                                <span className="rounded-full dark:bg-gray-600 bg-indigo-400  text-white dark:text-gray-300  dark:bg-opacity-50 px-2 py-1 mx-1 my-1"
                                                    key={index}>{techno}</span>
                                            ))
                                        }
                                    </div>
                                    <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4 text-gray-500">

                                        {proj.githubUrl != "" && <span className="inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 hover:border-2">
                                            <Link href={proj.githubUrl} >
                                                <a target="_blank" aria-label='source code'>
                                                    <FiGithub className='text-2xl' />
                                                </a>
                                            </Link>
                                        </span>}
                                        {proj.liveUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 hover:border-2".concat(" ", proj.githubUrl != "" ? "border-l-2" : "")}>
                                            <Link href={proj.liveUrl} >
                                                <a target="_blank" aria-label='Live Demo'>
                                                    <AiFillEye className='text-2xl' />
                                                </a>
                                            </Link>
                                        </span>}
                                        {proj.videoUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 hover:border-2".concat(" ", proj.githubUrl != "" || proj.liveUrl != "" ? "border-l-2" : "")}>
                                            <Link href={proj.videoUrl} >
                                                <a target="_blank" aria-label='preview'>
                                                    <RiYoutubeLine className='text-2xl' />
                                                </a>
                                            </Link>
                                        </span>}
                                        {proj.blogUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 hover:border-2".concat(" ", proj.githubUrl != "" || proj.liveUrl != "" || proj.videoUrl != "" ? "border-l-2" : "")}>
                                            <Link href={proj.blogUrl} >
                                                <a target="_blank" aria-label='blog'>
                                                    <FiExternalLink className='text-2xl' />
                                                </a>
                                            </Link>
                                        </span>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Projects