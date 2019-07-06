import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class DashboardCard extends Component {
    onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
    };

  render() {
    const { user } = this.props.auth;
    return (
      <div>
        { user.name ? (
            <div>
                <h4 className="">{user.name.split(" ")[0]}</h4>
                
            </div>
        ) : (
            <div>
                <h4>NO USERNAME</h4>
            </div>
        )}  
        </div>
    );
  }
}

DashboardCard.propTypes = {
    auth: PropTypes.object.isRequired
  };
  
  const mapStateToProps = state => ({
    auth: state.auth
  });
  
  export default connect(
    mapStateToProps
  )(DashboardCard);