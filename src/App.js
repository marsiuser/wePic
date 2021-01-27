import React, { Component }  from 'react';
import "./reset.css";
import './App.css';
import Header from "./сomponents/Header/Header";
import Welcome from "./сomponents/Welcome/Welcome";
import HowWorks from "./сomponents/HowWorks/HowWorks";
import Reviews from "./сomponents/Reviews/Reviews";
import WhoWeAre from "./сomponents/WhoWeAre/WhoWeAre";
// import 'react-owl-carousel2/style.css';

function App() {
  return (
    <div className="App">
        <Header />
        <Welcome />
        <HowWorks />
        <Reviews />
        <WhoWeAre />
    </div>
  );
}

export default App;
