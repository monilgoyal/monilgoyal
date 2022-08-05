import Link from 'next/link';
import React from 'react'
import { FiMail } from 'react-icons/fi';
import Social from '../helpers/social';

function Footer() {
    return (
        <footer className="text-gray-500 dark:text-gray-400 bg-transparent body-font ">
            <div className="border-t border-gray-200 dark:border-gray-800">
                <div className="container px-32 py-8 flex flex-wrap-reverse mx-auto items-center justify-center">
                    <div className="flex md:flex-nowrap flex-wrap justify-center items-end md:justify-start ">
                        <div className="relative sm:w-64 w-80 text-center md:text-left md:mt-0 mt-6">
                            <FiMail className='inline mr-2 text-lg' />
                            <a href="mailto:contact@monilgoyal.me" className='mx-auto font-medium'>
                                contact@monilgoyal.me
                            </a>
                        </div>
                    </div>
                    <Social extraClass='mt-6 lg:mt-0  ' />
                </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 dark:bg-opacity-30">
                <div className="container mx-auto py-4 px-5 ">
                    <p className="text-gray-500 dark:text-gray-400  text-sm text-center ">Made with ❤ by
                        <Link href='/' passHref>
                            <a className="text-indigo-700 dark:text-indigo-300 ml-1" rel="noopener noreferrer">@monilgoyal</a>
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer