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
import ImageViewer from './Components/ImageViewer/ImageViewer.js';
import ShortFilms from './Components/ShortFilms/ShortFilms.js';

ReactDOM.render(
  <BrowserRouter>
    <div className="nav-bar-spacer">
      <Route path="/" component={App}>
      </Route>
      <Switch>
        <Route path="/artwork/drawings/:id/:name" component={ImageViewer} />
        <Route path="/artwork/drawings" component={ImageViewer} />
        <Route path="/artwork/cross-hatchings/:id/:name" component={ImageViewer} />
        <Route path="/artwork/cross-hatchings" component={ImageViewer} />
        <Route path="/artwork/stipplings" component={ImageViewer} />
        <Route path="/artwork/stipplings/:id/:name" component={ImageViewer} />
        <Route path="/artwork/paintings" component={ImageViewer} />
        <Route path="/artwork/paintings/:id/:name" component={ImageViewer} />
        <Route path="/short-films" component={ShortFilms} />
        <Route path="/short-films/:name" component={ShortFilms} />
        <Route path="/music" component={Music} />
        <Route path="/store" component={Store} />
        <Route path="/links" component={Links} />
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
