import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  // constructor(props){
    // super(props)
    // this.props.current = 1;
    // this.props.galleryLength = 6;
  // }

  render() {
    return (
      <div className="outer">
        <div className="container toolbar">
          <div className="title-year row">
            <div className="u-full-width">
              <span className="title">The Casino</span> <span className="year">- 2017</span>
              {/* <span className="galleryIndex">{props.current}/{props.galleryLength}</span> */}
              <span className="galleryIndex">1/8</span>
            </div>
          </div>
          <div className="info row">
            <div className="u-full-width">
              <span className="description">Oil on Canvas</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
