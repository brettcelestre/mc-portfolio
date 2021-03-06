
import React, { Component } from 'react';
import Img from 'react-image';
import { Link, Redirect } from 'react-router-dom';
import { WindowResizeListener } from 'react-window-resize-listener';
import PropTypes from 'prop-types';
import ReactSVG from 'react-svg';
import { withRouter } from 'react-router';

import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';
const arrow = require('../../assets/svg/ios-arrow-left.svg');

const galleryData = {
  paintings: require('../../assets/data/paintings.js'),
  stipplings: require('../../assets/data/stipplings.js'),
  "cross-hatchings": require('../../assets/data/cross-hatchings.js'),
  drawings: require('../../assets/data/drawings.js')
};

const artwork = {
  "paintings": {
    "The Raft Of The Medusa": {
      small: require('../../assets/gallery/paintings/The_Raft_of_the_Medusa_Small.jpg'),
      medium: require('../../assets/gallery/paintings/The_Raft_of_the_Medusa_Medium.jpg'),
      large: require('../../assets/gallery/paintings/The_Raft_of_the_Medusa_Large.jpg')
    },
    "Karl Theodor Bridge": {
      small: require('../../assets/gallery/paintings/Karl_Theodor_Bridge_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Karl_Theodor_Bridge_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Karl_Theodor_Bridge_Large.jpg')
    },
    "The Casino": {
      small: require('../../assets/gallery/paintings/The_Casino_Small.jpg'),
      medium: require('../../assets/gallery/paintings/The_Casino_Medium.jpg'),
      large: require('../../assets/gallery/paintings/The_Casino_Large.jpg')
    },
    "Innocent X": {
      small: require('../../assets/gallery/paintings/Innocent_X_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Innocent_X_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Innocent_X_Large.jpg')
    },
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
    },
    "The Roaring Twenties": {
      small: require('../../assets/gallery/paintings/The_Roaring_Twenties_Small.jpg'),
      medium: require('../../assets/gallery/paintings/The_Roaring_Twenties_Medium.jpg'),
      large: require('../../assets/gallery/paintings/The_Roaring_Twenties_Large.jpg')
    },
    "Josette": {
      small: require('../../assets/gallery/paintings/Josette_Small.jpg'),
      medium: require('../../assets/gallery/paintings/Josette_Medium.jpg'),
      large: require('../../assets/gallery/paintings/Josette_Large.jpg')
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
    "From The Cradle To The Grave": {
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
  "cross-hatchings": {
    "De Wit Study V": {
      small: require('../../assets/gallery/crossHatchings/De_Wit_Study_V_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/De_Wit_Study_V_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/De_Wit_Study_V_Large.jpg')
    },
    "Edith": {
      small: require('../../assets/gallery/crossHatchings/Edith_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Edith_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Edith_Large.jpg')
    },
    "Victoria": {
      small: require('../../assets/gallery/crossHatchings/Victoria_Small.jpg'),
      medium: require('../../assets/gallery/crossHatchings/Victoria_Medium.jpg'),
      large: require('../../assets/gallery/crossHatchings/Victoria_Large.jpg')
    },
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
    "Venus": {
      small: require('../../assets/gallery/drawings/Venus_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Venus_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Venus_Large.jpg')
    },
    "Ballroom Mask": {
      small: require('../../assets/gallery/drawings/Ballroom_Mask_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Ballroom_Mask_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Ballroom_Mask_Large.jpg')
    },
    "Barfly": {
      small: require('../../assets/gallery/drawings/Barfly_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Barfly_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Barfly_Large.jpg')
    },
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
    "Bipolar Disorder": {
      small: require('../../assets/gallery/drawings/Bipolar_Disorder_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Bipolar_Disorder_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Bipolar_Disorder_Large.jpg')
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
    "The Elephant Man": {
      small: require('../../assets/gallery/drawings/The_Elephant_Man_Small.jpg'),
      medium: require('../../assets/gallery/drawings/The_Elephant_Man_Medium.jpg'),
      large: require('../../assets/gallery/drawings/The_Elephant_Man_Large.jpg')
    },
    "Da Vinci Skull Study": {
      small: require('../../assets/gallery/drawings/Da_Vinci_Skull_Study_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Da_Vinci_Skull_Study_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Da_Vinci_Skull_Study_Large.jpg')
    },
    "Ambien Nights": {
      small: require('../../assets/gallery/drawings/Ambien_Nights_Small.jpg'),
      medium: require('../../assets/gallery/drawings/Ambien_Nights_Medium.jpg'),
      large: require('../../assets/gallery/drawings/Ambien_Nights_Large.jpg')
    }
  }
};

class ImageViewer extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyPressed, true);
    // Puts focus on image-viewer so arrow keys will change image
    document.getElementsByClassName('image-viewer')[0].focus();
  }

  componentWillMount() {
    // Finds window size
    this.windowSize(window.innerWidth, window.innerHeight)
    // Sets first image
    this.setState({
      galleryLength: galleryData[this.state.gallery].data.length,
      src: `${galleryData[this.state.gallery].data[this.state.index].src}`,
      name: galleryData[this.state.gallery].data[this.state.index].title,
      description: galleryData[this.state.gallery].data[this.state.index].description,
      date: galleryData[this.state.gallery].data[this.state.index].date,
      width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
      height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height});
  }

  componentWillUnmount(){
    window.removeEventListener('keydown', this.onKeyPressed, true);
  }

  componentDidUpdate() {
    let currentPath = this.props.location.pathname.split('/')[2] === 
      'crossHatching' ? 'cross-hatching' : this.props.location.pathname.split('/')[2];
      // console.log('current path = ', currentPath); 

    // Updates gallery data if selected section is different that current
    if ( currentPath !== this.state.gallery){


      this.setState({
        gallery: currentPath,
        index: 0,
        width: 0,
        height: 0,
        name: '',
        date: '',
        description: '',
        zoom: false
      });
      
      this.setState({
        galleryLength: galleryData[currentPath].data.length,
        name: galleryData[currentPath].data[0].title,
        description: galleryData[currentPath].data[0].description,
        date: galleryData[currentPath].data[0].date,
        width: galleryData[currentPath].data[0].sizes[this.state.currentSize].width,
        height: galleryData[currentPath].data[0].sizes[this.state.currentSize].height
      });
      
      
      const currentImage = this.buildImageName(this.props.match.params.piece);
      const currentIndex = galleryData[currentPath].data.findIndex(piece => piece.title === currentImage);
      
      if (currentImage !== this.state.name) {
        this.setState({
          gallery: currentPath,
          index: galleryData[currentPath].data.findIndex(piece => piece.title === currentImage),
        })
  
        this.setState({
          galleryLength: galleryData[currentPath].data.length,
          name: galleryData[currentPath].data[currentIndex].title,
          description: galleryData[currentPath].data[currentIndex].description,
          date: galleryData[currentPath].data[currentIndex].date,
          width: galleryData[currentPath].data[currentIndex].sizes[this.state.currentSize].width,
          height: galleryData[currentPath].data[currentIndex].sizes[this.state.currentSize].height
        });
      }
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

    let currentPath = this.props.location.pathname.split('/')[2] === 
    'crossHatching' ? 'cross-hatching' : this.props.location.pathname.split('/')[2];
    const currentImage = this.buildImageName(props.match.params.piece);

    this.state = {
      index: galleryData[currentPath].data.findIndex(piece => piece.title === currentImage ),
      gallery: currentPath,
      galleryLength: 0,
      name: '',
      date: '',
      description: '',
      currentSize: 'large',
      width: 0,
      height: 0,
      loading: '"../../assets/svg/load-c.svg"',
      zoom: false,
    }

    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.zoomImageState = this.zoomImageState.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.onKeyPressed = this.onKeyPressed.bind(this);
    this.buildImageName = this.buildImageName.bind(this);
    this.buildZoomImage = this.buildZoomImage.bind(this);
  }

  
  buildImageName(name) {
    let theName = [];
    const x = name.split('-');
    x.forEach((word) => {
      let y = word.split('')[0];
      let update = y;
      if (isNaN(y) && typeof y === 'string') {
        update = word.length > 1 ? y.toUpperCase() + word.substr(1) : y.toUpperCase();;
      };
      theName.push(update);
    });
    return theName.join(' ');
  }

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height) {
    // Adjusts for navigation and toolbar
    height -= 150;    
    // Makes sure you're not zoomed in
    if (!this.state.zoom) {
      // Large
      if (height >= 900 && this.state.currentSize !== 'large' ) {
        this.setState({currentSize: 'large'});
        return;
      }
      // Medium
      if (height >= 600 && this.state.currentSize !== 'medium' ) {
        this.setState({currentSize: 'medium'});
        return;
      }
      // Small
      if (height <= 599 && this.state.currentSize !== 'small' ) {
        this.setState({currentSize: 'small'});
        return;
      }
    }
  }

  galleryWheel(direction) {
    switch(direction) {
      case 'previous':
        if ( this.state.index > 0 ) {
          --this.state.index;
        }
        this.setState({
          index: this.state.index,
          name: galleryData[this.state.gallery].data[this.state.index].title,
          description: galleryData[this.state.gallery].data[this.state.index].description,
          date: galleryData[this.state.gallery].data[this.state.index].date,
          width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
          height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height
        });
        break;
      case 'next':
        if ( this.state.index < (galleryData[this.state.gallery].data.length-1) ) {
          ++this.state.index;
        }
        this.setState({
          index: this.state.index,
          name: galleryData[this.state.gallery].data[this.state.index].title,
          description: galleryData[this.state.gallery].data[this.state.index].description,
          date: galleryData[this.state.gallery].data[this.state.index].date,
          width: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].width,
          height: galleryData[this.state.gallery].data[this.state.index].sizes[this.state.currentSize].height
        });
        break;
    }

    // Creates a new path out of gallery data and then redirects
    let imageUrl = galleryData[this.state.gallery].data[this.state.index].title.toLowerCase().split(' ').join('-');
    let currentGallery = this.state.gallery === 'crossHatchings' ? 'cross-hatchings' : this.state.gallery;
    // Updates gallery
    this.setState({
      gallery: currentGallery
    })
    const x = `/artwork/${currentGallery}/${imageUrl}`;
    this.props.history.push(x);
  }

  zoomImageState = () => {
    if (this.state.zoom) {
      // Finds current size of window
      let windowSize;
      const currentSize = window.innerHeight - 150;
      if (currentSize >= 900) {
        windowSize = 'large';
      } else if (currentSize >= 600) {
        windowSize = 'medium';
      } else {
        windowSize = 'small';
      }
      this.setState({
        zoom: false,
        currentSize: windowSize
      });
    } else {
      this.setState({
        zoom: true
      });
    }
  }

  buildZoomImage() {
    if (this.state.zoom) {
      return(
        <img
          src={artwork[this.state.gallery][this.state.name]['large']}
          width={galleryData[this.state.gallery].data[this.state.index].sizes['large'].width}
          height={galleryData[this.state.gallery].data[this.state.index].sizes['large'].height}
          className="zoom-image"
          alt={this.state.name}
          title={this.state.name}
        />
      );
    }
    return;
  }

  previous() {
    this.galleryWheel('previous');
  }

  next() {
    this.galleryWheel('next');
  }

  onKeyPressed(e) {
    // left arrow
    if ( e.keyCode == '37' && this.state.zoom == false) this.previous();
    // right arrow
    if ( e.keyCode == '39' && this.state.zoom == false) this.next();
    if ( e.keyCode == '187' || e.keyCode == '189' && this.state.zoom == false) this.zoomImageState();
  }

  render() {
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

        <div id='zoom-box' className={this.state.zoom ? "zoom-box" : "zoom-box-hide"} onClick={this.zoomImageState}>
          {this.buildZoomImage()}
        </div>

        <div className={this.state.zoom ? "image-hide" : "image"}>
         {/* TODO - implement react-image for lazy loading */}
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
              <div className="previous-button-box">
                <ReactSVG
                  path={arrow}
                  style={{width: 30, height: 30}}
                  className="previous-arrow"
                  wrapperClassName="previous-arrow"
                />
              </div>
            </div>
            <div
              className="next"
              onClick={this.next}>
              <div className="next-button-box">
                <ReactSVG
                  path={arrow}
                  style={{width: 30, height: 30}}
                  className="next-arrow"
                  wrapperClassName="next-arrow"
                />
              </div>
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
