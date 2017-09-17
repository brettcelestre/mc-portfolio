import React, { Component } from 'react';
import './Links.css';

import links from '../../assets/data/links.json';

class Links extends Component {

  render() {
    const linkItems = links.map((link, i) => {
      return (
        <a href={link.url} key={i}>
          <div className='linkItem'>
            <h2 className='title'>{link.title}</h2>
            <h4 className='description'>{link.description}</h4>
          </div>
        </a>
      )
    });

    return (
      <div className="container linkSection">
        {linkItems}
      </div>
    );
  }
}

export default Links;
