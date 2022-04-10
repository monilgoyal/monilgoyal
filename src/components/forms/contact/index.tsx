import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { FiMessageSquare } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../state'
import { RootState } from '../../../state/reducers'

function ContactForm() {
    let file: Blob;
    const [isDragIn, setisDragIn] = useState(false)
    const [editArea, seteditArea] = useState(false)
    const handlecapture = (event: React.ChangeEvent) => {
        // @ts-ignore
        file = event.target.files[0]
        // @ts-ignore
        filename = event.target.files[0].name.split('.')[0]
        // @ts-ignore
        fileExtention = event.target.files[0].name.split('.')[1]
        handleUpload()


    }

    const handleUpload = () => {
        let fileType = file.type;
        let validExtensions = ["image/jpeg", "image/jpg", "image/png"];
        // console.log(validExtensions.includes(fileType))
        if (validExtensions.includes(fileType)) { //if user selected file is an image file
            let fileReader = new FileReader(); //creating new FileReader object
            fileReader.onload = () => {
                let fileURL = fileReader.result;
                seteditArea(true)
            }
            fileReader.readAsDataURL(file);

        }
        else {
            alert('Wrong image type use only jpg/jpeg/png files')
            setisDragIn(false)
        }
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.stopPropagation();
        e.preventDefault()
        setisDragIn(true)
    }
    const handleDragLeave = (e: React.DragEvent) => {
        e.stopPropagation();
        e.preventDefault()
        setisDragIn(false)
    }
    const handleDrop = (e: React.DragEvent) => {
        e.stopPropagation();
        e.preventDefault()
        setisDragIn(true)
        file = e.dataTransfer.files[0]
        handleUpload()

    }




    const IsContactFormOpen = useSelector((state: RootState) => state.IsContactFormOpen)
    const dispatch = useDispatch()
    const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    return (
        <div className={"fixed top-0 bottom-0 right-0 left-0 transition-all ".concat(" ", IsContactFormOpen ? "z-50 duration-500 " : "-z-50 duration-1000 delay-300")} >
            <div className={'bg-black absolute top-0 bottom-0 right-0 left-0 ease-out transition delay-200'.concat(" ", IsContactFormOpen ? "opacity-80 duration-300 visible " : "opacity-0 duration-500 ")} onClick={toggleContactForm}></div>
            <div className={"bg-white dark:bg-gray-900 absolute top-0 bottom-0 left-full z-30 w-screen ease-linear transition-all max-w-xl overflow-y-auto overflow-x-hidden".concat(" ", IsContactFormOpen ? "-translate-x-full duration-300 delay-500" : "duration-300 delay-200")}>
                <button type="button" className="bg-white top-3 right-3 absolute dark:bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" onClick={toggleContactForm} aria-label="close">
                    <AiOutlineClose className=' text-xl fill-gray-900 dark:fill-white' aria-hidden="true" />
                </button>
                <div className="box-border p-10">
                    <form action="/" className="relative">
                        <div>
                            <div className="flex align-middle">
                                <div className="relative flex overflow-hidden w-14 h-14 mr-5 text-3xl bg-indigo-500 rounded-full ">
                                    <FiMessageSquare className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 stroke-white' />
                                </div>
                                <div>
                                    <div className='text-3xl font-semibold dark:text-white'>Hi there! 👋</div>
                                    <div className='text-sm mt-2 opacity-70 dark:text-white'>Great to see you here</div>
                                </div>
                            </div>
                            <div className="my-0 pt-5 mb-5 -mx-9">
                                <div className='inline-block py-0 px-10 mb-5 w-full'>
                                    <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                        Name&nbsp;
                                        <div className="inline text-red-600">*</div>
                                    </div>
                                    <div>
                                        <input type="text" className='py-2 border-0 border-b border-gray-300 w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200' placeholder='John Doe' />
                                    </div>
                                </div>
                                <div className='inline-block py-0 px-10 mb-5 w-full'>
                                    <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                        Contact Email&nbsp;
                                        <div className="inline text-red-600">*</div>
                                    </div>
                                    <div>
                                        <input type="text" className='py-2 border-0 border-b border-gray-300 w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200' placeholder='example@domain.com' />
                                    </div>
                                </div>
                                <div className='inline-block py-0 px-10 mb-5 w-full'>
                                    <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                        Linkedin Profile&nbsp;
                                        <div className="inline text-red-600">*</div>
                                    </div>
                                    <div>
                                        <input type="text" className='py-2 border-0 border-b border-gray-300 w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200' placeholder='https://linkedin.com/in/yourid' />
                                    </div>
                                </div>
                                <div className='inline-block py-0 px-10 mb-5 w-full'>
                                    <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                        How can I help you?
                                    </div>
                                    <div>
                                        <textarea className='py-4 border-0 border-b border-gray-300 w-full block outline-none border-solid text-sm h-14 overflow-hidden break-words bg-transparent dark:border-gray-500 dark:text-gray-200' placeholder='Descrube briefly'  ></textarea>
                                    </div>
                                </div>
                                <div className='inline-block py-0 px-10 mb-5 w-full'>
                                    <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                        File
                                    </div>
                                    <div className={"justify-center align-middle flex-col rounded-md p-6 w-full text-sm border-gray-300 dark:border-gray-500 flex border-2".concat(" ", isDragIn ? 'border-solid' : 'border-dashed')} onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave}>
                                        <span className="text-center mx-8 text-lg font-normal text-gray-400">

                                            {isDragIn ? 'Release to Upload' : 'Drag & drop here'}
                                        </span>
                                        <span className='text-center text-gray-400' >OR</span>
                                        <span className="mb-4 mt-8 mx-auto">

                                            <input
                                                accept="image/*"
                                                style={{ display: 'none' }}
                                                id="raised-button-file"
                                                type="file"
                                                name="imagetocrop"
                                                disabled={editArea}
                                                onChange={handlecapture}
                                            />
                                            <label htmlFor="raised-button-file">
                                                <span className="px-8 py-4 text-gray-400 border border-solid border-gray-300 rounded-md max-w-xs m-auto hover:text-gray-600 hover:border-gray-600 focus:text-gray-600 focus:border-gray-600 active:text-gray-600 active:border-gray-600">
                                                    Browse File
                                                </span>
                                            </label>
                                        </span>
                                    </div>
                                </div>
                                <div className='mx-8'>
                                    <a href="#" className=" flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600"> Send </a>
                                </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default ContactForm