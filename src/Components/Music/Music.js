
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Music.css';

import music from '../../assets/data/music.js';

class Music extends Component {

  constructor(props){
    super(props)
    this.state = {
      musicData: music
    }

    console.log('MUSIC DATA ===', this.state.musicData);

    this.buildAlbum = this.buildAlbum.bind(this);
    this.listen = this.listen.bind(this);
  }

  listen(title) {
    console.log(title);
  }

  buildPlayer(album){
    // const mp3s = data.mp3s.map((path, i ) => {
    // });
  
    // const trackList = data.trackList.map((track, i ) => {
    //   // console.log("Track List ", i, track);
    //   return (
    //     <li>{track}</li>
    //   );
    // });
  
    // console.log('trackList = ', trackList);
  }

  buildAlbum() {
    const results = this.state.musicData.map((data, i) => {
      const largeCover = require(`../../assets/music/${data.path}/Cover_Large.jpg`);
      // const largeSmall = require(`../../assets/music/${data.path}/Cover_Small.jpg`);
      
      // onClick={() => this.listen(data.title)}

      const albumString = data.title.toLowerCase().split(' ').join('-');
      console.log('albumString = ', albumString);
      const musicPath = `/music/album/${albumString}`;

      return (
        <Link to={musicPath}>
          <div className="album" key={i}>
            <div className="cover-art">
              <img src={largeCover} />
            </div>
            <div className="description">
              <h1>{data.title}</h1>
              <h2>{data.band}</h2>
              <h2>{data.year} | {data.type}</h2>
            </div>
          </div>
        </Link>
      )
    });

    return results;
  }

  render() {

    return (
      <div className="container">
        <div className="row music-section">
          {this.buildAlbum()}
        </div>
      </div>
    );
  }
}

export default Music;
