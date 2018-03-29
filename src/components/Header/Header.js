import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className='top'>
      <span>
      <ul>
        <li className = 'brand'>{this.props.title}</li>
        <li>{this.props.message}</li>
        <li>{this.props.score}{this.props.topScore}</li>
      </ul>
      </span>
    </header>
    )
  }

}

export default Header;