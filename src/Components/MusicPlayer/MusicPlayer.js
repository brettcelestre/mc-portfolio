
import React, { Component } from 'react';
import ReactHTMLConverter from 'react-html-converter';
import './MusicPlayer.css';

import music from '../../assets/data/music.js';

class MusicPlayer extends Component {

constructor(props){
  super(props)

  const currentBand = props.match.params.band;
  const currentAlbum = props.match.params.album;

  function genUrlString(string) {
    return string.toLowerCase().split(' ').join('-');
  };
  
  // Finds correct album
  function findAlbum(album) {
    return currentAlbum == genUrlString(album.title) && currentBand == genUrlString(album.band);
  }

  this.state = {
    album: music[music.findIndex(findAlbum)]
  }

  this.buildPlayer = this.buildPlayer.bind(this);
}

render() {
  // Converts embeded soundcloud string into HTML
  const converter = new ReactHTMLConverter();

  return (
    <div className="container">
      <div className="row music-player">
        {converter.convert(this.state.album.embed)}
      </div>
    </div>
  );
}
}

export default MusicPlayer;
