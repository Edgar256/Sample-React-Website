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
        <div className="section-wrapper bg-maroon" id="startSection">
          <div className="section-wrapper-inner">
            <div className="logo-holder-side" />
            <div className="logo-holder">
              <img src="images/gl-logo.png" alt="GeekLabel Logo" width="100%" />
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
                <img src="images/btn-red.png" width="100%" />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper" id="sectionOne">
          <div className="section-wrapper-inner">
            <div className="mockup-holder-side" />
            <div className="mockup-holder">
              <img src="images/mockups.png" alt="mockup image" width="100%" />{" "}
            </div>
            <div className="mockup-holder-side" />
          </div>
          <div className="section-wrapper-inner">
            <div className="width-20" />
            <div className="width-60 descr-txt">
              Some agencies love <span className="txt-maroon">design</span>, but
              don't know how to build.
            </div>
            <div className="width-20" />
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              {" "}
              <a href="#sectionTwo">
                <img src="images/btn-red.png" width="100%" />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper" id="sectionTwo">
          <div className="section-wrapper-inner">
            <div className="mockup-holder-side" />
            <div className="mockup-holder">
              <img src="images/build.png" alt="mockup image" width="100%" />{" "}
            </div>
            <div className="mockup-holder-side" />
          </div>
          <div className="section-wrapper-inner">
            <div className="width-20" />
            <div className="width-60" style="color: #3d3b3e;">
              Some agencies know how to{" "}
              <span className="txt-maroon">build</span> but can't do design
            </div>
            <div className="width-20" />
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              <a href="#sectionThree">
                {" "}
                <img src="images/btn-red.png" alt="btn red" width="100%" />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper" id="sectionThree">
          <div className="section-wrapper-inner">
            <div className="mockup-holder-side" />
            <div className="mockup-holder">
              <img src="images/solution.png" alt="solution" width="100%" />{" "}
            </div>
            <div className="mockup-holder-side" />
          </div>
          <div className="section-wrapper-inner">
            <div className="width-20" />
            <div className="width-60" style="color: #3d3b3e;">
              We love <span className="txt-maroon">both</span>
            </div>
            <div className="width-20" />
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              <a href="#sectionFour">
                {" "}
                <img src="images/btn-red.png" alt="btn red" width="100%" />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper bg-white" id="sectionFour">
          <div className="section-wrapper-inner">
            <div className="header-side" />
            <div className="header">Services </div>
            <div className="header-side" />
          </div>
          <div className="ser-main">
            <div className="width-10" />
            <div className="ser-main-inner">
              <div className="img-ser">
                <img src="images/web-dev.png" alt="web dev" width="50%" />
              </div>
              <div className="ser-txt">Development</div>
            </div>
            <div className="ser-main-inner">
              <div className="img-ser">
                <img src="images/design.png" alt="design" width="50%" />
              </div>
              <div className="ser-txt">Design</div>
            </div>
            <div className="ser-main-inner">
              <div className="img-ser">
                <img src="images/branding.png" alt="branding" width="50%" />
              </div>
              <div className="ser-txt">Branding</div>
            </div>
            <div className="ser-main-inner">
              <div className="img-ser">
                <img
                  src="images/ux-research.png"
                  alt="ux research"
                  width="50%"
                />
              </div>
              <div className="ser-txt">UX Reseach</div>
            </div>
            <div className="width-10" />
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              <a href="#sectionFive">
                {" "}
                <img
                  src="images/ghost-btn-black.png"
                  alt="ghost btn black"
                  width="100%"
                />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper" id="sectionFive">
          <div className="section-wrapper-inner">
            <div className="header-side" />
            <div className="header">Clients </div>
            <div className="header-side" />
          </div>
          <div className="ptnr-sctn">
            <div className="width-12">
              <img
                src="images/chevron-left.png"
                alt="chevron left"
                width="10%"
              />
            </div>
            <div className="width-25">
              <img src="images/logo-tpg.png" alt="logo tpg" width="50%" />{" "}
            </div>
            <div className="width-25">
              <img src="images/logo-tvs.png" alt="logo tvs" width="50%" />
            </div>
            <div className="width-25">
              <img src="images/logo-pshe.png" alt="logo pshe" width="50%" />
            </div>
            <div className="width-12">
              <img
                src="images/chevron-right.png"
                alt="chevron right"
                width="10%"
              />
            </div>
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              <a href="#sectionSix">
                {" "}
                <img
                  src="images/ghost-btn-black.png"
                  alt="ghost btn black"
                  width="100%"
                />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div className="section-wrapper" id="sectionSix">
          <div className="section-wrapper-inner">
            <div className="header-side" />
            <div className="header">How to find us </div>
            <div className="header-side" />
          </div>
          <div className="container-map">
            <div id="map" />
            <div className="map-pin">
              <img src="images/map-pin.png" alt="map-pin.png" width="100%" />
            </div>
          </div>
          <div className="section-wrapper-inner">
            <div className="arrow-holder-sect" />
            <div className="arrow-holder">
              <a href="#sectionSeven">
                {" "}
                <img src="images/btn-red.png" alt="btn red" width="100%" />
              </a>{" "}
            </div>
            <div className="arrow-holder-sect" />
          </div>
        </div>

        <div
          className="section-wrapper"
          style="/*margin: 0px 0px -30px 0px;*/"
          id="sectionSeven"
        >
          <div className="section-wrapper-inner">
            <div className="header-side" />
            <div className="header">Contact </div>
            <div className="header-side" />
          </div>

          <div className="container-contact">
            <form>
              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt">
                  <input type="text" name="name" placeholder="Name" />{" "}
                </div>
                <div className="input-holder-txt-side" />
              </div>

              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt">
                  <input type="email" name="name" placeholder="Email" />{" "}
                </div>
                <div className="input-holder-txt-side" />
              </div>

              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt">
                  <textarea
                    type="email"
                    name="message"
                    id="message"
                    placeholder="Message"
                    style="height:200px"
                  >
                    {" "}
                  </textarea>
                </div>
                <div className="input-holder-txt-side" />
              </div>

              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt">
                  <button>Send Message</button>
                </div>
                <div className="input-holder-txt-side" />
              </div>

              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt footer-txt">
                  Or phone on: 01923 220121
                </div>
                <div className="input-holder-txt-side" />
              </div>

              <div className="input-wrapper">
                <div className="input-holder-txt-side" />
                <div className="input-holder-txt footer-txt">
                  Or Email at info@compucorp.co.uk
                </div>
                <div className="input-holder-txt-side" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
