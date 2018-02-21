
import React, { Component } from 'react';
import ReactHTMLConverter from 'react-html-converter';
import './MusicPlayer.css';

import music from '../../assets/data/music.js';

class MusicPlayer extends Component {

constructor(props){
  super(props)

  const currentAlbum = props.location.pathname.split('/')[3];
  
  function findAlbum(album) {
    const target = album.path.split('/')[1].toString();
    return currentAlbum == target;
  }

  this.state = {
    album: music[music.findIndex(findAlbum)]
  }

  this.buildPlayer = this.buildPlayer.bind(this);
}

buildPlayer() {
  // return (
  //   <div>{this.state.album.embed}<div>
  // );
  // console.log("ran");
  // return reactElement;
}

render() {
  const converter = new ReactHTMLConverter();
  // const reactElement = htmlToReactParser.Parser.parse(this.state.album.embed);

  console.log('test album = ', this.state.album);

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
