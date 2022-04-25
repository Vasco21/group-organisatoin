import React from 'react';
import Section from '../../../HOC/Section';
import aboutImage from '../../../assets/img/about.jpg';

const about = () => {
  return (
    <Section id='about'>
      <div className='container pt-2 pb-5'>
        <div className='section-header pt-5 pb-5 text-center'>
          <h3 className='section-title'>
            <span>Our </span>Company
          </h3>
          <h6 className='section-subtitle mr-auto ml-auto'>
          <span>Voices of Youth</span> Creating better path for our youth, 
          bring back young people to light, because  
          Next Generation is our lead to better future and success.
          </h6>
        </div>
        <div className='section-content'>
          <div className='row'>
            <div className='col-md-12 col-lg-6 mb-3'>
              <div className='aboutImage'>
                <img src={aboutImage} alt='about company' />
              </div>
            </div>
            <div className='col-md-12 col-lg-6'>
              <h3 className='about-title'>About us</h3>
              <div className='about-description'>
                <p>
                The Skaeza Organisation Guide has been developed by Vasco Eti and Skaeza, 
                with different lived experiences, and a passion for change. 
                It was originally created through an extensive consultative process,
                which brought together the voices of young people from various parts of Botshabelo...
                </p>
                <p>
                The Skaeza Organisation Guide is a youth-focused resource that aims 
                to support young people to get back to life and focus on the goal and dreams of their journeys.
                </p>
                <p>
                The Skaeza Organisation Guide was Created 2021 by two young people who saw the heavy path of the young people
                in our community, and our will is to bring back young people to light and give to our community.
                </p>
                <button className='btn btn-primary rounded-0'>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default about;