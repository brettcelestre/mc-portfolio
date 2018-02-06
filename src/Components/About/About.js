
import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import './About.css';

import bioImage from '../../assets/img/bio/painting-room.jpg';
import bioImageMobile from '../../assets/img/bio/painting-garage-small.jpg';

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
    // Desktop
    if ( 518 >= width ) {
    this.setState({current: 'mobile'});
    // Mobile
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

// width={this.state.bioImages[this.state.current].width}
// height={this.state.bioImages[this.state.current].height}

/* src={bioImage}
    width={750}
    height={538} */