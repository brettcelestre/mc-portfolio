import React, { Component } from 'react';
import './Content.css';
import bio from './matthew_celestre_painting_01.jpg';

import Toolbar from '../Toolbar/Toolbar';

class Content extends Component {

  render() {
    return (
      <div className="content">
        <img src={bio} alt="hi" className="gallery-image"/>

        <Toolbar />

      </div>
    );
  }

}

export default Content;


 // width="1500" height="1077" 
