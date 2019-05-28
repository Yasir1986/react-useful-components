import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Burgermenu from "./Burgermenu.jsx";
import styled from "styled-components";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class Map extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
        <div>
        <Burgermenu />
      <StyledMap> 
      <StyledTitle>
          <h1>Google Map</h1>
          </StyledTitle>
        <GoogleMapReact
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
          yesIWantToUseGoogleMapApiInternals
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
        </StyledMap>
      </div>
    );
  }
}

export default Map;

const StyledTitle = styled.div`
    text-align: center;
`;

const StyledMap = styled.div`
    height: 80vh;
    width: 80%;
    margin: auto;
`;