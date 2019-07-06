import React, { Component } from "react";
import DashboardCard from "./DashboardCard";

import Table from "./Table";
// import PostForm from "./Postform";


class Landing extends Component {
  render() {
    return (
      <div>
        <div>
          <DashboardCard />
        </div>
        <div className="row">
          <div className="col s12 center-align">
            {/* <PostForm /> */}
            <Table />
          </div>
        </div>
      </div>
    );
  }
}


export default Landing;