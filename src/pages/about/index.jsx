import React from 'react'
import { AboutBanner, Navigation } from '../../components'

const About = () => {
  return (
    <div className="about_container">
      <div className='header_container'>
        <div className="info">
          <Navigation />
          <AboutBanner />
        </div>
      </div>
    </div>
  )
}

export default About