
import React, { } from 'react';
import { Counter, Company, SpanTitle } from '../../components'
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
        <div className="tag-line">
          <p className='span_text wow fadeInUp'>As.. a frontend developer, my passion lies in creating visually stunning and highly functional web experiences. With a deep understanding of
            <i> HTML5, CSS3, JavaScript (ES6+), React.js, Bootstrap, Scss and many other development tools </i> ,
            I am dedicated to crafting websites and applications that are
            user-friendly, intuitive, and optimized for performance.
            I thrive in collaborative environments, working closely with designers,
            developers, and stakeholders to bring their visions to life.
            From responsive design to cross-browser compatibility,
            I have the skills and knowledge to tackle any challenge and deliver
            exceptional results. My goal is to create innovative and engaging web
            experiences that not only meet, but exceed, the expectations of users
            and stakeholders alike.</p>

        </div>
        <Counter />
      </div>
    </>
  )
}

export default Home