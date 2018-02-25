
import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

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
    "From The Craddle To The Grave": {
      small: require('../../assets/gallery/stipplings/From_The_Craddle_To_The_Grave_Small.jpg'),
      medium: require('../../assets/gallery/stipplings/From_The_Craddle_To_The_Grave_Medium.jpg'),
      large: require('../../assets/gallery/stipplings/From_The_Craddle_To_The_Grave_Large.jpg')
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
    "Elderly Woman Study": {
      small: require('../../assets/gallery/crossHatchings/Elderly_Woman_Study_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Elderly_Woman_Study_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Elderly_Woman_Study_Large.jpg')
    },
    "Girl With Flowers": {
      small: require('../../assets/gallery/crossHatchings/Girl_With_Flowers_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Girl_With_Flowers_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Girl_With_Flowers_Large.jpg')
    },
    "Opulence": {
      small: require('../../assets/gallery/crossHatchings/Opulence_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Opulence_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Opulence_Large.jpg')
    },
    "Lady Study": {
      small: require('../../assets/gallery/crossHatchings/Lady_Study_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Lady_Study_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Lady_Study_Large.jpg')
    },
    "Man Study": {
      small: require('../../assets/gallery/crossHatchings/Man_Study_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Man_Study_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Man_Study_Large.jpg')
    },
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
    "Rembrandt Study": {
      small: require('../../assets/gallery/drawings/Rembrandt_Study_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Rembrandt_Study_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Rembrandt_Study_Large.jpg')
    },
    "Owl & Whiskey": {
      small: require('../../assets/gallery/drawings/Owl_&_Whiskey_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Owl_&_Whiskey_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Owl_&_Whiskey_Large.jpg')
    },
    "Bunny On Bike": {
      small: require('../../assets/gallery/drawings/Bunny_On_Bike_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Bunny_On_Bike_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Bunny_On_Bike_Large.jpg')
    },
    "Death Head Moth": {
      small: require('../../assets/gallery/drawings/Death_Head_Moth_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Death_Head_Moth_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Death_Head_Moth_Large.jpg')
    },
    "To The Lost": {
      small: require('../../assets/gallery/drawings/To_The_Lost_Small.jpg'),
      medium: require('../../assets/gallery/drawings/To_The_Lost_Medium.jpg'),
      large: require('../../assets/gallery/drawings/To_The_Lost_Large.jpg')
    },
    "Milo At War": {
      small: require('../../assets/gallery/drawings/Milo_At_War_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Milo_At_War_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Milo_At_War_Large.jpg')
    },
    "Too Much On My Mind": {
      small: require('../../assets/gallery/drawings/Too_Much_On_My_Mind_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Too_Much_On_My_Mind_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Too_Much_On_My_Mind_Large.jpg')
    },
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

  componentDidMount() {
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
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
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  constructor(props){
    super(props)

    // FROM ALBUM COMPONENT
    // const currentAlbum = props.location.pathname.split('/')[3];
    // function findAlbum(album) {
    //   const target = album.path.split('/')[1].toString();
    //   return currentAlbum == target;
    // }
    // this.state = {
    //   album: music[music.findIndex(findAlbum)]
    // }
    console.log('=========================');
    console.log('PROPS =', props.match.params.piece);
    const currentPath = props.location.pathname.split('/')[2];
    console.log('IMAGE = ', props.match.params.piece);
    console.log('currentPath = ', currentPath);


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
    this.zoomImageState = this.zoomImageState.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
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

  zoomImageState = () => {
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

  previous() {
    this.galleryWheel('previous');
  }

  next() {
    this.galleryWheel('next');
  }
  
  onKeyPressed(e) {
    if ( e.keyCode == '37' && this.state.zoom == false) this.galleryWheel('previous');
    if ( e.keyCode == '39' && this.state.zoom == false) this.galleryWheel('next');
    if ( e.keyCode == '187' || e.keyCode == '189' && this.state.zoom == false) this.zoomImageState();
  }

  render() {
    window.addEventListener("keydown", this.onKeyPressed, true);

    // const currentArray = this.props.location.pathname.split('/');
    // const currentGallery = currentArray[currentArray.length - 1];
    const currentGallery = this.props.location.pathname.split('/')[2];
    console.log('currentGallery from RENDER = ', currentGallery);
    

    console.log('IMAGE data = ', this.state);
    
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
      <div className="image-viewer" tabIndex="0">
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
            src={artwork[this.state.gallery][this.state.name]['large']}
            width={galleryData[this.state.gallery].data[this.state.index].sizes['large'].width}
            height={galleryData[this.state.gallery].data[this.state.index].sizes['large'].height}
            className="zoom-image"
            alt={this.state.name}
            title={this.state.name}
          />
        </div>

        <div className={this.state.zoom ? "image-hide" : "image"}>
          <img
            src={artwork[this.state.gallery][this.state.name][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            className="gallery-image"
            alt={this.state.name}
            title={this.state.name}
            onClick={this.zoomImageState}
            draggable="true"
          />
        </div>

        <div className={this.state.zoom ? "image-hide" : "image-controls"}>
          <div
            className="previous"
            onClick={this.previous}>
            {/* <img
              src={require("../../assets/svg/ios-arrow-left.svg")}
              width="39px"
              height="175px"
              alt="previous"
              className="previousSVG"/> */}
          </div>
          <div
            className="next"
            onClick={this.next}>
          </div>
        </div>

        <Toolbar 
          imageData={this.state} 
          imageZoom={this.zoomImageState}/>
      </div>
    );
  }
}

export default ImageViewer;

// const test = (text) => {
//   console.log('suppppp', text);
// }

// ImageViewer.onKeyPressed

// window.addEventListener("keydown", test, true);
// window.addEventListener("keydown", handle, true);

/* src={paintingsSRC[this.state.name][this.state.currentSize]} */

// window.onload = function() {
  
//      document.getElementById('search').getElementsByTagName('input')[0].focus();
  
//   }