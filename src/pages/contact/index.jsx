import React from 'react'
import { GetInTouch, Navigation } from '../../components'
import { FcAbout, FcHome, FcContacts, FcBullish } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className="contact_container">
      <div className='header_container'><div className="constant_links">
        <div className="c-l"><Link to={'/'} className='c-links'> <span> <FcHome /> </span> <p>Home</p></Link></div>
        <div className="c-l"><Link to={'/about'} className='c-links'><span> <FcAbout /> </span> <p>About Me</p></Link></div>
        <div className="c-l"><Link to={'/portfolio'} className='c-links'><span> <FcBullish /> </span> <p>Portfolio</p></Link></div>
        <div className="c-l"><Link to={'/contact'} className='c-links'><span> <FcContacts /> </span> <p>In Touch</p></Link></div>
      </div>
      </div>
      <GetInTouch />
    </div>
  )
}

export default Contact