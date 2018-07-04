
import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import ReactSVG from 'react-svg';
import './About.css';

import bioImage from '../../assets/img/bio/painting-room.jpg';
import bioImageMobile from '../../assets/img/bio/painting-garage-small.jpg';
import instaLogo from '../../assets/img/logo-instagram.png';

class About extends Component {
  
  componentWillMount() {
    this.updateBioPicture(window.innerWidth);
  }

  constructor(props) {
    super(props)
    this.state = {
      bioImages: {
        desktop: {
          src: bioImage,
          width: 750,
          height: 538,
        },
        mobile: {
          src: bioImageMobile,
          width: 432,
          height: 640,
        }
      },
      current: 'desktop'
    };
    this.updateBioPicture = this.updateBioPicture.bind(this);
  }

  updateBioPicture(width, height) {
    // Mobile
    if ( width <= 518 ) {
      this.setState({current: 'mobile'});
    // Desktop
    } else {
      this.setState({current: 'desktop'});
    }
  }

  render() {
    return (
      <div className="container bio-section">

        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
          onResize={windowSize => {
            this.updateBioPicture(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div className="row bio-container">
          <img
            src={this.state.bioImages[this.state.current].src}
            width={this.state.bioImages[this.state.current].width}
            height={this.state.bioImages[this.state.current].height}
            className="bio-image"
            alt="picture"
          />
        </div>
        <div className="row bio">
          Matthew Celestre is a self taught artist from Pleasant Hill, California. Born March 30th, 1987, he grew up obsessively drawing and making home movies with his two brothers. He was influenced by watching countless classic films on VHS and endless cable cartoons during the renaissance of American animation in the early to mid 90’s. In his early twenties, he fiercely began painting, drawing, writing music & directing short films. Matthew was diagnosed at 12 years old with Bipolar Disorder type 1 with psychotic features, but remains determined to execute his intensely passionate vision by creating a multitude of artwork as a continuous therapeutic release. He has supported his artistic endeavors by working the graveyard shift in a local warehouse since 2006.
          <br />
          <br />
          <div className="instagram-link-box">
            <a href="https://www.instagram.com/maison_de_sante/" target="blank">
              <img
                src={instaLogo}
                className="instagram-logo"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
