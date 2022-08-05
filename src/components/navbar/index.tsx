import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GoHome } from 'react-icons/go';
import { GrCertificate } from 'react-icons/gr';
import { AiFillProject } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../state/reducers';
import ThemeToggler from '../helpers/button/themeToggler';
import DrawerToggler from '../helpers/button/drawerToggler';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../../state';
import Social from '../helpers/social';
function Navbar() {
    const router = useRouter();
    const dispatch = useDispatch()
    const IsDrawerOpen = useSelector((state: RootState) => state.IsDrawerOpen)
    const IsDark = useSelector((state: RootState) => state.IsDark)
    const toggleDrawer = bindActionCreators(actionCreator.drawerToggle, dispatch)
    const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    const routeLinkStyle = "mr-5 text-base font-medium hover:text-black dark:hover:text-white"
    return (
        <div className="relative bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                    <div className="flex justify-start lg:w-0 lg:flex-1">
                        <Link href='/' passHref>
                            <div className="block title-font font-medium items-center mb-4 md:mb-0 w-16 h-12 ">
                                <Image src={IsDark ? '/logo-light.png' : '/logo-dark.png'} width={64} height={48} alt="logo" layout='responsive'></Image>
                            </div>
                        </Link>
                    </div>

                    <div className="-mr-2 -my-2 md:hidden">
                        <DrawerToggler />
                    </div>
                    <nav className="hidden md:flex space-x-10">
                        <Link href="/" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/" ? "text-black dark:text-white" : "dark:text-gray-400  text-gray-600 opacity-80 ")}>Home</a></Link>
                        <Link href="/about" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/about" ? "text-black dark:text-white" : "dark:text-gray-400  text-gray-600 opacity-80 ")}>About</a></Link>
                        <Link href="/projects" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/projects" ? "text-black dark:text-white" : "dark:text-gray-400  text-gray-600 opacity-80 ")}>Projects</a></Link>
                        <Link href="/certificates" passHref><a className={routeLinkStyle.concat(" ", router.pathname == "/certificates" ? "text-black dark:text-white" : "dark:text-gray-400  text-gray-600 opacity-80 ")}>Certificates</a></Link>
                        <ThemeToggler />
                    </nav>
                    <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0" >

                        <span className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-bold text-white bg-indigo-500 hover:bg-indigo-600" onClick={toggleContactForm} > Hire Me! </span>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            <div className={" fixed top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden bg-transparent z-50".concat(" ", IsDrawerOpen ? "-translate-y-0 " : "-translate-y-full ")}>
                <div className="rounded-lg shadow-lg ring-1 ring-black dark:ring-gray-300 dark:ring-opacity-20 ring-opacity-5 bg-white dark:bg-gray-900 divide-y-2 divide-gray-50 text-gray-700 dark:text-white">
                    <div className="pt-5 pb-6 px-5">
                        <div className="flex items-center justify-between">
                            <div className='w-16 h-12'>
                                <Image src={IsDark ? '/logo-light.png' : '/logo-dark.png'} width={64} height={48} alt="logo" layout='responsive'></Image>
                            </div>
                            <div className="ml-auto mr-3">
                                <ThemeToggler />
                            </div>
                            <div className="-mr-2">
                                <DrawerToggler />
                            </div>

                        </div>
                        <div className="mt-6">
                            <nav className="grid gap-y-8 ">
                                <Link href="/" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <GoHome className='text-2xl  ' />
                                        <span className="ml-6 text-base font-medium ">Home </span>
                                    </a>
                                </Link>

                                <Link href="/about" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <SiAboutdotme className='text-2xl  ' />
                                        <span className="ml-6 text-base font-medium "> About </span>
                                    </a>
                                </Link>

                                <Link href="/projects" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <AiFillProject className='text-2xl  ' />
                                        <span className="ml-6 text-base font-medium "> Projects </span>
                                    </a>
                                </Link>

                                <Link href="/certificates" passHref>
                                    <a onClick={toggleDrawer} className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 dark:hover:bg-gray-800">
                                        <GrCertificate className='text-2xl  ' fill='white' />
                                        <span className="ml-6 text-base font-medium "> Certificates </span>
                                    </a>
                                </Link>
                            </nav>
                        </div>
                    </div>
                    <div className="  py-6 px-5 space-y-6">
                        <Social />
                        <div>
                            <span className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600" onClick={toggleContactForm}> Hire me! </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar