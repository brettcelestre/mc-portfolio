
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import ReactSVG from 'react-svg';

import './App.css';
const menuIcon = require('../../assets/svg/android-more-vertical.svg');

const galleryData = {
  paintings: require('../../assets/data/paintings.js'),
  stipplings: require('../../assets/data/stipplings.js'),
  crossHatchings: require('../../assets/data/cross-hatchings.js'),
  drawings: require('../../assets/data/drawings.js')
};

class App extends Component {

  constructor(props) {
    super(props)
    this.createUrlPathForPiece = this.createUrlPathForPiece.bind(this);

    this.state = {
      artmenu: false,
      paintingsUrl: this.createUrlPathForPiece('paintings', true),
      drawingsUrl: this.createUrlPathForPiece('drawings', true),
      crossHatchingUrl: this.createUrlPathForPiece('crossHatchings', true),
      stipplingsUrl: this.createUrlPathForPiece('stipplings', true),
      medium: '',
      mobileMenu: false,
      fade: false
    };
    this.artworkMenuEnter = this.artworkMenuEnter.bind(this);
    this.artworkMenuLeave = this.artworkMenuLeave.bind(this);
    this.menuToggle = this.menuToggle.bind(this);
  }

  // Creates the Link URL for each section with whatever the latest piece of artwork is called
  createUrlPathForPiece(section, artwork) {
    let pieceName;
    if (galleryData[section].data[0].title.includes(' ')) {
      pieceName = galleryData[section].data[0].title.toLowerCase().split(' ').join('-');
    } else {
      pieceName = galleryData[section].data[0].title.toLowerCase();
    }
    if (section === 'crossHatchings') {
      section = 'cross-hatchings';
    }
    return artwork ? `/artwork/${section}/${pieceName}` : `/${section}/${pieceName}`;
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
    if (this.state.mobileMenu) {
      this.setState({
        mobileMenu: false,
        fade: false
      });
    } else {
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
          <ReactSVG
            path={menuIcon}
            style={{width: 30, height: 30}}
            className="menu-icon"
            wrapperClassName="menu-icon"
          />
        </div>

        <div className={this.state.mobileMenu ? "navigation-mobile menu-show" : "navigation-mobile"}>
          <ul>
            <Link to={this.state.paintingsUrl} onClick={this.menuToggle} title="Paintings"><li>Paintings</li></Link>
            <Link to={this.state.stipplingsUrl}  onClick={this.menuToggle} title="Stipplings"><li>Stipplings</li></Link>
            <Link to={this.state.crossHatchingUrl} onClick={this.menuToggle} title="Cross Hatchings"><li>Cross Hatchings</li></Link>
            <Link to={this.state.drawingsUrl} onClick={this.menuToggle} title="Drawings"><li>Drawings</li></Link>
            <Link to="/short-films" onClick={this.menuToggle} title="Short Films"><li>Short Films</li></Link>
            <Link to="/music" onClick={this.menuToggle} title="Music"><li>Music</li></Link>
            <Link to="/store" onClick={this.menuToggle} title="Store"><li>Store</li></Link>
            <Link to="/about" onClick={this.menuToggle} title="About"><li>About</li></Link>
            <Link to="/links" onClick={this.menuToggle} title="Links"><li>Links</li></Link>
          </ul>
        </div>

        <div className={this.state.fade ? "fade-show" : "fade-no-show"} onClick={this.menuToggle}></div>

        <div className="App-header">
          <div className="container">

            <div className="u-full-width">
              <h2 className="mainTitle">Matthew Celestre</h2>
            </div>

            <div className="navigation">
              <div className="option"
                   onMouseEnter={this.artworkMenuEnter}
                   onMouseLeave={this.artworkMenuLeave}
                   title="Artwork">
                Artwork
                <div className={`artmenu ${this.state.artmenu ? 'visible' : ''}`}>
                  <Link to={this.state.paintingsUrl} ><div title="Paintings">Paintings</div></Link>
                  <Link to={this.state.stipplingsUrl}><div title="Stipplings">Stipplings</div></Link>
                  <Link to={this.state.crossHatchingUrl}><div title="Cross Hatchings">Cross Hatchings</div></Link>
                  <Link to={this.state.drawingsUrl}><div title="Drawings">Drawings</div></Link>
                </div>
              </div>
              <Link className="option" to="/short-films" title="Short Films">
                  Short Films
              </Link>
              <Link className="option" to="/music" title="Music">
                  Music
              </Link>
              <Link className="option" to="/store" title="Store">
                  Store
              </Link>
              <Link className="option" to="/about" title="About">
                  About
              </Link>
              <Link className="option" to="/links" title="Links">
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
