import React from 'react';
import { Banner, Navigation } from '../../components';
import './style.css';
import video from '../../assets/video/solar.mp4';

const Header = () => {
  return (
    <>
      <div className='header_container'>
        {/* <div className="video_wrap">
          <video src={video} autoPlay muted loop></video>
        </div> */}
        <div className="info">
          <Navigation />
          <Banner />
        </div>
      </div>
    </>
  );
};

export default Header;
