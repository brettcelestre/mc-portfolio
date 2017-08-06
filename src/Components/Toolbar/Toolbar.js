import React, { Component } from 'react';
import './Toolbar.css';

class Toolbar extends Component {

  render() {
    const galleryPosition = this.props.imageData.index + 1;
    return (
      <div className="outer">
        <div className="container toolbar">
          <div className="title-year row">
            <div className="u-full-width">
              <span className="title">{this.props.imageData.name}</span> <span className="year">- {this.props.imageData.date}</span>
              <span className="galleryIndex">{galleryPosition}/{this.props.imageData.galleryLength}</span>
            </div>
          </div>
          <div className="info row">
            <div className="u-full-width">
              <span className="description">{this.props.imageData.description}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
