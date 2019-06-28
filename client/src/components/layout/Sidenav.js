import React, { Component } from "react";
import { Link } from "react-router-dom";


class Sidenav extends Component {
  render() {
    return (
      <div>
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li>
                <div class="user-view">
                    <div class="background red">
                        {/* <img src="images/office.jpg" alt="background"/> */}
                    </div>
                    {/* <i class="material-icons">person_outline</i> */}
                    <div className="white valign-center align-center">
                        {/* <a href="#user"><i class="material-icons">person_outline</i></a> */}
                        <h2>LOGO</h2>
                    </div>
                    <span class="white-text name">John Doe</span>
                    <span class="white-text email">jdandturk@gmail.com</span>
                </div>
            </li>
            <li><a href="#!">First Sidebar Link</a></li>
            <li><a href="#!">Second Sidebar Link</a></li>
        </ul>
        {/* <a href={"google.com"} data-target="slide-out" class="sidenav-trigger"> */}
            {/* <i class="material-icons">menu</i> */}
        {/* </a> */}
      </div>
        
    );
  }
}


export default Sidenav;