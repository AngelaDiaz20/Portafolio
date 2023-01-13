import React from 'react'
import Button from '../components/common/button'

import RobotAbout from '../assets/img/robot-about.png'

function Home () {
  return (
    <>
      <section className='banner'>
        <div className='banner-content'>
          <h1>Hi, I'm Angela</h1>
          <h2>web developer</h2>
          <Button text="Contact me!" class="btn-home"/>
        </div>
      </section>

      <section className='about'>
        <div className='container'>
          <h1>About me</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, placeat dignissimos esse quidem ad earum voluptatibus aut officia aperiam sapiente voluptatem ipsa at aliquam fugiat! Repellat enim numquam accusantium sit?
          Eaque dignissimos consequuntur animi architecto autem nam quisquam assumenda provident incidunt possimus, molestiae, ea optio molestias rem velit ullam, tenetur quaerat. Ratione dignissimos nihil ipsam odio repellat, facere laborum. Consequuntur!</p>
        </div>

        <img src={RobotAbout} alt="Robot"/>
        <div className='circle'></div>
      </section>
    </>
  )
}

export default Home
