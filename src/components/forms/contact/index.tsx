import React, { useEffect, useState } from 'react'
import { AiOutlineClose, AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../state'
import { RootState } from '../../../state/reducers'
import { MdDelete } from 'react-icons/md'
function ContactForm() {
    const [isDragIn, setisDragIn] = useState(false)
    const [errors, setErrors] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState<File>()


    useEffect(() => {
        if (file != undefined) {
            handleUpload()
        }
    }, [file])

    const handlecapture = (event: React.FormEvent) => {
        const files = (event.target as HTMLInputElement).files
        if (files && files.length > 0) {
            setFile(files[0])
        }


    }
    const handleFileDelete = () => {
        setFile(undefined)
    }

    const handleUpload = () => {
        let fileType = file.type;
        if (fileType.match(/image\/*/) || fileType.match(/application\/*/) || fileType.match(/text\/*/)) { //if user selected file is an image file
            let fileReader = new FileReader(); //creating new FileReader object
            console.log(file)

        }
        else {
            alert('Unsupported file format')
            setFile(undefined)
        }
        setisDragIn(false)
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
        setFile(e.dataTransfer.files[0])


    }

    const validateEmail = (email) => {
        return email.match(
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    };
    const validateLinkedinUrl = (url) => {
        return url.match(
            /(https?:\/\/(www.)|(www.))?linkedin.com\/(mwlite\/|m\/)?in\/[a-zA-Z0-9_.-]+\/?/
        );
    };



    const handleValidation = () => {
        let tempErrors = {};
        let isValid = true;

        if (name.length <= 0) {
            tempErrors["name"] = true;
            isValid = false;
        }
        if (!validateEmail(email)) {
            tempErrors["invalidEmail"] = true
            isValid = false;
        }

        if (linkedin != '' && !validateLinkedinUrl(linkedin)) {
            tempErrors["invalidLinkedinUrl"] = true
            isValid = false;
        }

        if (email.length <= 0) {
            tempErrors["email"] = true;
            isValid = false;
        }
        if (message.length <= 24) {
            tempErrors["message"] = true;
            isValid = false;
        }

        setErrors({ ...tempErrors });
        return isValid;
    };
    const handleErrorMessage = (e) => {
        if (e.target.value.length > 24) {
            setErrors({ ...errors, "message": false });
        }
    }
    const handleErrorName = (e) => {
        if (e.target.value.length > 0) {
            setErrors({ ...errors, "name": false });
        }
    }
    const handleErrorEmail = (e) => {
        if (e.target.value.length > 0) {
            setErrors({ ...errors, "email": false, "invalidEmail": false });
        }

    }
    const handleErrorLinkedin = (e) => {
        if (validateLinkedinUrl(e.target.value)) {
            setErrors({ ...errors, "invalidLinkedinUrl": false });
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            const resp = await fetch('/api/sendgrid', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    subject: "New Contact request",
                    message: message + " Linkedin: " + linkedin,
                })
            }).then((res) => {
                console.log('Response received')
                if (res.status === 200) {
                    console.log('Response succeeded!')
                    setName('')
                    setEmail('')
                }
                if (res.status === 500) {
                    console.log(res)

                }
                console.log(res.status)
            })
        };
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
                    <form className="relative" onSubmit={handleSubmit}>
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
                            <div className='inline-block py-0 px-10 mt-5 w-full'>
                                <div className='block text-md font-semibold mt-2 dark:text-white'>
                                    Name&nbsp;
                                    <div className="inline text-red-600">*</div>
                                </div>
                                <div className='my-2'>
                                    <input type="text" className={'py-2 border-0 border-b w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200  focus:border-b-2'.concat(' ', errors['name'] ? 'border-red-600 ' : 'border-gray-300 focus:border-gray-400')} placeholder='John Doe'
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                        }}
                                        onKeyUp={(e) => handleErrorName(e)} />
                                </div>
                                <div className={errors['name'] ? 'visible' : 'hidden'}>
                                    <AiOutlineExclamationCircle className='text-red-600 text-xl inline' />&nbsp;
                                    <p className='text-sm font-medium text-red-600 inline'>This is required field</p>
                                </div>
                            </div>
                            <div className='inline-block py-0 px-10 w-full'>
                                <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                    Contact Email&nbsp;
                                    <div className="inline text-red-600">*</div>
                                </div>
                                <div className='my-2'>
                                    <input type="text" className={'py-2 border-0 border-b w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200  focus:border-b-2'.concat(' ', errors['email'] || errors['invalidEmail'] ? 'border-red-600 ' : 'border-gray-300 focus:border-gray-400')} placeholder='example@domain.com'
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                        }}
                                        onKeyUp={(e) => handleErrorEmail(e)} />
                                </div>
                                <div className={errors['email'] || errors['invalidEmail'] ? 'visible' : 'hidden'}>
                                    <AiOutlineExclamationCircle className='text-red-600 text-xl inline' />&nbsp;
                                    <p className='text-sm font-medium text-red-600 inline'>{errors['email'] ? 'This is required field' : errors['invalidEmail'] ? 'Invalid Email' : ''}</p>
                                </div>
                            </div>
                            <div className='inline-block py-0 px-10 mb-5 w-full'>
                                <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                    Linkedin Profile
                                </div>
                                <div>
                                    <input type="text" className={'py-2 border-0 border-b w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200  focus:border-b-2'.concat(' ', errors['invalidLinkedinUrl'] ? 'border-red-600 ' : 'border-gray-300 focus:border-gray-400')} placeholder='https://linkedin.com/in/id'
                                        value={linkedin}
                                        onChange={(e) => {
                                            setLinkedin(e.target.value);
                                        }}
                                        onKeyUp={(e) => handleErrorLinkedin(e)} />
                                </div>
                                <div className={errors['invalidLinkedinUrl'] ? 'visible' : 'hidden'}>
                                    <AiOutlineExclamationCircle className='text-red-600 text-xl inline' />&nbsp;
                                    <p className='text-sm font-medium text-red-600 inline'>Invalid Linkedin Profile</p>
                                </div>

                            </div>
                            <div className='inline-block py-0 px-10 mb-5 w-full'>
                                <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                    How can I help you?&nbsp;
                                    <div className="inline text-red-600">*</div>
                                </div>
                                <div>
                                    <textarea className={'py-4 border-0 border-b w-full block outline-none border-solid text-sm h-14 bg-transparent dark:border-gray-500 dark:text-gray-200  focus:border-b-2'.concat(' ', errors['message'] ? 'border-red-600 ' : 'border-gray-300 focus:border-gray-400')} placeholder='Descrube briefly'
                                        value={message}
                                        onChange={(e) => {
                                            setMessage(e.target.value);
                                        }
                                        }
                                        onKeyUp={(e) => {
                                            handleErrorMessage(e);
                                        }}
                                    ></textarea>
                                </div>
                                <div className={errors['message'] ? 'visible' : 'hidden'}>
                                    <AiOutlineExclamationCircle className='text-red-600 text-xl inline' />&nbsp;
                                    <p className='text-sm font-medium text-red-600 inline'>Enter atleast 25 characters</p>
                                </div>
                            </div>
                            <div className='inline-block py-0 px-10 mb-5 w-full'>
                                <div className='block text-md font-semibold mt-5 mb-3 dark:text-white'>
                                    File
                                </div>
                                <div className="py-5 lg:hidden flex flex-col">

                                    <div className={" ".concat(' ', isDragIn ? 'invisible' : '')}>

                                        <input
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            type="file"
                                            name="imagetocrop"
                                            onChange={handlecapture}
                                        />
                                        <label htmlFor="raised-button-file">
                                            <span className="px-6 py-4 text-gray-400 border border-solid border-gray-400 rounded-md max-w-xs m-auto dark:text-gray-300 dark:border-gray-300 cursor-pointer">
                                                Browse File
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className={"justify-center align-middle flex-col rounded-md p-6 w-full text-sm lg:flex border-2 hidden ".concat(" ", isDragIn ? 'border-solid border-gray-500 dark:border-gray-300' : 'border-dashed border-gray-300 dark:border-gray-500')} onDragOver={handleDragOver} onDrop={handleDrop} onDragLeave={handleDragLeave}>
                                    <span className={"py-4 text-center text-lg font-normal text-gray-400".concat(' ', isDragIn ? 'invisible' : '')}>
                                        Drag & drop here
                                    </span>
                                    <span className={'text-center text-lg font-normal'.concat(' ', isDragIn ? 'text-gray-500 dark:text-gray-300' : 'text-gray-300 dark:text-gray-500')} >{isDragIn ? 'Release to Upload' : 'OR'}</span>
                                    <span className={"my-6 mx-auto ".concat(' ', isDragIn ? 'invisible' : '')}>

                                        <input
                                            style={{ display: 'none' }}
                                            id="raised-button-file"
                                            type="file"
                                            name="imagetocrop"
                                            onChange={handlecapture}
                                        />
                                        <label htmlFor="raised-button-file">
                                            <span className="px-6 py-4 text-gray-400 border border-solid border-gray-400 rounded-md max-w-xs m-auto dark:text-gray-300 dark:border-gray-300 cursor-pointer">
                                                Browse File
                                            </span>
                                        </label>
                                    </span>
                                </div>
                                {file != undefined &&
                                    <div className="flex mt-5">
                                        <span className="mr-1 text-indigo-500 dark:text-white text-center self-center">
                                            <BsPatchCheckFill />
                                        </span>
                                        <span className=' dark:text-white'>{file.name}</span>
                                        <span className="ml-2 dark:text-white text-center self-center text-lg">
                                            <MdDelete onClick={handleFileDelete} className="cursor-pointer" />
                                        </span>
                                    </div>}
                            </div>
                            <div className='mx-8'>
                                <button type='submit' className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600"> Send </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
export default ContactForm