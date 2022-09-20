import React, { useEffect } from 'react'
import { Certificates } from '../../../data/certificates'
import Image from 'next/image'
import { ViewAllButton } from '../../helpers/button/viewall'
import Link from 'next/link'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)
const Certificate = () => {
    useEffect(() => {
        if (window.screen.availWidth > 1280)
            document.getElementById('scrollCertificate').scrollLeft += 500
    }, [])

    return (

        <div className='flex flex-col justify-center align-middle w-full py-20'>
            <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center'>
                <h1>CERTIFICATES</h1>
            </div>
            <div id='scrollCertificate' className="relative w-screen flex gap-x-6 snap-x overflow-x-auto overflow-y-hidden  snap-mandatory no-scrollbar mt-[5vh] pb-5 pt-5  ">
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)] "></div>

                {Certificates.map((certificate) => (
                    <div className="snap-center shrink-0 min-w-[calc(24rem)] w-[calc(60vw)] max-w-lg  rounded-lg shadow-[0_5px_15px_rgba(0,0,0,0.35)] dark:shadow-[0px_10px_20px_rgba(0, 0, 0, 0.19)_0px_6px_6px_rgba(0, 0, 0, 0.23)]" key={certificate.id}>
                        <Image className='rounded-lg ' src={"https://images.weserv.nl/?url=" + certificate.url + "&w=600&h=400&dpr=2"} width={600} height={450} objectFit={certificate.fit == 'fill' ? 'fill' : 'contain'} layout='responsive' alt='certificates'></Image>
                    </div>
                ))}
                <div className="  sm:snap-center shrink-0  w-1/5 sm:w-[calc(15%)] md:w-[calc(20%)] lg:w-[calc(25%)] xl:w-[calc(31%)]"></div>

            </div>
            <Link href="/certificates" passHref>
                <div className="mt-[7vh] self-center">
                    <ViewAllButton />
                </div>
            </Link>
        </div>

    )
}

export default Certificate

