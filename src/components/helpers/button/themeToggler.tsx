import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreator } from '../../../state'
import { RootState } from '../../../state/reducers'
import { BsMoonStarsFill, BsFillSunFill } from 'react-icons/bs'

function ThemeToggler() {
    const isDark = useSelector((state: RootState) => state.IsDark)
    const dispatch = useDispatch()
    const toggleTheme = bindActionCreators(actionCreator.themeToggle, dispatch)
    return (
        <span >
            <span className='px-5 py-0 bg-gray-300 dark:bg-gray-700 rounded-l-xl rounded-r-xl ' onClick={toggleTheme}></span>
            <span className='rounded-2xl bg-indigo-500 dark:bg-gray-600 p-2 absolute -translate-x-12 -translate-y-1 dark:-translate-x-6 transition-transform' onClick={toggleTheme}>{isDark ? <BsMoonStarsFill fill='white' /> : <BsFillSunFill fill='white ' />}</span>
        </span>
    )
}

export default ThemeToggler