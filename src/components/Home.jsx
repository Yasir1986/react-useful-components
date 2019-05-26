import React from 'react';
import Burgermenu from "./Burgermenu.jsx";

import styled from "styled-components";
 
class Home extends React.Component {
  render () {
    return (
      <div>
          <Burgermenu />
          <Styleh1>
          <h1>React Useful Components</h1>
          <h3>Hamburger Menu</h3>
          </Styleh1>
      </div>
    );
  }
}

export default Home;

const Styleh1 = styled.h1`
    text-align: center;
`;      