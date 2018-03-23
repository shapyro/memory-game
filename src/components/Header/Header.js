import React from 'react';
import './Header.css';

const Header = ({ title }) => (
  <header className='top'>
    <h1>{title}</h1>
  </header>
)

export default Header;