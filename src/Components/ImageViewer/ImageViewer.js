import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'

// import keydown, { Keys } from 'react-keydown';
// import Image from 'react-image-resizer';
// import Img from 'react-image'
import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';

const galleryData = {
  paintings: require('../../assets/data/paintings.js'),
  stipplings: require('../../assets/data/stipplings.js')
};
// import paintings from '../../assets/data/paintings.js';
// import stipplings from '../../assets/data/stipplings.js';

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
    this.state = {
      index: 0,
      gallery: props.location.pathname.split('/')[2],
      galleryLength: 0,
      name: '',
      src: '',
      date: '',
      description: '',
      currentSize: 'large',
      width: 0,
      height: 0,
      loading: '"../../assets/svg/load-c.svg"'
    }

    const currentPath = props.location.pathname.split('/')[2];
    choosenGallery = currentPath;

    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height) {
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


  render() {
    const currentArray = this.props.location.pathname.split('/');
    const currentGallery = currentArray[currentArray.length - 1];
    
    // Updates current gallery
    if ( currentGallery !== this.state.gallery ) {
      choosenGallery = currentGallery;
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

        <div className="image-controls">
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

        <div className="image">
          <img
            src={artwork[this.state.gallery][this.state.name][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className="gallery-image"
            alt="picture"
          />
        </div>

        <Toolbar imageData={this.state} />
      </div>
    );
  }
}

export default ImageViewer;

/* src={paintingsSRC[this.state.name][this.state.currentSize]} */