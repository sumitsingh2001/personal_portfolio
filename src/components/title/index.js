import React from 'react';
import './style.css';

const SpanTitle = ({ title }) => {
  return (
    <>
      <div className='span_title_cont wow fadeInUp'>
        <div className='span_title'>
          {' '}
          <span className='title_line'>| |</span> {title}
        </div>
      </div>
    </>
  );
};

export default SpanTitle;
