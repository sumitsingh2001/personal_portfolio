import React, { useState } from 'react'
import {
  git_dots, git_org, recent_git, git2023,
} from '../../assets/images';
import SpanTitle from '../title';
import './style.scss';
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
          <p>Portfolio</p>
        </div>

        <div className="abt_desc">
          <SpanTitle title='All my recent activities..' />
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
        <div className="abt_gt_wrap" title='click to open' onClick={forFun}>
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
    ig_des: "GIT Made Easy: Get the Last Update of December 2022."
  },
  {
    img: git_org,
    ig_des: "Experienced professional with a successful track record working for a range of organizations."
  },
  {
    img: recent_git,
    ig_des: "Collaborative Coding Made Easy: A Git Activity for Teams"
  },
  {
    img: git2023,
    ig_des: 'The current updates of 2023. Last updated on April-12.'
  }
]