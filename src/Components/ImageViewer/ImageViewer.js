import React, { Component } from 'react';
// import Image from 'react-image-resizer';
// import Img from 'react-image'
import './ImageViewer.css';

import example from '../../assets/gallery/example/example.json';
import bio from '../../assets/img/bio/matthew_celestre_painting_01.jpg';
//
// import grant_small from '../../assets/gallery/example/Grant_0_Small.jpg';
// import grant_medium from '../../assets/gallery/example/Grant_0_Medium.jpg';
// import grant_large from '../../assets/gallery/example/Grant_0_Large.jpg';

class ImageViewer extends Component {

  componentDidMount(){

    console.log('example data', example.data[0]);
    // let test = require(`${example.data[0]}_Large.jpg`);
    // console.log('SRC', example.data[0].src + this.state.currentSize);
    console.log('width', example.data[0].sizes[this.state.currentSize].width);
    console.log('height', example.data[0].sizes[this.state.currentSize].height);
    this.setState({
      width: example.data[0].sizes[this.state.currentSize].width,
      height: example.data[0].sizes[this.state.currentSize].height});
    // this.setState({width: example.data[0].sizes[this.state.currentSize].width});
    // console.log('this.state.SRC', this.state.SRC);
    // this.setState({data: example.data[0]});

    // let windowSize = '_Large.jpg';
    // this.setState({SRC: example.data[0].src + windowSize});

    console.log('this.state.width', this.state.width);
  }


  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'src': '',
      'date': '',
      'description': '',
      'currentSize': 'large',
      'width': 0,
      'height': 0,
      SRC: 'temp'
    }

    this.previous = this.previous.bind(this);
    this.next = this.next.bind(this);
  }

  previous() {
    console.log('---------');
    console.log('previous');
    console.log('this.state', this.state);
  }

  next() {
    console.log('---------');
    console.log('next');
    console.log('this.state.SRC', this.state.SRC);
  }

  render() {

    return (
      <div className="image-viewer">

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
        <img
          // src={bio}
          src={require("./matthew_celestre_painting_01.jpg")}
          width={444}
          height={444}
          // width={this.state.width}
          // height={this.state.height}
          className="gallery-image"
          alt="picture"
        />
      </div>
    );
  }

}

export default ImageViewer;
