import React, { Component } from "react";
import "./App.css";
//import components
import MinimalResume from "./components/MinimalResume.js";
import NavBar from "./components/NavBar.js";

import "./mobile_media_query.css"; //order matters here
// TODO: seperate svg from js files --> import logo from './logo.svg';
// TODO: seperate .remove class from App.css
// TODO: fix react warnings in console
// TODO: test
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="wrapper">
        <NavBar></NavBar>
       <MinimalResume></MinimalResume>
      </div>
      
    );
  }
}
export default App;
