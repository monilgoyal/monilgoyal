import Image from 'next/image'
import { Experiences } from '../../../../data/experience'
import { useEffect } from 'react'
import { useWindowSize } from '../../../../hooks/window'
function Experience() {
    const { height, width } = useWindowSize();
    useEffect(() => {
        const RL_targets = document.querySelectorAll(".animation_RL");
        const LR_targets = document.querySelectorAll(".animation_LR");

        // Callback for IntersectionObserver
        const callback_for_RL = function (entries) {
            entries.forEach(entry => {

                // Is the element in the viewport? 
                if (entry.isIntersecting) {

                    // Add the fadeIn class:
                    entry.target.classList.add("motion-safe:animate-aosLtoR");
                    // entry.target.classList.remove("motion-safe:animate-[aosRtoL_2s_reverse]");
                } else {

                    // Otherwise remove the fadein class
                    entry.target.classList.remove("motion-safe:animate-aosLtoR");
                    // entry.target.classList.add("motion-safe:animate-[aosRtoL_2s_reverse]");
                }
            });
        };
        const callback_for_LR = function (entries) {
            entries.forEach(entry => {

                // Is the element in the viewport? 
                if (entry.isIntersecting) {

                    // Add the fadeIn class:
                    entry.target.classList.add("motion-safe:animate-aosRtoL");
                    // entry.target.classList.remove("motion-safe:animate-[aosRtoL_2s_reverse]");
                } else {

                    // Otherwise remove the fadein class
                    entry.target.classList.remove("motion-safe:animate-aosRtoL");
                    // entry.target.classList.add("motion-safe:animate-[aosRtoL_2s_reverse]");
                }
            });
        };

        // Set up a new observer for Right to Left
        const RL_observer = new IntersectionObserver(callback_for_RL);
        // Set up a new observer for Left to Right
        const LR_observer = new IntersectionObserver(callback_for_LR);

        // Loop through each of the target RL
        RL_targets.forEach(function (target) {
            // Add the element to the watcher
            RL_observer.observe(target);
        });
        // Loop through each of the target LR
        LR_targets.forEach(function (target) {
            // Add the element to the watcher
            LR_observer.observe(target);
        });


    })
    return (
        <>
            <div className="container  mx-auto flex flex-wrap ">
                {Experiences.map((exp, index) => (
                    index % 2 === 0 ? <div className="flex  flex-row relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400 py-10" key={index}>
                        <div className=" w-full h-full hidden  lg:flex justify-center lg:justify-end ">
                        </div>



                        <div className="h-full w-6 absolute lg:left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                            <div className="h-full w-1 bg-indigo-100 dark:bg-gray-800 pointer-events-none"></div>
                        </div>

                        <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10  inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>



                        <div className="animation_RL w-full lg:w-full text-left flex flex-col justify-center translate-x-full ">
                            <div className="flex-grow md:px-8 px-6 flex sm:items-center items-start flex-col sm:flex-row">
                                <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-indigo-400 dark:bg-gray-800 text-white dark:text-indigo-400 rounded-full inline-flex items-center justify-center">
                                    <Image src={exp.iconUrl} width={40} height={40} alt="Logo" />
                                </div>
                                <div className="flex-grow sm:px-6 mt-6 sm:mt-0">
                                    <p className="leading-relaxed">{exp.date}</p>
                                    <h2 className="font-medium title-font text-gray-900 dark:text-white mb-1 text-xl">{exp.title}</h2>
                                    <p className="leading-relaxed font-bold text-lg">{exp.subtitle}</p>
                                </div>
                            </div>
                        </div>
                    </div> :
                        <div className="flex flex-row lg:flex-row-reverse relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400 py-10" key={index} >



                            <div className="animation_RL w-full h-full hidden lg:flex justify-center lg:justify-start translate-x-full" ></div>



                            <div className="h-full w-6 absolute lg:left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                                <div className="h-full w-1 bg-indigo-100 dark:bg-gray-800 pointer-events-none"></div>
                            </div>



                            <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10  inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>



                            <div className={"w-full lg:w-full text-left lg:text-right flex flex-col justify-center  ".concat(" ", width >= 1024 ? "animation_LR -translate-x-full" : "animation_RL translate-x-full")}>
                                <div className="flex-grow md:px-8 px-6 flex sm:items-center items-start flex-col sm:flex-row lg:flex-row-reverse">
                                    <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 bg-indigo-400 dark:bg-gray-800 text-white dark:text-indigo-400 rounded-full inline-flex items-center justify-center">
                                        {/* <FaGraduationCap className='text-3xl' /> */}
                                        <Image src={exp.iconUrl} width={100} height={100} alt="Logo" />
                                    </div>
                                    <div className="flex-grow sm:px-6 mt-6 sm:mt-0">
                                        <p className="leading-relaxed">{exp.date}</p>
                                        <h2 className="font-medium title-font text-gray-900 dark:text-white mb-1 text-xl">{exp.title}</h2>
                                        <p className="leading-relaxed font-bold text-lg">{exp.subtitle}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                ))
                }


            </div>
        </>
    )
}

export default Experience