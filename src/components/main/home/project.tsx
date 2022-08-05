import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { AiFillEye } from 'react-icons/ai'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { RiYoutubeLine } from 'react-icons/ri'
import { projects_data } from '../../../data/projects'
import { ViewAllButton } from '../../helpers/button/viewall'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

const Project = () => {
    useEffect(() => {
        var ele = document.getElementsByClassName('skills')
        for (let i = 0; i < ele.length; i++) {
            if (ele[i].clientWidth >= ele[i].scrollWidth) {
                ele[i].nextElementSibling.classList.add('hidden')
            }
        }
    })


    const scrollDivRight = (e) => {
        e.target.closest('div').previousSibling.scrollLeft += 200
    }
    const scrollDivLeft = (e) => {
        e.target.closest('div').nextSibling.scrollLeft -= 200
    }
    const IsEnd = (e) => {

        if (e.target.scrollLeft + e.target.clientWidth + 1 >= e.target.scrollWidth) {
            e.target.nextSibling.classList.add("hidden");                       // hide ">" button
        } else {
            e.target.nextSibling.classList.remove("hidden");                    // show ">" button

        }

        if (e.target.scrollLeft > 0) {
            e.target.previousSibling.classList.add("hidden");  // hide "tech" text
            e.target.previousSibling.classList.remove("hidden");               // show "<" button

        } else if (e.target.scrollLeft == 0) {
            e.target.previousSibling.classList.remove("hidden");    // show "tech" text
            e.target.previousSibling.classList.add("hidden");                       // hide "<" button
        }
    }
    return (
        <div className='flex flex-col justify-center align-middle w-full py-10 lg:py-20'>
            <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                <h1>PROJECTS</h1>
            </div>
            <div className='relative w-full flex gap-x-6 lg:gap-x-12 snap-x overflow-x-auto  snap-mandatory no-scrollbar mt-[5vh] '>
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>
                {projects_data.map((proj) => (
                    <div className="flex flex-wrap-reverse w-4/5 sm:w-2/5 lg:w-3/5 dark:bg-gray-800 bg-opacity-40 bg-indigo-200 relative snap-center shrink-0 first:pl-8 last:pr-8 rounded-xl" key={proj.id}>
                        <div className="text-center relative z-10 w-full flex flex-wrap-reverse">
                            <div className="w-full lg:w-2/5  text-white ">
                                <div className="relative  w-full h-3/4">
                                    <div className="lg:absolute bottom-0 w-full p-2 text-left">
                                        <div className="flex justify-between">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 dark:text-gray-500 ">{proj.date}</h2>
                                            <div className='text-gray-500'>
                                                {proj.githubUrl != "" && <span className="inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 ">
                                                    <Link href={proj.githubUrl} >
                                                        <a target="_blank" aria-label='source code'>
                                                            <FiGithub className='text-xl' />
                                                        </a>
                                                    </Link>
                                                </span>}
                                                {proj.liveUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 ".concat(" ", proj.githubUrl != "" ? "border-l-2" : "")}>
                                                    <Link href={proj.liveUrl} >
                                                        <a target="_blank" aria-label='Live Demo'>
                                                            <AiFillEye className='text-xl' />
                                                        </a>
                                                    </Link>
                                                </span>}
                                                {proj.videoUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 ".concat(" ", proj.githubUrl != "" || proj.liveUrl != "" ? "border-l-2" : "")}>
                                                    <Link href={proj.videoUrl} >
                                                        <a target="_blank" aria-label='preview'>
                                                            <RiYoutubeLine className='text-xl' />
                                                        </a>
                                                    </Link>
                                                </span>}
                                                {proj.blogUrl != "" && <span className={"inline-flex items-center leading-none text-sm px-3 border-gray-700 border-opacity-50 ".concat(" ", proj.githubUrl != "" || proj.liveUrl != "" || proj.videoUrl != "" ? "border-l-2" : "")}>
                                                    <Link href={proj.blogUrl} >
                                                        <a target="_blank" aria-label='blog'>
                                                            <FiExternalLink className='text-xl' />
                                                        </a>
                                                    </Link>
                                                </span>}
                                            </div>
                                        </div>
                                        <h1 className="title-font sm:text-2xl text-xl font-medium text-indigo-500 dark:text-white">{proj.title}</h1>
                                        <p className="leading-relaxed  text-gray-900 dark:text-gray-400 ">{proj.desc}</p>
                                    </div>
                                </div>
                                <div className="text-center flex flex-col leading-8 justify-center mt-2 w-full  text-gray-500 space-y-2 h-1/5">
                                    <div className="flex mx-5 relative rounded-full">
                                        <div className=" self-center absolute -left-4 dark:bg-gray-900 rounded-full z-10 bg-white hidden" onClick={(e) => scrollDivLeft(e)} >
                                            <IoIosArrowBack className='text-3xl mx-auto text-indigo-500' />
                                        </div>
                                        <div className="skills w-full overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScroll={(e) => IsEnd(e)}>
                                            {/* <div className="skills w-9/12 overflow-x-auto whitespace-nowrap overflow-y-hidden no-scrollbar scroll-smooth" onScrollCapture={(e) => IsEnd(e)}> */}
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-700 dark:text-gray-200 mb-1 inline">Tech:</h2>

                                            {
                                                proj.tech.split(",").map((techno) => (
                                                    <span className="rounded-full dark:bg-gray-600 bg-gray-500 text-white dark:text-gray-300 dark:opacity-70 dark:bg-opacity-50 px-2 py-1 mr-1 my-1" key={techno}>{techno}</span>
                                                ))
                                            }
                                        </div>
                                        <div className=" self-center absolute -right-4 dark:bg-gray-900 rounded-full z-10 bg-white" onClick={(e) => scrollDivRight(e)} >
                                            <IoIosArrowForward className='text-3xl mx-auto text-indigo-500' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-3/5 text-white self-center lg:py-10 ">
                                <Image className=' rounded-xl ' src={"https://images.weserv.nl/?url=" + proj.thumbUrl + "&w=600&h=400&dpr=2"} width={600} height={400} objectFit="contain" layout='responsive' alt='monil goyal'></Image>
                            </div>
                        </div>
                    </div>
                ))}
                <div className="snap-center shrink-0 w-[calc(4%)] md:w-1/12 lg:w-1/6"></div>

            </div>
            <Link href="/projects" passHref>
                <div className="mt-[5vh] self-center">
                    <ViewAllButton />
                </div>
            </Link>
        </div>

    )
}

export default Project