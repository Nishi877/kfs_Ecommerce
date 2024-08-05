import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

import Footer1 from '../Footer/Footer'

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
             <Footer1/>
        </>
    )
}

export default Layout
