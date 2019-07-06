import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <nav className="z-depth-0"
        // style='
        //   background-color: "light-green";
        //   '
      >
        <div className="nav-wrapper background blue darken-4">
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="sass.html">Winner Board</a></li>
            <li><a href="badges.html">FAQ</a></li>
            <li><a href="collapsible.html">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}


export default Navbar;