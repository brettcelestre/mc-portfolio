import React, { Component } from 'react';
import './About.css';

import bioImage from '../../assets/img/bio/painting-room.jpg';

class About extends Component {

  render() {
    return (
      <div className="container">
        <div className="row">
          <img
            src={bioImage}
            width={750}
            height={538}
            className="bio-image"
            alt="picture"
          />
        </div>
        <div className="row bio">
          Matthew Celestre is a self taught artist from Pleasant Hill, California.
        </div>
      </div>
    );
  }
}

export default About;
