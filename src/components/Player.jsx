import React from 'react';
import Burgermenu from "./Burgermenu.jsx";
import styled from "styled-components";
import ReactPlayer from 'react-player'

 class Player extends React.Component {
  render() {
    return (
      <Wrapper>
        <Burgermenu />
        <h4>React Player</h4>
        <StyledPlayer>
            <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U'  
              playing
              controls
              pip
              light
              volume
            />
        </StyledPlayer>
    
     </Wrapper>
    );
  }
}


export default Player;

const Wrapper = styled.div`
    text-align: center;
`;

const StyledPlayer = styled.div`
    display: flex;
    margin-top: 10%;
    justify-content: center;
`;

