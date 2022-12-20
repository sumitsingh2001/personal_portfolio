import React from 'react';
import './style.css';
import { BsDownload } from 'react-icons/bs';
import { banner_img, fox, skull, sumit_1 } from '../../assets/images';
import Slider from 'react-slick';

const Banner = () => {
  // const settings = {
  //   className: "center",
  //   centerMode: true,
  //   infinite: true,
  //   slidesToShow: 3,
  //   speed: 500,
  //   autoplay: true,
  //   autoplaySpeed: 2500,

  // };

  return (
    <>
      <div className='banner_container'>
        <div className='abso_skull wow'>
          <img src={skull} alt='' />
        </div>
        <div class='banner_head'>
          <div class='banner_main_headline'>
            <div class='line_first  wow fadeInUp'> Hello! I'm</div>
            <div class='line_second  wow fadeInUp'> Sumit Singh..</div>
          </div>

          <div class='banner_subline'>
            <div class='subline_1 wow fadeInUp' data-wow-delay='0.3s'>
              Frontend Web Developer in 'Impulsive web' & Co-Working companies.
            </div>
            <div class='subline_2 wow fadeInUp' data-wow-delay='0.6s'>
              “Innovative Front End Developer with 1 years experience building
              and maintaining responsive websites in the recruiting industry.
              Proficient in HTML5, CSS3, JavaScript(ES6 +) and ReactJs; plus
              modern libraries and frameworks. Passionate about usability and
              possess working.“
            </div>
          </div>

          <div class='banner_resume wow fadeInUp' data-wow-delay='0.8s'>
            <button class='resume_btn'>
              Get resume{' '}
              <span class='download_icon'>
                <BsDownload />
              </span>
            </button>
          </div>

          {/* <div className="personal_img_carousel">
            <div className="slider-wrapper">
              <Slider {...settings}>
                <div className="slides">
                  <img src={sumit_1} alt="" />
                </div>
                <div className="slides">
                  <img src={sumit_1} alt="" />
                </div>
                <div className="slides">
                  <img src={sumit_1} alt="" />
                </div>
                <div className="slides">
                  <img src={sumit_1} alt="" />
                </div>
                <div className="slides">
                  <img src={sumit_1} alt="" />
                </div>

              </Slider>
            </div>
          </div> */}
        </div>
        <div class='banner_img'>
          <div class='banner_img_wrap wow fadeInRight' data-wow-delay='0.9s'>
            <img src={banner_img} alt='banner' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
