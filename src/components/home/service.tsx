import React from 'react'
import { CgBrowser } from 'react-icons/cg'
import { BiCode } from 'react-icons/bi'
import { VscDebugAlt } from 'react-icons/vsc'
import { IoRocketOutline } from 'react-icons/io5'
import { BiCheck } from 'react-icons/bi'
import { TiArrowMaximise } from 'react-icons/ti'

const Service = () => {
    return (
        <section className="text-gray-400 body-font bg-transparent">
            <div className="container px-5 py-24 mx-auto">
                <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                    <h1>SERVICES</h1>
                </div>
                <div className="flex flex-wrap mx-4 mt-12 lg:mt-32">
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <CgBrowser className='text-3xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Full Stack Development</h2>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <BiCode className='text-3xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">API Development</h2>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <IoRocketOutline className='text-3xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Deploy Server</h2>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <TiArrowMaximise className='text-3xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Responsive</h2>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <VscDebugAlt className='text-3xl' />
                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Debugging</h2>
                        </div>
                    </div>
                    <div className="p-4 lg:w-1/3 w-1/2  flex flex-col text-center items-center">
                        <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-5 flex-shrink-0">
                            <BiCheck className='text-3xl' />

                        </div>
                        <div className="flex-grow">
                            <h2 className="text-white text-lg title-font font-medium mb-3">Testing</h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>


    )
}

export default Service