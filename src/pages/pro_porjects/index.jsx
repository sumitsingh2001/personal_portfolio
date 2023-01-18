import React, { useState } from 'react'
import { HeadTitle, SpanTitle } from '../../components'
import { GrClose } from 'react-icons/gr'
import './style.css'
import Slider from 'react-slick'
import {
  Celsior,
  Celsior1,
  Celsior2,
  Celsior3,
  Celsior4,
  Celsior5,
  Celsior6,
  github_project,
  Aurbis,
  Aurbis1,
  Aurbis2,
  Aurbis3,
  Aurbis4,
  Aurbis5,
  Aurbis6,
  Yours1,
  Yours2,
  Yours3,
  Yours4,
  Yours5,
  Yours6,
  Yours7,
  Yours8,
  Yours9,
  Py1,
  Py2,
  Py3,
  // Py4,
  Py5,
  Py6,
  Py7,
} from '../../assets/images'

const Projects = () => {

  const [modal, setModal] = useState(false);
  const [popup, setpopup] = useState([]);

  function modalToggle() {
    setModal(!modal);
  }
  const changeContent = (item) => {
    setpopup([item])
  }

  // if (modal) {
  //   document.body.classList.add('active')
  // } else {
  //   document.body.classList.remove('active')
  // }

  if (modal) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }

  const settings = {
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    dots: true,
    infinite: false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="project_container">
        <div className="project_title">
          <SpanTitle title={'Professional project exp'} />
          <HeadTitle title={'Project I\'ve done so far ..'} />
        </div>

        <div className="project_carousel">
          <div className="slider-wrapper">
            <Slider {...settings}>
              {ProjectData.map((item, idx) => {
                return (
                  <Swiper
                    img={item.img}
                    head={item.head}
                    para={item.para}
                    toggle={function () {
                      setModal(!modal);
                      changeContent(item);
                    }}
                  />
                )
              })}
            </Slider>
          </div>
        </div>
        {
          modal && (
            <div className="project_modal">
              {popup.map((item, idx) => {
                return (
                  <Modal
                    key={idx + 1}
                    video={item.modVid}
                    head={item.modMainHead}
                    para={item.modPara}
                    img1={item.modImg1}
                    img2={item.modImg2}
                    img3={item.modImg3}
                    img4={item.modImg4}
                    img5={item.modImg5}
                    img6={item.modImg6}
                    toggle={() => modalToggle()}
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

export default Projects


const Swiper = ({ img, head, para, toggle }) => {
  return (
    <>
      <div className="project_carousel_card" >
        <div className="pro_img_wrap">
          <img src={img} alt="" onClick={toggle} />
        </div>
        <div className="pro_desc">
          <span>#</span>
          <h3 className="pro_desc_head" onClick={toggle}>  {head} </h3>
          <p className="pro_desc_para">{para} </p>
        </div>
      </div>
    </>
  )
}

const Modal = ({ head, para, img1, img2, img3, img4, img5, img6, toggle, video }) => {
  return (

    <>
      <div className="modal_overlay" >
        <div className="modal_window">
          <div className="window_close_btn" >
            <GrClose fontSize={24} fill='#031987' onClick={toggle} />
          </div>
          <div className="window_objects g1">
            <div className="video_wrap">
              <img src={video} alt="" />
            </div>
          </div>
          <div className="window_objects g2">
            <div className="object_title">
              <h2 className="obj_head">{head}</h2>
              <p className="obj_para">{para} </p>
            </div>
          </div>
          <div className="window_objects g3">
            <div className="object_title">
              <h2 className="obj_head">{head}</h2>
              <p className="obj_para">{para} </p>
            </div>
          </div>
          <div className="window_objects g4">
            <div className="video_wrap">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="window_objects g5">
            <div className="video_wrap">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="window_objects g6">
            <div className="video_wrap">
              <img src={img3} alt="" />
            </div>
          </div>
          <div className="window_objects g7">
            <div className="video_wrap">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className="window_objects g8">
            <div className="object_title">
              <h2 className="obj_head">{head}</h2>
              <p className="obj_para">{para} </p>
            </div>
          </div>
          <div className="window_objects g9">
            <div className="video_wrap">
              <img src={img5} alt="" />
            </div>
          </div>
          <div className="window_objects g10">
            <div className="video_wrap">
              <img src={img6} alt="" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

const ProjectData = [
  {

    img: Celsior4,
    head: 'Givest - Non Profit PSD Template',
    para: 'Chairty / Fund Rising / Non Profit',

    modVid: Celsior4,
    modImg1: Celsior4,
    modImg2: Celsior,
    modImg3: Celsior1,
    modImg4: Celsior2,
    modImg5: Celsior3,
    modImg6: Celsior5,
    modMainHead: 'Lorem ipsum dolor sit amet ...',
    modPara: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum cupiditate totam vero illum ipsa eius minima! Illo quibusdam nulla repudiandae non aut harum tempore, est sint ut maxime velit perspiciatis dignissimos et sequi possimus? Vitae sint velit maxime tempora impedit repellat saepe quibusdam dolores beatae voluptatibus, eius ex molestiae sunt quisquam nam quod modi quos vero doloremque ab veniam earum totam soluta. Expedita exercitationem distinctio amet labore illo ipsam, sunt doloremque cum voluptates officiis modi animi perspiciatis fugiat eligendi molestias consequatur officia corporis ea cupiditate quae soluta? Corrupti saepe quis ut optio a tempora nisi iusto maxime sit nobis.',
  },
  {
    img: Aurbis,
    head: 'Givest - Non Profit PSD Template',
    para: 'Chairty / Fund Rising / Non Profit',
    modVid: Aurbis,
    modImg1: Aurbis3,
    modImg2: Aurbis2,
    modImg3: Aurbis6,
    modImg4: Aurbis1,
    modImg5: Aurbis4,
    modImg6: Aurbis5,
    modMainHead: 'Lorem ipsum dolor sit amet ...',
    modPara: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum cupiditate totam vero illum ipsa eius minima! Illo quibusdam nulla repudiandae non aut harum tempore, est sint ut maxime velit perspiciatis dignissimos et sequi possimus? Vitae sint velit maxime tempora impedit repellat saepe quibusdam dolores beatae voluptatibus, eius ex molestiae sunt quisquam nam quod modi quos vero doloremque ab veniam earum totam soluta. Expedita exercitationem distinctio amet labore illo ipsam, sunt doloremque cum voluptates officiis modi animi perspiciatis fugiat eligendi molestias consequatur officia corporis ea cupiditate quae soluta? Corrupti saepe quis ut optio a tempora nisi iusto maxime sit nobis.',
  },
  {
    img: Yours1,
    head: 'Givest - Non Profit PSD Template',
    para: 'Chairty / Fund Rising / Non Profit',
    modVid: Yours4,
    modImg1: Yours2,
    modImg2: Yours3,
    modImg3: Yours5,
    modImg4: Yours6,
    modImg5: Yours7,
    modImg6: Yours8,
    modMainHead: 'Lorem ipsum dolor sit amet ...',
    modPara: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum cupiditate totam vero illum ipsa eius minima! Illo quibusdam nulla repudiandae non aut harum tempore, est sint ut maxime velit perspiciatis dignissimos et sequi possimus? Vitae sint velit maxime tempora impedit repellat saepe quibusdam dolores beatae voluptatibus, eius ex molestiae sunt quisquam nam quod modi quos vero doloremque ab veniam earum totam soluta. Expedita exercitationem distinctio amet labore illo ipsam, sunt doloremque cum voluptates officiis modi animi perspiciatis fugiat eligendi molestias consequatur officia corporis ea cupiditate quae soluta? Corrupti saepe quis ut optio a tempora nisi iusto maxime sit nobis.',
  },
  {
    img: Py1,
    head: 'Givest - Non Profit PSD Template',
    para: 'Chairty / Fund Rising / Non Profit',
    modVid: Py1,
    modImg1: Py5,
    modImg2: Py2,
    modImg3: Py5,
    modImg4: Py6,
    modImg5: Py7,
    modImg6: Py1,
    modMainHead: 'Lorem ipsum dolor sit amet ...',
    modPara: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat rerum cupiditate totam vero illum ipsa eius minima! Illo quibusdam nulla repudiandae non aut harum tempore, est sint ut maxime velit perspiciatis dignissimos et sequi possimus? Vitae sint velit maxime tempora impedit repellat saepe quibusdam dolores beatae voluptatibus, eius ex molestiae sunt quisquam nam quod modi quos vero doloremque ab veniam earum totam soluta. Expedita exercitationem distinctio amet labore illo ipsam, sunt doloremque cum voluptates officiis modi animi perspiciatis fugiat eligendi molestias consequatur officia corporis ea cupiditate quae soluta? Corrupti saepe quis ut optio a tempora nisi iusto maxime sit nobis.',
  },
]


