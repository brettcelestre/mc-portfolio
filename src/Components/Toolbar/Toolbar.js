import React, { Component } from 'react';
import './Toolbar.css';

const zoomIcon = require('../../assets/svg/ios-search-strong.svg');
console.log(zoomIcon);

class Toolbar extends Component {

  constructor(props){
    super(props)
    this.state = {
      selectedCode: '',
      selectedLanguage: ''
    }
    this.zoomToggle = this.zoomToggle.bind(this);
  }

  zoomToggle() {
    console.log('zoom Toggle');
    this.props.imageZoom();
  }

  render() {
    const galleryPosition = this.props.imageData.index + 1;
    return (
      <div className="toolbar">
        <div className="container">
          <div className="u-full-width toolbar-desktop">

            <div className="eight columns title-year">
              <span className="title">{this.props.imageData.name}</span> <span className="year year-top">- {this.props.imageData.date}</span><br />
              <span className="description">{this.props.imageData.description} <span className="year year-bottom">- {this.props.imageData.date}</span></span>
            </div>

            <div className="four columns tools">
              <div className="zoom-button" onClick={this.zoomToggle}>
                <img className="zoom-icon" src={zoomIcon} width="30px" height="30px" />
              </div>
              <div className="gallery-index">
                {galleryPosition}/{this.props.imageData.galleryLength}
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;



{/* <div className="u-full-width toolbar-mobile">
<div className="title-year">
    <span className="title">{this.props.imageData.name}</span> <span className="year">- {this.props.imageData.date}</span><br />
    <span className="description">{this.props.imageData.description}</span>
  </div>

  <div className="tools">
    <div className="zoom-button" onClick={this.zoomToggle}>
      <img className="zoom-icon" src={zoomIcon} width="30px" height="30px" />
    </div>
    <div className="gallery-index">
      {galleryPosition}/{this.props.imageData.galleryLength}
    </div>
  </div>
</div> */}
