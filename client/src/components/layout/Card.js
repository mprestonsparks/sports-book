import React, { Component } from "react";
// import { Link } from "react-router-dom";


class Card extends Component {
  render() {
    return (
        <div class="row valign-wrapper">
            <div class="col s12 valign">
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">
                        <span class="card-title">Card Title</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively.</p>
                    </div>
                </div>
            </div>
        </div>
              
    );
  }
}


export default Card;