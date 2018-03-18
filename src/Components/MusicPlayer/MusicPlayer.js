
import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import './MusicPlayer.css';

import music from '../../assets/data/music.js';

class MusicPlayer extends Component {

constructor(props){
  super(props)

  const currentBand = props.match.params.band;
  const currentAlbum = props.match.params.album;

  const genUrlString = (string) => {
    return string.toLowerCase().split(' ').join('-');
  };
  
  // Finds correct album
  const findAlbum = (album) => {
    return currentAlbum == genUrlString(album.title) && currentBand == genUrlString(album.band);
  }

  this.state = {
    album: music[music.findIndex(findAlbum)]
  }
}

render() {
  return (
    <div className="container">
      <div className="row music-player">
        {ReactHtmlParser(this.state.album.embed)}
      </div>
    </div>
  );
}
}

export default MusicPlayer;
