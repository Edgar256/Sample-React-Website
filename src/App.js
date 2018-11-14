import React, { Component } from 'react';
/*import logo from './logo.svg';*/
import 'images/gl-logo.png'
import './css/branding.css';
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div class="section-wrapper bg-maroon" id="startSection">
            <div class="section-wrapper-inner">
              <div class="logo-holder-side"></div>
              <div class="logo-holder"><img src="images/gl-logo.png" alt="GeekLabel Logo" width="100%"/></div>
              <div class="logo-holder-side"></div>    
            </div>
            <div class="section-wrapper-inner">   
              <div class="slg-holder-side"></div>
              <div class="slg-holder">A team of self confessed geeks who are all about great digital design</div>
              <div class="slg-holder-side"></div>       
            </div>
            <div class="section-wrapper-inner">   
              <div class="arrow-holder-sect"></div>
              <div class="arrow-holder"><a href="#sectionOne"> <img src="images/btn-red.png" width="100%"/></a> </div>
              <div class="arrow-holder-sect"></div>       
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
