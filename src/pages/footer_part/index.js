import React from 'react';
import { HeadTitle, SpanTitle } from '../../components';
import './style.css';
import { FiPhoneCall } from 'react-icons/fi';
import { IoIosMailUnread } from 'react-icons/io';
import { ImFacebook } from 'react-icons/im';
import { BsLinkedin } from 'react-icons/bs';
import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <div className='footer_container'>
        <span className='footer_title'>
          <SpanTitle title={'Ping me here'} />
        </span>
        {/* <h1 className="footer_headline">
          Click here to update me
        </h1> */}
        <HeadTitle title={'Click here to update me'} />

        <div className='footer_input_area'>
          <label className='footer_label' htmlFor='email'>
            <input
              className='footer_email wow fadeInLeftBig'
              type='email'
              placeholder='demo@example.com'
            />
          </label>
          <button className='footer_e_btn wow fadeInRightBig'>
            Click Here
          </button>
        </div>

        <div className='footer_details'>
          <div className='f_num wow fadeInUp'>
            <span className='f_num_img' data-wow-delay='5s'>
              <FiPhoneCall />{' '}
            </span>
            +91 8928054***
          </div>
          <div className='f_email wow fadeInUp'>
            <span className='f_email_img' data-wow-delay='5s'>
              <IoIosMailUnread />{' '}
            </span>
            demo@example.com
          </div>
          <div className='f_media_links'>
            <span className='f_media_img wow fadeInUp'>
              {' '}
              <ImFacebook />{' '}
            </span>
            <span className='f_media_img wow fadeInUp'>
              <AiFillGithub />
            </span>
            <span className='f_media_img wow fadeInUp'>
              <BsLinkedin />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
