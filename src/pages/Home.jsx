import React from 'react'
import Button from '../components/common/button'

function Home () {
  return (
    <div className='banner'>
      <div className='banner-content'>
        <h1>Hi, I'm Angela</h1>
        <h2>web developer</h2>
        <Button text="Contact me!" class="btn-home"/>
      </div>
    </div>
  )
}

export default Home
