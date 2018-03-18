
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

    this.buildAlbum = this.buildAlbum.bind(this);
  }

  buildAlbum() {
    const genUrlString = (string) => {
      return string.toLowerCase().split(' ').join('-');
    };

    const results = this.state.musicData.map((data, i) => {
      const largeCover = require(`../../assets/music/${data.path}/Cover_Large.jpg`);
      const musicPath = `/music/${genUrlString(data.band)}/${genUrlString(data.title)}`;

      return (
        <Link to={musicPath}>
          <div className="album six columns" key={i}>
            <img 
              src={largeCover}
              className="cover-art" />
            <div className="description">
              <h1>{data.title}</h1>
              <h2>{data.band}</h2>
              <h2 className="year">{data.year} | {data.type}</h2>
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
