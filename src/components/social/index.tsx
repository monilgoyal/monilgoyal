import Link from 'next/link';
import React from 'react'
import { FaInstagram, FaLinkedinIn, FaMediumM } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { SiUpwork } from 'react-icons/si';
type socialType = {
    extraClass: string;
}

function Social(props: socialType) {
    return (
        <div className={props.extraClass + ' ' + 'inline-flex justify-center w-full md:ml-auto md:w-auto md:justify-start'}>
            <span className='mr-2'>
                <Link href="https://github.com/monilgoyal">
                    <a target="_blank" aria-label="github">
                        <FiGithub className='text-2xl' aria-hidden="true" />
                    </a>
                </Link>
            </span>
            <span className='mx-2'>
                <Link href="https://medium.com/@monilgoyal" >
                    <a target="_blank" aria-label='medium'>
                        <FaMediumM className='text-2xl' aria-hidden="true" />
                    </a>
                </Link>
            </span>
            <span className='mx-2'>
                <Link href="https://www.instagram.com/monilgoyal/" >
                    <a target="_blank" aria-label='instagram'>
                        <FaInstagram className='text-2xl' aria-hidden="true" />
                    </a>
                </Link>
            </span>
            <span className='mx-2'>
                <Link href="https://www.linkedin.com/in/monilgoyal/" >
                    <a target="_blank" aria-label='linkedin'>
                        <FaLinkedinIn className='text-2xl' aria-hidden="true" />
                    </a>
                </Link>
            </span>
            <span className='mx-2'>
                <Link href="https://github.com/monilgoyal">
                    <a target="_blank" aria-label="upwork">
                        <SiUpwork className='text-3xl' aria-hidden="true" />
                    </a>
                </Link>
            </span>
        </div>
    )
}

Social.defaultProps = {
    extraClass: ''
}

export default Social