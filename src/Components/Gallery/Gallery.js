import React, { Component } from 'react';
import ImageViewer from '../ImageViewer/ImageViewer.js';
import Toolbar from '../Toolbar/Toolbar.js';

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

        <ImageViewer />

        <Toolbar />

      </div>
    );
  }
}

export default Gallery;
