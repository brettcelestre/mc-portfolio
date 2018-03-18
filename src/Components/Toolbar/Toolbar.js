import React, { Component } from 'react';
import './Toolbar.css';

const zoomIcon = require('../../assets/img/zoom.png');
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
    this.props.imageZoom();
  }

  render() {
    const galleryPosition = this.props.imageData.index + 1;
    return (
      <div className="toolbar">
        <div className="container">
          <div className="u-full-width toolbar-desktop">

            <div className="eight columns title-year">
              <span className="title">{this.props.imageData.name}</span><br />
              <span className="details"><span className="description">{this.props.imageData.description} -</span> <span className="year year-bottom">{this.props.imageData.date}</span></span>
            </div>

            <div className="four columns tools">
              <div className="zoom-button" onClick={this.zoomToggle}>
                <img className="zoom-icon" src={zoomIcon} width="22px" height="22px" />
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
