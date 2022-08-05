import React from 'react'
import Marquee from "react-fast-marquee";
import * as skillsets from '../../../data/skills'
import Image from 'next/image';
import { ViewAllButton } from '../../helpers/button/viewall'
import Link from 'next/link';

const Skills = () => {
    return (
        <div className="flex flex-col justify-center align-middle w-full overflow-x-hidden absolute  py-20">
            <div className='dark:text-white text-indigo-500  text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center self-center'>
                SKILLS
            </div>
            <Marquee
                className='mt-[10vh]'
                gradient={false}
                speed={100}
                pauseOnHover={true}
                pauseOnClick={true}
                delay={0}
                play={true}
                direction="left"
            >{
                    Object.keys(skillsets).map((skillset) => (
                        skillsets[skillset].map((skill) => (
                            <div className="flex justify-center align-middle dark:bg-gray-300 bg-gray-200 mx-6 p-2  rounded-md" key={skill.name} >
                                <div className='xl:w-28 w-20'>
                                    <Image src={skill.logo} className="m-1" width={12} height={12} objectFit='contain' layout='responsive' alt={skill.name}></Image>
                                    <h3 className=' text-center'>
                                        {skill.name}
                                    </h3>
                                </div>
                            </div>
                        ))
                    ))
                }

            </Marquee>
            <Link href="/about/#skills" passHref>
                <div className="mt-[10vh] self-center">
                    <ViewAllButton />
                </div>
            </Link>

            {/* <div className='text-center dark:text-white text-indigo-500 self-center mt-24 md:mt-28 '><BsFillArrowRightCircleFill className='text-4xl' /></div> */}
        </div>
    )
}

export default Skills