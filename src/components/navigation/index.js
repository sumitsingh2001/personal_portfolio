import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { logo_white } from '../../assets/images';

const Navigation = () => {
  return (
    <>
      <div className='navigation_container'>
        <div className='logo'>
          <div
            className='logo_wrap wow hinge'
            data-wow-duration='4s'
            data-wow-delay='1.2s'
          >
            <img src={logo_white} alt='logo_name' />
          </div>
        </div>
        <ul className='links'>
          <li className='link_items'>
            <Link to='/' className=''>
              Home
            </Link>
          </li>
          <li className='link_items'>
            <Link to='/about' className=''>
              About
            </Link>
          </li>
          <li className='link_items'>
            <Link to='/contact' className=''>
              Contact
            </Link>
          </li>
          {/* <li className='link_items'>
            <Link to='/services' className=''>
              services
            </Link>
          </li> */}
        </ul>
        <div class='navigation_btn'>
          <button class='nav_btn'>
            Hire me <span className='side_arrow'> {'>>'} </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navigation;
