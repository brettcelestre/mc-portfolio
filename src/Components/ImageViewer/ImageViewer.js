import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
// import Image from 'react-image-resizer';
// import Img from 'react-image'
import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';
import { updateImageSize } from '../../utils/utils';

import paintings from '../../assets/data/paintings.json';

const paintingsSRC = {
  "Oaklahoma City": {
    small: require('../../assets/gallery/paintings/Oaklahoma_City_Small.jpg'),
    medium: require('../../assets/gallery/paintings/Oaklahoma_City_Medium.jpg'),
    large: require('../../assets/gallery/paintings/Oaklahoma_City_Large.jpg')
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
};

class ImageViewer extends Component {

  // updateDimensions() {
    // this.setState({width: $(window).width(), height: $(window).height()});
    // console.log('updateDimensions', window);
  // }

  componentWillMount() {
    console.log('will mount');
    this.setState({
      galleryLength: paintings.data.length,
      src: `${paintings.data[this.state.index].src}`,
      name: paintings.data[this.state.index].title,
      description: paintings.data[this.state.index].description,
      date: paintings.data[this.state.index].date,
      width: paintings.data[this.state.index].sizes[this.state.currentSize].width,
      height: paintings.data[this.state.index].sizes[this.state.currentSize].height});
    // Utils function for checking window size
    // window.onresize = updateImageSize;
    // console.log('size test', updateImageSize());
    console.log('INDEX', this.state.index);
    console.log('example.data.length', paintings.data.length);
  }

  componentDidMount(){
    let src = this.state.src;
    switch(this.state.currentSize) {
      case 'xlarge':
        this.setState({src: `${this.state.src}XLarge.jpg`});
        break;
      case 'large':
        console.log('LARGE RAN');
        // src += 'Large.jpg';
        this.setState({src: `${this.state.src}Large.jpg`});
        // this.setState({src: src});
        // console.log('src', this.state.src + 'Large.jpg');
        break;
      case 'medium':
        this.setState({src: `${this.state.src}Medium.jpg`});
        break;
      case 'small':
        this.setState({src: `${this.state.src}Small.jpg`});
        break;
      default:
        // I dont know
      break;
    }
    // console.log('this.state', this.state);
  }

  constructor(props){
    super(props)
    this.state = {
      index: 0,
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

    this.windowSize = this.windowSize.bind(this);
    this.galleryWheel = this.galleryWheel.bind(this);
    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  // Move into utils
  windowSize(width, height) {
    let size;

    // Large
    if ( width >= 1100 && this.state.currentSize !== 'large' ) {
      this.setState({currentSize: 'large'});
      console.log('large', width);

    // TODO: Also height
    // Medium
  } else if ( 1099 >= width && 800 <= width && this.state.currentSize !== 'medium' ) {
      this.setState({currentSize: 'medium'});
      console.log('medium', width);

    // TODO: Also height
    // Small
  } else if ( 799 >= width && this.state.currentSize !== 'small' ) {
      this.setState({currentSize: 'small'});
      console.log('small', width);
    }
    // return size;
  }

  galleryWheel(direction) {
    switch(direction) {
      case 'previous':
        if ( this.state.index > 0 ) {
          --this.state.index;
        }
        break;
      case 'next':
        if ( this.state.index < (paintings.data.length-1) ) {
          ++this.state.index;
        }
        break;
    }
    this.setState({
      src: `${paintings.data[this.state.index].src}`,
      index: this.state.index,
      name: paintings.data[this.state.index].title,
      description: paintings.data[this.state.index].description,
      date: paintings.data[this.state.index].date,
      width: paintings.data[this.state.index].sizes[this.state.currentSize].width,
      height: paintings.data[this.state.index].sizes[this.state.currentSize].height
    });
  }

  previous() {
    this.galleryWheel('previous');
  }

  next() {
    this.galleryWheel('next');
  }

  render() {
    console.log('-----------------------render ');
    let loadingSRC = './matthew_celestre_painting_01.jpg';
    let liveSRC = this.state.src.substr(this.state.src.length -3, this.state.src.length) === 'jpg' ? this.state.src : this.state.loading;

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
            onClick={this.previous}>
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
            // src={require("./matthew_celestre_painting_01.jpg")}
            // src={require("../../assets/gallery/paintings/Grant_0_Large.jpg")}
            // src={require("../../assets/gallery/example/Grant_0_Large.jpg")}
            // src={require(liveSRC.toString())}
            // src={require(this.state.loading)}


            src={paintingsSRC[this.state.name][this.state.currentSize]}
            // src={loadingSRC}

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
