import React from 'react'

import Button from '../components/common/Button'
import Footer from '../components/layouts/Footer'

import RobotAbout from '../assets/img/robot-about.png'
import RobotPlan from '../assets/img/robot-plan.png'
import RobotDesign from '../assets/img/robot-design.png'
import RobotCode from '../assets/img/robot-coding.png'
import RobotDeploy from '../assets/img/robot-deploy-2.png'


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

      <section className='skills-summary'>
        <article>
          <div className='skills-circle'>
            <img src={RobotPlan} alt="Robot Plan"/>
          </div>
          <p>Plan</p>
        </article>

        <article>
          <div className='skills-circle'>
            <img src={RobotDesign} alt="Robot Plan"/>
          </div>
          <p>Design</p>
        </article>

        <article>
          <div className='skills-circle'>
            <img src={RobotCode} alt="Robot Plan"/>
          </div>
          <p>Code</p>
        </article>

        <article>
          <div className='skills-circle'>
            <img src={RobotDeploy} alt="Robot Plan" className='robot-deploy'/>
          </div>
          <p>Deploy</p>
        </article>
      </section>

      <Footer/>
    </>
  )
}

export default Home
