import React, { useEffect, useState } from 'react';
import './index.scss'
import { banner_img } from '../../assets/images';
import { Link } from 'react-router-dom';
import { TfiAlert } from 'react-icons/tfi'

const BannerMain = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const wrapper = document.querySelector('.main_banner_wrapper');

    function mousemove(e) {
      const dot1 = document.querySelector('.dot1');

      const target = e.target;
      dot1.style.cssText = 'left:' + e.clientX + 'px; top: ' + e.clientY + 'px;';

      if (target.classList.contains('t_link') || target.classList.contains('i_links') || target.classList.contains('name')) {
        dot1.classList.add('active')
      } else {
        dot1.classList.remove('active')
      }
    }

    if (window.innerWidth >= 800) {
      wrapper.addEventListener('mousemove', mousemove);

      return () => {
        wrapper.removeEventListener('mousemove', mousemove);
      }
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000);

    return () => clearTimeout(timer)
  }, []);


  return (
    <>
      <div className="main_banner_wrapper" >
        {isVisible ? (
          <div className='warning'>  Work In progress right now <TfiAlert color='red' fontSize={32} /></div>
        ) : null}
        <div className="dot1"></div>
        <div className="container">
          <div className="title_area">
            <div class='main_img'>
              <img src={banner_img} alt='banner' />
            </div>
          </div>
          <div className="section_area">
            <div className="section_items">
              <div className="title">HI There ! I'M</div>
              <div className="name"> Sumit Singh</div>
              <div className="dev">Developer</div>
            </div>
            <Link to={'/about'}>
              <div className="section_items">
                <div className="i_links">
                  <div className="link1">
                    <div className='t_link'>About</div>
                    <div className='t_link'>About</div>
                  </div>

                  <div className="link2">
                    <div className='t_link'>ME</div>
                    <div className='t_link'>ME</div>
                  </div>

                </div>
              </div>
            </Link>
            <Link to={'/portfolio'}>
              <div className="section_items">
                <div className="i_links">
                  <div className="link1">
                    <div className='t_link'>My</div>
                    <div className='t_link'>My</div>
                  </div>

                  <div className="link2">
                    <div className='t_link'>Portfolio</div>
                    <div className='t_link'>Portfolio</div>
                  </div>

                </div>
              </div>
            </Link>
            <Link to={'/contact'}>
              <div className="section_items">
                <div className="i_links">
                  <div className="link1">
                    <div className='t_link'>Get</div>
                    <div className='t_link'>Get</div>
                  </div>

                  <div className="link2">
                    <div className='t_link'>in Touch</div>
                    <div className='t_link'>in Touch</div>
                  </div>

                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

    </>
  )
}

export default BannerMain

