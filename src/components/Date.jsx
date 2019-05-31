import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import Burgermenu from "./Burgermenu.jsx";
import styled from "styled-components";



 class Date extends React.Component {
  render() {
    return (
      <Wrapper>
        <Burgermenu />
         <h2>Date Picker</h2>
           <p>Please type a day:</p>
      <DayPickerInput onDayChange={day => console.log(day)} />
    
     </Wrapper>
    );
  }
}


export default Date;

const Wrapper = styled.div`
    text-align: center;
`;

