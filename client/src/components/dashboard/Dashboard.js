import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
// import Card from "../layout/Card";
import DashboardCard from "../layout/DashboardCard";


import BetTable from "../layout/BetTable"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    // const { user } = this.props.auth;

return (
      <div>
        <div>
          <DashboardCard />
          {/* <Card /> */}
        </div>
          <BetTable />
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);