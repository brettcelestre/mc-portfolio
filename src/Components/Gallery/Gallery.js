import React, { Component } from 'react';
import Toolbar from '../Toolbar/Toolbar';
import './Gallery.css';


class Gallery extends Component {

  // Init

  // Left
  galleryLeft() {

  }

  // Right
  galleryRight() {

  }

  render() {
    return (
      <div className="gallery">

        {/* Image Viewer */}
        <img src={bio} alt="hi" width="1500" height="1077" />

        <Toolbar />

      </div>
    );
  }
}

export default Gallery;
