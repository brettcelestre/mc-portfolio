import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
// import Image from 'react-image-resizer';
// import Img from 'react-image'
import './ImageViewer.css';
import Toolbar from '../Toolbar/Toolbar.js';

import paintings from '../../assets/data/paintings.json';

const paintingsSRC = {
  "Oaklahoma City": {
    small: require('../../assets/gallery/paintings/Oaklahoma_City_Small.jpg'),
    medium: require('../../assets/gallery/paintings/Oaklahoma_City_Medium.jpg'),
    large: require('../../assets/gallery/paintings/Oaklahoma_City_Large.jpg')
  },
  "Somnolence": {
    small: require('../../assets/gallery/paintings/Somnolence_Small.jpg'),
    medium: require('../../assets/gallery/paintings/Somnolence_Medium.jpg'),
    large: require('../../assets/gallery/paintings/Somnolence_Large.jpg')
  },
  "Winter Fruit": {
    small: require('../../assets/gallery/paintings/Winter_Fruit_Small.jpg'),
    medium: require('../../assets/gallery/paintings/Winter_Fruit_Medium.jpg'),
    large: require('../../assets/gallery/paintings/Winter_Fruit_Large.jpg')
  }
};

class ImageViewer extends Component {

  componentWillMount() {
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

  // Move into utils. Possibly not since there is a setState inside
  windowSize(width, height) {
    // Large
    if ( width >= 1100 && this.state.currentSize !== 'large' ) {
      this.setState({currentSize: 'large'});
      this.setState({src: `${this.state.src}Large.jpg`});
      console.log('large', width);

      // TODO: Run resizeImage
      // $('#fit').imageFitWindow({offsetY: 67});

    // TODO: Also height
    // Medium
    } else if ( 1099 >= width && 800 <= width && this.state.currentSize !== 'medium' ) {
      this.setState({currentSize: 'medium'});
      this.setState({src: `${this.state.src}Medium.jpg`});
      console.log('medium', width);



      // TODO: Run resizeImage
      // document.getElementsByClassName('gallery-image').imageFitWindow({offsetY: 75});
      // $('.gallery-image').imageFitWindow({offsetY: 75});
      // select 'gallery-image' and run .imageFitWindow({offsetY: SIZE OF TOOLBAR});




    // TODO: Also height
    // Small
    } else if ( 799 >= width && this.state.currentSize !== 'small' ) {
      this.setState({currentSize: 'small'});
      this.setState({src: `${this.state.src}Small.jpg`});
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
            src={paintingsSRC[this.state.name][this.state.currentSize]}
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
