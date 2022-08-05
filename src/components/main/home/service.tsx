import React from 'react'
import { CgBrowser } from 'react-icons/cg'
import { BiCode } from 'react-icons/bi'
import { VscDebugAlt } from 'react-icons/vsc'
import { IoRocketOutline } from 'react-icons/io5'
import { BiCheck } from 'react-icons/bi'
import { SiServerless } from 'react-icons/si'


const ServiceIcon = (props) => {
    return (
        <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full dark:bg-gray-800 bg-indigo-500 text-white mb-5 flex-shrink-0">
                {props.children}
            </div>
            <div className="flex-grow">
                <h2 className="dark:text-white text-gray-500 text-lg title-font font-medium mb-3">{props.title}</h2>
            </div>
        </div>
    )
}


const Service = () => {
    return (
        <section className="text-gray-400 body-font bg-transparent">
            <div className="container px-5 py-24 mx-auto">
                <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                    <h1>SERVICES</h1>
                </div>
                <div className="flex flex-wrap mx-4 mt-12 lg:mt-32">
                    <ServiceIcon title="Full Stack Development">
                        <CgBrowser className='text-3xl' />
                    </ServiceIcon>
                    <ServiceIcon title="API Development">
                        <BiCode className='text-3xl' />
                    </ServiceIcon>
                    <ServiceIcon title="Deploy Server">
                        <IoRocketOutline className='text-3xl' />
                    </ServiceIcon>
                    <ServiceIcon title="Serverless Architecture">
                        <SiServerless className='text-2xl' />
                    </ServiceIcon>
                    <ServiceIcon title="Debugging">
                        <VscDebugAlt className='text-3xl' />
                    </ServiceIcon>
                    <ServiceIcon title="Testing">
                        <BiCheck className='text-3xl' />
                    </ServiceIcon>
                </div>
            </div>
        </section>


    )
}

export default Service