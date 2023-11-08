import React from 'react'
import "./homeView.css"
import Navbar from '../Components/navbar/Navbar'
import Test from '../Test'
const home = () => {
  return (
    <div>
      <section>
        <Navbar/>
      </section>
      <section>parallax</section>
      <section>services</section>
      <section>parallax</section>
      <section>portfolio1</section>
      <section>portfolio2</section>
      <section>portfolio3</section>
      <section>contact</section>
      {/* <Test/> */}
    </div>
  )
}

export default home
