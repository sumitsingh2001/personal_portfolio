
import React, { } from 'react';
import { Counter, Company } from '../../components'
import { Header, Services, Skills, Projects, Footer } from '../../pages'
import { Link } from 'react-router-dom';
import { FcAbout, FcHome, FcContacts, FcBullish } from 'react-icons/fc'


const Home = () => {
  return (
    <>
      <div className='app_container'>
        <div className="constant_links">
          <div className="c-l"><Link to={'/'} className='c-links'> <span> <FcHome /> </span> <p>Home</p></Link></div>
          <div className="c-l"><Link to={'/about'} className='c-links'><span> <FcAbout /> </span> <p>About Me</p></Link></div>
          <div className="c-l"><Link to={'/portfolio'} className='c-links'><span> <FcBullish /> </span> <p>Portfolio</p></Link></div>
          <div className="c-l"><Link to={'/contact'} className='c-links'><span> <FcContacts /> </span> <p>In Touch</p></Link></div>
        </div>
        <Services />
        <Company />
        {/* <Skills /> */}
        {/* <Projects /> */}
        <Counter />
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Home