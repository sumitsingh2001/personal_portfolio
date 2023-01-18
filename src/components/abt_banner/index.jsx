import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { git_dots, git_org } from '../../assets/images';
import SpanTitle from '../title';
import './style.css';
// import { RxCross1 } from 'react-icons/rx'
import { GiCrossedBones } from 'react-icons/gi'


const AboutBanner = () => {

  const [modalgt, setmodalgt] = useState(false);

  function gt_toggle() {
    setmodalgt(!modalgt)
  }

  const [popup, setpopup] = useState([]);

  const changeContent = (item) => {
    setpopup([item])
  }

  if (modalgt) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }

  return (
    <>
      <div className="about_banner_container">
        <div className="abt_header">
          <p>About Me</p>
          <div className="abt_links">
            <Link to='/'> <span>Home</span></Link> <span>||</span>
            <Link to='/about'> <span>About</span></Link>
          </div>
        </div>

        <div className="abt_desc">
          <SpanTitle title='POV: Let`s start with my DEC - 2020 git ..' />
          <div className="abt_git">
            {GT_img.map((item, idx) => {
              return (
                <Content
                  img={item.img}
                  key={idx}
                  desc={item.ig_des}
                  forFun={function (e) {
                    gt_toggle()
                    changeContent(item)
                  }}
                />
              )
            })}
          </div>
        </div>

        {
          modalgt && (
            <div className="git_img_modal">
              {popup.map((item, idx) => {
                return (
                  <POPUP
                    key={idx}
                    img={item.img}
                    toggle={() => gt_toggle()}
                  />
                )
              })}
            </div>
          )
        }
      </div>
    </>
  )
}

export default AboutBanner

const Content = ({ img, forFun, desc }) => {
  return (
    <>
      <span className="c_sp">
        <div className="abt_gt_wrap" onClick={forFun}>
          <img src={img} alt="" />
        </div>
        <div className="ig_span"><p>{desc}</p></div>
      </span>

    </>
  )
}

const POPUP = ({ img, toggle }) => {
  return (
    <>
      <div className="git_ig_sec">
        <div className="gt_cross"><GiCrossedBones onClick={toggle} /></div>
        <div className="mg_wrap">
          <img src={img} alt="" />
        </div>
      </div>
    </>
  )

}

const GT_img = [
  {
    img: git_dots,
    ig_des: 'This is my current GIT information that you`r watching right now, Last updated DEC/2020 '
  },
  {
    img: git_org,
    ig_des: ' This is something that you can see, Organiztions I`ve worked for '

  }
]