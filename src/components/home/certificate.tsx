import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Certificates } from '../../data/certificates'
import Image from 'next/image'
const Certificate = () => {
    return (

        <div className='flex flex-col justify-center align-middle w-full py-20'>
            <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                <h1>CERTIFICATES</h1>
            </div>
            <div className="relative w-screen flex gap-x-6 snap-x overflow-x-auto  snap-mandatory no-scrollbar mt-[15vh]  ">
                {Certificates.map((certificate) => (
                    <div className="snap-center shrink-0 min-w-[calc(24rem)] w-[calc(60vw)] max-w-lg ">
                        <Image className=' rounded-lg ' src={"https://images.weserv.nl/?url=" + certificate.url + "&w=600&h=400&dpr=2"} width={600} height={400} objectFit="contain" layout='responsive' alt='monil goyal'></Image>
                    </div>
                ))}
            </div>

            <div className='text-center dark:text-white text-indigo-500 self-center mt-[15vh]  '><BsFillArrowRightCircleFill className='text-4xl' /></div>
        </div>

    )
}

export default Certificate

