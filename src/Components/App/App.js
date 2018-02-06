
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './App.css';
const menuIcon = require('../../assets/svg/android-more-vertical.svg');

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      artmenu: false,
      medium: '',
      mobileMenu: false,
      fade: false
    };
    this.artworkMenuEnter = this.artworkMenuEnter.bind(this);
    this.artworkMenuLeave = this.artworkMenuLeave.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
  }

  // Displays Dropdown
  artworkMenuEnter() {
    this.setState({artmenu: true});
  }
  // Hides dropdown
  artworkMenuLeave() {
    this.setState({artmenu: false});
  }

  menuToggle() {
    console.log('menu toggle');
    if (this.state.mobileMenu) {
      console.log('false');
      this.setState({
        mobileMenu: false,
        fade: false
      });
    } else {
      console.log('true');
      this.setState({
        mobileMenu: true,
        fade: true
      });
    }
  }

  render() {
    return (
      <div className="App">

        <div className="menu-button" onClick={this.menuToggle}>
          {/* <image className="menu-icon" src={menuIcon} width="30px" height="30px" /> */}
          <ReactSVG
            path={menuIcon}
            style={{width: 30, height: 30}}
            className="menu-icon"
            wrapperClassName="menu-icon"
          />
        </div>

        <div className={this.state.mobileMenu ? "navigation-mobile menu-show" : "navigation-mobile"}>
          <ul>
            <Link to='/artwork/paintings' onClick={this.menuToggle}><li>Paintings</li></Link>
            <Link to="/artwork/stipplings" onClick={this.menuToggle}><li>Stipplings</li></Link>
            <Link to="/artwork/cross-hatchings" onClick={this.menuToggle}><li>Cross Hatchings</li></Link>
            <Link to="/artwork/drawings" onClick={this.menuToggle}><li>Drawings</li></Link>
            <Link to="/short-films" onClick={this.menuToggle}><li>Short Films</li></Link>
            <Link to="/music" onClick={this.menuToggle}><li>Music</li></Link>
            <Link to="/store" onClick={this.menuToggle}><li>Store</li></Link>
            <Link to="/about" onClick={this.menuToggle}><li>About</li></Link>
            <Link to="/links" onClick={this.menuToggle}><li>Links</li></Link>
          </ul>
        </div>

        <div className={this.state.fade ? "fade-show" : "fade-no-show"} onClick={this.menuToggle}></div>

        <div className="App-header">
          <div className="container">

            <div className="u-full-width">
              {/* <Link to="/home"> */}
              <h2 className="mainTitle">Matthew Celestre</h2>
              {/* </Link> */}
            </div>


            <div className="navigation">
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
