import React, { Component } from 'react';
import './Toolbar.css';
import '../App/App.css';

class Toolbar extends Component {

  render() {
    return (
      <div className="container toolbar">
        <div className="title-year row">
          <div className="u-full-width">
            <span className="title">The Casino</span> <span className="year">- 2017</span>
          </div>
        </div>
        <div className="info row">
          <div className="u-full-width">
            <span className="description">Oil on Canvas</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Toolbar;
