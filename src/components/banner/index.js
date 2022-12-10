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
        <div className="abso_skull">
          <img src={skull} alt="" />
        </div>
        <div class='banner_head'>
          <div class='banner_main_headline'>
            <div class='line_first'> Hello! I'm</div>
            <div class='line_second'> Sumit Singh..</div>
          </div>

          <div class='banner_subline'>
            <div class='subline_1'>
              Frontend Web Developer in 'Impulsive web' & Co-Working
              companies.
            </div>
            <div class='subline_2'>
              “Innovative Front End Developer with 1 years experience
              building and maintaining responsive websites in the recruiting
              industry. Proficient in HTML5, CSS3, JavaScript(ES6 +) and
              ReactJs; plus modern libraries and frameworks. Passionate
              about usability and possess working.“
            </div>
          </div>

          <div class='banner_resume'>
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
          <div class='banner_img_wrap'>
            <img src={banner_img} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
