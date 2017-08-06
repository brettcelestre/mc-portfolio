import React, { Component } from 'react';
import './ShortFilms.css';

class ShortFilms extends Component {

  render() {
    return (
      <div className="container">
        <div className="row film-section">
          <h1 className="title">Del Rio</h1>
          <span className="year">2013 - 8:31</span>
        </div>

        <div className="row film-section">
          <h1 className="title">Ballroom Dance Floor</h1>
          <span className="year">2010 - Runtime 8:31</span>
        </div>

        <div className="row film-section">
          <h1 className="title">Justin Felix vs Gavin Drago</h1>
          <span className="year">2009 - Runtime 8:31</span>
        </div>
      </div>
    );
  }
}

export default ShortFilms;
