import React from 'react';
import { HeadTitle, SpanTitle } from '../../components';
import { ServiceData } from '../../data/pageData';
import './style.css';

const Services = () => {
  return (
    <>
      <div className='services_container'>
        <div className='services_titles'>
          <SpanTitle title={'My services'} />
          <HeadTitle title={`Service Provide For My Clients.`} />
        </div>

        <div className='services_details'>
          {ServiceData.map((item, idx) => {
            return (
              <>
                <div className='service_items ' key={idx}>
                  <div className='service_card_icon wow swing'>{item.icon}</div>
                  <div className='service_item_details'>
                    <div className='ser_item_head wow fadeInUp'>
                      {item.head}
                    </div>
                    <div
                      className='ser_item_sub wow fadeInUp'
                      data-wow-delay='0.2s'
                    >
                      {item.subHead}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
