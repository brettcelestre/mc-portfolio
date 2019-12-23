import React, { Component } from 'react';
import { WindowResizeListener } from 'react-window-resize-listener';
import './ShortFilms.css';

import youtubeWidth from './ShortFilms.css';

const filmData = require('../../assets/data/short-films.json');

const filmsSRC = {
  "The Art of Matthew Celestre": {
    small: require('../../assets/img/short-films/the-art-of-matthew-celestre/Banner_Small.jpg'),
    medium: require('../../assets/img/short-films/the-art-of-matthew-celestre/Banner_Medium.jpg'),
    large: require('../../assets/img/short-films/the-art-of-matthew-celestre/Banner_Large.jpg')
  },
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
  }

  constructor(props){
    super(props)
    this.state = {
      currentSize: 'large',
      width: 0,
      height: 0,
      videoUrl: '',
      theatreMode: false
    }

    this.windowSize = this.windowSize.bind(this);
    this.playFilm = this.playFilm.bind(this);
    this.closeTheatre = this.closeTheatre.bind(this);
  }

  windowSize(width, height) {
    if ( width >= 1100 && this.state.currentSize !== 'large' ) {
      this.setState({
          currentSize: 'large',
          width: filmData.sizes.large.width,
          height: filmData.sizes.large.height});
    } else if ( 1099 >= width && 800 <= width && this.state.currentSize !== 'medium' ) {
      this.setState({
        currentSize: 'medium',
        width: filmData.sizes.medium.width,
        height: filmData.sizes.medium.height});
    } else if ( 799 >= width && this.state.currentSize !== 'small' ) {
      this.setState({
        currentSize: 'small',
        width: filmData.sizes.small.width,
        height: filmData.sizes.small.height});
    }
  }

  playFilm(film) {
    switch(film){
      case 'the-art-of-matthew-celestre':
        this.setState({
          videoUrl: "https://www.youtube.com/embed/vYrx4Nv0rdo?rel=0&showinfo=0&autoplay=1&enablejsapi=1&modestbranding=0",
          theatreMode: true });
        break;
      case 'del-rio':
        this.setState({
          videoUrl: "https://www.youtube.com/embed/h8nbA3BLtbI?rel=0&showinfo=0&autoplay=1&version=3&enablejsapi=1",
          theatreMode: true });
        break;
      case 'ballroom':
        this.setState({
          videoUrl: "https://www.youtube.com/embed/qSpbsE7gabM?rel=0&showinfo=0&autoplay=1&enablejsapi=1",
          theatreMode: true });
        break;
      case 'gavin':
        this.setState({
          videoUrl: "https://www.youtube.com/embed/KCizRihPlU0?rel=0&showinfo=0&autoplay=1&enablejsapi=1",
          theatreMode: true });
        break;
    }
  }

  closeTheatre(){
    // Turns screen off
    this.setState({theatreMode: false});
    // Stops youtube video from playing
    let div = document.getElementById("screen");
    let iframe = div.getElementsByTagName("iframe")[0].contentWindow;
    iframe.postMessage('{"event":"command","func":"pauseVideo","args":""}','*');
  }

  render() {
    return (
      <div>
        <WindowResizeListener
          /*
          TODO: Get debounce to work. Currently at 100
          DEBOUNCE_TIME={4000}
          */
          onResize={windowSize => {
            this.windowSize(windowSize.windowWidth, windowSize.windowHeight)
          }
        }/>

        <div className="short-films">
          {/* <div className="row film-section" onClick={()=>{this.playFilm('the-art-of-matthew-celestre')}}>
            <img
              src={filmsSRC["The Art of Matthew Celestre"][this.state.currentSize]}
              width={this.state.width}
              height={this.state.height}
              alt="The Art of Matthew Celestre"
              className="banner-image"/>
            <div className="film-info">
              <h1 className="film-title">The Art of Matthew Celestre</h1>
              <span className="film-year">2019 - 2:28</span>
            </div>
          </div> */}

          <div className="row film-section" onClick={()=>{this.playFilm('del-rio')}}>
            <img
              src={filmsSRC["Del Rio"][this.state.currentSize]}
              width={this.state.width}
              height={this.state.height}
              alt="Del Rio"
              className="banner-image"/>
            <div className="film-info">
              <h1 className="film-title">Del Rio</h1>
              <span className="film-year">2014 - 8:24</span>
            </div>
          </div>

          <div className="row film-section" onClick={()=>{this.playFilm('ballroom')}}>
            <img
              src={filmsSRC["Ballroom Dance Floor"][this.state.currentSize]}
              width={this.state.width}
              height={this.state.height}
              alt="Ballroom Dance Floor"
              className="banner-image"/>
            <div className="film-info">
              <h1 className="film-title">Ballroom Dance Floor</h1>
              <span className="film-year">2011 - 3:19</span>
            </div>
          </div>

          <div className="row film-section" onClick={()=>{this.playFilm('gavin')}}>
            <img
              src={filmsSRC["Justin Felix vs. Gavin Drago"][this.state.currentSize]}
              width={this.state.width}
              height={this.state.height}
              alt="Ballroom Dance Floor"
              className="banner-image"/>
            <div className="film-info">
              <h1 className="film-title">Justin Felix vs Gavin Drago</h1>
              <span className="film-year">2010 - 1:38</span>
            </div>
          </div>
        </div>

        <div className={`theatre ${this.state.theatreMode ? '' : 'theatre-close'}`}>
          <div className="theatre-exit" onClick={this.closeTheatre}>
            <div className="x">Exit</div>
          </div>
          <div id="screen">
            <iframe
              className="youtube-video"
              src={this.state.videoUrl}
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

export default ShortFilms;