import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import Table from "./Table";


class Landing extends Component {
  render() {
    return (
      <div>

        <div>
          <Card />
        </div>

        <div className="row">
          <div className="col s12 center-align">
            <Table />
          </div>
        </div>
        
      </div>
    );
  }
}


export default Landing;