import React, { useRef } from 'react'
import "./portfolio.css"
import { motion,useScroll,useSpring, useTransform } from 'framer-motion';


const items=[
    {
        id:1,
        title:"React Commerce",
        img:"/aa.jpeg",
        
        desc:"Lorem god is the wold heritage man .some time u can think what i do",
    },
    {
        id:2,
        title:"Next.js Commerce",
        img:"/bb.jpeg",
        desc:"Lorem god is the wold heritage man .some time u can think what i do",
    },
    {
        id:3,
        title:"vanila js",
        img:"/cc.jpeg",
        desc:"Lorem god is the wold heritage man .some time u can think what i do",
    },
    {
        id:4,
        title:"Hottel",
        img:"/car.jpeg",
        desc:"Lorem god is the wold heritage man .some time u can think what i do",
    },
];

const Single =({item})=>{
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target:ref ,
       offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],["0%","-300%"]);


    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrapper">
                     {/* <div className="imageContainer">
                     
                </div>  */}
                <img className='imgR' src={item.img} alt="" />
                 
                <motion.div className="textContainer" style={{ y }} >
               
           <h2 className='topic'>{item.title} </h2> 
           <p className='topicPara'>{item.desc}</p>
           <button className='topicBtn'>See Demo</button>
           </motion.div>
           </div>
           </div>
        </section>
    )
}

const Portfolio = () => {

    const ref = useRef()

   const {scrollYProgress} = useScroll({target:ref ,offset:["end end","start start"]});

   const scaleX = useSpring(scrollYProgress,{
         stiffness:100,
         damping: 30,
   });

  return (
    <div className='portfolio' ref = {ref}>
        
        <div className="progress">
            <h1 className='main'>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>

      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default Portfolio
