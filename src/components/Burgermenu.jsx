import React from 'react';
import { push as Menu } from 'react-burger-menu'
import './menu.css'
import logo from "./icon.png"
 
class Burgermenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }
 
  render () {
    return (
      <div>
      <Menu 
      isOpen= { false }
      width={ 280 }
      customBurgerIcon={ <img src={logo} /> }
      >
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
      </Menu>
      </div>
    
      
    );
  }
}

export default Burgermenu;