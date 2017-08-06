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
            width={1500}
            height={1077}
            className="bio-image"
            alt="picture"
          />
        </div>
        <div className="row bio">
          Matthew Celestre is a self taught artist from Pleasant Hill, California. Born March 30, 1987, he began drawing in early elementary school after looking and copying drawings from countless art books. Since the age of 12, he has suffered from Bipolar Disorder. Matthew copes with his illness by using multiple forms of art, as a therapeutic escape, to express vivid and painstakingly detailed moments of love, beauty, pain and lust.
        </div>
      </div>
    );
  }
}

export default About;
