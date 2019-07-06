import React, { Component } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import DashboardCard from "./DashboardCard";

import Table from "./Table";
import PostForm from "./Postform";


class Landing extends Component {
  render() {
    return (
      <div>

        <div>
          <Card />
          <DashboardCard />
        </div>

        <div className="row">
          <div className="col s12 center-align">
            <PostForm />
            <hr />
            <Table />
          </div>
        </div>
        
      </div>
    );
  }
}


export default Landing;