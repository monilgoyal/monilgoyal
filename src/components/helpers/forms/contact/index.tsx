import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import { BsPatchCheckFill } from 'react-icons/bs'
import { FiMessageSquare } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import 'simple-notify/dist/simple-notify.min.css'
import Notify from 'simple-notify'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../../state'
const CancelToken = axios.CancelToken;

function pushNotify(status, Title, Text) {
    new Notify({
        status: status,
        title: Title,
        text: Text,
        effect: 'slide',
        speed: 300,
        customClass: '',
        customIcon: '',
        showIcon: true,
        showCloseButton: true,
        autoclose: true,
        autotimeout: 5000,
        gap: 20,
        distance: 20,
        type: 1,
        position: 'right top'
    })
}
function ContactForm() {
    const [isDragIn, setisDragIn] = useState(false)
    const [errors, setErrors] = useState({})
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [message, setMessage] = useState('')
    const [file, setFile] = useState<File>()
    const [requested, setRequested] = useState(false)
    const [done, setDone] = useState(false)
    const [firstReq, setFirstReq] = useState(false)


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
        if (file) {
            console.log(file)
            let fileType = file.type;
            // if (!fileType.match(/image\/*/) && !fileType.match(/application\/*/) && !fileType.match(/text\/*/)) {
            if (!fileType.match(/image\/*/) && !fileType.match(/application\/*/) && !fileType.match(/text\/*/) && !fileType.match(/video\/*/)) {
                pushNotify('error', 'Unsupported File', 'This file format is not allowed')
                console.log(file)
                // alert('Unsupported file format')
                setFile(undefined)
            }
            if (file.size > 10600000) {
                pushNotify('error', 'File size exceed 10Mb', 'For large files provide public link to access.')
            }
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
    const cancelSource = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();

        let isValidForm = handleValidation();

        if (isValidForm) {
            setRequested(true)
        };
    }
    useEffect(() => {
        cancelSource.current = CancelToken.source();
        if (requested) {

            const reqBody = {
                "Name": name,
                "Email": email,
                "LinkedIn": linkedin,
                "Message": message,
            }
            if (file != undefined) {
                reqBody["fileName"] = file.name
                reqBody["fileType"] = file.type
                reqBody["fileSize"] = file.size
            }
            axios.post(
                process.env.NEXT_PUBLIC_FUNC_URL,
                reqBody,
                {
                    cancelToken: cancelSource.current.token,
                    headers: {
                        'content-type': 'application/json',
                        'secret': process.env.NEXT_PUBLIC_SECRET,
                    },
                }
            ).then((resp) => {
                setFirstReq(true)
                if (file) {
                    cancelSource.current = CancelToken.source()
                    axios.put(
                        resp.data.body.message, file, {
                        cancelToken: cancelSource.current.token,
                        headers: {
                            'Content-Type': file.type
                        }
                    }).then(() => {
                        setDone(true)
                        pushNotify('success', 'Oh Yeah!', 'Request send successfully')
                    }).catch(function (error) {
                        if (error.response) {
                            // console.log(error.response);
                            pushNotify('error', 'Oh Sorry!', 'Failed to upload file. Please try again later')
                        } else if (error.request) {
                            // console.log(error.request);
                            pushNotify('error', 'Failed', 'Something went wrong. Please try again later')
                        } else if (error.message == "canceled") {

                            // console.log('Error', error.message);
                            pushNotify('warning', 'Canceled', 'We got your request but failed to upload file')
                        } else {
                            // console.log(error);
                            pushNotify('error', 'Failed', 'Something went wrong. Please try again later')
                        }
                        setRequested(false)
                        setFirstReq(false)
                        setDone(false)
                    });
                } else {
                    setDone(true)
                    pushNotify('success', 'Oh Yeah!', 'Request send successfully')
                }
            }).catch(function (error) {
                setFirstReq(false)
                if (error.response) {
                    // console.log(error.response);
                    if (error.response.status == 401)
                        pushNotify('error', 'Unauthorized', 'Server is not able to identify you')
                    else if (error.response.status == 400)
                        pushNotify('error', 'Missing Data', 'Please provide required information')
                    else
                        pushNotify('error', 'Failed', 'Something went wrong. Please try again later')

                } else if (error.request) {
                    // console.log(error.request);
                    pushNotify('error', 'Failed', 'Something went wrong. Please try again later')
                } else if (error.message == "canceled") {
                    // console.log('Error', error.message);
                    pushNotify('error', 'Aborted', 'Request has been cancelled')
                } else {
                    // console.log('Error', error.message);
                    pushNotify('error', 'Failed', 'Something went wrong. Please try again later')
                }
                setRequested(false)
                setFirstReq(false)
                setDone(false)
            });
        }
        return () => {
            cancelSource.current.cancel();
        }
    }, [requested])
    const dispatch = useDispatch()
    const toggleContactForm = bindActionCreators(actionCreator.contactFormToggle, dispatch)
    return (
        !requested ? <form className="relative" onSubmit={handleSubmit}>
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
                                onClick={(e) => e.currentTarget.value = null}

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
                            <label htmlFor="raised-button-file" >
                                <span className="px-6 py-4 text-gray-400 border border-solid border-gray-400 rounded-md max-w-xs m-auto dark:text-gray-300 dark:border-gray-300 cursor-pointer" >
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
        </form> :
            <div className=' flex flex-col justify-center align-middle h-[80vh]'>
                <div className='mx-auto'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2" width={100} height={100}>
                        <circle className={done ? "" : "animate-loading"} fill="none" stroke={done ? "#73AF55" : "#6366f1"} strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" style={{ strokeDasharray: 500, strokeDashoffset: 0 }} />
                        {done && <polyline className="animate-check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " style={{ strokeDasharray: 500, strokeDashoffset: -100 }} />}
                    </svg>
                </div>
                <div className='mx-auto mt-5'>
                    <p className={done ? "text-[#73AF55]" : "text-indigo-500"}>{done ? "Thanks! I will get in touch soon" : firstReq ? file ? "Uploading file" : "Thanks! I will get in touch soon" : "Sending"}</p>
                </div>
                <div className='mx-auto mt-48'>
                    {done && <p className="success text-indigo-500 dark:text-white cursor-pointer" onClick={toggleContactForm}>CLOSE</p>}
                    {!done && <p className="success text-indigo-500 dark:text-white cursor-pointer" onClick={() => cancelSource.current.cancel()}>{firstReq ? "Cancel File Upload" : "Cancel Request"}</p>}
                </div>
            </div>
    )
}
export default ContactForm