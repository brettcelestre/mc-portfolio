import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/skeleton.css';
import './assets/css/normalize.css';
import './index.css';
import paintings from './assets/data/paintings.js';
import crossHatchings from './assets/data/cross-hatchings.js';

import App from './Components/App/App.js';
import About from './Components/About/About.js';
import Toolbar from './Components/Toolbar/Toolbar.js';
import Home from './Components/Home/Home.js';
import Links from './Components/Links/Links.js';
import Store from './Components/Store/Store.js';
import Music from './Components/Music/Music.js';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer.js';
import ImageViewer from './Components/ImageViewer/ImageViewer.js';
import ShortFilms from './Components/ShortFilms/ShortFilms.js';

const buildImageRouteName = (name) => {
  let theName = [];
  const x = name.split(' ');
  x.forEach((word) => {
    let y = word.split('')[0];
    let update = y;
    if (isNaN(y) && typeof y === 'string') {
      update = word.length > 1 ? y.toUpperCase() + word.substr(1) : y.toUpperCase();;
    };
    theName.push(update);
  });
  return theName.join('-').toLowerCase();
}

ReactDOM.render(
  <BrowserRouter>
    <div className="nav-bar-spacer">
      <Route path="/" component={App}>
      </Route>
      <Switch>
        <Route name="artwork" path="/artwork/:medium/:piece" component={ImageViewer} />
        <Route name="short-films" path="/short-films" component={ShortFilms} />
        <Route name="album" path="/music/:band/:album" component={MusicPlayer} />
        <Route name="music" path="/music" component={Music} />
        <Route name="store" path="/store" component={Store} />
        <Route name="links" path="/links" component={Links} />
        <Route name="about" path="/about" component={About} />
        <Redirect to={{
          pathname: `/artwork/cross-hatchings/${buildImageRouteName(crossHatchings.data[0].title)}`
        }}/>
        <Route component={ImageViewer} />
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
