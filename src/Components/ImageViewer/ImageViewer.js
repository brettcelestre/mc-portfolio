import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
// import Image from 'react-image-resizer';
// import Img from 'react-image'
import './ImageViewer.css';
import { updateImageSize } from '../../utils/utils';

import example from '../../assets/gallery/example/example.json';
import bio from '../../assets/img/bio/matthew_celestre_painting_01.jpg';
//
// import grant_small from '../../assets/gallery/example/Grant_0_Small.jpg';
// import grant_medium from '../../assets/gallery/example/Grant_0_Medium.jpg';
// import grant_large from '../../assets/gallery/example/Grant_0_Large.jpg';

class ImageViewer extends Component {

  // updateDimensions() {
    // this.setState({width: $(window).width(), height: $(window).height()});
    // console.log('updateDimensions', window);
  // }

  componentWillMount() {
    console.log('will mount');
    this.setState({
      name: example.data[0].title,
      description: example.data[0].description,
      src: `${example.data[0].src}`,
      date: example.data[0].date,
      width: example.data[0].sizes[this.state.currentSize].width,
      height: example.data[0].sizes[this.state.currentSize].height});

    // Utils function for checking window size
    // window.onresize = updateImageSize;
    // console.log('size test', updateImageSize());
  }

  componentDidMount(){
    console.log('this.state', this.state);
  }

  constructor(props){
    super(props)
    this.state = {
      name: '',
      src: '',
      date: '',
      description: '',
      currentSize: 'large',
      width: 0,
      height: 0
    }

    this.windowSize = this.windowSize.bind(this);
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

  previous() {
    console.log('---------');
    console.log('previous');
    // console.log('this.state', this.state);
  }

  next() {
    console.log('---------');
    console.log('next');
  }

  render() {

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

        {/* <Image
          // src={require("../../assets/img/bio/matthew_celestre_painting_01.jpg")}
          // src="../../assets/img/bio/matthew_celestre_painting_01.jpg"
          src={bio}

          // width={1500}
          // height={1077}

          width={this.state.width}
          height={this.state.height}
          // src={require(`${this.state.SRC}`)}
          // src={`${this.state.SRC}`}
          // src={this.src}
          // style={style}
          className="gallery-image"
        />*/}
        <div className="image">
          <img
            // src={bio}
            // USE THIS ONE
            src={require("./matthew_celestre_painting_01.jpg")}
            // width={444}
            // height={444}
            width={this.state.width}
            height={this.state.height}
            className="gallery-image"
            alt="picture"
          />
        </div>
      </div>
    );
  }

}

export default ImageViewer;
