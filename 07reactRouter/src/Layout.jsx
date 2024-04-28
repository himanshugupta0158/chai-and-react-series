import React from 'react'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'


function Layout() {
  return (
    <>
    <Header />
    {/* putting dynamic content/component here by using outlet from react router dom */}
    {/* this outlet provide us to do nesting  */}
    <Outlet />
    <Footer /> 
    </>
  )
}

export default Layout