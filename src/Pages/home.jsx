import React from 'react'
import "./homeView.css"
import Navbar from '../Components/navbar/Navbar'
import Test from '../Test'
const home = () => {
  return (
    <div>
      <section id='Homepage'>
        <Navbar/>
      </section>
      <section id='Services'>parallax</section>
      <section>services</section>
      <section id='Portfolio'>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section id='Contact'>contact</section>
      {/* <Test/> */}
    </div>
  )
}

export default home
