import React from 'react'
import './style.css'
import impulsive from '../../assets/images/impulsiveWeb.png';
import redbaton from '../../assets/images/redbaton.svg';
import SpanTitle from '../title';
import HeadTitle from '../head_title';

const Company = () => {
  return (
    <>
      <div className="company_container">

        <div className="comp_details">
          <div className="comp_head">
            <SpanTitle title={'Favorite Clients'} />
            <HeadTitle title={'Worked With trusted companies'} />
          </div>
          <div className="comp_imgs">
            <div className="comp_i_cards wow fadeInUp">
              <div className="img_wrap">
                <img className='im' src={impulsive} alt="" />
              </div>
            </div>
            <div className="comp_i_cards wow fadeInUp" data-wow-delay='0.3s'>
              <div className="img_wrap">
                <img src={redbaton} alt="" />
              </div>
            </div>
            <div className="comp_i_cards wow fadeInUp" data-wow-delay='0.6s'>
              <div className="img_wrap">
                <img className='im' src={impulsive} alt="" />
              </div>
            </div>
            <div className="comp_i_cards wow fadeInUp" data-wow-delay='0.9s'>
              <div className="img_wrap">
                <img className='im' src={impulsive} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Company