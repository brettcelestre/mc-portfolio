import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';
import './assets/css/skeleton.css';
import './assets/css/normalize.css';
import './index.css';

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

ReactDOM.render(
  <BrowserRouter>
    <div className="nav-bar-spacer">
      <Route path="/" component={App}>
      </Route>
      <Switch>
        <Route exact path="/artwork/:medium" component={ImageViewer} />
        <Route name="short-films" path="/short-films" component={ShortFilms} />
        <Route name="album" path="/music/album/:album" component={MusicPlayer} />
        <Route name="music" path="/music" component={Music} />
        <Route name="store" path="/store" component={Store} />
        <Route name="links" path="/links" component={Links} />
        <Route name="about" path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
