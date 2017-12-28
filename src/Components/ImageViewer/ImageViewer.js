import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';

const galleryData = {
  paintings: require('../../assets/data/paintings.js'),
  stipplings: require('../../assets/data/stipplings.js'),
  crossHatchings: require('../../assets/data/cross-hatchings.js'),
  drawings: require('../../assets/data/drawings.js')
};

const artwork = {
  "paintings": {
    "Somnolence": {
      small: require('../../assets/gallery/paintings/Somnolence_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Somnolence_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Somnolence_Large.jpg')
    },
    "Oaklahoma City": {
      small: require('../../assets/gallery/paintings/Oaklahoma_City_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Oaklahoma_City_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Oaklahoma_City_Large.jpg')
    },
    "Mother": {
      small: require('../../assets/gallery/paintings/Mother_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Mother_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Mother_Large.jpg')
    },
    "I Was Cured": {
      small: require('../../assets/gallery/paintings/I_Was_Cured_Small.jpg'),
      medium: require('../../assets/gallery/paintings/I_Was_Cured_Medium.jpg'),
      large: require('../../assets/gallery/paintings/I_Was_Cured_Large.jpg')
    },
    "Italy": {
      small: require('../../assets/gallery/paintings/Italy_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Italy_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Italy_Large.jpg')
    },
    "Winter Fruit": {
      small: require('../../assets/gallery/paintings/Winter_Fruit_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Winter_Fruit_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Winter_Fruit_Large.jpg')
    }
  },
  "stipplings": {
    "Vivian": {
      small: require('../../assets/gallery/stipplings/Vivian_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/Vivian_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/Vivian_Large.jpg')
    },
    "For Faye": {
      small: require('../../assets/gallery/stipplings/For_Faye_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/For_Faye_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/For_Faye_Large.jpg')
    },
    "Rowland S. Howard": {
      small: require('../../assets/gallery/stipplings/Rowland_S._Howard_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/Rowland_S._Howard_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/Rowland_S._Howard_Large.jpg')
    },
    "Jezebel": {
      small: require('../../assets/gallery/stipplings/Jezebel_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/Jezebel_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/Jezebel_Large.jpg')
    },
    "Our Prayer": {
      small: require('../../assets/gallery/stipplings/Our_Prayer_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/Our_Prayer_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/Our_Prayer_Large.jpg')
    },
    "Midlife Crisis": {
      small: require('../../assets/gallery/stipplings/Midlife_Crisis_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/Midlife_Crisis_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/Midlife_Crisis_Large.jpg')
    }
  },
  "crossHatchings": {
    "Dewitt Study 4": {
      small: require('../../assets/gallery/crossHatchings/De_Wit_Study_IV_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/De_Wit_Study_IV_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/De_Wit_Study_IV_Large.jpg')
    },
    "Dewitt Study 3": {
      small: require('../../assets/gallery/crossHatchings/De_Wit_Study_III_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/De_Wit_Study_III_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/De_Wit_Study_III_Large.jpg')
    },
    "Dewitt Study 2": {
      small: require('../../assets/gallery/crossHatchings/De_Wit_Study_II_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/De_Wit_Study_II_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/De_Wit_Study_II_Large.jpg')
    },
    "Dewitt Study 1": {
      small: require('../../assets/gallery/crossHatchings/De_Wit_Study_I_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/De_Wit_Study_I_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/De_Wit_Study_I_Large.jpg')
    }
  },
  "drawings": {
    "The Grotesque Master": {
      small: require('../../assets/gallery/drawings/The_Grotesque_Master_Small.jpg'),
      medium: require('../../assets/gallery/drawings/The_Grotesque_Master_Medium.jpg'),
      large: require('../../assets/gallery/drawings/The_Grotesque_Master_Large.jpg')
    },
    "Rosebud": {
      small: require('../../assets/gallery/drawings/Rosebud_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Rosebud_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Rosebud_Large.jpg')
    },
    "Ambien Nights": {
      small: require('../../assets/gallery/drawings/Ambien_Nights_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Ambien_Nights_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Ambien_Nights_Large.jpg')
    }
  }
};

// Stores choosen gallery
let choosenGallery = '';

class ImageViewer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentWillMount() {
    this.setState({
      galleryLength: galleryData[this.state.gallery].data.length,
      src: `${galleryData[this.state.gallery].data[this.state.index].src}`,
      name: galleryData[this.state.gallery].data[this.state.index].title,
      description: galleryData[this.state.gallery].data[this.state.index].description,
      date: galleryData[this.state.gallery].data[this.state.index].date,
      width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
      height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height});
  }

  componentDidUpdate() {
    // Updates gallery data
    if ( choosenGallery !== this.state.gallery){
      this.setState({
        gallery: choosenGallery,
        index: 0,
        width: 0,
        height: 0,
        name: '',
        src: '',
        date: '',
        description: ''
      });

      this.setState({
        src: `${galleryData[choosenGallery].data[0].src}`,
        galleryLength: galleryData[choosenGallery].data.length,
        name: galleryData[choosenGallery].data[0].title,
        description: galleryData[choosenGallery].data[0].description,
        date: galleryData[choosenGallery].data[0].date,
        width: galleryData[choosenGallery].data[0].sizes[this.state.currentSize].width,
        height: galleryData[choosenGallery].data[0].sizes[this.state.currentSize].height
      });
    }

  }

  constructor(props){
    super(props)
    
    const currentPath = props.location.pathname.split('/')[2];
    if ( currentPath === 'cross-hatchings' ) {
      choosenGallery = 'crossHatchings';
    } else {
      choosenGallery = currentPath;
    }

    this.state = {
      index: 0,
      gallery: choosenGallery,
      galleryLength: 0,
      name: '',
      src: '',
      date: '',
      description: '',
      currentSize: 'large',
      width: 0,
      height: 0,
      loading: '"../../assets/svg/load-c.svg"',
      zoom: false
    }

    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
    this.zoomImageState = this.zoomImageState.bind(this);
  }

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height) {
    // Makes sure you're not zoomed in
    if (!this.state.zoom) {
      // Large
      if ( width >= 1100 && this.state.currentSize !== 'large' ) {
        this.setState({currentSize: 'large'});
        console.log('large', width);
  
        // TODO: Run resizeImage
        // $('#fit').imageFitWindow({offsetY: 67});
  
      // TODO: Also height
      // Medium
      } else if ( 1099 >= width && 800 <= width && this.state.currentSize !== 'medium' ) {
        this.setState({currentSize: 'medium'});
        console.log('medium', width);
  
  
        // TODO: Run resizeImage
        // document.getElementsByClassName('gallery-image').imageFitWindow({offsetY: 75});
        // $('.gallery-image').imageFitWindow({offsetY: 75});
        // select 'gallery-image' and run .imageFitWindow({offsetY: SIZE OF TOOLBAR});
  
  
      // TODO: Also height
      // Small
      } else if ( 799 >= width && this.state.currentSize !== 'small' ) {
        this.setState({currentSize: 'small'});
        console.log('small', width);
  
        // TODO: Run resizeImage
        // fitImage
      }
    }
  }

  galleryWheel(direction) {
    switch(direction) {
      case 'previous':
        if ( this.state.index > 0 ) {
          --this.state.index;
        }
        break;
      case 'next':
        if ( this.state.index < (galleryData[this.state.gallery].data.length-1) ) {
          ++this.state.index;
        }
        break;
    }
    this.setState({
      index: this.state.index,
      name: galleryData[this.state.gallery].data[this.state.index].title,
      description: galleryData[this.state.gallery].data[this.state.index].description,
      date: galleryData[this.state.gallery].data[this.state.index].date,
      width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
      height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height
    });
  }

  // left - 37
  previous() {
    this.galleryWheel('previous');
  }

  // right - 39
  next() {
    this.galleryWheel('next');
  }

  zoomImageState = () => {
    console.log('zoomImageState ran');

    if (this.state.zoom) {
      this.setState({
        zoom: false,
        currentSize: 'large'
      });
    } else {
      this.setState({
        zoom: true
      });
    }

  }

  render() {
    const currentArray = this.props.location.pathname.split('/');
    const currentGallery = currentArray[currentArray.length - 1];

    console.log(' target = ', currentGallery);
    
    // Updates current gallery
    // TODO REFACTOR - make fn which returns correct format
    if ( currentGallery !== this.state.gallery ) {
      if ( currentGallery === 'cross-hatchings' ) {
        console.log('cross-hatchings RANNNN');
        choosenGallery = 'crossHatchings';
      } else {
        choosenGallery = currentGallery;
      }
    }
    
    const { match, location, history } = this.props;

    return (
      <div className="image-viewer">
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div className={this.state.zoom ? "zoom-box" : "zoom-box-hide"} onClick={this.zoomImageState}>
          <img
            src={artwork[this.state.gallery][this.state.name][this.state.currentSize]}
            width={galleryData[this.state.gallery].data[this.state.index].sizes['large'].width}
            height={galleryData[this.state.gallery].data[this.state.index].sizes['large'].height}
            className="zoom-image"
            alt="picture"
          />
        </div>

        <div className={this.state.zoom ? "image-hide" : "image-controls"}>
          <div
            className="previous"
            onClick={this.previous}
            onKeyDown={ this.myMethod } >
            <img
              src={require("../../assets/svg/ios-arrow-left.svg")}
              width="39px"
              height="175px"
              alt="previous"
              className="previousSVG"/>
          </div>
          <div
            className="next"
            onClick={this.next}>
          </div>
        </div>

        <div className={this.state.zoom ? "image-hide" : "image"}>
          <img
            src={artwork[this.state.gallery][this.state.name][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className="gallery-image"
            alt="picture"
          />
        </div>

        <Toolbar 
          imageData={this.state} 
          imageZoom={this.zoomImageState}/>
      </div>
    );
  }
}

export default ImageViewer;

/* src={paintingsSRC[this.state.name][this.state.currentSize]} */