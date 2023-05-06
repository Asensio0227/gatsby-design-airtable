import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Sidebar from './Sidebar'
import { useGlobalContext } from '../context/context'

const Layout = ({ children }) => {
  const {isSidebarOpen} = useGlobalContext();

  return (
    <>
      <Navbar />
      {
        isSidebarOpen && (
      <Sidebar/>
        )
      }
      {children}
      <Footer/>
    </>
  )
}

export default Layout
