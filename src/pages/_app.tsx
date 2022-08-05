import '../styles/globals.css'
import { Provider, useDispatch, useSelector } from 'react-redux';
import type { AppProps } from 'next/app'
import store from '../state/store';
import { bindActionCreators } from 'redux';
import { actionCreator } from '../state';
import { RootState } from '../state/reducers';
import React, { useState } from 'react';
import TopBarProgress from "react-topbar-progress-indicator"
import { Router } from 'next/router';
import ContactDrawer from '../components/drawer/contact';

export const Site = ({ children }) => {
  const isDark = useSelector((state: RootState) => state.IsDark)
  const dispatch = useDispatch()
  const toggleTheme = bindActionCreators(actionCreator.themeToggle, dispatch)
  React.useEffect(() => {
    if (localStorage.getItem('darkMode') === 'OFF' && isDark == true) {
      toggleTheme()
    }
    isDark && document.querySelector("body").classList.add("dark", "bg-gray-900")
    !isDark && document.querySelector("body").classList.remove("dark", "bg-gray-900")
  })

  const [progress, setProgress] = useState(false)

  Router.events.on("routeChangeStart", () => {
    setProgress(true)
    //function will fired when route change started
  })

  Router.events.on("routeChangeComplete", () => {
    setProgress(false)
    //function will fired when route change ended
  })
  TopBarProgress.config({
    barColors: {
      "0": isDark ? "#fff" : "rgb(67 56 202)"
    },
    shadowBlur: 5
  });

  return (
    <>
      {progress && <TopBarProgress />}
      {children}
      <ContactDrawer />
    </>
  )

}
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <Site>
        <Component {...pageProps} />
      </Site>
    </Provider>)
}

export default MyApp


