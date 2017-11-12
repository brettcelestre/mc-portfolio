import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artmenu: false,
      medium: '',
    };
    this.artworkMenuEnter = this.artworkMenuEnter.bind(this);
    this.artworkMenuLeave = this.artworkMenuLeave.bind(this);
  }

  // Displays Dropdown
  artworkMenuEnter() {
    this.setState({artmenu: true});
  }
  // Hides dropdown
  artworkMenuLeave() {
    this.setState({artmenu: false});
  }

  render() {
    return (
      <div className="App">

        <div className="App-header">
          <div className="container">

            <div className="u-full-width">
              <Link to="/home"><h2 className="mainTitle">Matthew Celestre</h2></Link>
            </div>

            <div className="navigation u-full-width">
              <div className="option"
                   onMouseEnter={this.artworkMenuEnter}
                   onMouseLeave={this.artworkMenuLeave}>
                Artwork
                <div className={`artmenu ${this.state.artmenu ? 'visible' : ''}`}>
                  <Link to='/artwork/paintings'><div>Paintings</div></Link>
                  <Link to="/artwork/stipplings"><div>Stipplings</div></Link>
                  <Link to="/artwork/cross-hatchings"><div>Cross Hatchings</div></Link>
                  <Link to="/artwork/drawings"><div>Drawings</div></Link>
                </div>
              </div>
              <Link className="option" to="/short-films">
                  Short Films
              </Link>
              <Link className="option" to="/music">
                  Music
              </Link>
              <Link className="option" to="/store">
                  Store
              </Link>
              <Link className="option" to="/about">
                  About
              </Link>
              <Link className="option" to="/links">
                  Links
              </Link>
            </div>

          </div>
        </div>

      </div>
    );
  }

}

export default App;
