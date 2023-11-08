import React from 'react'
import"./navbar.css"
import { motion } from 'framer-motion'
import Sidebar from '../sidebar/Sidebar'


const Navbar = () => {
  return (
    <div className="navbar">
       {/* side bar */}
       <Sidebar/>
        <div className="wrapper">
           <motion.span
            initial={{ opacity:0 ,scale:0.5}} 
           animate={{ opacity:1 ,scale:1}}
            transition={{ duration:0.5 }} 
            className='spa1'>Sajith Sandakelum</motion.span>
       
        <div className="social">
            <a href="#"><img className='img1' src="/facebook.png" alt="" /></a>
            <a href="#"><img className='img1' src="/instagram.png" alt="" /></a>
            <a href="#"><img className='img1' src="/youtube.png" alt="" /></a>
            <a href="#"><img className='img1' src="/git.png" alt="" /></a>
            <a href="#"><img className='img1' src="/linkedin.png" alt="" /></a>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
