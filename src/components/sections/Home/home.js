import React from "react";
import Section from "../../../HOC/Section";
import bgImage from "../../../assets/img/home_bg.jpg";
import Link from "../../UI/Link/Link";

const home = () => {
  return (
    <Section id="home">
      <div>
        <div
          className="home-content p-5"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="intro container text-center text-light">
            <h2 className="title gradient__bg">
              YOUTH IS A GREATER POWER OF FUTURE!!!
            </h2>
            <h2 className="sub-title mb-4">
              You will shine and you will achieve whatever you want if you keep
              working hard and dreaming more. Don't let anybody destroy your
              peace of mind. You are on the right path to pursue your dreams.
              You have to be ready to do whatever you are interested in. You are
              the hero of your family, society, community and your country.
            </h2>
            <Link target="about" classes="btn btn-primary rounded-0 mr-2">
              Learn More
            </Link>
            <Link target="contact" classes="btn btn-light text-dark rounded-0">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default home;
