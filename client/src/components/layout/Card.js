import React, { Component } from "react";
// import { Link } from "react-router-dom";


class Card extends Component {
  render() {
    return (
        <div className="row valign-wrapper">
            <div className="col s12 valign">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">HEADER</span>
                        <p></p>
                        <p>Probably carosel through some data like "top winners", etc</p>
                    </div>
                </div>
            </div>
        </div>
              
    );
  }
}


export default Card;