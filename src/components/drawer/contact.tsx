import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../state'
import { RootState } from '../../state/reducers'
import ContactForm from '../helpers/forms/contact'
function ContactDrawer() {


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
                    <ContactForm />
                </div>
            </div>
        </div>

    )
}
export default ContactDrawer