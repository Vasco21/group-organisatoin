import React from "react";
import Section from "../../../HOC/Section";
import aboutImage from "../../../assets/img/Vasco.jpg";
import './about.scss'

const aboutTeam = () => {
  return (
    <Section id="about">
      <div className="container pt-2 pb-5">
        <div className="section-header pt-5 pb-5 text-center">
          <h3 className="section-title">
            <span>Our </span>Team
          </h3>
          <h1 className="section-subtitle mr-auto ml-auto">
            <span>#FORALLMENKIND</span> 
          </h1>
        </div>
        <div className="section-content">
          <div className="row">
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImages">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">Vasco Eddie Eti</h3>
              <div className="about-description">
                <p>
                  
                </p>
                <p>
                  
                </p>
                <p>
                  
                </p>   
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <h3 className="about-title">Skaeza</h3>
              <div className="about-description">
                <p>
                  The Skaeza
                </p>
                <p>
                  The Skaeza Organisation 
                </p>   
              </div>
            </div>
            <div className="col-md-12 col-lg-6 mb-3">
              <div className="aboutImages">
                <img src={aboutImage} alt="about company" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default aboutTeam;
