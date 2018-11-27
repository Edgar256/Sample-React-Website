import React, { Component } from "react";
/*import logo from './logo.svg';*/
import "./css/branding.css";
import "./css/styles.css";

/*Images here */
import glLogo from "./images/gl-logo.png";
import btnRed from "./images/btn-red.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="section-wrapper bg-maroon" id="startSection">
            <div className="section-wrapper-inner">
              <div className="logo-holder-side" />
              <div className="logo-holder">
                <img src={glLogo} alt="GeekLabel Logo" width="100%" />
              </div>
              <div className="logo-holder-side" />
            </div>
            <div className="section-wrapper-inner">
              <div className="slg-holder-side" />
              <div className="slg-holder">
                A team of self confessed geeks who are all about great digital
                design
              </div>
              <div className="slg-holder-side" />
            </div>
            <div className="section-wrapper-inner">
              <div className="arrow-holder-sect" />
              <div className="arrow-holder">
                <a href="#sectionOne">
                  {" "}
                  <img src={btnRed} alt="btn-red" width="100%" />
                </a>{" "}
              </div>
              <div className="arrow-holder-sect" />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
