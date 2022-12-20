import React from 'react';
import './style.css';

const HeadTitle = ({ title }) => {
  return (
    <>
      <div className='head_title_cont'>
        <div className='head_title wow fadeInUp'>{title}</div>
      </div>
    </>
  );
};

export default HeadTitle;
