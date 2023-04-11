import React from 'react'
import { AboutBanner, Navigation } from '../../components'
import { Link } from 'react-router-dom'
import { FcAbout, FcHome, FcContacts, FcBullish } from 'react-icons/fc'


const About = () => {
  return (
    <div className="about_container">

      <div className='header_container'>
        <div className="constant_links">
          <div className="c-l"><Link to={'/'} className='c-links'> <span> <FcHome /> </span> <p>Home</p></Link></div>
          <div className="c-l"><Link to={'/about'} className='c-links'><span> <FcAbout /> </span> <p>About Me</p></Link></div>
          <div className="c-l"><Link to={'/portfolio'} className='c-links'><span> <FcBullish /> </span> <p>Portfolio</p></Link></div>
          <div className="c-l"><Link to={'/contact'} className='c-links'><span> <FcContacts /> </span> <p>In Touch</p></Link></div>
        </div>
        <div className="info">
          <AboutBanner />
        </div>
      </div>
    </div>
  )
}

export default About