import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { logo_white } from '../../assets/images';

const Navigation = () => {
  return (
    <>
      <div className='navigation_container'>
        <div className='logo'>
          <div className='logo_wrap'>
            <img src={logo_white} alt='logo_name' />
          </div>
        </div>
        <ul className='links'>
          <li className='link_items'>
            <a href='/' className=''>
              Home
            </a>
          </li>
          <li className='link_items'>
            <a href='/' className=''>
              About
            </a>
          </li>
          <li className='link_items'>
            <a href='/' className=''>
              Contact
            </a>
          </li>
          <li className='link_items'>
            <a href='/' className=''>
              services
            </a>
          </li>
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
