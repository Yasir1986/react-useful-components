import React from "react";
import Slider from "react-slick";
import "../components/Assets/Css/slick.css";
import "../components/Assets/Css/slider.css";
import styled from "styled-components";

class SimpleSlider extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Styledh1>
      <h2>React Slider</h2>
      </Styledh1>
      <div className="container">
      
        <Slider {...settings}>
          <div>
            <h3>Slider 1</h3>
            <img src="http://placekitten.com/g/400/200" alt="img1" />
          </div>
          <div>
            <h3>Slider 2</h3>
            <img src="http://placekitten.com/g/400/200" alt="img2" />
          </div>
          <div>
            <h3>Slider 3</h3>
            <img src="http://placekitten.com/g/400/200" alt="img3" />
          </div>
        </Slider>
      </div>
      </div>
    );
  }
}

export default SimpleSlider;

const Styledh1 = styled.h1`
    text-align: center;
`;      