import React, { Fragment } from 'react';

import Home from './Home/home';
import About from './About/About';
import Service from './Service/Service';
import Facts from './Facts/facts';
import Blog from './Blog/Blog';
import Contact from './Contact/contact';
import MapMarker from './MapMarker/MapMarker';

const sections = () => {
  return (
    <Fragment>
      <Home />
      <About />
      <Service />
      <Blog />
      <Facts />
      <Contact />
      <MapMarker />
    </Fragment>
  );
};

export default sections;