import React from 'react';
import { Banner, Navigation } from '../../components';
import './style.css';

const Header = () => {
  return (
    <>
      <div className='header_container'>
        <Navigation />
        <Banner />
      </div>
    </>
  );
};

export default Header;
