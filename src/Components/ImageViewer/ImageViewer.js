import React, { Component } from 'react';
import './ImageViewer.css';

import example from '../../assets/gallery/example/example.json';

class ImageViewer extends Component {

  componentDidMount(){

    console.log('example data', example.data[0]);
    console.log('SRC', example.data[0].src + this.state.currentSize);
    // this.setState({data: example.data[0]});
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
      'SRC': example.data[0].src + 'Large.jpg'
    }
    console.log('this.state', this.state);
  }

  render() {
    return (
      <div className="image-viewer">
        <img src={this.state.src} alt="picture" width="1500" height="1077" />
      </div>
    );
  }

}

export default ImageViewer;
