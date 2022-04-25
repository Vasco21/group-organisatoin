import React from 'react';

import Section from '../../../HOC/Section';

const Service = () => {
  return (
    <div className="gradient__bk">
    <Section id='services'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Services
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
            Message
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-briefcase' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Organisation Planning</h5>
                  <p className='service-description'>
                  Message
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-chart-bar' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Product Organisation</h5>
                  <p className='service-description'>
                  Message
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-fist-raised' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Organisation Management</h5>
                  <p className='service-description'>
                  Message
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-paper-plane' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Organisation Research</h5>
                  <p className='service-description'>
                  Message
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='fas fa-gem' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Organisation Financing</h5>
                  <p className='service-description'>
                    Message
                  </p>
                </div>
              </div>
            </div>
            <div className='col-md-6 col-lg-4 mb-3'>
              <div className='service-box d-flex'>
                <div className='service-icon mr-4'>
                  <i className='far fa-life-ring' />
                </div>
                <div className='service-body'>
                  <h5 className='service-title'>Suppport Team</h5>
                  <p className='service-description'>
                    Message
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
    </div>
  );
};

export default Service;