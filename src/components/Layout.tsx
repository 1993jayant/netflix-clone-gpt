import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='relative container m-auto'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout