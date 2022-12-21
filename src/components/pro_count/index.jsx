import React from 'react'
import './style.css'
import { HiUsers } from 'react-icons/hi2'
import { FaProjectDiagram } from 'react-icons/fa'
import { GiTimeDynamite } from 'react-icons/gi'

const Counter = () => {
  return (
    <>
      <div className="counter_container">
        <div className="counters">
          <div className="item wow fadeInUp">
            <div className="icon"> <HiUsers /> </div>
            <div className="item_det">
              <div className="num">15 <span>+</span> </div>
              <div className="num_wor">happy clients</div>
            </div>
          </div>
          <div className="item  wow fadeInUp" data-wow-delay='0.3s'>
            <div className="icon"> <FaProjectDiagram /> </div>
            <div className="item_det">
              <div className="num">40 <span>+</span> </div>
              <div className="num_wor">Projects completed
              </div>
            </div>
          </div>
          <div className="item  wow fadeInUp" data-wow-delay='0.6s'>
            <div className="icon"> <GiTimeDynamite /> </div>
            <div className="item_det">
              <div className="num">1.5 <span>+</span> </div>
              <div className="num_wor">years of experience</div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Counter