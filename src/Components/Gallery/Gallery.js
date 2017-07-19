import React, { Component } from 'react';
import ImageViewer from '../ImageViewer/ImageViewer.js';
import Toolbar from '../Toolbar/Toolbar.js';

import './Gallery.css';

class Gallery extends Component {

  constructor(props) {
    super(props)

    this.state = {
      src: '',
      name: null,
      date: null,
      medium: null,
      galleryLength: null,
      currentNumber: null
    };

  }

  render() {
    return (
      <div>

        <ImageViewer />

        <Toolbar />

      </div>
    );
  }
}

export default Gallery;
