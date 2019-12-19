import React, { Component } from "react";
import "./loader.less";
class Loader extends Component {
  state = {};
  render() {
    return (
      <div className="loader_parent">
        <div class="cube">
          <div class="side back">
            <div className="text">Take</div>
          </div>
          <div class="side left">
            <div className="text">Time</div>
          </div>
          <div class="side right">
            <div className="text">Things</div>
          </div>
          <div class="side top">
            <div className="text"></div>
          </div>
          <div class="side bottom">
            <div className="text"></div>
          </div>
          <div class="side front">
            <div className="text">Good</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
