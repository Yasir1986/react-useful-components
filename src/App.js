import React from 'react';
import Home from "./components/Home.jsx";
import Slider from "./components/Slider.jsx";
import { BrowserRouter as Router, Route  } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Home} />
        <Route path="/Slider" component={Slider} />
    </Router>
  );
}

export default App;
