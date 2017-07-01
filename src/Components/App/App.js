import React, { Component } from 'react';
import Content from '../Content/Content'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">

        <div className="App-header container">

          <div className="u-full-width">
            <h2 className="mainTitle">Matthew Celestre</h2>
          </div>

          <div className="navigation u-full-width">
            <div className="option">
              Artwork
            </div>
            <div className="option">
              Short Films
            </div>
            <div className="option">
              Music
            </div>
            <div className="option">
              Store
            </div>
            <div className="option">
              About
            </div>
          </div>

        </div>


        <Content />

      </div>
    );
  }

}

export default App;
