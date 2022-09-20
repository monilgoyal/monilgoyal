import { BsCircleFill } from 'react-icons/bs'
import Image from 'next/image'
import Footer from '../components/footer'
import Header from '../components/header'
import Navbar from '../components/navbar'
import { Certificates } from '../data/certificates'
import { useEffect } from 'react'
// Certificates.sort((a, b) => (a.id < b.id) ? 1 : -1)

function Certificate() {
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
            <Header title="Certificates - Monil Goyal" header_content="Certificates - Monil Goyal" />
            <Navbar />
            <section className="text-gray-400 body-font py-20 lg:py-24">
                <div className='dark:text-white text-indigo-500 text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto text-center mb-12'>
                    <h1>CERTIFICATES</h1>
                </div>
                <div className="container px-5 mx-auto flex flex-wrap ">
                    {Certificates.map((certificate, index) => (
                        index % 2 === 0 ? <div className="flex flex-col lg:flex-row relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400" key={certificate.id}>
                            <div className="animation_LR w-full h-full flex justify-center lg:justify-end -translate-x-full">
                                <div className={'w-full sm:w-3/4 '.concat(' ', certificate.fit != "fill" ? "py-10" : "")}>
                                    <Image className='rounded-lg p-0 ' src={"https://images.weserv.nl/?url=" + certificate.url + "&w=600&h=400&dpr=2"} width="100%" height="100%" objectFit='contain' layout='responsive' alt='monil goyal'></Image>
                                </div>
                            </div>
                            <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center">
                                <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                                    <div className="h-full w-1 bg-indigo-100 dark:bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                                    <BsCircleFill className='text-indigo-500' />
                                </div>
                            </div>
                            <div className="animation_RL w-full lg:w-full text-center lg:text-left flex flex-col justify-center translate-x-full ">
                                <div className='w-full md:w-4/5 lg:w-3/5 self-center lg:self-start flex flex-col'>
                                    <div className='text-xl font-semibold'>{certificate.title}</div>
                                    <div className="py-[calc(2px)] my-2 rounded-xl bg-indigo-500 w-24 self-center lg:self-start"></div>
                                    <div className='text-sm font-bold '>{ }</div>
                                    <div className='text-sm font-bold ' dangerouslySetInnerHTML={{ __html: certificate.date }}></div>
                                </div>
                            </div>
                        </div> : <div className="flex flex-col lg:flex-row-reverse relative w-full mx-auto overflow-x-hidden text-gray-900 dark:text-gray-400" key={certificate.id} >
                            <div className="animation_RL w-full h-full flex justify-center lg:justify-start translate-x-full" >
                                <div className={'w-full sm:w-3/4 '.concat(' ', certificate.fit != "fill" ? "py-10" : "")}>
                                    <Image className='rounded-lg p-0' src={"https://images.weserv.nl/?url=" + certificate.url + "&w=600&h=400&dpr=2"} width="100%" height="100%" objectFit='contain' layout='responsive' alt='monil goyal'></Image>
                                </div>
                            </div>
                            <div className="w-1/5 hidden h-full relative lg:flex items-center justify-center">
                                <div className="h-full w-6 absolute left-[calc(50%-12px)] inset-0 flex items-center justify-center ">
                                    <div className="h-full w-1 bg-indigo-100 dark:bg-gray-800 pointer-events-none"></div>
                                </div>
                                <div className="flex-shrink-0 w-10 h-10 rounded-full  inline-flex items-center justify-center text-white relative z-10">
                                    <BsCircleFill className='text-indigo-500' />
                                </div>
                            </div>
                            <div className="animation_LR w-full lg:w-full text-center lg:text-right flex flex-col justify-center -translate-x-full">
                                <div className='w-full md:w-4/5 lg:w-3/5 self-center lg:self-end flex flex-col'>
                                    <div className='text-xl font-semibold'>{certificate.title}</div>
                                    <div className="py-[calc(2px)] my-2 rounded-xl bg-indigo-500 w-24 self-center lg:self-end"></div>
                                    <div className='text-sm font-bold ' dangerouslySetInnerHTML={{ __html: certificate.date }}></div>
                                </div>
                            </div>
                        </div>
                    ))
                    }


                </div>
            </section>
            <Footer />
        </>
    )
}

export default Certificate