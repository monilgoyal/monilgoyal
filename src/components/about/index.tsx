import React from 'react'
import { FaGraduationCap } from 'react-icons/fa'
import { Educations } from '../../data/education'
const Education = () => {
    return (
        <section className="text-gray-400  body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap lg:w-1/2">
                {Educations.map((edu, index) => (
                    <div className="flex relative pt-10 pb-20 sm:items-center w-full mx-auto" key={index}>
                        <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-indigo-100 dark:bg-gray-800 pointer-events-none"></div>
                        </div>
                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>
                        <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-indigo-500 dark:bg-gray-800 text-white dark:text-indigo-400 rounded-full inline-flex items-center justify-center">
                                <FaGraduationCap className='text-3xl' />
                            </div>
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                                <p className="leading-relaxed">{edu.date}</p>
                                <h2 className="font-medium title-font text-gray-900 dark:text-white mb-1 text-xl">{edu.title}</h2>
                                <p className="leading-relaxed font-bold text-lg">{edu.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Education