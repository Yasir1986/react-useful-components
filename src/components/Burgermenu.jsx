import React from 'react';
import { elastic as Menu } from 'react-burger-menu';
import '../components/Assets/Css/menu.css';
import logo from "./Assets/Img/icon.png";
 
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
      customBurgerIcon={ <img src={logo} alt="logo" /> }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="slider" className="menu-item" href="/slider">Slider</a>
        <a id="map" className="menu-item" href="/map">Google Map</a>
        <a id="date" className="menu-item" href="/date">Date Picker</a>
        <a id="player" className="menu-item" href="/player">React Player</a>

        <a onClick={ this.showSettings } className="menu-item--small" href="/">Settings</a>
      </Menu>
      </div>
    
      
    );
  }
}

export default Burgermenu;