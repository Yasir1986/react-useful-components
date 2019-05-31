import React from 'react';
import Home from "./components/Home.jsx";
import Slider from "./components/Slider.jsx";
import { BrowserRouter as Router, Route  } from "react-router-dom";
import GoogleMap from "./components/GoogleMap.jsx";
import Date from "./components/Date";
import './App.css';


function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/slider" component={Slider} />
        <Route path="/map" component={GoogleMap} />
        <Route path="/date" component={Date} />

    </Router>
  );
}

export default App;
