import React from 'react';
import Home from "./components/Home.jsx";
import Slider from "./components/Slider.jsx";
import Map from "./components/GoogleMap.jsx";
import { BrowserRouter as Router, Route  } from "react-router-dom";

import './App.css';
import GoogleMap from './components/GoogleMap.jsx';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/slider" component={Slider} />
        <Route path="/map" component={GoogleMap} />

    </Router>
  );
}

export default App;
