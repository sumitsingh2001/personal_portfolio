import React from 'react'
import { Link } from 'react-router-dom'
import { error } from '../../assets/images'
import './style.css'

const Nothing = () => {
  return (
    <>
      <div className="nothing_container">
        <div className="left_side">
          <h1 className='nothing_head'>Sorry!</h1>
          <p className="nothing_para">This Page is Not Found.</p>
          <div className="nothing_content">Lorem Ipsum is simply dummy text of the printing and dard dummy text ever since the 1500 when an uniknown specimen book has not only five.</div>

          <button className="return_home"><Link className='ret_btn_link' to={'/'}>back to home</Link></button>
        </div>
        <div className="right_side">
          <img src={error} alt="" />
        </div>
      </div>
    </>
  )
}

export default Nothing