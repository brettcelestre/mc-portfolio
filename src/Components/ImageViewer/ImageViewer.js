import React, { Component } from 'react';
// import Image from 'react-image-resizer';
import './ImageViewer.css';

import example from '../../assets/gallery/example/example.json';
import bio from '../../assets/img/bio/matthew_celestre_painting_01.jpg';

import grant_small from '../../assets/gallery/example/Grant_0_Small.jpg';
import grant_medium from '../../assets/gallery/example/Grant_0_Medium.jpg';
import grant_large from '../../assets/gallery/example/Grant_0_Large.jpg';

class ImageViewer extends Component {

  componentDidMount(){

    // console.log('example data', example.data[0]);
    // let test = require(`${example.data[0]}_Large.jpg`);
    // console.log('SRC', example.data[0].src + this.state.currentSize);
    // console.log('this.state.SRC', this.state.SRC);
    // this.setState({data: example.data[0]});

    // let windowSize = '_Large.jpg';
    // this.setState({SRC: example.data[0].src + windowSize});
  }


  constructor(props){
    super(props)
    this.state = {
      'name': '',
      'src': '',
      'date': '',
      'description': '',
      'currentSize': 'Large.jpg',
      'width': 0,
      'height': 0,
      SRC: 'temp'
    }

    this.previous = this.previous.bind(this);
  }

  previous() {
    console.log('previous');
    console.log('this.state.SRC', this.state.SRC);
  }

  next() {
    console.log('next');
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

        {/* <Image */}
          {/* // src={require("../../assets/img/bio/matthew_celestre_painting_01.jpg")} */}
          {/* // src="../../assets/img/bio/matthew_celestre_painting_01.jpg" */}
          {/* src={bio} */}

          {/* width={1500} */}
          {/* height={1077} */}
          {/* // src={require(`${this.state.SRC}`)} */}
          {/* // src={`${this.state.SRC}`} */}
          {/* // src={this.src} */}
          {/* // style={style.image} */}
        {/* /> */}
        {/*<img
          src={bio}
          className="gallery-image"
          alt="picture" width="1500" height="1077" />*/}
      </div>
    );
  }

}

export default ImageViewer;
/////////
