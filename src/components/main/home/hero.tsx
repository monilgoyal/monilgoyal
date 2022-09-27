import Image from 'next/image'
import Link from 'next/link'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../state'
import Social from '../../helpers/social'
function Hero() {
    const dispatch = useDispatch()
    const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    return (
        <section className="relative text-gray-400 bg-transparent body-font -z-0 ">
            <div className="container mx-auto flex lg:px-12 xl:px-36 pt-12 pb-6 lg:py-24 lg:flex-row flex-col-reverse items-center">
                <div className="lg:flex-grow  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <div className="absolute -z-10 dark:text-gray-800 text-indigo-100 -mt-32 opacity-50 hidden lg:block ">
                        <h1 className="text-9xl font-extrabold my-6">BUILD</h1>
                        <h1 className="text-9xl font-extrabold my-6">UPDATE</h1>
                        <h1 className="text-9xl font-extrabold my-6">DEPLOY</h1>
                    </div>
                    <h1 className="sm:text-5xl text-4xl lg:mt-0 mb-4 mt-4 font-medium dark:text-white text-indigo-600 lg:mx-0 mx-auto ">Monil Goyal</h1>
                    <span className='mx-auto lg:mx-0'>
                        <p className="w-max font-light relative whitespace-nowrap overflow-x-hidden leading-relaxed mx-auto lg:mx-0  before:bg-white dark:before:bg-gray-900 after:bg-gray-900 dark:after:bg-white pr-1 border-r-4 dark:border-white border-gray-700 border-solid text-xl xl:text-2xl animate-typeWriter">
                            <span data-text-1="Full Stack Developer" data-text-2="Python Developer" data-text-3="Freelancer" className='text-gray-600 font-medium dark:font-normal dark:text-white before:content-["Full Stack Developer"] before:animate-changeText'></span>
                        </p>
                    </span>
                    <div className='py-6 text-gray-600 dark:text-gray-400 mx-auto lg:mx-0 '>
                        <Social />
                    </div>
                    <div>
                        <Link href='https://cv.monilgoyal.me' passHref>
                            <button className="inline-flex text-white bg-indigo-500 border-2 border-indigo-500 py-2 px-6 focus:outline-none  hover:bg-indigo-600 hover:border-indigo-600 rounded text-lg ">Download CV</button>
                        </Link>
                        <button className="ml-4 inline-flex dark:text-indigo-400 text-indigo-600  border-2 border-indigo-500 py-2 px-6 focus:outline-none hover:bg-indigo-600 dark:hover:text-white hover:text-white rounded text-lg" onClick={toggleContactForm}>Contact Me</button>
                    </div>
                </div>
                <div className='w-64 h-64 lg:w-96 lg:h-96 border-2 border-transparent dark:border-indigo-600 p-2 rounded-full '>
                    <Image className='rounded-full inline-block ' src='/mg.png' width={240} height={240} objectFit='cover' layout='responsive' alt='monil goyal' priority={true}></Image>
                </div>
            </div>
        </section>
    )
}

export default Hero