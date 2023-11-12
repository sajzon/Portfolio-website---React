import React from 'react'
import "./services.css"
import { motion } from 'framer-motion'

const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        },
    },
};


const Services = () => {
  return (
    <motion.div className='services' variants={variants} initial="initial" animate="animate">
        <motion.div className="textContainer"variants={variants} >
            <p className='para1'>
                I focus on helping your brand grow
                <br/> and move forward.
            </p>
            <hr className='line'/>
        </motion.div>
        <motion.div className='titleContainer'variants={variants} >
        <div className="title">
            <img className='img' src="/people.webp" alt="" />
            <h1 className='topicA'>
                <b>Unique</b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1 className='topicA'>
                <b>For Your</b> Business.
            </h1>
            <button className='btn1'>WHAT WE DO?</button>
        </div>
        </motion.div>

       

        <motion.div className='listContainer' variants={variants}>
            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Omnis nihil est, magnam debitis voluptatum eos ullam,
                      nesciunt nemo unde sed quo ab saepe.
                       Porro ipsam ipsum aspernatur corporis 
                       explicabo accusantium!</p>
                       <button className='btn2'>Go</button>
            </div>

            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Omnis nihil est, magnam debitis voluptatum eos ullam,
                      nesciunt nemo unde sed quo ab saepe.
                       Porro ipsam ipsum aspernatur corporis 
                       explicabo accusantium!</p>
                       <button className='btn2'>Go</button>
            </div>

            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Omnis nihil est, magnam debitis voluptatum eos ullam,
                      nesciunt nemo unde sed quo ab saepe.
                       Porro ipsam ipsum aspernatur corporis 
                       explicabo accusantium!</p>
                       <button className='btn2'>Go</button>
            </div>

            <div className="box">
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Omnis nihil est, magnam debitis voluptatum eos ullam,
                      nesciunt nemo unde sed quo ab saepe.
                       Porro ipsam ipsum aspernatur corporis 
                       explicabo accusantium!</p>
                       <button className='btn2'>Go</button>
            </div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
