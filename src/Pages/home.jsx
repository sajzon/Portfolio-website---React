import React from 'react'
import "./homeView.css"
import Navbar from '../Components/navbar/Navbar'
import Test from '../Test'
import Hero from '../Components/hero/Hero'
import Parallax from '../Components/parallax/Parallax'
import Services from '../Components/services/Services'
const home = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
        <Hero/>
      </section>
      <section id='Services'>
          <Parallax/>
     
      </section>
      <section><Services/></section>
      <section id='Portfolio'></section>
      <section >
       portfolio1
      </section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id='Contact'> contacts</section>
      {/* <Test/> */}
    </div>
  )
}

export default home
