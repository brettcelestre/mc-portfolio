import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import './assets/css/skeleton.css';
import './assets/css/normalize.css';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
