import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import './ShortFilms.css';

const filmData = require('../../assets/data/short-films.json');

const filmsSRC = {
  "Del Rio": {
    small: require('../../assets/img/short-films/del-rio/Banner_Small.jpg'),
    medium: require('../../assets/img/short-films/del-rio/Banner_Medium.jpg'),
    large: require('../../assets/img/short-films/del-rio/Banner_Large.jpg')
  },
  "Ballroom Dance Floor": {
    small: require('../../assets/img/short-films/ballroom-dance-floor/Banner_Small.jpg'),
    medium: require('../../assets/img/short-films/ballroom-dance-floor/Banner_Medium.jpg'),
    large: require('../../assets/img/short-films/ballroom-dance-floor/Banner_Large.jpg')
  },
  "Justin Felix vs. Gavin Drago": {
    small: require('../../assets/img/short-films/justin-vs-gavin/Banner_Small.jpg'),
    medium: require('../../assets/img/short-films/justin-vs-gavin/Banner_Medium.jpg'),
    large: require('../../assets/img/short-films/justin-vs-gavin/Banner_Large.jpg')
  }
};

class ShortFilms extends Component {

  componentWillMount() {
    this.setState({
      width: filmData.sizes[this.state.currentSize].width,
      height: filmData.sizes[this.state.currentSize].height
  });
    console.log('short films will mount');
  }

  constructor(props){
    super(props)
    this.state = {
      currentSize: 'large',
      width: 0,
      height: 0
    }

    this.windowSize = this.windowSize.bind(this);
  }

  windowSize(width, height) {
    if ( width >= 1100 && this.state.currentSize !== 'large' ) {
      this.setState({
          currentSize: 'large',
          width: filmData.sizes.large.width,
          height: filmData.sizes.large.height});
      console.log('large', filmData.sizes.large.width);
    } else if ( 1099 >= width && 800 <= width && this.state.currentSize !== 'medium' ) {
      this.setState({
        currentSize: 'medium',
        width: filmData.sizes.medium.width,
        height: filmData.sizes.medium.height});
        console.log('medium');
    } else if ( 799 >= width && this.state.currentSize !== 'small' ) {
      this.setState({
        currentSize: 'small',
        width: filmData.sizes.small.width,
        height: filmData.sizes.small.height});
        console.log('small');
    }
  }

  render() {


    return (
      <div className="container short-films">
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div className="row film-section">
          <img
            src={filmsSRC["Del Rio"][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            alt="Del Rio"
            className="banner-image"/>
          <div className="film-info">
            <h1 className="title">Del Rio</h1>
            <span className="year">2014 - 8:24</span>
          </div>
        </div>

        <div className="row film-section">
          <img
            src={filmsSRC["Ballroom Dance Floor"][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            alt="Ballroom Dance Floor"
            className="banner-image"/>
          <div className="film-info">
            <h1 className="title">Ballroom Dance Floor</h1>
            <span className="year">2012 - 3:19</span>
          </div>
        </div>

        <div className="row film-section">
          <img
            src={filmsSRC["Justin Felix vs. Gavin Drago"][this.state.currentSize]}
            width={this.state.width}
            height={this.state.height}
            alt="Ballroom Dance Floor"
            className="banner-image"/>
          <div className="film-info">
            <h1 className="title">Justin Felix vs Gavin Drago</h1>
            <span className="year">2010 - 1:38</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortFilms;
