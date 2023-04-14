import React from 'react'
import './style.scss'
import { AiFillTwitterCircle, AiFillGithub, AiFillLinkedin, AiFillFacebook, AiFillInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { IoLogoWhatsapp } from 'react-icons/io'

const GetInTouch = () => {
  return (
    <div className="get_in_touch">
      <div className="contact_links">
        <a href="https://www.linkedin.com/in/sumitsingh-dev/" target='blank' className="link"><AiFillLinkedin /></a>
        <a href="https://github.com/sumitsingh2001" target='blank' className="link"><AiFillGithub /></a>
        <a href="https://twitter.com/Thakur_sumit_vi" target='blank' className="link"><AiFillTwitterCircle /></a>
        <a href="https://www.facebook.com/ThakurSumitVishen" target='blank' className="link"><AiFillFacebook /></a>
        <a href="https://www.instagram.com/thakur_sumit_vishen/" target='blank' className="link"><AiFillInstagram /></a>
        <a href="https://wa.me/+918928054617" target='blank' className="link"><IoLogoWhatsapp /></a>
      </div>
    </div>
  )
}

export default GetInTouch